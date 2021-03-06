import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import MintUI from 'mint-ui'
import { List } from 'vant'

import 'normalize.css'
import 'mint-ui/lib/style.css'

import App from './App'
import MainContent from 'components/MainContent'
import Login from 'components/login/Login'
import Index from 'components/index/Index'
import Store from 'components/store/Store'
import Order from 'components/order/Order'
import SearchList from 'components/orderSearch/SearchList'

import OrderSearch from 'components/orderSearch/OrderSearch'
import MyInfo from 'components/myinfo/MyInfo'
import ChangePassword from 'components/myinfo/child/ChangePassword'
import CurrentOrder from 'components/currentOrder/CurrentOrder'
import TodayOrder from 'components/currentOrder/child/TodayOrder'
import OrderDetail from 'components/orderDetail/OrderDetail'
import StatusList from 'components/order/child/StatusList'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(MintUI)
Vue.use(List)
Vue.use(VueResource)

const routes = [
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
    path: '/',
    component: Login
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/changePassword',
    component: ChangePassword
  },
  {
    name: 'order',
    path: '/order',
    component: Order,
    children: [
      {
        path: 'status/:status',
        component: StatusList
      }
    ]
  },
  {
    path: '/currentOrder',
    component: CurrentOrder,
    children: [
      {
        path: 'todayOrder',
        component: TodayOrder
      }
    ]
  },
  {
    path: '/orderDetail',
    component: OrderDetail
  },
  {
    path: '/orderSearch',
    component: OrderSearch
  },
  {
    path: '/searchResult',
    component: SearchList
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
    },
    // 用户退出,清除本地保存的登录信息
    loginOut(state) {
      state.user = null
      localStorage.removeItem('user')
      router.push('/login')
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

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
