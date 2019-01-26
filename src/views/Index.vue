<template>
  <div>
    <div class="header">
      <a class="search" @click="search">
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
      <a class="name">
        <router-link to="/site" v-if="!name">请选择地址...</router-link>
        <span v-else>{{name}}</span>
      </a>
      <a class="login_a" href>
        <router-link to="/login" class="login" v-if="!userinfo">登录|注册</router-link>
        <router-link class="user_avatar" to="/my" v-else>
          <svg viewBox="0 0 28 33" id="user" width="100%" height="100%">
            <path
              fill-rule="evenodd"
              d="M20.798 19.289c2.636-2.002 4.215-5.091 4.215-8.437 0-5.886-4.845-10.647-10.808-10.647S3.397 4.966 3.397 10.852c0 3.345 1.578 6.433 4.212 8.435l.264-2.678C4.358 18.32 1.591 21.403.168 25.187l1.478.556v-1.579c-1.485.73-1.485.73-1.501 1.079-.054.188-.054.188-.069.278a2.58 2.58 0 0 0-.026.229 9.112 9.112 0 0 0-.019.4c-.008.265-.014.617-.018 1.039-.005.511-.006 1.037-.006 1.451v.027c-.004 1.732 1.41 3.129 3.154 3.129h22.082a3.18 3.18 0 0 0 3.172-3.153l.011-1.305.008-.897.003-.296.001-.083v-.022-.006-.001l.002-.278-.093-.262c-1.385-3.918-4.203-7.122-7.812-8.88l.263 2.678zm-1.911-2.516l-2.045 1.553 2.309 1.125c2.856 1.392 5.106 3.949 6.218 7.093l-.09-.54V26.033l-.001.083-.003.296-.008.897-.011 1.305c0 .01-.011.021-.013.021H3.161c-.007 0 .005.011.005.032v-.031c0-.404.001-.92.006-1.418.004-.4.01-.732.017-.969.004-.121.008-.212.012-.262l-.006.043c-.009.06-.009.06-.058.229-.01.336-.01.336-1.49 1.063H2.74l.385-1.024c1.141-3.035 3.35-5.495 6.131-6.849l2.309-1.124-2.045-1.554c-1.859-1.412-2.964-3.576-2.964-5.92 0-4.129 3.418-7.488 7.649-7.488s7.649 3.359 7.649 7.488c0 2.344-1.106 4.509-2.966 5.921z"
              class="path1"
            ></path>
          </svg>
        </router-link>
      </a>
    </div>
    <cube-slide :auto-paly="false" ref="slide" :data="banner">
      <cube-slide-item
        v-for="(item, index) in banner"
        :key="index"
      >
        <div class="banner">
          <div v-for="(pic, index) in item" :key="index">
            <router-link
              :to="'/food/?geohash=34.79709,113.59965&title='+pic.title+'&restaurant_category_id=0'"
              :href="item.url"
            >
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
                <router-link :to="'/shop?geohash='+$route.query.geohash+'&id=' + items.id">
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
                </router-link>
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
      banner: [],
      name:''
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
          threshold: 50
        },
        pullUpLoad: {
          threshold: 50
        }
      };
    },
    userinfo () {
      return this.$store.state.login.userinfo
    }
  },
  components: {
    Foot
  },
  mounted() {
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
      }
    }),
    axios
      .get(
        "http://elm.cangdu.org/shopping/restaurants?latitude=31.14123&longitude=121.66807"
      )
      .then(res => {
        this.shoplist = res.data;
    });
    axios.get("http://elm.cangdu.org/v2/pois/"+this.$route.query.geohash).then(res=>{
      if (res.status==200) {
        this.name=res.data.name
      }
    })
  },
  methods: {
    pullupHandler() {
      axios
        .get(
          "http://elm.cangdu.org/shopping/restaurants?latitude=31.14123&longitude=121.66807"
        )
        .then(res => {
          this.shoplist = [...this.shoplist, ...res.data];
        });
    },
    search() {
      this.$router.push("/city");
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
.search svg {
  width: 20px;
  height: 20px;
}
.user_avatar svg {
  width: 18px;
  height: 18px;
  fill: #fff;
}
.login_a {
  right: 0.55rem;
  font-size: 14px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.login_a a {
  color: #fff;
}
.name {
  position: absolute;
  left: 50%;
  color: #fff;
  top: 40%;
  transform: translateX(-50%);
}
.name a {
  color: #fff;
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
