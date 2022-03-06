<template>
  <div class="container mx-auto xl:max-w-screen-xl portfolio">
    <h1 class="pt-6 font-bold font-tinos">
      {{ $t('portfolio.title') }}
    </h1>
    <div class="mb-4">
      <PortfolioFilter @select="selectProjects" />
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <PortfolioCard
          v-for="project in filteredProjects"
          :key="project.id"
          :title="project.name"
          :slug="project.slug"
          :image="project.image"
          :tags="project.tags"
          :link="project.link"
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
