<template>
  <div class="container mx-auto xl:max-w-screen-xl">
    <h1 class="pt-6 font-bold font-tinos">Contact</h1>
    <div class="flex flex-wrap mb-4">
      <div
        class="w-full mt-4 mb-4 border-none lg:mt-0 lg:mb-0 lg:pr-10 lg:border-r-2 lg:border-white lg:border-opacity-25 lg:border-solid lg:w-2/3"
      >
        <span class="text-white text-opacity-50">
          Pour toutes <b>questions</b>, <b>suggestions</b> ou
          <b>remarques</b> n’hésitez pas à me contacter en
          remplissant le formulaire ci-dessous :
        </span>
        <FormContact class="mt-6" />
      </div>
      <div class="w-full mt-10 lg:pl-10 lg:mt-0 lg:w-1/3">
        <div class="text-white">
          <div class="flex mb-4 phone">
            <span class="w-6 h-6 mr-4 text-purple-600 icon">
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </span>
            <span>
              <a href="tel:0620530488">
                06 20 53 04 88
              </a>
            </span>
          </div>
          <div class="flex mb-4 mail">
            <span class="w-6 h-6 mr-4 text-purple-600 icon">
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <span>
              <a href="mailto:davidfyon@gmail.com">
                davidfyon@gmail.com
              </a>
            </span>
          </div>
          <div class="flex mb-4 address">
            <span class="w-6 h-6 mr-4 text-purple-600 icon">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <span>
              17 chemin de la Combat<br />69530 Orliénas
            </span>
          </div>
          <div class="flex mt-10 mb-4">
            <Map />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "Contact",
	metaInfo: {
		title: "Contact"
	}
}
</script>