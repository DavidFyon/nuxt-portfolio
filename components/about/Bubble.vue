<template>
	<div class="relative flex items-center justify-center w-48 h-48 p-10">
		<div
			class="absolute z-0 w-full h-full bg-gray-800 rounded-full bubble shadow-lg"
		/>
		<div class="z-10 text-sm text-center text-white uppercase">
			{{ title }}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: ""
		}
	}
};
</script>
