<!-- 组件说明 -->
<template>
  <div class>
    <!-- --------------------  居中弹出组件 ------------------ -->
    <el-dialog
      title
      :visible.sync="adddialog"
      width="30%"
      center
      :modal-append-to-body="false"
      :close-on-click-modal="false"
    >
      <slot></slot>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="adddialog = false,submit()">确 定</el-button>
        <el-button @click="adddialog = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
//import x from ''
export default {
  components: {},
  props:["dialogtitle","adddialog"],
  data() {
    return {
        adddialogs:false
    };
  },
  watch:{
      adddialog:function(newVal,oldVal){
          this.adddialogs = adddialog
      }
  },
  computed: {},
  methods: {
      submit(){
          this.$emit('submit')
      }
  }
};
</script>

<style scoped>
/* 标题 线 */
.el-dialog i {
  display: inline-block;
  width: 30%;
  height: 2px;
  margin: 0 15px 6px 15px;
  background: rgb(235, 235, 235);
}
.el-dialog span {
  font-size: 16px;
  font-weight: bold;
}
.el-dialog .el-input {
  width: 72%;
}
</style>