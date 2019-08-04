<!-- 组件说明 -->
<template>
  <!-- 查课管理 -->
  <div class="apparatus">
    <el-row class="select-box m20">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="150px">
        <el-form-item label="学期：">
          <el-select v-model="formInline.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="查课时间：">
          <div class="block">
            <el-date-picker
              v-model="formInline.date"
              type="date"
              placeholder="请选择时间"
              class="el-date-picker"
            ></el-date-picker>
          </div>
        </el-form-item>

        <el-form-item label="提交时间：">
          <div class="block">
            <el-date-picker
              v-model="formInline.date"
              type="date"
              placeholder="请选择时间"
              class="el-date-picker"
            ></el-date-picker>
          </div>
        </el-form-item>
      </el-form>

      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="150px">
        <el-form-item label="上课班级：">
          <el-select v-model="formInline.region" placeholder="请选择院系">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="formInline.region" placeholder="请选择专业">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="formInline.region" placeholder="请选择年级">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="formInline.region" placeholder="请选择班级">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="150px">
        <el-form-item label="查课教室：">
          <el-select v-model="formInline.region" placeholder="请选择学区">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="formInline.region" placeholder="请选择楼栋">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="formInline.region" placeholder="请选择教室">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="150px">
        <el-form-item label="上课人：">
          <el-select v-model="formInline.region" placeholder="请选择院系">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="formInline.region" placeholder="请选择老师(可进行输入搜索)">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="查课人：">
          <el-select v-model="formInline.region" placeholder="请选择院系">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="formInline.region" placeholder="请选择老师(可进行输入搜索)">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row class="m20">
      <el-button type="success" plain>新增查课</el-button>
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
      <el-table-column prop="yuanxi" label="查课时间" width="180" align="left"></el-table-column>
      <el-table-column prop="zhuanye" label="查课教室" width="180" align="left"></el-table-column>
      <el-table-column prop="nianji" label="上课班级" align="center"></el-table-column>
      <el-table-column prop="banji" label="上课人" align="center"></el-table-column>
      <el-table-column prop="xueqi" label="查课人" align="center"></el-table-column>
      <el-table-column prop="zhuangtai" label="提交时间" align="center"></el-table-column>


      <el-table-column prop label="操作" align="center">
        <a class="a-active" href="javascript:;">
          <i class="i-1"></i> 查看
        </a>
        <a class="a-active" href="javascript:;">
          <i class="i-2"></i> 删除
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
          yuanxi: "2018-11-23",
          zhuanye: "A区6号楼601",
          nianji: "2017级-高分子材料与工程1班",
          banji: "张梅梅",
          xueqi: "张梅梅",
          zhuangtai: "2018.11.29 14:57"
        },
        {
          yuanxi: "2018-11-23",
          zhuanye: "A区6号楼601",
          nianji: "2017级-高分子材料与工程1班",
          banji: "张梅梅",
          xueqi: "张梅梅",
          zhuangtai: "2018.11.29 14:57"
        },
        {
          yuanxi: "2018-11-23",
          zhuanye: "A区6号楼601",
          nianji: "2017级-高分子材料与工程1班",
          banji: "张梅梅",
          xueqi: "张梅梅",
          zhuangtai: "2018.11.29 14:57"
        },
        {
          yuanxi: "2018-11-23",
          zhuanye: "A区6号楼601",
          nianji: "2017级-高分子材料与工程1班",
          banji: "张梅梅",
          xueqi: "张梅梅",
          zhuangtai: "2018.11.29 14:57"
        },
        {
          yuanxi: "2018-11-23",
          zhuanye: "A区6号楼601",
          nianji: "2017级-高分子材料与工程1班",
          banji: "张梅梅",
          xueqi: "张梅梅",
          zhuangtai: "2018.11.29 14:57"
        },
      ]
    };
  },
  computed: {},
  methods: {}
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
</style>