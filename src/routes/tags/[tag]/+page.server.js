export const prerender = false;
import { error } from '@sveltejs/kit';
import { slug } from 'github-slugger';

// Cache for slug generation
const slugCache = new Map();

function generateSlugs(tags) {
	if (!tags) return [];

	// Create a unique key for the tags array to use for caching
	const key = tags.join(',');

	if (slugCache.has(key)) {
		return slugCache.get(key);
	}

	const slugs = tags.map((tag) => slug(tag));
	slugCache.set(key, slugs);
	return slugs;
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, fetch }) {
	const { tag } = params;

	// Fetch data from the API endpoint using event.fetch
	const response = await fetch('https://bflixhd.netlify.app/api/entries');
	if (!response.ok) {
		throw error(response.status, 'Failed to fetch entries');
	}
	const { entries } = await response.json();

	// Create a Set for faster lookups
	const filteredPosts = entries.filter((post) => {
		const slugSet = new Set(generateSlugs(post.tags));
		return slugSet.has(tag);
	});

	if (filteredPosts.length === 0) {
		throw error(404, 'No post found');
	}

	return {
		tag,
		posts: filteredPosts
	};
}

// export const prerender = false;
// import { error } from '@sveltejs/kit';
// import { slug } from 'github-slugger';
// import { getEntries } from '$lib/utils/entries.js';

// // Cache for slug generation
// const slugCache = new Map();

// function generateSlugs(tags) {
// 	if (!tags) return [];

// 	// Create a unique key for the tags array to use for caching
// 	const key = tags.join(',');

// 	if (slugCache.has(key)) {
// 		return slugCache.get(key);
// 	}

// 	const slugs = tags.map((tag) => slug(tag));
// 	slugCache.set(key, slugs);
// 	return slugs;
// }

// /** @type {import('./$types').PageServerLoad} */
// export async function load({ params }) {
// 	const { tag } = params;
// 	const posts = getEntries('posts');

// 	// Create a Set for faster lookups
// 	const filteredPosts = posts.filter((post) => {
// 		const slugSet = new Set(generateSlugs(post.tags));
// 		return slugSet.has(tag);
// 	});

// 	if (filteredPosts.length === 0) {
// 		throw error(404, 'No post found');
// 	}

// 	return {
// 		tag,
// 		posts: filteredPosts
// 	};
// }
