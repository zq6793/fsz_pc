<!-- 组件说明 -->
<template>
  <!-- 成绩管理 -->
  <div class="chengji">
    <Soso :pagetitle="pagetitle"></Soso>
    <el-row class="select-box m20">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="150px">
        <el-form-item label="学期：">
          <el-select v-model="formInline.a" placeholder="请选择">
            <el-option label="盈" value="shanghai"></el-option>
            <el-option label="亏" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="课程：">
          <el-select v-model="formInline.a" placeholder="请选择">
            <el-option label="盈" value="shanghai"></el-option>
            <el-option label="亏" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态：">
          <el-select v-model="formInline.a" placeholder="请选择">
            <el-option label="盈" value="shanghai"></el-option>
            <el-option label="亏" value="beijing"></el-option>
          </el-select>
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
      <el-table-column prop="yuanxi" label="课程名称" width="180" align="left"></el-table-column>
      <el-table-column prop="banji" label="实验项目" align="center"></el-table-column>
      <el-table-column prop="xueqi" label="平均分数" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="评分状态" align="center"></el-table-column>

      <el-table-column prop label="操作" align="center">
        <a class="a-active" href="javascript:;">
          <i class="i-2"></i> 录成绩
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
      pagetitle: "成绩管理",
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
          yuanxi: "大学物理（上）",
          zhuanye: "串并联电路1",
          nianji: "98",
          banji: "暂无",
          xueqi: "杨洋",
          zhuangtai: "未评分",
          jieshou: "2018-08-24"
        },
        {
          yuanxi: "大学物理（上）",
          zhuanye: "串并联电路1",
          nianji: "98",
          banji: "暂无",
          xueqi: "杨洋",
          zhuangtai: "未评分",
          jieshou: "2018-08-24"
        },
        {
          yuanxi: "大学物理（上）",
          zhuanye: "串并联电路1",
          nianji: "98",
          banji: "暂无",
          xueqi: "杨洋",
          zhuangtai: "未评分",
          jieshou: "2018-08-24"
        },
        {
          yuanxi: "大学物理（上）",
          zhuanye: "串并联电路1",
          nianji: "98",
          banji: "暂无",
          xueqi: "杨洋",
          zhuangtai: "未评分",
          jieshou: "2018-08-24"
        }
      ]
    };
  },
  computed: {},
  methods: {}
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
  width: 260px !important;
}
/* 操作按钮样式 */
.a-active {
  margin-right: 10px;
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