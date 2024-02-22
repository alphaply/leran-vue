import request from '@/utils/http.js'


export function getCategoryAPI(id){
    return request({
        url:'/category',
        params:{
            id
        }
    })
}

export function getCategoryFilterAPI(id){
    return request({
        url:'/category/sub/filter',
        params:{
            id
        }
    })
}

/**
 * @description: 获取导航数据
 * @data {
 categoryId: 1005000 ,
 page: 1,
 pageSize: 20,
 sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
 }
 * @return {*}
 */
export function getSubCategoryAPI(data){
    return request({
        url:'/category/goods/temporary',
        method:'post',
        data
    })
}