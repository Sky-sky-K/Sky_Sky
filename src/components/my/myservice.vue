<template>
  <div>
    <myheader><p slot="myheader">服务中心</p></myheader>
    <div class="myservice">
      
    </div>
  </div>
</template>

<script>
import myheader from './myheader'
export default {
  components:{
    myheader
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.myservice {
  padding-top: 44px;
  width: 100vw;
  height: 100vh;
  background: #f5f5f5;
}
</style>