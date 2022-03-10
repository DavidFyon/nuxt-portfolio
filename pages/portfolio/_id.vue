<template>
  <div v-if="project" v-scroll="onScroll">
    <div class="pt-16 pb-16">
      <div class="container flex flex-wrap mx-auto xl:max-w-screen-xl">
        <div class="items-center w-full md:w-2/3">
          <div
						class="block w-20 h-1 border-b-2 border-purple-600 rounded-full"
					/>
					<!-- TITLE -->
					<h1 class="mt-6 mb-2 text-4xl font-bold font-tinos">
						{{ project.title }}
					</h1>
					<!-- DESCRIPTION -->
					<p class="leading-relaxed text-white text-opacity-50">
						{{ $t(`projects.${project.slug}.description`) }}
					</p>
        </div>
        <div class="flex items-center justify-end w-full md:w-1/3">
					<!-- ARROWS -->
					<nuxt-link to="/">
						<img
							alt="prev"
							src="@/assets/images/icons/arrow.svg"
							class="w-10 h-10 mt-6 mr-2 transition-opacity duration-100 transform -rotate-180 md:mt-0 opacity-40 hover:opacity-100"
						/>
					</nuxt-link>
					<nuxt-link to="/">
						<img
							alt="next"
							src="@/assets/images/icons/arrow.svg"
							class="w-10 h-10 mt-6 transition-opacity duration-100 md:mt-0 opacity-40 hover:opacity-100"
						/>
					</nuxt-link>
				</div>
      </div>
    </div>
    <div class="pt-6 pb-16 bg-light text-dark">
			<div class="container flex flex-wrap mx-auto xl:max-w-screen-xl">
				<div class="flex items-center justify-between w-full">
					<div class="left">
						<!-- DATE -->
						<div
							v-if="project.date"
							class="flex items-center text-sm text-gray-400 uppercase"
						>
							<div
								class="inline-flex items-center justify-center w-5 h-5 mr-2 text-indigo-600"
							>
								<img
									alt="date"
									class="w-auto h-full"
									src="@/assets/images/icons/date.svg"
								/>
							</div>
							{{ project.date }}
						</div>
					</div>
					<div class="flex flex-wrap right">
						<!-- UI -->
						<div
							v-if="project.tags.includes('UI')"
							class="flex items-center text-sm text-gray-400 uppercase"
						>
							<div
								class="inline-flex items-center justify-center w-5 h-5 mr-2 text-indigo-600"
							>
								<img
									alt="UI"
									class="w-auto h-full"
									src="@/assets/images/icons/ui.svg"
								/>
							</div>
							<span class="hidden md:block">
								{{ $t('portfolio.skills.ui') }}
							</span>
						</div>
						<!-- UX -->
						<div
							v-if="project.tags.includes('UX')"
							class="flex items-center ml-2 text-sm text-gray-400 uppercase sm:ml-6"
						>
							<div
								class="inline-flex items-center justify-center w-5 h-5 mr-2 text-indigo-600"
							>
								<img
									alt="UX"
									class="w-auto h-full"
									src="@/assets/images/icons/ux.svg"
								/>
							</div>
							<span class="hidden md:block">
								{{ $t('portfolio.skills.ux') }}
							</span>
						</div>
						<!-- CODE -->
						<div
							v-if="project.tags.includes('DEV')"
							class="flex items-center ml-2 text-sm text-gray-400 uppercase sm:ml-6"
						>
							<div
								class="inline-flex items-center justify-center w-5 h-5 mr-2 text-indigo-600"
							>
								<img
									alt="DEV"
									class="w-auto h-full"
									src="@/assets/images/icons/code.svg"
								/>
							</div>
							<span class="hidden md:block">
								{{ $t('portfolio.skills.dev') }}
							</span>
						</div>
					</div>
				</div>

				<!-- CONTENT -->
				<div class="w-full mt-10 md:w-1/3">
					<div
						class="sticky transition-transform transform"
						:style="`top: ${stickyTop}`"
					>
						<!-- LOGO -->
						<div
							class="flex items-center justify-center mr-0 md:mr-10"
						>
							<img :src="getLogoSrc" :alt="project.title" class="w-auto h-auto" />
						</div>
						<!-- PROJECT -->
						<div
							class="mt-8 mr-0 text-xl font-bold text-indigo-600 md:mr-10"
						>
							{{ $t('portfolio.projects.project') }}
						</div>
						<div class="mt-3 mr-0 md:mr-10">
							{{ $t(`projects.${project.slug}.project`) }}
						</div>
						<!-- FONCTIONALITIES -->
						<div
							class="mt-6 mr-0 text-xl font-bold text-indigo-600 md:mr-10"
						>
							{{ $t('portfolio.projects.functionnalities') }}
						</div>
						<div class="mt-3 mr-0 md:mr-10">
							<ul>
                <li v-for="(functionnality, index) in $t(`projects.${project.slug}.functionnalities`)" :key="index">
                  - {{ functionnality }}
                </li>
              </ul>
						</div>
						<!-- TECHNICAL -->
						<div
							class="mt-6 mr-0 text-xl font-bold text-indigo-600 md:mr-10"
						>
							{{ $t('portfolio.projects.specifications') }}
						</div>
						<div class="mt-3 mr-0 md:mr-10">
							<ul>
                <li v-for="(specification, index) in $t(`projects.${project.slug}.specifications`)" :key="index">
                  - {{ specification }}
                </li>
              </ul>
						</div>
						<!-- LINK -->
						<div class="mt-8 mr-0 md:mr-10">
							<button
                class="px-4 py-2 font-medium tracking-wide text-white uppercase transition-colors duration-100 transform bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none"
                @click="loadUrl($t(`projects.${project.slug}.url`))"
              >
                {{ $t('portfolio.projects.website') }}
              </button>
						</div>
					</div>
				</div>
				<div class="w-full mt-10 md:w-2/3">
					<PortfolioVideo
            bgcolor="bg-gray-100"
            :src="$t(`projects.${project.slug}.video`)"
          />
          <PortfolioVisual
            v-for="(visual, index) in $t(`projects.${project.slug}.visuals`)"
            :key="index"
            bgcolor="bg-gray-100"
            :slug="project.slug"
            :src="visual.src"
            :alt="visual.alt"
          />
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  data() {
		return {
			stickyTop: "0"
		}
	},
  computed: {
    ...mapState(["projects"]),
    filteredProjects () {
      return this.projects
    },
    project () {
      return this.$store.getters.getProjectById(this.$route.params.id)
    },
    getLogoSrc () {
      return require(`@/assets/images/logos/${this.project.logo}`)
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    console.log(this.filteredProjects.findIndex(project => project.slug === this.$route.params.id))
  },
  methods: {
		onScroll() {
			if (window.pageYOffset > 0) {
				this.stickyTop = "7rem";
			}
		},
    loadUrl(url) {
			window.open(url, "_blank");
		}
	}
}
</script>