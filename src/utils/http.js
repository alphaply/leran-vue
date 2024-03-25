import axios from "axios";
import {ElMessage} from 'element-plus'
import 'element-plus/es/components/message/style/css'
import {useUserStore} from "@/stores/userStore.js";
import router from "@/router";

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})
// axios基础的封装


// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    //先从pinia里面获取数据
    const userStore = useUserStore()
    //按照要求进行配置
    const token = userStore.userInfo.token
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data,
    e => {
        //错误提示统一
        ElMessage.error(e.response.data.message)
        if (e.response.states === 401) {
            const userStore = useUserStore()
            userStore.clearUserInfo()
            router.push('/login')
        }
        return Promise.reject(e)
    }
)

export default httpInstance

