<!-- 组件说明 -->
<template>
  <div class="labmake">
    <Soso :pagetitle="pagetitle"></Soso>

    <Search>
      <el-row>
        <el-col :span="8">
          <el-form-item label="所属院系：">
            <el-select placeholder="请选择活动区域" v-model="Search.deptId" @focus="GetSchoolSelect()">
              <el-option
                v-for="item in select.school"
                :key="item.id"
                :label="item.depName"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>

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
          <el-form-item label="状态：">
            <el-select placeholder="请选择活动区域" v-model="Search.reportStatus">
              <el-option
                v-for="item in select.reportStatus"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </Search>

    <el-col :span="24" style="padding:20px">
      <el-button type="success" plain @click="applylab()">申报实验室</el-button>
    </el-col>
    <!-- 表格 -->
    <el-table
      class="ml20"
      :data="tableData"
      style="width: 95%"
      :header-cell-style="{
    'background-color': 'rgb(242,242,242)',
    'color': '#555555',
    'border-bottom': '1px #e6e6e6 solid'
}"
    >
      <el-table-column prop="labName" label="实验室名称与编号" width="180" align="center">
        <template slot-scope="scope">
          <span style="color:#66CC00">{{scope.row.labName}}</span>&nbsp;
          <span style="color:#FF3399">{{scope.row.labCode}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="deptName" label="所属学院" align="center"></el-table-column>
      <el-table-column label="提交时间" align="center">
        <template slot-scope="scope">
          <span>{{new Date(scope.row.createTime).toLocaleDateString().replace(/\//g, "-")}}</span>
        </template>
      </el-table-column>
      <el-table-column label="申报状态" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.reportStatus==1">已通过</span>
          <span v-if="scope.row.reportStatus==2">已驳回</span>
          <span v-if="scope.row.reportStatus==3">待审核</span>
          <span v-if="scope.row.reportStatus==4">申请中</span>
          <span v-if="scope.row.reportStatus==5">已撤销</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-col :span="8">
            <a class="a-active" href="javascript:;" @click="to_LookMake(scope.$index,scope.row)">
              <i class="i-1"></i> 查看
            </a>
          </el-col>
          <el-col :span="8">
            <a class="a-active" href="javascript:;" @click="to_SetMake(scope.$index,scope.row)">
              <i class="i-2"></i> 修改
            </a>
          </el-col>
          <el-col :span="8">
            <a class="a-active" href="javascript:;" @click="Delete(scope.$index,scope.row)">
              <i class="i-3"></i> 删除
            </a>
          </el-col>
        </template>
      </el-table-column>
    </el-table>
    <Paging @ChildEachPage="ChildEachPage" @ChildNowPage="ChildNowPage" :total="total"></Paging>
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
      pagetitle: "实验室建设", //页面标题
      Search: {
        deptId: "", //院系筛选
        pageNum: "1", //请求页码
        pageSize: "8" //每页条数
      }, //筛选数据
      select: {
        //下拉框数据
        school: [], //下拉>院系
        reportStatus: [] //获取状态
      },
      total: 0,
      date1: "",
      date2: "",
      grade: "",
      tableData: [] //表格数据
    };
  },
  watch: {
    Search: {
      //监听分页变化
      handler(newval, oldval) {
        this.Get();
      },
      deep: true
    }
  },
  created() {
    this.Get(); //获取数据
    this.Getselect(); //获取数据
  },
  computed: {},
  methods: {
    Get() {
      //获取数据
      post({
        url: "laboratory/labBuilding/queryAllByCondition",
        data: this.Search
      }).then(res => {
        console.log(res.data);
        this.tableData = res.data.list;
        this.total = res.data.total;
      });
    },
    // -----------------------------
    // 获取下拉
    GetSchoolSelect() {
      if (this.select.school.length != 0) {
        return;
      }
      post({
        url: "cms/department/queryDeptList",
        data: {},
        IS: false
      }).then(res => {
        console.log(res.data.list);
        this.select.school = res.data.list;
      });
    },
    // -----------------------------
    applylab() {
      this.$router.push("./ApplyLab");
    },
    to_LookMake(index, row) {
      console.log(row.id);
      let id = row.id;
      this.$router.push({ path: "/LookMake", query: { id } });
    },
    to_SetMake(index, row) {
      console.log(row.id);
      let id = row.id;
      this.$router.push({ path: "/SetMake", query: { id } });
    },
    Delete(index, row) {
      let $_this = this;
      let id = row.id;
      this.$confirm("此操作将永久删除该实验室, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          post({
            url: "laboratory/labBuilding/deleteById",
            data: { id }
          }).then(res => {
            $_this.Get();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
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
      //获取下拉框菜单
      getselect({
        type: ["reportStatus"],
        sign: this
      });
    }
  }
};
</script>

<style scoped>
  .labmake {
    height: 100%;
  }
  /* 选择框样式 */
  .select-box {
    padding-left: 20px;
    box-sizing: border-box;
    width: 95%;
    color: #666;
    background: rgb(168, 128, 128);
  }

  /* 表格样式 */
  .el-table {
    margin-top: 20px;
  }
  /* 操作按钮样式 */
  .a-active {
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
  .el-date-editor {
    width: 67% !important;
  }
  .el-input,
  .el-select {
    width: 67%;
  }
  .el-form-item__content .el-input {
    width: 35% !important;
  }
  .picker-marg {
    margin-right: 5px;
  }
</style>