//定义懒加载插件

import {useIntersectionObserver} from "@vueuse/core";

export const lazyLoad = {
    install(app){
        //懒加载逻辑代码
        app.directive('img-lazy', {
            mounted(el, binding) {
                //el是指令绑定的元素 img
                //binding是指令的参数 绑定的值
                // console.log(el, binding);
                const {stop} = useIntersectionObserver(
                    el,
                    ([{isIntersecting}]) => {
                        // console.log(isIntersecting);
                        if (isIntersecting) {
                            //图片进入可视区域
                            el.src=binding.value
                            // console.log('图片进入可视区域')
                            stop();
                        }
                    }
                )
            }
        })
    }
}