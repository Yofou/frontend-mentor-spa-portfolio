<script lang="ts">
	import ProjectsItem from "./Projects-item.svelte";
	import type { StackChoice } from "./Projects-item.svelte"
	import Link from "./Link.svelte";

	type Project = {
		title: string,
		url: string,
		stack: StackChoice[]
	}

	const projects: Project[] = [
		{ title: 'DESIGN PORTFOLIO', stack: ['html', 'css'], url: '/project-1.png' },
		{ title: 'E-LEARNING LANDING PAGE', stack: ['html', 'css'], url: '/project-2.png' },
		{ title: 'TODO WEB APP', stack: ['html', 'css', 'javascript'], url: '/project-3.png' },
		{ title: 'ENTERTAINMENT WEB APP', stack: ['html', 'css', 'javascript'], url: '/project-4.png' },
		{ title: 'MEMORY GAME', stack: ['html', 'css', 'javascript'], url: '/project-5.png' },
		{ title: 'ART GALLERY SHOWCASE', stack: ['html', 'css', 'javascript'], url: '/project-6.png' },
	]
</script>

<section class="mt-[140px] w-full text-white">
	<nav class="flex items-center justify-between mb-20">
		<h2 class="text-heading-xl">Projects</h2>
		<Link />
	</nav>

	<div class="grid grid-cols-2 gap-x-[27px] gap-y-[70px] grid-flow-row w-full">
		{#each projects as project}
			<ProjectsItem {...project} />
		{/each}
	</div>
</section>
