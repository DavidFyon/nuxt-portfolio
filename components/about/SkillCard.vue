<template>
	<div
		class="p-6 mb-6 transition duration-200 ease-out border border-gray-600 rounded-lg group hover:bg-gray-700 hover:bg-opacity-50 hover:shadow-md md:border-0 md:mb-0"
	>
		<div
			class="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-white bg-indigo-600 rounded-full"
		>
			<img :alt="title" class="w-auto h-full" :src="getImgSrc" />
		</div>
		<span
			class="block w-20 mb-4 border-b-2 border-purple-600 rounded-full"
		/>
		<h2 class="text-xl font-bold text-white">
			{{ title }}
		</h2>
		<p class="leading-relaxed text-white text-opacity-50">
			{{ content }}
		</p>
		<div class="mt-4">
			<div
				class="inline-flex mt-2 mr-2"
				v-for="logo in logos"
				:key="logo.title"
			>
				<AboutSkillLogo :title="logo.title" :logo="logo.img" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		icon: {
			type: String,
			default: null
		},
		title: {
			type: String,
			default: null
		},
		content: {
			type: String,
			default: null
		},
		logos: {
			type: Array,
			default: () => []
		}
	},

	computed: {
		getImgSrc() {
			return require(`@/assets/images/icons/${this.icon}.svg`);
		}
	}
}
</script>
