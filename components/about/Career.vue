<template>
	<div class="pt-16 pb-16 bg-light text-dark">
		<div class="container mx-auto sm:pt-32 md:pt-40 xl:max-w-screen-xl">
			<h2 class="mb-6 font-bold font-tinos">
        {{ $t('about.career.title') }}
      </h2>
			<div class="flex flex-wrap">
				<div class="w-full pr-0 lg:w-2/3 lg:pr-16">
					<AboutJobItem
						company="NGTV Expérience"
						:jobskills="[$t('about.career.jobs.front'), $t('about.career.jobs.designer')]"
						date="2021-2022"
						:description="$t('about.career.jobs.description.ngtv')"
					/>
          <AboutJobItem
						company="Wattsense"
						:jobskills="[$t('about.career.jobs.front'), $t('about.career.jobs.designer')]"
						date="2019-2021"
						:description="$t('about.career.jobs.description.wattsense')"
					/>
          <AboutJobItem
						company="Apollo"
						:jobskills="[$t('about.career.jobs.front'), $t('about.career.jobs.designer')]"
						date="2018-2019"
						:description="$t('about.career.jobs.description.apollo')"
					/>
					<AboutJobItem
						company="Wizaplace"
						:jobskills="[$t('about.career.jobs.front'), $t('about.career.jobs.designer')]"
						date="2017-2018"
						:description="$t('about.career.jobs.description.wizaplace')"
					/>
					<div class="flex justify-end">
						<button
							v-if="!showMoreJobs"
							class="inline-flex items-center px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-100 transform bg-gray-100 bg-opacity-50 rounded-md focus:outline-none hover:bg-gray-200 hover:bg-opacity-50"
							@click="showMoreJobs = !showMoreJobs"
						>
							<span>{{ $t('about.career.jobs.more') }}</span>
							<svg
								class="w-4 h-4 ml-2 text-purple-600"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
					</div>
          <AboutJobItem
            v-if="showMoreJobs"
						company="Econocom"
						:jobskills="[$t('about.career.jobs.front'), $t('about.career.jobs.designer')]"
						date="2016-2017"
						:description="$t('about.career.jobs.description.econocom')"
					/>
          <AboutJobItem
            v-if="showMoreJobs"
						company="Interlude santé"
						:jobskills="[$t('about.career.jobs.developer'), $t('about.career.jobs.designer')]"
						date="2013-2016"
						:description="$t('about.career.jobs.description.interlude')"
					/>
					<AboutJobItem
						v-if="showMoreJobs"
						company="Groupe Zannier"
						:jobskills="[$t('about.career.jobs.developer'), $t('about.career.jobs.designer')]"
						date="2010-2012"
						:description="$t('about.career.jobs.description.zannier')"
					/>
					<AboutJobItem
						v-if="showMoreJobs"
						company="FX-Com'unik"
						:jobskills="[$t('about.career.jobs.graphist'), $t('about.career.jobs.webdesigner')]"
						date="2008-2010"
						:description="$t('about.career.jobs.description.fx')"
					/>
					<AboutJobItem
						v-if="showMoreJobs"
						company="CCI de la Haute-Savoie"
						:jobskills="[$t('about.career.jobs.communication')]"
						date="2006-2008"
						:description="$t('about.career.jobs.description.cci')"
					/>
					<div class="flex justify-end">
						<button
							v-if="showMoreJobs"
							class="inline-flex items-center px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-100 transform bg-gray-100 bg-opacity-50 rounded-md focus:outline-none hover:bg-gray-200 hover:bg-opacity-50"
							@click="showMoreJobs = !showMoreJobs"
						>
							<span>{{ $t('about.career.jobs.less') }}</span>
							<svg
								class="w-4 h-4 ml-2 text-purple-600"
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
				<div class="w-full mt-12 lg:w-1/3 lg:mt-0">
					<AboutFormationItem
						:title="$t('about.career.formation.master')"
						date="2003-2006"
						:school="$t('about.career.formation.university')"
					/>
					<AboutFormationItem
						:title="$t('about.career.formation.bts')"
						date="2000-2003"
						:school="$t('about.career.formation.school')"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showMoreJobs: false
		}
	}
}
</script>
