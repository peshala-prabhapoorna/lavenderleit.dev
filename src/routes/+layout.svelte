<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	import Navbar from '$lib/components/navigation/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex h-screen flex-col">
	<header class="container">
		<Navbar />
	</header>

	<main class="container flex flex-1">
		{@render children?.()}
	</main>

	<footer class="container">
		<Footer />
	</footer>
</div>
