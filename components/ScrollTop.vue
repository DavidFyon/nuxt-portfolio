<template>
	<div>
		<div
			class="fixed bottom-0 right-0 block mb-4 mr-4 transition-opacity duration-100 ease-in-out cursor-pointer"
			@click="scrollToTop"
			:class="{ 'opacity-0 pointer-events-none': !showTop }"
		>
			<button
				class="block w-10 h-10 p-1 text-white uppercase transition-colors duration-100 ease-in-out bg-gray-600 rounded-full shadow-md scrolltop bg-opacity-70 bg-clip-padding hover:bg-gray-700 focus:outline-none"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 15l7-7 7 7"
					/>
				</svg>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		showTop: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		scrollToTop () {
			window.scroll({ top: 0, behavior: 'smooth' })
		}
	}
}
</script>
