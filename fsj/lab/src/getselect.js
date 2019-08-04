// import post from "./request"
import axios from 'axios'

export function getselect(obj){
    let types = obj.type
    obj.type.forEach(element => {
        if(element==null){ return }
        axios({
            method:"post",
            url:"cms/codeConfig/queryConfigListByType",
            data:{type:element}
        }).then(res=>{
            let arr = obj.sign.select[element]
            if(res.status == 200 && res.data.code == "0000"){
                res.data.list.forEach(element => {
                    arr.push({ label: element.name, value: element.code });
                });
            }
        })
    });
}
//使用 调用该函数时以对象的形式传递父组件所请求数据字段“type”、“sign = this”，传递this目的是拿到this里面的select
//    type属性以数组的方式传递参数，数组参数是该页面下拉框所请求的“配置类型”，即保存在数据库的type字段，
//    比如保存在“基础配置”里面的类型 “role” 代表 “身份”，“sign”代表“标识”，则传递以数组的2形式传递["role",sign]
//    注意：传递的“基础字段必须在页面的“实例select"字段中存在，如果不存在，则无法正确的追加到对应的数组里面，

//思路 调用该函数时，传递一个object对象，首先拿到obj的属性“type”，循环“type”数组，如果遇到数组属性为空，则不发送请求
//     拿到数组每一项之后向服务器发送"type"请求，每次发送的type请求即是当前循环的数组项，
//     拿到数据之后向当前循环的数组项push后台返回的数据，这里也就是说为什么页面的"select"对象的属性必须和传递的参数保持一致的缘由
//     --------------- 完 -------------
