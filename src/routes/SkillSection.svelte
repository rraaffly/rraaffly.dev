<script lang="ts">
	import { skills } from '$data/skills';
	import { Section } from '$lib/components';
	import { Motion } from 'svelte-motion';
	import Icon from '@iconify/svelte';

	export let wrapperFramerProps = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.25
			}
		}
	};
	export let framerProps = {
		hidden: { y: 20, opacity: 0 },
		show: { y: 0, opacity: 1 }
	};
</script>

<Section class="mt-8">
	<Motion variants={wrapperFramerProps} initial="hidden" animate="show" let:motion>
		<ul class="grid grid-cols-5 gap-8">
			{#each skills as s}
				<Motion variants={framerProps} let:motion>
					<li use:motion>
						<div class="flex h-32 flex-col items-center justify-center">
							<Icon icon={s.icon} class="text-7xl" />
							<span class="mt-4 block text-sm font-bold tracking-tight text-gray-700">
								{s.title}
							</span>
						</div>
					</li>
				</Motion>
			{/each}
		</ul>
	</Motion>
</Section>
