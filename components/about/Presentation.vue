<template>
	<div class="pt-16 pb-16 md:pt-32 md:pb-32">
		<div class="container flex flex-wrap mx-auto xl:max-w-screen-xl">
			<div class="w-full md:w-1/2">
				<h1
					class="mt-0 text-4xl font-bold leading-tight font-tinos"
					data-aos="fade-in"
				>
					Je suis David FYON, designer & développeur
				</h1>
				<p
					class="leading-relaxed text-white text-opacity-50"
					data-aos="fade-in"
					data-aos-delay="500"
				>
					Créatif, autonome et passionné je suis intéressé par toutes
					les nouvelles tendances dans les domaines du design, de
					l’interactivité et de la communication.
				</p>
				<a :href="`${publicPath}cv_davidfyon.pdf`" target="_blank">
					<button
						class="px-4 py-2 mt-6 font-medium tracking-wide text-white uppercase transition-colors duration-100 transform bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none"
						data-aos="fade-in"
						data-aos-delay="500"
					>
						Télécharger mon CV
					</button>
				</a>
			</div>
			<div class="w-full md:w-1/2">
				<div
					class="relative flex items-center justify-center invisible h-full md:visible"
				>
					<div class="flex items-center justify-center animation">
						<div class="top">
							<AboutBubble title="Frontend development" />
						</div>
						<div class="left">
							<AboutBubble title="User interface design" />
						</div>
						<div class="right">
							<AboutBubble title="User experience design" />
						</div>
						<div class="w-4 h-4 bg-purple-600 rounded-full point" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
  name: 'Presentation',
  mixins: [aosMixin],
	data () {
		return {
			publicPath: process.env.BASE_URL
		}
	},
	mounted () {
		this.loadBubbleAnimation()
	},
	methods: {
		loadBubbleAnimation() {
			this.$anime({
				targets: ".bubble",
				scale: 1.1,
				duration: 3000,
				easing: "linear",
				direction: "alternate",
				loop: false,
				autoplay: true
			})
		}
	}
}
</script>
