<script>
	// import { page } from '$app/stores'; // SSR-compatible store
	// import { get } from 'svelte/store'; // Utility to extract store values
	// import Comments from '$lib/components/comment/index.svelte';
	import Head from '$lib/components/layout/Head.svelte';
	import Blog from '$lib/components/Blog.svelte';

	export let data;
	const post = data.post;
	// const author = data.author;
	// const description = post.summary;

	// Extract the current URL from the $page store (SSR-compatible)
	// let currentUrl = get(page).url.href;

	// Define title based on post data or defaults
	let title = post.title + ' | bflix' || 'bflix';
	let description = post.summary;
	// let img = post.image; // Adjust as needed for your image URL
</script>

<!-- Use the URL in the Head component -->
<Head {title} {description} />

<Blog {post} />
<!-- <Blog {post} {author} /> -->
