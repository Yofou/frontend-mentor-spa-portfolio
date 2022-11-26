<script lang="ts">
	export let submitable = false
	export let type: "submit" | "button" = "submit"
	$: _type = submitable ? type : undefined
	export let href = "/#contact-me"
	$: _href = submitable ? undefined : href
</script>

<svelte:element
	class="uppercase text-[16px] text-white font-bold font-grotek leading-[26px] tracking-[2.29px] border-b-2 border-b-green pb-[10px] {$$props.class ?? ''}"
	href={_href}
	this={submitable ? 'button' : 'a'}
	type={_type}
>
	<slot>
		contact us
	</slot>
</svelte:element>
