import httpInstance from "@/utils/http.js";

export const findNewAPI = () => {
    return httpInstance({
        url:'/home/new'
    })
}
export const findHotAPI = () => {
    return httpInstance({
        url:'/home/hot'
    })
}

//获取轮播图数据
export function getBannerAPI(){
    return httpInstance.get('/home/banner')

}