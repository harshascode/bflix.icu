import { browser } from '$app/environment';
import { slug } from 'github-slugger';
import { config } from '$lib/config.js';

export const prerender = true;

// Ensure this runs server-side only
if (browser) {
	throw new Error(`posts can only be imported server-side`);
}

// Import posts eagerly
const posts = Object.entries(import.meta.glob('/content/posts/**/*.md', { eager: true }));

const getMetadata = (filepath, entry) => {
	const { metadata } = entry;
	const slugValue = filepath
		.replace(/(\/index)?\.md/, '')
		.split('/')
		.pop();

	return {
		...metadata,
		content: entry.default.render().html,
		// content: entry.html,
		slug: slugValue,
		tag: metadata.type?.split(' ').shift().toLowerCase() || null,
		tags: metadata.tags || []
	};
};

// Get all entries and add metadata
export const getEntries = () => {
	return posts
		.map(([filepath, entry]) => getMetadata(filepath, entry))
		.filter((entry) => !entry.draft)
		.sort((a, b) => b.date - a.date); // Sort by date, newest first
};

export const getTags = () => {
	const posts = getEntries();
	const tagMap = new Map();

	posts.forEach(({ tags }) => {
		tags.forEach((tag) => {
			const slugValue = slug(tag);
			if (tagMap.has(slugValue)) {
				tagMap.get(slugValue).count++;
			} else {
				tagMap.set(slugValue, { text: tag, slug: slugValue, count: 1 });
			}
		});
	});

	return Array.from(tagMap.values()).sort((a, b) => b.text.localeCompare(a.text));
};

// import { browser } from '$app/environment';
// import { slug } from 'github-slugger';
// import { config } from '$lib/config.js';

// // Ensure this runs server-side only
// if (browser) {
// 	throw new Error(`posts can only be imported server-side`);
// }

// // Memoized glob imports
// const posts = Object.entries(import.meta.glob('/content/posts/**/*.md', { eager: true }));

// const getEntriesByType = (entryType) => {
// 	switch (entryType) {
// 		case 'posts':
// 			return posts;
// 		default:
// 			throw new Error(`unknown entry type ${entryType}`);
// 	}
// };

// const getMetadata = (entryType, filepath, entry) => {
// 	const { metadata } = entry;
// 	const slugValue = filepath.replace(/(\/index)?\.md/, '').split('/').pop();

// 	return {
// 		...metadata,
// 		content: entry.default.render().html,
// 		slug: slugValue,
// 		tag: metadata.type?.split(' ').shift().toLowerCase() || null,
// 		tags: metadata.tags || []
// 	};
// };

// // Get all entries and add metadata
// export const getEntries = (entryType) => {
// 	const entries = getEntriesByType(entryType);

// 	return entries
// 		.map(([filepath, entry]) => getMetadata(entryType, filepath, entry))
// 		.filter(entry => !entry.draft)
// 		.sort((a, b) => b.date - a.date); // Sort by date, newest first
// };

// export const getTags = () => {
// 	const posts = getEntries('posts');
// 	return posts.flatMap(({ tags }) => tags)
// 		.reduce((arr, tag) => {
// 			const slugValue = slug(tag);
// 			const index = arr.findIndex(t => t.slug === slugValue);
// 			if (index > -1) {
// 				arr[index].count++;
// 			} else {
// 				arr.push({ text: tag, slug: slugValue, count: 1 });
// 			}
// 			return arr;
// 		}, [])
// 		.sort((a, b) => b.text.localeCompare(a.text));
// };

// import { browser } from '$app/environment';
// import { slug } from 'github-slugger';
// import { config } from '$lib/config.js';

// // Ensure this runs server-side only
// if (browser) {
// 	throw new Error(`posts can only be imported server-side`);
// }

// // Memoized glob imports
// const posts = Object.entries(import.meta.glob('/content/posts/**/*.md', { eager: true }));

// const getEntriesByType = (entryType) => {
// 	switch (entryType) {
// 		case 'posts':
// 			return posts;
// 		default:
// 			throw new Error(`unknown entry type ${entryType}`);
// 	}
// };

// const getMetadata = (entryType, filepath, entry) => {
// 	const { metadata } = entry;
// 	const slugValue = filepath.replace(/(\/index)?\.md/, '').split('/').pop();

// 	return {
// 		...metadata,
// 		content: entry.default.render().html,
// 		slug: slugValue,
// 		tag: metadata.type?.split(' ').shift().toLowerCase() || null,
// 		tags: metadata.tags || []
// 	};
// };

// // Get all entries and add metadata
// export const getEntries = (entryType) => {
// 	const entries = getEntriesByType(entryType);

// 	return entries
// 		.map(([filepath, entry]) => getMetadata(entryType, filepath, entry))
// 		.filter(entry => !entry.draft)
// 		.sort((a, b) => b.date - a.date); // Sort by date, newest first
// };

// // Next - Prev removed
// // export const getEntries = (entryType) => {
// // 	const entries = getEntriesByType(entryType);

// // 	return entries
// // 		.map(([filepath, entry]) => getMetadata(entryType, filepath, entry))
// // 		.filter(entry => !entry.draft)
// // 		.sort((a, b) => b.date - a.date) // Directly comparing dates
// // 		.map((entry, index, allEntries) => ({
// // 			...entry,
// // 			next: allEntries[index - 1] || null,
// // 			prev: allEntries[index + 1] || null
// // 		}));
// // };

// export const getTags = () => {
// 	const posts = getEntries('posts');
// 	return posts.flatMap(({ tags }) => tags)
// 		.reduce((arr, tag) => {
// 			const slugValue = slug(tag);
// 			const index = arr.findIndex(t => t.slug === slugValue);
// 			if (index > -1) {
// 				arr[index].count++;
// 			} else {
// 				arr.push({ text: tag, slug: slugValue, count: 1 });
// 			}
// 			return arr;
// 		}, [])
// 		.sort((a, b) => b.text.localeCompare(a.text));
// };

// import { browser } from '$app/environment';
// import { slug } from 'github-slugger';
// import { config, user } from '$lib/config.js';

// // Ensure this runs server-side only
// if (browser) {
// 	throw new Error(`projects can only be imported server-side`);
// }

// // Memoized glob imports
// const posts = Object.entries(import.meta.glob('/content/posts/**/*.md', { eager: true }));
// const projects = Object.entries(import.meta.glob('/content/projects/**/*.md', { eager: true }));
// const authors = Object.entries(import.meta.glob('/content/authors/**/*.md', { eager: true }));

// const getEntriesByType = (entryType) => {
// 	switch (entryType) {
// 		case 'posts':
// 			return posts;
// 		case 'projects':
// 			return projects;
// 		case 'authors':
// 			return authors;
// 		default:
// 			throw new Error(`unknown entry type ${entryType}`);
// 	}
// };

// const getMetadata = (entryType, filepath, entry) => {
// 	const { metadata } = entry;
// 	const slugValue = filepath.replace(/(\/index)?\.md/, '').split('/').pop();
// 	const youtubeValue = metadata.video ? metadata.video.replace(
// 		/(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)(\.com)?\/(watch\?v=)?/,
// 		''
// 	) : null;

// 	return {
// 		...metadata,
// 		author: entryType === 'posts' && !config.multiuser ? user.name : metadata.author || 'Anonymous',
// 		content: entry.default.render().html,
// 		slug: slugValue,
// 		youtube: youtubeValue,
// 		tag: metadata.type?.split(' ').shift().toLowerCase() || null,
// 		tags: metadata.tags || []
// 	};
// };

// // Get all entries and add metadata
// export const getEntries = (entryType) => {
// 	if (!config.multiuser && entryType === 'authors') return [user];

// 	const entries = getEntriesByType(entryType);

// 	return entries
// 		.map(([filepath, entry]) => getMetadata(entryType, filepath, entry))
// 		.filter(entry => !entry.draft)
// 		.sort((a, b) => b.date - a.date) // Directly comparing dates
// 		.map((entry, index, allEntries) => ({
// 			...entry,
// 			next: allEntries[index - 1] || null,
// 			prev: allEntries[index + 1] || null
// 		}));
// };

// export const getTags = () => {
// 	const posts = getEntries('posts');
// 	return posts.flatMap(({ tags }) => tags)
// 		.reduce((arr, tag) => {
// 			const slugValue = slug(tag);
// 			const index = arr.findIndex(t => t.slug === slugValue);
// 			if (index > -1) {
// 				arr[index].count++;
// 			} else {
// 				arr.push({ text: tag, slug: slugValue, count: 1 });
// 			}
// 			return arr;
// 		}, [])
// 		.sort((a, b) => b.text.localeCompare(a.text));
// };

// export const getTags = () => {
// 	const posts = getEntries('posts');
// 	const tags = posts.flatMap(({ tags }) => tags)
// 		.map(tag => ({ text: tag, slug: slug(tag) }))
// 		.reduce((arr, tag) => {
// 			const index = arr.findIndex(t => t.slug === tag.slug);
// 			if (index > -1) {
// 				arr[index].count++;
// 			} else {
// 				arr.push({ text: tag.text, slug: tag.slug, count: 1 });
// 			}
// 			return arr;
// 		}, [])
// 		.sort((a, b) => b.text.localeCompare(a.text)); // Using localeCompare for better string comparison

// 	return tags;
// };

// import { browser } from '$app/environment';
// import { slug } from 'github-slugger';
// import { config, user } from '$lib/config.js';

// // we require some server-side APIs to parse all metadata
// if (browser) {
// 	throw new Error(`projects can only be imported server-side`);
// }

// // we have to have separate functions for this because Vite only accepts literal strings for import.meta.glob
// const getPosts = () => {
// 	return Object.entries(import.meta.glob('/content/posts/**/*.md', { eager: true }));
// };

// const getProjects = () => {
// 	return Object.entries(import.meta.glob('/content/projects/**/*.md', { eager: true }));
// };

// const getAuthors = () => {
// 	return Object.entries(import.meta.glob('/content/authors/**/*.md', { eager: true }));
// };

// const getEntriesByType = (entryType) => {
// 	switch (entryType) {
// 		case 'posts':
// 			return getPosts();
// 		case 'projects':
// 			return getProjects();
// 		case 'authors':
// 			return getAuthors();
// 		default:
// 			throw new Error(`unknown entry type ${entryType}`);
// 	}
// };

// const getMetadata = (entryType, filepath, entry) => {
// 	return {
// 		...entry.metadata,

// 		// Provide a default value for author if missing
// 		author:
// 			entryType === 'posts' && !config.multiuser ? user.name : entry.metadata.author || 'Anonymous',

// 		content: entry.default.render().html,

// 		slug: filepath
// 			.replace(/(\/index)?\.md/, '')
// 			.split('/')
// 			.pop(),

// 		youtube: entry.metadata.video
// 			? entry.metadata.video.replace(
// 					/(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)(\.com)?\/(watch\?v=)?/,
// 					''
// 				)
// 			: null,

// 		tag: entry.metadata.type?.split(' ').shift().toLowerCase() || null,
// 		tags: entry.metadata.tags || []
// 	};
// };

// // Get all entries and add metadata
// export const getEntries = (entryType) => {
// 	if (!config.multiuser && entryType === 'authors') return [user];

// 	let entries = getEntriesByType(entryType);

// 	return (
// 		entries
// 			// format metadata and content
// 			.map(([filepath, entry]) => getMetadata(entryType, filepath, entry))
// 			// remove drafts
// 			.filter((entry) => !entry.draft)
// 			// sort by date
// 			.sort((a, b) => (a.date < b.date ? 1 : -1))
// 			// add references to the next/previous entry
// 			.map((entry, index, allEntries) => ({
// 				...entry,
// 				next: allEntries[index - 1],
// 				prev: allEntries[index + 1]
// 			}))
// 	);
// };

// export const getTags = () => {
// 	const posts = getEntries('posts');
// 	let tags = posts
// 		.flatMap(({ tags }) => tags)
// 		.map((tag) => ({ text: tag, slug: slug(tag) }))
// 		.reduce((arr, tag) => {
// 			let index = arr.findIndex((t) => t.slug === tag.slug);
// 			if (index > -1) arr[index].count++;
// 			else arr.push({ text: tag.text, slug: tag.slug, count: 1 });
// 			return arr;
// 		}, [])
// 		.sort((a, b) => (b.text < a.text ? 1 : -1));

// 	return tags;
// };
