import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import MintUI from 'mint-ui'

import 'normalize.css'
import 'mint-ui/lib/style.css'

import App from './App'
import MainContent from 'components/MainContent'
import Login from 'components/login/Login'
import Index from 'components/index/Index'
import Store from 'components/store/Store'
import Order from 'components/order/Order'
import OrderSearch from 'components/orderSearch/OrderSearch'
import MyInfo from 'components/myinfo/MyInfo'
import ChangePassword from 'components/myinfo/child/ChangePassword'
import CurrentOrder from 'components/currentOrder/CurrentOrder'
import OrderDetail from 'components/orderDetail/OrderDetail'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(MintUI)
Vue.use(VueResource)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/main',
    component: MainContent,
    children: [
      {
        path: 'index',
        component: Index
      },
      {
        path: 'store',
        component: Store
      },
      {
        path: 'myinfo',
        component: MyInfo
      }
    ]
  },
  {
    path: '/changePassword',
    component: ChangePassword
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/currentOrder',
    component: CurrentOrder
  },
  {
    path: '/orderDetail',
    component: OrderDetail
  },
  {
    path: '/OrderSearch',
    component: OrderSearch
  }
]
const router = new VueRouter({
  routes: routes,
  linkActiveClass: 'active'
})

const store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    // 用户登录，本地保存登录后的信息,只有退出登录之后才会清除该登录信息
    login(state, user) {
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    }
  },
  getters: {
    userInfo(state) {
      if (state.user) {
        return state.user
      } else {
        return JSON.parse(localStorage.getItem('user'))
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
