<script lang="ts">
	export let value = "";
	export let placeholder: string;
</script>

<textarea 
	class="
		bg-dark-grey 
		outline-none 
		placeholder-white/50
		text-white 
		text-[1rem] 
		leading-[26px] 
		tracking-[-0.22px]
		border-b
		border-white/50
		px-6
		pb-4
		min-h-[106px]
	" 
	type="text" 
	bind:value 
	placeholder={placeholder}
/>
