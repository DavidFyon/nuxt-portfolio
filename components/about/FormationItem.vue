<template>
	<div>
		<div class="items-center sm:flex sm:justify-between">
			<div class="sm:inline-flex sm:items-center">
				<div class="flex justify-between sm:justify-start">
					<div class="mb-2 text-xl font-bold text-indigo-600 sm:mb-0">
						{{ title }}
					</div>
					<div class="ml-4 text-sm text-gray-400 sm:hidden">
						{{ date }}
					</div>
				</div>
			</div>
			<div class="hidden ml-4 text-sm text-gray-400 sm:block">
				{{ date }}
			</div>
		</div>
		<div class="pb-5 mt-2 mb-5 leading-relaxed border-b">
			{{ school }}
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
		date: {
			type: String,
			default: null
		},
		school: {
			type: String,
			default: null
		}
	}
}
</script>
