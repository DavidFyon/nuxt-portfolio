<template>
	<div class="pt-16 pb-16 sm:-mb-48 md:-mb-56">
		<div
			class="container flex flex-wrap items-center mx-auto xl:max-w-screen-xl"
		>
			<h2 class="w-full mb-6 font-bold font-tinos md:w-2/12 lg:w-1/12 md:mb-0">
				{{ $t('about.vision.title') }}
			</h2>
			<div
				class="w-full pl-0 pr-0 text-white text-opacity-50 md:pl-8 xl:pl-3 md:w-10/12 lg:w-11/12"
			>
				<p class="w-full pr-0 leading-relaxed md:w-5/6 lg:w-2/3" v-html="$t('about.vision.description')" />
			</div>
			<div
				class="flex justify-center w-full p-10 mt-10 sm:px-4 sm:py-16 sm:mt-16 bg-purpledark item-center"
			>
				<img
					data-aos="fade-in"
					class="block w-full h-auto max-w-2xl sm:w-3/4 md:w-2/3"
					src="@/assets/images/vision.svg"
					alt="Vision"
				/>
			</div>
		</div>
	</div>
</template>
