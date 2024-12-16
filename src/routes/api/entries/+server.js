export const prerender = true; // Enable pre-rendering
import { slug } from 'github-slugger';

// Import posts eagerly
const posts = Object.entries(import.meta.glob('/content/posts/**/*.md', { eager: true }));

const getMetadata = (filepath, entry) => {
	const {
		metadata: { type, tags = [], ...metadata }
	} = entry;
	const slugValue = filepath
		.replace(/(\/index)?\.md/, '')
		.split('/')
		.pop();

	return {
		...metadata,
		content: entry.default.render().html,
		slug: slugValue,
		tag: type?.split(' ').shift().toLowerCase() || null,
		tags
	};
};

// Get all entries and tags
const getEntriesAndTags = () => {
	const entries = posts
		.map(([filepath, entry]) => getMetadata(filepath, entry))
		.filter((entry) => !entry.draft)
		.sort((a, b) => b.date - a.date); // Sort by date, newest first

	const tagMap = new Map();

	entries.forEach(({ tags }) => {
		tags.forEach((tag) => {
			const slugValue = slug(tag);
			if (tagMap.has(slugValue)) {
				tagMap.get(slugValue).count++;
			} else {
				tagMap.set(slugValue, { text: tag, slug: slugValue, count: 1 });
			}
		});
	});

	const tagList = Array.from(tagMap.values()).sort((a, b) => b.text.localeCompare(a.text));

	return { entries, tags: tagList };
};

// SvelteKit API Endpoint
/** @type {import('./$types').RequestHandler} */
export function GET() {
	try {
		const { entries, tags } = getEntriesAndTags();

		return new Response(JSON.stringify({ entries, tags }), {
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'public, max-age=43200, immutable', // Cache for 6 Hours
				Vary: 'Accept-Encoding' // Handle different encodings
			}
		});
	} catch (error) {
		console.error('Error fetching entries:', error);
		return new Response(JSON.stringify({ error: 'Failed to fetch entries' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
}

// export const prerender = true;
// import { slug } from 'github-slugger';

// // Import posts eagerly
// const posts = Object.entries(import.meta.glob('/content/posts/**/*.md', { eager: true }));

// const getMetadata = (filepath, entry) => {
// 	const { metadata: { type, tags = [], ...metadata } } = entry;
// 	const slugValue = filepath
// 		.replace(/(\/index)?\.md/, '')
// 		.split('/')
// 		.pop();

// 	return {
// 		...metadata,
// 		content: entry.default.render().html,
// 		slug: slugValue,
// 		tag: type?.split(' ').shift().toLowerCase() || null,
// 		tags
// 	};
// };

// // Get all entries and tags
// const getEntriesAndTags = () => {
// 	const entries = posts
// 		.map(([filepath, entry]) => getMetadata(filepath, entry))
// 		.filter((entry) => !entry.draft)
// 		.sort((a, b) => b.date - a.date); // Sort by date, newest first

// 	const tagMap = new Map();

// 	entries.forEach(({ tags }) => {
// 		tags.forEach((tag) => {
// 			const slugValue = slug(tag);
// 			if (tagMap.has(slugValue)) {
// 				tagMap.get(slugValue).count++;
// 			} else {
// 				tagMap.set(slugValue, { text: tag, slug: slugValue, count: 1 });
// 			}
// 		});
// 	});

// 	const tagList = Array.from(tagMap.values()).sort((a, b) => b.text.localeCompare(a.text));

// 	return { entries, tags: tagList };
// };

// // SvelteKit API Endpoint
// /** @type {import('./$types').RequestHandler} */
// export function GET() {
// 	try {
// 		const { entries, tags } = getEntriesAndTags();

// 		return new Response(
// 			JSON.stringify({ entries, tags }),
// 			{
// 				headers: { 'Content-Type': 'application/json' }
// 			}
// 		);
// 	} catch (error) {
// 		console.error('Error fetching entries:', error);
// 		return new Response(
// 			JSON.stringify({ error: 'Failed to fetch entries' }),
// 			{ status: 500, headers: { 'Content-Type': 'application/json' } }
// 		);
// 	}
// }
