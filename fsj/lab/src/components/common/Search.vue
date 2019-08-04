<!-- 组件说明 -->
<template>
  <div class="Search ml20">
    <el-form  class="demo-form-inline">
      <slot></slot>
    </el-form>
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
.Search {
  width: 95%;
  padding: 15px 20px;
  min-height: 40px;
  box-sizing: border-box;
  overflow: hidden;
  background: rgb(242, 242, 242);
}
</style>