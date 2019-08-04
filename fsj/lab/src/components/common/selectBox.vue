<!-- 组件说明 -->
<!--    -->
<template>
  <div class="select-box mb20">
    <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
      <div class="grid-content bg-purple">
        <span class="demonstration">实验室所属院系：</span>
        <el-select v-model="school" placeholder="请选择院系"></el-select>
      </div>
    </el-col>
  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
/* 选择框容器 */
.select-box {
  width: 95%;
  min-height: 30px;
  color: #666;
  text-align: left;
  overflow: hidden;
  padding: 15px;
  box-sizing: border-box;
  background: rgb(242, 242, 242);
}
</style>