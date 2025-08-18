import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router/index'



import "vue-awesome-paginate/dist/style.css"

createApp(App).use(router).mount('#app')


