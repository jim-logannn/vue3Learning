import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//1、导入createPinia
import { createPinia } from 'pinia'
//2、执行方法得到实例
const pinia=createPinia()
//3、把pinia实例加入到app的应用中
createApp(App).use(pinia)
createApp(App).mount('#app')
