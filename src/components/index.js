//把所有组件进行全局化注册
//通过插件的方式
import ImagView from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'

export const componetPlugin={
    install(app){
        //使用app.进行全局注册
        app.component('XtxImageView',ImagView)
        app.component('XtxSku',Sku)
    }
}