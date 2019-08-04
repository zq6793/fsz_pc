import Vue from 'vue'
import qs from 'qs'
import App from './App.vue'     //挂载App
import axios from 'axios'       //引入axios
import VueRouter from 'vue-router'  //引入路由
import router from './router'
import ElementUI from 'element-ui'  //elementUI
import VeeValidate from 'vee-validate'  //validate
import 'element-ui/lib/theme-chalk/index.css'   //elementUI style

// 引入公共样式
import './assets/css/reset.css'     //html样式重置
import './assets/css/bg-icon.css'   //菜单背景icon
import './assets/css/add-elementUI.css'   //elementUI样式改变
Vue.config.productionTip = false
Vue.prototype.$axios = axios   //全局注册axios
axios.defaults.baseURL = '/api/'
Vue.prototype.$qs = qs;
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VeeValidate)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
