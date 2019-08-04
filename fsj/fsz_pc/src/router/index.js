import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'  


import error from '../components/common/404'

Vue.use(Router)

export default new Router({
    routes: [
    {
        path: '*',
        redirect: '/404'
    },
    {
        path: '/',
        name: 'App',
        component: App
    },
    {
        path: '/404',
        name: 'error',
        component: error
    },

]
})