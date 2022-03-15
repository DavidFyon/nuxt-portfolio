<template>
	<header
		class="fixed top-0 z-auto w-full shadow-2xl animated"
		:class="{ scrolled: !view.atTopOfPage }"
		ref="header"
		v-scroll="onScroll"
	>
		<div
			class="container mx-auto xl:max-w-screen-xl sm:flex sm:items-center sm:py-3 sm:justify-between"
		>
			<div class="flex items-center justify-between py-3 logo sm:p-0">
				<nuxt-link to="/">
					<div class="my-2">
						<img
							class="block h-4"
							src="@/assets/images/logo.svg"
							alt="David FYON"
						/>
					</div>
				</nuxt-link>
				<div class="sm:hidden">
					<button
						type="button"
						@click="isOpen = !isOpen"
						class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
					>
						<svg
							class="w-6 h-6 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								v-if="isOpen"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
							<path
								v-else
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div :class="isOpen ? 'block' : 'hidden'" class="text-center sm:flex">
				<nuxt-link
					class="block py-1 mx-0 mt-0 font-normal text-white menu group focus:outline-none sm:mt-1 sm:mx-6"
					:class="{ home: isHome }"
          to="/"
          @click.native="isOpen ? isOpen = false : null"
				>
					{{ $t('about.title') }}
					<span
						class="block w-0 my-1 transition-all duration-200 ease-in-out border-b-2 border-purple-600 rounded-full group-hover:w-full"
					/>
				</nuxt-link>
				<nuxt-link
					class="block py-1 mx-0 mt-0 font-normal text-white menu group sm:ml-2 sm:mt-1 focus:outline-none sm:mx-6"
          :class="{ active: isActive }"
          to="/portfolio"
          @click.native="isOpen ? isOpen = false : null"
				>
					{{ $t('portfolio.title') }}
					<span
						class="block w-0 my-1 transition-all duration-200 ease-in-out border-b-2 border-purple-600 rounded-full group-hover:w-full"
					/>
				</nuxt-link>
				<!-- <nuxt-link
					class="block py-1 mx-0 mt-0 font-normal text-white menu group sm:ml-2 sm:mt-1 focus:outline-none sm:mx-6"
					to="/blog"
          @click.native="isOpen ? isOpen = false : null"
				>
					{{ $t('blog.title') }}
					<span
						class="block w-0 my-1 transition-all duration-200 ease-in-out border-b-2 border-purple-600 rounded-full group-hover:w-full"
					/>
				</nuxt-link> -->
			</div>
			<div :class="isOpen ? 'block' : 'hidden'" class="mt-3 mb-6 text-center sm:flex sm:my-0">
				<nuxt-link to="/contact" @click.native="isOpen ? isOpen = false : null">
					<button
						class="px-4 py-2 font-medium tracking-wide text-white uppercase transition-colors duration-100 transform bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none"
					>
						{{ $t('contact.title') }}
					</button>
				</nuxt-link>
				<!-- <locale-switcher /> -->
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header",

	data() {
		return {
			isOpen: false,
			view: {
				atTopOfPage: true
			}
		}
	},
  computed: {
    isHome() {
      return this.$route.path === '/'
    },
    isActive() {
      return this.$route.path.startsWith('/portfolio')
    }
  },
	mounted() {
		this.calculateHeight()
	},
	methods: {
		calculateHeight () {
			let height = this.$refs.header.clientHeight + 'px'
			this.$emit('setHeight', height)
		},
		// the function to call when the user scrolls, added as a method
		onScroll () {
			// when the user scrolls, check the pageYOffset
			if (window.pageYOffset > 0) {
				// user is scrolled
				if (this.view.atTopOfPage) this.view.atTopOfPage = false
			} else {
				// user is at top of page
				if (!this.view.atTopOfPage) this.view.atTopOfPage = true
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.scrolled {
	@apply shadow-2xl;
}
</style>
