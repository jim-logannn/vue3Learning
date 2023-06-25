//导入一个方法defineStore
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from "axios";

const API_URL="http://geek.itheima.net/v1_0/channels"
export const useCounterStore=defineStore("counter",()=>{
    //定义数据
    const count=ref(0)

    //定义修改数据的方法（action同步+异步）
    const increment=()=>{
        count.value++
    }

    //定义异步action
    const list=ref([])
    const getList=async()=>{
        const {data:{data:res}}=await axios.get(API_URL)
        // console.log(res.channels);
        list.value=res.channels
    }

    //getter定义
    const doubleCount=computed(()=>{
        return count.value*2
    })

    //以对象的方式return供组件使用
    return {
        count,
        doubleCount,
        increment,
        list,
        getList
    }
})