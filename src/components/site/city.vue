<template>
    <div class="box" v-loading="loading">
        <div class="header">
            <i class="el-icon-arrow-left" @click="gosetcity"></i>
            {{cityname}}
        </div>
        <input type="text" class="ipt" placeholder="请输入学校、商务楼、地址" v-model="city.keyword">
        <p class="btn" @click="btn">搜索</p>
        <div class="list" v-for="item in serachcity" :key="item.id">
            <span class="list-name">{{item.name}}</span>
            <span class="list-addr">{{item.address}}</span>
        </div>
    </div>
</template>

<script>
import bus from "../../bus"
export default {
    data(){
        return {
            city:{
                city_id:"",
                keyword:""
            },
            loading:false,
        }
    },
    computed:{
        cityname(){
            return this.$store.state.city.cityname;
        },
        serachcity(){
            return this.$store.state.city.serachcity
        }
    },
    methods:{
        btn(){
            if(this.city.keyword!=""){
            //    console.log(this.city);
               this.$store.dispatch("city/getgeohash",this.city);
            }
        },
        gosetcity(){
            this.$router.push("/")
        }
    },
    created(){
        // bus.$on("select",(i)=>{
        //     console.log(i)
        //     // console.log(this.city)
        //     // this.city.city_id=i;
        //     // console.log(this.city.city_id);
        //     //根据id获取经纬度
        //     // this.$store.dispatch("city/getgeohash",i);
        // })
        this.loading=true;
        // console.log(localStorage.getItem("Id"))
        this.city.city_id=localStorage.getItem("Id");
        console.log(this.city.city_id);
        this.$store.dispatch("city/getcityname",this.city.city_id).then(()=>{
            this.loading=false;
        })
    }
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: 45px;
        background: #0085ff;
        color:white;
        text-align: center;
        line-height: 45px;
        font-size: 18px;
    }
    .header i{
        font-size: 20px;
        color:white;
        line-height: 44px;
        position: absolute;
        left: 10px;
    }
    .ipt{
        border:1px solid #e5e5e5;
        padding:5px;
        width: 90%;
        margin-top: 10px;
        margin-left: 5%;    
        outline: none;
    }
    .btn{
        display: block;
        width: 90%;
        margin-left: 5%;
        text-align: center;
        height: 30px;
        font-size: 14px;
        line-height: 30px;
        margin-top: 10px;
        background: #3190e8;
        color: #fff;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    .list {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #eee;
        padding: 10px 20px;
        background: #fff;
    }

    .list-name {
        font-size: 14px;
        margin-bottom: 5px;
    }

    .list-addr {
        font-size: 12px;
        color: #999;
    }
</style>
