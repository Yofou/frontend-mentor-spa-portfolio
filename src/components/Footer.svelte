<script>
	import Link from './Link.svelte';
	import TextArea from './TextArea.svelte';
	import TextInput from './TextInput.svelte';
</script>

<footer class="relative w-full bg-dark-grey min-h-[675px] grid mt-[140px] pt-[84px]">
	<section class="content-container grid grid-cols-2">
		<div class="flex flex-col gap-[36px]">
			<h2 class="text-heading-xl text-white">Contact</h2>
			<p class="text-grey text-body-m max-w-[445px] w-full">
				I would love to hear about your project and how I could help. Please fill in the
				form, and I’ll get back to you as soon as possible.
			</p>
		</div>

		<form
			id="contact-me"
			class="grid grid-flow-row auto-rows-max gap-8 max-w-[445px] w-full justify-self-end"
		>
			<TextInput placeholder="NAME" />

			<TextInput placeholder="EMAIL" />

			<TextArea placeholder="MESSAGE" />

			<Link class="justify-self-end" submitable>Send Message</Link>
		</form>

		<hr class="col-span-2 bg-white mt-[92px] text-white">

		<nav class="w-full gap-8 text-white col-span-2 self-end mt-[47px] mb-[92px] grid grid-cols-[max-content,1fr,repeat(3,max-content)]">
			<h2 class="text-heading-m text-[32px]">adamkeyes</h2>

			<a class="justify-self-end" href="https://github.com/Yofou">
				<img src="/gh.svg" alt="Github">
			</a>
			<a href="https://www.frontendmentor.io/profile/Yofou">
				<img src="/fm.svg" alt="Frontend Mentor">
			</a>
			<a href="https://www.linkedin.com/in/nathan-ewen-b86315182/">
				<img src="/LinkedIn.svg" alt="Linked Inn">
			</a>
			<a class="mr-[30px]" href="https://twitter.com/ItsYofou">
				<img src="/tw.svg" alt="Twitter">
			</a>
		</nav>
	</section>

	<img class="absolute top-[327px] left-0" src="/footer-rings.svg" alt="" />
</footer>
