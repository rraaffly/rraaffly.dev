<script lang="ts">
	import { idx, deckOrder } from '$lib/stores/deck';
	import CoverSection from './CoverSection.svelte';
	import ProjectSection from './ProjectSection.svelte';
	import SkillSection from './SkillSection.svelte';
	import SomethingElseSection from './SomethingElseSection.svelte';

	const view = () => deckOrder[$idx];
</script>

{#if view() === 'cover'}
	<CoverSection />
{:else if view() === 'project'}
	<ProjectSection />
{:else if view() === 'skill'}
	<SkillSection />
{:else}
	<SomethingElseSection />
{/if}
