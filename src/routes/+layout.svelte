<script>
	// import Transition from '$lib/components/layout/Transition.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	// import Analytics from '$lib/components/analytics/index.svelte';
	import '../app.css';
</script>

<div class="mx-auto max-w-7xl px-4 sm:px-6 xl:max-w-7xl xl:px-0">
	<!-- <div class="mx-auto px-4 sm:px-6 xl:px-6"> -->
	<div class="flex h-screen flex-col justify-between">
		<Header />
		<main class="mb-auto">
			<slot />
		</main>
		<Footer />
	</div>
</div>

<!-- <svelte:head> -->
<!-- <script>(function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://shebudriftaiter.net/tag.min.js',8505402,document.body||document.documentElement)</script>
	<script>(function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('reetahoo.com',8505412,document.createElement('script'))</script> -->
<!-- <script
		defer
		data-website-id={import.meta.env.VITE_UMAMI_WEBSITE_ID}
		src="https://umami-psi-three.vercel.app/script.js"
	></script> -->
<!-- </svelte:head> -->

<!-- <Analytics /> -->
