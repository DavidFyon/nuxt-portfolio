<template>
	<div>
		<div class="pt-16 pb-16">
			<div class="container flex flex-wrap mx-auto xl:max-w-screen-xl">
				<div class="items-center w-full md:w-2/3">
					<div
						class="block w-20 h-1 border-b-2 border-purple-600 rounded-full"
					/>
					<!-- TITLE -->
					<h1 class="mt-6 mb-2 text-4xl font-bold font-tinos">
						<slot name="title" />
					</h1>
					<!-- DESCRIPTION -->
					<p class="leading-relaxed text-white text-opacity-50">
						<slot name="description" />
					</p>
				</div>
				<div class="flex items-center justify-end w-full md:w-1/3">
					<!-- ARROWS -->
					<router-link to="/">
						<img
							alt="prev"
							src="@/assets/images/icons/arrow.svg"
							class="w-10 h-10 mt-6 mr-2 transition-opacity duration-100 transform -rotate-180 md:mt-0 opacity-40 hover:opacity-100"
						/>
					</router-link>
					<router-link to="/">
						<img
							alt="next"
							src="@/assets/images/icons/arrow.svg"
							class="w-10 h-10 mt-6 transition-opacity duration-100 md:mt-0 opacity-40 hover:opacity-100"
						/>
					</router-link>
				</div>
			</div>
		</div>
		<div class="pt-6 pb-16 bg-light text-dark">
			<div class="container flex flex-wrap mx-auto xl:max-w-screen-xl">
				<div class="flex items-center justify-between w-full">
					<div class="left">
						<!-- DATE -->
						<div
							v-if="this.$slots.date"
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
							<slot name="date" />
						</div>
					</div>
					<div class="flex flex-wrap right">
						<!-- UI -->
						<div
							v-if="this.$slots.ui"
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
								<slot name="ui" />
							</span>
						</div>
						<!-- UX -->
						<div
							v-if="this.$slots.ux"
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
								<slot name="ux" />
							</span>
						</div>
						<!-- CODE -->
						<div
							v-if="this.$slots.code"
							class="flex items-center ml-2 text-sm text-gray-400 uppercase sm:ml-6"
						>
							<div
								class="inline-flex items-center justify-center w-5 h-5 mr-2 text-indigo-600"
							>
								<img
									alt="UX"
									class="w-auto h-full"
									src="@/assets/images/icons/code.svg"
								/>
							</div>
							<span class="hidden md:block">
								<slot name="code" />
							</span>
						</div>
					</div>
				</div>

				<!-- CONTENT -->
				<div class="w-full mt-10 md:w-1/3">
					<div
						class="sticky transition-transform transform"
						:style="`top: ${this.stickyTop}`"
					>
						<!-- LOGO -->
						<div
							class="flex items-center justify-center mr-0 md:mr-10"
						>
							<slot name="logo" />
						</div>
						<!-- PROJECT -->
						<div
							class="mt-8 mr-0 text-xl font-bold text-indigo-600 md:mr-10"
						>
							Projet
						</div>
						<div class="mt-3 mr-0 md:mr-10">
							<slot name="projet" />
						</div>
						<!-- FONCTIONALITIES -->
						<div
							class="mt-6 mr-0 text-xl font-bold text-indigo-600 md:mr-10"
						>
							Principales fonctionnalités
						</div>
						<div class="mt-3 mr-0 md:mr-10">
							<slot name="fonctionnalities" />
						</div>
						<!-- TECHNICAL -->
						<div
							class="mt-6 mr-0 text-xl font-bold text-indigo-600 md:mr-10"
						>
							Caractéristiques techniques
						</div>
						<div class="mt-3 mr-0 md:mr-10">
							<slot name="technical" />
						</div>
						<!-- LINK -->
						<div class="mt-8 mr-0 md:mr-10">
							<slot name="link" />
						</div>
					</div>
				</div>
				<div class="w-full mt-10 md:w-2/3">
					<slot name="visuals" />
					<slot name="videos" />
					<slot name="visuals2" />
				</div>
			</div>
		</div>
	</div>
</template>
