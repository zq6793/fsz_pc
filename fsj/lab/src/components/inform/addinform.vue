<!-- 组件说明 -->
<template>
  <div class="addinform">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="path-box">
      <el-breadcrumb-item :to="{ path: '/' }">通知公告</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Addinform' }">发布详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form ref="form" :model="form" label-width="120px" class="m20">
      <el-form-item label="选择发送范围：">
        <el-select v-model="form.region" placeholder="选择发送范围：">
          <el-option label="全校" value="全校"></el-option>
          <el-option label="A院系" value="A院系"></el-option>
          <el-option label="B院系" value="B院系"></el-option>
          <el-option label="C院系" value="C院系"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="标题：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="内容：">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <div class="add-box">
        <el-upload
          class="upload-demo m20"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button class="addbtn" type="primary" size="mini">
            上传
            <i class="el-icon-upload el-icon--right"></i>
          </el-button>
          <div slot="tip" class="el-upload__tip">上传文件大小不超过**M</div>
        </el-upload>
      </div>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ],
      form: {
        name: "", //标题
        region: "", //范围
        desc: "" //内容
      }
    };
  },
  computed: {},
  methods: {
    onSubmit() {
      console.log("submit!");
      console.log(this.form)
      this.$router.push("/")
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>

<style scoped>
/* 大盒子样式 */
.addinform {
  width: 95%;
  margin-top: 20px;

}
/* 上传系列 容器 */
.add-box {
  width: 600px!important;
  position: relative;
  left: 100px;
}
/* 上传按钮样式 */
.addbtn {
  background: #909399 !important;
  border: none;
}
/* 面包屑 */
.path-box{
    width: 95%;
    display: block;
    margin-bottom: 50px;
    padding: 10px 40px 20px 20px;
    border-bottom: 1px solid #e6e6e6;
}
</style>