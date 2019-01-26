<template>
  <div>
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
    this.$store.commit("Shop/setRestaurant_id",this.$route.query.id)
  },
  components:{
    ShopHead
  }
}
</script>

<style scoped>
  *{margin:0;padding: 0;box-sizing: border-box;}
  .shop{height: 100%;font-size: 12px;padding-bottom: 47px;}
  .tabs{position: absolute;bottom: 0;left: 0;right: 0;top: 120px;overflow: hidden;}
  .evaluation{height: 100%;overflow-y: auto;padding-bottom: 40px;}
</style>
