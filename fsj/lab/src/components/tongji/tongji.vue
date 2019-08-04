<!-- 组件说明 -->
<template>
  <!-- 统计管理 -->
  <div class="tongji">
    <Soso :pagetitle="pagetitle"></Soso>
    <el-row class="select-box m20">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="150px">
        <el-form-item label="年份：">
          <el-select v-model="formInline.a" placeholder="请选择">
            <el-option label="盈" value="shanghai"></el-option>
            <el-option label="亏" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="归属院系：">
          <el-select v-model="formInline.a" placeholder="请选择">
            <el-option label="盈" value="shanghai"></el-option>
            <el-option label="亏" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-row>

  </div>
</template>

<script>
import Soso from "../common/soso";

export default {
  components: {
    Soso,
  },
  data() {
    return {
      pagetitle: "统计管理",
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