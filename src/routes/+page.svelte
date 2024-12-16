<script>
	import Head from '$lib/components/layout/Head.svelte';
	// import Middlebox from '$lib/components/Middlebox.svelte';
	// import Blogs from '$lib/components/Blogs.svelte';
</script>

<Head />

<svelte:head>
	<script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://bflix.icu/","url":"https://bflix.icu/","name":"Bflix.com - Watch Movies and TV Shows On Bflix Online","isPartOf":{"@id":"https://bflix.icu/#website"},"about":{"@id":"https://bflix.icu/#organization"},"primaryImageOfPage":{"@id":"https://bflix.icu/#primaryimage"},"image":{"@id":"https://bflix.icu/#primaryimage"},"thumbnailUrl":"https://utfs.io/f/H2JkXgZXQ1eat96Ks5o1A2HzVPpKwdFuLCyfoOQgD57aUxBZ","datePublished":"2024-12-14T04:07:04+00:00","dateModified":"2024-12-14T10:16:20+00:00","description":"Bflix offers an extensive library of HD movies, featuring a wide range of genres—from action-packed blockbusters to heartfelt dramas.","breadcrumb":{"@id":"https://bflix.icu/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://bflix.icu/"]}]},{"@type":"ImageObject","inLanguage":"en-US","@id":"https://bflix.icu/#primaryimage","url":"https://utfs.io/f/H2JkXgZXQ1eat96Ks5o1A2HzVPpKwdFuLCyfoOQgD57aUxBZ","contentUrl":"https://utfs.io/f/H2JkXgZXQ1eat96Ks5o1A2HzVPpKwdFuLCyfoOQgD57aUxBZ","width":1200,"height":630,"caption":"Bflix"},{"@type":"BreadcrumbList","@id":"https://bflix.icu/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://bflix.icu/"}]},{"@type":"WebSite","@id":"https://bflix.icu/#website","url":"https://bflix.icu/","name":"bflix.icu","description":"Bflix offers an extensive library of HD movies, featuring a wide range of genres from action-packed blockbusters to heartfelt dramas.","publisher":{"@id":"https://bflix.icu/#organization"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://bflix.icu/blog?query={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"Organization","@id":"https://bflix.icu/#organization","name":"Bflix","url":"https://bflix.icu/","logo":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://bflix.icu/#logo","url":"https://bflix.icu/bflix.webp","contentUrl":"https://bflix.icu/bflix.webp","width":192,"height":192,"caption":"Bflix Logo"},"image":{"@id":"https://bflix.icu/#logo"}}]}</script>
</svelte:head>

<div class="pt-12">
	<!-- <h1
		class="pb-6 text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
	>
		Welcome to Bflix
	</h1> -->
	<p class="text-base">
		Bflix is your ultimate destination for discovering the latest in HD movies, TV shows, and
		trending film updates. From breaking news about new releases to fresh updates on your favorite
		series, Bflix keeps you informed and entertained.
	</p>
</div>

<!-- <Blogs title="Latest Posts" h2 {posts} search={false} count={15} /> -->

<div class="mx-auto pt-10 pb-6">
	<h2 class="text-center text-3xl font-bold mb-8">Bflix HD Latest Movies and Tv shows</h2>
	<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
		<!-- Movie Card -->
		<div class="movi-card">
			<a href="/deadpool-and-wolverine">
				<img
					src="/hd/deadpool-and-wolverine.webp"
					alt="Deadpool & Wolverine"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">Deadpool & Wolverine</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
		<div class="movi-card">
			<a href="/the-wild-robot">
				<img
					src="/hd/the-wild-robot.webp"
					alt="The Wild Robot"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">The Wild Robot</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
		<div class="movi-card">
			<a href="/dune-prophecy">
				<img
					src="/hd/dune-prophecy.webp"
					alt="Dune Prophecy"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">Dune Prophecy</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
		<div class="movi-card">
			<a href="/gladiator-2">
				<img
					src="/hd/gladiator-2.webp"
					alt="Gladiator II"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">Gladiator II</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
		<div class="movi-card">
			<a href="/hot-frosty">
				<img
					src="/hd/hot-frosty.webp"
					alt="Hot Frosty"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">Hot Frosty</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
		<div class="movi-card">
			<a href="/apocalypse-z-the-beginning-of-the-end">
				<img
					src="/hd/apocalypse-z-the-beginning-of-the-end.webp"
					alt="Apocalypse Z - The Beginning of the End"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">Apocalypse Z - The Beginning of the End</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
		<div class="movi-card">
			<a href="/twisters">
				<img
					src="/hd/twisters.webp"
					alt="Twisters"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">Twisters</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
		<div class="movi-card">
			<a href="/inside-out-2">
				<img
					src="/hd/inside-out-2.webp"
					alt="inside-out-2"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">Inside Out 2</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
		<div class="movi-card">
			<a href="/red-one">
				<img
					src="/hd/red-one.webp"
					alt="Red One"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">Red One</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
		<div class="movi-card">
			<a href="/the-day-of-the-jackal">
				<img
					src="/hd/the-day-of-the-jackal.webp"
					alt="the-day-of-the-jackal"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">The Day of the Jackal</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
		<div class="movi-card">
			<a href="/silo">
				<img
					src="/hd/silo.webp"
					alt="Silo"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">Silo</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
		<div class="movi-card">
			<a href="/jesus-revolution">
				<img
					src="/hd/jesus-revolution.webp"
					alt="Jesus Revolution"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">Jesus Revolution</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
	</div>

	<p class="paragraph">
		Bflix is a free online streaming platform that gives you access to an extensive library of
		movies and TV shows. Unlike many other platforms, Bflix requires no sign-ups or subscriptions.
		With just a click, you can dive into a world of entertainment, featuring everything from
		timeless classics to the latest blockbusters.
	</p>
	<p class="paragraph">
		Bflix offers over 40,000 movies and TV shows, spanning every genre from action to romance. Its
		user-friendly interface allows quick access to high-quality streaming without popups or
		distractions. The platform supports multiple devices, including smartphones, laptops, tablets,
		and smart TVs. Bflix is also Chromecast-compatible, ensuring a seamless viewing experience on
		larger screens.
	</p>
</div>

<div class="mx-auto pt-10">
	<h2 class="text-center text-3xl font-bold mb-8">
		BFlix - Free HD Movies and TV Shows Streaming | Watch On bflix
	</h2>
	<div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
		<!-- Movie Card -->
		<div class="movi-card">
			<a href="/the-substance">
				<img
					src="/hd/the-substance.webp"
					alt="The Substance"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">The Substance</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
		<div class="movi-card">
			<a href="/tulsa-king">
				<img
					src="/hd/tulsa-king.webp"
					alt="Tulsa King"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">Tulsa King</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
		<div class="movi-card">
			<a href="/it-ends-with-us">
				<img
					src="/hd/it-ends-with-us.webp"
					alt="It Ends With Us"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">It Ends With Us</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
		<div class="movi-card">
			<a href="/bad-boys-ride-or-die">
				<img
					src="/hd/bad-boys-ride-or-die.webp"
					alt="Bad Boys - Ride or Die"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">Bad Boys - Ride or Die</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
		<div class="movi-card">
			<a href="/guardians-of-the-galaxy-vol-3">
				<img
					src="/hd/guardians-of-the-galaxy-vol-3.webp"
					alt="Guardians of the Galaxy Vol. 3"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">Guardians of the Galaxy Vol. 3</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
		<div class="movi-card">
			<a href="/the-cage">
				<img
					src="/hd/the-cage.webp"
					alt="The Cage"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">The Cage</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
		<div class="movi-card">
			<a href="/bridgerton">
				<img
					src="/hd/bridgerton.webp"
					alt="Bridgerton"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">Bridgerton</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
		<div class="movi-card">
			<a href="/extraction-2">
				<img
					src="/hd/extraction-2.webp"
					alt="Extraction 2"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">Extraction 2</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
		<div class="movi-card">
			<a href="/our-little-secret">
				<img
					src="/hd/our-little-secret.webp"
					alt="Our Little Secret"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">Our Little Secret</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
		<div class="movi-card">
			<a href="/star-wars-skeleton-crew">
				<img
					src="/hd/star-wars-skeleton-crew.webp"
					alt="Star Wars Skeleton Crew"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">Star Wars Skeleton Crew</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
		<div class="movi-card">
			<a href="/the-boss-baby">
				<img
					src="/hd/the-boss-baby.webp"
					alt="The Boss Baby"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">The Boss Baby</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
		<div class="movi-card">
			<a href="/top-gun-maverick">
				<img
					src="/hd/top-gun-maverick.webp"
					alt="Top Gun Maverick"
					width="300"
					height="450"
					class="rounded-sm mb-4"
					loading="lazy"
				/>
				<p class="movi-name">Top Gun: Maverick</p>
				<p class="year-btn">2024</p>
			</a>
		</div>
	</div>
	<!-- <p class="paragraph">
		Bflix is your go-to platform for the latest updates on bflix HD Movies, Tv shows and other film
		trends. Whether it’s new releases, or new series updates, we keep you informed and connected.
	</p> -->
</div>

<div class="mx-auto pt-10">
	<h2 class="text-3xl font-bold mb-5 md:mb-6">What is bflix?</h2>
	<p class="paragraph">
		Bflix is the go-to platform for streaming HD movies and TV shows without any cost. Whether
		you're into action-packed thrillers or heartwarming dramas, Bflix offers a diverse selection in
		high-definition, catering to every taste.
	</p>

	<h2 class="text-3xl font-bold mb-5 md:mb-6">Latest Bflix Updates (2024)</h2>
	<div class="paragraph">
		<ul>
			<li>
				Expanded Content Library: Over 100+ new titles added, including Hollywood blockbusters and
				trending TV shows.
			</li>
			<li>
				Improved User Experience: A redesigned interface with enhanced navigation and modern
				visuals.
			</li>
			<li>Advanced Security: Upgraded security features to ensure safe browsing.</li>
			<li>Mobile App Launch: Stream on the go with the new Bflix app for iOS and Android.</li>
			<li>
				Faster Streaming Speeds: Upgraded servers for reduced buffering and better viewing quality.
			</li>
		</ul>
	</div>

	<h2 class="text-3xl font-bold mb-5 md:mb-6">Why Choose Bflix?</h2>
	<div class="paragraph">
		<ul>
			<li>
				Comprehensive Reviews: Our team of passionate movie enthusiasts delivers honest and detailed
				reviews to help you decide what to watch next.
			</li>

			<li>
				Up-to-Date Trends: Stay informed with the latest in the movie world, including new releases,
				box office highlights, and upcoming series.
			</li>

			<li>
				Diverse Content: Explore articles, lists, and features that cater to all kinds of
				cinephiles, from action lovers to drama aficionados.
			</li>

			<li>
				Community Focused: Join a growing community of movie buffs who share a love for storytelling
				and cinema.
			</li>
		</ul>
	</div>

	<h2 class="text-3xl font-bold mb-5 md:mb-6">What We Offer</h2>
	<div class="paragraph">
		<ul>
			<li>Movie Reviews: In-depth analysis of the latest movies and TV shows.</li>
			<li>Recommendations: Curated watchlists tailored to your mood or genre preferences.</li>
			<li>Entertainment News: Updates on casting, production, and industry trends.</li>
			<li>Features and Lists: Top 10s, hidden gems, and fun facts about your favorite films.</li>
		</ul>
	</div>
</div>
<!-- FAQs -->
<div class="space-y-4">
	<h2 class="text-center text-3xl font-bold mb-4">FAQs</h2>
	<details class="rounded">
		<summary class="px-2 py-2 cursor-pointer font-bold"> Is Bflix free to use? </summary>
		<div class="p-2">
			Yes, Bflix is completely free. You can access all our reviews, recommendations, and articles
			without any subscription or payment.
		</div>
	</details>

	<details class="rounded">
		<summary class="px-2 py-2 cursor-pointer font-bold">
			What type of content does Bflix offer?
		</summary>
		<div class="p-2">
			We provide detailed movie and TV show reviews, watchlists, entertainment news, and feature
			articles about trending and classic films.
		</div>
	</details>

	<details class="rounded">
		<summary class="px-2 py-2 cursor-pointer font-bold">
			Does bflix provide movie reviews?
		</summary>
		<div class="p-2">
			Yes, we offer detailed reviews for many of the movies in our collection, covering the plot,
			performances, and overall quality to help you decide what to watch next.
		</div>
	</details>

	<details class="rounded">
		<summary class="px-2 py-2 cursor-pointer font-bold"
			>Can I find recommendations based on specific genres on Bflix?</summary
		>
		<div class="p-2">
			Yes, we offer genre-based recommendations, including action, comedy, drama, horror, and more,
			to help you find what suits your taste.
		</div>
	</details>

	<details class="rounded">
		<summary class="px-2 py-2 cursor-pointer font-bold"
			>Does Bflix cover international movies and shows?</summary
		>
		<div class="p-2">
			Yes, we cover a wide range of content, including international films and TV shows, ensuring
			there's something for everyone.
		</div>
	</details>

	<details class="rounded">
		<summary class="px-2 py-2 cursor-pointer font-bold">Is Bflix safe to use?</summary>
		<div class="p-2">
			While Bflix itself doesn’t host harmful files, ads and pop-ups on the site may lead to
			security risks. It is recommended to use a VPN and an ad blocker for safer browsing.
		</div>
	</details>
</div>
