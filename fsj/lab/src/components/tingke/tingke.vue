<!-- 组件说明 -->
<!-- 公共搜索框 -->
<template>
  <div class="soso-box">
    <div class="title-box">
      <router-link to="/HearClass">
        <p>听课管理</p>
      </router-link>
      <i></i>
      <router-link to="/CheckClass">
        <p>查课管理</p>
      </router-link>
      <div class="input-box">
        <el-input placeholder="搜索" v-model="input"></el-input>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
//import x from ''
import $ from "jquery";
export default {
  components: {},
  props: ["pagetitle"],
  data() {
    return {
      input: "",
      isactive: true
    };
  },
  computed: {},
  mounted() {
    
  },
  methods: {}
};
</script>

<style scoped>
/* 绑定样式 */
.active {
  border-bottom: 2px solid red;
}
/* soso盒子 */
.soso-box {
  width: 95%;
  height: 50px;
  margin-bottom: 20px;
  padding-right: 20px;
  cursor: pointer;
  background: #fff;
  border-bottom: 1px solid #e6e6e6;
}
/* 页面标题 */
.title-box p {
  width: 96px;
  text-align: center;
  display: inline-block;
  color: #666;
  line-height: 49px;
}
/* 分隔符 */
.title-box i {
  width: 2px;
  height: 15px;
  position: relative;
  top: 3px;
  left: 10px;
  margin-right: 20px;
  display: inline-block;
  background: rgb(153, 153, 153);
}
/* 搜索框样式 */
.input-box {
  width: 220px;
  height: 50px;
  float: right;
  margin-right: 100px;
}
.el-input :nth-child(1) {
  margin-top: 10px;
  height: 30px;
  border-radius: 50px;
}
</style>