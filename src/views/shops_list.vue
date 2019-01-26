<template>
  <div class="food_container">
    <header class="header">
      <h1>{{food_list[0]}}</h1>
      <i class="cubeic-back" @click="next"></i>
    </header>
    <div class="sort_container">
      <div
        v-for="(item,index) in food_list"
        :key="index"
        @click="changeI(index)"
        class="sort_container_list"
      >
        <div class="sort_item_container">
          <div class="sort_item_border">
            <span :class="{ 'sort_txt' : index==i && disnone}">{{item}}</span>
            <i class="el-icon-caret-bottom" :class="{ 'sort_icon' : index==i && disnone}"></i>
          </div>
        </div>

        <transition name="slide-fade">
          <div class="category_container" v-show="isshow0" v-if="index==0">
            <div class="category_left">
              <ul>
                <li
                  v-for="(item,index) in shop_list"
                  :key="index"
                  class="shops"
                  :class="{ 'category_active': index==ini}"
                  @click.stop="changeSortFood(index)"
                >
                  <div>
                    <img
                      :src=" item.image_url | filterString"
                      v-if="!index == 0"
                      class="category_icon"
                    >
                    <span class="shop_list_name">{{item.name}}</span>
                  </div>
                  <div>
                    <span class="shop_list_txt">{{item.count}}</span>
                    <i class="el-icon-arrow-right" v-if="index>0"></i>
                  </div>
                </li>
              </ul>
            </div>
            <div class="category_right">
              <ul v-for="(item,index) in shop_list" :key="index" v-show="index>0&&index==ini">
                <li
                  class="category_right_li"
                  v-for="(item,index) in item.sub_categories"
                  :key="index"
                  @click="getshops(item.id,item.name)"
                  v-show="!(index==0||item.count==0)"
                >
                  <span>{{item.name}}</span>
                  <span>{{item.count}}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="sort_detail_type" v-if="index==1" v-show="isshow1">
            <ul>
              <li
                class="sort_list_li"
                v-for="(item,index) in sore"
                :key="index"
                @click="changesore(item.order_id,index)"
              >
                <svg viewBox="0 0 33 32" id="default" width="100%" height="100%" v-if="index==0">
                  <path
                    fill="#3b87c8"
                    d="M13.374 29.064a.94.94 0 0 1-.941-.941V6.476l-7.285 6.899a.942.942 0 0 1-1.299-1.364l8.876-8.424a.94.94 0 0 1 1.59.681v23.855a.94.94 0 0 1-.941.941zM20.904 29.355h-.008a.94.94 0 0 1-.375-.078.943.943 0 0 1-.559-.86V3.944a.94.94 0 1 1 1.882 0v22.287l7.238-6.842a.94.94 0 0 1 1.289 1.366l-8.818 8.338a.943.943 0 0 1-.649.264z"
                  ></path>
                </svg>
                <svg viewBox="0 0 32 32" id="distance" width="100%" height="100%" v-if="index==1">
                  <path
                    fill="#2a9bd3"
                    d="M15.884 31.236l-.042.001a.888.888 0 0 1-.59-.224l-7.91-7.91a7.548 7.548 0 0 1-.498-.471 12.752 12.752 0 0 1-3.747-9.045C3.097 6.523 8.824.796 15.888.796s12.791 5.727 12.791 12.791c0 3.532-1.432 6.73-3.747 9.045-.196.196-.409.391-.613.578l-7.813 7.804a.886.886 0 0 1-.589.223l-.035-.001zm0-28.667C9.818 2.59 4.908 7.513 4.908 13.582c0 3.023 1.218 5.762 3.19 7.752l.461.435 7.316 7.316 7.2-7.2q.284-.249.551-.516a10.977 10.977 0 0 0 3.225-7.787c0-6.066-4.905-10.987-10.965-11.013z"
                  ></path>
                  <path
                    fill="#2a9bd3"
                    d="M15.884 18.524a5.707 5.707 0 0 1-4.07-1.732l-.001-.001a5.76 5.76 0 1 1 4.119 1.734h-.05zm-2.817-2.942a3.982 3.982 0 1 0 0-5.626c-.726.717-1.175 1.713-1.175 2.813s.449 2.096 1.175 2.813z"
                  ></path>
                </svg>
                <svg viewBox="0 0 23 32" id="hot" width="100%" height="100%" v-if="index==2">
                  <path
                    fill="#f07373"
                    d="M9.859 29.375c-3.489-.771-6.362-3.097-7.187-5.551-.882-2.623-1.029-6.873-.238-9.318l-1.727.037.001.002.001.004.004.01.011.029.038.091c.039.09.086.191.142.3.155.304.349.627.586.955a7.477 7.477 0 0 0 2.711 2.318c.583.153.583.153 1.087-.188.187-.263.187-.263.224-.39.028-.094.041-.176.05-.28.01-.109.016-.238.022-.47.063-2.219.162-3.38.562-4.943a10.05 10.05 0 0 1 .814-2.185c1.433-2.723 4.843-6.053 6.699-7.021l-1.325-.962c-.064.382-.127.992-.131 1.722-.008 1.252.169 2.393.616 3.329.261.547.525.968 1.132 1.862l.23.339c.86 1.281 1.161 1.986 1.069 2.653l-.009.125c.069.517.069.517.781.906.451-.026.451-.026.578-.104.144-.093.144-.093.19-.136.041-.037.079-.077.123-.125.068-.076.153-.178.245-.295.22-.279.458-.615.677-.963.648-1.028 1.045-1.988 1.037-2.845l-.914.009-.706.581c.295.358.809 1.075 1.33 1.936.826 1.363 1.492 2.791 1.898 4.209 1.1 3.845.3 9.288-2.245 11.75a9.652 9.652 0 0 1-1.659 1.29 10.232 10.232 0 0 1-3.471 1.332c-.794.151-1.385.191-2.064.191h-.009a2.75 2.75 0 0 1-.373-.03 6.007 6.007 0 0 1-.585-.115 7.765 7.765 0 0 1-.536-.15l-.578 1.735a9.182 9.182 0 0 0 1.445.341c.221.031.43.048.627.048h.009a12.546 12.546 0 0 0 2.407-.224 12.011 12.011 0 0 0 4.088-1.572c.699-.431 1.358-.94 1.971-1.533 3.098-2.998 4-9.132 2.731-13.567-.455-1.591-1.188-3.161-2.092-4.653-.569-.939-1.134-1.727-1.482-2.15l-1.645-1.998.024 2.588c.004.412-.281 1.1-.756 1.853a9.64 9.64 0 0 1-.569.809 4.528 4.528 0 0 1-.158.195c.028-.027.028-.027.16-.113.122-.075.122-.075.57-.101.71.388.71.388.778.902h-.914l.906.125c.174-1.262-.261-2.281-1.362-3.922l-.235-.347c-.554-.817-.787-1.189-.995-1.624-.306-.642-.444-1.53-.438-2.53a10.566 10.566 0 0 1 .107-1.431L14.44.304l-1.628.85c-2.18 1.138-5.862 4.733-7.471 7.791a11.873 11.873 0 0 0-.967 2.583 19.2 19.2 0 0 0-.511 3.147c-.036.423-.061.839-.079 1.273-.011.281-.019.531-.029.924-.005.191-.01.298-.015.354a.403.403 0 0 1 .019-.077c.027-.099.027-.099.203-.346.492-.332.492-.332 1.112-.157a5.745 5.745 0 0 1-2.54-2.496 3.456 3.456 0 0 1-.093-.197l-.018-.044-.002-.006v.001l.001.002v.002l-.915-2.473-.812 2.51c-.917 2.836-.757 7.485.245 10.463 1.042 3.099 4.442 5.852 8.526 6.754l.395-1.785z"
                  ></path>
                </svg>
                <svg viewBox="0 0 32 32" id="price" width="100%" height="100%" v-if="index==3">
                  <path
                    fill="#e6b61a"
                    d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"
                  ></path>
                  <path
                    fill="#e6b61a"
                    d="M23.14 6.06l-5.12 8.65h4.48v1.54h-5.49v2.43h5.49v1.54h-5.49v5.1h-2.02v-5.1H9.53v-1.54h5.46v-2.43H9.53v-1.54h4.45L8.8 6.06h2.24l4.99 8.48 4.93-8.48h2.18z"
                  ></path>
                </svg>
                <svg viewBox="0 0 32 32" id="speed" width="100%" height="100%" v-if="index==4">
                  <path
                    fill="#37c7b7"
                    d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"
                  ></path>
                  <path
                    fill="#37c7b7"
                    d="M15 7v11.002l5.678 4.882 1.304-1.517-5.33-4.583.348.758V6.999h-2z"
                  ></path>
                </svg>
                <svg viewBox="0 0 33 32" id="rating" width="100%" height="100%" v-if="index==5">
                  <path
                    fill="#eba53b"
                    d="M27.087 31.84L16.8 25.553 6.504 31.84l2.824-11.727-9.186-7.878 12.019-.941L16.801.16l4.631 11.134 12.019.941-9.158 7.849zM16.8 23.369l7.407 4.527-2.014-8.471 6.588-5.647-8.659-.696L16.8 5.063l-3.341 8.019-8.659.696 6.588 5.647-2.014 8.471z"
                  ></path>
                </svg>
                <div>
                  <span>{{item.name}}</span>
                  <svg
                    viewBox="0 0 38 32"
                    id="selected"
                    width="100%"
                    height="100%"
                    v-show="index==isi"
                  >
                    <path
                      fill="#3190e8"
                      d="M32.291 2.327c.582-.582 1.455-.582 2.036 0l2.036 2.036c.582.582.582 1.455 0 2.036L13.818 29.09c-.582.582-1.455.582-2.036 0L1.455 18.908c-.582-.582-.582-1.455 0-2.036l2.036-2.036c.582-.582 1.455-.582 2.036 0l7.273 7.273L32.291 2.327z"
                    ></path>
                  </svg>
                </div>
              </li>
            </ul>
          </div>
          <div
            class="sort_detail_type filter_container"
            v-if="index==2"
            v-show="isshow2"
            @click.stop
          >
            <div>
              <header class="filter_header_style">配送方式</header>
              <ul class="filter_ul">
                <li class="filter_li" @click="fengniao(item.id)">
                  <svg
                    viewBox="0 0 38 32"
                    id="selected"
                    width="100%"
                    height="100%"
                    v-show="!selected"
                  >
                    <path
                      fill="#3190e8"
                      d="M32.291 2.327c.582-.582 1.455-.582 2.036 0l2.036 2.036c.582.582.582 1.455 0 2.036L13.818 29.09c-.582.582-1.455.582-2.036 0L1.455 18.908c-.582-.582-.582-1.455 0-2.036l2.036-2.036c.582-.582 1.455-.582 2.036 0l7.273 7.273L32.291 2.327z"
                    ></path>
                  </svg>
                  <svg
                    viewBox="0 0 32 32"
                    id="fengniao"
                    width="100%"
                    height="100%"
                    v-show="selected"
                  >
                    <path
                      fill="#27a9e1"
                      d="M5.953 2.793s-.117 1.801.857 3.56c.361.255 10.458 6.218 10.458 6.218L5.953 2.794z"
                    ></path>
                    <path
                      fill="#b8e5fa"
                      d="M9.604.889s-.333 1.404.069 3.147c.254.307 7.801 8.116 7.801 8.116L9.604.889z"
                    ></path>
                    <path
                      fill="#0089cf"
                      d="M29.282 14.601l-4.861-.361s-.133-.001-.147-.226h-.002a2.652 2.652 0 0 0-2.978-2.357h-.003l-.011.001-.12.019-.004.001c-.432.075-1.812.374-3.038 1.285 0 0-.167.121-.421.33L2.665 6.043s3.254 8.665 12.207 11.98c-1.6 2.849-7.407 13.48-7.407 13.48l2.446-1.306s.775-2.853 1.884-4.957c.609-.936 1.211-.992 1.498-1.141.291-.151 3.707-.765 6.431-4.339.897-1.166 1.244-2.666 1.723-4.261.28-.061 3.008-.651 3.789-.718 1.068-.092 4.045-.181 4.045-.181z"
                    ></path>
                    <path
                      fill="#0089cf"
                      d="M7.392 17.849c-1.567-1.368-2.199-3.219-2.035-5.217-.232-.288-.45-.572-.654-.851-.484 2.903.555 4.854 2.176 6.269 1.538 1.342 3.635 1.85 5.466 1.577-1.674.109-3.563-.565-4.953-1.778z"
                    ></path>
                    <path
                      fill="#0089cf"
                      d="M12.345 19.628h.002zm-7.642-7.846c.204.279.421.563.654.851-.164 1.998.468 3.849 2.035 5.217 1.292 1.128 3.016 1.79 4.597 1.79.12 0 .238-.004.356-.011a6.554 6.554 0 0 1-.975.071c-1.568 0-3.22-.54-4.49-1.648-1.621-1.415-2.66-3.366-2.176-6.269z"
                    ></path>
                  </svg>
                  <span
                    :class="{'selected_txt' : !selected}"
                    v-for="(item,index) in distribution"
                    :key="index"
                  >{{item.text}}</span>
                </li>
              </ul>
            </div>
            <div>
              <header class="filter_header_style">商家属性 （可以多选）</header>
              <ul class="filter_ul">
                <li
                  class="filter_li"
                  v-for="(item,index) in filter_list"
                  :key="index"
                  @click="property(index,item.id)"
                >
                  <svg
                    viewBox="0 0 38 32"
                    id="selected"
                    width="100%"
                    height="100%"
                    v-show="item.check"
                  >
                    <path
                      fill="#3190e8"
                      d="M32.291 2.327c.582-.582 1.455-.582 2.036 0l2.036 2.036c.582.582.582 1.455 0 2.036L13.818 29.09c-.582.582-1.455.582-2.036 0L1.455 18.908c-.582-.582-.582-1.455 0-2.036l2.036-2.036c.582-.582 1.455-.582 2.036 0l7.273 7.273L32.291 2.327z"
                    ></path>
                  </svg>
                  <span
                    class="filter_icon"
                    :style="{color:'#'+item.icon_color,'border-color':'#'+item.icon_color}"
                    v-show="!item.check"
                  >{{item.icon_name}}</span>
                  <span :class="{'sort_txt':item.check}">{{item.name}}</span>
                </li>
              </ul>
            </div>
            <div class="confirm_filter">
              <div class="clear_all filter_button_style" @click="cancel">取消</div>
              <div class="confirm_select filter_button_style" @click="submitscreen">
                确定
                <span v-if="screen.length">({{screen.length}})</span>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="back_cover" v-show="disnone"><cube-loading></cube-loading></div>
    <div class="shoplist_container">
      <shop-list></shop-list>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import shopList from "../components/shops_list/shopList";
export default {
  data() {
    return {
      isshow0: false,
      isshow1: false,
      isshow2: false,
      ini: null,
      disnone: false,
      i: null,
      isi: null,
      selected: true
    };
  },
  methods: {
    changeI(index) {
      if (index == 0) {
        this.isshow0 = !this.isshow0;
        this.isshow1 = false;
        this.isshow2 = false;
      } else if (index == 1) {
        this.isshow1 = !this.isshow1;
        this.isshow0 = false;
        this.isshow2 = false;
      } else {
        this.isshow2 = !this.isshow2;
        this.isshow1 = false;
        this.isshow0 = false;
      }
      this.i = index;
      if (!this.isshow0 && !this.isshow1 && !this.isshow2) {
        this.disnone = false;
      } else {
        this.disnone = true;
      }
    },
    changeSortFood(index) {
      if (index > 0) {
        this.ini = index;
      } else {
        this.disnone = false;
        this.isshow0 = false;
      }
    },
    getshops(id, name) {
      this.disnone = false;

      this.$store.commit("shops_list/changeFood_list", name);

      this.$store.dispatch("shops_list/getshops", id);
    },
    changesore(id, index) {
      this.isi = index;

      this.$store.dispatch("shops_list/getsore", id);
    },
    fengniao(id) {
      this.selected = !this.selected;
    },
    property(index, id) {
      this.$store.commit("shops_list/changesore",{index,id});
      
    },
    submitscreen() {
      this.isshow2 = !this.isshow2;
      this.disnone = !this.disnone;
      this.$store.dispatch("shops_list/getScreen", this.screen);
    },
    cancel() {
      this.screen = [];
      this.$store.commit("shops_list/delsore");
    },
    next () {
      this.$router.go(-1)
    }
  },
  created() {
    this.ini = this.$route.query.restaurant_category_id;
    this.$store.commit("shops_list/changeFood", this.$route.query.title);
    const geohash = this.$route.query.geohash.split(",")
    const geohashs = {"latitude":geohash[0],"longitude":geohash[1]} 
    this.$store.dispatch("shops_list/getShopList")

    this.$store.dispatch("shops_list/getfoodlist",geohashs);

    this.$store.dispatch("shops_list/getfilter");

    this.$store.dispatch("shops_list/screen");
  },
  computed: mapState({
    shop_list: state => state.shops_list.shop_list,
    filter_list: state => state.shops_list.filter_list,
    distribution: state => state.shops_list.distribution,
    food_list: state => state.shops_list.food_list,
    sore: state => state.shops_list.sore,
    screen:state => state.shops_list.screen
  }),
  filters: {
    filterString(string) {
      const s3 = string.slice(3);
      if (!string) {
        return "http://elm.cangdu.org/img/default.jpg";
      } else {
        if (string.indexOf("png") != -1) {
          return (
            "https://fuss10.elemecdn.com/" +
            string[0] +
            "/" +
            string[1] +
            string[2] +
            "/" +
            s3 +
            ".png"
          );
        } else {
          return (
            "https://fuss10.elemecdn.com/" +
            string[0] +
            "/" +
            string[1] +
            string[2] +
            "/" +
            s3 +
            ".jpeg"
          );
        }
      }
    }
  },
  components: {
    shopList
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-257px);
  opacity: 0;
}

.food_container {
  width: 100%;
}
.food_container .header {
  width: 100%;
  height: 44px;
  background-color: #3190e8;
  text-align: center;
  line-height: 44px;
  color: #ffffff;
  position: fixed;
  z-index: 100;
}

.food_container .header h1 {
  font-size: 18px;
  font-weight: 700;
}
.food_container .header .cubeic-back {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 15px;
  color: #ffffff;
}
.sort_container {
  width: 100%;
  position: fixed;
  top: 44px;
  display: flex;
  z-index: 11;
  border-bottom: 1px solid #f1f1f1;
}

.sort_container .sort_container_list {
  width: 33.3333333%;
  font-size: 14px;
  color: #666;
  height: 37.5px;
  text-align: center;
  background-color: #fff;
}

.sort_item_container {
  padding-top: 10px;
  position: relative;
  z-index: 20;
  height: 100%;
  background-color: #fff;
}

.sort_item_border {
  height: 20px;
  line-height: 20px;
  border-right: 1px solid #e4e4e4;
}

.el-icon-caret-bottom {
  color: #666;
  transition: all 0.3s;
}

.sort_icon {
  transform: rotate(180deg);
  color: #3190e8;
}

.category_container,
.sort_detail_type {
  background-color: #fff;
  width: 100%;
  position: absolute;
  display: flex;
  top: 38px;
  left: 0;
  border-top: 1px solid #e4e4e4;
}

.category_left {
  flex: 1;
  background-color: #f1f1f1;
  height: 16rem;
  overflow-y: auto;
}

.category_right {
  flex: 1;
  background-color: #fff;
  padding-left: 0.5rem;
  height: 16rem;
  overflow-y: auto;
}
.shops {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  overflow: hidden;
}

.shop_list_name {
  font-size: 12px;
  color: #666;
  line-height: 42px;
}

.shop_list_txt {
  background-color: #ccc;
  font-size: 12px;
  color: #fff;
  padding: 0 2px;
  border: 1px solid #ccc;
  border-radius: 10px;
  vertical-align: middle;
  margin-right: 5px;
  line-height: 42px;
}

.el-icon-arrow-right {
  line-height: 42px;
}

.category_icon {
  width: 18px;
  height: 18px;
  vertical-align: middle;
  margin-right: 10px;
}
.category_right_li {
  display: flex;
  justify-content: space-between;
  height: 42px;
  line-height: 42px;
  padding-right: 10px;
  border-bottom: 1px solid #e4e4e4;
}

.category_right_li span {
  color: #666;
}

.category_active {
  background-color: #fff;
}

.back_cover {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
}

.shoplist_container {
  background-color: #fff;
  margin-bottom: 20px;
  padding-top: 83px;
}

.sort_detail_type ul {
  width: 100%;
}
.sort_list_li {
  height: 58px;
  display: flex;
  align-items: center;
}
.sort_list_li div {
  line-height: 57px;
  flex: auto;
  text-align: left;
  text-indent: 0.5em;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 12px;
}

svg {
  width: 16px;
  height: 16px;
  margin: 0 7px 0 18px;
}

.filter_container {
  flex-direction: column;
  background-color: #f1f1f1;
}

.filter_header_style {
  font-size: 12px;
  color: #333;
  line-height: 35px;
  height: 35px;
  text-align: left;
  padding-left: 15px;
  background-color: #fff;
}
.filter_ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
  background-color: #fff;
}

.filter_li {
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  width: 109px;
  height: 32px;
  margin-right: 6px;
  border-radius: 5px;
  padding: 0 6px;
  margin-bottom: 6px;
  font-size: 12px;
  color: #333;
}
.confirm_filter {
  display: flex;
  background-color: #f1f1f1;
  width: 100%;
  padding: 10px 6px;
}
.filter_button_style {
  width: 50%;
  height: 42px;
  font-size: 24px;
  line-height: 42px;
  border-radius: 10px;
}

.confirm_select {
  background-color: #56d176;
  color: #fff;
  border: 1px solid #56d176;
}

.clear_all {
  background-color: #fff;
  margin-right: 10px;
  border: 1px solid #fff;
}

.filter_icon {
  width: 20px;
  height: 20px;
  font-size: 14px;
  transform: scale(0.8);
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  margin-right: 2px;
  line-height: 18px;
  text-align: center;
}

.filter_li svg {
  margin: 0 2px 0 1px;
}

.sort_txt,
.selected_txt {
  color: #57a9ff;
}
</style>
