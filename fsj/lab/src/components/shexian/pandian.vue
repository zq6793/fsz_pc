<!-- 组件说明 -->
<template>
  <!-- 耗材盘点 -->
  <div class="pandian">
    <Soso :pagetitle="pagetitle"></Soso>
    <el-row class="select-box m20">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="150px">

        <el-form-item label="盘点结果：">
          <el-select v-model="formInline.d" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="盘点日期：">
          <div class="block">
            <el-date-picker
              v-model="formInline.date"
              type="date"
              placeholder=""
              class="el-date-picker"
            ></el-date-picker>
            <el-date-picker
              v-model="formInline.date"
              type="date"
              placeholder=""
              class="el-date-picker"
            ></el-date-picker>
          </div>
        </el-form-item>

      </el-form>
    </el-row>

    <!-- 表格 -->
    <el-table
      class="m20"
      :data="tableData"
      style="width: 95%"
      :header-cell-style="{
    'background-color': 'rgb(242,242,242)',
    'color': '#555555',
    'border-bottom': '1px #e6e6e6 solid',
}"
    >
      <el-table-column prop="yuanxi" label="耗材类别编号" width="180" align="left"></el-table-column>
      <el-table-column prop="zhuanye" label="规格" width="180" align="left"></el-table-column>
      <el-table-column prop="nianji" label="单位" align="center"></el-table-column>
      <el-table-column prop="banji" label="入库次数" align="center"></el-table-column>
      <el-table-column prop="xueqi" label="合计入库数" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="出库次数" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="合计出库数" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="理论在库数" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="实际在库数" align="center"></el-table-column>

      <el-table-column prop label="操作" align="center">
        <a class="a-active" href="javascript:;" @click.prevent="Newpan()"><i class="i-2"></i> 盘点</a>
        <a class="a-active" href="javascript:;" @click="dialogFormVisible  = true"><i class="i-3"></i> 阈值设置</a>
      </el-table-column>
    </el-table>
    <Paging></Paging>

     <!-- -------------------------------  弹出组件------------------------------------------------ -->
    <el-dialog
      :visible.sync="dialogFormVisible"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <el-form :model="form">
        <el-form-item label="限定最小值：" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="限定最大值：" :label-width="formLabelWidth">
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
import Soso from "../common/soso";
import Paging from "../common/paging";

export default {
  components: {
    Soso,
    Paging
  },
  data() {
    return {
      pagetitle: "涉险品盘点",
      formInline: {
        date: "",
        region: "",
        a: "",
        b: "",
        c: "",
        d: ""
      },
      tableData: [
        {
          yuanxi: "检测离心管001",
          zhuanye: "15ML",
          nianji: "个",
          banji: "-8",
          xueqi: "李毅",
          zhuangtai: "2008-8-8"
        },
        {
          yuanxi: "检测离心管001",
          zhuanye: "15ML",
          nianji: "个",
          banji: "-8",
          xueqi: "李毅",
          zhuangtai: "2008-8-8"
        },
        {
         yuanxi: "检测离心管001",
          zhuanye: "15ML",
          nianji: "个",
          banji: "-8",
          xueqi: "李毅",
          zhuangtai: "2008-8-8"
        },
        {
          yuanxi: "检测离心管001",
          zhuanye: "15ML",
          nianji: "个",
          banji: "-8",
          xueqi: "李毅",
          zhuangtai: "2008-8-8"
        },
        {
          yuanxi: "检测离心管001",
          zhuanye: "15ML",
          nianji: "个",
          banji: "-8",
          xueqi: "李毅",
          zhuangtai: "2008-8-8"
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
  methods: {
    Newpan(){
      this.$router.push("/NewSpandian")
    }
  }
};
</script>

<style scoped>
/* 选择框容器 */
.select-box {
  width: 95%;
  background: rgb(242, 242, 242);
}
/* 输入框宽度 */
.el-form-item {
  margin: 10px 15px 10px 0px;
}
.el-select {
  width: 260px;
  margin-right: 15px;
}
/* 日期选择框宽度 */
.el-date-picker {
    margin-right:10px; 
  width: 260px !important;
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
.el-form-item{
}
</style>