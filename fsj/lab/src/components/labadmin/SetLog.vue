<!-- 组件说明 -->
<template>
  <div class="NewLog m20">
    <el-row>
      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="path-box">
          <el-breadcrumb-item :to="{ path: '/LabLog' }">实验室日志</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/NewLog' }">新增</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>

      <el-col :span="24">
        <label for>所属院系：</label>
        <el-select v-model="value" clearable placeholder="请选择" class="select-last"></el-select>
      </el-col>

      <el-col :span="24">
        <label for style="width:150px;">实验室名称及编号：</label>
        <el-select v-model="value" clearable placeholder="请选择" class="select-last" style="width:500px"></el-select>
      </el-col>

      <el-col :span="24">
        <label for>实验课程：</label>
        <el-select v-model="value" clearable placeholder="请选择" class="select-last"></el-select>
      </el-col>

      <el-col :span="24">
            <label for>上课时间：</label>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
            <el-select v-model="value" clearable placeholder="请选择" class="select-last" style="width:100px;margin-left:82px;margin-right:20px;"></el-select>
            <span>-</span>
            <el-select v-model="value" clearable placeholder="请选择" class="select-last" style="width:100px;margin-left:20px;"></el-select>
      </el-col>

      <el-col :span="24">
            <label for>应到人数：</label>
            <el-input v-model="input" placeholder="请输入内容" style="width:180px;margin-right:90px"></el-input>
            <label for>实到人数：</label>
            <el-input v-model="input" placeholder="请输入内容" style="width:180px"></el-input>
      </el-col>

       <el-col :span="24"> 
            <label for style="float:left">安全情况：</label>
            <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea" style="width:550px;"></el-input>
            <div class="safety">
                <span>灭火器完好且在使用期内</span>
                <span>防盗门窗完好</span>
                <span>监控报警装置完好</span>
                <span>安全通道通畅</span>
            </div>
      </el-col>

      <el-col :span="24"> 
            <label for style="float:left">卫生情况：</label>
            <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea" style="width:550px;"></el-input>
            <div class="safety">
                <span>无污迹，无杂物， 干净明亮</span>
                <span>地面无灰尘，无脏污，无凹陷</span>
                <span>无水渍，无损坏，整洁</span>
            </div>
      </el-col>

      <el-col :span="24"> 
            <label for style="float:left">其他情况：</label>
            <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="textarea" style="width:550px;"></el-input>
      </el-col>

      <el-col :span="24">
           <label for style="float:left">确认人：</label>
            <el-select v-model="value" clearable placeholder="请选择" class="select-last" style="width:150px"></el-select>
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
    return {
        value1:""
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.NewLog{
    margin-top: -20px;
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
/* label */
label{
    width: 100PX;
    display: inline-block;
}
.el-col{
    margin: 15px 0;
}
.el-select{
    width: 550px;
}
/* 安全情况 */
.safety{
    padding: 10px;
    padding-top: 0;
    width: 500px;
    padding-left: 100px;
}
.safety span{
    width: 200px;
    display: inline-block;
    text-align: center;
    font-size: 14px;
    padding: 5px;
    line-height: 40px;
    margin: 20px 30px 0 0;
    background: rgb(242, 242, 242);
}
/* 取消 提交 */
.submit-box {
  margin: 20px 0;
  text-align: center;
}
.submit-box .el-button {
  width: 100px;
  margin: 0 30px;
}
</style>