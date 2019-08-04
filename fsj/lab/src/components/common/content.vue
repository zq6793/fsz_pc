<!-- 组件说明 -->
<template>
  <div class="content">
    <div class="cont-box">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Soso from "./soso";
export default {
  components: {
    Soso
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
/* 页面级容器 */
.content {
  width: calc(100% - 180px);
  height: calc(100% - 60px);
  background: #fff;
  position: fixed;
  right: 0;
  bottom: 0;
  overflow: auto;
  box-sizing: border-box;
}
/* 容器盒子 */
.cont-box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-left: 20px;
  padding-top: 5px;
}
/* 路由切换动画 */
.v-enter {
  opacity: 0;
  transform: translateX(100%);  
}
.v-leave-to {
  opacity: 0;
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>