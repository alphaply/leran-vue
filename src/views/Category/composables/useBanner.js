//封装banner相关的业务代码
import { ref, onMounted } from 'vue'
import {getBannerAPI} from '@/apis/home.js'

export function useBanner(){
    //获取banner
    const bannerList = ref([])
    const getBanner = async () => {
        const res = await getBannerAPI({distributionSite: '2'})
        console.log(res)
        bannerList.value = res.result
    }

    onMounted(() => {
        getBanner()
    })

    return {
        bannerList
    }

}