<template>
  <div class="my">
    <myheader>
      <p slot="myheader">我的</p>
    </myheader>
    <div class="login">
      <div class="loginto">
        <svg v-if="!userinfo.avatar" data-v-0fc4ab7a class="privateImage-svg">
          <use
            data-v-0fc4ab7a
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#avatar-default"
          >
            <svg viewBox="0 0 122 122" id="avatar-default" width="100%" height="100%">
              <path
                fill="#DCDCDC"
                fill-rule="evenodd"
                d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"
              ></path>
            </svg>
          </use>
        </svg>
        <img width="59" height="59" v-else :src="'http://elm.cangdu.org/img/'+userinfo.avatar" alt>
        <div class="login-info" @click="loginInfo">
          <p v-if="!userinfo.username">登录/注册</p>
          <p v-else>{{userinfo.username}}</p>
          <p>
            <span class="user-info">
              <svg data-v-0fc4ab7a fill="#fff" class="icon-mobile">
                <use
                  data-v-0fc4ab7a
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#mobile"
                >
                  <svg viewBox="0 0 655 1024" id="mobile" width="100%" height="100%">
                    <path
                      d="M0 122.501v778.998C0 968.946 55.189 1024 123.268 1024h408.824c68.52 0 123.268-54.846 123.268-122.501V122.501C655.36 55.054 600.171 0 532.092 0H123.268C54.748 0 0 54.846 0 122.501zM327.68 942.08c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96 40.96 18.338 40.96 40.96-18.338 40.96-40.96 40.96zM81.92 163.84h491.52V819.2H81.92V163.84z"
                    ></path>
                  </svg>
                </use>
              </svg>
            </span>
            <span>暂无绑定手机号</span>
          </p>
        </div>
        <span data-v-0fc4ab7a class="arrow">
          <svg data-v-0fc4ab7a fill="#fff" class="arrow-svg">
            <use
              data-v-0fc4ab7a
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="#arrow-right"
            >
              <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%">
                <path
                  d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"
                  class="selected"
                ></path>
              </svg>
            </use>
          </svg>
        </span>
      </div>
    </div>

    <div class="info-data">
      <ul>
        <li>
          <router-link to="/mybalance">
            <span>
              <b v-if="isLogin">{{usernum.balance%1==0?usernum.balance+".00":usernum.balance}}</b>
              <b v-else>0.00</b>
              元
            </span>
            <span>我的余额</span>
          </router-link>
        </li>
        <li>
          <span>
            <b v-if="isLogin">{{usernum.gift_amount}}</b>
            <b v-else>0</b>
            个
          </span>
          <span>我的优惠</span>
        </li>
        <li>
          <router-link to="/mypoint">
            <span>
              <b v-if="isLogin">{{usernum.point}}</b>
              <b v-else>0</b>
              分
            </span>
            <span>我的积分</span>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="profile-1reTe">
      <router-link to="/order" class="myorder">
        <aside data-v-0fc4ab7a>
          <svg data-v-0fc4ab7a fill="#4aa5f0">
            <use data-v-0fc4ab7a xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order"></use>
          </svg>
        </aside>
        <div data-v-0fc4ab7a class="myorder-div">
          <span data-v-0fc4ab7a>我的订单</span>
          <span data-v-0fc4ab7a class="myorder-divsvg">
            <svg data-v-0fc4ab7a fill="#bbb">
              <use
                data-v-0fc4ab7a
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#arrow-right"
              >
                <svg
                  data-v-617269a8
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 38 38"
                  id="order"
                  width="100%"
                  height="100%"
                >
                  <g data-v-617269a8 fill="none" fill-rule="evenodd">
                    <g
                      data-v-617269a8
                      stroke="#666"
                      stroke-width="4"
                      mask="url(#order-regular.41c17f8_b)"
                    >
                      <rect
                        data-v-617269a8
                        id="order-regular.41c17f8_a"
                        width="38"
                        height="38"
                        rx="2"
                      ></rect>
                    </g>
                    <rect data-v-617269a8 width="24" height="2" x="7" y="8" fill="#666" rx="1"></rect>
                    <rect data-v-617269a8 width="20" height="2" x="7" y="17" fill="#666" rx="1"></rect>
                    <rect data-v-617269a8 width="8" height="2" x="7" y="26" fill="#666" rx="1"></rect>
                  </g>
                </svg>
              </use>
            </svg>
          </span>
        </div>
      </router-link>

      <a href="https://home.m.duiba.com.cn/#/chome/index" class="myorder">
        <aside data-v-0fc4ab7a>
          <svg data-v-0fc4ab7a fill="#fc7b53">
            <use data-v-0fc4ab7a xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#point"></use>
          </svg>
        </aside>
        <div data-v-0fc4ab7a class="myorder-div">
          <span data-v-0fc4ab7a>积分商城</span>
          <span data-v-0fc4ab7a class="myorder-divsvg">
            <svg data-v-0fc4ab7a fill="#bbb">
              <use
                data-v-0fc4ab7a
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#arrow-right"
              >
                <svg viewBox="0 0 40 40" id="point" width="100%" height="100%">
                  <path
                    d="M34.6 7.1c0-1.1-1-2.1-2.1-2.1h-24c-1.1 0-2 1-2.1 2.1l-1.6 25C4.6 34.3 6.3 36 8.5 36h24c2.2 0 3.9-1.7 3.7-3.9l-1.6-25zm-5.9 6.1c-.2 4.6-3.7 8.2-8.3 8.2-4.6 0-8.2-3.7-8.4-8.3-.3-.2-.5-.6-.5-1 0-.7.6-1.2 1.3-1.2s1.3.6 1.3 1.2c0 .5-.3.9-.7 1.1.2 3.8 3.2 6.8 7.1 6.8 3.9 0 6.8-3.1 7-6.9-.4-.2-.6-.6-.6-1.1 0-.7.6-1.2 1.3-1.2s1.3.6 1.3 1.2c-.2.6-.4 1-.8 1.2z"
                  ></path>
                </svg>
              </use>
            </svg>
          </span>
        </div>
      </a>
      <router-link to="my/vipcard" class="myorder">
          <aside data-v-0fc4ab7a>
            <svg data-v-0fc4ab7a fill="#ffc636">
              <use data-v-0fc4ab7a xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vip"></use>
            </svg>
          </aside>
          <div data-v-0fc4ab7a class="myorder-div">
            <span data-v-0fc4ab7a>饿了么会员卡</span>
            <span data-v-0fc4ab7a class="myorder-divsvg">
              <svg data-v-0fc4ab7a fill="#bbb">
                <use
                  data-v-0fc4ab7a
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#arrow-right"
                >
                  <svg viewBox="0 0 40 40" id="vip" width="100%" height="100%">
                    <path d="M7 33.4c0 1.1.9 1.6 2 1.6h22c1.1 0 2-.5 2-1.6V31H7v2.4z"></path>
                    <path
                      d="M32.1 14.3c-.6 2.3-2.6 4-5.1 4-2.9 0-5.3-2.3-5.3-5.2v-.2c-.5.2-1 .3-1.6.3-.6 0-1.1-.1-1.7-.3v.2c0 2.9-2.4 5.2-5.3 5.2-2.5 0-4.6-1.7-5.1-4.1-.5.4-1.2.6-1.8.6-.3 0-.5.1-.8 0L7.2 29h26l1.7-14.2c-.3.1-.5.1-.8.1-.8 0-1.5-.2-2-.6z"
                      class="st0"
                    ></path>
                    <ellipse cx="20.1" cy="8.2" rx="3.2" ry="3.2"></ellipse>
                    <ellipse cx="6.4" cy="10.5" rx="2.4" ry="2.4"></ellipse>
                    <ellipse cx="33.8" cy="10.5" rx="2.4" ry="2.4"></ellipse>
                  </svg>
                </use>
              </svg>
            </span>
          </div>
      </router-link>
    </div>

    <div class="profile-1reTe">
      <router-link to="my/service" class="myorder">
        <aside data-v-0fc4ab7a>
          <svg data-v-0fc4ab7a fill="#4aa5f0">
            <use data-v-0fc4ab7a xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#service"></use>
          </svg>
        </aside>
        <div data-v-0fc4ab7a class="myorder-div">
          <span data-v-0fc4ab7a>服务中心</span>
          <span data-v-0fc4ab7a class="myorder-divsvg">
            <svg data-v-0fc4ab7a fill="#bbb">
              <use
                data-v-0fc4ab7a
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#arrow-right"
              >
                <svg viewBox="0 0 40 40" id="service" width="100%" height="100%">
                  <g id="service_XMLID_1_">
                    <path
                      id="service_XMLID_6_"
                      d="M32.2 9.5c-.2-.7-.1-.7-.4-.9-1.7-1.2-5.3.2-6.7 1.9-.8-3.8-3.8-6.1-4.7-5.9-.9-.2-4 2.1-4.8 5.9-1.3-1.7-5-3.1-6.7-1.9-.1.1-.5.6-.5.7C5.4 20.7 15 24.6 19 25.7v8.7c0 .7.3 1.2 1 1.2s1-.5 1-1.2v-8.6c4-1 14.2-4.8 11.2-16.3z"
                    ></path>
                    <path
                      id="service_XMLID_7_"
                      d="M6 25c-.9 0-1.6.7-1.6 1.5.1.8.7 1.5 1.6 1.5 3.1 0 6.5 1.5 8.5 3.7.3.3.7.6 1.1.6.4 0 .7-.1 1-.4.6-.6.6-1.6.1-2.3C14.1 26.8 10 25 6 25z"
                    ></path>
                    <path
                      id="service_XMLID_8_"
                      d="M34.6 25c-4 0-8.1 1.9-10.7 4.6-.6.6-.5 1.6.1 2.2.3.3.7.4 1 .4.4 0 .8-.3 1.1-.6 2-2.1 5.3-3.7 8.4-3.7h.1c.8 0 1.5-.7 1.5-1.5 0-.7-.7-1.4-1.5-1.4z"
                    ></path>
                  </g>
                  <path d="M0 0h40v40H0z" class="st1"></path>
                </svg>
              </use>
            </svg>
          </span>
        </div>
      </router-link>

      <router-link to="my/download" class="myorder">
        <aside data-v-0fc4ab7a>
          <svg data-v-0fc4ab7a fill="#3cabff">
            <use data-v-0fc4ab7a xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#download"></use>
          </svg>
        </aside>
        <div data-v-0fc4ab7a class="myorder-div" style="border-bottom: 0px;">
          <span data-v-0fc4ab7a>下载饿了么APP</span>
          <span data-v-0fc4ab7a class="myorder-divsvg">
            <svg data-v-0fc4ab7a fill="#bbb">
              <use
                data-v-0fc4ab7a
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#arrow-right"
              >
                <svg viewBox="0 0 40 40" id="download" width="100%" height="100%">
                  <path
                    d="M30 5H10c-2.8 0-5 2.2-5 5v20c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5V10c0-2.8-2.2-5-5-5zm-3.9 22.7c-.1.2-.3.4-.6.5-4.3 2.8-10.1 1.6-13-2.8-2.8-4.3-1.6-10.2 2.8-13 4.3-2.8 10.2-1.6 13 2.8.2.2.3.5.4.8.1.2 0 .5-.2.7l-8.8 5.7c-.2.2-.6.1-.7-.2l-.5-.7c-.4-.6-.2-1.5.4-1.9l5.6-3.6c.2-.2.3-.5.2-.7l-.1-.1c-2.2-1.8-5.4-2.1-7.9-.4-3.1 2-4 6.1-2 9.2 2 3.1 6.1 4 9.2 2 .6-.4 1.3-.2 1.7.4l.3.7c.1.2.4.5.2.6zm3.1-4.4l-.9.6c-.2.2-.6.1-.7-.2L26.5 22c-.2-.2-.1-.6.2-.7l1.8-1.1c.2-.2.6-.1.7.2l.6.9c.3.6.1 1.5-.6 2z"
                  ></path>
                </svg>
              </use>
            </svg>
          </span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import myheader from "./myheader";
export default {
  components: {
    myheader
  },
  computed: {
    userinfo() {
      return this.$store.state.login.userinfo;
    },
    usernum() {
      return this.$store.state.login.userinfo
        ? this.$store.state.login.userinfo
        : 0;
    },
    isLogin() {
      return localStorage.getItem("user_id");
    }
  },
  created() {
    this.$store.dispatch("login/loginuser");
  },
  methods:{
    loginInfo () {
      if (!localStorage.getItem("user_id")) {
        this.$router.push("/login")
      }else {
        this.$router.push("/my/info")
      }
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
.my {
  padding-top: 44px;
  width: 100vw;
  height: 100vh;
  background: #f5f5f5;
}
.login {
  padding: 10px;
  background: #3190e8;
}
.login .loginto {
  display: flex;
  align-items: center;
}
.privateImage-svg {
  background: #fff;
  border-radius: 50%;
  width: 58px;
  height: 58px;
  flex-shrink: 0;
}
.login-info {
  margin-left: 20px;
  color: #fff;
  width: 266px;
  height: 46px;
  line-height: 23px;
}
.login-info p:nth-child(1) {
  font-size: 18px;
  font-weight: bold;
  line-height: 30px;
}
.login-info p:nth-child(2) {
  font-size: 14px;
}
.user-info {
  vertical-align: middle;
}
.login-info p:nth-child(2) .icon-mobile {
  margin-right: 5px;
  width: 12px;
  height: 18px;
}
.arrow-svg {
  width: 11px;
  height: 22px;
}
.info-data {
  background: #fff;
}
.info-data ul {
  height: 84px;
}
.info-data ul li {
  border-right: 1px solid #f1f1f1;
  width: 33.333%;
  height: 84px;
  float: left;
}
.info-data ul li:last-child {
  border-right: none;
}
.info-data ul li span {
  display: block;
  text-align: center;
  margin-top: 10px;
}
.info-data ul li span:nth-child(2) {
  font-size: 15px;
  color: #333;
}
.info-data ul li:nth-child(1) span:nth-child(1) b {
  font-size: 30px;
  color: #f90;
  margin-right: 3px;
}
.info-data ul li:nth-child(2) span:nth-child(1) b {
  font-size: 30px;
  color: #ff5f3e;
  margin-right: 3px;
}
.info-data ul li:nth-child(3) span:nth-child(1) b {
  font-size: 30px;
  color: #6ac20b;
  margin-right: 3px;
}
.profile-1reTe {
  margin-top: 10px;
  background: #fff;
}
.profile-1reTe .myorder {
  padding-left: 10px;
  display: flex;
  align-items: center;
  height: 42px;
  width: 100%;
}
.profile-1reTe .myorder aside {
  width: 16px;
  height: 16px;
  margin-right: 5px;
  display: flex;
  align-items: center;
}
.profile-1reTe .myorder .myorder-div {
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
  padding: 13px;
  font-size: 15px;
  color: #333;
  display: flex;
  justify-content: space-between;
}
.profile-1reTe .myorder .myorder-div span:nth-child(1) {
  display: block;
}
.profile-1reTe .myorder .myorder-div .myorder-divsvg {
  width: 11px;
  height: 11px;
}
.profile-1reTe .myorder .myorder-div .myorder-divsvg svg {
  width: 100%;
  height: 100%;
}
</style>
