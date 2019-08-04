<!-- 组件说明 -->
<template>
  <div class="lab-res">
    <Soso :pagetitle="pagetitle"></Soso>
    <el-row class="select-box m20">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="150px">
        <el-form-item label="预约时间：">
          <el-date-picker
            v-model="formInline.date"
            type="date"
            placeholder="选择日期"
            class="el-date-picker"
          ></el-date-picker>
          <el-select v-model="formInline.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="状态：">
          <el-select v-model="formInline.d" placeholder="请选择">
            <el-option label="已通过" value="shanghai"></el-option>
            <el-option label="申请中" value="beijing"></el-option>
            <el-option label="已驳回" value="beijing"></el-option>
            <el-option label="已撤销" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row class="m20">
      <el-button type="success" plain @click.native="LabAdd()">预约</el-button>
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
      <el-table-column prop="zhuanye" label="实验课程" width="180" align="left"></el-table-column>
      <el-table-column prop="nianji" label="实验班级" align="center"></el-table-column>
      <el-table-column prop="banji" label="上课老师" align="center"></el-table-column>
      <el-table-column prop="xueqi" label="预约时间" align="center"></el-table-column>
      <el-table-column prop="xueqi" label="审批人" align="center"></el-table-column>
      <el-table-column prop="xueqi" label="状态" align="center"></el-table-column>

      <el-table-column prop label="操作" align="center">
        <!-- <a class="a-active" href="javascript:;">
          <i class="i-1"></i> 预约
        </a>-->
        <a class="a-active" href="javascript:;">
          <i class="i-1"></i> 查看
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
      pagetitle: "实验室预约", //页标题
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
          yuanxi: "化学实验室001",
          zhuanye: "氧气的检查",
          nianji: "物理基础一班",
          banji: "李艳",
          xueqi: "2019",
          zhuangtai: "李红"
        },
        {
          yuanxi: "化学实验室001",
          zhuanye: "氧气的检查",
          nianji: "物理基础一班",
          banji: "李艳",
          xueqi: "2019",
          zhuangtai: "李红"
        },
        {
          yuanxi: "化学实验室001",
          zhuanye: "氧气的检查",
          nianji: "物理基础一班",
          banji: "李艳",
          xueqi: "2019",
          zhuangtai: "李红"
        },
        {
          yuanxi: "化学实验室001",
          zhuanye: "氧气的检查",
          nianji: "物理基础一班",
          banji: "李艳",
          xueqi: "2019",
          zhuangtai: "李红"
        },
        {
          yuanxi: "化学实验室001",
          zhuanye: "氧气的检查",
          nianji: "物理基础一班",
          banji: "李艳",
          xueqi: "2019",
          zhuangtai: "李红"
        },
        {
          yuanxi: "化学实验室001",
          zhuanye: "氧气的检查",
          nianji: "物理基础一班",
          banji: "李艳",
          xueqi: "2019",
          zhuangtai: "李红"
        },
        {
          yuanxi: "化学实验室001",
          zhuanye: "氧气的检查",
          nianji: "物理基础一班",
          banji: "李艳",
          xueqi: "2019",
          zhuangtai: "李红"
        },
        {
          yuanxi: "化学实验室001",
          zhuanye: "氧气的检查",
          nianji: "物理基础一班",
          banji: "李艳",
          xueqi: "2019",
          zhuangtai: "李红"
        },
      ]
    };
  },
  computed: {},
  methods: {
    LabAdd(){       //预约
      this.$router.push("/LabAdd")
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
    margin-right: 10px;
  width: 260px!important;
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