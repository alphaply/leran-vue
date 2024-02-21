import request from '@/utils/http.js'


export function getCategoryAPI(id){
    return request({
        url:'/category',
        params:{
            id
        }
    })
}

export function getSubCategoryAPI(id){
    return request({
        url:'/category/sub/filter',
        params:{
            id
        }
    })
}