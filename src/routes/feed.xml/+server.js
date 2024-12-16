import RSS from 'rss';
import { config } from '$lib/config.js';
import { getEntries } from '$lib/utils/entries.js';

export const prerender = true;

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET() {
	try {
		const feed = new RSS({
			title: config.title + ' - RSS Feed',
			site_url: config.siteUrl,
			feed_url: config.siteUrl + '/rss.xml'
		});

		const posts = getEntries('posts');
		posts.forEach((post) => {
			feed.item({
				title: post.title,
				url: config.siteUrl + `/${post.slug}`,
				date: post.date,
				description: post.summary
			});
		});

		// Set cache to 12 hours (43,200 seconds)
		return new Response(feed.xml({ indent: true }), {
			headers: {
				'Cache-Control': `max-age=0, s-maxage=${43200}`, // 12 hours
				'Content-Type': 'application/rss+xml'
			}
		});
	} catch (err) {
		return new Response('Error generating RSS feed', {
			status: 500
		});
	}
}
