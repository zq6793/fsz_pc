<!-- 组件说明 -->
<template>
  <div class="apply m20">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="path-box">
      <el-breadcrumb-item :to="{ path: '/TestAdmin' }">实验室仪器管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/LookInst' }">详情</el-breadcrumb-item>
    </el-breadcrumb>
    
    <el-col :span="24">
        <label>基本信息</label>
        <div class="data-box">
            <el-col :span="12">
                <span>仪器编号：</span><span>002</span>
            </el-col>
            <el-col :span="12">
                <span>仪器名称：</span><span>示波器</span>
            </el-col>
             <el-col :span="12">
                <span>所属学院：</span><span>B学院</span>
            </el-col>
            <el-col :span="12">
                <span>所属实验室：</span><span>物理实验室</span>
            </el-col> <el-col :span="12">
                <span>来源：</span><span>自购</span>
            </el-col>
            <el-col :span="12">
                <span>渠道：</span><span>招标采购</span>
            </el-col>
        </div>
    </el-col>

    <el-col :span="24">
        <label>产品属性</label>
        <div class="data-box">
            <el-col :span="12">
                <span>型号：</span><span>SI0218</span>
            </el-col>
            <el-col :span="12">
                <span>计量单位：</span><span>个</span>
            </el-col>
             <el-col :span="12">
                <span>单价：</span><span>10000</span>
            </el-col>
            <el-col :span="12">
                <span>品牌：</span><span>普源</span>
            </el-col> 
        </div>
    </el-col>

     <el-col :span="24">
        <label>产品维护</label>
        <div class="data-box">
            <el-col :span="12">
                <span>入库时间：</span><span>2018-09-26</span>
            </el-col>
            <el-col :span="12">
                <span>购置日期：</span><span>2018-09-20</span>
            </el-col>
             <el-col :span="12">
                <span>使用期限：</span><span>36月</span>
            </el-col>
            <el-col :span="12">
                <span>报修起始：</span><span>2018-9-20</span>
            </el-col> 
            <el-col :span="12">
                <span>过保时间：</span><span>2021-09-20</span>
            </el-col> 
            <el-col :span="12">
                <span>状态：</span><span>可用</span>
            </el-col> 
        </div>
    </el-col>

    <el-col :span="24">
        <label>仪器图片</label>
        <div class="data-box bg-none">
            <img src="../../assets/img/stu_0.jpg" alt="">
            <img src="../../assets/img/stu_0.jpg" alt="">
            <img src="../../assets/img/stu_0.jpg" alt="">
            <img src="../../assets/img/stu_0.jpg" alt="">
            <img src="../../assets/img/stu_0.jpg" alt="">
        </div>
    </el-col>

    <el-col :span="24">
        <label>备注</label>
        <div class="data-box bg-none">
            备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注
        </div>
    </el-col>

     <el-col class="submit-box">
         <el-button type="primary">返回</el-button>
      </el-col>

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
.apply{
  overflow: auto;
}
/* 面包屑 */
.path-box {
  width: 95%;
  display: block;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 20px 40px 20px 20px;
  border-bottom: 1px solid #e6e6e6;
}
.el-input,
.el-select {
  width: 450px;
}
.el-col {
  margin-right: 30px;
  margin: 10px 0;
  overflow: hidden;
}
label {
  text-align: left;
  margin: 10px 0;
  width: 100px;
  display: block;
}
.data-box{
    width: 500px;
    padding: 15px 20px;
    font-size: 14px;
    overflow: hidden;
    background: rgb(242, 242, 242);
    border-radius: 10px;
    margin-bottom: 20px;
}
.data-box span{
    display: inline-block;
    width: 100px;
}
.bg-none{
    background: none;
}
.bg-none img{
    width: 10%;
}
/* 取消 提交 */
.submit-box{
  text-align: center;
}
.submit-box .el-button{
  width: 100px;
}
</style>  