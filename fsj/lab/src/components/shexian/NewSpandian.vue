<!-- 组件说明 -->
<template>
  <div class="NewLend m20 Pandians">
    <el-row>
      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="path-box">
          <el-breadcrumb-item :to="{ path: '/Spandian' }">涉险品管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/NewSPandian' }">盘点记录</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col>
        <el-button type="success" plain @click="dialogFormVisible  = true">盘点</el-button>
      </el-col>

      <el-col>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="盘点序号" width="180"></el-table-column>
          <el-table-column prop="name" label="理论库存" width="180"></el-table-column>
          <el-table-column prop="address" label="实际库存"></el-table-column>
          <el-table-column prop="address" label="盈亏"></el-table-column>
          <el-table-column prop="address" label="盘点时间"></el-table-column>
          <el-table-column prop="address" label="盘点人"></el-table-column>
        </el-table>
      </el-col>

      <el-col class="submit-box">
        <el-button type="primary">提交</el-button>
        <el-button type="danger">取消</el-button>
      </el-col>
    </el-row>

    <!-- -------------------------------  弹出组件------------------------------------------------ -->
    <el-dialog
      :visible.sync="dialogFormVisible"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <el-form :model="form">
        <el-form-item label="实际库存：" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="规格/型号：" :label-width="formLabelWidth">
          <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
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
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
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
      formLabelWidth: "100px"
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
  margin-bottom: 30px;
  box-sizing: border-box;
  padding: 20px 40px 20px 20px;
  border-bottom: 1px solid #e6e6e6;
}
label {
  display: inline-block;
  width: 130px;
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
.Pandians .el-input {
  width: 80% !important;
}
.el-form-item {
  margin-bottom: 0;
}
</style>