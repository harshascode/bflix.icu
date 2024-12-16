export const prerender = true;
import { error } from '@sveltejs/kit';
import { getEntries } from '$lib/utils/entries.js';
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	// Fetch posts only
	const posts = getEntries('posts');
	const { slug } = params;

	// Find the post by slug
	const post = posts.find((p) => p.slug === slug);

	// Check if post exists
	if (!post) {
		throw error(404, 'No post found');
	}

	// Return only the post data
	return {
		post
	};
}

// import { error } from '@sveltejs/kit';
// import { getEntries } from '$lib/utils/entries.js';

// /** @type {import('./$types').PageServerLoad} */
// export async function load({ params }) {
// 	// Fetch posts and authors
// 	const posts = getEntries('posts');
// 	const authors = getEntries('authors');
// 	const { slug } = params;

// 	// Find the post by slug
// 	const post = posts.find((p) => p.slug === slug);

// 	// Check if post exists
// 	if (!post) {
// 		throw error(404, 'No post found');
// 	}

// 	// Find the author by post's author property
// 	const author = authors.find((a) => a.name === post.author);

// 	// Handle the case where the author might not be found
// 	if (!author) {
// 		throw error(404, 'Author not found');
// 	}

// 	return {
// 		post: post,
// 		author: author
// 	};
// }

// import { error } from '@sveltejs/kit';
// import { getEntries } from '$lib/utils/entries.js';

// /** @type {import('./$types').PageServerLoad} */
// export async function load({ params }) {
// 	const posts = getEntries('posts');
// 	const authors = getEntries('authors');
// 	const { slug } = params;
// 	const post = posts.find((p) => p.slug === slug);
// 	const author = authors.find((a) => a.name === post.author);

// 	if (!post) {
// 		throw error(404, 'No post found');
// 	}

// 	return {
// 		// eslint-disable-next-line no-unused-vars
// 		post: post,
// 		author: author
// 	};
// }
