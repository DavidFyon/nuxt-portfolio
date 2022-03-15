<template>
	<div class="mb-6">
		<div class="mb-2">{{ title }}</div>
		<div class="w-full h-2 bg-indigo-800 bg-opacity-50 rounded-lg">
			<div
				class="block h-2 transition-all duration-1000 ease-out bg-indigo-600 rounded-lg gradiant"
				:class="`w-${percent}/12`"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: null
		},
		percent: {
			type: Number,
			default: 0
		}
	}
}
</script>
