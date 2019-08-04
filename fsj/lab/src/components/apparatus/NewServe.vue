<!-- 组件说明 -->
<template>
  <div class="NewLend m20">
    <el-row>
      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="path-box">
          <el-breadcrumb-item :to="{ path: '/Mend' }">设备报修表</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/NewServe' }">添加保修记录</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>

      <el-col :span="24">
        <label for>归属院系：</label>
        <el-select v-model="value" clearable placeholder="请选择" class="select-last"></el-select>
      </el-col>

      <el-col :span="24">
        <label for>归属实验室：</label>
        <el-select v-model="value" clearable placeholder="请选择" class="select-last"></el-select>
      </el-col>

      <el-col :span="24">
        <label for>仪器名称及编号：</label>
        <el-select v-model="value" clearable placeholder="请选择" class="select-last"></el-select>
      </el-col>

      <el-col :span="24">
        <label for>维修费用：</label>
        <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
      </el-col>

      <el-col :span="24">
        <label for>报修日期：</label>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
      </el-col>

      <el-col :span="24">
        <label for>报修人：</label>
        <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
      </el-col>

      <el-col :span="24">
        <label for>登记人：</label>
        <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
      </el-col>

      <el-col :span="24" style="margin-top:10px;">
        <label style="float:left;" for>破损原因：</label>
        <el-input style="width:500px;" type="textarea" placeholder="请输入内容" v-model="textarea" maxlength="500" show-word-limit :rows="5"></el-input>
      </el-col>

       <el-col :span="24" style="margin-top:10px;">
        <label style="float:left;" for>备注：</label>
        <el-input style="width:500px;" type="textarea" placeholder="请输入内容" v-model="textarea" maxlength="500" show-word-limit :rows="5"></el-input>
      </el-col>

     <el-col class="submit-box">
         <el-button type="primary">提交</el-button>
         <el-button type="danger">取消</el-button>
      </el-col>

    </el-row>
  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  data() {
    return {};
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
label{
    display: inline-block;
    width: 130px!important;
}
.el-select,.el-input{
    width: 500px;
    margin: 10px 0;
}
.el-date-editor{
  width: 500px!important;
}
/* 取消 提交 */
.submit-box{
  text-align: center;
  margin-top: 50px;
}
.submit-box .el-button{
  width: 100px;
  margin: 0 30px;
}
</style>