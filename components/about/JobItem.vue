<template>
	<div>
		<div class="items-center sm:flex sm:justify-between">
			<div class="sm:inline-flex sm:items-center">
				<div class="flex justify-between sm:justify-start">
					<div class="mb-2 text-xl font-bold text-indigo-600 sm:mb-0">
						{{ company }}
					</div>
					<div class="ml-4 text-sm text-gray-400 sm:hidden">
						{{ date }}
					</div>
				</div>
				<div v-if="jobskills.length > 0" class="sm:ml-4">
					<div
						v-for="jobskill of jobskills"
						:key="jobskill"
						class="inline-flex items-center justify-center"
					>
						<div
							class="px-4 py-1 mr-2 text-sm text-indigo-600 bg-gray-300 bg-opacity-25 rounded-full"
						>
							{{ jobskill }}
						</div>
					</div>
				</div>
			</div>
			<div class="hidden ml-4 text-sm text-gray-400 sm:block">
				{{ date }}
			</div>
		</div>
		<div class="pb-5 mt-2 mb-5 leading-relaxed border-b">
			{{ description }}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		company: {
			type: String,
			default: null
		},
		jobskills: {
			type: Array,
			default: () => []
		},
		date: {
			type: String,
			default: null
		},
		description: {
			type: String,
			default: null
		}
	}
}
</script>
