<!-- 组件说明 -->
<template>
  <div class="LabLook m20">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="path-box">
      <el-breadcrumb-item :to="{ path: '/Labadmin' }">实验室管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/LabLook' }">实验室详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="24">
          <h2>基本信息</h2>
          <div class="inform_box">
              <el-col :span="12">
                  <span>实验室名称及编号：</span>
                  <p>物理实验室028</p>
              </el-col>
              <el-col :span="12">
                  <span>所属院系：</span>
                  <p>A学院</p>
              </el-col>
              <el-col :span="12">
                  <span>使用类型：</span>
                  <p>校内使用</p>
              </el-col>
              <el-col :span="12">
                  <span>等级：</span>
                  <p>国家级</p>
              </el-col>
              <el-col :span="12">
                  <span>分布楼层 ：</span>
                  <p>A区1号楼103室</p>
              </el-col>
              <el-col :span="12">
                  <span>实验室管理人员：</span>
                  <p>王理解，李丽娟</p>
              </el-col>
              <el-col :span="12">
                  <span>面向专业 ：</span>
                  <p>应用物理  基础物理 机械力学 </p>
              </el-col>
          </div>
      </el-col>

      <el-col :span="24">
          <h2>建设信息</h2>
          <div class="inform_box">
              <el-col :span="12">
                  <span>性质：</span>
                  <p>新建</p>
              </el-col>
              <el-col :span="12">
                  <span>维护截止日期：</span>
                  <p>2020-09-26</p>
              </el-col>
              <el-col :span="12">
                  <span>面积（平米）：</span>
                  <p>500</p>
              </el-col>
              <el-col :span="12">
                  <span>容纳人数 :</span>
                  <p>12000</p>
              </el-col>
              <el-col :span="12">
                  <span>资金投入（万元）  ：</span>
                  <p>500</p>
              </el-col>
              <el-col :span="12">
                  <span>资金来源 :</span>
                  <p>省教育厅70%+学校30%</p>
              </el-col>
              <el-col :span="12">
                  <span>计划开设实验项目（个）  ：</span>
                  <p>36 </p>
              </el-col>
              <el-col :span="12">
                  <span>承建方  ：</span>
                  <p>西安优途云信息技术有限公司</p>
              </el-col>
              <el-col :span="12">
                  <span>承建方联系人  ：</span>
                  <p>陈勇 </p>
              </el-col>
              <el-col :span="12">
                  <span>承建方联系电话  ：</span>
                  <p>029-33652100 </p>
              </el-col>
              <el-col :span="12">
                  <span>交付时间 ：</span>
                  <p>2018-09-26 </p>
              </el-col>
              <el-col :span="12">
                  <span>验收时间 ：</span>
                  <p>2018-09-26 </p>
              </el-col>
              <el-col :span="12">
                  <span>验收人 ：</span>
                  <p>詹磊，张莉 ，陈玲，黄耀明</p>
              </el-col>
          </div>
      </el-col>

      <el-col :span="24">
          <h2>归属仪器设备</h2>
          <div class="inform_box" style="background:none;margin:-10px 0 10px -20px;">
              <table>
                  <tr>
                      <th>仪器编号</th>
                      <th>仪器名称</th>
                      <th>仪器数量</th>
                      <th>单价</th>
                      <th>状态</th>
                      <th>购置日期</th>
                  </tr>
                  <tr>
                      <td>001</td>
                      <td>显微镜</td>
                      <td>5台</td>
                      <td>10000</td>
                      <td>可用</td>
                      <td>2018-10-29</td>
                  </tr>
                  <tr>
                      <td>001</td>
                      <td>显微镜</td>
                      <td>5台</td>
                      <td>10000</td>
                      <td>可用</td>
                      <td>2018-10-29</td>
                  </tr>
                  <tr>
                      <td>001</td>
                      <td>显微镜</td>
                      <td>5台</td>
                      <td>10000</td>
                      <td>可用</td>
                      <td>2018-10-29</td>
                  </tr>
                  <tr>
                      <td>001</td>
                      <td>显微镜</td>
                      <td>5台</td>
                      <td>10000</td>
                      <td>可用</td>
                      <td>2018-10-29</td>
                  </tr>
                  <tr>
                      <td>001</td>
                      <td>显微镜</td>
                      <td>5台</td>
                      <td>10000</td>
                      <td>可用</td>
                      <td>2018-10-29</td>
                  </tr>
                  <tr>
                      <td>001</td>
                      <td>显微镜</td>
                      <td>5台</td>
                      <td>10000</td>
                      <td>可用</td>
                      <td>2018-10-29</td>
                  </tr>
              </table>
          </div>
      </el-col>

      <el-col :span="24">
          <h2>实验室图片</h2>
          <div class="inform_box lab_img" style="background:none">
              <el-col :span="6">
                  <img src="../../assets/img/stu_1.jpg" alt="">
              </el-col>
              <el-col :span="6">
                  <img src="../../assets/img/stu_1.jpg" alt="">
              </el-col>
              <el-col :span="6">
                  <img src="../../assets/img/stu_1.jpg" alt="">
              </el-col>
              <el-col :span="6">
                  <img src="../../assets/img/stu_1.jpg" alt="">
              </el-col>
              <el-col :span="6">
                  <img src="../../assets/img/stu_1.jpg" alt="">
              </el-col>
              <el-col :span="6">
                  <img src="../../assets/img/stu_1.jpg" alt="">
              </el-col>
              <el-col :span="6">
                  <img src="../../assets/img/stu_1.jpg" alt="">
              </el-col>
              <el-col :span="6">
                  <img src="../../assets/img/stu_1.jpg" alt="">
              </el-col>
        </div>
      </el-col>

      <el-col :span="24">
          <h2>简介</h2>
          <div class="inform_box intro" style="background:none">
              <p>data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！data！！</p>
          </div>
      </el-col>

      <el-col :span="24">
          <h2>实验室成果</h2>
          <div class="inform_box intro" style="background:none">
              <ol>
                  <li>null！！null！！null！！null！！null！！null！！null！！null！！null！！null！！null！！null！！null！！</li>
                  <li>2011年江苏省高等学校教学名师奖：陈道蓄</li>
                  <li>2011年江苏省高等学校教学名师奖：陈道蓄</li>
                  <li>2011年江苏省高等学校教学名师奖：陈道蓄</li>
                  <li>2011年江苏省高等学校教学名师奖：陈道蓄</li>
                  <li>2011年江苏省高等学校教学名师奖：陈道蓄</li>
              </ol>
          </div>
      </el-col>

      <el-col :span="24">
          <div class="to_back">
               <el-button type="info" @click="to_back()">返回</el-button>
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
  methods: {
      to_back(){
          this.$router.go(-1)
      }
  }
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
h2{
    line-height: 30px;
    text-indent: 20px;
    color: black;
}
/* 基本信息 */
.inform_box{
    width: 800px;
    height: auto;
    padding: 20px;
    margin-bottom: 30px;
    overflow: hidden;
    border-radius: 10px;
    background: rgb(237, 237, 237);
}
.inform_box .el-col{
    margin: 10px 0;
}
.inform_box p{
    display: inline;
}
/* 表格 */
table{
    width: 100%;
    text-align: center;
}
table td,table th{
    padding: 10px;
}
table tr:nth-child(odd){
    background: rgb(233, 233, 233);
}
/* 实验室图片 */
.lab_img .el-col img{
    width: 100%;
}
/* 简介 */
.intro{
    border-top: 1px solid rgb(228, 228, 228);
    border-bottom: 1px solid rgb(228, 228, 228);
}
.intro ol{
    padding-left: 10px;
}
.intro ol li{
    line-height: 1.5;
}
/* 返回 */
.to_back{
    text-align: center;
    margin: 20px 0;
}
</style>