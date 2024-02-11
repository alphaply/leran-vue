import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

//引入初始化的样式
import '@/styles/common.scss'
import {lazyLoad} from '@/directives/'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyLoad)
app.mount('#app')
//定义全局指令
