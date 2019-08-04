<!-- 组件说明 -->
<template>
  <div class="Login">
    <div class="login-box">
      <div class="login-title">
        <h1>User Login</h1>
      </div>
      <el-input v-model="userName" placeholder="请输入账号" clearable></el-input>
      <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
      <el-button type="primary" @click="submit()" :disabled="SubStatus">登录</el-button>
      <Loding v-if="LodingState"></Loding>
    </div>
  </div>
</template>
<script>
import Loding from "../common/loading";
import { post } from "../../request";

export default {
  components: {
    Loding
  },
  data() {
    return {
      LodingState: false, //重要 loading状态
      userName: "",
      password: "",
      SubStatus:false
    };
  },
  methods: {
    submit() {
      var $_this = this; //解决this指向转变
      $_this.LodingState = true;
      $_this.SubStatus = true
      post({
        url: "cms/login/login",
        data: {
          userName: this.userName,
          password: this.password
        }
      })
        .then(function(response) {
          // console.log(response);
          let ID = response.data.id;
          console.log(ID);
          if (response.data.code == "0000") {
            const token = response.data.token;
            const authorId = response.data.authorId;
            window.localStorage.setItem("token", token);
            window.localStorage.setItem("authorId", authorId);
            setTimeout(function() {
              //为了增加用户体验
              $_this.$router.push({ name: "Inform", query: { id: ID } });
              $_this.LodingState = false;
            }, 800);
          } else {
            //为了增加用户体验
            $_this.LodingState = false;
            $_this.SubStatus = false
            $_this.password = null;
            // $_this.open4(); //调用弹框
          }
        })
        .catch(err => {
          console.log(err.response.status);
          if (err.response.status == 500) {
            $_this.LodingState = false;
            $_this.SubStatus = false
          }
        });
    },
    open4() {
      this.$notify.error({
        title: "Error",
        message: "密码错误，请重新输入！",
        duration: 1500,
        showClose: true //关闭按钮
      });
    }
  }
};
</script>

<style>
.el-notification {
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -165px;
  margin-top: 160px;
}
body {
  width: 100%;
  height: 100%;
  position: fixed;
  padding: 0;
  margin: 0;
}
.Login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  background: url(../../assets/img/login.jpg) no-repeat center;
  background-size: 100% 100%;
}
.Login .login-box {
  width: 300px;
  height: 300px;
  position: relative;
  background: #fff;
}
.Login .login-title {
  width: 100%;
  height: 65px;
  margin-bottom: 20px;
  background: #6d4a70;
}
.Login .login-title h1 {
  color: #ffffff;
  font-size: 30px;
  text-align: left;
  margin-left: 30px;
  line-height: 65px;
}
.Login .el-input {
  margin: 10px 0;
}
.Login .el-button {
  margin-top: 30px;
  width: 60%;
}
/* 输入框样式 */
.Login .el-input input {
  width: 80%;
  font-weight: 900px;
  border: none;
  color: #9e61a3;
  background: rgb(234, 234, 234);
}
.Login .el-input__suffix {
  right: 35px !important;
}
</style>