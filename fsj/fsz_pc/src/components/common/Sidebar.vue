<style>
.el-col {
  height: 100vh;
  background: rgb(84, 92, 100);
}
.el-menu {
  border: 0px;
}
h5 {
  width: 100%;
  height: 56px;
  background: rgb(84, 92, 100);
  color: #ffffff;
  text-align: center;
  line-height: 56px;
  font-size: 20px;
  margin: 0;
}
</style>
<template>
  <div class="sidebar" id="sidebar">
    <el-col :span="4">
      <h5>分时住</h5>
      <el-menu @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff">
        <el-submenu v-for="(item,index) of title" :index="index" :key="index">
          <template slot="title">
              <router-link :to='item.resourceUrl' tag='p'>
              <i :class="item.icon"></i>
              <span>{{item.onename}}</span>
              </router-link>
          </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: [
        {
          onename: "后台首页",
          icon: "el-icon-location",
          resourceUrl: "/404", //页面路由
          twoname: ["子页1", "子页面2", "子页面3"]
        },
        {
          onename: "门店管理",
          icon: "el-icon-location",
          resourceUrl: "/404", //页面路由
          twoname: ["子页1", "子页面2", "子页面3"]
        },
        {
          onename: "财务统计",
          icon: "el-icon-location",
          resourceUrl: "/404", //页面路由
          twoname: ["子页1", "子页面2", "子页面3"]
        },
        {
          onename: "员工管理",
          icon: "el-icon-location",
          resourceUrl: "/404", //页面路由
          twoname: ["子页1", "子页面2", "子页面3"]
        },
        {
          onename: "数据分析",
          icon: "el-icon-location",
          resourceUrl: "/404", //页面路由
          twoname: ["子页1", "子页面2", "子页面3"]
        },
        {
          onename: "客户分析",
          icon: "el-icon-location",
          resourceUrl: "/404", //页面路由
          twoname: ["子页1", "子页面2", "子页面3"]
        },
        {
          onename: "客服服务",
          icon: "el-icon-location",
          resourceUrl: "/404", //页面路由
          twoname: ["子页1", "子页面2", "子页面3"]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  activated() {}
};
</script>
