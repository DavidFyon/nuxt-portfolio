<template>
  <div class="container mx-auto xl:max-w-screen-xl">
    <h1 class="pt-6 font-bold font-tinos">
      {{ $t('blog.title') }}
    </h1>
    <div class="mb-4">
      {{ $t('blog.soon') }}
    </div>
  </div>
</template>

<script>
export default {
	name: 'Blog',
	head () {
    return {
      title: this.$t('meta.blog.title'),
      meta: [
        {
          hid: 'blog',
          name: 'blog',
          content: this.$t('meta.blog.description')
        }
      ]
    }
  }
}
</script>
