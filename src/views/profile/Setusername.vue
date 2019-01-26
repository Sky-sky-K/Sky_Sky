<template>
    <div class="rating_page">
        <header class="header">
        <h1>修改用户名</h1>
        <i class="cubeic-back" @click="next"></i>
        </header>
        <div class="setname">
            <div class="setname-top">
                <input type="text" placeholder="输入用户名" v-model="username" :disabled="pnone">
                <div>
                    <p v-if="!username.length || username.length>4">用户名只能修改一次（5-24字符之间）</p>
                    <p class="unlikep" v-else-if="username.length<5 ||username.length
                    >25">用户名长度在5到24位之间</p>
                    
                </div>
            </div>
            <div class="reset">
                <button @click="submit">确认修改</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
     data () {
        return {
           username:''
        }
    },
    methods:{
        submit () {
            this.$router.push("/profile/info")
            if(this.username) {
                this.$store.commit("shops_list/setusername",this.username)
            }
        },
        next () {
            this.$router.push("/profile/info")
        }
    },
    computed:mapState({
        sites : state => state.shops_list.sites,
        addrnone : state => state.shops_list.addrnone,
        pnone : state => state.shops_list.pnone,
    })
}
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

.rating_page .header {
  width: 100%;
  height: 44px;
  background-color: #3190e8;
  text-align: center;
  line-height: 44px;
  color: #ffffff;
  position: fixed;
  z-index: 202;
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

.setname {
    padding-top: 44px;
    width: 356px;
    margin: 0 auto;
}

.setname-top {
    padding-top: 10px;
}

.setname-top input {
    background: none;
    width: 356px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 5px 3px;
    line-height: 28px;
    font-size: 16px;
    display: block;
    outline: none;
}

.setname-top p {
    width: 100%;
    font-size: 12px;
    color: #666;
    padding: 10px 0 24px;
}

.reset {
    width: 100%;
    background: #3199e8;
}

.reset button {
    display: block;
    width: 100%;
    background: none;
    line-height: 46px;
    font-size: 16px;
    color: #fff;
    opacity: .6;
    transition: all 1s;
    outline: none;
    border:none;
}

.setname-top .unlikep {
    font-size: 14px;
    color: #ea3106;
}
</style>
