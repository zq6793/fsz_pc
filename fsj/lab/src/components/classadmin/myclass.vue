<!-- 组件说明 -->
<template>
  <div class="myclass">
    <Soso :pagetitle="pagetitle"></Soso>
    <el-row class="celect-box m20">
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
        <div class="grid-content bg-purple">
          <span class="demonstration">选择学期：</span>
          <el-select v-model="school" placeholder="请选择院系">
            <el-option>1</el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
        <div class="grid-content bg-purple">
          <span class="demonstration">教学周：</span>
          <el-select v-model="major" placeholder="请选择专业">
            <el-option>1</el-option>
          </el-select>
        </div>
      </el-col>
    </el-row>
    <el-row class="class-num m20">
      <p>
        本学期共
        <span>12</span>节课
      </p>
    </el-row>
    <el-row class="m20 table-box">
      <div class="table-header">
        <ul>
          <li></li>
          <li>
            <span>星期一</span>
            <span>2019-04-15</span>
          </li>
          <li>
            <span>星期二</span>
            <span>2019-04-16</span>
          </li>
          <li>
            <span>星期三</span>
            <span>2019-04-17</span>
          </li>
          <li>
            <span>星期四</span>
            <span>2019-04-18</span>
          </li>
          <li>
            <span>星期五</span>
            <span>2019-04-19</span>
          </li>
          <li>
            <span>星期六</span>
            <span>2019-04-20</span>
          </li>
          <li>
            <span>星日</span>
            <span>2019-04-21</span>
          </li>
        </ul>
      </div>
      <div class="table-body">
        <div class="class-nums">
          <ul>
            <li>
              <span>第一节</span>
              <span>（07:30-08:30）</span>
            </li>
            <li>
              <span>第二节</span>
              <span>（07:30-08:30）</span>
            </li>
            <li>
              <span>第三节</span>
              <span>（07:30-08:30）</span>
            </li>
            <li>
              <span>第四节</span>
              <span>（07:30-08:30）</span>
            </li>
            <li>
              <span>第五节</span>
              <span>（07:30-08:30）</span>
            </li>
            <li>
              <span>第六节</span>
              <span>（07:30-08:30）</span>
            </li>
            <li>
              <span>第七节</span>
              <span>（07:30-08:30）</span>
            </li>
            <li>
              <span>第八节</span>
              <span>（07:30-08:30）</span>
            </li>
            <li>
              <span>第九节</span>
              <span>（07:30-08:30）</span>
            </li>
            <li>
              <span>第十节</span>
              <span>（07:30-08:30）</span>
            </li>
          </ul>
        </div>
        <div class="tables">
          <table>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
import Soso from "../common/soso";
export default {
  components: {
    Soso
  },
  data() {
    return {
      pagetitle: "我的课表",
      school: "",
      major: ""
    };
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
/* 课表 表格 */
.table-box {
  width: 100%;
  font-size: 14px;
  border: 1px solid #ececec;
}
/* 表头 */
.table-header {
  width: 100%;
}
.table-header ul {
  height: 100%;
  display: flex;
}
.table-header ul li {
  width: 12.5%;
  min-width: 100px;
  min-height: 60px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
}
.table-header ul li:last-child {
  border-right: none;
}
.table-header ul li span {
  margin: 5px;
}
/* 左边课节 */
.class-nums {
  width: 12.5%;
  height: 100%;
  float: left;
}
.class-nums ul {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.class-nums ul li {
  width: 100%;
  min-width: 100px;
  padding: 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-right: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
}
.class-nums ul li:last-child {
  border-bottom: none;
}
.class-nums ul li span {
  padding: 5px 0;
  text-align: center;
}
/* 表格容器 */
.tables {
  width: 87.5%;
  float: left;
}
.tables table{
  width: 100%;
}
.tables table tr{
  width: 100%;
  height: 63px;
}
.tables table td{
  width: 12.5%;
  min-width: 100px;
  border-right:1px solid  #ececec;
  border-bottom:1px solid  #ececec;
}
/* 选择框容器 */
.celect-box {
  width: 98%;
  text-align: left;
  padding: 10px 20px;
  background: rgb(242, 242, 242);
}
/* 下拉框间距 */
.el-select {
  margin-right: 50px;
}
/* 响应式间距 */
.el-row {
  width: 95%;
}
.el-col {
  margin: 10px 0;
}
/* 课节 */
.class-num p {
  float: right;
}
.class-num span {
  color: #ff7902;
  font-size: 20px;
}
</style>