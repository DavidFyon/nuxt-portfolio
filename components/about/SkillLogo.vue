<template>
  <div
    @mouseover="showTitle = true"
    @mouseleave="showTitle = false"
    id="logo"
    class="flex items-center justify-center w-10 h-10 text-white transition-all duration-100 ease-out bg-gray-700 border border-gray-700 w-min-content align-center group-hover:border-gray-600"
    v-tooltip.bottom="title"
  >
    <img :alt="title" :src="getImgSrc" />
  </div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: null
		},
		logo: {
			type: String,
			default: null
		}
	},

	data() {
		return {
			showTitle: false
		};
	},

	computed: {
		getImgSrc() {
			return require(`@/assets/images/logos/${this.logo}.svg`);
		}
	}
};
</script>

<style lang="scss" scoped>
#logo {
	border-radius: 20px;
	padding: 5px;
	img {
		height: 18px;
		width: auto;
		max-width: 20px;
	}
}
</style>
