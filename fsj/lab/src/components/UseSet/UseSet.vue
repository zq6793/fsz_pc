<!-- 组件说明 -->
<template>
  <div class="UseAdmin">
    <Soso :pagetitle="pagetitle"></Soso>
    <el-row class="mb20 ml20">
      <el-button type="success" plain @click="Addcomponent = true,Deleteall()">新增角色</el-button>
    </el-row>
    <div class="select_box ml20">
      <el-col :span="8">
        <label class="ml20">角色名称：</label>
        <el-input v-model="Search.name" placeholder="角色名称" maxlength="8"></el-input>
      </el-col>
    </div>

    <!-- 表格 -->
    <el-table
      class="ml20 table-data-box"
      :data="RoleData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column prop="id" label="ID" sortable align="center"></el-table-column>
      <el-table-column prop="name" label="角色名称" sortable align="center"></el-table-column>
      <el-table-column prop="status" label="状态" align="center"></el-table-column>
      <el-table-column prop="sysId" label="所属服务ID" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <a
            class="a-active"
            href="javascript:;"
            @click="Getusername(scope.$index,scope.row),getMenuEve(scope.$index,scope.row),AddMenu=true"
          >
            <i class="i-3"></i> 配置菜单
          </a>
          <a
            class="a-active"
            href="javascript:;"
            @click="AddChildRole(scope.$index,scope.row),Addcomponent=true"
          >
            <i class="i-3"></i> 添加子角色
          </a>
          <a class="a-active" href="javascript:;" @click="Delete(scope.$index,scope.row)">
            <i class="i-3"></i> 删除
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
      <span>新增角色</span>
      <i></i>
      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>角色名称：
        </label>
        <el-input v-model="AddRoleData.name" placeholder="请输入角色名称"></el-input>
      </el-col>

      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>父级ID：
        </label>
        <el-input v-model="AddRoleData.parentId" placeholder="请输入父级ID"></el-input>
      </el-col>

      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>标识：
        </label>
        <el-input v-model="AddRoleData.status" placeholder="请输入角色标识"></el-input>
      </el-col>

      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>服务ID：
        </label>
        <el-input v-model="AddRoleData.sysId" placeholder="请输入服务ID"></el-input>
      </el-col>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="Addcomponent = false" @click.native="AddRoleDataEve()">确 定</el-button>
        <el-button @click="Addcomponent = false">取 消</el-button>
      </span>
    </el-dialog>

    <!-- ------------------------------  给角色配置菜单  -------------------------------- -->
    <el-dialog
      title
      :visible.sync="AddMenu"
      width="30%"
      center
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <i></i>
      <span>配置菜单</span>
      <i></i>
      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;width:200px!important">
          当前角色：
          <span style="color:red;font-size:18px;">{{AddRoleName}}</span>
        </label>
      </el-col>

      <el-col :span="24" style="margin-top:30px;">
        <el-tree
          :data="GetMenu"
          show-checkbox
          ref="tree"
          @check-change="handleCheckChange"
          node-key="id"
          :default-expanded-keys="[]"
          :default-checked-keys="this.default"
          :props="defaultProps"
        ></el-tree>
      </el-col>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="AddMenu = false,SetMenuEve()">确 定</el-button>
        <el-button @click="AddMenu = false">取 消</el-button>
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
      pagetitle: "角色管理", //页面标题
      RoleData: [], //角色数据
      GetMenu: [], //根据角色ID查到所拥有的菜单
      SetMenu: {
        //配置所需数据
        roleId: "",
        menuId: Array
      },
      total: 0,
      AddRoleData: {
        //新增角色
        name: "",
        parentId: "",
        status: "",
        sysId: ""
      },
      Search: {
        pageNum: "1", //请求页码
        pageSize: "8", //每页条数
        name: "" // 用户姓名>查询
      },
      Addcomponent: false, //新增组件
      AddMenu: false, //配置菜单组件
      AddRoleName: "", //当前角色名
      default: [], //根据id查到用户所配有权限 > 并且勾选
      defaultProps: {
        children: "childList",
        label: "name"
      }
    };
  },
  watch: {
    Search: {
      //监听分页变化
      handler(newval, oldval) {
        this.GetRoleData();
      },
      deep: true
    }
  },
  created() {
    this.GetRoleData();
  },
  computed: {},
  methods: {
    GetRoleData() {
      //获取角色列表
      let $_this = this;
      let newdata = [];
      post({
        url: "cms/login/queryRoleList",
        data: $_this.Search,
        IS: false
      }).then(response => {
        $_this.total = response.data.total;
        response.data.list.forEach(element => {
          // if (element.parentId == null) {
            element.hasChildren = true;
            newdata.push(element);
          // }
        });
        $_this.RoleData = newdata;
        console.log($_this.RoleData);
      });
    },
    AddRoleDataEve() {
      //增加角色
      let $_this = this;
      post({
        url: "cms/login/addRole",
        data: $_this.AddRoleData
      }).then(() => {
        $_this.GetRoleData();
      });
    },
    AddChildRole(index, row) {
      //添加子角色
      this.AddRoleData.parentId = row.id;
      console.log(row.id);
    },
    Delete(index, row) {
      //删除院系
      let $_this = this;
      let id = row.id;
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          post({
            url: "cms/login/deleteRoleById",
            data: { id }
          }).then(res => {
            $_this.GetRoleData();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    Getusername(index, row) {
      //配置弹框 name
      let menuId = row.id;
      this.SetMenu.roleId = menuId;
      this.AddRoleName = row.name;
    },
    getMenuEve(index, row) {
      //根据角色id获取所配有菜单
      let $_this = this;
      let id = row.id;
      $_this.default = [];
      post({
        url: "cms/login/queryRoleMenuListById",
        data: { id },
        IS: false
      }).then(res => {
        console.log(res);
        if (res.data.code == "0000") {
          this.GetMenu = res.data.list;
          res.data.list.forEach(element => {
            if (element.roleMenuId != null) {
              $_this.default.push(element.id);
              console.log(element.name);
            } else if (element.childList.length != 0) {
              element.childList.forEach(element => {
                if (element.roleMenuId != null) {
                  $_this.default.push(element.id);
                }
              });
            }
          });
        }
      });
    },
    SetMenuEve() {
      //给角色配置菜单
      let $_this = this;
      post({
        url: "cms/login/configRoleMenu",
        data: $_this.SetMenu
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
      let id = tree.id;
      console.log(tree.id);
      post({
        url: "cms/login/queryRoleList",
        data: { parentId: id },
        IS: false
      }).then(response => {
        console.log(response.data.list)
        if (response.status == 200) {
          if (response.data.list.length != 0) {
            response.data.list.forEach(element=>{
              element.hasChildren = true
            })
            resolve(response.data.list);
          } else {
            this.$message({
              message: "没有对应二级角色，请添加！",
              type: "warning"
            });
          }
        }
      })
    },
    handleCheckChange() {
      //获取选择data
      this.SetMenu.menuId = this.$refs.tree.getCheckedKeys();
      console.log(this.SetMenu.menuId);
    },
    Deleteall() {
      //清空之前输入内容
      this.AddRoleData.parentId = null;
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