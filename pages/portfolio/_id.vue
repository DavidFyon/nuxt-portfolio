<template>
  <div v-if="project">
    {{ project }}
  </div>
</template>

<script>
  export default {
    computed: {
      project () {
        return this.$store.getters.getProjectById(this.$route.params.id)
      }
    }
  }
</script>
