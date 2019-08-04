<!-- 组件说明 -->
<template>
  <div class="LookLog m20">
    <el-row>

      <el-col :span="24">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="path-box">
          <el-breadcrumb-item :to="{ path: '/LabLog' }">实验室日志</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/LookLog' }">详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>

      <el-col :span="24">
          <div class="lab_name_box">
              <label style="padding-left:15px;">实验室名称及编号：</label>
              <span>物理实验室028</span>
              <span style="float:right;">日志序号：1</span>
              <div class="name_box_data">
                  <el-col :span="12">所属院系 ：<span>A学院</span></el-col>
                  <el-col :span="12">实验班级 :<span>实验班级 </span></el-col>
                  <el-col :span="12">实验课程 :<span>动能转换</span></el-col>
                  <el-col :span="12">上课时间 :<span>2018.03.12  第2-4节 </span></el-col>
                  <el-col :span="12">应到人数 :<span>50</span></el-col>
                  <el-col :span="12">实到人数 :<span>42</span><a href="javascript:;" style="margin-left:30px;">查看考勤情况</a></el-col>
              </div>
              <div class="states_data">
                  <el-col :span="24">安全情况 ：<span>防盗门窗完好</span></el-col>
                  <el-col :span="24">卫生情况 ：<span>地面无灰尘，无脏污，无凹陷</span></el-col>
                  <el-col :span="24">其他情况 ：<span>地面无灰尘，无脏污，无凹陷</span></el-col>
              </div>
              <el-col :span="24">
                  <div style="float:right;padding-top:20px;">
                      <span>提交人：</span>
                      <span>李春燕</span>
                      <span>2016.03.16 23.15</span>
                  </div>
              </el-col>
              <el-col :span="24">
                  <label style="line-height:45px;padding-left:10px;">确认情况：</label>
                  <div class="end_states">
                      <div class="end_left">
                          <img src="../../assets/img/stu_0.jpg" alt="">
                          <div class="end_data">
                              <p><span>刘元：</span><span class="end_dats">！已确认</span></p>
                              <p><span>确认意见：</span><span>同意</span></p>
                              <div class="end_date"><span>2018-10-29  10：16</span></div>
                          </div>
                      </div>
                  </div>
              </el-col>
          </div>
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
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 20px 40px 20px 20px;
  border-bottom: 1px solid #e6e6e6;
}
/* lab_name_box */
.lab_name_box{
    width: 700px;
    color: black;
}
.name_box_data{
    width: 100%;
    margin-top: 10px;
    padding: 15px;
    overflow:hidden;
    background: rgb(242, 242, 242);
}
.name_box_data .el-col{
    font-size: 14px;
    line-height: 35px;
}
.states_data{
    width: 100%;
    padding: 15px;
    overflow: hidden;
    border-bottom: 1px solid rgb(242, 242, 242);
}
.states_data .el-col{
    line-height: 45px;
}
/* 确认情况 */
.end_states{
    width: 70%;
    padding-left: 50px;
    overflow: hidden;
    background: rgb(242, 242, 242);
}
.end_left img{
    width: 60px;
    height: 60px;
    margin-top: 20px;
    margin-right: 20px;
    float: left;
}
.end_data{
    float: left;
}
.end_dats{
    margin-left: 20px;
    color: green;
}
.end_data p{
    font-size: 14px;
    margin:  25px 0;
}
.end_date{
   position: relative;
   top: -10px;
   left: 218px;
}


</style>