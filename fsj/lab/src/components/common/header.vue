<!-- 组件说明 -->
<template>
  <header>
    <div class="logo-box"></div>
    <div class="my-state">
      <!-- <a href="javascript:;" v-text="state"></a> -->
      <el-dropdown  size="medium" :split-button=true type="primary" trigger="click" >
        账号管理
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="quit()">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { post } from "../../request";
export default {
  components: {},
  data() {
    return {
      // state:"退出"
    };
  },
  computed: {},
  methods: {
    quit() {
      //注销
      post({
        url: "cms/login/logout",
        data: {}
      }).then(res => {
        this.$router.push({ path: "/" });
        localStorage.removeItem("token");
      });
    }
  }
};
</script>

<style scoped>
/* header style */
header {
  width: 100%;
  height: 60px;
  background: #26353d;
  font-size: 15px;
}
/* logo-box */
.logo-box {
  width: 300px;
  height: 60px;
  float: left;
  margin-left: 20px;
  background: url("../../assets/img/shiyanshi.1.png") no-repeat;
  background-size: 100%;
  background-position: center;
}
.my-state {
  width: 200px;
  height: 60px;
  float: right;
  box-sizing: border-box;
  text-align: center;
  padding-top: 12px;
  background: #393d49;
}
.my-state a {
  line-height: 60px;
  color: rgba(255, 255, 255, 0.7);
  display: block;
}
header {
  position: fixed;
  z-index: 9;
}
</style>