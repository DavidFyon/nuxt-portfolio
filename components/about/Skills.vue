<template>
	<div class="pt-16 pb-16 bg-gray-800">
		<div class="container flex flex-wrap mx-auto xl:max-w-screen-xl">
			<div class="w-full pb-12 pr-0 lg:pr-12 lg:pb-0 lg:w-1/3">
				<h2 class="mb-6 font-bold font-tinos">
          {{ $t('about.skills.title') }}
        </h2>
				<AboutSkillBar :title="$t('about.skills.ui.title')" :percent="11" :show="showSkill" />
				<AboutSkillBar :title="$t('about.skills.ux.title')" :percent="11" :show="showSkill" />
				<AboutSkillBar
					:title="$t('about.skills.development.title')"
					:percent="10"
					:show="showSkill"
				/>
				<AboutSkillBar
					:title="$t('about.skills.communication.title')"
					:percent="8"
					:show="showSkill"
				/>
			</div>
			<div class="w-full lg:w-2/3">
				<div class="flex flex-wrap">
					<div class="md:w-1/2">
						<AboutSkillCard
							icon="skill-ui"
							title="UI Design"
							content="Design system, direction artistique, charte graphique, design d’interfaces, responsive design, illustrations, animations..."
							:logos="[
								{ title: 'Figma', img: 'figma' },
								{ title: 'Sketch', img: 'sketch' }
							]"
						/>
					</div>
					<div class="md:w-1/2">
						<AboutSkillCard
							icon="skill-ux"
							title="UX Design"
							content="Audit et analyse, wireframes, charte ergonomique, expérience utilisateur, design thinking, human centric..."
							:logos="[
								{ title: 'Zeplin', img: 'zeplin' },
								{ title: 'Marvel', img: 'marvel' }
							]"
						/>
					</div>
					<div class="md:w-1/2">
						<AboutSkillCard
							icon="skill-code"
							title="Frontend development"
							content="Développement sur-mesure, HTML, JavaScript, SASS, Headless CMS, APIs, Responsive, SEO, Cross-Browser, Git Workflow..."
							:logos="[
								{ title: 'Nuxt', img: 'nuxt' },
								{ title: 'VueJS', img: 'vuejs' },
								{ title: 'Tailwind', img: 'tailwind' },
								{ title: 'Vuetify', img: 'vuetify' },
                { title: 'Sass', img: 'sass' }
							]"
						/>
					</div>
					<div class="md:w-1/2">
						<AboutSkillCard
							icon="skill-com"
							title="Communication"
							content="Stratégie de marque, naming, création de logo et identité visuelle, communication digitale, éditoriale, événementielle, photo, vidéo..."
							:logos="[
								{
									title: 'Photoshop',
									img: 'photoshop'
								},
								{
									title: 'Illustrator',
									img: 'illustrator'
								},
								{ title: 'Indesign', img: 'indesign' },
								{ title: 'Première', img: 'premiere' },
								{
									title: 'After Effect',
									img: 'aftereffect'
								},
								{ title: 'Lightroom', img: 'lightroom' }
							]"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			showSkill: false
		}
	},
	mounted () {
		this.showSkill = true
	}
}
</script>
