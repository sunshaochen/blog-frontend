// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import dayjs from 'dayjs'
import DefaultLayout from '~/layouts/Default.vue'
import ArtLayout from '~/layouts/art/default.vue'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './assets/css/index.css'
import './assets/css/art/index.css'


export default function (Vue, { router, head, isClient }) {
  Vue.mixin({
    data() {
      return {
        GRIDSOME_API_URL: process.env.GRIDSOME_API_URL
      }
    }
  })
  Vue.filter('date', (value, format = 'YYYY-MM-DD HH:mm:ss') => {
    return dayjs(value).format(format)
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('ArtLayout', ArtLayout)
}
