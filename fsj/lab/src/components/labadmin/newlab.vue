<!-- 组件说明 -->
<template>
  <div class="NewLab m20">
    <el-col>
      <el-breadcrumb separator-class="el-icon-arrow-right" class="path-box">
        <el-breadcrumb-item :to="{ path: '/Labadmin' }">实验室管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/Newlab' }">新增实验室</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-col>
      <h2>基本信息</h2>
      <div class="basic_data">
        <el-col :span="24">
          <label>实验室编号：</label>
          <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
        </el-col>

        <el-col :span="24">
          <label>实验室名称：</label>
          <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
        </el-col>

        <el-col :span="24">
          <label>所属学院：</label>
          <el-select v-model="value" placeholder="请选择">
             <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
             </el-option>
          </el-select>
        </el-col>

        <el-col :span="24">
          <label>分布楼层：</label>
          <el-select v-model="value" placeholder="请选择">
             <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
             </el-option>
          </el-select>
        </el-col>

        <el-col :span="24">
          <label>面向专业 &nbsp;&nbsp;：</label>
          <div class="add-box">
            <i class="el-icon-circle-plus-outline" @click="major = true"></i>
          </div>
        <div class="list-box">
          <span>
            <p>物理学院 物理基础</p>
            <i class="el-icon-close"></i>
          </span>
          <span>
            <p>物理学院 物理基础</p>
            <i class="el-icon-close"></i>
          </span>
        </div>
      </el-col>
      
      <el-col :span="24">
          <label class="lab_admin">实验室管理人员：</label>
          <el-input class="lab_admin_input" placeholder="请输入内容" v-model="input" clearable></el-input>
      </el-col>

      <el-col :span="24">
          <label>实验室等级：</label>
          <el-select v-model="value" placeholder="请选择">
             <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
             </el-option>
          </el-select>
      </el-col>

      <el-col :span="24">
          <label>使用类型：</label>
          <el-select v-model="value" placeholder="请选择">
             <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
             </el-option>
          </el-select>
      </el-col>

      </div>
    </el-col>

    <el-col style="margin-top:50px;">
      <h2>建设信息</h2>
      <div class="msg_add">
         <el-col :span="24">
          <label>实验室编号：</label>
          <el-select v-model="value" placeholder="请选择">
             <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
             </el-option>
          </el-select>
        </el-col>

        <el-col :span="24">
          <label class="lab_num_label">计划开设实验项目(个)：</label>
          <el-input class="lab_num_label_input" placeholder="请输入内容" v-model="input" clearable></el-input>
        </el-col>

      <el-col :span="24" class="fund">
          <label class="fund_label">资金来源：</label>
          <div class="fund_box">
            <el-button plain :class="{active:actives == 1}" @click="active(1,'Touzi')">投资</el-button>
            <el-button plain :class="{active:actives == 2}" @click="active(2,'Juanzeng')">捐赠</el-button>
          </div>
            <components :is="comis"></components>
      </el-col>

      <el-col :span="24" class="input_boxs">
          <label>面积（平米）：</label>
          <el-input class="lab_num_label_input" placeholder="请输入内容" v-model="input" clearable></el-input>
      </el-col>
      <el-col :span="24" class="input_boxs">
          <label>容纳人数：</label>
          <el-input class="lab_num_label_input" placeholder="请输入内容" v-model="input" clearable></el-input>
      </el-col>
      <el-col :span="24" class="input_boxs">
          <label>资金投入（万）：</label>
          <el-input class="lab_num_label_input" placeholder="请输入内容" v-model="input" clearable></el-input>
      </el-col>
      <el-col :span="24" class="input_boxs">
          <label>承建方：</label>
          <el-input class="lab_num_label_input" placeholder="请输入内容" v-model="input" clearable></el-input>
      </el-col>
      <el-col :span="24" class="input_boxs">
          <label>承建方联系人：</label>
          <el-input class="lab_num_label_input" placeholder="请输入内容" v-model="input" clearable></el-input>
      </el-col>
      <el-col :span="24" class="input_boxs">
          <label>承建方联系电话：</label>
          <el-input class="lab_num_label_input" placeholder="请输入内容" v-model="input" clearable></el-input>
      </el-col>
      <el-col :span="24" class="input_boxs">
          <label>交付时间：</label>
          <el-date-picker v-model="delivery_date1" type="date" placeholder="选择日期"></el-date-picker>
      </el-col>
      <el-col :span="24" class="input_boxs">
          <label>验收时间：</label>
          <el-date-picker v-model="delivery_date2" type="date" placeholder="选择日期"></el-date-picker>
      </el-col>
      <el-col :span="24" class="input_boxs">
          <label>验收人：</label>
          <el-input class="lab_num_label_input" placeholder="请输入内容" v-model="input" clearable></el-input>
      </el-col>
      <el-col :span="24" class="input_boxs">
          <label>维护截止日期：</label>
          <el-date-picker v-model="delivery_date3" type="date" placeholder="选择日期"></el-date-picker>
      </el-col>
      
      </div>
    </el-col>

    <el-col style="margin-top:35px;">
      <h2>其他信息</h2>
      <div class="else_add">
        <el-col :span="24" class="input_boxs">
          <label>实验室图片：</label>
          <span style="color:rgb(255, 153, 0);font-size:13px;">您最多可上传八张图片</span>
          <el-upload class="UPload" action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"
                     :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
            <i class="el-icon-plus" style="color:#67C23A;"></i>
          </el-upload>
        <el-dialog :visible.sync="dialogVisible">
           <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-col>

      <el-col>
          <label>简介</label>
          <el-input type="textarea" rows="5" placeholder="请输入内容" v-model="textarea" style="margin:10px 0 40px 20px;"></el-input>
      </el-col>

       <el-col>
          <label>实验室成果</label>
          <el-input type="textarea" rows="5" placeholder="请输入内容" v-model="textarea" style="margin:10px 0 0 20px;"></el-input>
      </el-col>
      </div>
    </el-col>

    

    <el-col class="submit-box">
      <el-button type="primary">提交</el-button>
      <el-button type="danger">取消</el-button>
    </el-col>


     <!-- ------------------------ 弹出组件 ---------------------------------- -->
    <el-dialog
      title="选择专业"
      :visible.sync="major"
      width="45%"
      top="200px"
      :close-on-click-modal="false"
      :modal-append-to-body="false"
      class="add-major"
    >
      <div class="select-school"></div>
      <div class="select-major"></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="major = false">取 消</el-button>
        <el-button type="primary" @click="major = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Touzi from './touzi'
import Juanzeng from './juanzeng'
export default {
  components: {
    Touzi,
    Juanzeng
  },
  data() {
    return {
      major: false, //重要 是否弹出对话框
      btns:[
        {name:"投资"},{name:"捐赠"}   //重要
      ],
      actives:1,     //重要 资金来源切换按钮样式
      comis:"Touzi",   //重要
      delivery_date1:"",  //交付日期
      delivery_date2:"",  //验收日期
      delivery_date3:"",  //维护截止日期
      dialogImageUrl: '',   //上传
      dialogVisible: false  //上传
    };
  },
  computed: {},
  methods: {      
    active(index,com){                //资金来源切换按钮样式
      this.actives = index;
      this.comis = com;
    }
  },
  handlePictureCardPreview(file) {    //上传
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
};
</script>

<style scoped>
.NewLab {
  height: 100%;
}
/* 面包屑 */
.path-box {
  width: 95%;
  display: block;
  margin-bottom: 50px;
  box-sizing: border-box;
  padding: 20px 40px 20px 20px;
  border-bottom: 1px solid #e6e6e6;
}
.basic_data .el-col,.msg_add .el-col{
    margin: 10px 0;
}
h2 {
  color: #67C23A;
  text-indent: 20px;
}
label{
   display: inline-block;
   width: 100px;
}
.el-input,.el-select{
    width: 450px;
}
/* 基本信息 */
.basic_data {
  min-height: 500px;
  margin-left: 100px;
}

/* 建设信息 */
.msg_add {
  width: 800px;
  min-height: 600px;
  margin-left: 100px;
  margin-top: 10px;

}
/* 其他信息 */
.else_add {
  width: 800px;
  margin-top: 20px;
  min-height: 600px;
  margin-left: 100px;
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
/* 面向专业 */
.add-box {
  padding-top: 10px;
  display: inline-block;
}
.add-box label {
  padding: none;
}
.add-box i {
  color: #67c23a;
  font-size: 22px;
  cursor: pointer;
}
/* 对话框内容 */
.select-school {
  width: 200px;
  height: 400px;
  display: inline-block;
  margin-left: 7%;
  border: 1px solid rebeccapurple;
}
.select-major {
  width: 200px;
  height: 400px;
  margin-right: 7%;
  display: inline-block;
  border: 1px solid rebeccapurple;
}
.list-box {
  width: 100%;
  min-height: 30px;
  margin-left: 100px;
}
.list-box span {
  height: 28px;
  margin: 8px;
  display: inline-block;
  border-radius: 10px;
  background: rgb(240, 240, 240);
}
.list-box span p {
  display: inline;
  margin: 10px;
  padding-left: 7px;
  line-height: 28px;
  text-align: center;
}
.list-box span i {
  position: relative;
  top: -15px;
  right: -15px;
  color: red;
}
/* 实验室管理人员名单 */
.lab_admin{
  width: 140px;
}
.lab_admin_input{
  width: 410px;
}
/* 计划开设 */
.lab_num_label{
  width: 180px;
}
.lab_num_label_input{
  width: 370px;
}
/* 资金来源 */
.fund{
  height: 150px;
}
.fund_box{
  display: inline-block;
}
.fund_label{
  float: left;
  margin-top: 10px;
}
.fund_box .el-button{
  margin-right: 25px;
}
/* 资金来源切换样式 */
.active{
  color: #ffffff!important;
  border: 1px solid #0066CC!important;
  background: #0066CC!important;
}
/* 输入框集合 */
.input_boxs label{
  width: 150px;
}
.input_boxs .el-input{
  width: 400px;
}
/* 上传 */
.UPload{
  margin-top: 20px;
  margin-left: 148px;
}
</style>