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

    const delCart=(skuId)=>{
        //删除购物车操作,在数组中删除某一项
        //找到下标志，删除，或者使用过滤方法

        //1,找到下标
        const idx = cartList.value.findIndex((item)=>skuId===item.skuId)
        cartList.value.splice(idx,1)

        //2,使用过滤方法
        // cartList.value = cartList.value.filter((item)=>skuId!==item.skuId)

    }

    return {
        cartList,
        addCart,
        delCart
    }
}, {
    persist: true

})


