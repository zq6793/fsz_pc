<!-- 组件说明 -->
<template>
  <div class="labadmin">
    <Soso :pagetitle="pagetitle"></Soso>

    <Search>
      <el-row>
        <el-col :span="8">
          <el-form-item label="所属院系：">
            <el-select placeholder="请选择活动区域" v-model="Search.deptId" @focus="GetSchoolSelect()"></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="实验室位置：" class="position-width">
            <el-select v-model="formInline.d" placeholder="请选择"></el-select>
            <el-select v-model="formInline.d" placeholder="请选择"></el-select>
            <el-select v-model="formInline.d" placeholder="请选择"></el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row style="margin-top:10px">
        <el-col :span="8">
          <el-form-item label="提交时间：">
            <el-date-picker
              class="picker-marg"
              v-model="Search.startDate"
              type="date"
              placeholder="起始日期"
              value-format="timestamp"
            ></el-date-picker>

            <el-date-picker
              v-model="Search.endDate"
              type="date"
              placeholder="结束日期"
              value-format="timestamp"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="实验室等级：">
            <el-select v-model="formInline.d" placeholder="请选择"></el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </Search>

    <el-col :span="24" style="padding:20px;">
      <el-button type="success" plain @click="NewLab()">新增实验室</el-button>
    </el-col>

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
      <el-table-column prop="yuanxi" label="编号" width="80" align="center"></el-table-column>
      <el-table-column prop="zhuanye" label="名称" align="center"></el-table-column>
      <el-table-column prop="nianji" label="所属学院" align="center"></el-table-column>
      <el-table-column prop="banji" label="分布楼层" align="center"></el-table-column>
      <el-table-column prop="xueqi" label="等级" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="容纳人数" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="面积（m²）" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="管理人员" align="center"></el-table-column>

      <el-table-column prop label="操作" align="center">
        <el-col :span="12">
          <a class="a-active" href="javascript:;" @click.prevent="to_labAdd()">
            <i class="i-1"></i>预约
          </a>
        </el-col>
        <el-col :span="12">
          <a class="a-active" href="javascript:;" @click.prevent="to_lablOOK()">
            <i class="i-1"></i> 查看
          </a>
        </el-col>
        <el-col :span="12">
          <a class="a-active" href="javascript:;" @click.prevent="to_labSet()">
            <i class="i-2"></i> 修改
          </a>
        </el-col>
        <el-col :span="12">
          <a class="a-active" href="javascript:;" @click.prevent="deletes()">
            <i class="i-3"></i> 删除
          </a>
        </el-col>
      </el-table-column>
    </el-table>
    <Paging></Paging>
  </div>
</template>

<script>
import Soso from "../common/soso";
import Paging from "../common/paging";
import { post } from "../../request";
import { getselect } from "../../getselect";
import Search from "../common/Search";

export default {
  components: {
    Soso,
    Paging,
    Search
  },
  data() {
    return {
      Search: {},
      pagetitle: "实验室管理",
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
          yuanxi: "01",
          zhuanye: "食品检测技术",
          nianji: "2016",
          banji: "2016食品检测技术1班",
          xueqi: "2019",
          zhuangtai: "未发布"
        },
        {
          yuanxi: "01",
          zhuanye: "食品检测技术",
          nianji: "2016",
          banji: "2016食品检测技术1班",
          xueqi: "2019",
          zhuangtai: "未发布"
        },
        {
          yuanxi: "01",
          zhuanye: "食品检测技术",
          nianji: "2016",
          banji: "2016食品检测技术1班",
          xueqi: "2019",
          zhuangtai: "未发布"
        },
        {
          yuanxi: "01",
          zhuanye: "食品检测技术",
          nianji: "2016",
          banji: "2016食品检测技术1班",
          xueqi: "2019",
          zhuangtai: "未发布"
        },
        {
          yuanxi: "01",
          zhuanye: "食品检测技术",
          nianji: "2016",
          banji: "2016食品检测技术1班",
          xueqi: "2019",
          zhuangtai: "未发布"
        }
      ]
    };
  },
  computed: {},
  methods: {
    NewLab() {
      //新建实验室
      this.$router.push("/Newlab");
    },
    to_labAdd() {
      //预约实验室
      this.$router.push("/LabAdd");
    },
    to_lablOOK() {
      //查看实验室
      this.$router.push("/LabLook");
    },
    to_labSet() {
      this.$router.push("/LabSet");
    },
    deletes() {
      alert("确定删除吗？");
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
    margin: 0px;
  }
  /* 操作按钮样式 */
  .a-active {
    margin-right: 5px;
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
  .el-date-editor {
    width: 31.5% !important;
    margin-right: 10px;
  }
  .el-input,
  .el-select {
    width: 65%;
  }
  .position-width .el-input,
  .position-width .el-select {
    width: 25%;
    margin-right: 10px;
  }
</style>