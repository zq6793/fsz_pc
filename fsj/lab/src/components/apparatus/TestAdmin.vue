<!-- 组件说明 -->
<template>
  <!-- 试验仪器管理 -->
  <div class="lose">
    <Soso :pagetitle="pagetitle"></Soso>
    <el-row class="select-box m20">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="110px">
        <el-form-item label="归属院系：">
          <el-select v-model="formInline.region" placeholder="请选择院系">
            <el-option label="A院系" value="shanghai"></el-option>
            <el-option label="B院系" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="归属实验室：">
          <el-select v-model="formInline.a" placeholder="请选择实验室">
            <el-option label="101室" value="shanghai"></el-option>
            <el-option label="102室" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="状态：">
          <el-select v-model="formInline.region" placeholder="请选择院系">
            <el-option label="A院系" value="shanghai"></el-option>
            <el-option label="B院系" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="价格区域：">
          <el-input v-model="input" placeholder="请输入" style="margin-right:10px;"></el-input>
          <el-input v-model="input" placeholder="请输入"></el-input>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row class="m20">
      <el-button type="success" plain @click.native="to_NewInst()">新增仪器</el-button>
      <el-button type="success" plain>批量导入</el-button>
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
      <el-table-column prop="yuanxi" label="仪器编号" width="180" align="left"></el-table-column>
      <el-table-column prop="zhuanye" label="仪器名称" width="180" align="left"></el-table-column>
      <el-table-column prop="nianji" label="归属学院" align="center"></el-table-column>
      <el-table-column prop="banji" label="归属实验室" align="center"></el-table-column>
      <el-table-column prop="xueqi" label="单价" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="状态" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="购置日期" align="center"></el-table-column>

      <el-table-column prop label="操作" align="center">
        <a class="a-active" href="javascript:;" @click.prevent="to_SetInst()">
          <i class="i-2"></i> 修改
        </a>
        <a class="a-active" href="javascript:;" @click.prevent="Deletes()">
          <i class="i-3"></i> 删除
        </a>
        <a class="a-active" href="javascript:;" @click.prevent="to_LookInst()">
          <i class="i-1"></i> 查看
        </a>
      </el-table-column>
    </el-table>
    <Paging></Paging>
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
      pagetitle: "试验仪器管理",
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
          yuanxi: "显微镜001",
          zhuanye: "化学学院",
          nianji: "1",
          banji: "显示屏损坏",
          xueqi: "2019-01-03",
          zhuangtai: "李晨"
        },
        {
          yuanxi: "显微镜002",
          zhuanye: "化学学院",
          nianji: "1",
          banji: "显示屏损坏",
          xueqi: "2019-01-03",
          zhuangtai: "李晨"
        },
        {
          yuanxi: "显微镜003",
          zhuanye: "化学学院",
          nianji: "1",
          banji: "显示屏损坏",
          xueqi: "2019-01-03",
          zhuangtai: "李晨"
        },
        {
          yuanxi: "显微镜004",
          zhuanye: "化学学院",
          nianji: "1",
          banji: "显示屏损坏",
          xueqi: "2019-01-03",
          zhuangtai: "李晨"
        },
        {
          yuanxi: "显微镜005",
          zhuanye: "化学学院",
          nianji: "1",
          banji: "显示屏损坏",
          xueqi: "2019-01-03",
          zhuangtai: "李晨"
        }
      ]
    };
  },
  computed: {},
  methods: {
    to_NewInst() {
      this.$router.push("/NewInst");
    },
    // to_SetInst() {
    //   this.$router.push("/NewInst");
    // },
    to_SetInst() {
      this.$router.push("/SetInst");
    },
    to_LookInst(){
        this.$router.push("/LookInst")
    },
    Deletes() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
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
  width: 230px;
  margin-right: 15px;
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
/* 价格区域 */
.el-input {
  width: 110px;
}
</style>