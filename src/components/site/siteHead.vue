<template>
    <div class="container">
        <div class="header">
            <i class="el-icon-arrow-left"></i>
            <span>城市选择</span>
        </div>
        <div class="header-serach">
            <!-- <el-input v-model="input" placeholder="请输入内容" class="ipt"></el-input> -->
            <input type="text" class="ipt" v-model="input" placeholder="请输入城市名">
            <i class="el-icon-search"></i>
        </div>
        <div class="site-city">当前定位城市：<span>郑州</span></div>
    </div>
</template>

<script>
    import axios from "../../axios"
export default {
    data(){
        return {
            input:""
        }
    },
    created(){
        axios.get("/v1/cities?type=guess").then(res=>{
            console.log(res)
        })
    }
}
</script>

<style scoped>
    .container{
        width: 100%;
        background: #e5e5e5;
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
        /* margin: 0 auto; */
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
    }
    .site-city span{
        color:#0085ff;
    }
</style>
