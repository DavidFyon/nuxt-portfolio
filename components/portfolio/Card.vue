<template>
  <div class="cursor-pointer group">
    <nuxt-link :to="`/portfolio/${slug}`">
      <div
        class="relative overflow-hidden bg-gray-900 border-4 rounded-lg rounded-b-none shadow-lg h-60 sm:h-40 md:h-48 xl:h-60 hover:shadow-xl"
        :class="display === 'home' ? 'border-gray-900' : 'border-gray-800'"
      >
        <VLazyImage
          class="absolute top-0 object-cover object-center w-full h-full transition duration-500 ease-in-out transform scale-100 group-hover:scale-110"
          :src="getImgSrc"
          :src-placeholder="require('@/assets/images/empty.gif')"
          :alt="title"
        />
      </div>
      <div
        class="flex items-center justify-between w-full h-12 px-4 pt-3 pb-4 rounded-lg rounded-t-none shadow-lg"
        :class="display === 'home' ? 'bg-gray-900' : 'bg-gray-800'"
      >
        <div class="text-xl font-bold">{{ title }}</div>
        <div v-if="tags.length > 0" class="flex items-center justify-center">
          <div v-for="tag of tags" :key="tag">
            <div v-if="tag !== 'ALL'" class="px-2 py-1 ml-2 text-xs font-medium text-purple-600 uppercase border border-purple-600 rounded-md">
              {{ tag }}
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ""
      },
      slug: {
        type: String,
        default: ""
      },
      image: {
        type: String,
        default: ""
      },
      tags: {
        type: Array,
        default: () => []
      },
      link: {
        type: String,
        default: ""
      },
      display: {
        type: String,
        default: ""
      }
    },
    computed: {
      getImgSrc () {
        return require(`@/assets/images/portfolio/${this.slug}/${this.image}`)
      }
    }
  }
</script>
