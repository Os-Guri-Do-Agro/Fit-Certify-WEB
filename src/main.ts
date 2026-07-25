import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router/index'
import i18n from './i18n'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import { register } from 'swiper/element/bundle'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
import { vMaska } from 'maska/vue'
import { siteAnalytics } from './services/analytics/site-analytics'

register();
siteAnalytics.init()

const app = createApp(App);
app.use(router)
app.use(i18n)
app.use(ElementPlus)
app.use(PrimeVue)
app.use(ToastService)
app.component('Toast', Toast)
app.directive('maska', vMaska)
app.mount('#app') 





