<template>
  <div id="app">
    <sidebar></sidebar>
    <router-view></router-view>
  </div>
</template>
<script>
import sidebar from '@/components/common/Sidebar' //左侧菜单栏
export default {
  name: 'App',
  components: {
       sidebar
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
}
</style>
