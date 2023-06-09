export default {
  ssr: false,

  head: {
    title: 'denik-adverts',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  components: [
    '~/components',
    { path: '~/components/buttons', extensions: ['vue'] }
  ],

  buildModules: [
    '@nuxt/typescript-build',
  ],

  modules: [
    '@nuxtjs/axios',
    'nuxt-buefy',
  ],

  plugins: [
    '~/plugins/fontawesome.js'
  ],

  axios: {
    baseURL: '/',
  },

  build: {
    postcss: {
      plugins: {
        "postcss-custom-properties": false
      },
    },
  },
}
