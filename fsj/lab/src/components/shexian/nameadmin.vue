<!-- 组件说明 -->
<template>
  <!-- 耗材入库 -->
  <div class="lose HaocaiName">
    <Soso :pagetitle="pagetitle"></Soso>
    
    <el-row class="m20 title_box">
      <el-button type="success" plain @click="dialogFormVisible  = true">新增</el-button>
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
      <el-table-column prop="zhuanye" label="耗材名称" width="180" align="left"></el-table-column>
      <el-table-column prop="nianji" label="规格/型号" align="center"></el-table-column>
      <el-table-column prop="xueqi" label="单位" align="center"></el-table-column>
      <el-table-column prop label="操作" align="center">
        <a class="a-active" href="javascript:;" @click="deletes()">
          <i class="i-3"></i> 删除
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
      pagetitle: "危险品名管理",
      money: {
        start: "",
        end: ""
      },
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
          yuanxi: "001",
          zhuanye: "检测离心管",
          nianji: "100",
          banji: "15ML",
          xueqi: "个",
          zhuangtai: "2",
          jieshou: "李毅"
        },
        {
          yuanxi: "001",
          zhuanye: "检测离心管",
          nianji: "100",
          banji: "15ML",
          xueqi: "个",
          zhuangtai: "2",
          jieshou: "李毅"
        },
        {
          yuanxi: "001",
          zhuanye: "检测离心管",
          nianji: "100",
          banji: "15ML",
          xueqi: "个",
          zhuangtai: "2",
          jieshou: "李毅"
        },
        {
          yuanxi: "001",
          zhuanye: "检测离心管",
          nianji: "100",
          banji: "15ML",
          xueqi: "个",
          zhuangtai: "2",
          jieshou: "李毅"
        },
        {
          yuanxi: "001",
          zhuanye: "检测离心管",
          nianji: "100",
          banji: "15ML",
          xueqi: "个",
          zhuangtai: "2",
          jieshou: "李毅"
        },
        {
          yuanxi: "001",
          zhuanye: "检测离心管",
          nianji: "100",
          banji: "15ML",
          xueqi: "个",
          zhuangtai: "2",
          jieshou: "李毅"
        }
      ],
      gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
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
    to_NewRuku(){       //新增入库
      this.$router.push("/NewRuku")
    },
    to_NewChuku(){      //新增出库
      this.$router.push("/NewChuku")
    },
    to_NewPandian(){    //新增盘点
      this.$router.push("/Newpandian")
    },
    deletes(){        //删除
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.test()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
  test(){
    alert(1)
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
/* 价格区间样式 */
.start-num,
.end-num {
  width: 100px;
  margin: 0 8px;
}
.title_box .el-button{
  margin-right: 10px;
}

</style>