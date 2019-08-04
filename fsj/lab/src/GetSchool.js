
//获取院系信息
import axios from 'axios'
export function GetSchool(){
    return new Promise(function(resolve,reject){
        axios({
            method:"post",
            url:"cms/department/queryDeptList",
            data:{}
        })
        resolve(res)
    })
}