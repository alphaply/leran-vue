import { ref } from 'vue'
import { defineStore } from 'pinia'
import {getCategoryAPI} from "@/apis/layout.js";

export const useCategoryStore = defineStore('category', () => {
    const categoryList = ref([])


    //action方法
    const getCategory=async ()=>{
        const res = await getCategoryAPI()
        console.log(res)
        categoryList.value = res.result
    }

    return {
        categoryList,
        getCategory
    }
})
