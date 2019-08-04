<!-- 组件说明 -->
<template>
  <!-- 耗材出库 -->
  <div class="chuku">
    <Soso :pagetitle="pagetitle"></Soso>
     <el-row class="select-box m20">
    <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="80px">
        <el-form-item label="出库时间">
         <el-date-picker v-model="value1" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
        </el-form-item>
      </el-form>
     </el-row>
    <el-row class="m20">
      <el-button type="success" plain @click="to_NewChuku()">耗材出库</el-button>
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
      <el-table-column prop="yuanxi" label="耗材类别编号" width="180" align="left"></el-table-column>
      <el-table-column prop="zhuanye" label="出库数量" width="180" align="left"></el-table-column>
      <el-table-column prop="nianji" label="规格" align="center"></el-table-column>
      <el-table-column prop="banji" label="单位" align="center"></el-table-column>
      <el-table-column prop="xueqi" label="领用人" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="发放人" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="领用日期" align="center"></el-table-column>
      <el-table-column prop label="操作" align="center">
        <a class="a-active" href="javascript:;" @click.prevent="to_SetChuku()">
          <i class="i-2"></i> 修改
        </a>
        <a class="a-active" href="javascript:;">
          <i class="i-3"></i> 删除
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
      pagetitle: "耗材出库",
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
          yuanxi: "检测离心管001",
          zhuanye: "20",
          nianji: "15ML",
          banji: "个",
          xueqi: "李毅",
          zhuangtai: "2018-8-8"
        },
        {
          yuanxi: "检测离心管002",
          zhuanye: "20",
          nianji: "15ML",
          banji: "个",
          xueqi: "李毅",
          zhuangtai: "2018-8-8"
        },
        {
          yuanxi: "检测离心管003",
          zhuanye: "20",
          nianji: "15ML",
          banji: "个",
          xueqi: "李毅",
          zhuangtai: "2018-8-8"
        },
        {
          yuanxi: "检测离心管004",
          zhuanye: "20",
          nianji: "15ML",
          banji: "个",
          xueqi: "李毅",
          zhuangtai: "2018-8-8"
        },
        {
          yuanxi: "检测离心管005",
          zhuanye: "20",
          nianji: "15ML",
          banji: "个",
          xueqi: "李毅",
          zhuangtai: "2018-8-8"
        },
        {
          yuanxi: "检测离心管006",
          zhuanye: "20",
          nianji: "15ML",
          banji: "个",
          xueqi: "李毅",
          zhuangtai: "2018-8-8"
        }
      ]
    };
  },
  computed: {},
  methods: {
    to_NewChuku(){    //新增出库
      this.$router.push("/NewChuku")
    },
    to_SetChuku(){
      this.$router.push("/SetChuku")
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