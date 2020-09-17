require("dotenv").config()
const Sass = require("sass")
const Fiber = require("fibers")

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: "ja",
    },
    title: "Profill | バーチャル名刺を作成しよう",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "WEB上で簡単にバーチャル名刺を作成できるサービス",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Profill | バーチャル名刺を作成しよう",
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://profille.netlify.app/",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Profill | バーチャル名刺を作成しよう",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "WEB上で簡単にバーチャル名刺を作成できるサービス",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/images/ogp/ogp.png",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    "@/plugins/vuelidate",
    "@/plugins/loader",
    { src: "@/plugins/vue-html2canvas", mode: "client" },
    // { src: "@/plugins/localstorage", mode: "client" },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [["@nuxtjs/tailwindcss"]],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/dotenv", "@nuxtjs/axios"],

  generate: {
    fallback: true,
    crawler: false,
    routes() {
      const result = []
      const { templates } = require("./static/data/templates.json")
      for (let template of templates) {
        result.push(`/${template.name}`)
        for (let type of template.types) {
          result.push(`/${template.name}/${type.name}/step1`)
          result.push(`/${template.name}/${type.name}/step2`)
          result.push(`/${template.name}/${type.name}/step3`)
          result.push(`/${template.name}/${type.name}/step4`)
          result.push(`/${template.name}/${type.name}/preview`)
        }
      }
      return result
    },
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
      },
    },
  },
}
