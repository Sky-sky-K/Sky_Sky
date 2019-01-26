import axios from '../../axios'
export default {
  namespaced:true,
  state:{
    list:"",
    listinfo:{}
  },
  actions:{
    getData({commit}){
      return new Promise((resolve,reject)=>{
        axios.get("/v3/profile/explain").then(res=>{
          commit('getData',res.data)
          resolve();
        })
      })
    }
  },
  mutations:{
    getData(state,data){
      state.list=data;
    },
    tolist(state,item){
      state.listinfo=item;
    }
  }
}