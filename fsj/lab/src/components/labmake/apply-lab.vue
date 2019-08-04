<!-- 组件说明 -->
<template>
  <div class="apply m20">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="path-box">
      <el-breadcrumb-item :to="{ path: '/Labmake' }">实验室建设</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/ApplyLab' }">拟建实验室基本信息</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- ================ -->
    <el-form :model="Data" :rules="rules" ref="Data" label-position="left" label-width="130px">
      <el-form-item label="实验室名称：" prop="labName">
        <el-input placeholder="请输入名称" v-model="Data.labName" clearable></el-input>
      </el-form-item>
      <el-form-item label="实验室编号：" prop="labCode">
        <el-input placeholder="请输入编号" v-model="Data.labCode" clearable></el-input>
      </el-form-item>

      <el-form-item label="面向院系专业：">
        <el-col :span="22">
          <el-tag
            closable
            type="success"
            v-for="item in Tabcont"
            :key="item.id"
            @close="Deletetag(item)"
            style="margin:5px 10px;"
          >{{item.depName +" "+ item.proName }}</el-tag>
          <div class="add-box">
            <span style="color:#67c23a" @click="major = true">
              添加
              <i class="el-icon-circle-plus-outline"></i>
            </span>
          </div>
        </el-col>
      </el-form-item>

      <el-form-item label="计划开设实验项目(个)：" class="item-one">
        <el-col :span="22">
          <el-input placeholder="请输入个数" v-model="Data.labProjectPlan" clearable></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="实验室类型：">
        <el-select v-model="Data.useType" clearable placeholder="请选择" class="select-last">
          <el-option
            v-for="item in select.useType"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="实验室性质：">
        <el-select v-model="Data.nature" clearable placeholder="请选择" class="select-last">
          <el-option
            v-for="item in select.nature"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="实验室仪器：">
        <table>
          <tbody>
            <tr>
              <th>仪器名称</th>
              <th>单价</th>
              <th>数量</th>
              <th>总价</th>
            </tr>
            <tr v-for="items in Data.buildList" :key="items.id">
              <td>
                <el-input placeholder="请输入名称" v-model="items.name" clearable></el-input>
              </td>
              <td>
                <el-input placeholder="请输入单价" v-model="items.unitPrice" clearable @input="Count()"></el-input>
              </td>
              <td>
                <el-input placeholder="请输入数量" v-model="items.number" clearable @input="Count()"></el-input>
              </td>
              <td style="padding-left:30px;">
                <el-tag type="success">{{ items.endnum }}</el-tag>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr rowspan="4">
              <td colspan="4">
                <span class="add-img el-icon-circle-plus-outline" @click="add_apply()"></span>
              </td>
            </tr>
          </tfoot>
        </table>
      </el-form-item>
      <el-form-item label="申请理由：">
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="Data.appliReason"></el-input>
      </el-form-item>

      <el-form-item label="申请资料：">
        <el-upload
          class="upload-demo"
          action="api/fileService/fileService/upload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :data="newdata"
          :headers="myHeader"
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
          :before-upload="beforeUpload"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>

      <el-form-item label="审批人：">
        <el-col :span="20" class="person-left">
          <div class="person-right" v-for="item in GetTear" :key="item.id">
            <div class="person-img"></div>
            <span>{{item.teacherName}}</span>
          </div>
          <div class="add-person">
            ......
            <i
              class="add-data el-icon-circle-plus-outline"
              style="font-size:30px;cursor: pointer;"
              @click="person=true"
            ></i>
          </div>
        </el-col>
      </el-form-item>
      <el-form-item class="submit-box">
        <el-button type="primary" @click="Submit('Data')">提交</el-button>
        <el-button type="danger" @click="$router.push('/Labmake')">取消</el-button>
      </el-form-item>
    </el-form>
    <!-- ------------------------ 弹出组件 ---------------------------------- -->
    <el-dialog
      title="选择专业"
      :visible.sync="major"
      width="35%"
      top="200px"
      :close-on-click-modal="false"
      :modal-append-to-body="false"
      class="add-major"
    >
      <el-tabs
        tabPosition="left"
        style="height: auto"
        @tab-click="GetCrea(select.school[activeName])"
        v-model="activeName"
      >
        <el-tab-pane
          v-for="item in select.school"
          :key="item.id"
          :label="item.depName"
          :id="item.id"
          :disabled="ISdisabled"
        >
          <el-checkbox-group v-model="checkList">
            <el-checkbox
              v-for="item in select.area"
              :key="item.id"
              :label="item.id"
            >{{item.proName}}</el-checkbox>
          </el-checkbox-group>
        </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="major = false">取 消</el-button>
        <el-button type="primary" @click="major = false,set()">确 定</el-button>
      </span>
    </el-dialog>

    <!-- ------------------------ 选择审批人 ---------------------------------- -->
    <el-dialog
      title="选择审批人"
      :visible.sync="person"
      width="35%"
      top="200px"
      :close-on-click-modal="false"
      :modal-append-to-body="false"
      class="add-major"
    >
      <el-tabs
        tabPosition="left"
        style="height: auto"
        @tab-click="GetTeacher(select.school[activeName])"
        v-model="activeName"
      >
        <el-tab-pane
          v-for="item in select.school"
          :key="item.id"
          :label="item.depName"
          :id="item.id"
          :disabled="ISGetTear"
        >
          <el-checkbox-group v-model="checkTeacher">
            <el-checkbox
              v-for="item in select.Teacher"
              :key="item.id"
              :label="item.id"
              :value="item.teacherName"
            >{{item.teacherName}}</el-checkbox>
          </el-checkbox-group>
        </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="person = false">取 消</el-button>
        <el-button type="primary" @click="person = false,setTeacher()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { post } from "../../request";
import { getselect } from "../../getselect";
import { ArrSet } from "../../ArrSet";
export default {
  components: {},
  data() {
    return {
      fileList: [],
      newdata: {serviceId:""},
      activeName: 0,
      checkList: [], //选择的专业数据
      checkTeacher: [], //选择的老师数据
      Tabcont: [], //已创建专业
      GetTear: [], //已创建审批人
      ISdisabled: false, //是否禁用院系
      ISGetTear: false, //是否禁用老师
      major: false, //重要 是否弹出对话框
      person: false, //重要 是否弹出对话框
      Data: {
        labName: "",
        deptId: [], //院系ID
        professionalId: [], //专业ID
        approvalMan: [], //审批人
        buildList: [
          {
            unitPrice: "",
            number: "",
            endnum: ""
          }
        ] //仪器
      }, //提交数据,
      select: {
        school: [],
        area: [],
        Teacher: [],
        useType: [],
        nature: []
      },
      rules: {
        labName: [
          { required: true, message: "请输入实验室名称", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" }
        ],
        labCode: [
          { required: true, message: "请输入实验室编号", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" }
        ]
      }
    };
  },
  watch: {
    checkList: {
      //监听选择变化
      handler(newval, oldval) {
        this.Setdisabled();
      },
      deep: true
    },
    checkTeacher: {
      //监听选择变化
      handler(newval, oldval) {
        this.SetGetTear();
      },
      deep: true
    },
    Data: {
      //监听选择变化
      handler(newval, oldval) {
        this.SetGetTear();
      },
      deep: true
    }
  },
  created() {
    this.getchool();
    this.Getselect();
    this.Count(); //计算总价
    this.myHeader(); //设置请求头
  },
  mounted() {},
  computed: {
    myHeader() {
      return {
        token: window.localStorage.getItem("token"),
        authorId: window.localStorage.getItem("authorId")
      };
    }
  },
  methods: {
    add_apply() {
      //添加仪器
      this.Data.buildList.push({});
    },
    getchool() {
      //获取院系
      if (this.select.school.length != 0) {
        return;
      }
      post({
        url: "cms/department/queryDeptList",
        data: {},
        IS: false
      }).then(res => {
        this.select.school = res.data.list;
        this.GetCrea(this.select.school[0]);
        this.GetTeacher(this.select.school[0]);
      });
    },
    GetCrea(data) {
      //获取专业
      let id = data.id;
      post({
        url: "cms/professional/queryProfListBycondition",
        data: { depId: id },
        IS: false
      }).then(res => {
        this.select.area = res.data.list;
      });
    },
    GetTeacher(data) {
      //获取老师
      let id = data.id;
      post({
        url: "cms/teacher/queryTeacherPageBycondition",
        data: { depId: id },
        IS: false
      }).then(res => {
        this.select.Teacher = res.data.list;
      });
    },
    set() {
      //选择完毕 - 创建标签
      this.Tabcont = [];
      this.Data.deptId = [];
      this.Data.professionalId = [];
      this.checkList.forEach(element => {
        let id = element;
        post({
          url: "cms/professional/queryProfById",
          data: { id },
          IS: false
        }).then(res => {
          let data = res.data.professional;
          console.log(data);
          this.Tabcont.push({
            id: element,
            depId: data.depId,
            depName: data.depName,
            proName: data.proName
          });
          this.Data.deptId.push(data.depId);
          this.Data.professionalId.push(element);
        });
      });
    },
    setTeacher() {
      //选择完毕 - 创建头像
      this.GetTear = [];
      this.checkTeacher.forEach(element => {
        let id = element;
        post({
          url: "cms/teacher/queryTeacherById",
          data: { id },
          IS: false
        }).then(res => {
          console.log("++++=");
          console.log(res);
          let data = res.data.objectResult;
          console.log(data);
          this.GetTear.push({
            id: element,
            teacherName: data.teacherName
          });
          this.Data.approvalMan.push(element);
        });
      });
    },
    Deletetag(item) {
      //删除标签
      this.Tabcont.forEach((element, index) => {
        if (element.id == item.id) {
          this.Tabcont.splice(index, 1);
          this.checkList.splice(index, 1);
          this.Data.deptId.splice(index, 1);
          this.Data.professionalId.splice(index, 1);
        }
      });
    },
    Getselect() {
      //获取下拉框菜单
      getselect({
        type: ["useType", "nature"],
        sign: this
      });
    },
    Submit(Data) {
      this.$refs[Data].validate(valid => {
        if (valid) {
          const deptId = this.Data.deptId;
          const professionalId = this.Data.professionalId;
          const approvalMan = this.Data.approvalMan;
          if (deptId.length == 0) {
            this.$message({
              message: "警告哦，院系/专业必须选择！",
              type: "warning"
            });
            return;
          } else if (approvalMan.length == 0) {
            this.$message({
              message: "警告哦，审批人必须选择！",
              type: "warning"
            });
            return;
          }
          this.Data.deptId = ArrSet(this.Data.deptId).join(",");
          this.Data.professionalId = this.Data.professionalId.join(",");
          post({
            url: "laboratory/labBuilding/insert",
            data: this.Data
          }).then(res => {
            this.Data.deptId = deptId;
            this.Data.professionalId = professionalId;
            if (res.data.code == "0000") {
              this.$router.push("/Labmake");
            }
          });
        } else {
          return false;
        }
      });
    },
    Setdisabled() {
      //判断是否禁用面向转专业
      console.log(this.checkList.length);
      if (this.checkList.length != 0) {
        this.ISdisabled = true;
      } else {
        this.ISdisabled = false;
      }
    },
    SetGetTear() {
      //判断是否禁用审批人
      if (this.checkTeacher.length != 0) {
        this.ISGetTear = true;
      } else {
        this.ISGetTear = false;
      }
    },
    Count() {
      //计算仪器价格
      var data = this.Data.buildList;
      data.forEach((element, index) => {
        element.endnum = element.number * element.unitPrice;
      });
    },
    // -------- 上传 --
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    beforeUpload(file) {
      // let fd = new FormData();
      // fd.append("file", file);
      // fd.append("serviceId","")
      // this.$axios({
      //   method:'post',
      //   url:"http://192.168.1.121:7002/youzhitu/fileService/fileService/upload",
      //   data:fd
      // }).then(res=>{
      //   console.log(res)
      // })
      // return false
    }
  }
};
</script>
<style scoped>
.apply {
  overflow: auto;
}
/* 面包屑 */
.path-box {
  width: 95%;
  display: block;
  margin-bottom: 50px;
  box-sizing: border-box;
  padding: 20px 40px 20px 20px;
  border-bottom: 1px solid #e6e6e6;
}
.el-input,
.el-select,
.el-textarea {
  width: 75%;
}
.el-col {
  margin-right: 30px;
  margin: 10px 0;
  overflow: hidden;
}
label {
  padding-top: 9px;
  margin-right: 10px;
  line-height: 20px;
  text-align: left;
  width: 100px;
  float: left;
}
/* 面向专业 */
.add-box {
  display: inline-block;
}
.add-box span {
  cursor: pointer;
  color: #67c23a;
}
.add-box i {
  color: #67c23a;
  font-size: 19px;
  margin-left: 3px;
  cursor: pointer;
}

/* 表格样式 */
table {
  width: 75%;
  /* float: left; */
}
table tr {
  transition: all 0.3s;
  border-bottom: 1px solid rgb(230, 230, 230);
}
table tr:hover {
  transition: all 0.3s;
  background: #f2f2f2;
}
table th {
  padding: 9px 30px;
  line-height: 30px;
  text-align: left;
  width: 20%;
  background: #f2f2f2;
}
table td {
  padding: 9px 15px;
}
table .el-input {
  width: 100%;
}
tfoot {
  text-align: center;
  background: #f2f2f2;
}
tfoot td {
  padding: 0;
}
/* 添加按钮 */
.add-img {
  width: 15px;
  color: #67c23a;
  padding: 2px 0px;
  font-size: 22px;
  cursor: pointer;
}

/* 文本框样式 */
.text-box {
  width: 100%;
  margin-top: 20px;
}
.textarea-box {
  width: 860px;
  display: inline-block;
}
.add-data {
  padding-top: 10px;
  font-size: 22px;
  color: #67c23a;
}
/* 审批人 */
.person-right {
  width: 60px;
  height: 100px;
  display: inline-block;
  margin-right: 15px;
  text-align: center;
  /* background: rebeccapurple; */
}
.person-img {
  width: 100%;
  height: 60px;
  margin-bottom: 15px;
  border-radius: 50%;
  background: #666;
}
.person-right span {
  color: #666;
}
.add-person {
  display: inline;
}

/* 取消 提交 */
.submit-box {
  text-align: center;
  margin-left: -15%;
}
.submit-box .el-button {
  width: 100px;
  margin: 0 30px;
}
/* 选择专业插件 */
.el-tabs__content .el-checkbox {
  margin-right: 10%;
  margin-left: 10%;
}
.el-tabs__nav .is-active {
  background: red !important;
}
.el-col {
  margin: 0px;
}
</style>  
