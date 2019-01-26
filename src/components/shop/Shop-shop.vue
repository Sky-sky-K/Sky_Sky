<template>
  <div class="shop1">
    <div class="popup-box" v-if="popups">
      <div class="popup">
        <span class="popup-shut" @click="popupShut">×</span>
        <div class="popup-head">{{popups.specfoods[0].name}}</div>
        <div class="popup-con">
          <p>规格</p>
          <div>
            <button v-for="(popup, index) in popups.specfoods" :key="popup.food_id" :class="{click : popupIndex == index}" @click="popupSelect(index)">
              {{popup.specs_name}}
            </button>
          </div>
        </div>
        <div class="popup-price">
          <div>
            <span>￥</span>
            <span>{{popups.specfoods[popupIndex].price}}</span>
          </div>
          <div>
            <el-button type="primary" size="mini" @click="addShopcarPopup">加入购物车</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="shopcar">
      <div @click="shopCarContent">
        <div class="shopcar-icon" :class="{shopcarY : shopCarNum}">
          <span class="shopcar-num">{{shopCarNum}}</span>
          <img src="../../img/icon.png" alt="">
        </div>
      </div>
      <div>
        <div>￥{{totalPrice.toFixed(2)}}</div>
        <div>配送费￥5</div>
      </div>
      <div class="go-select">去结算</div>
      <div class="shopcar-list" v-show="shopCarList" :class="{'list-posi' : shopCarList}">
        <div class="shopcar-list-title">
          <div>购物车</div>
          <div @click="removeShopCar">清空</div>
        </div>
        <ul class="shopcar-list-con">
          <li v-for="(list, index)  in shopCarY" :key="index">
            <div class="con-name">
              <div>{{list.name}}</div>
              <div>{{list.specs}}</div>
            </div>
            <div class="con-price">￥<span>{{list.price}}</span></div>
            <div class="con-num">
              <div class="remove" @click="shopCarMinusNum(index)">-</div>
              <div>{{list.num}}</div>
              <div class="add" @click="shopCarAddNum(index)">+</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="shopcar-list-bg" :class="{'back' : shopCarList}" @click="shutShopcar"></div>
    </div>
    <cube-scroll-nav
      class="nav"
      :side="true"
      :data="shopsData"
      :current="current"
      @change="changeHandler"
      @sticky-change="stickyChangeHandler">
      <cube-scroll-nav-panel
      v-for="item in shopsData"
      :key="item.id"
      :label="item.id"
      :title="item.name">
        <ul>
          <li v-for="(food, index) in item.foods" :key="index" class="shop-food">
            <div class="food-img">
              <img :src="'http://elm.cangdu.org/img/' + food.image_path" alt="">
            </div>
            <div class="food-details">
              <h3 class="food-name">{{food.name}}</h3>
              <p class="food-description">{{food.description}}</p>
              <p class="food-tips">{{food.tips}}</p>
              <p v-if="food.activity" class="food-activity">
                <span>{{food.activity.image_text}}</span>
              </p>
              <div class="food-price">
                <div>
                  <span>￥</span>
                  <span class="price">{{food.specfoods[0].price}}</span>
                  <span class="price-min">起</span>
                </div>
                <div class="food-add">
                  <div v-if="showRemove(food)">
                    <span class="remove" @click="minusNum(food)">-</span>
                    <span class="num">{{showRemove(food)}}</span>
                  </div>
                  <div @click="addShopCar(food)">
                    <div v-if="food.specfoods.length > 1" class="option">
                      选规格
                    </div>
                    <div v-else class="add">+</div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </cube-scroll-nav-panel>
    </cube-scroll-nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 2306,
      popups:null,
      popupIndex:0,
      shopCarList:false
    }
  },
  filters:{
    foodNum(food){

    }
  },
  computed:{
    shopsData(){
      return this.$store.state.Shop.shops
    },
    foodShopCar(){
      return this.$store.state.Shop.foodShopCar
    },
    restaurant_id(){
      return this.$store.state.Shop.restaurant_id
    },
    shopCarNum(){
      return this.$store.state.Shop.shopCarNum
    },
    shopCarY(){
      return this.$store.state.Shop.shopCarY
    },
    totalPrice(){
      return this.$store.state.Shop.totalPrice
    }
  },
  created(){
    this.$store.dispatch('Shop/getShops')
    this.$store.commit("Shop/getShopCar")
  },
  methods: {
    showRemove(food){
      let arr = []
      let num = 0
      for(let i = 0;i<food.specfoods.length;i++){
        this.shopCarY.forEach((a, b) => {
          if(food.specfoods[i].food_id === a.id){
            arr.push(this.shopCarY[b].num)
          }
        })
      }
      for(let i = 0;i<arr.length;i++){
        num += arr[i]
      }
      return num
    },
    changeHandler(label){

    },
    stickyChangeHandler(current1){
      this.current = 2306
    },
    addShopCar(food){
      this.popupIndex = 0
      if(food.specfoods.length > 1){
        this.popups = food
      }else{
        let shop_id = food.restaurant_id
        let goods_id = food.category_id
        let item_id = food.specfoods[0].item_id
        let food_id = food.specfoods[0].food_id
        this.$store.commit('Shop/setShopCar',{
          shop_id,
          goods_id,
          item_id,
          food_id,
          food_obj:{
            id: food.specfoods[this.popupIndex].food_id,
            name: food.specfoods[this.popupIndex].name,
            num: 1,
            packing_fee: food.specfoods[this.popupIndex].packing_fee,
            price: food.specfoods[this.popupIndex].price,
            sku_id: food.specfoods[this.popupIndex].sku_id,
            specs: food.specfoods[this.popupIndex].specs_name,
            stock: food.specfoods[this.popupIndex].stock
          }
        })
      }
    },
    shopCarAddNum(index){
      let shop_id = this.shopCarY[index].shop_id
      let goods_id = this.shopCarY[index].goods_id
      let item_id = this.shopCarY[index].item_id
      let food_id = this.shopCarY[index].id
      let price = this.shopCarY[index].price
      this.$store.commit('Shop/setShopCar',{
          shop_id,
          goods_id,
          item_id,
          food_id,
          food_obj:{
            price
          }
        })
    },
    shopCarMinusNum(index){
      let shop_id = this.shopCarY[index].shop_id
      let goods_id = this.shopCarY[index].goods_id
      let item_id = this.shopCarY[index].item_id
      let food_id_Arr = [this.shopCarY[index].id]
      this.$store.commit("Shop/minusNum",{
        shop_id,
        goods_id,
        item_id,
        food_id_Arr
      })
      if(JSON.stringify(this.foodShopCar) == "{}"){
        this.shopCarList = !this.shopCarList
      }
    },
    minusNum(food){
      let shop_id = food.restaurant_id
      let goods_id = food.category_id
      let item_id = food.specfoods[0].item_id
      let food_id_Arr = []
      for(let key in food.specfoods){
        food_id_Arr.push(food.specfoods[key].food_id)
      }
      this.$store.commit("Shop/minusNum",{
        shop_id,
        goods_id,
        item_id,
        food_id_Arr
      })
    },
    popupSelect(index){
      this.popupIndex = index
    },
    popupShut(){
      this.popups = null
    },
    addShopcarPopup(){
      this.$store.commit('Shop/setShopCar',{
        shop_id:this.popups.restaurant_id,
        goods_id:this.popups.category_id,
        item_id:this.popups.specfoods[this.popupIndex].item_id,
        food_id:this.popups.specfoods[this.popupIndex].food_id,
        food_obj:{
          id: this.popups.specfoods[this.popupIndex].food_id,
          name: this.popups.specfoods[this.popupIndex].name,
          num: 1,
          packing_fee: this.popups.specfoods[this.popupIndex].packing_fee,
          price: this.popups.specfoods[this.popupIndex].price,
          sku_id: this.popups.specfoods[this.popupIndex].sku_id,
          specs: this.popups.specfoods[this.popupIndex].specs_name,
          stock: this.popups.specfoods[this.popupIndex].stock
        }
      })
      this.popups = null
    },
    shopCarContent(){
      if(JSON.stringify(this.foodShopCar) == "{}"){

      }else{
        this.shopCarList = !this.shopCarList
      }
    },
    shutShopcar(){
      this.shopCarList = false;
    },
    removeShopCar(){
      this.$store.commit("Shop/removeShopCar")
      this.shopCarList = false
    }
  }
}
</script>


<style scoped>
  .nav{height: 100%;}
  .cube-scroll-nav-panel{background-color: #fff;}
  .shop1{height: 100%;}
  .shop-food{height: 140px;padding: 15px 10px;display: flex;box-sizing: border-box;}
  .food-img img{width: 47px;height: 47px;}
  .food-details{font-size: 12px;margin-left: 6px;flex-grow:1;width: 100%;overflow: hidden;}
  .food-details p{margin-top: 6px;}
  .food-details .food-name{font-size: 16px;font-weight: bold;}
  .food-details .food-description{color: #999;}
  .food-details .food-tips{color: #333;}
  .food-details .food-activity span{color: rgb(241, 136, 79);border:1px solid rgb(240, 115, 115);border-radius: 7px;padding:1px;}
  .food-details .food-price{margin-top: 15px;display: flex;color: #f60;justify-content: space-between;}
  .food-details .food-price .price{font-size: 18px;}
  .food-details .food-price .price-min{color: #666;margin-left: 4px;}
  .food-details .food-price .food-add{height: 25px;padding-top:5px;display: flex;justify-content: flex-start;}
  .food-details .food-price .food-add .num{width: 20px;height: 20px;text-align: center;display: block;line-height: 20px;}
  .food-details .food-price .food-add>div:first-child{display: flex;}
  .food-details .food-price .food-add .remove{width: 20px;height: 20px;display: block;border-radius: 50%;border: 1px solid #999;text-align: center;line-height: 20px;}
  .food-details .food-price .food-add>div>div{color: #fff;background-color: #3190e8;}
  .food-details .food-price .food-add .option{border-radius: 5px;padding: 4px 6px;}
  .food-details .food-price .food-add .add{width: 18px;height: 18px;border-radius: 50%;text-align: center;line-height: 18px;}
  .popup-box{position:fixed;left:0;top: 0;bottom:0;right: 0;background-color: rgba(0,0,0,0.4);z-index: 99999;}
  .popup{width: 70%;height: 200px;background-color: #fff;margin-left: 15%;position: absolute;top: 50%;transform: translateY(-50%);border-radius: 5px;}
  .popup-head{height: 44px;line-height: 34px;padding: 10px;text-align: center;font-size: 16px;}
  .popup-con{height: 100px;padding: 13px;}
  .popup-con>p{font-size: 14px;color: #666;}
  .popup-con button{height: 34px;outline: none;background-color: #fff;border: none;margin: 10px;    border: 1px solid #ddd;border-radius: 5px;}
  .popup-con button.click{border-color: #3199e8;color:#3199e8;}
  .popup-price{display: flex;justify-content: space-between;padding: 15px;line-height: 28px;}
  .popup-price>div:first-child{color:#ff6000;}
  .popup-price>div:first-child span:last-child{font-size: 20px;}
  .popup-shut{font-size: 30px;position: absolute;right: 8px;top: 5px;}
  .shopcar{width: 100%;height: 47px;background-color: #3d3d3f;position: fixed;bottom: 0;left: 0;z-index: 99999;display: flex;justify-content: space-between;}
  .shopcar>div:nth-child(2){flex-grow: 1;margin-left: 15px;color:#fff;}
  .shopcar>div:nth-child(2)>div:first-child{font-size: 20px;font-weight: bold;line-height: 30px;}
  .shopcar .go-select{width: 120px;height: 47px;text-align: center;line-height: 47px;color: #fff;font-weight: bold;font-size: 16px;background-color: seagreen;}
  .shopcar .shopcar-icon{width: 55px;height: 55px;border: .18rem solid #444;margin-left: 15px;margin-top: -15px;background-color:#3d3d3f;border-radius: 50%;display: flex;justify-content: center;align-items: center;position: relative;z-index: 999;}
  .shopcar-num{position:absolute;top: 0;right: 0;background-color: #f00;display: block;width: 16px;height: 16px;border-radius: 50%;text-align: center;line-height: 16px;}
  .shopcar .shopcar-icon.shopcarY{background-color: #3190e8;}
  .shopcar .shopcar-list{width: 100%;background-color: #fff;position: absolute;z-index: 99;transition: all 1s ease;height: 0;}
  .shopcar .shopcar-list.list-posi{bottom: 47px;height: auto;}
  .shopcar .shopcar-list .shopcar-list-title{width: 100%;height: 44px;padding: 7px;line-height: 30px;display: flex;justify-content: space-between;background-color: #eceff1;font-size: 16px;color: #666;}
  .shopcar .shopcar-list .shopcar-list-con{max-height: 490px;overflow-y: auto;}
  .shopcar .shopcar-list .shopcar-list-con li{height: 65px;display: flex;justify-content: flex-end;padding: 14px 12px;}
  .shopcar .shopcar-list .shopcar-list-con li .con-name{flex-grow: 1;color:#666;}
  .shopcar .shopcar-list .shopcar-list-con li .con-name>div:first-child{font-size: 18px;font-weight: bold;margin: 8px 0;}
  .shopcar .shopcar-list .shopcar-list-con li .con-price{margin-right: 20px;line-height: 37px;color:#f60;}
  .shopcar .shopcar-list .shopcar-list-con li .con-price span{font-size: 18px;}
  .shopcar .shopcar-list .shopcar-list-con li .con-num>div{width: 20px;height: 20px;border-radius: 50%;text-align: center;line-height: 20px;font-size: 14px;}
  .shopcar .shopcar-list .shopcar-list-con li .con-num{display: flex;align-items: center;}
  .shopcar .shopcar-list .shopcar-list-con li .add{background-color: #3190e8;color: #fff;}
  .shopcar .shopcar-list .shopcar-list-con li .remove{background-color: #fff;border: 1px solid #3190e8;color:#3190e8;}
  .shopcar-list-bg{background-color: rgba(0,0,0,0);position: fixed;bottom: 0;left: 0;right: 0;transition: all 1s ease;}
  .shopcar-list-bg.back{background-color: rgba(0,0,0,0.2);top: 0;}
</style>
<style>
  .el-tabs__header{margin-bottom:0;}
  .el-tabs__content{height: 100%;box-sizing: border-box;background-color:#f5f5f5;}
  .cube-scroll-nav-bar_vertical{width: 90px;}
  .cube-scroll-nav-panel-title{height: 35px;background-color:rgba(255,255,255,0.5);font-size:16px;padding:15px;}
</style>