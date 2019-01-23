import Vue from "vue"
import router from "../../router"
import axios from "../../axios"
export default{
    namespaced:true,
    state:{
        loading:false,
        guesscity:"",
        hotcity:[],
        groupcity:[],
        cityname:"",
        city:{
            city_id:"",
            keyword:""
        },
        serachcity:[],
    },
    mutations:{
        getguess(state,guess){
            state.guesscity=guess;
        },
        gethot(state,hot){
            state.hotcity=hot;
        },
        getgroup(state,group){
            state.groupcity=group;
        },
        cityname(state,city){
            state.cityname=city;
        },
        serach(state,serachcity){
            state.serachcity=serachcity;
        }
    },
    actions:{
        getcity({commit},type){
            return new Promise((resolve,reject)=>{
                // console.log(typeof type)
                axios.get("/v1/cities?type="+type).then(res=>{
                    // commit("getguess",res.data.name);
                    // commit("gethot",res.data);
                    // commit("getgroup",res.data);
                    // console.log(res.data)
                    if(type=="guess"){
                        commit("getguess",res.data.name)
                    }else if(type=="hot"){
                        commit("gethot",res.data)
                    }else if(type=="group"){
                        commit("getgroup",res.data)
                    }
                    resolve();
                })
            })
        },
        getcityname({commit},i){
            return new Promise((resolve,reject)=>{
                axios.get("/v1/cities/"+i).then(res=>{
                    console.log(res)
                    //获取所选城市的名字
                    commit("cityname",res.data.name);
                    resolve();
                })
            })
        },
        getgeohash({commit},city){
            // console.log(city)
            return new Promise((resolve,reject)=>{
                axios.get("/v1/pois?",{
                    params:{
                        city_id:city.city_id,
                        keyword:city.keyword
                    }
                }).then(res=>{
                    console.log(res)
                    commit("serach",res.data);
                })
            })
        }
    }
}