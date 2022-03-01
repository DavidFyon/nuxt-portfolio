<template>
  <div class="container mx-auto xl:max-w-screen-xl">
    Test
  </div>
</template>

<script>
export default {
  name: 'Index',
  head () {
    return {
      title: this.$t('meta.index.title'),
      meta: [
        {
          hid: 'index',
          name: 'index',
          content: this.$t('meta.index.description')
        }
      ]
    }
  }
}
</script>