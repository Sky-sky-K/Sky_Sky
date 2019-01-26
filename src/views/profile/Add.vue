<template>
  <div class="rating_page">
    <header class="header">
      <h1>新增地址</h1>
      <i class="cubeic-back" @click="next"></i>
    </header>
    <div class="adddetail">
      <div class="ui-padding-block">
        <div class="input-new">
          <input
            type="text"
            placeholder="请填写你的姓名"
            v-model="message.name1"
            @input="changename"
            @blur="changename1"
          >
          <p v-show="!message.name1" v-if="flag">请填写您的姓名</p>
        </div>
        <router-link to="/my/info/address/add/addDetail" class="add-detail">
          <div class="input-new">
            <input type="text" placeholder="小区/写字楼/学校等" :value="address_detail.name">
          </div>
        </router-link>
        <div class="input-new">
          <input
            type="text"
            placeholder="请填写详细送餐地址"
            v-model="message.detailedarrd"
            @focus="changeaddr1"
          >
          <template v-if="changeaddr">
            <p v-if="message.detailedarrd.length==0">请详细填写送餐地址</p>
            <p v-else-if="message.detailedarrd.length<3">送餐地址太短了，不能辨识</p>
          </template>
        </div>
        <div class="input-new">
          <input
            type="text"
            placeholder="请填写能够联系到您的手机号"
            v-model="message.phone"
            @focus="changephone"
          >
          <template v-if="changephone1">
            <p v-if="message.phone.length==0">手机号不能为空</p>
            <p v-else-if="!/^1[34578]\d{9}$/.test(message.phone)">请输入正确的手机号</p>
          </template>
        </div>
        <div class="input-new">
          <input type="text" placeholder="备用联系电话（选填）" v-model="message.phone_bk">
        </div>
      </div>
      <div class="addbutton">
        <button @click="submit">新增地址</button>
      </div>
    </div>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      message: {
        name1: "",
        phone: "",
        detailedarrd: "",
        phone_bk: ""
      },
      flag: false,
      changeaddr: false,
      changephone1: false,
      changephone2: false
    };
  },
  computed: mapState({
    address_detail: state => state.shops_list.Addrs
  }),
  methods: {
    submit() {
      this.$store
        .dispatch("shops_list/getADDR", {
          ...this.message,
          ...this.address_detail
        })
        .then(() => {
          this.$router.push("/my/info/address");
          this.address_detail.name = "";
        });
    },
    next() {
      this.$router.push("/my/info/address");
    },
    changename() {
      this.flag = true;
    },
    changename1() {
      this.flag = false;
    },
    changeaddr1() {
      this.changeaddr = true;
    },
    changephone() {
      this.changephone1 = !this.changephone1;
    }
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
  opacity: 1;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
  opacity: 0;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(375px);
  opacity: 0;
}

.rating_page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f2f2f2;
  z-index: 202;
}

.rating_page .header {
  width: 100%;
  height: 44px;
  background-color: #3190e8;
  text-align: center;
  line-height: 44px;
  color: #ffffff;
  position: fixed;
  z-index: 100;
}

.rating_page .header h1 {
  font-size: 18px;
  font-weight: 700;
}
.rating_page .header .cubeic-back {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 15px;
  color: #ffffff;
}

.adddetail {
  margin-top: 10px;
  padding-top: 44px;
}

.ui-padding-block {
  background-color: #fff;
  padding-top: 10px;
}

.input-new {
  padding-bottom: 10px;
}

.input-new input {
  width: 351px;
  display: block;
  height: 35px;
  font-size: 14px;
  margin: 0 auto;
  padding: 8px;
  background: #f2f2f2;
  border: 1px solid #ddd;
  border-radius: 3px;
  outline: none;
}

.input-new p {
  font-size: 12px;
  color: #ea3106;
  padding-left: 14px;
  margin-top: 6px;
}

.add-detail {
  display: block;
}

.addbutton {
  margin: 11px auto;
  width: 351px;
  background: #4cd964;
  border-radius: 3px;
}

.addbutton button {
  width: 100%;
  font-size: 14px;
  color: #fff;
  line-height: 37px;
  background: none;
  font-weight: 700;
  opacity: 0.6;
  outline: none;
  border: none;
}
</style>
