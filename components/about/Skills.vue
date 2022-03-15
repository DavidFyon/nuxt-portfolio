<template>
	<div class="pt-16 pb-16 bg-gray-800">
		<div class="container flex flex-wrap mx-auto xl:max-w-screen-xl">
			<div class="w-full pb-12 pr-0 lg:pr-12 lg:pb-0 lg:w-1/3">
				<h2 class="mb-6 font-bold font-tinos">
          {{ $t('about.skills.title') }}
        </h2>
				<AboutSkillBar
          :title="$t('about.skills.ui.title')"
          :percent="11"
        />
				<AboutSkillBar
          :title="$t('about.skills.ux.title')"
          :percent="11"
        />
				<AboutSkillBar
					:title="$t('about.skills.dev.title')"
					:percent="10"
				/>
				<AboutSkillBar
					:title="$t('about.skills.communication.title')"
					:percent="8"
				/>
			</div>
			<div class="w-full lg:w-2/3">
				<div class="flex flex-wrap">
					<div class="md:w-1/2">
						<AboutSkillCard
							icon="skill-ui"
							:title="$t('about.skills.ui.title')"
							:content="$t('about.skills.ui.description')"
							:logos="[
								{ title: 'Figma', img: 'figma' },
								{ title: 'Sketch', img: 'sketch' }
							]"
						/>
					</div>
					<div class="md:w-1/2">
						<AboutSkillCard
							icon="skill-ux"
							:title="$t('about.skills.ux.title')"
							:content="$t('about.skills.ux.description')"
							:logos="[
								{ title: 'Zeplin', img: 'zeplin' },
								{ title: 'Marvel', img: 'marvel' }
							]"
						/>
					</div>
					<div class="md:w-1/2">
						<AboutSkillCard
							icon="skill-code"
							:title="$t('about.skills.dev.title')"
							:content="$t('about.skills.dev.description')"
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
							:title="$t('about.skills.communication.title')"
							:content="$t('about.skills.communication.description')"
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
