<script lang="ts">
	import Icon from '@iconify/svelte';
	import { projects } from '$data/projects';
	import { socials } from '$data/social';
	import { skills } from '$data/skills';
	import { Container } from '$lib/components/ui';
	import type { Device } from '$lib/utils/types';

	const device: Record<Device, string> = {
		web: 'mdi:web',
		mobile: 'mdi:mobile-phone',
		desktop: 'mdi:desktop-windows',
		shell: 'mdi:terminal'
	};
</script>

<!-- Hero Section -->
<section id="hero" class="mt-24">
	<Container class="flex flex-col">
		<div class="">
			<h2 class="font-italic mb-1 text-6xl font-bold tracking-tighter text-gray-800">
				muhammad rafly rafsanjani
			</h2>
			<h3 class="mb-4 text-5xl font-medium tracking-tighter text-gray-600">software engineer</h3>
			<div class="mb-7 flex flex-row items-center gap-x-4">
				{#each socials as s}
					<a href={s.url} class="text-4xl text-gray-400 hover:text-gray-800">
						<Icon icon={s.icon} />
					</a>
				{/each}
			</div>
			<p class="text-justify text-2xl font-light leading-relaxed">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea blanditiis dolor nostrum, quos
				beatae magni iusto libero dolorem architecto quidem! Laborum placeat non ratione enim
				numquam eveniet aut eum nam ipsum perferendis dolor, ipsam et praesentium impedit a quisquam
				optio velit iure saepe error doloremque ab. Veritatis, atque magnam est hic iure id dolorum
				necessitatibus aliquid vel perferendis fugiat saepe a consequuntur, modi quibusdam
				voluptatibus? Incidunt ex esse adipisci ipsam quisquam temporibus illo officia facere!
			</p>
		</div>
	</Container>
</section>

<!-- Project Section -->
<section id="project" class="mt-24">
	<Container>
		<h3 class="mb-8 text-4xl font-semibold tracking-tighter text-gray-700">projects</h3>
		<ul class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as p}
				<li class="">
					<div>
						<a
							href="/#"
							class="block rounded-xl border border-gray-100 bg-gray-50 p-4 transition hover:bg-gray-100"
						>
							<img src={p.img} alt="" class="rounded-lg" />
							<div class="mt-4 flex flex-col gap-1">
								<h6
									class="mb-0 font-medium font-semibold leading-5 tracking-tight text-gray-700 md:text-xl"
								>
									{p.title}
								</h6>
								<p class="mb-4 text-gray-500 md:text-sm">{p.description}</p>
								<div class="flex flex-row items-center gap-x-2">
									{#each p.device as d}
										<Icon icon={device[d]} class="text-lg text-gray-600" />
									{/each}
								</div>
							</div>
						</a>
					</div>
				</li>
			{/each}
		</ul>
	</Container>
</section>

<!-- Skills Section -->
<section id="skills" class="mt-24">
	<Container>
		<h3 class="mb-8 text-4xl font-semibold tracking-tighter text-gray-700">skills</h3>
		<div class="flex flex-row items-center gap-x-8">
			{#each skills as ss}
				<Icon
					icon={ss.icon}
					class="text-5xl grayscale transition hover:grayscale-0 group-hover:grayscale-0"
				/>
			{/each}
		</div>
	</Container>
</section>

<!-- Skills Section -->
<section id="skills" class="mt-24">
	<Container>
		<h3 class="mb-8 text-4xl font-semibold tracking-tighter text-gray-700">something else</h3>
	</Container>
</section>
