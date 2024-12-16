<script>
	import Tag from '$lib/components/Tag.svelte';
	import Title from '$lib/components/Title.svelte';
	import Author from '$lib/components/Author.svelte';
	import SearchBox from '$lib/components/SearchBox.svelte';
	import { page } from '$app/stores';
	import fuzzySearch from '$lib/utils/search.js';

	export let title = '';
	export let subtitle = '';
	export let posts = [];
	export let tags = [];
	export let more = true;
	export let search = true;
	export let h2 = false;
	export let count = 0;

	if (count) {
		posts = posts.slice(0, count);
	}

	$: filter = $page.url.searchParams.get('query');
	$: currentPosts = filter ? fuzzySearch(posts, filter) : posts;
</script>

<div class="divide-y divide-gray-200 dark:divide-gray-700">
	<div class="space-y-2 pt-6 pb-8 md:space-y-5">
		<div class="grid lg:grid-cols-2 gap-4">
			<div>
				<Title {title} {subtitle} {h2} />
			</div>

			<div class="pl-4" class:border-l-2={search}>
				{#if search}
					<SearchBox />
				{/if}

				{#if tags.length}
					<div class="flex flex-wrap">
						{#each tags as tag}
							<div class="mr-5">
								<Tag text={tag.text} size="text-xs" />
								<a
									href={`/tags/${tag.slug}`}
									class="-ml-2 text-xs font-semibold uppercase text-gray-600 dark:text-gray-300"
								>
									{` (${tag.count})`}
								</a>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
	{#if !currentPosts.length}
		No post found.
	{:else}
		<ul class="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
			{#each currentPosts as post}
				<li class="py-1">
					<article class="h-full p-1 rounded-lg shadow-md bg-white dark:bg-transparent">
						<div class="space-y-2">
							<!-- <Author author={post.author} postDate={post.date} /> -->
							<div class="space-y-2">
								<div class="space-y-6">
									<div>
										<div class="w-full">
											<a href={`/${post.slug}`}>
												<img src={post.image} alt={post.title} />
											</a>
										</div>
										<h2 class="text-base mt-2 font-bold leading-6 tracking-tight">
											<a href={`/${post.slug}`} class="text-gray-900 dark:text-gray-100">
												{post.title}
											</a>
										</h2>
									</div>
								</div>
								{#if more}
									<div class="text-base font-medium">
										<a
											href={`/${post.slug}`}
											class="text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
											aria-label={`Read "${post.title}"`}
										>
											2024
										</a>
									</div>
								{/if}
							</div>
						</div>
					</article>
				</li>
			{/each}
		</ul>
	{/if}
</div>
