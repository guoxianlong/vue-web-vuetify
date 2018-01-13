window.globalConfig = {
  rootUrl: 'http://10.0.16.28:8080/com.ifp.ipartner/',
  iosUrl: '',
  env: 'int', // 目前版本环境分别为---int---uat---sh
  isDebug: true, // 是否开启接口debug模式
  plat: 'WEB', // WEB、NATIVE
  timeout: 1000 * 180 // 默认是3000毫秒
}

import Vue from 'vue'
import App from './common/components/App'
import store from './vuex/store'
import router from './routers'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import '@/assets/css/main.scss'
import '@/filters/globalFilter.js'
// import '@/directives/title.js'
import Navigation from 'vue-navigation'
import vueScrollBehavior from 'vue-scroll-behavior'
import utils from './utils'

Vue.use(Vuetify)
window.utils = utils
Vue.use(Navigation, {
  router,
  store,
  moduleName: 'policy',
  keyName: 'RH'
})
Vue.config.productionTip = false
Vue.use(vueScrollBehavior, { router: router })

Vue.mixin({
  data () {
    return {
      screenWidth: document.documentElement.clientWidth,
      screenHeight: document.documentElement.clientHeight
    }
  },
  methods: {
    go (url) {
      this.$router.push(url)
    },
    back (url) {
      router.goBack(url)
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
