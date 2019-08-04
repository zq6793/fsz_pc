<!-- 组件说明 -->
<template>
  <div class="showinform">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="path-box m20">
      <el-breadcrumb-item :to="{ path: '/' }">通知公告</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Showinform' }">通知详情</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>{{title}}</h1>
    <div class="data-cent">
      <el-tag type="success" class="float-right">{{name}}</el-tag>
      <el-tag type="info" class="float-right">{{date}}</el-tag>
    </div>
    <div class="content">
      <p>{{data}}</p>
    </div>
  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  data() {
    return {
      title: "",
      name: "",
      date: "",
      data:""
    };
  },
  created() {
    this.getrouterdata(); //创建结束 调用路由参数
  },
  methods: {
    //   获取路由参数
    getrouterdata() {
      this.title = this.$route.query.title;
      this.name = this.$route.query.name;
      this.date = this.$route.query.date;
      this.data = this.$route.query.data;
      console.log(this.$route.query.data);
    }
  }
};
</script>

<style scoped>
/* 容器 */
.showinform {
  margin-top: 20px;
}
/* 面包屑 */
.path-box {
  margin-bottom: 50px;
  padding: 10px;
  border-bottom: 1px solid #53cac3;
}
/* 标题 */
h1 {
  text-align: center;
  font-size: 30px;
}
/* 文字区域 */
.content {
  width: 80%;
  margin: auto;
  padding: 20px;
  overflow: auto;
  min-height: 100px;
  max-height: 600px;
  line-height: 1.5;
  margin-top: 30px;
  text-indent: 20px;
  padding-bottom: 30px;
  border-radius: 20px;
  font-size: 17px;
  border: 2px dashed #53cac3;
  background: rgb(245, 245, 245);

}
/* 浮动 */
.data-cent{
    width: 100%;
    text-align: center;
    margin-top: 20px;
    padding: 20px 0;
}
</style>