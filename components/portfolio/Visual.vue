<template>
	<div :class="bgcolor" class="block w-full p-4 mb-10 rounded-md shadow-lg">
		<VLazyImage
      class="w-full h-full rounded-md"
      :src="require(`@/assets/images/portfolio/${slug}/${src}`)"
      :src-placeholder="require('@/assets/images/empty.gif')"
      :alt="alt"
    />
	</div>
</template>

<script>
export default {
	props: {
		bgcolor: {
			type: String,
			default: ""
		},
    slug: {
			type: String,
			default: ""
		},
    src: {
			type: String,
			default: ""
		},
    alt: {
			type: String,
			default: ""
		}
	}
}
</script>
