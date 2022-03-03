<template>
	<div class="pt-16 pb-16">
		<div class="container mx-auto xl:max-w-screen-xl">
			<h2 class="mb-6 font-bold font-tinos">Derniers projets</h2>
      <no-ssr>
        <isotope
          id="root_isotope"
          class="isoDefault"
          ref="articles"
          :item-selector="'element-item'"
          :list="list"
          :options="option"
          @filter="filterOption = arguments[0]"
          @sort="sortOption = arguments[0]"
        >
          <div
            v-for="element in list"
            :key="element.id"
            class="flex items-center justify-center h-40 p-5 bg-gray-900 item group"
            @click="select(element)"
          >
            <VLazyImage
              class="absolute w-full h-full transition duration-500 ease-in-out transform scale-100 opacity-100 group-hover:scale-110 group-hover:opacity-50"
              :src="require('@/assets/images/portfolio/' + element.img)"
              :src-placeholder="require('@/assets/images/empty.gif')"
              :alt="element.name"
            />
            <div
              class="flex items-center justify-center text-2xl font-bold text-white transition duration-150 opacity-0 title group-hover:opacity-100"
            >
              {{ element.name }}
            </div>
            <div
              class="absolute w-full h-full border border-gray-800"
            />
          </div>
        </isotope>
      </no-ssr>
			<router-link to="/portfolio/">
				<button
					class="block px-4 py-2 mx-auto mt-6 font-medium tracking-wide text-white uppercase transition-colors duration-100 transform bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none"
				>
					Tous les projets
				</button>
			</router-link>

			<div id="sort">
				<button
					:class="[sortOption === 'name' ? 'is-checked' : '']"
					@click="sort('name')"
				>
					Sort by name
				</button>
				<button
					:class="[sortOption === 'id' ? 'is-checked' : '']"
					@click="sort('id')"
				>
					Sort by id
				</button>
				<br />
				<button
					:class="[filterOption === 'all' ? 'is-checked' : '']"
					@click="filter('all')"
				>
					Filter by all
				</button>
				<button
					:class="[filterOption === 'web' ? 'is-checked' : '']"
					@click="filter('web')"
				>
					Filter by web
				</button>
				<button
					:class="[filterOption === 'app' ? 'is-checked' : '']"
					@click="filter('app')"
				>
					Filter by app
				</button>
			</div>
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
			],
			currentLayout: "masonry",
			selected: null,
			sortOption: "original-order",
			filterOption: "all",
			option: {
				itemSelector: ".element-item",
				getFilterData: {
					all() {
						return true;
					},
					web(el) {
						return !!el.web;
					},
					app(el) {
						return !!el.app;
					}
				},
				getSortData: {
					name: "name"
				}
			}
		}
	},
	methods: {
		sort (key) {
			this.$refs.articles.sort(key);
		},
		filter (key) {
			this.$refs.articles.filter(key);
		},
		select (el) {
			this.$router.push({ name: el.link });
		}
	}
}
</script>

<style lang="scss" scoped>
.isoDefault {
	min-height: 210px;
	margin: 0.5em -0.5em;
}
.item {
	padding: 1em;
	margin: 0.5em;
	min-width: 200px;
	height: 250px;
	width: calc(33.3% - 1em);
	cursor: pointer;
	overflow: hidden;
	&:hover {
		img {
			filter: blur(2px);
		}
	}
	.title {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	/* lg */
	@media (max-width: 1024px) {
		width: calc(50% - 1em);
	}
	/* md */
	@media (max-width: 768px) {
		width: calc(50% - 1em);
	}
	/* sm */
	@media (max-width: 640px) {
		width: calc(100% - 1em);
	}
}
</style>
