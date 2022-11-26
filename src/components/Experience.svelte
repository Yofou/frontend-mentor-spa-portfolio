<script>
	import ExperienceCard from "./Experience-card.svelte";
</script>

<section class="w-full grid grid-cols-3 gap-y-4 pt-[72px]">
	<ExperienceCard 
		 title="HTML" 
		 years={4} 
	/>

	<ExperienceCard 
		 title="CSS" 
		 years={4} 
	/>

	<ExperienceCard 
		 title="Javascript" 
		 years={4} 
	/>

	<ExperienceCard 
		 title="Accessibility" 
		 years={4} 
	/>

	<ExperienceCard 
		 title="React" 
		 years={3} 
	/>

	<ExperienceCard 
		 title="Sass" 
		 years={3} 
	/>
</section>

<img class="absolute top-[1077px] right-0 -z-20" src="/right-rings.svg" alt="">
