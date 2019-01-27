<template>
  <div>
    <div class="go-1" @click="goF1">
      <svg width="25" height="25" version="1.1">
        <polyline points="14,23 6,14 14,5" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 3;"></polyline>
      </svg>
    </div>
    <shop-head></shop-head>
    <el-tabs v-model="activeName" :stretch="true" class="tabs">
      <el-tab-pane label="商品" name="first" class="shop">
        <router-view name="shop"></router-view>
      </el-tab-pane> 
      <el-tab-pane label="评价" name="second" class="evaluation">
        <router-view name="text"></router-view>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ShopHead from '../components/shop/Shop-head'
export default {
  data(){
    return {
      activeName:'first'
    }
  },
  created(){
    this.$store.commit("Shop/setRestaurant_id",Number(this.$route.query.id))
  },
  components:{
    ShopHead
  },
  methods:{
    goF1(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  *{margin:0;padding: 0;box-sizing: border-box;}
  .shop{height: 100%;font-size: 12px;padding-bottom: 47px;}
  .tabs{position: absolute;bottom: 0;left: 0;right: 0;top: 120px;overflow: hidden;}
  .evaluation{height: 100%;overflow-y: auto;padding-bottom: 40px;}
  .go-1{position:fixed;top: 10px;left: 10px;z-index: 99999;width: 30px;height: 30px;border-radius: 50%;background-color: rgba(0,0,0,.5);text-align: center;}
</style>
