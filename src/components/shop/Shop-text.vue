<template>
  <div>
    <div class="rating-head">
      <div class="head-left">
        <p>{{shopRating.overall_score | toFixedNum}}</p>
        <p>综合评价</p>
        <p>高于周边商家76.9%</p>
      </div>
      <div class="head-right">
        <div>
          <p>服务态度</p>
          <span>★★★★★</span>
          <span>{{shopRating.service_score | toFixedNum}}</span>
        </div>
        <div>
          <p>菜品评价</p>
          <span>★★★★★</span>
          <span>{{shopRating.food_score | toFixedNum}}</span>
        </div>
        <div>
          <p>送达时间</p>
          <span>40分钟</span>
        </div>
      </div>
    </div>
    <div class="tags">
      <ul>
        <li :class="{'tagActivity' : index === tagsNum}" v-for="(tag, index) in tags" :key="index">{{tag.name}}({{tag.count}})</li>
      </ul>
    </div>
    <div class="evaluation">
      <ul>
        <li v-for="(evaluation, index) in evaluations" :key="index">
          <img :src="evaluation.avatar | evaluationImg" alt="">
          <div class="evaluation-con">
            <div class="con-head">
              <div>
                <p class="name">{{evaluation.username}}</p>
                <p class="fen">★★★★★<span>{{evaluation.time_spent_desc}}</span></p>
              </div>
              <div>{{evaluation.rated_at}}</div>
            </div>
            <div v-if="evaluation.rating_text">{{evaluation.rating_text}}</div>
            <div class="evaluation-img">
              <template v-for="(item,index) in evaluation.item_ratings">
               <img :key="index" :src="item.image_hash | item_ratingsImg" alt="" v-if="item.image_hash != ''">
              </template>
            </div>
            <div class="evaluation-label">
              <template v-for="(item,index) in evaluation.item_ratings">
                <div :key="index">{{item.food_name}}</div>
              </template>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const inciseImg = ((img) => {
  let img1 = img.slice(0,1)
  let img2 = img.slice(1,3)
  let img3 = img.slice(3,)
  return `https://fuss10.elemecdn.com/${img1}/${img2}/${img3}.jpeg`
})
export default {
  data(){
    return {
      tagsNum:0
    }
  },
  filters:{
    toFixedNum(num){
      return Number(num).toFixed(1)
    },
    evaluationImg(img){
      if(img === ''){
        return 'http://elm.cangdu.org/img/default.jpg'
      }else{
        return inciseImg(img)
      }
    },
    item_ratingsImg(img){
      return inciseImg(img)
    }
  },
  created(){
    this.$store.dispatch("Shop/getRating")
    this.$store.dispatch("Shop/getTags")
    this.$store.dispatch("Shop/getEvaluation")
  },
  computed:{
    shopRating(){
      return this.$store.state.Shop.shopRating
    },
    tags(){
      return this.$store.state.Shop.tags
    },
    evaluations(){
      return this.$store.state.Shop.evaluations
    }
  }
}
</script>

<style scoped>
  .rating-head{height: 110px;padding: 18.5px 11px;margin-bottom: 12px;display: flex;font-size: 12px;background-color:#fff;margin-bottom: 10px;}
  .head-left{flex:3;text-align: center;}
  .head-left p{margin-bottom: 5px;}
  .head-left p:nth-child(1){font-size: 26px;color: #f60;} 
  .head-left p:nth-child(2){font-size: 16px;color: #666;}
  .head-left p:nth-child(3){color: #999;}
  .head-right{flex: 4;}
  .head-right>div{display:flex;}
  .head-right>div>p{font-size: 14px;margin-bottom: 8px;color:#666;margin-right: 8px;}
  .head-right>div>span:nth-child(2){margin-top: 3px;margin-right: 8px;}
  .head-right>div>span:nth-child(3){font-size: 16px;}

  .tags{padding:11px;background-color: #fff;}
  .tags ul{display: flex;flex-wrap: wrap;}
  .tags ul li{background-color: #ebf5ff;color: #6d7885;line-height: 23px;height:33px;padding: 5px;font-size: 14px;box-sizing: border-box;text-align: center;margin: 0 10px 5px 0;border-radius: 5px;}
  .tags ul li.tagActivity{background-color: #3190e8;color: #fff;}
  .tags ul li.unsatisfied{background-color: #f5f5f5;color: #aaa;}

  .evaluation{padding: 0 11px;background-color: #fff;font-size: 12px;}
  .evaluation li{display: flex;padding: 20px 0;}
  .evaluation li>img{width: 35px;height: 35px;border-radius: 50%;margin-right: 15px;}
  .evaluation li .evaluation-con{flex-grow: 1;}
  .evaluation li .con-head{display: flex;color:#666;justify-content: space-between;}
  .evaluation li .con-head .name{margin-bottom: 10px;}
  .evaluation li .con-head .fen{margin-bottom: 8px;}
  .evaluation li .con-head .fen span{font-size: 15px;}
  .evaluation li .evaluation-img{display: flex;flex-wrap: wrap;}
  .evaluation li .evaluation-img img{width: 70px;height: 70px;margin: 0 15px 10px 0;}
  .evaluation li .evaluation-label{display: flex;}
  .evaluation li .evaluation-label>div{width: 55px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;color: #999;border: 1px solid #ebebeb;font-size: 14px;padding: 5px;border-radius: 5px;margin-right: 5px;}
</style>
