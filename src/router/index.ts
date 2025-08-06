// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { nextTick } from 'vue'
import Home from '../pages/Home.vue'
import QuemSomos from '../pages/QuemSomos.vue'
import Certificados from '../pages/Certificados.vue'
import Marcadores from '../pages/Marcadores.vue'
import Eventos from '../pages/Eventos.vue'
import Artigos from '../pages/Artigos.vue'
import Marketplace from '../pages/Marketplace.vue'
import Contato from '../pages/Contato.vue'
import ArtigoDetalhes from '../pages/ArtigoDetalhes.vue'  


const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/quemsomos', name: 'QuemSomos', component: QuemSomos },
  { path: '/certificados', name: 'Certificados', component: Certificados },
  { path: '/marcadores', name: 'Marcadores', component: Marcadores },
  { path: '/eventos', name: 'Eventos', component: Eventos },
  { path: '/artigos', name: 'Artigos', component: Artigos },
  { path: '/marketplace', name: 'Marketplace', component: Marketplace},
  { path: '/contato', name: 'Contato', component: Contato},
  {path: '/artigo/:id', name: 'ArtigoDetalhe', component: ArtigoDetalhes,}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  
  scrollBehavior() {
    nextTick(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
    return false 
  }
})

export default router
