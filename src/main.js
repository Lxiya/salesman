import Vue from 'vue'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'

import 'normalize.css'
import 'mint-ui/lib/style.css'

import App from './App'
import Index from 'components/index/Index'
import Store from 'components/store/Store'
import MyInfo from 'components/myinfo/MyInfo'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(MintUI)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/store',
    component: Store
  },
  {
    path: '/myinfo',
    component: MyInfo
  }
]
const router = new VueRouter({
  routes: routes,
  linkActiveClass: 'active'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
