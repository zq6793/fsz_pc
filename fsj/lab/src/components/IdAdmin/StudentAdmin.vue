<!-- 组件说明 -->
<template>
  <div class="UseAdmin">
    <Soso :pagetitle="pagetitle"></Soso>
    <el-col class="mb20 ml20 col-title">
      <el-button type="success" plain @click="NewTeacher = true">新增学生</el-button>
    </el-col>
    <div class="select_box ml20">
      <el-col :span="8">
        <label>院系：</label>
            
        <el-select v-model="Search.depId" placeholder="请选择" @change="GetprofessionalId(Search.depId)">
          <el-option
            v-for="item in depIds"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          ></el-option>
        </el-select>
      </el-col>

      <el-col :span="8">
        <label>专业：</label>
        <el-select v-model="Search.proId" placeholder="请选择">
           <el-option  v-for="item in professionalIds"
            :key="item.value"
            :value="item.value"
            :label="item.label"></el-option>
        </el-select>
      </el-col>
      
      <el-col :span="8">
        <label>年级：</label>
        <el-select v-model="Search.grade" placeholder="请选择" @change="GetClass_Search()">
          <el-option  v-for="item in select.grade"
            :key="item.value"
            :value="item.value"
            :label="item.label"></el-option>
        </el-select>
      </el-col>


      <el-col :span="8">
        <label>班级：</label>
        <el-select v-model="Search.classId" placeholder="请选择">
          <el-option  v-for="item in className"
            :key="item.value"
            :value="item.value"
            :label="item.label"></el-option>
        </el-select>
      </el-col>

      <el-col :span="8">
        <label>状态：</label>
        <el-select v-model="Search.status" placeholder="请选择">
          <el-option v-for="item in select.status" :key="item.value" :value="item.value" :label="item.label"></el-option>
        </el-select>
      </el-col>

      <el-col :span="8">
        <label>选择系统：</label>
        <el-select v-model="value" placeholder="请选择"></el-select>
      </el-col>
    </div>

    <!-- 表格 -->
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 95%"
      @selection-change="handleSelectionChange"
      class="ml20"
    >
      <el-table-column type="selection" width="35"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="depName" label="院系"></el-table-column>
      <el-table-column prop="professionalName" label="专业"></el-table-column>
      <el-table-column prop="stuNum" label="学号"></el-table-column>
      <el-table-column prop="phone" label="手机号"></el-table-column>
      <el-table-column label="账号状态" width="100">
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
          <!-- <a class="a-active" href="javascript:;" @click.prevent="TabUseSet = true">
            <i class="el-icon-s-check"></i> 角色设置
          </a>-->
          <a
            class="a-active"
            href="javascript:;"
            @click.prevent="SetTeacher = true,SetStudent(scope.$index,scope.row)"
          >
            <i class="el-icon-s-tools"></i> 修改
          </a>
          <!-- <a class="a-active" href="javascript:;">
            <i class="el-icon-s-release"></i> 冻结
          </a>-->
          <a class="a-active" href="javascript:;" @click="Delete(scope.$index,scope.row)">
            <i class="el-icon-delete-solid"></i> 删除
          </a>
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-col :span="24" style="margin:5px 20px">
      <el-button type="success" plain @click="UseSet = true">角色设置</el-button>
    </el-col>-->
    <Paging @ChildEachPage="ChildEachPage" @ChildNowPage="ChildNowPage" :total="total"></Paging>
    <!-- --------------------  新增学生 弹出组件 ------------------ -->
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
        <span>新增学生</span>
        <i></i>
        <el-col :span="24" style="margin-top:20px;">
          <label style="text-align:center;">
            <span style="color:red;">*</span>姓名：
          </label>
          <el-input v-model="AddStudent.name" placeholder="请输入姓名"></el-input>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">
            <span style="color:red;">*</span>性别：
          </label>
          <div class="radio_box">
            <el-radio v-model="AddStudent.gender" label="0">男</el-radio>
            <el-radio v-model="AddStudent.gender" label="1">女</el-radio>
          </div>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">
            <span style="color:red;">*</span>学院：
          </label>
          <el-select
            v-model="AddStudent.depId"
            placeholder="请选择院系"
            @change="GetprofessionalId(AddStudent.depId)"
          >
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
            <span style="color:red;">*</span>专业：
          </label>
          <el-select v-model="AddStudent.proId" placeholder="请选择专业" @change="Setcontent()">
            <el-option
              v-for="item in professionalIds"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">
            <span style="color:red;">*</span>年级：
          </label>
          <el-select v-model="AddStudent.grade" placeholder="请选择年级" @change="GetClass()">
            <el-option
              v-for="item in select.grade"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">
            <span style="color:red;">*</span>班级：
          </label>
          <el-select v-model="AddStudent.classId" placeholder="请选择班级">
            <el-option
              v-for="item in className"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">
            <span style="color:red;">*</span>学号：
          </label>
          <el-input v-model="AddStudent.stuNum" placeholder="请输入学号"></el-input>
        </el-col>
        <!-- <el-col :span="24">
          <label style="text-align:center;"><span style="color:red;">*</span>账号：</label>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">密码：</label>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-col>-->
        <el-col :span="24">
          <label style="text-align:center;">手机号码：</label>
          <el-input v-model="AddStudent.phone" placeholder="请输入手机号码"></el-input>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">身份证号码：</label>
          <el-input v-model="AddStudent.identification" placeholder="请输入身份证号码"></el-input>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">家长姓名：</label>
          <el-input v-model="AddStudent.parentName" placeholder="请输入家长姓名"></el-input>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">家长手机：</label>
          <el-input v-model="AddStudent.parentPhone" placeholder="请输入家长手机号"></el-input>
        </el-col>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="NewTeacher = false,AddStudenteve()">提 交</el-button>
          <el-button @click="NewTeacher = false">取 消</el-button>
        </span>
      </el-dialog>
    </div>

    <!-- --------------------  修改学生 修改组件 ------------------ -->
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
        <span>修改学生</span>
        <i></i>
        <el-col :span="24" style="margin-top:20px;">
          <label style="text-align:center;">
            <span style="color:red;">*</span>姓名：
          </label>
          <el-input v-model="SetStudentData.name" placeholder="请输入姓名"></el-input>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">
            <span style="color:red;">*</span>性别：
          </label>
          <div class="radio_box">
            <el-radio v-model="SetStudentData.gender" label="0">男</el-radio>
            <el-radio v-model="SetStudentData.gender" label="1">女</el-radio>
          </div>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">
            <span style="color:red;">*</span>学院：
          </label>
          <el-select
            v-model="SetStudentData.depId"
            placeholder="请选择院系"
            @change="GetprofessionalId(SetStudentData.depId)"
          >
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
            <span style="color:red;">*</span>专业：
          </label>
          <el-select v-model="SetStudentData.proId" placeholder="请选择专业" @change="Setcontent()">
            <el-option
              v-for="item in professionalIds"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">
            <span style="color:red;">*</span>年级：
          </label>
          <el-select v-model="SetStudentData.grade" placeholder="请选择年级" @change="GetClass_Set()">
            <el-option
              v-for="item in select.grade"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">
            <span style="color:red;">*</span>班级：
          </label>
          <el-select v-model="SetStudentData.classId" placeholder="请选择班级">
            <el-option
              v-for="item in className"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">
            <span style="color:red;">*</span>学号：
          </label>
          <el-input v-model="SetStudentData.stuNum" placeholder="请输入学号"></el-input>
        </el-col>
        <!-- <el-col :span="24">
          <label style="text-align:center;"><span style="color:red;">*</span>账号：</label>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">密码：</label>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-col>-->
        <el-col :span="24">
          <label style="text-align:center;">手机号码：</label>
          <el-input v-model="SetStudentData.phone" placeholder="请输入手机号码"></el-input>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">身份证号码：</label>
          <el-input v-model="SetStudentData.identification" placeholder="请输入身份证号码"></el-input>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">家长姓名：</label>
          <el-input v-model="SetStudentData.parentName" placeholder="请输入家长姓名"></el-input>
        </el-col>
        <el-col :span="24">
          <label style="text-align:center;">家长手机：</label>
          <el-input v-model="SetStudentData.parentPhone" placeholder="请输入家长手机号"></el-input>
        </el-col>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="SetTeacher = false,SetStudenteve()">提 交</el-button>
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
            <template slot-scope>
              <el-button type="info" style="padding:2px 10px" @click="UseSet = true">修改</el-button>
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
import { GetSchool } from "../../GetSchool";
import { getselect } from "../../getselect";

export default {
  components: {
    Soso,
    Paging
  },
  data() {
    return {
      pagetitle: "学生查看", //页面标题
      NewTeacher: false, //新增老师弹框
      SetTeacher: false, //修改老师弹框
      TabUseSet: false, //表格 角色设置弹框
      UseSet: false, //按钮 角色设置弹框
      Ends: false, //二次确认
      radio: "1", //性别选择
      total: 0,
      Search: {
        depId:"",//院系
        proId:"",//专业
        grade:"",//年级
        classId:"",//班级
        pageNum: "1", //请求页码
        pageSize: "8" //每页条数
      },
      AddStudent: {
        //添加学生
        proId: [], //专业 *必留
        classId: [] //班级 *必留
      },
      SetStudentData: {
        //修改学生数据
        id: "",
        classId: "",
        name: "",
        gender: "",
        stuNum: "",
        phone: "",
        identification: "",
        parentName: "",
        parentPhone: ""
      },
      depIds: [], //获取院系
      professionalIds: [], //获取专业
      select: {
        //获取年级级
        grade: [], //年级
        status:[],//状态
      },
      className: [], //班级
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
      formLabelWidth: "120px",
      tableData: [] //表格数据
    };
  },
  watch: {
    Search: {
      //监听Search变化
      handler(newval, oldval) {
        this.Getdata();
      },
      deep: true
    }
  },
  created() {
    this.Getdata(); //获取数据
    this.GetdepId(); //获取院系
    this.Getgrade(); //获取年级
  },
  computed: {},
  methods: {
    Delete(index, row) {
      //删除学生
      let $_this = this;
      let id = row.id;
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          post({
            url: "cms/student/deleteStudent",
            data: { id }
          }).then(res => {
            $_this.Getdata();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    AddStudenteve() {
      //添加学生
      let $_this = this;
      post({
        IS: true,
        url: "cms/student/addStudent",
        data: $_this.AddStudent
      }).then(res => {
        $_this.Getdata();
      });
    },
    Getdata() {
      //获取数据
      let $_this = this;
      post({
        url: "cms/student/queryStudentPageBycondition",
        data: $_this.Search,
        IS:false
      }).then(res => {
        console.log(res.data.list);
        $_this.tableData = res.data.list;
        $_this.total = res.data.total;

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
    Setcontent() {
      //清空班级
      this.AddStudent.grade = this.AddStudent.classId = "";
      this.SetStudentData.grade = this.SetStudentData.classId = "";
      this.className = [];
    },
    GetprofessionalId(depId) {
      //获取专业
      let $_this = this;
      $_this.professionalIds = []; //选择院系的时候清空专业
      $_this.className = []; //选择院系的时候清空班级
      $_this.AddStudent.proId = $_this.SetStudentData.proId = $_this.Search.proId = "";
      $_this.AddStudent.grade = $_this.AddStudent.grade = $_this.Search.grade = "";
      $_this.SetStudentData.classId = $_this.SetStudentData.classId = "";
      $_this.Search.classId = "";
      post({
        url: "cms/professional/queryProfListBycondition", //获取专业下拉列表
        data: { depId: depId },
        IS: false
      }).then(res => {
        console.log(res.data.list);
        res.data.list.forEach(element => {
          $_this.professionalIds.push({
            value: element.id,
            label: element.proName
          });
        });
      });
    },
    Getgrade() {
      //获取年级
      let $_this = this;
      $_this.AddStudent.classId = $_this.SetStudentData.classId = $_this.Search.classId = "";
      if (this.select.grade == false) {
        getselect({
          type: ["grade","status"],
          sign: this
        });
      }
    },
    GetClass() {
      //获取班级
      let $_this = this;
      $_this.className = [];
      $_this.AddStudent.classId = "";
      $_this.Search.classId = "";
      post({
        url: "cms/deptClass/queryClassListBycondition",
        data: {
          deptId: $_this.AddStudent.depId, //院系
          professionalId: $_this.AddStudent.proId, //专业
          grade: $_this.AddStudent.grade //年级
        },
        IS: false
      }).then(res => {
        res.data.list.forEach(element => {
          $_this.className.push({
            label: element.className,
            value: element.id
          });
        });
        console.log(res);
      });
    },
    GetClass_Set() {
      //获取班级
      let $_this = this;
      $_this.className = [];
      $_this.SetStudentData.classId = "";
      post({
        url: "cms/deptClass/queryClassListBycondition",
        data: {
          deptId: $_this.SetStudentData.depId, //院系
          professionalId: $_this.SetStudentData.proId, //专业
          grade: $_this.SetStudentData.grade //年级
        },
        IS: false
      }).then(res => {
        res.data.list.forEach(element => {
          $_this.className.push({
            label: element.className,
            value: element.id
          });
        });
        console.log(res);
      });
    },
    GetClass_Search() {
      //获取班级
      let $_this = this;
      $_this.className = [];
      $_this.AddStudent.classId = "";
      $_this.Search.classId = "";
      post({
        url: "cms/deptClass/queryClassListBycondition",
        data: {
          deptId: $_this.Search.depId, //院系
          professionalId: $_this.Search.proId, //专业
          grade: $_this.Search.grade //年级
        },
        IS: false
      }).then(res => {
        res.data.list.forEach(element => {
          $_this.className.push({
            label: element.className,
            value: element.id
          });
        });
        console.log(res);
      });
    },
    SetStudent(index, row) {
      //修改学生 获取数据
      this.SetStudentData.id = row.id;
      this.SetStudentData.name = row.name;
      this.SetStudentData.gender = row.gender;
      this.SetStudentData.stuNum = row.stuNum;
      this.SetStudentData.phone = row.phone;
      this.SetStudentData.identification = row.identification;
      this.SetStudentData.parentName = row.parentName;
      this.SetStudentData.parentPhone = row.parentPhone;
    },
    SetStudenteve() {
      //修改学生 提交数据
      let $_this = this;
      post({
        url: "cms/student/updateStudent",
        data: $_this.SetStudentData
      }).then(() => {
        $_this.Getdata();
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
  padding: 10px 0;
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