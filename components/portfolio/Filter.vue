<template>
  <div class="flex items-center justify-center mt-0 mb-4 md:justify-end sm:-mt-4">
    <button
      v-for="tag of tags"
      :key="tag"
      class="px-2 py-1 ml-2 font-medium tracking-wide text-white uppercase transition-colors duration-100 transform border border-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-600"
      @click="$emit('select', tag)"
    >
      {{ tag }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    select: {
      type: String,
      default: "projects",
    },
    tags: {
      type: Array,
      default: () => [
        "ALL",
        "UI",
        "UX",
        "DEV",
      ]
    }
  }
}
</script>
