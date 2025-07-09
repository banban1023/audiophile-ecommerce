import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/common.less'
import './utils/vant-ui.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 图片路径
Vue.filter('fixAssetPath', (path) => {
  return require(`@/assets${path.replace('./assets', '')}`)
})
