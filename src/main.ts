import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router/index'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'



const app = createApp(App);
app.use(router)
app.use(ElementPlus)
app.mount('#app') 





