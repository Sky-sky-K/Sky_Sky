<template>
  <div>
    <myheader>
      <p slot="myheader">密码登录</p>
    </myheader>
    <div class="login">
      <div class="loginipt login-user">
        <input type="text" placeholder="账号" :value="user.username" @input="iptuser">
      </div>
      <div class="loginipt login-pwd">
        <input type="password" placeholder="密码" :value="user.password" @input="iptpwd">
      </div>
      <div class="loginipt login-code">
        <input type="text" placeholder="验证码" :value="user.captcha_code" @input="iptcode">
        <div class="code">
          <div class="code-img">
            <img :src="code.url" alt>
          </div>
          <p @click="changecode">
            <span>看不清</span>
            <span>换一张</span>
          </p>
        </div>
      </div>
      <div class="prompt">
        <p>温馨提示:未注册过的账号，登录时将自动注册</p>
        <p>注册过的用户可凭账号密码登录</p>
      </div>
      <div class="btn">
        <el-button type="success" @click="loginto">登录</el-button>
      </div>
      <div class="resetpwd">
        <router-link to="/resetpwd">重置密码?</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import myheader from "../components/my/myheader";
export default {
  data() {
    return {
      
    };
  },
  computed:{
    user(){
      return this.$store.state.login.user;
    },
    code(){
      return this.$store.state.login.code;
    }
  },
  created(){
    this.changecode();
  },
  methods:{
    iptuser(val){
      const v=val.target.value;
      this.$store.commit("login/iptchange",{username:v})
    },
    iptpwd(val){
      const v=val.target.value;
      this.$store.commit("login/iptchange",{password:v})
    },
    iptcode(val){
      const v=val.target.value;
      this.$store.commit("login/iptchange",{captcha_code:v})
    },
    changecode(){
      this.$store.dispatch("login/getcode")
    },
    loginto(){
      this.$store.dispatch("login/loginto").then((res)=>{
        if(res.data.status==0){
          this.$createDialog({
            type:"alert",
            icon:"cubeic-alert",
            showClose:true,
            title:res.data.message
          }).show()
        }else{
          this.$router.replace('/my');
        }
      })
    }
  },
  components: {
    myheader
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.login {
  padding-top: 60px;
  width: 100vw;
  height: 100vh;
  background: #f5f5f5;
}
.login > .loginipt {
  background: #fff;
  width: 100%;
  padding: 0 15px;
  height: 50px;
  border-bottom: 1px solid #e5e5e5;
}
.login > .loginipt input {
  width: 100%;
  outline: none;
  border: none;
  font-size: 16px;
  color: #666;
  line-height: 50px;
  background: transparent;
}
.login .login-code input {
  width: 60%;
}
.login .login-code {
  position: relative;
}
.login .login-code .code {
  display: flex;
  align-items: center;
}
.login .login-code .code .code-img {
  width: 82px;
  height: 35px;
  margin-right:5px;
}
.login .login-code .code .code-img img {
  width: 100%;
}
.login .login-code .code {
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 50px;
}
.login .login-code .code p span {
  font-size: 14px;
  display: block;
  line-height: 20px;
  color: #666;
}
.login .login-code .code p span:nth-child(2) {
  color: #3b95e9;
}
.prompt{
  padding:10px;
}
.prompt p{
  font-size:13px;
  color: red;
  line-height:25px;
}
.el-button{
  display: block;
  margin: 0 auto;
  width: 95%;
  height: 45px;
}
.resetpwd{
  margin-top:20px;
  width: 95%;
  text-align: right;
  font-size:13px;
}
.resetpwd a{
  color: #3b95e9;
}
</style>
