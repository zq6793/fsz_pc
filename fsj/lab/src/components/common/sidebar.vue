<!-- 组件说明 -->
<template>
  <div class="sidebar-boos">
    <div class="sidebar-person">
      <div class="person-box">
        <img src="../../assets/img/tea_1.jpg" alt />
      </div>
      <span>系统管理员</span>
      <p>开发部</p>
    </div>
    <div class="sidebar-nav">
      <el-col :span="24">
        <el-menu
          text-color="rgba(255, 255, 255, 0.9 )"
          :unique-opened="true"
          :default-active="$route.path"
        >
          <el-submenu v-for="items in ParentData()" :key="items.id" :index="items.resourceUrl">
            <template slot="title">
              <router-link :to="items.resourceUrl" >
                <i :class="GetIcon(items.icon)"></i>
                <span>{{items.name}}</span>
              </router-link>
            </template>

            <el-menu-item
              v-for="(Chlid,index) in ChlidMenu(items.id)"
              :key="Chlid.id"
              :index="Chlid.resourceUrl"
              @click="addactive(index)"
              :class="[addactives === index ? 'active':'']"
            >
              <router-link :to="Chlid.resourceUrl" tag="p">
                <i class="el-icon-s-promotion" :class="[addicon === index ?'addiconclass':'']"></i>
                {{Chlid.name}}
              </router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </div>
  </div>
</template>

<script>
import { post } from "../../request";
export default {
  components: {},
  data() {
    return {
      MenuData: [], //重要 获取用户所有权限菜单
      addactives: 0, //重要 子菜单切换样式
      addicon: 0
      // ID:""
    };
  },
  computed: {},
  created: function() {
    this.GetID(); //获取用户ID
    this.LoadMenu();
  },
  methods: {
    // 方法

    LoadMenu() {
      //获取数据
      var authorId = localStorage.getItem("authorId");
      var $_this = this; //this转移
      post({
        url: "cms/login/getWebMenu",
        data: { id: authorId },
        IS:false
      }).then(function(response) {
        $_this.MenuData = response.data.list;
      });
    },
    ParentData() {
      //筛选一级菜单
      let newdata = [];
      this.MenuData.forEach(item => {
        if (item.parentId == null) {
          newdata.push(item);
        }
      });
      return newdata;
    },

    ChlidMenu(id) {
      //筛选二级菜单
      let newdata = [];
      this.MenuData.forEach(item => {
        if (item.parentId == id) {
          newdata.push(item);
        }
      });
      return newdata;
    },
    GetIcon(icon) {
      let newicon = icon + " " + "icon-wh"; //获取icon
      return newicon;
    },
    addactive(index) {
      this.addactives = index;
      this.addicon = index;
    },
    GetID() {
      this.ID = this.$route.query.id;
    }
  }
};
</script>

<style scoped>
/* 一级菜单高亮样式 */
/* 二级菜单高亮样式 */
.addiconclass {
  /* 手型样式 */
  /* color: yellow !important;
  position: relative !important;
  right: 0px !important; */
}
.active {
  /* color: yellow !important; */
  background: rgb(63, 67, 70) !important;
}
.el-icon-s-promotion {
  position: relative;
  right: 60px;
  transition: all 0.3s;
  transform: rotate(20deg);
  /* display: none; */
}
/* .buttons {
  position: fixed;
  top: 20%;
  z-index: 999999999;
} */
.sidebar-boos {
  width: 181px;
  padding-top: 60px;
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(100vh - 60px);
  float: left;
  background: #28323a;
}
/* sidebar 个人资料 */
.sidebar-person {
  width: 180px;
  height: 120px;
  float: left;
  font-size: 15px;
  padding: 15px 0 25px 0;
  text-align: center;
  background: url(../../assets/img/head-line.png) no-repeat center bottom;
}
/* 头像样式 */
.person-box {
  width: 100%;
  height: 60px;
}
.person-box img {
  width: 60px;
  /* display: inline; */
  border-radius: 50%;
  transition-duration: 300ms;
}
.person-box img:hover {
  border-radius: 10%;
  transition-duration: 300ms;
}
/* 权限样式 */
.sidebar-person span {
  color: #fff;
  display: block;
  padding: 10px 0;
  line-height: 20px;
}
/* 部门样式 */
.sidebar-person p {
  height: 20px;
  line-height: 1.4;
  vertical-align: middle;
  color: #999;
}
.sidebar-nav {
  width: 100%;
  float: left;
  box-sizing: border-box;
}
.el-menu {
  /* 导航菜单样式 */
  width: 100%;
  padding-top: 15px;
}
.el-submenu {
  /* 每项下边框 */
  border-bottom: solid 1px #2c3740;
}
.el-submenu span {
  /* 标题字体14px */
  color: #fff;
  font-size: 14px !important;
}
.el-menu-item {
  /* 二级菜单容器 */
  background: rgb(63, 67, 70);
  padding: 0 20px 0 30px !important;
}
.el-menu-item.is-active {
  /* 字体高亮颜色 */
  color: yellow;
}

/* 导航栏高亮样式 */
/* .el-submenu {
  color: red !important;
} */
/* 字体与资料字体对齐 */
.template {
  padding-left: 35px;
}
/* i的宽高 */
.icon-wh {
  width: 16px;
  height: 15px;
  margin-left: 15px;
  margin-right: 10px;
  display: inline-block;
}
</style>