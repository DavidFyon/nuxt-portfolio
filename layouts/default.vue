<template>
	<div class="layout" v-scroll="onScroll">
		<div :style="{ marginTop: height }">
      <Nuxt />
		</div>
		<Header @setHeight="setHeaderHeight" />
		<PageIllustration />
		<ScrollTop :showTop="showTopBtn" />
		<Footer />
	</div>
</template>

<script>
export default {
	name: 'LayoutDefault',
	data () {
		return {
			height: null,
			showTopBtn: false
		}
	},
	methods: {
		setHeaderHeight (height) {
			this.height = height
		},
		onScroll () {
			this.showTopBtn = window.pageYOffset > 0
		}
	}
}
</script>
