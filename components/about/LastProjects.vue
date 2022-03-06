<template>
	<div class="pt-16 pb-16 bg-gray-800">
		<div class="container mx-auto xl:max-w-screen-xl portfolio">
			<h2 class="mb-6 font-bold font-tinos">
        {{ $t('portfolio.projects.last') }}
      </h2>
      Projects
			<nuxt-link to="/portfolio/">
				<button
					class="block px-4 py-2 mx-auto mt-6 font-medium tracking-wide text-white uppercase transition-colors duration-100 transform bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none"
				>
					{{ $t('portfolio.projects.all') }}
				</button>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			list: [
				{
					name: "Wattsense",
					id: 1,
					app: true,
					img: "wattsense/console/home.jpg",
					link: "appwattsense"
				},
				{
					name: "Wattsense",
					id: 2,
					web: true,
					img: "wattsense/console/home.jpg",
					link: "webwattsense"
				},
				{
					name: "Albert",
					id: 3,
					app: true,
					img: "wattsense/console/home.jpg",
					link: "appwattsense"
				}
			]
		}
	}
}
</script>
