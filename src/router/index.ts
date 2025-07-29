// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'
import QuemSomos from '../pages/QuemSomos.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/quemsomos', name: 'QuemSomos', component: QuemSomos }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
