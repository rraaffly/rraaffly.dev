<script lang="ts">
	import { projects } from '$data/projects';
	import { socials } from '$data/social';
	import { Container } from '$lib/components/ui';
</script>

<!-- Hero Section -->
<section id="hero" class="py-12">
	<Container class="flex flex-col">
		<div class="">
			<h2 class="text-5xl font-bold tracking-tighter text-gray-900">muhammad rafly rafsanjani</h2>
			<h3 class="mb-4 text-3xl tracking-tighter text-gray-900">software engineer</h3>
			<p class="leading-tighter text-xl font-light">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vero quas incidunt,
				adipisci officia eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Praesentium vero quas incidunt, adipisci officia eligendi. Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Praesentium vero quas incidunt, adipisci officia eligendi.
				<br /> <br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vero quas incidunt, adipisci
				officia eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vero quas
				incidunt, adipisci officia eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Praesentium vero quas incidunt, adipisci officia eligendi.
			</p>
		</div>
	</Container>
</section>

<!-- Project Section -->
<section id="project" class="py-12">
	<Container>
		<h3 class="text-3xl font-semibold tracking-tighter text-gray-700">projects</h3>
		<ul class="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as p}
				<li class="">
					<div>
						<a href="/#" class="block rounded-xl bg-gray-50 p-4 transition hover:bg-gray-100">
							<img src="" alt="" class="rounded-lg" />
							<div class="mt-4 flex flex-col gap-1">
								<h6
									class="mb-0 font-medium font-semibold leading-5 tracking-tight text-gray-700 md:text-lg"
								>
									{p.title}
								</h6>
								<p class="text-gray-500 md:text-sm">{p.description}</p>
								<p class="text-gray-500 md:text-xs">{p.device.join('.')}</p>
							</div>
						</a>
					</div>
				</li>
			{/each}
		</ul>
	</Container>
</section>

<!-- Skills Section -->
<section id="skills" class="py-12">
	<Container>
		<h3 class="text-3xl font-semibold tracking-tighter text-gray-700">skills</h3>
	</Container>
</section>
