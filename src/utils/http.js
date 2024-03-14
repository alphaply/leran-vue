import axios from "axios";
import {ElMessage} from 'element-plus'
import 'element-plus/es/components/message/style/css'



const httpInstance =axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})
// axios基础的封装


// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    //错误提示统一
    ElMessage.error(e.response.data.message)
    return Promise.reject(e)
})


export default httpInstance