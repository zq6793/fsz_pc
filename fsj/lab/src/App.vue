<template>
  <div id="app">
    <div v-if="$route.meta.keepAlive">
      <Header></Header>
      <Sidebar></Sidebar>
      <Content></Content>
    </div>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import Header from "./components/common/header"; //公共头部
import Sidebar from "./components/common/sidebar"; //公共侧边栏
import Content from "./components/common/content"; //公共主体
import router from "./router";
export default {
  name: "app",
  components: {
    Header,
    Sidebar,
    Content
  }
};
</script>

<style>
#app {
  height: 100%;
}
</style>
