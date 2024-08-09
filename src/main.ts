import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import '@/styles/index.scss'
import router from '@/router'
//引入自定义插件对象
import globalComponent from '@/components/index'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(ElementPlus, {
  locale: zhCn
})
app.use(router)
app.use(globalComponent)
app.use(pinia)
app.mount('#app')
