
import axios from "../../axios";

export default {
    namespaced: true,
    state:{
        shop_list:[],
        shops:[],
        shopsClassify:null,
        shopId:null,
        filter_list: [],
        distribution:[],
        food_list: ["甜品美食", "排序", "筛选"],
        id:null,
        sore: [
            {
              order_id: "",
              name: "智能排序"
            },
            {
              order_id: "",
              name: "距离最近"
            },
            {
              order_id: 6,
              name: "距离最近"
            },
            {
              order_id: 1,
              name: "起送价最低"
            },
            {
              order_id: 2,
              name: "配送速度最快"
            },
            {
              order_id: 3,
              name: "评分最高"
            }
          ],
          screen: [],
          close:false,
          addrs:[],
          sites:[],
          Addrs:{},
          addrnone:true,
          account:[],
          pnone:false,
          code:[]
    },
    mutations: {
        changeClose (state) {
            state.close=!state.close
        },
        setShopList (state,types) {
            state.shop_list=types
        },
        setfoodlist (state,types) {
            state.shops=types
            state.shopsClassify = "all"
        },
        setfilter (state,types) {
            const arr = types.map(item=>{
                return {...item,check:false}
            })
            state.filter_list=arr
        },
        setscreen (state,types) {
            state.distribution=types
        },
        setshops (state,types) {
            state.shops=types
            state.shopsClassify = "id"
        },
        setId(state,id){
            state.shopId = id
        },
        setsore (state,types) {
            state.shops=types[0]
            state.id=types[1]
        },
        setScreen (state,types) {
            state.shops=types
        },
        changeFood_list (state,type) {
            state.food_list[0]=type
        },
        changeFood (state,type) {
            state.food_list[0]=type
        },
        changesore (state,{index,id}) {
            if (state.screen.indexOf(id) == -1) {
                state.screen.push(id);
              } else {
                state.screen.splice(state.screen.indexOf(id), 1);
              }
            state.filter_list[index].check=!state.filter_list[index].check
        },
        delsore (state) {
            state.filter_list.map(item=>item.check=false)
        },
        changeshops (state,types) {
            state.shops.push(...types)
        },
        setAddr (state,types) {
            state.addrs=types
        },
        setaddr (state,types) {
            state.sites=types
            state.addrnone=!state.addrnone
        },
        setname (state,type) {
            state.Addrs=type
            state.sites=[]
            state.addrnone=!state.addrnone
        },
        changeaddr (state,type) {
            state.addrs.push(type)
        },
        removeAddr (state,index) {
            state.addrs.splice(index,1)
        },
        setaccount (state,types) {
            state.account=types
        },
        setusername (state,type) {
            state.account.username=type
            state.pnone=true
        },
        setCode (state,types) {
            state.code=types
        }

    },
    actions: {
        getimg ({commit},avatar) {
            return new Promise((reject,resolve)=>{
                axios.post("http://ele.kassing.cn/eus/v1/users/20414/avatar").then(res=>{
                    console.log(res)
                })
            })
        },
        exitlogin ({commit}) {
            return new Promise((reject,resolve)=>{
                axios.get("/v2/signout").then(res=>{
                    reject()
                })
            })
        },
        amendLogin ({commit},types) {
            return new Promise((reject,resolve)=>{
                axios.post("/v2/changepassword",types).then(res=>{
                   reject(res.data)
                })
            })
        },
        getCode ({commit}) {
            return new Promise((reject,resolve)=>{
                axios.post("/v1/captchas").then(res=>{
                    commit("setCode",res.data)
                })
            })
        },
        getaccount ({commit}) {
            const id = localStorage.getItem("user_id");
            return new Promise((resolve,reject)=>{
                axios.get("/v1/user?user_id="+id).then(res=>{
                   commit("setaccount",res.data)
                })
            })
        },
        getADDR ({commit},types) {
            const type = {
                "address": types.detailedarrd,
                "address_detail": types.name,
                "geohash": types.geohash,
                "name": types.name1,
                "phone": types.phone,
                "phone_bk": "",
                "poi_type": 0,
                "sex": 1,
                "tag": "公司",
                "tag_type": 4
            }
            return new Promise((reject,resolve)=>{
                axios.post("v1/users/20414/addresses",type).then(res=>{
                    commit("changeaddr",{address:type.address,phone:type.phone})
                    reject()
                })
            })
        },
        getaddr ({commit},type) {
            return new Promise((rejece,resolve)=>{
                axios.get("/v1/pois?type=nearby",{params:{
                    "keyword":type
                }}).then(res=>{
                commit("setaddr",res.data)
                })
            })
        },
        getAddr ({commit}) {
            return new Promise((reject,resole)=>{
                axios.get("/v1/users/20414/addresses").then(res=>{
                    commit("setAddr",res.data)
                })
            })
        },
        removeAddr ({commit},types) {
            return new Promise((reject,resolve)=>{
                axios.delete("/v1/users/20414/addresses/"+types.id).then(res=>{
                    commit("removeAddr",types.index)
                })
            })
        },
        changeshops ({commit},page) {
            return new Promise((reject,resolve)=>{
                axios.get("/shopping/restaurants?latitude=34.80622&longitude=113.80187",{params:{
                    'limit':20,
                    'offset':page*20
                }}).then(res=>{
                    if(res.status==200) {
                        commit("changeshops",res.data)
                    }
                })
            })
        },
        getShopList ({commit}) {
            return new Promise((reject,resolve)=>{
                axios.get("/shopping/v2/restaurant/category?latitude=31.22299&longitude=121.36025").then(res=>{
                    if(res.status==200) {

                        commit("setShopList",res.data)
                        
                    }
                })
            })
        },
        getfoodlist ({commit},geohash) {
            return new Promise((rejece,resole)=>{
                axios.get("/shopping/restaurants",{params:geohash}).then(res=>{
                    commit("setfoodlist",res.data)
                })
            })
        },
        getshops ({commit,state},id) {
            return new Promise((reject,resolve)=>{
                axios.get("/shopping/restaurants?latitude=34.80622&longitude=113.80187",{params:{
                   'restaurant_category_ids[]':id,
                   "restaurant_category_ids[]":state.shopId,
                    "support_ids":state.screen
                }}).then(res=>{
                   commit("setshops",res.data)
                   commit("setId",id)
                })
            })
        },
        getsore ({commit,state},id={}) {
            return new Promise((rejece,resolve)=>{
                axios.get("/shopping/restaurants?latitude=34.80622&longitude=113.80187",{params:{
                    "order_by":id,
                    "restaurant_category_ids[]":state.shopId,
                    "support_ids":state.screen
                }}).then(res=>{
                    commit("setsore",[res.data,id])
                })
            })
        },
        getfilter ({commit}) {
            return new Promise((rejece,resolve)=>{
                axios.get("/shopping/v1/restaurants/activity_attributes?latitude=34.80622&longitude=113.80187").then(res=>{
                    commit("setfilter",res.data)
                })
            })
        },
        screen ({commit}) {
            return new Promise((rejece,resolve)=>{
                axios.get("/shopping/v1/restaurants/delivery_modes?latitude=34.79709&longitude=113.59965").then(res=>{
                    commit("setscreen",res.data)
                })
            })
        },
        getScreen ({commit,state},types={}) {
            return new Promise((rejece,resole)=>{
                axios.get("/shopping/restaurants?latitude=34.79709&longitude=113.59965",{params:{
                    'support_ids':types,
                    'order_by':state.id,
                    'restaurant_category_ids[]':state.shopId
                }}).then(res=>{
                    commit("setScreen",res.data)
                })
            })
        }
    },
    modules: {
        
    }
}