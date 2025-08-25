<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->

<script lang="ts">
	import { projects, type ProjectData } from '$data/projects';
	import { Section } from '$lib/components';
	import { crossfade } from 'svelte/transition';
	import { platforms, tools } from '$lib/utils/helper';
	import { Motion } from 'svelte-motion';
	import Icon from '@iconify/svelte';

	const [send, receive] = crossfade({
		duration: 300
	});

	let isOpen: ProjectData | null = null;

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
		hidden: { y: 40, opacity: 0 },
		show: { y: 0, opacity: 1 }
	};
</script>

<Section class="mt-8">
	<Motion variants={wrapperFramerProps} initial="hidden" animate="show" let:motion>
		<div class="grid grid-cols-3 gap-8">
			{#each projects as project}
				<Motion variants={framerProps} let:motion>
					<div class="relative bg-white" use:motion>
						{#if isOpen !== project}
							<div
								class="flex h-[25rem] cursor-pointer flex-col border-4 border-black p-4 transition-all duration-150 ease-in"
								onclick={() => (isOpen = project)}
								in:receive={{ key: project.title }}
								out:send={{ key: project.title }}
							>
								<img src={project.img} alt="" class="mb-4 h-64" />
								<div class="flex flex-col">
									<h2 class="mb-1 text-xl font-bold tracking-tight text-gray-700">
										{project.title}
									</h2>
									<span class="text-xs font-medium tracking-tighter text-gray-500"
										>{project.type}</span
									>
								</div>
								<div class="mt-auto flex flex-row items-center gap-x-4">
									{#each project.platform as platform}
										<Icon icon={platforms[platform]} class="text-lg text-gray-400" />
									{/each}
								</div>
							</div>
						{:else}
							<div
								class="absolute left-0 top-0 z-10 flex h-full w-full flex-col border-4 border-black p-4 transition-all duration-150 ease-in"
								in:receive={{ key: project.title }}
								out:send={{ key: project.title }}
							>
								<button
									class="-ml-1 inline-flex cursor-pointer items-center justify-start"
									onclick={() => (isOpen = null)}
								>
									<Icon icon="mdi:close" class="text-2xl text-gray-400 hover:text-gray-800" />
								</button>

								<div class="mt-4 flex h-full flex-col">
									<h2 class="mb-6 text-xl font-bold tracking-tight text-gray-700">
										{project.title}
									</h2>

									<span class="mb-1 text-sm font-medium tracking-tight text-gray-400"
										>Description</span
									>
									<p class="mb-4 text-base text-gray-700">{project.description}</p>

									<span class="mb-2 text-sm font-medium tracking-tight text-gray-400">Tools</span>
									<div class="flex flex-row items-center gap-x-4">
										{#each project.tool as tool}
											<Icon icon={tools[tool]} class="text-2xl" />
										{/each}
									</div>

									<a
										href="/#"
										class="mt-auto w-fit text-sm font-semibold tracking-tight text-gray-700 hover:underline"
										>Live View</a
									>
								</div>
							</div>
						{/if}
					</div>
				</Motion>
			{/each}
		</div>
	</Motion>
</Section>
