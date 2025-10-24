import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router/index'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import { register } from 'swiper/element/bundle'



register();

const app = createApp(App);
app.use(router)
app.use(ElementPlus)
app.mount('#app') 





