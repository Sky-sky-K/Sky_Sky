<template>
    <div class="rating_page">
        <header class="header">
        <h1>搜索地址</h1>
        <i class="cubeic-back" @click="next"></i>
        </header>
        <div class="ul-add">
            <div class="add-detail">
                <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="msg">
                <button @click="edit">确认</button>
            </div>
            <div class="warnpart">为了满足商家的送餐要求，建议您从列表中选择地址</div>
        </div>
        <div class="point" v-show="addrnone">
            <p>找不到地址？</p>
            <p>请尝试输入小区、写字楼或学校名</p>
            <p>详细地址（如门牌号）可稍后输入哦。</p>
        </div>
        <div class="poisearch-container">
            <ul>
                <li v-for="(item,index) in sites" :key="index" @click="getname(item)">
                    <p>{{item.name}}</p>
                    <p>{{item.address}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data () {
        return {
            msg:''
        }
    },
    methods:{
        edit () {
            this.$store.dispatch("shops_list/getaddr",this.msg)
        },
        getname (type) {
            this.$store.commit("shops_list/setname",type)
            this.$router.push("/my/info/address/add")
        },
        next () {
            this.$router.push("/my/info/address/add")
        }
    },
    computed:mapState({
        sites : state => state.shops_list.sites,
        addrnone : state => state.shops_list.addrnone,
    })
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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

.ul-add {
    padding-top: 44px;
}

.add-detail {
    display: flex;
    background-color: #fff;
    padding: 10px;
    justify-content: space-between;
}

.add-detail input {
    display: block;
    width: 276px;
    padding: 10px;
    background: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 14px;
    outline: none;
}

.add-detail button {
    width: 70px;
    background: #3199e8;
    font-size: 16px;
    color: #fff;
    border-radius: 5px;
    border: none;
    outline: none;
}

.warnpart {
    background: #fff6e4;
    font-size: 14px;
    color: #ff883f;
    text-align: center;
    padding: 4px 0;
}

.point {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
}

.point p {
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: #969696;
    margin-bottom: 8px;
}

.poisearch-container {
    background-color: #f2f2f2;
}

.poisearch-container li {
    border-bottom: 1px solid #ccc;
    padding: 10px;
}

.poisearch-container li p {
    font-size: 14px;
    color: #969696;
}

.poisearch-container li p:first-child {
    margin-bottom: 5px;
}
</style>
