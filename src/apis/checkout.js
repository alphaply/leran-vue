import request from '@/utils/http.js'


export const getCheckInfoAPI = () => {
    return request({
        url:'/member/order/pre'
    })
}