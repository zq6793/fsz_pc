<!-- 组件说明 -->
<template>
  <div class="NewLend m20">
    <el-row>
      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="path-box">
          <el-breadcrumb-item :to="{ path: '/Gouzhijihua' }">耗材购置计划</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/NewGouzhi' }">新增耗材购置计划</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>

      <el-col :span="24">
        <label for>所属学院：</label>
        <el-select v-model="value" clearable placeholder="请选择" class="select-last"></el-select>
      </el-col>

      <el-col :span="24">
        <label for>所属实验室：</label>
        <el-select v-model="value" clearable placeholder="请选择" class="select-last"></el-select>
      </el-col>

      <el-col :span="24">
        <label for>学期：</label>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
      </el-col>

      <el-col :span="24">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="序号" width="80">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>

          <el-table-column label="预计单价（元）" width="120">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>

          <el-table-column label="规格型号" width="80">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>

          <el-table-column label="预计单价（元）" width="120">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>

          <el-table-column label="预计单价（元）" width="120">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>

          <el-table-column label="预计单价（元）" width="120">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>

          <el-table-column label="预计单价（元）" width="120">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>

          <el-table-column label="预计单价（元）" width="120">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>

          <el-table-column label="小计" width="80">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-col class="New_bth">
          <el-button type="primary" round size="mini" @click="dialogFormVisible = true">新增耗材</el-button>
        </el-col>
      </el-col>

      <el-col :span="24" style="margin:10px 0;">
        <label for style="float:left">备注：</label>
        <el-input
          style="width:500px;"
          type="textarea"
          placeholder="请输入内容"
          v-model="textarea"
          maxlength="500"
          show-word-limit
          :rows="5"
        ></el-input>
      </el-col>

      <el-col :span="24">
        <label>审批人：</label>
        <div class="person_box">
          <img src="../../assets/img/stu_1.jpg" alt="">
          <i class="el-icon-circle-plus"></i>
        </div>
      </el-col>

      <el-col class="submit-box">
        <el-button type="primary">提交申请</el-button>
        <el-button type="danger">返回</el-button>
      </el-col>
    </el-row>
    <!-- -------------------- 弹框 --------------------------- -->
    <el-dialog
      title="新增"
      :visible.sync="dialogFormVisible"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <el-form :model="form">
        

        <el-form-item label="耗材名称" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域"></el-select>
        </el-form-item>

        <el-form-item label="需要数量" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="库存数量" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="需购数量" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="预计单价" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  data() {
    return {
      tableData: [
        {
          date: "1",
          name: "棉签",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2",
          name: "棉签1",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "3",
          name: "棉签2",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "4",
          name: "棉签3",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
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
  computed: {},
  methods: {}
};
</script>

<style scoped>
/* 面包屑 */
.path-box {
  width: 95%;
  display: block;
  margin-bottom: 50px;
  box-sizing: border-box;
  padding: 20px 40px 20px 20px;
  border-bottom: 1px solid #e6e6e6;
}
label {
  display: inline-block;
  width: 130px !important;
}
.el-select,
.el-input {
  width: 500px;
  margin: 10px 0;
}
.el-date-editor {
  width: 500px !important;
}
/* 取消 提交 */
.submit-box {
  text-align: center;
  margin-top: 50px;
}
.submit-box .el-button {
  width: 100px;
  margin: 0 30px;
}
/* 新增按钮 */
.New_bth {
  margin: 5px;
}
/* person */
.person_box{
  width: 200px;
  height: 50px;
  margin-left: 60px; 
}
.person_box img{
  width: 80px;
  height: 80px;
}
.person_box i{
  color: green;
  font-size: 30px;
}
</style>