<template>
  <div class="profile_page">
    <header class="header">
      <h1>编辑地址</h1>
      <i class="cubeic-back" @click="prev"></i>
      <span class="edit" @click="edit">
        <span v-if="!close">编辑</span>
        <span v-else>完成</span>
      </span>
    </header>
    <div class="address">
      <ul class="addresslist">
        <li v-for="(addr,index) in addrs" :key="index" :class="{'active-li' : index==0}">
          <div>
            <p>{{addr.address}}</p>
            <p>{{addr.phone}}</p>
          </div>
          <span v-show="close">
            <i class="cubeic-close" @click="removeLi(index,addr.id)"></i>
          </span>
        </li>
      </ul>
      <router-link to="/profile/info/address/add">
        <div class="addsite">
          <span>新增地址</span>
          <span>
            <i class="cubeic-arrow"></i>
          </span>
        </div>
      </router-link>
    </div>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    close: state => state.shops_list.close,
    addrs: state => state.shops_list.addrs
  }),
  methods: {
    edit() {
      this.$store.commit("shops_list/changeClose");
    },
    removeLi(index, id) {
      this.$store.dispatch("shops_list/removeAddr", { id, index });
    },
    prev() {
      this.$router.push("/profile/info");
    }
  },
  created() {
    this.$store.dispatch("shops_list/getAddr");
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
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(357px);
  opacity: 0;
}

.profile_page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f2f2f2;
  z-index: 202;
}
.profile_page .header {
  width: 100%;
  height: 44px;
  background-color: #3190e8;
  text-align: center;
  line-height: 44px;
  color: #ffffff;
  position: fixed;
  z-index: 100;
}

.profile_page .header h1 {
  font-size: 18px;
  font-weight: 700;
}

.profile_page .header .cubeic-back {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 15px;
  color: #ffffff;
}

.edit {
  position: absolute;
  right: 15px;
  line-height: 44px;
  top: 0;
}

.address {
  width: 100%;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  position: absolute;
  top: 54px;
  height: 100vh;
}

.addresslist {
  background-color: #fff;
}
.addresslist li {
  border-bottom: 1px solid #d9d9d9;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.active-li {
  background: #fff8c3;
}

.addresslist li p {
  font-size: 14px;
  line-height: 21px;
  color: #333;
}

.addresslist li span {
  display: flex;
  align-items: center;
}

.addsite {
  margin-top: 10px;
  background: #fff;
  padding: 5px 10px;
  border-top: 1px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d9d9d9;
}

.addsite span {
  display: block;
  font-size: 16px;
  color: #333;
  line-height: 32px;
}

.cubeic-arrow {
  color: rgb(216, 216, 216);
}
</style>
