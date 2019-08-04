<!-- 组件说明 -->
<template>
  <div class="UseAdmin">
    <Soso :pagetitle="pagetitle"></Soso>
    <el-row class="mb20 ml20">
      <el-button type="success" plain @click="centerDialogVisible = true">新增班级</el-button>
    </el-row>
    <div class="select_box ml20">
      <el-col :span="8">
        <label>院系：</label>
        <el-select v-model="Search.deptId" placeholder="请选择" @change="GetprofessionalId(Search.deptId)">
          <el-option v-for="item in depIds" :key="item.value" :value="item.value" :label="item.label"></el-option>
        </el-select>
      </el-col>

      <el-col :span="8">
        <label>专业：</label>
        <el-select v-model="Search.professionalId" placeholder="请选择" >
          <el-option v-for="item in professionalIds" :key="item.value" :value="item.value" :label="item.label"></el-option>
        </el-select>
      </el-col>

      <el-col :span="8">
        <label>年级：</label>
        <el-select v-model="Search.grade" placeholder="请选择" >
          <el-option v-for="item in select.grade" :key="item.value" :value="item.value" :label="item.label"></el-option>
        </el-select>
      </el-col>
    </div>

    <!-- 表格 -->
    <el-table
      :data="ClassData"
      style="width: 95%"
      :header-cell-style="{
    'background-color': 'rgb(242,242,242)',
    'color': '#555555',
    'border-bottom': '1px #e6e6e6 solid'
}"
      class="ml20"
    >
      <el-table-column prop="className" label="班级" width="180" align="center"></el-table-column>
      <el-table-column prop="grade" label="年级" align="center"></el-table-column>
      <el-table-column prop="professionalName" label="专业" align="center"></el-table-column>
      <el-table-column prop="depName" label="学院" align="center"></el-table-column>
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
      <span>新增班级</span>
      <i></i>
      <el-col :span="24" style="margin-top:30px;">
        <label style="text-align:center;">
          <span style="color:red;">*</span>院系：
        </label>
        <el-select
          v-model="AddClass.depId"
          placeholder="请选择院系"
          @change="GetprofessionalId(AddClass.depId)"
        >
          <el-option
            v-for="item in depIds"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="24">
        <label style="text-align:center;">
          <span style="color:red">*</span>专业：
        </label>
        <el-select
          v-model="AddClass.professionalId"
          placeholder="请选择专业"
        >
          <el-option
            v-for="item in professionalIds"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="24">
        <label style="text-align:center;">
          <span style="color:red;">*</span>年级：
        </label>
        <el-select v-model="AddClass.grade" placeholder="请选择年级">
          <el-option
            v-for="item in select.grade"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="24">
        <label style="text-align:center;">
          <span style="color:red;">*</span>班级：
        </label>
        <el-input v-model="AddClass.className" placeholder="请输入新增班级"></el-input>
      </el-col>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false,AddClassEve()">确 定</el-button>
        <el-button @click="centerDialogVisible = false">取 消</el-button>
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
      value: "", //测试
      pagetitle: "班级管理", //页面标题
      ClassData: [], //班级数据
      depIds: [], //下拉>院系
      professionalIds: [], //下拉>年级
      grades: [], //下拉>年级
      total: 0,
      AddClass: {
        depId: "", //院系Id
        professionalId: "", //专业Id
        className: "" //班级名称
      },
      select:{
        all:[],//全部
        grade: [], //年级
      },
      Search: {
        deptId:"",//筛选>院系ID
        professionalId:"",//筛选>专业DI
        pageNum: "1", //请求页码
        pageSize: "8", //每页条数
        name: "", // 用户姓名>查询
      },
      centerDialogVisible: false //重要 弹出组件
    };
  },
   watch: {
    Search: {
      //监听Search变化
      handler(newval, oldval) {
        this.GetClassData();
      },
      deep: true
    }
  },
  created() {
    this.GetClassData(); //获取班级数据
    this.GetdepId(); //获取新增列表院系
    this.GetdepIdS();//获取筛选列表院系
    this.Getgrade();//获取年级下拉列表

  },
  computed: {},
  methods: {
    GetClassData() {
      //获取班级数据
      let $_this = this;
      post({
        url: "cms/deptClass/queryClassPageBycondition",
        data: $_this.Search,
        IS:false
      }).then(response => {
        if (response.status == 200) {
          $_this.total = response.data.total;
          $_this.ClassData = response.data.list;
          console.log(response.data.list);
        }
      });
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
            url: "cms/deptClass/deleteClass",
            data: { id }
          }).then(res => {
            $_this.GetClassData();
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
      //获取院系
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
    GetdepIdS(){
      // let $_this = this;
      // post({
      //   url:"cms/deptClass/queryClassPageBycondition",
      //   data:{}
      // }).then(res=>{
      //   let DataList = res.data.list;
      //   DataList.forEach(element=>{
      //     console.log(element.depName)
      //   })
      //   // console.log(res.data.list.depName)
      // })
    },
    GetprofessionalId(depId) {
      //获取专业
      let $_this = this;
      $_this.professionalIds = []; //选择院系的时候清空专业
      $_this.AddClass.professionalId = "";
      $_this.Search.professionalId = "";

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
      let $_this = this
      //获取年级
      if(this.select.grade == false && this.select.all == false){
      getselect({
        type:["grade"],
        sign:this
      })
         console.log($_this.select)
      }
    }, 
    AddClassEve() {
      let $_this = this;
      post({
        url: "cms/deptClass/addClass",
        data: $_this.AddClass
      });
      $_this.GetClassData();
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
      console.log(this.depIds);
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