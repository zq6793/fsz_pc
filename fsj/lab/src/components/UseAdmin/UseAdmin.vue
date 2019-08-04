<!-- 组件说明 -->
<template>
  <div class="UseAdmin">
    <Soso :pagetitle="pagetitle"></Soso>
    <el-row class="mb20 ml20">
      <el-button type="success" plain @click="Addcomponent=true">新增用户</el-button>
      <el-button type="success" plain>导入用户</el-button>
      <el-button type="success" plain>导出用户</el-button>
    </el-row>
    <div class="select_box ml20">
      <el-col :span="8">
        <label>昵称：</label>
        <el-input v-model="Search.nickName" placeholder="请输入昵称" maxlength="8"  ></el-input>
      </el-col>

      <el-col :span="8">
        <label>账号：</label>
        <el-input v-model="Search.userName" placeholder="请输入账号" maxlength="11"  ></el-input>
      </el-col>

      <el-col :span="8">
        <label>手机号：</label>
        <el-input v-model="Search.mobile" placeholder="请输入手机号" maxlength="11"  ></el-input>
      </el-col>

      <el-col :span="8">
        <label>状态：</label>
        <el-select v-model="Search.status" placeholder="请选择状态">
          <el-option
            v-for="item in select.status"
            :key="item.id"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>

      <el-col :span="8">
        <label>身份：</label>
        <el-select v-model="Search.role" placeholder="请选择身份" >
          <el-option
            v-for="item in select.role"
            :key="item.id"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
    </div>

    <!-- 表格 -->
    <el-table
      :data="UseData"
      style="width: 95%"
      :header-cell-style="{
    'background-color': 'rgb(242,242,242)',
    'color': '#555555',
    'border-bottom': '1px #e6e6e6 solid'
}"
      class="ml20"
    >
      <el-table-column label="姓名" width="180" align="center">
        <template slot-scope="scope">
          <a
            href="javascript:;"
            style="color:#8B2500"
            @click.prevent="LookUse()"
          >{{scope.row.nickName}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="userName" label="账号" align="center"></el-table-column>
      <el-table-column prop="password" label="密码" align="center"></el-table-column>
      <el-table-column prop="mobile" label="手机号" align="center"></el-table-column>
      <el-table-column prop="email" label="邮箱" align="center"></el-table-column>
      <el-table-column label="账号状态" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.status==0">
            <em class="statuS_icon0"></em>正常
          </span>
          <span v-if="scope.row.status==1">
            <em class="statuS_icon1"></em>冻结
          </span>
          <span v-if="scope.row.status==2">
            <em class="statuS_icon2"></em>删除
          </span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <a
            class="a-active"
            href="javascript:;"
            @click="AddRight=true,Getusername(scope.$index,scope.row),getRoleEve(scope.$index,scope.row)"
          >
            <i class="i-2"></i> 分配角色
          </a>
          <a class="a-active" href="javascript:;" @click="Delete(scope.$index,scope.row)">
            <i class="i-2"></i> 删除
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
      <span>新增用户</span>
      <i></i>
      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>姓名：
        </label>
        <el-input v-model="AddUseData.nickName" placeholder="请输入用户姓名"></el-input>
      </el-col>

      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>账号：
        </label>
        <el-input v-model="AddUseData.userName" placeholder="请输入用户名称"></el-input>
      </el-col>

      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>密码:
        </label>
        <el-input v-model="AddUseData.password" placeholder="请输入密码"></el-input>
      </el-col>

      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>手机号：
        </label>
        <el-input v-model="AddUseData.mobile" placeholder="请输入手机号"></el-input>
      </el-col>

      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>邮箱：
        </label>
        <el-input v-model="AddUseData.email" placeholder="请输入邮箱"></el-input>
      </el-col>

      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>身份：
        </label>
        <el-select v-model="AddUseData.role" placeholder="请选择用户身份" style="width:72%">
          <el-option
            v-for="item in select.role"
            :key="item.id"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="Addcomponent = false" @click.native="AddUse()">确 定</el-button>
        <el-button @click="Addcomponent = false">取 消</el-button>
      </span>
    </el-dialog>

    <!-- ------------------------------  给用户配置权限  -------------------------------- -->
    <el-dialog
      title
      :visible.sync="AddRight"
      width="30%"
      center
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <i></i>
      <span>配置权限</span>
      <i></i>
      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;width:200px!important">
          当前用户名：
          <span style="color:red;font-size:18px;">{{AddRoleName}}</span>
        </label>
      </el-col>

      <el-col :span="24" style="margin-top:30px;">
        <el-tree
          :data="GetRole"
          show-checkbox
          @check-change="handleCheckChange"
          ref="tree"
          node-key="id"
          :default-expanded-keys="[]"
          :default-checked-keys="this.default"
          :props="defaultProps"
        ></el-tree>
      </el-col>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="AddRight = false,SetRoleEve()">确 定</el-button>
        <el-button @click="AddRight = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Soso from "../common/soso";
import Paging from "../common/paging";
import { post } from "../../request";
import { getselect } from "../../getselect";
export default {
  components: {
    Soso,
    Paging
  },
  data() {
    return {
      pagetitle: "用户管理", //页面标题
      total: 0, //总条数
      Addcomponent: false, //新增组件
      AddRight: false, //给用户配置权限组件
      AddUseData: {
        nickName: "", //用户姓名
        userName: "", //用户账号
        password: "", //密码
        mobile: "", //手机号
        email: "", //邮箱
        role: "", //身份
        userId: "555" //此处需要改
      },
      SetRole: {
        adminId: "", //用户id
        roleId: Array //身份ID
      },
      GetRole: [], //根据用户ID查到用户所配有权限
      default: [], //根据id查到用户所配有权限 > 并且勾选
      defaultProps: {
        children: "childList",
        label: "name"
      },
      AddRoleName: "",
      Search: {
        pageNum: "1", //请求页码
        pageSize: "8", //每页条数
        nickName: "", // 用户姓名>查询
        userName: "", // 用户账号>查询
        mobile: "", //手机号>查询
        status: "", //账号状态>查询
        role: "" //身份>查询
      },
      UseData: [], //用户数据
      select: {
        status: [],
        role: []
      }
    };
  },
  watch: {
    Search: {
      //监听分页变化
      handler(newval, oldval) {
        this.GetUseData();
      },
      deep: true
    }
  },
  created() {
    this.GetUseData();
    this.Getselect();
  },
  computed: {},
  methods: {
    GetUseData() {
      //获取用户列表
      var $_this = this;
      post({
        url: "cms/login/queryAdminList",
        data: $_this.Search,
        IS:false
      }).then(res => {
        $_this.total = res.data.total;
        $_this.UseData = res.data.list;
      });
    },
    AddUse() {
      //增加用户
      let $_this = this;
      post({
        url: "cms/login/addAdmin",
        data: $_this.AddUseData
      }).then(res => {
        $_this.GetUseData();
      });
    },
    Delete(index, row) {
      //根据id删除用户
      let $_this = this;
      let id = row.id;
      let names = this.UseData[index].nickName;
      this.$confirm("此操作将永久删除" + names + "， 是否继续？", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          post({
            url: "cms/login/deleteAdminById",
            data: { id }
          }).then(res => {
            $_this.GetUseData();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除！"
          });
        });
    },
    getRoleEve(index, row) {
      // 根据ID获取所配有权限
      let $_this = this;
      let id = row.id;
      $_this.default = [];
      post({
        url: "cms/login/queryAdminRoleListById",
        data: { id },
        IS:false
      }).then(response => {
        if (response.data.code == "0000") {
          this.GetRole = response.data.list;
          response.data.list.forEach(element => {
            if (element.adminRoleId != null) {
              $_this.default.push(element.id);
              console.log(element.name);
            } else if (element.childList.length != 0) {
              element.childList.forEach(element => {
                if (element.adminRoleId != null) {
                  $_this.default.push(element.id);
                }
              });
            }
          });
        }
      });
    },
    Getusername(index, row) {
      let adminId = row.id;
      console.log("用户Id" + row.id);
      console.log("用户姓名" + row.nickName);
      this.SetRole.adminId = adminId;
      this.AddRoleName = row.nickName;
    },
    handleCheckChange() {
      //获取选择data
      this.SetRole.roleId = this.$refs.tree.getCheckedKeys();
      console.log(this.SetRole.roleId);
    },
    SetRoleEve() {
      //配置权限
      let $_this = this;
      post({
        url: "cms/login/configAdminRole",
        data: $_this.SetRole
      }).then(res => {
        console.log(res);
      });
    },
    Getselect() {
      //获取下拉框内容
      getselect({
        type: ["status", "role"],
        sign: this
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
    LookUse() {
      //查看用户
      alert("正在建设...");
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