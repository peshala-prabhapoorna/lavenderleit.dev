<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

    import Navbar from '$lib/components/navigation/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="container">
    <Navbar />
</header>

<main class="container">
    {@render children?.()}
</main>
