<template>
    <div class="container" v-loading="loading">
        <div class="header">
            <i class="el-icon-arrow-left" @click="prve"></i>
            <span>城市选择</span>
        </div>
        <div class="site-city">当前定位城市：<span>{{guesscity}}</span></div>
        <div class="hot-city">
            <p class="hot-head">热门城市</p>
            <ul class="hot-list">
                <li v-for="item in hotcity" :key="item.id" @click="gethotId(item.id)">{{item.name}}</li>
            </ul>
        </div>
        <div class="box">
            <cube-index-list :data="groupcity" @select="selectItem"></cube-index-list>
        </div>
    </div>
</template>

<script>
import bus from "../../bus"
export default {
    data(){
        return {
            input:"",
            loading:false
        }
    },
    computed:{
        // loading(){
        //     return this.$store.state.city.loading;
        // },
        guesscity(){
            return this.$store.state.city.guesscity;
        },
        hotcity(){
            return this.$store.state.city.hotcity;
        },
        groupcity(){
            // return this.$store.state.city.groupcity;
            return this.forgroupcity(this.$store.state.city.groupcity);      
        }
    },
    methods:{
        forgroupcity(groupcity){
            // 处理全部城市数据，是数据按字母顺序排列
            const arr=[]
            for(let key in groupcity){
                arr.push([key,groupcity[key]])
            }
            //将数组排序
            arr.sort((a,b)=>{
                if(a[0]>b[0]){
                return 1
                }
                if(a[0]<b[0]){
                return -1
                }
            })
            // console.log(arr)
            // 将排序过的数据，按照cube-ui组件要求的形式进行转化
            const arr2=[]
            for(let x in arr){
                // console.log(arr[x])
                arr2.push({name:arr[x][0],items:arr[x][1]})
            }
            // console.log(arr2)
            return arr2;
        },
        selectItem(item) {
            //点击获取id
            // console.log(item.id)
            // bus.$emit("select",item.id)
            localStorage.setItem("Id",item.id);
            this.$router.push("/city")
        },
        gethotId(id){
            // console.log(id)
            localStorage.setItem("Id",id);
            this.$router.push("/city");
        },
        getcity(type){
            this.loading=true;
            this.$store.dispatch("city/getcity",type).then(()=>{
                this.loading=false;
            })
        },
        prve () {
            this.$router.push("/")
        }
    },
    created(){
        this.getcity("guess");
        this.getcity("hot");
        this.getcity("group");
        // this.$store.dispatch("city/getguess"); 
        // this.$store.dispatch("city/gethot");
        // this.$store.dispatch("city/getgroup");
    },
    mounted(){
        
    }
}
</script>

<style scoped>
    .container{
        width: 100%;
    }
    .header{
        width: 100%;
        height: 44px;
        background: #0085ff;
        text-align: center;
    }
    .header i{
        font-size: 20px;
        color:white;
        line-height: 44px;
        position: absolute;
        left: 10px;
    }
    .header span{
        font-size: 20px;
        color:white;
        line-height:44px;
    }
    .header-serach{
        width: 100%;
        height: 44px;
        background: #0085ff;
        position: relative;
    }
    .header-serach .ipt{
        width:90%;
        height: 30px;
        margin-left: 5%;
        outline: none;
        border-top-left-radius:15px;
        border-top-right-radius:15px;
        border-bottom-right-radius: 15px;
        border-bottom-left-radius: 15px;
        font-size: 12px;
        text-indent: 10px;
    }
    .header-serach i{
        position: absolute;
        left: 87%;
        top:6px;
    }
    .site-city{
        width:100%;
        height: 36px;
        background: #fff;
        border-bottom: 1px solid #eee;
        line-height: 36px;
        text-indent: 10px;
    }
    .site-city span{
        color:#0085ff;
    }
    .hot-city{
        width: 100%;
    }
    .hot-head{
        width:100%;
        height: 36px;
        border-bottom:1px solid #eee;
        line-height: 36px;
        text-indent: 10px;
    }
    .hot-list{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .hot-list li{
        width: 25%;
        height: 42px;
        text-align: center;
        border:1px solid #eee;
        border-top: none;
        border-left: none;
        line-height: 42px;
    }
    .hot-list li:nth-child(4n){
        border-right: none;
    }
    .clearfix:after{
        content: ".";
        height: 0;
        display: block;
        visibility: hidden;
        clear: both;
    }
    .box{
        width:100%;
        height: 100vh;
    }
    .cube-index-list{
        width: 100%;
        /* height: 100vh; */
        /* height: 400px; */
        position: relative;
        /* position: absolute;
        top:200px;
        left: 0;
        right: 0;
        bottom:0;
        overflow: hidden; */
    }
    
</style>
