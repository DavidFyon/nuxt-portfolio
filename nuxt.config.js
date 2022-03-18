export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-portfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Tinos&family=Inter:wght@400;500;600;700;800;900&display=fallback",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/scroll.js",
    "~/plugins/event-bus.js",
    { src: "~/plugins/toast.js", mode: "client" },
    "~/plugins/tooltip.js",
    "~/plugins/lazy-image.js",
    "~/plugins/flags.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "nuxt-animejs",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/i18n"],

  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "fr",
    seo: false,
    lazy: true,
    langDir: "./locales/",
    detectBrowserLanguage: false,
    locales: [
      {
        code: "fr",
        file: "fr.js",
      },
      {
        code: "en",
        file: "en.js",
      },
    ],
    parsePages: false,
    vueI18n: {
      fallbackLocale: "fr",
    },
    pages: {
      "/": {
        fr: "/",
        en: "/en",
      },
    },
  },
  env: {
    baseUrl: process.env.NUXT_ENV_BASE_URL || "http://localhost:3000",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
