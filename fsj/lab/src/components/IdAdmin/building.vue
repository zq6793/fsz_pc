<!-- 组件说明 -->
<template>
  <div class="UseAdmin">
    <Soso :pagetitle="pagetitle"></Soso>
    <Search>
      <el-row style="margin-bottom:10px">
        <el-col :span="8">
          <el-form-item label="起始日期：">
            <el-select placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="结束日期：">
            <el-select placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="状态：">
            <el-select placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="状态：">
            <el-select placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </Search>
    <el-col :span="24" style="padding:20px">
      <el-button type="success" plain @click="adddialog = true">新增教室</el-button>
      <el-button type="success" plain @click="AddSchool = true,GetSchoolEve()">校区管理</el-button>
      <el-button type="success" plain @click="building = true,Getbuilding()">楼栋管理</el-button>
      <el-button type="success" plain @click="ClassAdmin = true,GetClassEve()">教室类型管理</el-button>
      <el-button
        style="float:right;margin-right:30px"
        type="success"
        plain
        @click="adddialog = true"
      >模板下载</el-button>
      <el-button style="float:right" type="success" plain @click="adddialog = true">导入</el-button>
    </el-col>

    <!-- 表格 -->
    <el-table
      :data="tableData"
      style="width: 95%"
      :header-cell-style="{
    'background-color': 'rgb(242,242,242)',
    'color': '#555555',
    'border-bottom': '1px #e6e6e6 solid'
}"
      class="ml20"
    >
      <el-table-column prop="areaName" label="校区" align="center"></el-table-column>
      <el-table-column prop="buildingName" label="楼栋" align="center"></el-table-column>
      <el-table-column prop="roomNum" label="教室" align="center"></el-table-column>
      <el-table-column prop="seating" label="座位数" align="center"></el-table-column>
      <el-table-column prop="roomType" label="教室类型" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <a class="a-active" href="javascript:;">
            <i class="i-2"></i> 编辑
          </a>
          <a class="a-active" href="javascript:;" @click="Delete(scope.$index,scope.row)">
            <i class="i-2"></i> 删除
          </a>
        </template>
      </el-table-column>
    </el-table>
    <Paging @ChildEachPage="ChildEachPage" @ChildNowPage="ChildNowPage" :total="total"></Paging>
    <!-- --------------------  新增弹框 ------------------ -->
    <el-dialog
      title
      :visible.sync="adddialog"
      width="30%"
      center
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <el-form :model="input" class="demo-form-inline">
        <i></i>
        <span>新增教室</span>
        <i></i>

        <el-col :span="24" style="margin-top:30px;">
          <label style="text-align:center;">校区：</label>
          <el-form-item>
            <el-select placeholder="请选择校区" v-model="AddData.areaId" @change="getBui(AddData.areaId)">
              <el-option
                v-for="item in select.school"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="24" style="margin-top:10px">
          <label style="text-align:center;">楼栋：</label>
          <el-form-item>
            <el-select placeholder="请选择楼栋" v-model="AddData.buildingId">
              <el-option v-for="item in select.building" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="24" style="margin-top:10px">
          <label style="text-align:center;">教室：</label>
          <el-form-item>
            <el-input clearable v-model="AddData.roomNum" placeholder="请输入教室编号"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="24" style="margin-top:10px">
          <label style="text-align:center;">座位数：</label>
          <el-form-item>
            <el-input clearable v-model="AddData.seating" placeholder="请输入座位数"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="24" style="margin-top:10px">
          <label style="text-align:center;">类型：</label>
          <el-form-item>
            <el-select placeholder="请选择类型" v-model="AddData.roomType">
              <el-option label="区域一" value="01"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="adddialog = false,Add()">确 定</el-button>
        <el-button @click="adddialog = false">取 消</el-button>
      </span>
    </el-dialog>

    <!-- ----------  校区管理  ----------------- -->
    <el-dialog
      title="校区管理"
      :visible.sync="AddSchool"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <el-table :data="SchoolData" v-loading="loading" height="250">
        <el-table-column property="areaName" label="校区"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <a
              class="a-active"
              href="javascript:;"
              @click.prevent="SetSchool(scope.$index,scope.row),Setschool = true"
            >
              <i class="el-icon-edit"></i>修改
            </a>
            <a
              class="a-active"
              href="javascript:;"
              @click.prevent="DelShool(scope.$index,scope.row)"
            >
              <i class="el-icon-delete"></i>删除
            </a>
          </template>
        </el-table-column>
      </el-table>
      <el-button
        type="success"
        plain
        size="mini"
        style="float:left;padding:8px;margin:8px 0 0 0 ;"
        @click="AddArea=true"
      >新增校区</el-button>
    </el-dialog>
    <!-- ----------  教室类型管理  ----------------- -->
    <el-dialog
      title="教室类型管理"
      :visible.sync="ClassAdmin"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <el-table :data="ClassData" v-loading="Classloading" height="250">
        <el-table-column property="roomType" label="教室类型"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <a
              class="a-active"
              href="javascript:;"
              @click.prevent="SetSchool(scope.$index,scope.row),Setschool = true"
            >
              <i class="el-icon-edit"></i>修改
            </a>
            <a
              class="a-active"
              href="javascript:;"
              @click.prevent="DelShool(scope.$index,scope.row)"
            >
              <i class="el-icon-delete"></i>删除
            </a>
          </template>
        </el-table-column>
      </el-table>
      <el-button
        type="success"
        plain
        size="mini"
        style="float:left;padding:8px;margin:8px 0 0 0 ;"
        @click="AddArea=true"
      >新增类型</el-button>
    </el-dialog>
    <!-- ----------  楼栋管理  ----------------- -->
    <div class="buildings">
      <el-dialog
        title="楼栋管理"
        :visible.sync="building"
        :modal-append-to-body="false"
        :close-on-click-modal="false"
      >
        <!-- 表格 -->
        <el-table
          class="table-data-box"
          :data="buildingData"
          style="width: 100%;"
          row-key="id"
          border
          lazy
          :load="load"
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
        >
          <el-table-column prop="areaName" label="校区" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <a
                class="a-active"
                href="javascript:;"
                v-if="scope.row.hasChildren!=true"
                @click.prevent="SetBuiding=true,SetBuildingEve(scope.$index,scope.row)"
              >
                <i class="i-3"></i> 修改
              </a>
              <a
                class="a-active"
                href="javascript:;"
                v-if="scope.row.hasChildren!=true"
                @click="DeleteBuildingEve(scope.$index,scope.row)"
              >
                <i class="i-3"></i> 删除
              </a>
            </template>
          </el-table-column>
        </el-table>

        <el-button
          type="success"
          plain
          size="mini"
          style="float:left;padding:8px;margin:8px 0 0 0 ;"
          @click="addBuilding=true"
        >新增楼栋</el-button>
      </el-dialog>
    </div>
    <!-- ----------------  修改校区  ----------------------- -->
    <el-dialog
      :visible.sync="Setschool"
      width="30%"
      center
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <el-form :model="SetschoolData" class="demo-form-inline">
        <i></i>
        <span>修改校区</span>
        <i></i>

        <el-col :span="24" style="margin-top:30px;">
          <label style="text-align:center;">校区：</label>
          <el-form-item>
            <el-input clearable v-model="SetschoolData.areaName" placeholder="请输入新的校区名称"></el-input>
          </el-form-item>
        </el-col>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="Setschool = false,SetSchoolEve()">确 定</el-button>
        <el-button @click="Setschool = false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- ----------------  修改楼栋  ----------------------- -->
    <el-dialog
      :visible.sync="SetBuiding"
      width="30%"
      center
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <el-form :model="SetBuidingData" class="demo-form-inline">
        <i></i>
        <span>修改楼栋</span>
        <i></i>

        <el-col :span="24" style="margin-top:30px;">
          <label style="text-align:center;">楼栋：</label>
          <el-form-item>
            <el-input clearable v-model="SetBuidingData.buildingName" placeholder="请输入新的楼栋名称"></el-input>
          </el-form-item>
        </el-col>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="SetBuiding = false,subBuiding()">确 定</el-button>
        <el-button @click="SetBuiding = false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- ----------------  新增校区  ----------------------- -->
    <el-dialog
      :visible.sync="AddArea"
      width="30%"
      center
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <el-form :model="SetschoolData" class="demo-form-inline">
        <i></i>
        <span>新增校区</span>
        <i></i>

        <el-col :span="24" style="margin-top:30px;">
          <label style="text-align:center;">校区：</label>
          <el-form-item>
            <el-input v-model="AddAreadata.areaName" clearable placeholder="请输入新的校区名称"></el-input>
          </el-form-item>
        </el-col>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="AddareaEve(),AddArea = false">确 定</el-button>
        <el-button @click="AddArea = false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- ----------------  新增楼栋  ----------------------- -->
    <el-dialog
      :visible.sync="addBuilding"
      width="30%"
      center
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <el-form :model="SetschoolData" class="demo-form-inline">
        <i></i>
        <span>新增楼栋</span>
        <i></i>

        <el-col :span="24" style="margin-top:30px;">
          <label style="text-align:center;">校区：</label>
          <el-form-item>
            <el-select placeholder="请选择校区" v-model="AddBui.areaId">
              <el-option
                v-for="item in select.school"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="24" style="margin-top:10px">
          <label style="text-align:center;">楼栋：</label>
          <el-form-item>
            <el-input v-model="AddBui.buildingName" clearable placeholder="请输入楼栋名称"></el-input>
          </el-form-item>
        </el-col>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="AddBuiEve(),addBuilding = false">确 定</el-button>
        <el-button @click="addBuilding = false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- ----------------  新增教室  ----------------------- -->
    <el-dialog
      :visible.sync="Addroom"
      width="30%"
      center
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <el-form :model="SetschoolData" class="demo-form-inline">
        <i></i>
        <span>新增教室类型</span>
        <i></i>

        <el-col :span="24" style="margin-top:30px;">
          <label style="text-align:center;">校教室类型：</label>
          <el-form-item>
            <el-input v-model="Addroomdata.areaName" clearable placeholder="请输入新的校区名称"></el-input>
          </el-form-item>
        </el-col>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="AddroomEve(),Addroom = false">确 定</el-button>
        <el-button @click="Addroom = false">取 消</el-button>
      </span>
    </el-dialog>

    <button @click="GetSchool()">打印</button>
  </div>
</template>

<script>
import Soso from "../common/soso";
import Paging from "../common/paging";
import Search from "../common/Search";
import { post } from "../../request";
import { getselect } from "../../getselect";

export default {
  components: {
    Soso,
    Paging,
    Search
  },
  data() {
    return {
      input: "",
      pagetitle: "学期课时设置", //页面标题
      tableData: null, //获取数据
      AddData: {
        buildingId:""
      }, //新增
      SchoolData: [], //校区数据
      buildingData: [], //楼栋数据
      ClassData: [], //教室数据
      SetschoolData: {
        //修改校区的数据
        areaName: "" //
      },
      SetBuidingData: {
        //修改楼栋的数据
        id: "",
        areaId: "",
        buildingName: ""
      },
      AddAreadata: {
        //新增校区数据
        areaName: "" //
      },
      AddBui: {
        //新增楼栋数据
        areaId: "", //
        buildingName: "" //楼栋名
      },
      Addroomdata: {
        //新增教室数据
        roomType: "" //
      },
      Search: {
        //分页
        pageNum: 1, //请求页码
        pageSize: 8 //每页条数
      },
      select: {
        //下拉框内容
        school: [], //学校下拉框
        building:[],//楼栋下拉框
      },
      total: 0, //总条数
      loading: true,
      Classloading: true,
      adddialog: false, //新增弹框
      AddSchool: false, //校区管理
      ClassAdmin: false, //教室管理
      building: false, //楼栋管理
      Setschool: false, //修改校区
      SetBuiding: false, //修改楼栋
      AddArea: false, //新增校区
      addBuilding: false, //新增楼栋
      Addroom: false //新增教室
    };
  },
  watch: {
    Search: {
      //监听分页变化
      handler(newval, oldval) {
        this.GetData();
      },
      deep: true
    }
  },
  created() {
    this.GetData(); //获取数据
    this.GetSchool(); //获取校区下拉框
    this.GetSbuilding(); //获取楼栋下拉框
  },
  computed: {},
  methods: {
    GetData() {
      //获取数据
      post({
        url: "cms/tmsClassroom/queryClassroomPageBycondition",
        data: this.Search
      }).then(res => {
        console.log(res)
        if (res.status == 200) {
          this.tableData = res.data.list;
          this.total = res.data.total;
        }
      });
    },
    Add() {
      //新增教室
      console.log(this.AddData);
      post({
        url: "cms/tmsClassroom/addClassroom",
        data: this.AddData
      }).then(() => {
        this.GetData();
      });
    },
    Delete(index, row) {
      //删除学期
      let id = row.id;
      post({
        url: "cms/tmsClassroom/deleteClassroom",
        data: { id }
      }).then(res => {
        this.GetData();
        console.log(res)
      });
    },
    GetSchool() {
      //获取校区下拉框
      if (this.select.school != "") {
        return;
      }
      post({
        url: "cms/area/queryAreaListBycondition",
        data: {},
        IS: false
      }).then(res => {
        if (res.data.code == "0000") {
          res.data.list.forEach(element => {
            this.select.school.push({
              value: element.id,
              label: element.areaName
            });
          });
        }
      });
    },
    getBui(o) {
      // 获取楼栋下拉框
      // if (this.select.building != "") {
      //   return;
      // }
      this.AddData.buildingId = ""
      this.select.building = []
      post({
        url:"cms/building/queryBuildListBycondition",
        data:{areaId:o},
        IS:false
      }).then(res=>{
        console.log(res)
        if (res.data.code == "0000") {
          res.data.list.forEach(element => {
            this.select.building.push({
              value: element.id,
              label: element.buildingName
            });
          });
        }
      })
    },
    GetSchoolEve() {
      // 获取校区最新数据
      post({
        url: "cms/area/queryAreaListBycondition",
        data: {},
        IS: false
      }).then(res => {
        if (res.status == 200) {
          this.SchoolData = res.data.list;
          this.loading = false;
        }
      });
    },
    GetClassEve() {
      // 获取校区最新数据
      post({
        url: "cms/tmsClassroom/queryClassroomPageBycondition",
        data: {},
        IS: false
      }).then(res => {
        if (res.status == 200) {
          this.ClassData = res.data.list;
          this.Classloading = false;
        }
      });
    },
    SetSchool(index, row) {
      //修改校区
      this.SetschoolData.id = row.id;
      this.SetschoolData.areaName = row.areaName;
    },
    DelShool(index, row) {
      //删除校区
      let id = row.id;
      post({
        url: "cms/area/deleteArea",
        data: { id }
      }).then(res => {
        this.GetSchoolEve();
      });
    },
    AddareaEve() {
      //新增校区
      post({
        url: "cms/area/addArea",
        data: this.AddAreadata
      }).then(res => {
        this.GetSchoolEve();
      });
    },
    AddBuiEve() {
      //新增楼栋
      post({
        url: "cms/building/addBuild",
        data: this.AddBui
      }).then(res => {
        this.Getbuilding();
      });
    },
    AddroomEve() {
      //新增教室
      post({
        url: "cms/tmsClassroom/addClassroom",
        data: this.Addroomdata
      }).then(res => {
        this.GetClassEve();
      });
    },
    SetSchoolEve() {
      post({
        url: "cms/area/updateArea",
        data: this.SetschoolData
      }).then(() => {
        this.GetSchoolEve();
      });
    },
    subBuiding() {
      //提交楼栋修改信息
      post({
        url: "cms/building/updateBuild",
        data: this.SetBuidingData
      }).then(res => {
        this.Getbuilding();
      });
    },
    Getbuilding() {
      //获取楼栋数据
      post({
        url: "cms/building/queryBuildPageBycondition",
        data: {}
      }).then(res => {
        var building = res.data.list;
        var arr = [];
        var newarr = [];
        console.log("____ 0 ___");
        console.log(building);
        building.forEach(element => {
          if (arr.indexOf(element.areaId) == -1) {
            arr.push(element.areaId);
            newarr.push({
              id: element.areaId,
              areaName: element.areaName,
              hasChildren: true
            });
          }
        });
        console.log(arr);
        console.log(newarr);
        this.buildingData = newarr;
      });
    },
    SetBuildingEve(index, row) {
      //获取楼栋原有信息
      this.SetBuidingData.id = row.id;
      this.SetBuidingData.areaId = row.areaId;
      this.SetBuidingData.buildingName = row.buildingName;
    },
    DeleteBuildingEve(index, row) {
      //删除楼栋
      let id = row.id;
      post({
        url: "cms/building/deleteBuild",
        data: { id }
      }).then(res => {
        this.Getbuilding();
      });
    },
    load(tree, treeNode, resolve) {
      console.log(tree);
      let id = tree.id;
      console.log(id);
      post({
        url: "cms/building/queryBuildPageBycondition",
        data: { areaId: id },
        IS: false
      }).then(response => {
        if (response.status == 200) {
          if (response.data.list.length != 0) {
            console.log(response.data.list);
            response.data.list.forEach(element => {
              element.areaName = element.buildingName;
            });
            resolve(response.data.list);
          } else {
            this.$message({
              message: "没有对应二级角色，请添加！",
              type: "warning"
            });
          }
        }
      });
    },
    // --------------
    ChildNowPage(NowPage) {
      //监听分页组件传值
      this.Search.pageNum = NowPage;
    },
    ChildEachPage(EachPage) {
      //监听分页组件传值
      this.Search.pageSize = EachPage;
    },
    Getselect() {
      //获取下拉框内容
      getselect({
        type: ["sign", "role"],
        sign: this
      });
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
  width: 80px !important;
  display: inline-block;
  text-align: right !important;
}
.el-input,
.el-select {
  width: 67%;
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
.el-dialog__body .el-form i {
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
/* .el-dialog .el-input {
  width: 72%;
} */
.el-dialog .el-form-item {
  display: inline-block;
  width: 72%;
}
.el-dialog .el-input--suffix {
  width: 90% !important;
}
.el-form-item {
  margin: 0px;
}
.el-date-editor {
  width: 67% !important;
}
</style>