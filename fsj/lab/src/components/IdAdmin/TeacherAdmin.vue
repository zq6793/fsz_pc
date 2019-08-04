<!-- 组件说明 -->
<template>
  <div class="UseAdmin">
    <Soso :pagetitle="pagetitle"></Soso>
    <el-col class="mb20 ml20 col-title">
      <el-button type="success" plain @click="NewTeacher = true">新增老师</el-button>
      <el-button type="success" plain style="float:right">导出老师</el-button>
      <el-button type="success" plain style="float:right">导入老师</el-button>
    </el-col>
    <div class="select_box ml20">
      <el-col :span="8">
        <label>院系：</label>
        <el-select v-model="Search.depId" placeholder="请选择">
          <el-option
            v-for="item in depIds"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
      </el-col>

      <!-- <el-col :span="8">
        <label>选择系统：</label>
        <el-select v-model="value" placeholder="请选择"></el-select>
      </el-col> -->

      <el-col :span="8">
        <label>选择角色：</label>
        <el-select v-model="Search.sysFlag" placeholder="请选择">
          <el-option v-for="item in select.sysFlag" :key="item.value" :value="item.value" :label="item.label"></el-option>
        </el-select>
      </el-col>

      <el-col :span="8">
        <label>账号状态：</label>
        <el-select v-model="Search.status" placeholder="请选择">
          <el-option v-for="item in select.status" :key="item.value" :value="item.value" :label="item.label"></el-option>
        </el-select>
      </el-col>
    </div>

    <!-- 表格 -->
    <el-table
      ref="multipleTable"
      :data="GetTeacherDate"
      tooltip-effect="dark"
      style="width: 95%"
      @selection-change="handleSelectionChange"
      class="ml20">
      <el-table-column type="selection" width="35px"></el-table-column>
      <el-table-column prop="teacherName" label="姓名" ></el-table-column>
      <el-table-column prop="depName" label="院系" ></el-table-column>
      <el-table-column prop="course" label="授课方向" ></el-table-column>
      <el-table-column prop="teaNum" label="职工号" ></el-table-column>
      <el-table-column prop="createTime" label="创建时间" ></el-table-column>
      <el-table-column label="账号状态" >
        <template slot-scope="scope">
          <span v-if="scope.row.status==0">
            <em class="statuS_icon0"></em>正常
          </span>
          <span v-if="scope.row.status==1">
            <em class="statuS_icon1"></em>删除
          </span>
          <span v-if="scope.row.status==2">
            <em class="statuS_icon2"></em>冻结
          </span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <!-- <a class="a-active" href="javascript:;" @click.prevent="TabUseSet = true">
            <i class="el-icon-s-check"></i> 角色设置
          </a> -->
          <a class="a-active" href="javascript:;" @click.prevent="SetTeacher = true,SetTeacherEve(scope.$index,scope.row)">
            <i class="el-icon-s-tools"></i> 修改
          </a>
          <!-- <a class="a-active" href="javascript:;">
            <i class="el-icon-s-release"></i> 冻结
          </a> -->
          <a class="a-active" href="javascript:;" @click="Delete(scope.$index,scope.row)">
            <i class="el-icon-delete-solid"></i> 删除
          </a>
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-col :span="24" style="margin:5px 20px">
      <el-button type="success" plain @click="UseSet = true">角色设置</el-button>
    </el-col> -->
    <Paging @ChildEachPage="ChildEachPage" @ChildNowPage="ChildNowPage" :total="total"></Paging>
    <!-- --------------------  新增老师 弹出组件 ------------------ -->
    <div class="New_box">
      <el-dialog
        title
        :visible.sync="NewTeacher"
        width="30%"
        center
        :modal-append-to-body="false"
        :close-on-click-modal="false"
      >
        <i></i>
        <span>新增教师</span>
        <i></i>
        <el-col :span="24" style="margin-top:30px;">
          <label style="text-align:center;">
            <span style="color:red;">*</span>选择院系：
          </label>
          <el-select v-model="AddTeacher.depId" placeholder="请选择">
            <el-option
            v-for="item in depIds"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
          </el-select>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">
            <span style="color:red;">*</span>姓名：
          </label>
          <el-input v-model="AddTeacher.teacherName" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">
            <span style="color:red;">*</span>性别：
          </label>
          <div class="radio_box">
            <el-radio v-model="AddTeacher.gender" label="0">男</el-radio>
            <el-radio v-model="AddTeacher.gender" label="1">女</el-radio>
          </div>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">学历：</label>
          <el-select v-model="AddTeacher.educational" placeholder="请选择">
            <el-option v-for="item in select.educational" :key="item.value" :value="item.value" :label="item.label"></el-option>
          </el-select>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">职工号：</label>
          <el-input v-model="AddTeacher.teaNum" placeholder="请输入职工号"></el-input>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">授课方向：</label>
          <el-input v-model="AddTeacher.course" placeholder="请输入授课方向"></el-input>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">职称：</label>
          <el-input v-model="AddTeacher.jobTitile" placeholder="请输入职称"></el-input>
        </el-col>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="NewTeacher = false,AddTeacherEve()">提 交</el-button>
          <el-button @click="NewTeacher = false">取 消</el-button>
        </span>
      </el-dialog>
    </div>

    <!-- --------------------  修改老师 弹出组件 ------------------ -->
    <div class="New_box">
      <el-dialog
        title
        :visible.sync="SetTeacher"
        width="30%"
        center
        :modal-append-to-body="false"
        :close-on-click-modal="false"
      >
        <i></i>
        <span>修改教师</span>
        <i></i>
        <el-col :span="24" style="margin-top:30px;">
          <label style="text-align:center;">
            <span style="color:red;">*</span>选择院系：
          </label>
          <el-select v-model="SetTeacherData.depId" placeholder="请选择">
            <el-option
            v-for="item in depIds"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
          </el-select>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">
            <span style="color:red;">*</span>姓名：
          </label>
          <el-input v-model="SetTeacherData.teacherName" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">
            <span style="color:red;">*</span>性别：
          </label>
          <div class="radio_box">
            <el-radio v-model="SetTeacherData.gender" label="0">男</el-radio>
            <el-radio v-model="SetTeacherData.gender" label="1">女</el-radio>
          </div>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">学历：</label>
          <el-select v-model="SetTeacherData.educational" placeholder="请选择">
            <el-option v-for="item in select.educational" :key="item.value" :value="item.value" :label="item.label"></el-option>
          </el-select>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">职工号：</label>
          <el-input v-model="SetTeacherData.teaNum" placeholder="请输入职工号"></el-input>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">授课方向：</label>
          <el-input v-model="SetTeacherData.course" placeholder="请输入授课方向"></el-input>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">职称：</label>
          <el-input v-model="SetTeacherData.jobTitile" placeholder="请输入职称"></el-input>
        </el-col>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="SetTeacher = false,SubTeacherEve()">提 交</el-button>
          <el-button @click="SetTeacher = false">取 消</el-button>
        </span>
      </el-dialog>
    </div>
    <!-- --------------------  表格 角色设置 弹出组件 ------------------ -->
    <div class="Use_box Use-tableBox">
      <el-dialog
        title="角色设置"
        :visible.sync="TabUseSet"
        :modal-append-to-body="false"
        :close-on-click-modal="false"
      >
        <el-table :data="tableDatas" style="width: 100%">
          <el-table-column label="系统名称" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="角色名称" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button
                type="info"
                style="padding:2px 10px"
                @click="handleDelete(scope.$index, scope.row)"
              >修改</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-col :span="24" style="text-align:left;padding-top:8px;padding-left:10px;">
          <a
            href="javascript:;"
            style="font-size:30px;color:#53cac3"
            @click.prevent="UseSet = true"
          >
            <i class="el-icon-circle-plus-outline" style="font-size:30px;color:#53cac3"></i>
            <span style="font-size:15px;margin-left:15px;">新增角色</span>
          </a>
        </el-col>
      </el-dialog>
    </div>

    <!-- --------------------  按钮 角色设置 弹出组件 ------------------ -->
    <div class="Use_box">
      <el-dialog
        title="角色设置"
        :visible.sync="UseSet"
        :modal-append-to-body="false"
        :close-on-click-modal="false"
      >
        <el-form :model="form">
          <el-form-item label="选择系统" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择角色" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="Ends = true">确 定</el-button>
          <el-button @click="UseSet = false">取 消</el-button>
        </div>
      </el-dialog>
    </div>

    <!-- --------------------  二次确认 弹出组件 ------------------ -->
    <div class="Use_box">
      <el-dialog
        title="提示"
        :visible.sync="Ends"
        :modal-append-to-body="false"
        :close-on-click-modal="false"
      >
        <p>角色修改后，之前角色产生的历史数据不会保存，请确认后再进行修改</p>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="Ends = false,UseSet=false">确 定</el-button>
          <el-button @click="Ends = false">取 消</el-button>
        </div>
      </el-dialog>
    </div>
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
      pagetitle: "老师管理", //页面标题
      NewTeacher: false, //新增老师弹框
      SetTeacher: false, //修改老师弹框
      TabUseSet: false, //表格 角色设置弹框
      UseSet: false, //按钮 角色设置弹框
      Ends: false, //二次确认
      total: 0,
      radio: "1", //性别选择
      GetTeacherDate: [], //教师列表数据
      depIds: [], //获取院系数据
      Search: {
        depId: "", //筛选>院系ID
        professionalId: "", //筛选>专业DI
        pageNum: "1", //请求页码
        pageSize: "8" //每页条数
      },
      AddTeacher:{},//新增老师
      SetTeacherData:{//修改老师
        id:"",
        depId:"",
        teaNum:"",
        teacherName:"",
        gender:"",
        educational:"",
        course:"",
        jobTitile:""
      },
      select:{
        status:[],  //状态
        educational:[], //专业
        sysFlag:[],//老师角色
      },
      tableDatas: [
        {
          date: "实验室系统1",
          name: "院系管理员a"
        },
        {
          date: "实验室系统2",
          name: "院系管理员b"
        },
        {
          date: "实验室系统3",
          name: "院系管理员c"
        }
      ],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  watch: {
    Search: {
      //监听Search变化
      handler(newval, oldval) {
        this.GetTeacherEve();
      },
      deep: true
    }
  },
  created: function() {
    this.GetTeacherEve(); //获取老师列表
    this.GetdepId(); //获取院系列表信息
    this.Getselect();//获取状态下拉框内容
  },
  computed: {},
  methods: {
    GetTeacherEve() {
      //获取列表
      let $_this = this;
      post({
        url: "cms/teacher/queryTeacherPageBycondition",
        data: $_this.Search,
        IS:false
      }).then(res => {
        console.log(res.data.list);
        $_this.GetTeacherDate = res.data.list;
        $_this.total = res.data.total;
      });
    },
    AddTeacherEve(){
      //增加老师
      let $_this = this;
      post({
        url:"cms/teacher/addTeacher",
        data:$_this.AddTeacher
      }).then(res=>{
        $_this.GetTeacherEve()
      })
    },
    SetTeacherEve(index,row){
      //修改老师
        this.SetTeacherData.id = row.id
        this.SetTeacherData.teaNum = row.teaNum
        this.SetTeacherData.depId = row.depId
        this.SetTeacherData.teacherName = row.teacherName
        this.SetTeacherData.gender = row.gender
        this.SetTeacherData.educational = row.educational
        this.SetTeacherData.course = row.course
        this.SetTeacherData.jobTitile = row.jobTitile
        console.log("----")
        console.log(this.SetTeacherData)
    },
    SubTeacherEve(){
      //提交修改老师
      let  $_this = this;
      post({
        url:"cms/teacher/updateTeacher",
        data:$_this.SetTeacherData
      }).then(()=>{
        $_this.GetTeacherEve();
      })

    },
    Delete(index, row) {
      let $_this = this;
      let id = row.id;
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          post({
            url: "cms/teacher/deleteTeacher",
            data: { id }
          }).then(res => {
            $_this.GetTeacherEve();
            console.log(res);
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
      //获取院系列表
      let $_this = this;
      if ($_this.depIds == "") {
        //首先判断是否为空，若不判断会触发多此请求
        post({
          url: "cms/department/queryDeptList", //获取院系下拉列表
          data: {},
          IS:false
        }).then(response => {
          console.log(response.data.list);
          if (response.status == 200 && response.data.code == "0000") {
            response.data.list.forEach(element => {
              $_this.depIds.push({ value: element.id, label: element.depName });
            });
          }
        });
      }
    },
    Getselect(){
      //获取下拉框菜单
      getselect({
        type:["status","educational","sysFlag"],
        sign:this
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
    handleDelete(index, row) {
      console.log(index, row);
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
  box-sizing: border-box;
  padding: 10px ;
  background: rgb(242, 242, 242);
}
.select_box .el-input,
.el-select {
  margin: 5px;
}
.col-title {
  width: 95%;
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
.New_box .el-dialog i {
  display: inline-block;
  width: 30%;
  height: 2px;
  margin: 0 15px 6px 15px;
  background: rgb(235, 235, 235);
}
/* .el-dialog .el-col{
    margin: 5px 0;
} */
.New_box .el-dialog span {
  font-size: 16px;
  font-weight: bold;
}
.New_box .el-dialog .el-input,
.New_box .el-dialog .el-select {
  width: 72%;
  margin: 5px 0;
}
.New_box .radio_box {
  display: inline-block;
  text-align: left;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  height: 25px;
  margin: 5px 0;
  width: 72%;
  padding-top: 15px;
}
.New_box .el-dialog label {
  width: 85px !important;
  margin-right: 10px !important;
  text-align: right !important;
}
.New_box .radio_box .el-radio {
  text-align: center !important;
}
</style>