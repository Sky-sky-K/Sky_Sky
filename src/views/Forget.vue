<template>
  <div class="restContainer">
    <header class="header">
      <h1>重置密码</h1>
      <i class="cubeic-back" @click="prev"></i>
    </header>
    <div class="restForm">
        <div class="input_container">
            <input type="text" placeholder="账号" v-model="user.username">
        </div>
        <div class="input_container">
            <input type="password" placeholder="旧密码" v-model="user.oldpassWord">
        </div>
        <div class="input_container">
            <input type="password" placeholder="请输入新密码" v-model="user.newpassword">
        </div>
        <div class="input_container">
            <input type="password" placeholder="请确认密码" v-model="user.confirmpassword">
        </div>
        <div class="input_container">
            <input type="text" placeholder="验证码" v-model="user.captcha_code">
            <div class="img_change_img">
                <img :src="code.code" alt="">
                <div class="change_img" @click="refresh">
                    <span>看不清</span>
                    <span>换一张</span>
                </div>
            </div>
        </div>
    </div>
    <div class="login_container" @click="login_container">
        确认修改
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data () {
        return {
            user:{
                "username":"",
                "oldpassWord":"",
                "newpassword":"",
                "confirmpassword":"",
                "captcha_code":"",
            }
        }
    },
    methods:{
        prev () {
            this.$router.push("/my/info")
        },
        getcode () {
             this.$store.dispatch("shops_list/getCode")
        },
        refresh () {
            this.user.captcha_code=""
            this.getcode()
        },
        login_container () {
            this.$store.dispatch("shops_list/amendLogin",this.user).then(res=>{
                if (res.status==0) {
                    alert(res.message)
                }else {
                    this.$router.push("/my/info")
                }
            })
        }
    },
    created () {
       this.getcode()
    },
    computed:mapState({
        code:state=>state.shops_list.code
    })
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.restContainer .header {
  width: 100%;
  height: 44px;
  background-color: #3190e8;
  text-align: center;
  line-height: 44px;
  color: #ffffff;
  position: fixed;
  z-index: 100;
}

.restContainer .header h1 {
  font-size: 18px;
  font-weight: 700;
}

.restContainer .header .cubeic-back {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 15px;
  color: #ffffff;
}

.restForm {
    background-color: #fff;
    padding-top: 54px;
}

.input_container {
    display: flex;
    justify-content: space-between;
    padding: 7px 18px;
    border-bottom: 1px solid #f1f1f1
}

.input_container input {
    color: #666;
    font-size: 14px;
    outline: none;
    border:none;
    line-height: 22px;
}

.img_change_img {
    display: flex;
    align-items: center;
}

.img_change_img img {
    width: 82px;
    height: 35px;
    margin-right: 5px;
}

.change_img {
    display: flex;
    flex-direction: "column";
    flex-wrap: wrap;
    width: 46px;
    justify-content: center;
}

.change_img span:first-child {
    font-size: 12px;
    color: #666;
}

.change_img span:last-child {
    color: #3b95e9;
   font-size: 12px;
   margin-top: 5px;
}

.login_container {
    margin: 24px 12px;
    font-size: 16px;
    color: #fff;
    background-color: #4cd964;
    padding: 10px 0;
    border: 1px;
    border-radius: 5px;
    text-align: center;
    line-height: 20px;
}
</style>
