import axios from '../../axios'
export default {
  namespaced:true,
  state:{
    list:""
  },
  actions:{
    getData({commit}){
      return new Promise((resolve,reject)=>{
        axios.get("/v3/profile/explain").then(res=>{
          commit('getData',res.data)
        })
      })
    }
  },
  mutations:{
    getData(state,data){
      state.list=data;
    }
  }
}