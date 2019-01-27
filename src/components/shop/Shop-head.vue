<template>
  <div class="header">
      <div class="shop-bg-img">
        <img :src="'http://elm.cangdu.org/img/'+shopHead.image_path" alt="">
      </div>
    <div class="shop-head">
      <img :src="'http://elm.cangdu.org/img/'+shopHead.image_path" alt="">
      <div class="shop-int">
        <h4 class="shop-name">{{shopHead.name}}</h4>
        <div class="shop-moddle">商家配送/分钟送达/配送费￥5</div>
        <div class="shop-affiche">公告:{{shopHead.promotion_info}}</div>
      </div>
      <div class="go-xq">></div>
    </div>
    <div class="shop-footer">
     <p>
        <span>减</span>
        <span>满30减5，满60减8（APP专享）</span>
        <span>一个活动</span>
        <span class="footer_arrow">></span>
     </p>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    this.$store.dispatch("Shop/getshopHead")
  },
  computed:{
    shopHead(){
      return this.$store.state.Shop.shopHead
    }
  }
}
</script>

<style scope>
  .header{height: 120px;overflow: hidden;position:relative;background: rgba(119,103,137,.43);padding: 10px !important;}
  .shop-bg-img{position:absolute;top: 0;left: 0;z-index: -999;width: 100%;}
  .shop-bg-img img{width: 100%;filter: blur(10px)}
  .shop-head{display: flex;justify-content: space-between;}
  .shop-head>img{width: 68px;height: 68px;margin-right: 10px;}
  .shop-int{font-size: 12px;color: #fff;}
  .shop-int .shop-name{font-size: 24px;font-weight: 700;}
  .shop-int>div{margin-top: 12px;}
  .go-xq{line-height: 68px;color:#fff;}
  .shop-footer{font-size: 12px;margin-top: 10px;line-height: 20px;}
  .shop-footer p{display: flex;justify-content: space-between;color: #fff;}
  .shop-footer p>span:nth-child(1){padding: 0 2px;background-color: rgb(240, 115, 115);border-color: rgb(240, 115, 115);border-radius: 5px;height: 18px;margin: 1px 3px 0 0;}
  .shop-footer p>span:nth-child(2){flex-grow: 1;}
  .footer_arrow{width: 10px;height: 10px;}
</style>
