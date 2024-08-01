import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'
import router   from "@/router";
import ElementPlus from'element-plus'
import "element-plus/dist/index.css"
import "@/assets/css/icon/shouye/iconfont.css"
import "@/assets/css/icon/sort/iconfont.css"
const app= createApp(App)
    app.use(router)
    app.use(ElementPlus)
    app.mount('#app')
