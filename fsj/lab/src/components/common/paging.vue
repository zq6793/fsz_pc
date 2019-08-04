<!-- 组件说明 -->
<template>
  <div class="m20 paging">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[8, 15, 20, 30]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="this.total"
    ></el-pagination>
  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  data() {
    return {
      currentPage:1         //当前显示第几页
    };
  },
  props:['total'],      //total总条数
  computed: {},
  methods: {
    handleCurrentChange(NowPage) {  //当前页数
    this.$emit('ChildNowPage',NowPage)
    },
     handleSizeChange(EachPage) {    //每页多少条
      this.$emit('ChildEachPage',EachPage)
    },
  }
};
</script>

<style>
/* 分页显示位置 */
.paging {
  width: 95%;
  text-align: center;
}
</style>