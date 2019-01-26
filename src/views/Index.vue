<template>
  <div>
    <div class="header">
      <a class="search">
        <svg
          data-v-070ab150
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <circle
            data-v-070ab150
            cx="8"
            cy="8"
            r="7"
            stroke="rgb(255,255,255)"
            stroke-width="1"
            fill="none"
          ></circle>
          <line
            data-v-070ab150
            x1="14"
            y1="14"
            x2="20"
            y2="20"
            style="stroke: rgb(255, 255, 255); stroke-width: 2;"
          ></line>
        </svg>
      </a>
      <a href>
        <span></span>
      </a>
      <a class="login_a" href>
        <span class="login">登录|注册</span>
      </a>
    </div>
        <cube-slide :auto-paly="false" ref="slide" :data="banner" @change="changePage">
          <cube-slide-item
            v-for="(item, index) in banner"
            :key="index"
            @click.native="clickHandler(item, index)"
          >
            <div class="banner">
              <div v-for="(pic, index) in item" :key="index">
                <!-- <router-link to="/food/?geohash=34.79709,113.59965&title=美食&restaurant_category_id=8">甜品饮品</router-link> -->
                <router-link :to="'/food/?geohash=34.79709,113.59965&title='+pic.title+'&restaurant_category_id=0'"  :href="item.url" >
                  <img :src="'https://fuss10.elemecdn.com/'+pic.image_url">
                  <span class="txt">{{pic.title}}</span>
                </router-link>
              </div>
            </div>
          </cube-slide-item>
        </cube-slide>
        <div class="line"></div>
        <div class="store">
            <span class="shopstoreimg">
              <img src="../img/shopstore.png" alt>
            </span>
            <span class="txt">附近商家</span>
        </div>
    <div class="warp">
      <cube-scroll ref="scroll" :options="options" @pulling-up="pullupHandler">
        <div class="shop">

          <div class="storelist">
            <ul class="shoplist">
              <li v-for="(items,index) in shoplist" :key="index">
                <a href>
                  <div class="img">
                    <img :src="'//elm.cangdu.org/img/'+items.image_path" alt>
                  </div>
                  <div class="detail">
                    <div class="shopheader">
                      <h4 class="title">
                        <p class="brand">品牌</p>
                        {{items.name}}
                      </h4>
                      <ul class="shopul">
                        <li v-for="(id,index) in items.supports" :key="index">{{id.icon_name}}</li>
                        <!-- <li>{{items.supports[1].icon_name}}</li>
                        <li>{{items.supports[2].icon_name}}</li>-->
                      </ul>
                    </div>
                    <div class="shopcon">
                      <span>
                        <i>★★★★★</i>
                        <span class="fen">{{items.rating}}</span>
                      </span>
                      <span class="shou">月售{{items.recent_order_num}}</span>
                      <span>
                        <span class="niao">{{items.delivery_mode.text}}</span>
                        <span class="zhun">{{items.supports[1].name}}</span>
                      </span>
                    </div>
                    <div class="shopfot">
                      <p>
                        <span class="song">￥{{items.float_minimum_order_amount}}起送</span>
                        <span class="xie">/</span>
                        <span class="fei">{{items.piecewise_agent_fee.tips}}</span>
                      </p>
                      <p class="kmtime">
                        <span class="km">{{items.distance}}</span>
                        <span class="xie">/</span>
                        <span class="time">{{items.order_lead_time}}</span>
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </cube-scroll>
    </div>

    <Foot class="footer"></Foot>
  </div>
</template>

<script>
import Foot from "../components/Foot";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

import axios from "axios";
export default {
  data() {
    return {
      list: [],
      shoplist: [],
      banner: []
    };
  },
  computed: {
    options() {
      return {
        observeDOM: true,
        click: true,
        probeType: 1,
        scrollbar: false,
        pullDownRefresh: {
            threshold:50
        },
        pullUpLoad: {
            threshold:50
        }
      };
    }
  },
  components: {
    Foot
  },
  watch :{
    '$route'(to,from){
      console.log(to.params.id)
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.$refs.scroll.refresh();
    // }, 5000);
    axios.get("http://elm.cangdu.org/v2/index_entry?group_type=1").then(res => {
      this.list = res.data;
      const arr = [];
      for (let i = 0; i < 2; i++) {
        const listItem = [];
        for (let j = 0; j < 8; j++) {
          const index = j + i * 7;
          listItem.push(this.list[index]);
        }
        arr.push(listItem);
        this.banner = arr;
        console.log(this.banner);
      }
    }),
      axios
        .get(
          "http://elm.cangdu.org/shopping/restaurants?latitude=31.14123&longitude=121.66807"
        )
        .then(res => {
          this.shoplist = res.data;
          console.log(this.shoplist);
          console.log(this.shoplist[0].supports);
        });
  },
  methods: {
    changePage(current) {
      // console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      // console.log(item, index)
    },
    pullupHandler() {
      console.log("上啦加载");
      axios .get(
          "http://elm.cangdu.org/shopping/restaurants?latitude=31.14123&longitude=121.66807"
      )
        .then(res => {
            this.shoplist = [...this.shoplist,...res.data]
        })
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.warp {
  position: absolute;
  top: 287px;
  bottom: 0;
  width: 100%;
}
.loading {
  position: fixed;
  top: 50%;
  left: 50%;
}
.header {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
  padding-left: 15px;
}
.search {
  width: 0.9rem;
  height: 0.9rem;
  position: relative;
  top: 25%;
  transform: translateY(-50%);
}
.login_a {
  right: 0.55rem;
  font-size: 14px;
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.login {
}
.nav {
  padding-top: 2.1rem;
  background-color: #fff;
  border-bottom: 0.025rem solid #e4e4e4;
  height: 10.6rem;
}
.banner {
  margin-top: 45px;
  width: 100%;
  /* height: 250px; */
  height: 10.6rem;
  padding-bottom: 0.6rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-top: 10px;
}
.banner div {
  width: 25%;
  padding: 0.3rem 0;
}
.banner div a {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* flex-wrap: wrap; */
  justify-content: center;
}
.banner img {
  display: block;
  width: 42px;
  height: 42px;
}
.banner span {
  text-align: center;
  margin-top: 8px;
  font-size: 14px;
  color: #666;
}
.cube-slide-dots > span {
  widows: 10px;
  height: 10px;
  border-radius: 15px;
}
.shop {
  background-color: #fff;
  overflow: hidden;
}
.store {
  color: #999;
  height: 42px;
    border-bottom: 0.025rem solid #e4e4e4;
}
.shopstoreimg {
  float: left;
  color: #999;
  line-height: 42px;
  margin-left: 15px;
  margin-right: 5px;
}
.store .txt {
  display: block;
  width: 85px;
  font-size: 13px;
  line-height: 40px;
  margin-left: 2px;
}
.brand {
  display: inline-block;
  font-size: 0.5rem;
  color: #333;
  background-color: #ffd930;
  padding: 0 0.1rem;
  border-radius: 0.1rem;
  font-weight: 700;
  margin-right: 0.2rem;
}
.detail {
  width: 100%;
}
.shoplist li a {
  display: flex;
  border-bottom: 0.025rem solid #f1f1f1;
  padding: 0.7rem 0.4rem;
}
.shoplist li .img {
  width: 87px;
  float: left;
  height: 77px;
}
.shoplist li .img img {
  width: 70px;
  height: 70px;
  display: block;
  margin-right: 0.4rem;
}
.shopheader {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.shopheader h4 {
  width: 8.5rem;
  color: #333;
  padding-top: 0.01rem;
  font-size: 15px;
  font-weight: 700;
}
.shopheader ul {
  display: flex;
  transform: scale(0.8);
}
.shopheader ul li {
  font-size: 0.5rem;
  color: #999;
  border: 0.025rem solid #f1f1f1;
  padding: 0 0.04rem;
  border-radius: 0.08rem;
  margin-left: 0.05rem;
}
.line {
  height: 10px;
  background-color: #f5f5f5;
  border: 1px solid #e4e4e4;
  border-bottom: none;
}
.shopcon {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.fen {
  display: inline-block;
  font-size: 12px;
  color: #ff6000;
  margin: 0 0.2rem;
}
.shou {
  display: block;
  float: left;
  transform: scale(0.8);
  margin-left: -68px;
  font-size: 12px;
  margin-top: 3px;
  color: #666;
}
.niao {
  display: block;
  float: left;
  font-size: 12px;
  padding: 0.04rem 0.08rem 0;
  border-radius: 0.08rem;
  color: #fff;
  height: 16px;
  line-height: 16px;
  background-color: #3190e8;
  border: 0.025rem solid #3190e8;
  transform: scale(0.7);
}
.shopfot {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  font-size: 0.5rem;
  color: #333;
}
.zhun {
  display: block;
  float: left;
  font-size: 12px;
  padding: 0.04rem 0.08rem 0;
  border-radius: 0.08rem;
  margin-left: -11px;
  height: 16px;
  line-height: 16px;
  color: #3190e8;
  border: 0.025rem solid #3190e8;
  transform: scale(0.7);
}
.song,
.fei {
  transform: scale(0.9);
  font-size: 0.5rem;
  color: #666;
}
.km,
.tmle {
  transform: scale(0.9);
}
.km {
  color: #999;
}
.time {
  color: #3190e8;
}
.xie {
  margin-right: 2px;
  margin-left: 2px;
}
.kmtime {
  margin-right: 6px;
}
</style>
