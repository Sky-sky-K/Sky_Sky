import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import myservice from './modules/myservice'

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
    city
  }
})
