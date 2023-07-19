<template>
  <div class="flex items-center justify-center mt-0 mb-4 md:justify-end sm:-mt-2">
    <button
      v-for="type of types"
      :key="type"
      class="px-2 py-1 ml-2 font-medium tracking-wide text-white uppercase transition-colors duration-100 transform border border-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-600"
      @click="$emit('select', type)"
    >
      {{ type }}
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
    types: {
      type: Array,
      default: () => [
        "ALL",
        "WEB",
        "APP",
        "PRINT",
        "MOTION"
      ]
    }
  }
}
</script>
