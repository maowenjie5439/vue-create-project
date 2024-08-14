import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 3000,
    headers:{
        'X-Custom-Header': 'foobar'
    }
})

//请求拦截器
request.interceptors.request.use(config => {
    console.log('requestConfig: ', config)
    return config
})

//响应拦截器
request.interceptors.response.use(response => {
    console.log('response: ',response)
    if(response.data.code === 200){
        return Promise.resolve(response.data)
    }else{
        return Promise.reject(new Error(response.data.data.message))
    }
}, err =>{
    console.log('响应拦截器失败回调: ',err)
    //处理网络错误
    let msg = '';
    const status = err.response.status;
    switch (status) {
        case 401:
            msg = "token过期";
            break;
        case 403:
            msg = '无权访问';
            break;
        case 404:
            msg = "请求地址错误";
            break;
        case 500:
            msg = "服务器出现问题";
            break;
        default:
            msg = "无网络";

    }
    ElMessage({
        type: 'error',
        message: msg
    })
    return Promise.reject(err)
})
export default request