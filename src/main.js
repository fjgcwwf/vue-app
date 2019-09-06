import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/icon/iconfont.css'

// 引用API文件
import api from './api/http.js'
// 将API方法绑定到全局
Vue.prototype.$api = api

import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import drilldown from 'highcharts/modules/drilldown'
import mapInit from 'highcharts/modules/map'
import cssDark from "highcharts/themes/dark-unica"

drilldown(Highcharts)
mapInit(Highcharts)
cssDark(Highcharts)
Vue.use(HighchartsVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')