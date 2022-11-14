// https://v3.nuxtjs.org/api/configuration/nuxt.config

// import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  modules: [],
  css: ['/assets/css/main.scss'],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Mulish&display=swap' },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css'
        }
      ]
    }
  }
})
