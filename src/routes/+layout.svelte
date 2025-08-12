<script>
	import { fade } from 'svelte/transition';
	import Header from '$lib/Header.svelte';
	import Hero from '$lib/Hero.svelte';
	let { children } = $props();
	import '../app.css';
	import { page } from '$app/state';
	import Footer from '$lib/Footer.svelte';

	let route = $derived(page.route.id);

	const stuff = {
		title: `IC-Best Link Telecom Corporation | Enterprise ICT Solutions`,
		desc: `A trusted Filipino ICT provider delivering unified communication systems, networking, and robust end-to-end solutions as well as quality products & services.`,
		image: `https://www.icbestlink.com/featured-image.png`
	};

	let url = $derived(page.url);
</script>

<svelte:head>
	<title>{stuff?.title}</title>
	<meta name="robots" content="index, follow" />
	<meta name="description" content={stuff?.desc} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={stuff?.title} />
	<meta property="og:description" content={stuff?.desc} />
	<meta property="og:url" content="https://www.icbestlink.com/" />
	<meta property="og:site_name" content="IC-Best Link Telecom Corporation" />
	<meta property="og:image" content={stuff?.image} />
	<meta property="og:image:width" content="800" />
	<meta property="og:image:height" content="450" />
	<meta property="og:image:type" content="image/jpeg" />

	<link rel="canonical" href={url} />
</svelte:head>

<Header {route} />
<Hero {route} />
{#key route}
	<div in:fade={{ duration: 1000 }}>
		{@render children()}
	</div>
{/key}
<Footer />
