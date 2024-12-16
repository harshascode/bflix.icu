import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['*'], // Prerender all routes except those explicitly excluded
			handleHttpError: 'warn' // Warn on HTTP errors but don't fail the build
		}
	},
	preprocess: [mdsvex(mdsvexConfig), vitePreprocess()]
};

export default config;

// import adapter from '@sveltejs/adapter-auto';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import { mdsvex } from 'mdsvex';
// import mdsvexConfig from './mdsvex.config.js';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	extensions: ['.svelte', ...mdsvexConfig.extensions],
// 	kit: {
// 		adapter: adapter(),
// 		prerender: {
// 			entries: ['*'], // Prerender all routes except those explicitly excluded
// 			handleHttpError: 'warn' // Warn on HTTP errors but don't fail the build
// 		}
// 	},
// 	preprocess: [mdsvex(mdsvexConfig), vitePreprocess()]
// };

// export default config;

// import adapter from '@sveltejs/adapter-auto';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import { mdsvex } from 'mdsvex';
// import mdsvexConfig from './mdsvex.config.js';
// import { resolve } from 'path';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	extensions: ['.svelte', ...mdsvexConfig.extensions],
// 	kit: {
// 		adapter: adapter(),
// 		alias: {
// 			$icons: resolve('./src/icons'),
// 			$lib: resolve('./src/lib'),
// 			$lib/utils: resolve('./src/utils')
// 		},
// 		prerender: {
// 		  entries: ['*'], // Prerender all routes except those explicitly excluded
// 		//   handleHttpError: 'warn', // Warn on HTTP errors but don't fail the build
// 		}
// 	},
// 	preprocess: [mdsvex(mdsvexConfig), vitePreprocess()]
// };

// export default config;

// import adapter from '@sveltejs/adapter-auto';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import { mdsvex } from 'mdsvex';
// import mdsvexConfig from './mdsvex.config.js';
// import { resolve } from 'path';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	extensions: ['.svelte', ...mdsvexConfig.extensions],
// 	kit: {
// 		adapter: adapter(),
// 		alias: {
// 			$icons: resolve('./src/icons'),
// 			$lib: resolve('./src/lib'),
// 			$lib/utils: resolve('./src/utils')
// 		},
// 		csp: { mode: 'auto' } // remove this if you're not using comment system
// 	},
// 	preprocess: [mdsvex(mdsvexConfig), vitePreprocess()]
// };

// export default config;

// import adapter from '@sveltejs/adapter-auto';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import { mdsvex } from 'mdsvex';
// import mdsvexConfig from './mdsvex.config.js';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	extensions: ['.svelte', ...mdsvexConfig.extensions],
// 	kit: {
// 		adapter: adapter(),

// 		// remove this if you're not using comment system
// 		// csp: { mode: 'auto' }
// 	},
// 	preprocess: [mdsvex(mdsvexConfig), vitePreprocess()]
// };

// export default config;
