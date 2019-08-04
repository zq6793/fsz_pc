<!-- 组件说明 -->
<template>
  <div class="UseAdmin">
    <Soso :pagetitle="pagetitle"></Soso>
    
    <div class="select_box m20">
      <el-col :span="8" class="ml20">
        <label>选择院系：</label>
        <el-select v-model="Search.depId" placeholder="请选择院系">
          <el-option v-for="item in dep" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-col>
    </div>

    <el-row class="mb20 ml20">
      <el-button type="success" plain @click="centerDialogVisible = true">新增专业</el-button>
    </el-row>

    <!-- 表格 -->
    <el-table
      :data="HomeData"
      style="width: 95%"
      :header-cell-style="{
    'background-color': 'rgb(242,242,242)',
    'color': '#555555',
    'border-bottom': '1px #e6e6e6 solid'
}"
      class="ml20"
    >
      <el-table-column prop="proName" label="专业名称" align="center"></el-table-column>
      <el-table-column prop="depName" label="所属院系" align="center"></el-table-column>
      <el-table-column prop="school" label="班级数" align="center"></el-table-column>
      <el-table-column prop="setdate" label="实习生人数" align="center"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <a class="a-active" href="javascript:;" @click="Delete(scope.$index,scope.row)">
            <i class="i-3"></i> 删除
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
      <span>新增专业</span>
      <i></i>
      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;">*</span>选择院系：
        </label>
        <el-select v-model="AddHome.depId" placeholder="请选择院系">
          <el-option v-for="item in dep" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-col>
      <el-col :span="24">
        <label style="text-align:center;">
          <span style="color:red;">*</span>专业名称：
        </label>
        <el-input v-model="AddHome.proName" placeholder="请输入专业"></el-input>
      </el-col>
      <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          @click="centerDialogVisible = false"
          @click.native="AddHomeEve()"
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
      HomeData: [], //专业数据
      Search: {
        //分页
        pageNum: "1", //请求页码
        pageSize: "8", //每页条数
        depId:"",     //院系查询
      },
      total: 0,
      AddHome: {
        //新增专业
        depId: "", //院系Id
        proName: "", //专业名称
      },
      dep: [], //新增专业下拉框数据
      input: "",
      pagetitle: "专业管理", //页面标题
      centerDialogVisible: false //重要 弹出组件
    };
  },
  watch: {
    Search: {
      //监听分页变化
      handler(newval, oldval) {
        this.GetHomedata();
      },
      deep: true
    }
  },
  created() {
    this.GetHomedata();
    this.GetdepId();
  },
  computed: {},
  methods: {
    GetHomedata() {
      //获取专业数据
      let $_this = this;
      post({
        url: "cms/professional/queryProfPageBycondition",
        data: $_this.Search
      }).then(response => {
        $_this.HomeData = response.data.list;
        $_this.total = response.data.total;
        console.log(response.data.list);
      });
    },
    AddHomeEve() {
      //新增专业
      let $_this = this;
      // console.log(this.AddHome);
      post({
        url: "cms/professional/addProf",
        data: $_this.AddHome
      }).then(response => {
        console.log(response);
        if (response.status == 200) {
          if (response.data.code == "0000") {
            this.$message({
              message: "新增专业成功！",
              type: "success",
              showClose: true
            });
            $_this.GetHomedata();
            $_this.AddHome.proName = "";
          } else if (response.data.code == "0001") {
            this.$message({
              message: "新增专业失败，专业已存在！",
              type: "error",
              showClose: true
            });
            $_this.GetHomedata();
          }
        } else if (response.status == 500) {
          this.$message({
            mseeage: "服务器意外错误，请稍后重试！",
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
      let names = this.HomeData[index].proName;
      this.$confirm("此操作将永久删除" + names + ", 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          post({
            url: "cms/professional/deleteProf",
            data: { id }
          }).then(response => {
            console.log(response);
            if (response.status == 200) {
              if (response.data.code == "0000") {
                this.$message({
                  message: "删除专业成功！",
                  type: "success",
                  showClose: true
                });
                $_this.GetHomedata();
              } else if (response.data.code == "0001") {
                this.$message({
                  message: "专业删除失败，请稍后再试！",
                  type: "error",
                  showClose: true
                });
                $_this.GetHomedata();
              }
            } else if (response.status == 500) {
              this.$message({
                message: "服务器意外错误，请稍后再试！",
                type: "error",
                showClose: true
              });
              $_this.GetHomedata();
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
    GetdepId() {
      //获取院系Id 下拉框所用
      let $_this = this;
      post({
        url: "cms/department/queryDeptListBycondition",
        data: {}
      }).then(response => {
        response.data.list.forEach(element => {
          $_this.dep.push({ value: element.id, label: element.depName });
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
    test() {
      console.log(this.dep);
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
.el-dialog .el-col {
  margin: 8px 0;
}
.el-dialog span {
  font-size: 16px;
  font-weight: bold;
}
.el-dialog .el-input,
.el-dialog .el-select {
  width: 72%;
}
</style>