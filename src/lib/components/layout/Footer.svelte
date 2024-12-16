<script>
	import { config } from '$lib/config';
	import SocialIcon from '$lib/components/SocialIcon.svelte';

	let year = new Date().getFullYear();
</script>

<footer>
	<div class="mt-10 flex flex-col items-center border-t pt-6 gap-2">
		<!-- <div class="mb-4 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
			We, at bflix.icu, operate as a listing and bookmarking site, providing links to both
			free and paid websites for your convenience. Please note that we are not responsible for the
			content found on these external sites. We do not host, distribute, or promote any pirated
			movies or engage in any form of piracy. Our platform solely offers movie reviews, discussions
			on the latest films, and other related topics. We encourage our users to support the film
			industry by accessing content through legal and authorized channels.
		</div> -->
		<div class="mb-4 flex space-x-2 text-sm italic text-gray-500 dark:text-gray-400">
			Disclaimer: At bflix.icu, our mission is to provide movie reviews and information solely for
			entertainment purposes. We do not host, distribute, or endorse any pirated content and
			strongly encourage our users to support the film industry by accessing movies through
			legitimate and legal channels. All movie images and banners used on our site are for
			illustrative purposes only. We do not claim ownership of these materials; all rights remain
			with their respective copyright holders. Please note that bflix.icu is the only domain we
			operate and is not affiliated with any other domains, particularly those promoting pirated
			content.
		</div>
		<!-- <div class="mb-3 flex space-x-2">
			<SocialIcon icon="mail" url={config.email ? `mailto:${config.email}` : ''} />
			<SocialIcon icon="github" url={config.github} /> -->
		<!-- <SocialIcon icon="facebook" url={config.facebook} />
			<SocialIcon icon="youtube" url={config.youtube} />
			<SocialIcon icon="linkedin" url={config.linkedin} />
			<SocialIcon icon="twitter" url={config.twitter} /> -->
		<!-- </div> -->
		<div class="mb-3 flex space-x-3 text-sm text-gray-500 dark:text-gray-400">
			<a href="/terms" class="hover:underline">Terms</a>
			<a href="/disclaimer" class="hover:underline">Disclaimer</a>
			<a href="/privacy-policy" class="hover:underline">Privacy</a>
			<a href="/contact" class="hover:underline">Contact</a>
			<a href="/sitemap.xml" class="hover:underline" target="_self">Sitemap</a>
			<a href="/rss.xml" class="hover:underline" target="_self">RSS</a>
		</div>
		<div class="mb-4 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
			Copyright © <a href="/">&nbsp;bflix&nbsp;</a>
			{year} All rights Reserved
		</div>
	</div>
</footer>
