<!-- 组件说明 -->
<template>
  <!-- 仪器设备 -->
  <div class="lose">
    <Soso :pagetitle="pagetitle"></Soso>
    <el-row class="select-box m20">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="150px">
        <el-form-item label="仪器归属院系：">
          <el-select v-model="formInline.region" placeholder="请选择院系">
            <el-option label="A院系" value="shanghai"></el-option>
            <el-option label="B院系" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="仪器归属实验室：">
          <el-select v-model="formInline.a" placeholder="请选择实验室">
            <el-option label="101室" value="shanghai"></el-option>
            <el-option label="102室" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="申请日期：">
          <div class="block">
            <el-date-picker
              v-model="formInline.date"
              type="date"
              placeholder="请选择日期"
              class="el-date-picker"
            ></el-date-picker>
          </div>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row class="m20">
      <el-button type="success" plain @click="to_newServe()">新增报修</el-button>
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
      <el-table-column prop="yuanxi" label="仪器名称及编号" width="180" align="left"></el-table-column>
      <el-table-column prop="zhuanye" label="归属院系" width="180" align="left"></el-table-column>
      <el-table-column prop="banji" label="破坏原因" align="center"></el-table-column>
      <el-table-column prop="xueqi" label="报修日期" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="报修人" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="登记人" align="center"></el-table-column>


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
      pagetitle: "报修记录",
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
          yuanxi: "显微镜001",
          zhuanye: "化学学院",
          nianji: "1",
          banji: "显示屏损坏",
          xueqi: "2019-01-03",
          zhuangtai: "李晨"
        },
        {
          yuanxi: "显微镜002",
          zhuanye: "化学学院",
          nianji: "1",
          banji: "显示屏损坏",
          xueqi: "2019-01-03",
          zhuangtai: "李晨"
        },
        {
          yuanxi: "显微镜003",
          zhuanye: "化学学院",
          nianji: "1",
          banji: "显示屏损坏",
          xueqi: "2019-01-03",
          zhuangtai: "李晨"
        },
        {
          yuanxi: "显微镜004",
          zhuanye: "化学学院",
          nianji: "1",
          banji: "显示屏损坏",
          xueqi: "2019-01-03",
          zhuangtai: "李晨"
        },
        {
          yuanxi: "显微镜005",
          zhuanye: "化学学院",
          nianji: "1",
          banji: "显示屏损坏",
          xueqi: "2019-01-03",
          zhuangtai: "李晨"
        },
      ]
    };
  },
  computed: {},
  methods: {
    to_newServe(){
      this.$router.push("/NewServe")
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
</style>