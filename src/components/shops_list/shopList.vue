<template>
  <div class="scroll-list-wrap">
    <cube-scroll
      ref="scroll"
      :options="options"
      :data="shops"
      @pulling-down="onPullingDown"
      @pulling-up="onPullingUp"
    >
      <ul>
        <li class="shop_li" v-for="(shop,index) in shops" :key="index" :data-id="shop.id">
          <router-link :to="'/shop?geohash='+$route.query.geohash+'&id=' + shop.id">
            <img :src="'http://elm.cangdu.org/img/'+shop.image_path" alt class="shop_img">
            <div class="shop_right">
              <div class="shop_detail_header flex">
                <div class="shop_title">
                  <span class="brand">品牌</span>
                  <span class="name">{{shop.name}}</span>
                </div>
                <ul class="shop_detail_ul">
                  <li v-for="(item,index) in shop.supports" :key="index">{{item.icon_name}}</li>
                </ul>
              </div>
              <div class="rating_order_num flex">
                <div class="flex">
                  <div>
                    <span class="grade">{{shop.rating}}</span>
                  </div>
                  <span class="yueshou">月售{{shop.recent_order_num}}单</span>
                </div>
                <div>
                  <span class="delivery_left">蜂鸟专送</span>
                  <span class="delivery_right">准时达</span>
                </div>
              </div>
              <div class="fee_distance flex">
                <div class="fee">
                  <span>￥{{shop.float_minimum_order_amount}}起送</span>
                  <span>/</span>
                  <span>配送费约￥{{shop.float_delivery_fee}}</span>
                </div>
                <div class="distance_time">
                  <span>{{shop.distance}}/</span>
                  <span class="order_time">{{shop.order_lead_time}}</span>
                </div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </cube-scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPullingDown: false,
      page:0,
      flag:true
    };
  },
  computed: {
    options() {
      return {
        pullDownRefresh: 10,
        pullUpLoad: 90,
        scrollbar: true
      };
    },
    shopsClassify(){
      return this.$store.state.shops_list.shopsClassify;
    },
    shopId(){
      return this.$store.state.shops_list.shopId
    },
    shops() {
      return this.$store.state.shops_list.shops;
    }
  },
  methods: {
    onPullingDown() {
      if (this.flag) {
        this.flag=false
        this.page++
        if(this.shopsClassify=="all"){
          this.$store.dispatch("shops_list/changeshops",this.page);

        }else if(this.shopsClassify=="id"){ 
          this.$store.dispatch("shops_list/getshops",this.shopId);
        }else{

        }
        this.flag=true
      }
    },
    onPullingUp() {
     if (this.flag) {
        this.flag=false
        this.page++
        if(this.shopsClassify=="all"){
          this.$store.dispatch("shops_list/changeshops",this.page);

        }else if(this.shopsClassify=="id"){ 
          this.$store.dispatch("shops_list/getshops",this.shopId);
        }else{

        }
        this.flag=true
      }
    }
  }
};
</script>

<style>

.bscroll-vertical-scrollbar {
  position: static!important;
  opacity: 0!important;
}

.scroll-list-wrap {
  height: 100vh;
}
.shop_li {
 
  border-bottom: 1px solid #f1f1f1;
  padding: 14px 8px;
}

.shop_li a {
  display: flex;
}

.shop_li img {
  width: 64px;
  height: 64px;
  margin-right: 10px;
  display: block;
}

.shop_right {
  flex: auto;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.shop_title {
  width: 200px;
  color: #333;
  font-weight: 700;
}

.brand {
  color: #333;
  background-color: #ffd930;
  border-radius: 5px;
  margin-right: 6px;
  padding: 2px 4px;
  display: inline-block;
  font-size: 12px;
}
.name {
  font-size: 14px;
}

.shop_detail_ul {
  display: flex;
  transform: scale(0.8);
  margin-right: -6px;
  align-items: center;
}
.shop_detail_ul li {
  font-size: 10px;
  color: #999;
  border: 1px solid #f1f1f1;
  padding: 0 2px;
  border-radius: 4px;
  margin-left: 2px;
}

.rating_order_num {
  height: 14px;
  margin-top: 12px;
}

.yueshou {
  transform: scale(0.8);
  margin-left: -4px;
  font-size: 8px;
  color: #666;
}

.grade {
  transform: scale(0.8);
  margin-left: -4px;
  font-size: 8px;
  margin: 0 2px;
  color: #ff6000;
}

.delivery_left,
.delivery_right {
  font-size: 4px;
  transform: scale(0.8);
  padding: 2px 1px 0;
  border-radius: 2px;
  margin-left: 1px;
  display: inline-block;
  margin-right: -4px;
}
.delivery_left {
  color: #fff;
  background-color: #3190e8;
  border: 1px solid #3190e8;
}
.delivery_right {
  color: #3190e8;
  border: 1px solid #3190e8;
}

.fee {
  font-size: 12px;
  color: #666;
}

.fee_distance {
  margin-top: 12px;
}

.distance_time {
  font-size: 12px;
  color: #999;
}

.order_time {
  color: #3190e8;
}
</style>
