<script lang="ts">
	import '$lib/assets/styles/app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div id="root" class="font-sans text-base antialiased">
	<main class="min-h-screen w-full">
		{@render children?.()}
	</main>
</div>
