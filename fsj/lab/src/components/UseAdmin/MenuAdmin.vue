<!-- 组件说明 -->
<template>
  <div class="UseAdmin">
    <Soso :pagetitle="pagetitle"></Soso>
    <el-row class="mb20 ml20">
      <el-button type="success" plain @click="Deleteall(),Addcomponent = true">新增菜单</el-button>
    </el-row>
    <div class="select_box ml20">
      <el-col :span="8" class="ml20">
        <label>菜单名称：</label>
        <el-input v-model="Search.name" placeholder="请输入菜单名称" maxlength="8"></el-input>
      </el-col>
    </div>

    <!-- 表格 -->
    <el-table
      class="ml20 table-data-box"
      v-loading="loading"
      :data="MenuData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column prop="id" label="ID" sortable align="center"></el-table-column>
      <el-table-column prop="name" label="菜单名称" sortable align="center"></el-table-column>
      <el-table-column prop="resourceUrl" label="视图路径" align="center"></el-table-column>
      <el-table-column prop="memo" label="级联关系" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <a class="a-active" href="javascript:;" @click="Delete(scope.$index,scope.row)">
            <i class="i-3"></i> 删除
          </a>
          <a
            v-if="scope.row.parentId == null"
            class="a-active"
            href="javascript:;"
            @click="AddChildMenu(scope.$index,scope.row),Addcomponent=true"
          >
            <i class="i-3"></i> 添加子菜单
          </a>
        </template>
      </el-table-column>
    </el-table>
    <Paging @ChildEachPage="ChildEachPage" @ChildNowPage="ChildNowPage" :total="total"></Paging>
    <!-- ------------------------------  新增组件  -------------------------------- -->
    <el-dialog
      title
      :visible.sync="Addcomponent"
      width="30%"
      center
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <i></i>
      <span>新增菜单</span>
      <i></i>
      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>菜单名称：
        </label>
        <el-input v-model="AddMenuData.name" placeholder="请输入菜单名称"></el-input>
      </el-col>

      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>父级ID：
        </label>
        <el-input v-model="AddMenuData.parentId" placeholder="请输入父级ID"></el-input>
      </el-col>

      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>视图路径：
        </label>
        <el-input v-model="AddMenuData.resourceUrl" placeholder="请输入视图路径"></el-input>
      </el-col>

      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>菜单级联：
        </label>
        <el-input v-model="AddMenuData.memo" placeholder="请输入菜单说明"></el-input>
      </el-col>

      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>菜单图标：
        </label>
        <el-input v-model="AddMenuData.icon" placeholder="请输入菜单图标"></el-input>
      </el-col>
      <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          @click="Addcomponent = false"
          @click.native="AddRoleDataEve()"
          @keyup.enter.native="AddRoleDataEve()"
        >确 定</el-button>
        <el-button @click="Addcomponent = false">取 消</el-button>
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
      pagetitle: "菜单管理", //页面标题
      loading: false,
      MenuData: [], //菜单数据
      total: 0,
      AddMenuData: {
        //新增菜单
        name: "", //菜单名称
        resourceUrl: "/", //视图地址
        parentId: "", //父级ID
        memo: "", //菜单级联
        icon: "icon-" //
      },
      Search: {
        pageNum: "1", //请求页码
        pageSize: "8", //每页条数
        name: "" // 用户姓名>查询
      },
      Addcomponent: false //新增组件
    };
  },
  watch: {
    Search: {
      //监听分页变化
      handler(newval, oldval) {
        this.GetMenuData();
      },
      deep: true
    }
  },
  created() {
    this.GetMenuData();
  },
  computed: {},
  methods: {
    GetMenuData() {
      //获取菜单列表
      let $_this = this;
      let newMenu = [];
      post({
        url: "cms/login/queryMenuList",
        data: $_this.Search,
        IS:false
      }).then(response => {
        $_this.total = response.data.total;
        response.data.list.forEach(element => {
          if (element.parentId == null) {
            element.hasChildren = true;
            newMenu.push(element);
          }
        });
        $_this.MenuData = newMenu;
        console.log($_this.MenuData);
      });
    },
    AddRoleDataEve() {
      //新增菜单
      let $_this = this;
      post({
        url: "cms/login/addMenu",
        data: $_this.AddMenuData,
        IS:false
      }).then(response => {
        // console.log(response);
        if (response.status == 200) {
          if (response.data.code == "0000") {
            this.$message({
              message: "新增菜单成功！",
              type: "success",
              showClose: true
            });
          } else if (response.data.code == "0001") {
            this.$message({
              message: "新增菜单失败！",
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
        $_this.GetMenuData();
      });
    },
    AddChildMenu(index, row) {
      let id = row.id;
      console.log(id);
      this.AddMenuData.parentId = id;
    },
    Delete(index, row) {
      //删除菜单
      let $_this = this;
      let id = row.id;
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          post({
            url: "cms/login/deleteMenuById",
            data: { id },
            IS:false
          }).then(response => {
            console.log(response);
            if (response.status == 200) {
              if (response.data.code == "0000") {
                this.$message({
                  message: "角色删除成功！",
                  type: "success",
                  showClose: true
                });
              } else if (response.data.code == "0001") {
                this.$message({
                  message: "角色删除失败，请稍后再试！",
                  type: "error",
                  showClose: true
                });
              }
            } else {
              this.$message({
                message: "服务器意外错误，请稍后再试！",
                type: "error",
                showClose: true
              });
            }
          });
          $_this.GetMenuData();
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
    load(tree, treeNode, resolve) {
      // this.loading = true;
      let id = tree.id;
      console.log(tree.id);
      post({
        url: "cms/login/queryMenuList",
        data: { parentId: id },
        IS:false
      }).then(response => {
        if (response.status == 200) {
          if (response.data.list.length != 0) {
            resolve(response.data.list);
          } else {
            this.$message({
              message: "没有对应二级菜单！",
              type: "warning"
            });
          }
        }
      });
    },
    Deleteall() {
      //清空之前输入内容
      this.AddMenuData.parentId = null;
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
.el-select {
  margin: 5px;
}
label {
  width: 90px !important;
  display: inline-block;
  text-align: right;
}
.el-input,
.el-select {
  width: 65%;
}
/* 表格样式 */
.el-table {
  width: 95% !important;
  margin-top: 20px;
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