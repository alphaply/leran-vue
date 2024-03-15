import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

//引入初始化的样式
import '@/styles/common.scss'
import {lazyLoad} from '@/directives/'

import {componetPlugin} from '@/components/index.js'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyLoad)
app.mount('#app')
app.use(componetPlugin)
//定义全局指令
