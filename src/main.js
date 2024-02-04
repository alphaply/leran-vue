import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'


//引入初始化的样式
import '@/styles/common.scss'
import {useIntersectionObserver} from '@vueuse/core';


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
//定义全局指令
app.directive('img-lazy', {
    mounted(el, binding) {
        //el是指令绑定的元素 img
        //binding是指令的参数 绑定的值
        console.log(el, binding);
        useIntersectionObserver(
            el,
            ([{isIntersecting}]) => {
                // console.log(isIntersecting);
                if (isIntersecting) {
                    //图片进入可视区域
                    el.src=binding.value
                    console.log('图片进入可视区域')
                }
            }
        )
    }
})