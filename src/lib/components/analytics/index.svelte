<script>
	import { analytics } from '$lib/config';
	import GoogleAnalytics from './GoogleAnalytics.svelte';
	import Plausible from './Plausible.svelte';

	const GoogleAnalyticsId = analytics.googleAnalyticsId;
	const PlausibleDomain = analytics.plausibleDomain;
</script>

{#if GoogleAnalyticsId}
	<GoogleAnalytics id={GoogleAnalyticsId} />
{/if}

{#if PlausibleDomain}
	<Plausible domain={PlausibleDomain} />
{/if}
