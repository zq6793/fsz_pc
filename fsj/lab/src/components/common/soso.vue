<!-- 组件说明 -->
<!-- 公共搜索框 -->
<template>
  <div class="soso-box mb20">
    <div class="title-box">
      <p>{{pagetitle}}</p>
      <div class="input-box">
        <el-input placeholder="搜索" v-model="input"></el-input>
      </div>
    </div>
  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  props: ["pagetitle"],
  data() {
    return {
      input: ""
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
/* soso盒子 */
.soso-box {
  width: 95%;
  height: 50px;
  cursor: pointer;
  background: #fff;
  border-bottom: 1px solid #e6e6e6;
}
/* 页面标题 */
.title-box p {
  width: 96px;
  text-align: center;
  float: left;
  color: #666;
  margin-left: 20px;
  line-height: 49px;
  border-bottom: 1px solid #53cac3;
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