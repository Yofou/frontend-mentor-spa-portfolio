<script>
	import Link from "./Link.svelte";
</script>

<header class="w-full relative text-white content-container pt-[127px]">
	<h2 class="text-heading-xl max-w-[710px] w-full">
		Nice to meet you! I’m <span class="underline [text-decoration-color:#4EE1A0]"
			>Adam Keyes</span
		>.
	</h2>
	<p class="mt-[43px] mb-[66px] max-w-[445px] w-full text-body-m">
		Based in the UK, I’m a front-end developer passionate about building accessible web apps
		that users love.
	</p>

	<Link />

	<div
		class="absolute bg-dark-grey w-[445px] bg-adam h-[720px] top-0 translate-y-[-72px] -z-10 right-0"
	>
		<div class="w-full h-full relative">
			<div
				class="w-[129px] h-[129px] rounded-full border border-white absolute bottom-[70px] left-0 -translate-x-1/2"
			/>
		</div>
	</div>

</header>

<img class="top-[133px] -z-20 left-0 absolute" src="/left-rings.svg" alt="">

<style>
	.bg-adam {
		background-image: url(/adam.png);
		background-repeat: no-repeat;
		background-position: bottom;
	}
</style>
