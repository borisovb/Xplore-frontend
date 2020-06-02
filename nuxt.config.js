require('dotenv').config()
export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/xplore-grey.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  loadingIndicator: {
    name: 'three-bounce',
    color: '#58A4B0',
    background: '#373f51'
  },

  /*
   ** Global CSS
   */
  css: ['~assets/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/global-components', ssr: false },
    { src: '~plugins/vuex-persist', ssr: false },
    { src: '~plugins/repository', ssr: false },
    { src: '~plugins/fontawesome', ssr: false },
    { src: '~plugins/vue-loading', ssr: false }, // Doc: https://github.com/ankurk91/vue-loading-overlay
    { src: '~plugins/auth', ssr: false }, // Auth Configurations
    { src: '~plugins/vuelidate', ssr: false }, // Doc: https://vuelidate.js.org/#sub-basic-form
    { src: '~plugins/vue-modal', ssr: false }, // Doc: http://vue-js-modal.yev.io
    { src: '~plugins/vue-toast', ssr: false }, // Doc: https://github.com/ankurk91/vue-toast-notification
    { src: '~plugins/vue-swiper', ssr: false }, // Doc: https://github.com/surmon-china/vue-awesome-swiper
    { src: '~plugins/vue-infinite-loading', ssr: false } // Doc: https://github.com/PeachScript/vue-infinite-loading
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module', // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/tailwindcss', // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/date-fns' // Doc: https://date-fns.org & https://github.com/nuxt-community/date-fns-module
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios', // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv' // Doc: https://github.com/nuxt-community/dotenv-module
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: { baseURL: 'https://xplore-backend-staging.herokuapp.com' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
