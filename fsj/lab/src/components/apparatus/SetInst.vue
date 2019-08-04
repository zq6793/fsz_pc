<!-- 组件说明 -->
<template>
  <div class="NewLend m20">
    <el-row>
      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="path-box">
          <el-breadcrumb-item :to="{ path: '/TestAdmin' }">实验室仪器管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/LookInst' }">修改入库</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>

      <el-col :span="24" class="border-label">
        <label>基本信息</label>
        <div class="data-box">
          <el-col :span="24">
            <label for>仪器编号：</label>
            <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
          </el-col>

          <el-col :span="24">
            <label for>仪器名称：</label>
            <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
          </el-col>

          <el-col :span="24">
            <label for>所属学院：</label>
            <el-select v-model="value" placeholder="请选择"></el-select>
          </el-col>

          <el-col :span="24">
            <label for>所属实验室：</label>
            <el-select v-model="value" placeholder="请选择"></el-select>
          </el-col>

          <el-col :span="24">
            <label for>来源：</label>
            <el-select v-model="value" placeholder="请选择"></el-select>
          </el-col>

          <el-col :span="24">
            <label for>渠道：</label>
            <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
          </el-col>
        </div>
      </el-col>

      <!-- ----------------------- -->
      <el-col :span="24" class="border-label">
        <label>产品属性</label>
        <div class="data-box">
          <el-col :span="24">
            <label for>型号：</label>
            <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
          </el-col>

          <el-col :span="24">
            <label for>计量单位</label>
            <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
          </el-col>

          <el-col :span="24">
            <label for>单价：</label>
            <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
          </el-col>

          <el-col :span="24">
            <label for>品牌</label>
            <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
          </el-col>
        </div>
      </el-col>

      <!-- ----------------------- -->
      <el-col :span="24" class="border-label">
        <label>产品维护</label>
        <div class="data-box">
          <el-col :span="24">
            <label for>入库时间：</label>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </el-col>

          <el-col :span="24">
            <label for>购置日期 ：</label>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </el-col>

          <el-col :span="24">
            <label for>使用期限 ：</label>
            <el-input placeholder="月" v-model="input" clearable></el-input>
          </el-col>

          <el-col :span="24">
            <label for>报修起始：</label>
            <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
          </el-col>

          <el-col :span="24">
            <label for>过保时间：</label>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </el-col>

          <el-col :span="24">
            <label for>状态：</label>
            <el-select v-model="value" placeholder="请选择"></el-select>
          </el-col>
        </div>
      </el-col>

      <!-- ----------------------- -->
      <el-col :span="24" class="border-label">
        <label>仪器图片</label>
        <div class="data-box">
          <el-col :span="24">
            <img src="../../assets/img/stu_0.jpg" alt="">
            <img src="../../assets/img/stu_0.jpg" alt="">
            <img src="../../assets/img/stu_0.jpg" alt="">
            <img src="../../assets/img/stu_0.jpg" alt="">
            <img src="../../assets/img/stu_0.jpg" alt="">
          </el-col>
        </div>
      </el-col>

      <!-- ----------------------- -->
      <el-col :span="24" class="border-label">
        <label>备注</label>
        <div class="data-box">
          <el-col :span="24" style="margin-left:130px;">
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
          </el-col>
        </div>
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
label {
  display: inline-block;
  width: 130px !important;
}
.el-select,.el-input{
  width: 500px;
  margin: 10px 0;
}
.el-date-editor,.el-textarea{
  width: 500px!important;
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
/* data-box */
.data-box{
    padding-left: 18px;
    padding-top: 10px;
    padding-bottom: 30px;
    overflow: hidden;
}
.data-box img{
    width: 8%;
}
.border-label>label{
    border-left: 5px solid red;
    padding-left: 8px;
}
.el-input input::-webkit-input-placeholder {
    text-align: right;
}
</style>