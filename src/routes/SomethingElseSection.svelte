<script lang="ts">
	import { Section } from '$lib/components';
	import { Motion } from 'svelte-motion';
	import { blogs } from '$data/blogs';

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
		<ul class="grid grid-cols-1 gap-8">
			{#each blogs as blog}
				<Motion variants={framerProps} let:motion>
					<li class="flex flex-col" use:motion>
						<a
							href={blog.url}
							class="mb-1 w-fit text-2xl font-bold text-gray-700 hover:text-gray-900"
							>{blog.title}</a
						>
						<span class="text-base font-medium tracking-tighter text-gray-400">{blog.date}</span>
					</li>
				</Motion>
			{/each}
		</ul>
	</Motion>
</Section>
