//封装购物车接口
import request from '@/utils/http.js'
 
export const insertCart = ({skuId, count}) => {
    return request({
        url: '/member/cart',
        method: 'post',
        data: {
            skuId,
            count
        }
    })
}


export const findNewCartListAPI = () => {
    return request({
        url: '/member/cart',

    })
}


//删除购物车
export const delCartAPI= (ids) => {
    return request({
        url: '/member/cart',
        method: 'delete',
        data: {
            ids
        }
    })
}


//合并购物车
export const mergeCartAPI = (data) => {
    return request({
        url:'/member/cart/merge',
        method:'post',
        data
    })
}