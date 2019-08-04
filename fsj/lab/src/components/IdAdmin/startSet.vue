<!-- 组件说明 -->
<template>
  <div class="UseAdmin">
    <Soso :pagetitle="pagetitle"></Soso>
    <Search>
      <el-col :span="8">
        <el-form-item label="起始日期：">
          <el-date-picker
            v-model="Search.startDate"
            type="date"
            placeholder="选择日期"
            value-format="timestamp"
          ></el-date-picker>
        </el-form-item>
      </el-col>

      <el-col :span="8">
        <el-form-item label="结束日期：">
          <el-date-picker
            v-model="Search.endDate"
            type="date"
            placeholder="选择日期"
            value-format="timestamp"
          ></el-date-picker>
        </el-form-item>
      </el-col>

      <el-col :span="8">
        <el-form-item label="状态：">
          <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
        </el-form-item>
      </el-col>
    </Search>
    <el-col :span="24" style="padding:20px">
      <el-button type="success" plain @click="adddialog = true">新增设置</el-button>
    </el-col>

    <!-- 表格 -->
    <el-table
      :data="tableData"
      style="width: 95%"
      :header-cell-style="{
    'background-color': 'rgb(242,242,242)',
    'color': '#555555',
    'border-bottom': '1px #e6e6e6 solid'
}"
      class="ml20"
    >
      <el-table-column prop="trimName" label="名称" align="center"></el-table-column>
      <el-table-column label="学期开始日期" align="center">
        <template slot-scope="scope">
          <span>{{new Date(scope.row.startDate).toLocaleDateString().replace(/\//g, "-")}}</span>
        </template>
      </el-table-column>

      <el-table-column label="学期结束日期" align="center">
        <template slot-scope="scope">
          <span>{{new Date(scope.row.endDate).toLocaleDateString().replace(/\//g, "-")}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="creater" label="创建人" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <!-- <a
            class="a-active"
            href="javascript:;"
            @click="GetBaseID(scope.$index,scope.row),Setcomponent = true"
          >
            <i class="i-2"></i> 修改
          </a>-->
          <a class="a-active" href="javascript:;" @click="Delete(scope.$index,scope.row)">
            <i class="i-2"></i> 删除
          </a>
        </template>
      </el-table-column>
    </el-table>
    <Paging @ChildEachPage="ChildEachPage" @ChildNowPage="ChildNowPage" :total="total"></Paging>
    <!-- --------------------  居中弹出组件 ------------------ -->
    <el-dialog
      title
      :visible.sync="adddialog"
      width="30%"
      center
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <el-form :model="input" class="demo-form-inline">
        <i></i>
        <span>新增配置</span>
        <i></i>

        <el-col :span="24" style="margin-top:30px;">
          <label style="text-align:center;">学期开始日期：</label>
          <el-form-item>
            <el-date-picker
              v-model="AddData.startDate"
              type="date"
              placeholder="选择日期"
              value-format="timestamp"
            ></el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :span="24" style="margin-top:30px;">
          <label style="text-align:right;">学期结束日期：</label>
          <el-form-item>
            <el-date-picker
              v-model="AddData.endDate"
              type="date"
              placeholder="选择日期"
              value-format="timestamp"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="adddialog = false,Add()">确 定</el-button>
        <el-button @click="adddialog = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Soso from "../common/soso";
import Paging from "../common/paging";
import Search from "../common/Search";
import { post } from "../../request";
import { getselect } from "../../getselect";

export default {
  components: {
    Soso,
    Paging,
    Search
  },
  data() {
    return {
      input: "",
      pagetitle: "学期课时设置", //页面标题
      tableData: null, //获取数据
      AddData: {}, //新增
      Search: {
        //分页
        pageNum: 1, //请求页码
        pageSize: "8" //每页条数
      },
      total: 0, //总条数
      adddialog: false //新增弹框
    };
  },
  watch: {
    Search: {
      //监听分页变化
      handler(newval, oldval) {
        this.GetData();
      },
      deep: true
    }
  },
  created() {
    this.GetData(); //获取数据
  },
  computed: {},
  methods: {
    GetData() {
      //获取数据
      post({
        url: "cms/trimester/queryTrimesterPageBycondition",
        data: this.Search,
        IS:false
      }).then(res => {
        if (res.status == 200) {
          this.tableData = res.data.list;
          this.total = res.data.total;
        }
      });
    },
    Add() {
      //新增学期
      console.log(this.AddData);
      post({
        url: "cms/trimester/addTrimester",
        data: this.AddData
      }).then(() => {
        this.GetData();
      });
    },
    Delete(index, row) {
      //删除学期
      let id = row.id;
      post({
        url: "cms/trimester/deleteTrimester",
        data: { id }
      }).then(res => {
        this.GetData();
      });
    },
    ChildNowPage(NowPage) {
      //监听分页组件传值
      this.Search.pageNum = NowPage;
    },
    ChildEachPage(EachPage) {
      //监听分页组件传值
      this.Search.pageSize = EachPage;
    },
    Getselect() {
      //获取下拉框内容
      getselect({
        type: ["sign", "role"],
        sign: this
      });
    }
  }
};
</script>

<style scoped>
/* 选择框容器 */
.select_box {
  width: 95%;
  min-height: 30px;
  overflow: hidden;
  padding: 10px 0;
  background: rgb(242, 242, 242);
}
.select_box .el-input,
.select_box .el-select {
  margin: 5px;
}
label {
  width: 100px !important;
  display: inline-block;
  text-align: right;
}
.el-input,
.el-select {
  width: 67%;
}
/* 表格样式 */
.el-table {
  margin-top: 20px;
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
/* 标题 线 */
.el-dialog i {
  display: inline-block;
  width: 30%;
  height: 2px;
  margin: 0 15px 6px 15px;
  background: rgb(235, 235, 235);
}
.el-dialog span {
  font-size: 16px;
  font-weight: bold;
}
/* .el-dialog .el-input {
  width: 72%;
} */
.el-dialog .el-form-item {
  display: inline-block;
  width: 72%;
}
.el-dialog .el-input--suffix {
  width: 90% !important;
}
.el-form-item {
  margin: 0px;
}
.el-date-editor{
  width: 67%!important;
}
</style>