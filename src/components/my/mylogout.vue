<template>
  <div>
    <div class="mylogout">
      <myheader>
        <p slot="myheader">账户信息</p>
      </myheader>
    </div>
  </div>
</template>

<script>
import myheader from "./myheader";
export default {
  components: {
    myheader
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.mydownload {
  padding-top: 44px;
  width: 100vw;
  height: 100vh;
  background: #f5f5f5;
  text-align: center;
}
</style>
