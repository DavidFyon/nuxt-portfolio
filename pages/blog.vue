<template>
  <div class="container mx-auto xl:max-w-screen-xl">
    <h1 class="pt-6 font-bold font-tinos">
      {{ $t('blog.title') }}
    </h1>
    <div class="flex items-center justify-center mb-16">
      <div class="px-4 py-2 text-base text-white bg-white border border-gray-800 rounded-md bg-opacity-5">
        {{ $t('blog.soon') }}
      </div>
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
