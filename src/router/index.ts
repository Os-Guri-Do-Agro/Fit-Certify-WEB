// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'
import QuemSomos from '../pages/QuemSomos.vue'
import Certificados from '../pages/Certificados.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/quemsomos', name: 'QuemSomos', component: QuemSomos },
  { path: '/certificados', name: 'Certificados', component: Certificados }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
