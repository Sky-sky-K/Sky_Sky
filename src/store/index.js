import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import myservice from './modules/myservice'
import shops_list from './module/shops_list'

import Shop from './modules/Shop'
Vue.use(Vuex)
import city from "./modules/city"
export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules:{
    login,
    myservice,
    city,
    shops_list,
    Shop
  }
})