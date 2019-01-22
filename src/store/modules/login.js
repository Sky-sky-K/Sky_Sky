import axios from '../../axios'
export default {
  namespaced:true,
  state:{
    user:{
      user:"",
      pwd:""
    },
    code:{
      url:"",
      num:null
    }
  },
  actions:{
    getcode({commit,state}){
      return new Promise((resolve,reject)=>{
        axios.post('http://ele.kassing.cn/v1/captchas').then(res=>{
          console.log(res)
          commit("getcode",res.data)
        })
      })
    }
  },
  mutations:{
    iptchange(state,v){
      state.user={...state.user,...v};
    },
    getcode(state,code){
      state.code.url=code.code;
    }
  }
}