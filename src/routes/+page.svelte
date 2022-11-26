<script lang="ts">
	import Nav from "$components/Nav.svelte"
	import Header from "$components/Header.svelte"
	import Experience from "$components/Experience.svelte";
	import Projects from "$components/Projects.svelte";
	import Footer from "$components/Footer.svelte"
</script>

<Nav />
<Header />

<main class="border-t content-container border-white mt-[229px]">
	<Experience />
	<Projects />
</main>

<Footer />
