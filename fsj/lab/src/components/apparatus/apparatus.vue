<!-- 组件说明 -->
<template>
  <!-- 仪器设备 -->
  <div class="apparatus Apparatus-1">
    <Soso :pagetitle="pagetitle"></Soso>
    <el-row class="select-box m20">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="150px">
        <el-form-item label="仪器归属院系：">
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="仪器归属实验室：">
          <el-select v-model="formInline.a" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="状态：">
          <el-select v-model="formInline.d" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="归还时间：">
          <div class="block">
            <el-date-picker
              v-model="formInline.date"
              type="date"
              placeholder="选择日期"
              class="el-date-picker"
            ></el-date-picker>
          </div>
        </el-form-item>

        <el-form-item label="借用时间：">
          <div class="block">
            <el-date-picker
              v-model="formInline.date"
              type="date"
              placeholder="选择日期"
              class="el-date-picker"
            ></el-date-picker>
          </div>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row class="m20">
      <el-button type="success" plain @click="to_NewLend()">新增借用</el-button>
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
      <el-table-column prop="yuanxi" label="仪器名称及编号" width="180" align="left"></el-table-column>
      <el-table-column prop="nianji" label="借用日期" align="center"></el-table-column>
      <el-table-column prop="banji" label="借用人" align="center"></el-table-column>
      <el-table-column prop="xueqi" label="借出人" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="归还日期" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="归还人" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="接收人" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="状态" align="center"></el-table-column>


      <el-table-column prop label="操作" align="center">
        <a class="a-active" href="javascript:;" @click="dialogFormVisible  = true">
          <i class="i-1"></i> 归还
        </a>
        <a class="a-active" href="javascript:;">
          <i class="i-2"></i> 删除
        </a>
      </el-table-column>
    </el-table>
    <Paging></Paging>
     <!-- -------------------------------  弹出组件------------------------------------------------ -->
    <el-dialog :visible.sync="dialogFormVisible" :modal-append-to-body="false" :close-on-click-modal="false">
  <el-form :model="form">
    <el-form-item label="耗材名称：" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="规格/型号：" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="单位：" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <p class="msg-end">您确定仪器设备已归还，确认后不可修改</p>
    
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
      pagetitle: "借用记录",
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
          yuanxi: "01",
          zhuanye: "食品检测技术",
          nianji: "2016",
          banji: "2016食品检测技术1班",
          xueqi: "2019",
          zhuangtai: "无数据"
        },
        {
          yuanxi: "01",
          zhuanye: "食品检测技术",
          nianji: "2016",
          banji: "2016食品检测技术1班",
          xueqi: "2019",
          zhuangtai: "无数据"
        },
        {
          yuanxi: "01",
          zhuanye: "食品检测技术",
          nianji: "2016",
          banji: "2016食品检测技术1班",
          xueqi: "2019",
          zhuangtai: "无数据"
        },
        {
          yuanxi: "01",
          zhuanye: "食品检测技术",
          nianji: "2016",
          banji: "2016食品检测技术1班",
          xueqi: "2019",
          zhuangtai: "无数据"
        },
        {
          yuanxi: "01",
          zhuanye: "食品检测技术",
          nianji: "2016",
          banji: "2016食品检测技术1班",
          xueqi: "2019",
          zhuangtai: "无数据"
        },
      ],
       dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '100px'
    };
  },
  computed: {},
  methods: {
    to_NewLend(){
      this.$router.push("/NewLend")
    },
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
.msg-end{
  font-size: 14px;
  margin-top: 20px;
  margin-left: 15px;
  color: red;
}
</style>