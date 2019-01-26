<template>
  <div class="rating_page">
    <header class="header">
      <h1>搜索地址</h1>
      <i class="cubeic-back" @click="next"></i>
    </header>
    <div class="profile-info">
      <div class="headportrait headportrait_top">
        <input type="file" class="profileinfopanel-upload" @change="changeimg" ref="file">
        <span>头像</span>
        <div class="headportrait-div">
          <img :src="'http://elm.cangdu.org/img/'+account.avatar" class="headportrait-div-top">
          <i class="cubeic-arrow"></i>
        </div>
      </div>
      <router-link class="info-router" to="/profile/info/setusername">
        <div class="headportrait">
          <span>用户名</span>
          <div class="headportrait-div">
            <span>{{account.username}}</span>
            <i class="cubeic-arrow"></i>
          </div>
        </div>
      </router-link>
      <router-link class="info-router" to="/profile/info/address">
        <div class="headportrait headportrait_bot">
          <span>收货地址</span>
          <div class="headportrait-div">
            <i class="cubeic-arrow"></i>
          </div>
        </div>
      </router-link>
      <div class="bind-phone">账户绑定</div>
      <router-link class="info-router" to>
        <div class="headportrait headportrait_bot" @click="phone">
          <span>手机</span>
          <div class="headportrait-div">
            <i class="cubeic-arrow"></i>
          </div>
        </div>
      </router-link>
      <div class="bind-phone">安全设置</div>
      <router-link class="info-router" to="/forget">
        <div class="headportrait headportrait_bot">
          <span>登陆密码</span>
          <div class="headportrait-div">
            <span>修改</span>
            <i class="cubeic-arrow"></i>
          </div>
        </div>
      </router-link>
      <div class="exitlogin" @click="exitlogin">退出登录</div>
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
    return {};
  },
  methods: {
    next() {
      this.$router.push("/profile");
    },
    phone() {
      this.$createDialog({
        type: 'alert',
        icon: 'cubeic-alert',
        showClose: true,
        title: '请下载手机APP进行绑定',
      }).show()
    },
    exitlogin() {
      this.$createDialog({
        type: 'confirm',
        icon: 'cubeic-warn',
        content: '是否退出登录',
        confirmBtn: {
          text: '确定',
          active: true,
          disabled: false,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: '取消',
          active: false,
          disabled: false,
          href: 'javascript:;'
        },
        onConfirm: () => {
          this.$store.dispatch("shops_list/exitlogin").then(() => {
            localStorage.removeItem("user_id")
            this.$router.push("/profile")
          })
        }
      }).show()
    },
    changeimg(val) {
      const img = this.$refs.file.files[0].name
      this.$store.dispatch("shops_list/getimg",img);
    }
  },
  computed: mapState({
    account: state => state.shops_list.account
  }),
  created() {
    this.$store.dispatch("shops_list/getaccount");
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



.rating_page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f2f2f2;
  z-index: 99;
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

.profile-info {
  padding-top: 44px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f2f2f2;
  z-index: 99;
}

.headportrait {
  padding: 7px 9px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ddd;
  background: #fff;
  position: relative;
}

.headportrait_top {
  margin-top: 10px;
}

.headportrait_bot {
  border-bottom: 1px solid #ddd;
}

.headportrait span {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

.profileinfopanel-upload {
  display: block;
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
}

.headportrait-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 32px;
}

.headportrait-div span {
  text-align: left;
  line-height: 32px;
  font-size: 16px;
  color: #999;
  margin-right: 10px;
  font-weight: 100;
  font-family: Arial;
}

.headportrait-div-top {
  width: 47px;
  height: 47px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.cubeic-arrow {
  color: rgb(216, 216, 216);
}

.info-router {
  display: block;
}

.bind-phone {
  padding: 9px;
  font-size: 12px;
  color: #666;
}

.exitlogin {
  width: 96%;
  margin: 30px auto 0;
  line-height: 35px;
  border-radius: 5px;
  text-align: center;
  background: #d8584a;
  font-size: 14px;
  color: #fff;
}
</style>
