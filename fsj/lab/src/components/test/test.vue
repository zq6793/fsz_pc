<!-- 组件说明 -->
<template>
  <div class>
    <!-- <hr>输入框：
    <input type="text" v-model="msg">
    内容是{{msg}}
    <hr>单选框：
    <input type="radio" :checked="state" @click="onstate()">
    <hr>
    单选：
    <label for="stu">vue</label>
    <input type="radio" id="stu" v-model="selectedRadio" value="vue">

    <label for="js">JS</label>
    <input type="radio" id="js" v-model="selectedRadio" value="js">

    <label for="css">CSS</label>
    <input type="radio" id="css" v-model="selectedRadio" value="css">

    <p>当前选择的是{{selectedRadio}}</p>
    <hr>
    复选框：
    <br>
    <label for="name">姓名</label>
    <input type="checkbox" id="name" v-model="checkdData" value="姓名">

    <label for="age">年龄</label>
    <input type="checkbox" id="age" v-model="checkdData" value="年龄">

    <label for="sex">性别</label>
    <input type="checkbox" id="sex" v-model="checkdData" value="性别">
    <p>当前选择的是{{checkdData}}</p>-->
    <!-- <H2>这是父组件</H2>
    <Child>
      <el-button>删除</el-button>
    </Child>-->
  </div>
</template>

<script>
import Child from "./child";
import { post } from "../../request";
export default {
  components: {
    Child
  },
  data() {
    return {
      data: [
        { id: 1, parentid: null, name: "李白" },
        { id: 2, parentid: null, name: "李二白" },
        { id: 3, parentid: 2, name: "李三白" },
        { id: 4, parentid: 2, name: "李四白" },
        { id: 5, parentid: 2, name: "李五白" }
      ],
      data2: {
        name: "小李",
        age: "21"
      }
    };
  },
  created() {
    this.test();
  },
  computed: {},
  methods: {
    test() {
      post({
        url: "cms/login/addAdmin",
        data: {
          nickName: "测试",
          userName: "ceshi",
          password: "123",
          mobile: "10000",
          email: "3625874@qq.com",
          role: "1",
          userId: "555"
        }
      }).then(res => {
        alert("页面刷新")
        console.log(res);
      });
    }
  }
};
</script>

<style scoped>
</style>