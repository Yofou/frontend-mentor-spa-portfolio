<script context="module" lang="ts">
	export type StackChoice = 'html' | 'javascript' | 'css';
</script>

<script lang="ts">
	import Link from './Link.svelte';

	export let title: string;
	export let url: string;
	export let stack: StackChoice[];
</script>

<article class="flex flex-col group">
	<div class="relative">
		<img src={url} class="aspect-[546/400]" alt="" />
		<div
			class="
				inset-0 
				opacity-0 
				group-hover:opacity-100 
				transition-opacity 
				grid 
				place-content-center 
				grid-flow-row 
				justify-items-center 
				gap-[48px] 
				absolute 
				bg-[#000]/75 
				uppercase
			"
		>
			<Link href="/">View Project</Link>
			<Link href="/">View Code</Link>
		</div>
	</div>

	<h3 class="text-heading-m mt-5">{title}</h3>
	<div class="flex gap-[18px]">
		{#each stack as tech}
			<p class="text-body-m text-grey uppercase">{tech}</p>
		{/each}
	</div>
</article>
