<template>
  <div>
    <mheader>
      <p slot="myheader">{{listinfo[1]}}</p>
    </mheader>
    <div class="myservicelist">
      <p v-html="listinfo[0]"></p>
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
    listinfo() {
      return this.$store.state.myservice.listinfo;
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
.myservicelist {
  padding-top: 44px;
  width: 100vw;
  height: 100vh;
  background: #fff;
}
</style>
