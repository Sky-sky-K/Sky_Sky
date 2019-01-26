<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Index from './views/Index'
export default {
  name: 'app',
  components: {
    Index
  }
}
</script>

<style>
*{box-sizing: border-box;}
</style>
