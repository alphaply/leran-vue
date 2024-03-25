//购物车模块
import {defineStore} from "pinia";
import {ref, computed} from "vue";
import {useUserStore} from "@/stores/userStore.js";
import {insertCart, findNewCartListAPI, delCartAPI} from "@/apis/cart.js";

export const useCartStore = defineStore('cart', () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    // 1,定义购物车state
    const cartList = ref([])
    // 2,定义购物车action

    const updateNewList=async ()=>{
        const res= await findNewCartListAPI()
        cartList.value = res.result
    }

    const addCart = async (goods) => {
        //添加购物车操作
        //已经添加过，count+1
        //没有添加过，直接push
        const {skuId, count} = goods
        if (isLogin.value) {
            //登录之后的加入购物车逻辑
            await insertCart({skuId, count})
            const res = await findNewCartListAPI()
            cartList.value = res.result
        } else {

            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            if (item) {
                item.count++
            } else {
                cartList.value.push(goods)
            }

        }


    }

    const delCart = async (skuId) => {
        //删除购物车操作,在数组中删除某一项
        //找到下标志，删除，或者使用过滤方法
        if (isLogin.value) {
            await delCartAPI([skuId])
            const res = await findNewCartListAPI()
            cartList.value = res.result
        } else {
            //1,找到下标
            const idx = cartList.value.findIndex((item) => skuId === item.skuId)
            cartList.value.splice(idx, 1)

            //2,使用过滤方法
            // cartList.value = cartList.value.filter((item)=>skuId!==item.skuId)
        }
    }

    //清楚购物车
    const clearCart=()=>{
        cartList.value = []
    }

    //计算属性
    //总的数量  所有项的count
    //总价 所有项的count*price
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

    //单选功能
    const singleCheck = (skuId, selected) => {
        //通过skuId找到要修改的项，然后吧selected修改为传入的值
        const item = cartList.value.find((item) => item.skuId === skuId).selected = selected
        item.selected = selected
    }

    //全选功能
    const isAll = computed(() => cartList.value.every((item) => item.selected))
    const allCheck = (selected) => {
        cartList.value.forEach((item) => item.selected = selected)
    }


    //已选择数量
    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))

    //已选择总价
    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.price * c.count, 0))

    return {
        updateNewList,
        clearCart,
        selectedCount,
        selectedPrice,
        allCheck,
        isAll,
        singleCheck,
        allCount,
        allPrice,
        cartList,
        addCart,
        delCart
    }
}, {
    persist: true

})


