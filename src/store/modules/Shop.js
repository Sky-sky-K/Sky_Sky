import axios from '../../axios'


const shopCarY_Push = ((food_id,shop_id,goods_id,item_id,num,food_obj) => {
  return {
    id:food_id,
    shop_id,
    goods_id,
    item_id,
    num:num,
    name:food_obj.name,
    specs:food_obj.specs,
    price:food_obj.price
  }
})

export default {
  namespaced:true,
  state: {
    current1:2306,
    shops:[],
    foodShopCar:null,
    restaurant_id:null,
    shopCarNum:0,
    shopCarY:[],
    totalPrice:0,
    shopHead:{},
    shopRating:{},
    tags:[],
    evaluations:[]
  },
  mutations: {
    setCurrent(state, current1){
      state.current1 = current1
    },
    getShopCar(state){
      state.shopCarY = []       //进入店铺初始化数据
      state.shopCarNum = 0      //进入店铺初始化数据
      state.totalPrice = 0      //进入店铺初始化数据
      state.foodShopCar = JSON.parse(localStorage.getItem("foodObj"))
      const getShop = ((data) => {
        for(let key in data){
          if(!data[key].num){
            getShop(data[key])
          }else{
            state.shopCarY.push({
              id:data[key].id,
              num:data[key].num,
              name:data[key].name,
              specs:data[key].specs,
              price:data[key].price,
              shop_id:data[key].shop_id,
              goods_id:data[key].goods_id,
              item_id:data[key].item_id
            })
            state.shopCarNum += data[key].num
            state.totalPrice += (data[key].num * data[key].price)
          }
        }
      })
      for(let key in state.foodShopCar){
        if(key == state.restaurant_id){
          getShop(state.foodShopCar[state.restaurant_id])
        }
      }
    },
    getShop(state, shops){
      state.shops = shops
    },
    setRestaurant_id(state, restaurant_id){
      state.restaurant_id = restaurant_id
    },
    setShopCar(state,{shop_id,goods_id,item_id,food_id,food_obj}){
      food_obj={
        ...food_obj,
        shop_id,
        goods_id,
        item_id
      }
      let shopNum
      state.shopCarBg = true
      if(state.foodShopCar){
        if(state.foodShopCar[shop_id]){
          if(state.foodShopCar[shop_id][goods_id]){
            if(state.foodShopCar[shop_id][goods_id][item_id]){
              if(state.foodShopCar[shop_id][goods_id][item_id][food_id]){
                state.foodShopCar[shop_id][goods_id][item_id][food_id].num += 1
                state.shopCarNum++
                state.shopCarY.forEach((a,b) => {
                  if(state.shopCarY[b].id === food_id){
                    state.shopCarY[b].num ++
                  }
                })
              }else{
                state.foodShopCar[shop_id][goods_id][item_id][food_id] = food_obj
                state.shopCarNum++
                if(!state.shopCarY.filter(res => res.id === food_id).length){
                  shopNum = state.foodShopCar[shop_id][goods_id][item_id][food_id].num
                  state.shopCarY.push(
                    shopCarY_Push(food_id,shop_id,goods_id,item_id,shopNum,food_obj)
                  )
                }else{
                  state.shopCarY.forEach((a, b) => {
                    if(state.shopCarY[b].id === food_id){
                      state.shopCarY[b].num ++
                    }
                  })
                }
              }
            }else{
              state.foodShopCar[shop_id][goods_id][item_id] = {
                [food_id]:food_obj
              }
              state.shopCarNum++
              if(!state.shopCarY.filter(res => res.id === food_id).length){
                shopNum = state.foodShopCar[shop_id][goods_id][item_id][food_id].num
                  state.shopCarY.push(
                    shopCarY_Push(food_id,shop_id,goods_id,item_id,shopNum,food_obj)
                  )
              }else{
                state.shopCarY.forEach((a, b) => {
                  if(state.shopCarY[b].id === food_id){
                    state.shopCarY[b].num ++
                  }
                })
              }
            }
          }else{
            state.foodShopCar[shop_id][goods_id] = {
              [item_id]:{
                [food_id]:food_obj
              }
            }
            state.shopCarNum++
            if(!state.shopCarY.filter(res => res.id === food_id).length){
              shopNum = state.foodShopCar[shop_id][goods_id][item_id][food_id].num
              state.shopCarY.push(
                shopCarY_Push(food_id,shop_id,goods_id,item_id,shopNum,food_obj)
              )
            }else{
              state.shopCarY.forEach((a, b) => {
                if(state.shopCarY[b].id === food_id){
                  state.shopCarY[b].num ++
                }
              })
            }
          }
        }else{
          state.foodShopCar[shop_id] = {
            [goods_id]:{
              [item_id]:{
                [food_id]:food_obj
              }
            }
          }
          state.shopCarNum++
          if(!state.shopCarY.filter(res => res.id === food_id).length){
            shopNum = state.foodShopCar[shop_id][goods_id][item_id][food_id].num
            state.shopCarY.push(
              shopCarY_Push(food_id,shop_id,goods_id,item_id,shopNum,food_obj)
            )
          }else{
            state.shopCarY.forEach((a, b) => {
              if(state.shopCarY[b].id === food_id){
                state.shopCarY[b].num ++
              }
            })
          }
        }
      }else{
        let foodObj = {
          [shop_id]:{
            [goods_id]:{
              [item_id]:{
                [food_id]:food_obj
              }
            }
          }
        }
        state.shopCarNum++
        state.foodShopCar = {...foodObj}
        shopNum = state.foodShopCar[shop_id][goods_id][item_id][food_id].num
        state.shopCarY.push(
          shopCarY_Push(food_id,shop_id,goods_id,item_id,shopNum,food_obj)
        )
      }
      state.totalPrice += food_obj.price
      // state.shopCarNum = getLen(state.shopCarNum, state.foodShopCar[1])
      localStorage.setItem('foodObj',JSON.stringify(state.foodShopCar))
      
    },
    minusNum(state, {shop_id,goods_id,item_id,food_id_Arr}){
      let index = 0
      const indexAdd = ((i) => {
        if(!state.foodShopCar[shop_id][goods_id][item_id][food_id_Arr[i]]){
          i++
          if(!state.foodShopCar[shop_id][goods_id][item_id][food_id_Arr[i]]){
            return indexAdd(i)
          }else{
            return i
          }
        }else{
          return i
        }
      })
      index = indexAdd(index)
      if(state.foodShopCar[shop_id][goods_id][item_id][food_id_Arr[index]].num > 0){
        state.foodShopCar[shop_id][goods_id][item_id][food_id_Arr[index]].num --
        state.totalPrice = state.totalPrice - state.foodShopCar[shop_id][goods_id][item_id][food_id_Arr[index]].price
        state.shopCarNum --
        state.shopCarY.forEach((a, b) => {
          if(state.shopCarY[b].id === food_id_Arr[index]){
            state.shopCarY[b].num --
            if(state.shopCarY[b].num == 0){
              state.shopCarY.splice(b,1)
            }
          }
        })
        if(state.foodShopCar[shop_id][goods_id][item_id][food_id_Arr[index]].num == 0){
          delete state.foodShopCar[shop_id][goods_id][item_id][food_id_Arr[index]]
          if(JSON.stringify(state.foodShopCar[shop_id][goods_id][item_id]) == "{}"){
            delete state.foodShopCar[shop_id][goods_id][item_id]
            if(JSON.stringify(state.foodShopCar[shop_id][goods_id]) == "{}"){
              delete state.foodShopCar[shop_id][goods_id]
              if(JSON.stringify(state.foodShopCar[shop_id]) == "{}"){
                delete state.foodShopCar[shop_id]
                if(JSON.stringify(state.foodShopCar) == "{}"){
                  state.shopCarBg = false
                }
              }
            }
          }
        }
      }
      
      localStorage.setItem('foodObj',JSON.stringify(state.foodShopCar))
    },
    setShopCarNum(state){
      
    },
    removeShopCar(state){
      state.foodShopCar = null
      state.shopCarNum = 0
      state.totalPrice = 0
      state.shopCarY = []
      localStorage.setItem('foodObj',JSON.stringify(state.foodShopCar))
    },
    setShopHead(state, data){
      state.shopHead = data
    },
    setShopRating(state, data){
      state.shopRating = data
    },
    setTags(state, data){
      state.tags = data
    },
    setEvaluation(state, data){
      state.evaluations = data
    }
  },
  actions: {
    getShops({commit, state}){
      axios.get('/shopping/v2/menu',{params:{
        restaurant_id:state.restaurant_id
      }}).then(res => {
        commit("setCurrent",res.data[0].id)
        commit("getShop",res.data)
        commit('setRestaurant_id',state.restaurant_id)
      })
    },
    getshopHead({commit, state}){
      axios.get('/shopping/restaurant/'+state.restaurant_id).then(res => {
        commit('setShopHead',res.data)
      })
    },
    getRating({commit, state}){
      axios.get('/ugc/v2/restaurants/'+ state.restaurant_id +'/ratings/scores').then(res => {
        commit("setShopRating",res.data)
      })
    },
    getTags({commit, state}){
      axios.get('/ugc/v2/restaurants/'+ state.restaurant_id + '/ratings/tags').then(res => {
        commit("setTags",res.data)
      })
    },
    getEvaluation({commit, state}){
      axios.get('/ugc/v2/restaurants/'+ state.restaurant_id +'/ratings',{params:{
        offset:0,
        limit:10
      }}).then(res => {
        commit("setEvaluation",res.data)
      })
    }
  }
}