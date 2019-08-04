<!-- 组件说明 -->
<template>
  <div class="apply m20 LookMake">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="path-box">
      <el-breadcrumb-item :to="{ path: '/Labmake' }">实验室建设</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/ApplyLab' }">详情</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>基础信息</span>
      </div>
      <el-col class="text item" :span="12">
        <span>实验室名称：</span>
        {{"物理实验室"}}
      </el-col>
      <el-col class="text item" :span="12">
        <span>实验室性质：</span>
        {{"新建"}}
      </el-col>
      <el-col class="text item" :span="12">
        <span>所属院系：</span>
        {{"A学院"}}
      </el-col>
      <el-col class="text item" :span="12">
        <span>面向专业：</span>
        {{"应用物理"}}
      </el-col>
      <el-col class="text item" :span="12">
        <span>使用类型：</span>
        {{"校内使用"}}
      </el-col>
      <el-col class="text item" :span="12">
        <span style="width:180px;">计划开设实验项目(个)：</span>
        {{"36"}}
      </el-col>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>申请信息</span>
      </div>
      <el-col class="text item" :span="12">
        <span>申请人：</span>
        {{"张洪山"}}
      </el-col>
      <el-col class="text item" :span="12">
        <span>审批人：</span>
        {{"张洪山"}}
      </el-col>
      <el-col class="text item" :span="12">
        <span>申请状态：</span>
        {{"审批中"}}
      </el-col>
      <el-col class="text item" :span="12">
        <span>申请资料附件：</span>
        {{"................"}}
        <a href="Javascript:;">下载</a>
      </el-col>
      <el-col class="text item" :span="24">
        <el-divider content-position="left">申请原因</el-divider>
        {{"................"}}
      </el-col>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>仪器信息</span>
      </div>
      <div class="table-box">
        <el-table :data="tableData" height="250" border style="width: 100%" stripe>
          <el-table-column prop="date" label="仪器名称" width="180"></el-table-column>
          <el-table-column prop="name" label="单价" width="180"></el-table-column>
          <el-table-column prop="address" label="数量"></el-table-column>
          <el-table-column prop="address" label="总价"></el-table-column>
        </el-table>
      </div>
    </el-card>

    <el-col class="submit-box">
      <el-button type="primary">返回</el-button>
      <el-button type="danger">撤销</el-button>
      <el-button type="danger" @click.native="test()">测试</el-button>
    </el-col>
  </div>
</template>

<script>
import { post } from "../../request";
export default {
  components: {},
  data() {
    return {
      ID: "",
      tableData: [
        {
          date: "显微镜",
          name: "10000",
          address: "2",
          das: "2000"
        },
        {
          date: "显微镜",
          name: "10000",
          address: "2",
          das: "2000"
        },
        {
          date: "显微镜",
          name: "10000",
          address: "2",
          das: "2000"
        },
        {
          date: "显微镜",
          name: "10000",
          address: "2",
          das: "2000"
        }
      ]
    };
  },
  created() {
    this.GetRouter(); //获取路由参数
    this.Get(); //获取信息
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    GetRouter() {
      //获取路由参数
      this.ID = this.$route.query.id;
    },
    Get() {
      post({
        url: "laboratory/labBuilding/queryById",
        data: {
          id: this.ID
        }
      }).then(res => {
        console.log(res);
      });
      // alert(1)
    },
    test() {
      this.Get();
    }
  }
};
</script>

<style scoped>
.apply {
  overflow: auto;
}
/* 面包屑 */
.path-box {
  width: 95%;
  display: block;
  margin-bottom: 30px;
  box-sizing: border-box;
  padding: 20px 40px 20px 20px;
  border-bottom: 1px solid #e6e6e6;
}
/* label */
label {
  display: inline-block;
  width: 100px;
}
/* col */
.el-col {
  margin: 15px 0;
}
/* el-table__header-wrapper */
.el-table {
  height: 100% !important;
}

/* 取消 提交 */
.submit-box {
  text-align: center;
}
.submit-box .el-button {
  width: 100px;
  margin: 0 30px;
}
/* ---- 卡片 ----- */
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
  /* text-align: left; */
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 95%;
}
/* span */
.box-card span {
  width: 100px;
  float: left;
}
/* 表格 */

.el-card {
  margin-bottom: 15px;
}
</style>  