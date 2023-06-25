<script setup>
//1、导入use的打头方法
import { onMounted } from "vue";
import {useCounterStore} from "./stores/counter"
import { storeToRefs } from "pinia";
//2、执行方法得到store实例对象
const counterStore=useCounterStore()
console.log(counterStore);

//直接解构赋值（响应式丢失）
// const {count,doubleCount}=counterStore
//方法包裹
//storeToRefs只负责数据，state和getter
const {count,doubleCount}=storeToRefs(counterStore)
//方法直接从原来的counterStore中解构赋值
const {increment,list}=counterStore

//触发action
onMounted(()=>{
  counterStore.getList()
})
</script>

<template>
  <button @click="increment">{{count}}</button>
  <div>double count: {{doubleCount}}</div>
  渲染数据
  <div v-for="item in counterStore.list" :key="item.id">
    <p>id: {{item.id}}</p>
    <p>name: {{item.name}}</p>
  </div>
</template>
