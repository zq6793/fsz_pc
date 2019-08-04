<!-- 组件说明 -->
<template>
  <div class="NewLend m20">
    <el-row>
      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="path-box">
          <el-breadcrumb-item :to="{ path: '/Ruku' }">危险品管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/NewRuku' }">新增涉险品入库</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>

      <el-col :span="24">
        <label for>耗材名称及编号：</label>
        <el-input placeholder="耗材编号：" v-model="input" clearable></el-input>
      </el-col>

      <el-col :span="24">
        <label for>入库数量：</label>
        <el-input placeholder="入库数量：" v-model="input" clearable></el-input>
      </el-col>

      <el-col :span="24">
        <label for>入库时间：</label>
        <el-input placeholder="入库时间：" v-model="input" clearable></el-input>
      </el-col>

      <el-col :span="24">
        <label for>保存位置：</label>
        <el-input placeholder="保存位置：" v-model="input" clearable></el-input>
      </el-col>

      <el-col :span="24">
        <label for>单价（元）：</label>
        <el-input placeholder="规格/型号：" v-model="input" clearable></el-input>
      </el-col>

      <el-col :span="24">
        <label for>来源：</label>
        <el-input placeholder="计量单位：" v-model="input" clearable></el-input>
      </el-col>

      <el-col :span="24">
        <label for>渠道：</label>
        <el-input placeholder="单价(元)：" v-model="input" clearable></el-input>
      </el-col>

      <el-col :span="24">
        <label for>生产日期：</label>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
      </el-col>

      <el-col :span="24">
        <label for>品牌：</label>
        <el-input placeholder="保存位置：" v-model="input" clearable></el-input>
      </el-col>

      <el-col :span="24">
        <label for>购置日期：</label>
        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
      </el-col>

      <el-col :span="24">
        <label for>接收人：</label>
        <el-input placeholder="保存位置：" v-model="input" clearable></el-input>
      </el-col>

      
      <el-col :span="24" style="margin:10px 0;">
        <label for style="float:left">备注：</label>
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