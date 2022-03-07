<template>
  <div class="container mx-auto xl:max-w-screen-xl portfolio">
    <div class="flex items-center justify-between">
      <h1 class="pt-6 font-bold font-tinos">
        {{ $t('portfolio.title') }}
      </h1>
      <PortfolioFilter @select="selectProjects" class="hidden pt-6 sm:flex" />
    </div>
    <div class="mb-4">
      <PortfolioFilter @select="selectProjects" class="flex sm:hidden" />
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <PortfolioCard
          v-for="project in filteredProjects"
          :key="project.id"
          :title="project.title"
          :slug="project.slug"
          :image="project.image"
          :tags="project.tags"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
	name: "Portfolio",
	head () {
    return {
      title: this.$t('meta.portfolio.title'),
      meta: [
        {
          hid: 'portfolio',
          name: 'portfolio',
          content: this.$t('meta.portfolio.description')
        }
      ]
    }
  },
  data () {
		return {
      selectedProject: "",
      searchProject: "",
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
    },
  },
  methods: {
    selectProjects(project) {
      this.selectedProject = project
    },
    filterProjectsByCategory() {
      return this.projects.filter(project => {
        return project.tags.includes(this.selectedProject)
      })
    }
  }
}
</script>
