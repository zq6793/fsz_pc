<!-- 组件说明 -->
<template>
  <!-- 学期耗材计划 -->
  <div class="lose">
    <Soso :pagetitle="pagetitle"></Soso>
    <el-row class="select-box m20">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="150px">
        <el-form-item label="学期：">
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="实验室所属院系：">
          <el-select v-model="formInline.a" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="预计花费：">
          <el-input class="start-num" v-model="money.start" placeholder="￥"></el-input>-
          <el-input class="end-num" v-model="money.end" placeholder="￥"></el-input>
        </el-form-item>
      </el-form>
    </el-row>

    <!-- 表格 -->
    <el-table
      class="m20"
      :data="tableData"
      style="width: 95%"
      :header-cell-style="{
    'background-color': 'rgb(242,242,242)',
    'color': '#555555',
    'border-bottom': '1px #e6e6e6 solid',
}"
    >
      <el-table-column prop="yuanxi" label="实验室名称及编号" width="180" align="left"></el-table-column>
      <el-table-column prop="zhuanye" label="所属学院" width="180" align="left"></el-table-column>
      <el-table-column prop="nianji" label="需新购品类数" align="center"></el-table-column>
      <el-table-column prop="banji" label="预计花费（元）" align="center"></el-table-column>
      <el-table-column prop="xueqi" label="学期" align="center"></el-table-column>
      <el-table-column prop label="操作" align="center">
        <a class="a-active" href="javascript:;" @click.prevent="to_NewHaocai()">
          <i class="i-2"></i> 申请购置
        </a>
        
      </el-table-column>
    </el-table>
    <Paging></Paging>
  </div>
</template>

<script>
import Soso from "../common/soso";
import Paging from "../common/paging";

export default {
  components: {
    Soso,
    Paging
  },
  data() {
    return {
      pagetitle: "学期耗材计划",
      money: {
        start: "",
        end: ""
      },
      formInline: {
        date: "",
        region: "",
        a: "",
        b: "",
        c: "",
        d: ""
      },
      tableData: [
        {
          yuanxi: "物理实验室2342",
          zhuanye: "物理科学学院",
          nianji: "8",
          banji: "450",
          xueqi: "2008-8-8",
          zhuangtai: "报废"
        },
        {
          yuanxi: "物理实验室2342",
          zhuanye: "物理科学学院",
          nianji: "8",
          banji: "450",
          xueqi: "2008-8-8",
          zhuangtai: "报废"
        },
      ]
    };
  },
  computed: {},
  methods: {
    to_NewHaocai(){
      this.$router.push("/NewHaocai")
    }
  }
};
</script>

<style scoped>
/* 选择框容器 */
.select-box {
  width: 95%;
  background: rgb(242, 242, 242);
}
/* 输入框宽度 */
.el-form-item {
  margin: 10px 15px 10px 0px;
}
.el-select {
  width: 260px;
  margin-right: 15px;
}
/* 日期选择框宽度 */
.el-date-picker {
  width: 260px !important;
}
/* 操作按钮样式 */
.a-active {
  margin-right: 15px;
  color: #555555;
  transition: all 0.3s;
}
i {
  width: 18px;
  height: 20px;
  position: relative;
  top: 2px;
  display: inline-block;
}
/* 加个区间样式 */
.start-num,
.end-num {
  width: 100px;
  margin: 0 8px;
}
</style>