import httpInstance from "@/utils/http.js";

export const findNewAPI = () => {
    return httpInstance({
        url: '/home/new'
    })
}
export const findHotAPI = () => {
    return httpInstance({
        url: '/home/hot'
    })
}

//获取轮播图数据
export function getBannerAPI(params = {}) {
    const {distributionSite = '1'} = params
    return httpInstance.get('/home/banner', {
        params: {
            distributionSite
        }
    })

}


/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
    return httpInstance({
        url: '/home/goods'
    })
}