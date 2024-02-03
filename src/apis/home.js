import httpInstance from "@/utils/http.js";


//获取轮播图数据
export function getBannerAPI(){
    return httpInstance.get('/home/banner')

}