import Vue from 'vue'
import Router from 'vue-router'
import dashboard from './views/index.vue'
// import dashboard from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'dashboard',
    component: dashboard
  }]
})