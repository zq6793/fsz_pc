<!-- 组件说明 -->
<template>
  <div class="UseAdmin">
    <Soso :pagetitle="pagetitle"></Soso>
    <el-row class="mb20 ml20">
      <el-button type="success" plain @click="centerDialogVisible = true">新增院系</el-button>
    </el-row>

    <!-- 表格 -->
    <el-table
      :data="SchoolData"
      style="width: 95%"
      :header-cell-style="{
    'background-color': 'rgb(242,242,242)',
    'color': '#555555',
    'border-bottom': '1px #e6e6e6 solid'
}"
      class="ml20"
    >
      <el-table-column prop="depName" label="院系名称" align="center"></el-table-column>
      <el-table-column prop="school" label="下属专业" align="center"></el-table-column>
      <el-table-column prop="person" label="老师人数" align="center"></el-table-column>
      <el-table-column prop="setdate" label="实习生人数" align="center"></el-table-column>
      <el-table-column label="操作">
        <template align="center" slot-scope="scope">
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
      :visible.sync="centerDialogVisible"
      width="30%"
      center
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <i></i>
      <span>新增院系</span>
      <i></i>
      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>院系编码：
        </label>
        <el-input v-model="AddSchool.code" placeholder="请输入编码"></el-input>
      </el-col>

      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>院系名称：
        </label>
        <el-input v-model="AddSchool.depName" placeholder="请输入院系名称"></el-input>
      </el-col>

      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">院系描述：</label>
        <el-input v-model="AddSchool.depDescription" placeholder="请输入院系名称"></el-input>
      </el-col>

      <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          @click="centerDialogVisible = false"
          @click.native="AddSchoolEve()"
        >确 定</el-button>
        <el-button @click="centerDialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Soso from "../common/soso";
import Paging from "../common/paging";
import { post } from "../../request";
export default {
  components: {
    Soso,
    Paging
  },
  data() {
    return {
      pagetitle: "院系管理", //页面标题
      Search: {
        //分页
        pageNum: "1", //请求页码
        pageSize: "8" //每页条数
      },
      AddSchool: {
        code: "", //院系编码
        depName: "", //院系名称
        depDescription: "" //院系描述
      },
      total: 0,
      centerDialogVisible: false, //重要 弹出组件
      SchoolData: [] //院系数据
    };
  },
  watch: {
    Search: {
      //监听分页变化
      handler(newval, oldval) {
        this.GetSchoolMsg();
      },
      deep: true
    }
  },
  created() {
    this.GetSchoolMsg();
  },
  computed: {},
  methods: {
    GetSchoolMsg() {
      //获取院系信息
      let $_this = this;
      post({
        url: "cms/department/queryDeptListBycondition",
        data: $_this.Search
      }).then(response => {
        $_this.SchoolData = response.data.list;
        $_this.total = response.data.total;
      });
    },
    AddSchoolEve() {
      //新增院系
      let $_this = this;
      post({
        url: "cms/department/addDept",
        data: $_this.AddSchool
      }).then(response => {
        if (response.status == 200) {
          if (response.data.code == "0000") {
            this.$message({
              message: "新增院系成功！",
              type: "success",
              showClose: true
            });
            $_this.GetSchoolMsg();
          } else if (response.data.code == "0001") {
            this.$message({
              message: "新增院系失败，信息已存在！",
              type: "error",
              showClose: true
            });
          }
        } else {
          this.$message({
            message: "服务器错误，请稍后重试！",
            type: "error",
            showClose: true
          });
        }
      });
    },
    Delete(index, row) {
      //删除院系
      let $_this = this;
      let id = row.id;
      let names = this.SchoolData[index].depName;
      this.$confirm("此操作将永久删除" + names + ", 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          post({
            url: "cms/department/deleteDept",
            data: { id: id }
          }).then(response => {
            if (response.status == 200) {
              if (response.data.code == "0000") {
                this.$message({
                  message: "删除院系成功！",
                  type: "success",
                  showClose: true
                });
                $_this.GetSchoolMsg();
              } else if (response.data.code == "0001") {
                this.$message({
                  message: "院系删除失败，请稍后再试！",
                  type: "error",
                  showClose: true
                });
              }
            } else if (response.status == 500) {
              this.$message({
                message: "服务器意外错误，请稍后再试！",
                type: "error",
                showClose: true
              });
            }
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
.select_box .el-input {
  margin: 5px;
}
label {
  width: 85px !important;
  display: inline-block;
  text-align: right;
}
.el-input,
.el-select {
  width: 65%;
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
.el-dialog .el-input {
  width: 72%;
}
</style>