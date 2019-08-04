<!-- 组件说明 -->
<template>
  <div class="lablog">
    <Soso :pagetitle="pagetitle"></Soso>
    <el-row class="select-box m20">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="100px">
        <el-form-item label="院系：">
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="实验名称：">
          <el-select v-model="formInline.a" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="确认状态：">
          <el-select v-model="formInline.d" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

      <el-form-item label="上课时间：">
          <div class="block">
            <el-date-picker
              v-model="formInline.date"
              type="date"
              placeholder="选择日期"
              class="el-date-picker"
            ></el-date-picker>
          </div>
        </el-form-item>

        <el-form-item label="提交时间：">
          <div class="block">
            <el-date-picker
              v-model="formInline.date"
              type="date"
              placeholder="选择日期"
              class="el-date-picker"
            ></el-date-picker>
          </div>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row class="m20">
      <el-button type="success" plain @click="to_log()">新增日志</el-button>
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
      <el-table-column prop="zhuanye" label="实验班级" width="180" align="left"></el-table-column>
      <el-table-column prop="nianji" label="上课时间" align="center"></el-table-column>
      <el-table-column prop="banji" label="提交时间" align="center"></el-table-column>
      <el-table-column prop="xueqi" label="确认情况" align="center"></el-table-column>

      <el-table-column prop label="操作" align="center">
        <!-- <a class="a-active" href="javascript:;">
          <i class="i-1"></i> 预约
        </a>-->
        <a class="a-active" href="javascript:;" @click.prevent="to_LookLog()">
          <i class="i-1"></i> 查看
        </a>
        <a class="a-active" href="javascript:;" @click.prevent="to_SetLog()">
          <i class="i-2"></i> 修改
        </a>
        <a class="a-active" href="javascript:;" @click.prevent="deletes()">
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
      pagetitle: "实验室日志",
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
          yuanxi: "物理实验室",
          zhuanye: "化学001班",
          nianji: "2016.03.085",
          banji: "未确认",
          xueqi: "2019",
          zhuangtai: "未发布"
        },
        {
          yuanxi: "物理实验室",
          zhuanye: "化学001班",
          nianji: "2016.03.085",
          banji: "未确认",
          xueqi: "2019",
          zhuangtai: "未发布"
        },
        {
          yuanxi: "物理实验室",
          zhuanye: "化学001班",
          nianji: "2016.03.085",
          banji: "未确认",
          xueqi: "2019",
          zhuangtai: "未发布"
        },
        {
          yuanxi: "物理实验室",
          zhuanye: "化学001班",
          nianji: "2016.03.085",
          banji: "未确认",
          xueqi: "2019",
          zhuangtai: "未发布"
        },
        {
          yuanxi: "物理实验室",
          zhuanye: "化学001班",
          nianji: "2016.03.085",
          banji: "未确认",
          xueqi: "2019",
          zhuangtai: "未发布"
        },
        {
          yuanxi: "物理实验室",
          zhuanye: "化学001班",
          nianji: "2016.03.085",
          banji: "未确认",
          xueqi: "2019",
          zhuangtai: "未发布"
        },
        {
          yuanxi: "物理实验室",
          zhuanye: "化学001班",
          nianji: "2016.03.085",
          banji: "未确认",
          xueqi: "2019",
          zhuangtai: "未发布"
        },
      ]
    };
  },
  computed: {},
  methods: {
    to_log(){         //新增日志
      this.$router.push("/NewLog")
    },
    to_LookLog(){     //查看日志
      this.$router.push("/LookLog")
    },
    to_SetLog(){      //修改日志
      this.$router.push("/SetLog")
    },
    deletes(){        //删除日志
      alert("确定删除吗？")
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