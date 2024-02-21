//封装分类数据的相关代码


import {onMounted, ref} from "vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {getCategoryAPI} from "@/apis/category.js";

export function useCategory(){
    const categoryData = ref({})
    const route = useRoute()
// 获取分类
    const getCategory = async (id) => {
        // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }
    onMounted(() => {
        getCategory(route.params.id)
    })

// 目标：路由参数变化时候，把分类接口重新发送
    onBeforeRouteUpdate((to) => {
        console.log('路由参数变化了')
        getCategory(to.params.id)
    })

return{
    categoryData
}

}