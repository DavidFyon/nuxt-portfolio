<template>
	<div class="pt-16 pb-16 bg-gray-800">
		<div class="container mx-auto xl:max-w-screen-xl portfolio">
			<h2 class="mb-6 font-bold font-tinos">
        {{ $t('portfolio.projects.last') }}
      </h2>
      <div class="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
        <PortfolioCard
          v-for="project in filteredProjects.slice(0, 3)"
          :key="project.id"
          :title="project.title"
          :slug="project.slug"
          :image="project.image"
          :tags="project.tags"
          display="home"
        />
      </div>
			<nuxt-link to="/portfolio/">
				<button
					class="block px-4 py-2 mx-auto mt-10 font-medium tracking-wide text-white uppercase transition-colors duration-100 transform bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none"
				>
					{{ $t('portfolio.projects.all') }}
				</button>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex"

export default {
	data () {
		return {
      selectedProject: ""
    }
	},
  computed: {
    ...mapState(["projects"]),
    filteredProjects() {
      if (this.selectedProject) {
        return this.filterProjectsByCategory()
      } else {
        return this.projects
      }
    }
  }
}
</script>
