import { ref,computed,onMounted } from 'vue'
import dayjs from "dayjs";
//封装倒计时逻辑函数

export const useCountDown = () => {
    let timer = null
    // 1.响应式的数据
    const time = ref(0)
    // 2.开始倒计时的函数,格式化我们的时间
    const formatTime = computed(() => {
      return dayjs.unix(time.value).format('mm:ss')
    })
    const start = (currentTime) => {
        //开始倒计时逻辑
        // 每隔一秒 - 1
        time.value = currentTime
        setInterval(() =>{
            time.value--
        }, 1000)
    }

    //组件销毁时候，清除定时器
    onMounted(() => {
        timer && clearInterval(timer)
    })
    return {
        formatTime,
        start
    }
}