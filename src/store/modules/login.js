import axios from '../../axios'
export default {
  namespaced:true,
  state:{
    user:{
      username:"ljl",
      password:"123456",
      captcha_code:null
    },
    code:{
      url:"",
      num:null
    },
    userinfo:{}
  },
  actions:{
    getcode({commit,state}){
      return new Promise((resolve,reject)=>{
        axios.post('/v1/captchas').then(res=>{
          commit("getcode",res.data)
        })
      })
    },
    loginto({commit,state}){
      return new Promise((resolve,reject)=>{
        axios.post('/v2/login',state.user).then(res=>{
          resolve(res);
          localStorage.setItem("user_id",res.data.id)
        })
      })
    },
    loginuser({commit}){
      const user_id=localStorage.getItem("user_id")
      if(user_id){
        return new Promise((resolve,reject)=>{
          axios.get("/v1/user?user_id="+user_id).then(res=>{
            commit("loginuser",res.data)
          })
        })
      }
    }
  },
  mutations:{
    iptchange(state,v){
      state.user={...state.user,...v};
    },
    getcode(state,code){
      state.code.url=code.code;
    },
    loginuser(state,info){
      state.userinfo=info;
    }
  }
}