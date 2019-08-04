npm
import axios from 'axios'
//引入
import { Message } from 'element-ui'
import router from './router'

import QS from 'qs'
// axios.defaults.timeout = 1000;

axios.interceptors.request.use(function(config) { // 每次请求时会从localStorage中获取token

    let token = localStorage.getItem("token")
    var authorId = localStorage.getItem("authorId")
    if (token && authorId) {
        token = token // 把token加入到默认请求参数中
        authorId = authorId // 把token加入到默认请求参数中
        config.headers.common['token'] = token
        config.headers.common['authorId'] = authorId
    }
    return config
}, function(error) {
    console.log(error)
    return Promise.reject(error);
})

//封装post方法
export function post(obj) {
    var authorId = localStorage.getItem("authorId")
    obj.data.authorId = authorId
    return new Promise((resolve, reject) => {
        axios({
            method: "POST",
            url: obj.url,
            data: obj.data
        }).then(res => {
            if (obj.IS !== false) {
                successState(res)
            }
            resolve(res)
        }).catch(err => {
            console.log(err.response.status);
            let status = err.response.status;
            switch (status) {
                case 400:
                    Message({
                        message: "数据格式错误，请重新填写！",
                        type: "error",
                        showClose: true
                    })
                    break;
                case 401:
                    Message({
                        message: "登录过期，已为您跳转到登录页！",
                        type: "error",
                        showClose: true
                    })
                    localStorage.removeItem("token")
                    router.push({ path: "/" });
                    break;
                case 500:
                    Message({
                        message: "服务器异常，请稍后再试！",
                        type: "error",
                        showClose: true
                    })
                    break;
                default:
                    Message({
                        message: "未知错误！",
                        type: "error",
                        showClose: true
                    })

            }
            // if(err.response.status == 500){
            //     Message({
            //         message: "服务器异常",
            //         type: "error",
            //         showClose: true
            //     })
            // }else if(err.response.status == 401){
            //     Message({
            //         message: "登录过期，即将跳转到登录页！",
            //         type: "error",
            //         showClose: true
            //     })
            //         router.push({ path: "/"});
            // }
            reject(err)
        })
    })
}

function successState(res) {
    if (res.status == 200) {
        if (res.data.code == "0000") {
            Message({
                message: res.data.msg,
                type: "success",
                showClose: true
            })
            return
        } else if (res.data.code == "0001") {
            Message({
                message: res.data.msg,
                type: "error",
                showClose: true
            })
            return
        } else if (res.data.code == "9999") {
            Message({
                message: res.data.msg,
                type: "error",
                showClose: true
            })
        }
    } else {
        Message({
            message: "服务器错误！",
            type: "error",
            showClose: true
        })
        return
    }
}