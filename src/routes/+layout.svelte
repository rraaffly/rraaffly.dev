<script lang="ts">
	import '$lib/assets/styles/app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Icon from '@iconify/svelte';
	import { deckOrder, idx, titleMap } from '$lib/stores/deck';
	import { get } from 'svelte/store';
	import { AnimatePresence, Motion } from 'svelte-motion';

	let { children } = $props();

	const canPrev = () => get(idx) > 0;
	const canNext = () => get(idx) < deckOrder.length - 1;

	const prev = () => {
		if (canPrev()) idx.update((n) => n - 1);
	};
	const next = () => {
		if (canNext()) idx.update((n) => n + 1);
	};

	const onKey = (e: KeyboardEvent) => {
		if (e.key === 'ArrowLeft') prev();
		if (e.key === 'ArrowRight') next();
		if (e.key === 'Home') idx.set(0);
		if (e.key === 'End') idx.set(deckOrder.length - 1);
	};

	let wrapper = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.25
			}
		}
	};

	let framer = {
		hidden: { y: -20, opacity: 0 },
		show: { y: 0, opacity: 1 }
	};
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<svelte:window on:keydown={onKey} />

<div id="root" class="font-sans antialiased">
	<main class="flex h-screen w-full items-center justify-center bg-emerald-400">
		{#key $idx}
			<Motion variants={wrapper} initial="hidden" animate="show" let:motion>
				<div class="border-6 relative h-[56rem] w-[90rem] border-black">
					<div
						class="border-b-6 absolute left-0 right-0 top-0 z-50 flex h-[96px] items-center justify-center border-black bg-white px-2"
					>
						{#if $idx > 0}
							<button
								class="border-r-6 absolute left-0 top-0 flex h-full w-[6rem] cursor-pointer items-center justify-center border-black hover:bg-black/5"
								onclick={prev}
							>
								<Icon icon="ri:arrow-left-line" class="text-5xl" />
							</button>
						{/if}

						<div class="text-2xl font-semibold tracking-tighter">
							<Motion variants={framer} let:motion>
								<span class="inline-block pr-[8px]" use:motion>
									{titleMap[deckOrder[$idx]]}
								</span>
							</Motion>
						</div>

						{#if $idx < deckOrder.length - 1}
							<button
								class="border-l-6 absolute right-0 top-0 flex h-full w-[6rem] cursor-pointer items-center justify-center border-black hover:bg-black/5"
								onclick={next}
							>
								<Icon icon="ri:arrow-right-line" class="text-5xl" />
							</button>
						{/if}
					</div>

					<!-- Content -->
					<div class="h-full overflow-hidden bg-white">
						<div class="h-full overflow-y-scroll px-8 pb-8 pt-[106px]">
							{@render children?.()}
						</div>
					</div>
				</div>
			</Motion>
		{/key}
	</main>
</div>
