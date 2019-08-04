<!-- 组件说明 -->
<template>
  <!-- 安全管理 -->
  <div class="anquan">
    <Soso :pagetitle="pagetitle"></Soso>
    <el-row class="select-box m20">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="150px">
        <el-form-item label="学期：">
          <el-select v-model="formInline.a" placeholder="不限">
            <el-option label="盈" value="shanghai"></el-option>
            <el-option label="亏" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="安全编辑状态">
          <el-select v-model="formInline.a" placeholder="不限">
            <el-option label="盈" value="shanghai"></el-option>
            <el-option label="亏" value="beijing"></el-option>
          </el-select>
        </el-form-item><el-form-item label="考核设定状态：">
          <el-select v-model="formInline.a" placeholder="不限">
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
      <el-table-column prop="yuanxi" label="实验室名称" width="180" align="left"></el-table-column>
      <el-table-column prop="banji" label="所属院系" align="center"></el-table-column>
      <el-table-column prop="xueqi" label="安全细则设定" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="考核设定" align="center"></el-table-column>

      <el-table-column prop label="操作" align="center">
        <a class="a-active" href="javascript:;">
          <i class="i-1"></i> 门禁
        </a>
        <a class="a-active" href="javascript:;">
          <i class="i-2"></i> 监控
        </a>
        <a class="a-active" href="javascript:;">
          <i class="i-3"></i> 安全细节
        </a>
        <a class="a-active" href="javascript:;">
          <i class="i-3"></i> 考核设定
        </a><a class="a-active" href="javascript:;">
          <i class="i-3"></i> 考核结果查看
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
      pagetitle: "安全管理",
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
          yuanxi: "物理实验室1",
          zhuanye: "物理科学学院",
          nianji: "未设定",
          banji: "未编辑",
          xueqi: "杨洋",
          zhuangtai: "张东",
          jieshou: "2018-08-24"
        },
        {
          yuanxi: "物理实验室1",
          zhuanye: "物理科学学院",
          nianji: "未设定",
          banji: "未编辑",
          xueqi: "杨洋",
          zhuangtai: "张东",
          jieshou: "2018-08-24"
        },
        {
         yuanxi: "物理实验室1",
          zhuanye: "物理科学学院",
          nianji: "未设定",
          banji: "未编辑",
          xueqi: "杨洋",
          zhuangtai: "张东",
          jieshou: "2018-08-24"
        },
        {
          yuanxi: "物理实验室1",
          zhuanye: "物理科学学院",
          nianji: "未设定",
          banji: "未编辑",
          xueqi: "杨洋",
          zhuangtai: "张东",
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