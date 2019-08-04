<!-- 组件说明 -->
<template>
  <div class="UseAdmin">
    <Soso :pagetitle="pagetitle"></Soso>

    <div class="select_box m20">
      <el-col :span="8">
        <label>类型：</label>
        <el-input v-model="Search.type" placeholder="请输入配置类型"></el-input>
      </el-col>

      <el-col :span="8">
        <label>名称：</label>
        <el-input v-model="Search.name" placeholder="请输入配置编码" maxlength="11" ></el-input>
      </el-col>

      <el-col :span="8">
        <label>标识：</label>
        <el-select
          v-model="Search.sign"
          placeholder="请选择配置"
          maxlength="11"
        >
          <el-option
            v-for="item in select.sign"
            :key="item.id"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
    </div>

    <el-row class="mb20 ml20">
      <el-button type="success" plain @click="centerDialogVisible = true">新增配置</el-button>
    </el-row>

    <!-- 表格 -->
    <el-table
      :data="BaseData"
      style="width: 95%"
      :header-cell-style="{
    'background-color': 'rgb(242,242,242)',
    'color': '#555555',
    'border-bottom': '1px #e6e6e6 solid'
}"
      class="ml20"
    >
      <el-table-column prop="type" label="类型" align="center"></el-table-column>
      <el-table-column prop="code" label="编码" align="center"></el-table-column>
      <el-table-column prop="name" label="名称" align="center"></el-table-column>
      <el-table-column prop="remark" label="备注" align="center"></el-table-column>
      <el-table-column label="操作">
        <template align="center" slot-scope="scope">
          <a
            class="a-active"
            href="javascript:;"
            @click="GetBaseID(scope.$index,scope.row),Setcomponent = true"
          >
            <i class="i-2"></i> 修改
          </a>
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
      <span>新增配置</span>
      <i></i>
      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>类型：
        </label>
        <el-input v-model="AddBase.type" placeholder="请输入配置类型"></el-input>
      </el-col>

      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>编码：
        </label>
        <el-input v-model="AddBase.code" placeholder="请输入配置编码"></el-input>
      </el-col>

      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>名称：
        </label>
        <el-input v-model="AddBase.name" placeholder="请输入配置名称"></el-input>
      </el-col>

      <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          @click="centerDialogVisible = false"
          @click.native="AddBaseEve()"
        >确 定</el-button>
        <el-button @click="centerDialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>

    <!-- ------------------------------  修改组件  -------------------------------- -->
    <el-dialog
      title
      :visible.sync="Setcomponent"
      width="30%"
      center
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <i></i>
      <span>修改配置</span>
      <i></i>
      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>类型：
        </label>
        <el-input v-model="SetBaseData.type" placeholder="请输入配置类型"></el-input>
      </el-col>

      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>编码：
        </label>
        <el-input v-model="SetBaseData.code" placeholder="请输入配置编码"></el-input>
      </el-col>

      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;margin-right:5px">*</span>名称：
        </label>
        <el-input v-model="SetBaseData.name" placeholder="请输入配置名称"></el-input>
      </el-col>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="Setcomponent = false" @click.native="SetBase()">确 定</el-button>
        <el-button @click="Setcomponent = false">取 消</el-button>
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
      pagetitle: "基础配置", //页面标题
      Search: {
        //分页
        pageNum: "1", //请求页码
        pageSize: "8", //每页条数
        type: "", //类型查询
        name: "", //名称查询
        sign: "" //标识查询
      },
      AddBase: {
        //新增配置
        type: "", //配置类型
        code: "", //配置编码
        name: "", //配置名称
        sign: "1" //配置标识
      },
      SetBaseData: {
        //修改配置
        id: "", //配置ID
        type: "", //配置类型
        code: "", //配置编码
        name: "", //配置名称
        sign: "1" //配置标识
      },
      total: 0,
      centerDialogVisible: false, //重要 弹出组件
      Setcomponent: false, //重要 修改组件
      BaseData: [], //院系数据
      select: {
        sign: [], //标识下拉框
        role:[]
      }
    };
  },
  watch: {
    Search: {
      //监听分页变化
      handler(newval, oldval) {
        this.GetBase();
      },
      deep: true
    }
  },
  created() {
    this.GetBase();
    this.Getselect();
  },
  computed: {},
  methods: {
    GetBase() {
      //获取基础配置数据
      let $_this = this;
      post({
        url: "cms/codeConfig/queryConfigListBycondition",
        data: $_this.Search,
        IS:false
      }).then(response => {
        if (response.status == 200) {
          if (response.data.list != null) {
            $_this.BaseData = response.data.list;
            $_this.total = response.data.total;
          }
        }
      });
    },
    AddBaseEve() {
      let $_this = this;
      //新增基础配置
      post({
        url: "cms/codeConfig/addConfig",
        data: $_this.AddBase
      }).then(res=>{
      $_this.GetBase();
      })
    },
    Delete(index, row) {
      let $_this = this;
      let id = row.id;
      post({
        url: "cms/codeConfig/deleteConfig",
        data: { id }
      }).then(res=>{
      $_this.GetBase();
      })
    },
    GetBaseID(index, row) {
      //   获取基本配置Id
      this.SetBaseData.id = row.id;
      this.SetBaseData.type = row.type;
      this.SetBaseData.code = row.code;
      this.SetBaseData.name = row.name;
    },
    SetBase() {
      //修改配置
      let $_this = this;
      post({
        url: "cms/codeConfig/updateConfig",
        data: $_this.SetBaseData
      }).then(res=>{
      $_this.GetBase();
      })
    },
    ChildNowPage(NowPage) {
      //监听分页组件传值
      this.Search.pageNum = NowPage;
    },
    ChildEachPage(EachPage) {
      //监听分页组件传值
      this.Search.pageSize = EachPage;
    },
    Getselect(){
      //获取下拉框内容
      getselect({
        type:["sign","role"],
        sign:this
      })
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