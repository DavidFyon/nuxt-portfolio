<template>
	<div
		:class="bgcolor"
		class="flex flex-col justify-center w-full p-4 mb-10 overflow-hidden rounded-md shadow-lg video"
	>
		<video autoplay loop muted :poster="require('@/assets/videos/poster.jpg')">
			<source :src="require(`@/assets/videos/${src}.webm`)" />
			<source :src="require(`@/assets/videos/${src}.mp4`)" />
		</video>
	</div>
</template>

<script>
export default {
	props: {
		bgcolor: {
			type: String,
			default: ""
		},
    src: {
			type: String,
			default: ""
		}
	}
}
</script>

<style lang="scss" scoped>
.video {
	video {
		width: 100%;
		height: auto;
	}
}
</style>
