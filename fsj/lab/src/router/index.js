import Router from 'vue-router'
import Inform from '../components/inform/inform'                        //通知通告
import Classadmin from '../components/classadmin/classadmin'            //课表管理
import Myclass from '../components/classadmin/myclass'                  //我的课表
import Addinform from '../components/inform/addinform'                  //添加通知
import Showinform from '../components/inform/showinform'                //展示通知
import Labmake from '../components/labmake/labmake'                     //展示通知************
import LookMake from '../components/labmake/LookMake'                   //展示通知 > 查看通知 *
import SetMake from '../components/labmake/SetMake'                     //展示通知 > 修改通知 *
//*******************
import ApplyLab from '../components/labmake/apply-lab'                  //申报实验室
import Labadmin from '../components/labadmin/labadmin'                  //实验室管理
import Newlab from '../components/labadmin/newlab'                      //实验室管理 > 新增实验室
import Lablog from '../components/labadmin/lablog'                      //实验室日志**************
import NewLog from '../components/labadmin/NewLog'                      //实验室日志 > 新增日志  *   
import LookLog from '../components/labadmin/LookLog'                    //实验室日志 > 查看日志  *
import SetLog from '../components/labadmin/SetLog'                      //实验室日志 > 修改日志  *
//         **************
import Labres from '../components/lab-res/lab-res'                      //实验室预约**************
import LabAdd from '../components/lab-res/LabAdd'                       //实验室预约 > 新增预约  *
import LabLook from '../components/lab-res/LabLook'                     //实验室预约 > 查看预约  *
import LabSet from '../components/lab-res/LabSet'                       //实验室预约 > 修改预约  *
//         **************
import Apparatus from '../components/apparatus/apparatus'               //借用归还************
import NewLend from '../components/apparatus/NewLend'                   //借用归还 > 新增借用 *
//   *****************
import Mend from '../components/apparatus/mend'                         //设备报修 ************
import NewServe from '../components/apparatus/NewServe'                 //设备报修 > 新增保修 *
//********************
import Lose from '../components/apparatus/lose'                         //设备报失 ************
import NewLose from '../components/apparatus/NewLose'                   //设备报失 > 新增报失 *
//********************
import TestAdmin from '../components/apparatus/TestAdmin'               //实验仪器管理****************
import NewInst from '../components/apparatus/NewInst'                   //实验仪器管理 > 新增仪器管理 *
import LookInst from '../components/apparatus/LookInst'                 //实验仪器管理 > 查看仪器管理 *
import SetInst from '../components/apparatus/SetInst'                   //实验仪器管理 > 修改仪器管理 *
//***************************
import Valuable from '../components/apparatus/valuable'                 //贵重仪器
import HaocaiNames from '../components/consumable/HaocaiNames'          //耗材品名管理*************
import Ruku from '../components/consumable/ruku'                        //耗材入库*************
import NewRuku from '../components/consumable/NewRuku'                  //耗材入库 > 新增入库 *
import SetRuku from '../components/consumable/SetRuku'                  //耗材入库 > 修改入库 *
//********************
import Chuku from '../components/consumable/chuku'                      //耗材出库*************
import NewChuku from '../components/consumable/NewChuku'                //耗材出库 > 新增出库  *
import SetChuku from '../components/consumable/SetChuku'                //耗材出库 > 修改出库  *
//********************
import Pandian from '../components/consumable/pandian'                  //耗材盘点**********
import NewPandian from '../components/consumable/NewPandian'            //耗材盘点 >新增盘点*
//*****************
import Haocaijihua from '../components/consumable/haocaijihua'          //学期耗材计划************
import NewHaocai from '../components/consumable/NewHaocai'              //学期耗材计划 > 申请购置 *
import Gouzhijihua from '../components/consumable/gouzhijihua'          //学期购置计划************
import NewGouzhi from '../components/consumable/NewGouzhi'              //学期购置计划 > 申请购置 *
//***********************
import Snameadmin from '../components/shexian/nameadmin'                //危险品名管理
import Sruku from '../components/shexian/ruku'                          //危险品入库 ****************
import NewSruku from '../components/shexian/Newruku'                    //危险品入库 > 新增涉险品入库*
import SetSruku from '../components/shexian/SetSruku'                   //危险品入库 > 修改涉险品入库*
//**************************
import Schuku from '../components/shexian/chuku'                        //危险品出库***********
import NewSchuku from '../components/shexian/newchuku'                 //危险品出库 > 新增出库*
import SetSchuku from '../components/shexian/SetSchuku'                 //危险品出库 > 修改出库*
//********************
import Spandian from '../components/shexian/pandian'                    //危险品盘点***********
import NewSpandian from '../components/shexian/NewSpandian'                    //危险品盘点 > 盘点  **
//********************

import Anquan from '../components/anquan/anquan'                        //安全管理
import Chengji from '../components/chengji/chengji'                     //成绩管理
import Tingke from '../components/tingke/tingke'                        //听查课管理
import HearClass from '../components/tingke/hear-class'                 //听课管理
import CheckClass from '../components/tingke/check-class'               //听查课管理
import Tongji from '../components/tongji/tongji'                        //统计

import UseAdmin from '../components/UseAdmin/UseAdmin'                  //系统用户管理
import UseSet from '../components/UseSet/UseSet'                         //角色权限配置
import MenuAdmin from '../components/UseAdmin/MenuAdmin'                 //菜单权限配置

//学校基础信息
import SchoolMsg from '../components/SchoolInfo/SchoolMsg'              //院系信息
import HomeMsg from '../components/SchoolInfo/HomeMsg'                  //专业信息
import ClassMsg from '../components/SchoolInfo/ClassMsg'                //班级信息

import TeacherAdmin from '../components/IdAdmin/TeacherAdmin'           //教职工
import StudentAdmin from '../components/IdAdmin/StudentAdmin'           //学生
import startSet from '../components/IdAdmin/startSet'                   // 学期课时设置
import building from '../components/IdAdmin/building'                   // 校区楼栋教室

import BaseConfig from '../components/BaseConfig/BaseConfig'           //基础配置

import Login from '../components/login/login'                           //用户登录
import error from '../components/common/404'                            //404
import test from '../components/test/test'                              //test





export default new Router({

    mode: 'hash', // history模式 干掉地址栏中的'#'
    linkActiveClass: "myactive",
    routes: [
        // 页面级路由
        {
            path: '*',
            redirect: '/404'        //重定向
        },
        {
            path: "/",           //默认
            component: Login,
            meta: {
                keepAlive: false
            }
        },
        {
            path: "/404",
            name: "error",
            component: error,     //404
            meta: {
                keepAlive: false
            }
        },
        {
            path: "/test",
            name: 'test',
            component: test
        },
        {
            path: '/Inform',
            name: 'Inform',
            component: Inform,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/Classadmin',   //课表管理页
            name: 'Classadmin',
            component: Classadmin,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/Labmake',   //实验室建设页面
            name: 'Labmake',
            component: Labmake,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/Labadmin",
            name: 'Labadmin',
            component: Labadmin,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/LookMake",
            name: 'LookMake',
            component: LookMake,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/SetMake",
            name: 'SetMake',
            component: SetMake,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/Lablog",
            name: 'Lablog',
            component: Lablog,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/Labres",
            name: 'Labres',
            component: Labres,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/Apparatus",
            name: 'Apparatus',
            component: Apparatus,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/Mend",
            name: 'Mend',
            component: Mend,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/Lose",
            name: 'Lose',
            component: Lose,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/Valuable",
            name: 'Valuable',
            component: Valuable,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/NewInst",
            name: 'NewInst',
            component: NewInst,
            meta: {
                keepAlive: true
            }
        }, {
            path: "/LookInst",
            name: 'LookInst',
            component: LookInst,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/HaocaiNames",
            name: 'HaocaiNames',
            component: HaocaiNames,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/Ruku",
            name: 'Ruku',
            component: Ruku,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/Chuku",
            name: 'Chuku',
            component: Chuku,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/Pandian",
            name: 'Pandian',
            component: Pandian,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/Haocaijihua",
            name: 'Haocaijihua',
            component: Haocaijihua,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/Gouzhijihua",
            name: 'Gouzhijihua',
            component: Gouzhijihua,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/Sruku",
            name: 'Sruku',
            component: Sruku,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/Schuku",
            name: 'Schuku',
            component: Schuku,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/Spandian",
            name: 'WSandian',
            component: Spandian,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/Snameadmin",
            name: 'Snameadmin',
            component: Snameadmin,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/Anquan",
            name: 'Anquan',
            component: Anquan,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/Chengji",
            name: 'Chengji',
            component: Chengji,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/Tingke",
            name: 'Tingke',
            component: Tingke,
            children: [
                {
                    path: "/HearClass",
                    name: 'HearClass',
                    component: HearClass,
                    meta: {
                        keepAlive: true
                    }
                },
                {
                    path: "/CheckClass",
                    name: 'CheckClass',
                    component: CheckClass,
                    meta: {
                        keepAlive: true
                    }
                },
            ],
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/Login",
            name: 'Login',
            component: Login,
            meta: {
                keepAlive: false
            }
        },
        {
            path: "/Tongji",
            name: 'tongji',
            component: Tongji,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/UseAdmin",
            name: 'UseAdmin',
            component: UseAdmin,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/UseSet",
            name: 'UseSet',
            component: UseSet,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/MenuAdmin",
            name: 'MenuAdmin',
            component: MenuAdmin,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/SchoolMsg",
            name: 'SchoolMsg',
            component: SchoolMsg,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/HomeMsg",
            name: 'HomeMsg',
            component: HomeMsg,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/ClassMsg",
            name: 'ClassMsg',
            component: ClassMsg,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/TeacherAdmin",
            name: 'TeacherAdmin',
            component: TeacherAdmin,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/startSet",
            name: 'startSet',
            component: startSet,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/StudentAdmin",
            name: 'StudentAdmin',
            component: StudentAdmin,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/building",
            name: 'building',
            component: building,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/BaseConfig",
            name: 'BaseConfig',
            component: BaseConfig,
            meta: {
                keepAlive: true
            }
        },


        // -------------------------------------------------------------

        // 子页面级路由
        {
            path: '/Addinform',      //添加通知页
            name: 'Addinform',
            component: Addinform,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/Showinform',     // 显示通知详情页
            name: 'Showinform',
            component: Showinform,
            meta: {
                keepAlive: true
            }
        },
        {
            path: "/Newlab",           // 实验室管理 > 新增实验室
            name: "Newlab",
            component: Newlab,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/ApplyLab',
            name: 'ApplyLab',
            component: ApplyLab,     //拟建实验室基本信息
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/Myclass',
            name: 'Myclass',
            component: Myclass,     //拟建实验室基本信息
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/LabAdd',
            name: 'LabAdd',
            component: LabAdd,     //实验室预约 LabAdd
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/LabLook',
            name: 'LabLook',
            component: LabLook,     //实验室查看 LabLook
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/LabSet',
            name: 'LabSet',
            component: LabSet,     //实验室修改 LabSet
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/NewLog',
            name: 'NewLog',
            component: NewLog,     //实验室日志 NewLog
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/LookLog',
            name: 'LookLog',
            component: LookLog,     //实验室日志 LookLog
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/SetLog',
            name: 'SetLog',
            component: SetLog,     //实验室日志 SetLog
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/TestAdmin',
            name: 'TestAdmin',
            component: TestAdmin,     //设备仪器 实验仪器管理
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/SetInst',
            name: 'SetInst',
            component: SetInst,     //设备仪器 实验仪器修改
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/NewLend',
            name: 'NewLend',
            component: NewLend,     //借用归还 NewLend
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/NewServe',
            name: 'NewServe',
            component: NewServe,     //设备报修 > 新增保修
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/NewLose',
            name: 'NewLose',
            component: NewLose,     //设备报失 > 新增报失
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/NewRuku',
            name: 'NewRuku',
            component: NewRuku,     //耗材入库 > 新增入库
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/SetRuku',
            name: 'SetRuku',
            component: SetRuku,     //耗材入库 > 修改入库
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/NewChuku',
            name: 'NewChuku',
            component: NewChuku,     //耗材出库 > 新增出库
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/SetChuku',
            name: 'SetChuku',
            component: SetChuku,     //耗材出库 > 修改出库
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/NewPandian',
            name: 'NewPandian',
            component: NewPandian,     //耗材盘点 > 新增盘点
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/NewHaocai',
            name: 'NewHaocai',
            component: NewHaocai,     //学期耗材计划 > 申请购置
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/NewGouzhi',
            name: 'NewGouzhi',
            component: NewGouzhi,     //学期购置计划 > 申请购置
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/NewSruku',
            name: 'NewSruku',
            component: NewSruku,     //涉险品品名管理 > 新增入库
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/SetSruku',
            name: 'SetSruku',
            component: SetSruku,     //涉险品品名管理 > 修改入库
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/NewSchuku',
            name: 'NewSchuku',
            component: NewSchuku,     //涉险品品名管理 > 新增出库
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/SetSchuku',
            name: 'SetSchuku',
            component: SetSchuku,     //涉险品品名管理 > 修改出库
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/NewSpandian',
            name: 'NewSpandian',
            component: NewSpandian,     //涉险品品名管理 > 修改出库
            meta: {
                keepAlive: true
            }
        },
    ]
})