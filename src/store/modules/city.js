import Vue from "vue"
import router from "../../router"
import axios from "../../axios"
export default{
    namespaced:true,
    state:{
        guesscity:"",
    },
    mutations:{
        getguess(state,guess){
            state.guesscity=guess;
        }
    },
    actions:{
        getguess({commit}){
            axios.get("/v1/cities?type=guess").then(res=>{
                console.log(res.data);
                commit("getguess",res.data.name);
            })
        }
    }
}