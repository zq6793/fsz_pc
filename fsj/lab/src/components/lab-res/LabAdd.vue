<!-- 组件说明 -->
<template>
  <div class="labadd m20">
    <el-col :span="24">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="path-box">
        <el-breadcrumb-item :to="{ path: '/Labres' }">实验室预约</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/LabAdd' }">添加</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <el-col :span="24">
      <h2>选择实验室</h2>
      <div class="container">
        <el-col :span="24">
          <label for style="width:150px;">实验室所属学院：</label>
          <el-select v-model="value" clearable placeholder="请选择" class="select-last"></el-select>
        </el-col>
        <el-col>
          <label for style="width:150px;">实验室名称及编号：</label>
          <el-select v-model="value" clearable placeholder="请选择" class="select-last"></el-select>
        </el-col>
      </div>
    </el-col>

    <el-col :span="24">
      <h2>选择时间</h2>
      <div class="container" style="height:65px;">
        <el-col :span="24">
          <label for>预约时间：</label>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期" style="margin-right:50px;width:300px;"></el-date-picker>
          <el-input v-model="input" placeholder="课节" style="width:80px;margin-right:15px;"></el-input>
          <span>-</span>
          <el-input v-model="input" placeholder="课节" style="width:80px;margin-left:15px;"></el-input>
        </el-col>
      </div>
    </el-col>

    <el-col :span="24">
      <h2>选择实验班级</h2>
      <div class="container" style="height:65px;">
        <p>电子工程学院2018级电子信息科学与技术专业09班<i class="el-icon-circle-close"></i></p>
        <i class="el-icon-circle-plus-outline" @click="dialogFormVisible = true"></i>
      </div>
    </el-col>

    <el-col :span="24">
      <h2>其他信息</h2>
      <div class="container" style="height:150px;">
        <el-col :span="24">
          <label for style="width:130px;">实验课程名称：</label>
          <el-input class="lab-num" placeholder="请输入内容" v-model="input" clearable></el-input>
        </el-col>
        <el-col :span="24">
          <label for style="width:130px;">审批人：</label>
          <div class="person">
              <img src="../../assets/img/stu_0.jpg" alt="">
          </div>
        </el-col>
      </div>
    </el-col>

        <div class="submit">
            <el-button type="primary">提交</el-button>
            <el-button type="danger">取消</el-button>
        </div>







    <!-- ------------------对话框组件----------------------- -->
    <el-dialog title="选择班级" :visible.sync="dialogFormVisible" :modal-append-to-body="false" :close-on-click-modal="false">
  <el-form :model="form">
    <el-form-item label="院系：" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="专业：" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="年级：" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="班级：" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
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
//import x from ''
export default {
  components: {},
  data() {
    return {
        dialogFormVisible: false,  //重要 添加选择实验班级
        form: {
          region: '',
        },
        formLabelWidth: '80px'
    };
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
/* label */
label {
  width: 110px;
  display: inline-block;
}
.el-input,.el-select{
  width: 550px;
}
/* 标题 */
h2 {
  display: inline-block;
  color: black;
  font-size: 15px;
  width: 120px;
  text-align: center;
  line-height: 35px;
  background: #cccccc;
}
/* 容器 */
.container {
  width: 750px;
  height: 130px;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px dashed #cccccc;
}
.container .el-col{
    margin: 10px;
}
/* 选择实验班级 */
.container p{
    width: 70%;
    padding: 5px;
    background: rgb(204, 204, 204);
}
.container p i{
    color: red;
    float: right;
    cursor:pointer;
    font-size: 20px;
}
.el-icon-circle-plus-outline{
    cursor:pointer;
    padding: 10px 0;
    font-size: 30px;
    color: #99CC00;
}
/* person */
.person{
    width: 50px;
    height: 50px;
    margin-top: 10px;
    margin-left: 70px;
}
.person img{
    width: 100%;
    height: 100%;
}
/* submit */
.submit{
    text-align: center;
}
.submit .el-button{
    padding: 12px 30px;
    margin: 50px 40px;
}
</style>