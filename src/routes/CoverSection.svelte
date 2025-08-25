<script lang="ts">
	import { socials } from '$data/socials';
	import { Section } from '$lib/components';
	import { Motion } from 'svelte-motion';
	import Icon from '@iconify/svelte';
	const base = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 }
	};
</script>

<Section class="flex h-full flex-col items-center justify-center">
	<Motion
		let:motion
		variants={base}
		initial="hidden"
		animate="visible"
		transition={{ duration: 0.182, delay: 0 }}
	>
		<h1 use:motion class="mb-3 text-6xl font-extrabold tracking-tight text-gray-800">
			muhammad rafly rafsanjani
		</h1>
	</Motion>

	<Motion
		let:motion
		variants={base}
		initial="hidden"
		animate="visible"
		transition={{ duration: 0.182, delay: 0.4 }}
	>
		<p use:motion class="mb-7 text-5xl font-medium tracking-tighter text-gray-500">
			software engineer
		</p>
	</Motion>

	<Motion
		let:motion
		variants={base}
		initial="hidden"
		animate="visible"
		transition={{ duration: 0.182, delay: 0.8 }}
	>
		<div use:motion class="flex flex-row items-center gap-x-4">
			{#each socials as s}
				<a href={s.url} class="text-4xl text-gray-400 hover:text-gray-800">
					<Icon icon={s.icon} />
				</a>
			{/each}
		</div>
	</Motion>
</Section>
