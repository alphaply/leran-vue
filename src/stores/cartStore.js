//购物车模块
import {defineStore} from "pinia";
import {ref} from "vue";

export const useCartStore = defineStore('cart', () => {
    // 1,定义购物车state
    const cartList = ref([])
    // 2,定义购物车action
    const addCart = (goods) => {
        //添加购物车操作
        //已经添加过，count+1
        //没有添加过，直接push
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if(item){
            item.count++
        }else {
            cartList.value.push(goods)
        }
    }

    return {
        cartList,
        addCart
    }
}, {
    persist: true

})


