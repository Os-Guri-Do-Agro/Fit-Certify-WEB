// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { nextTick } from "vue";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
import Home from "../pages/Home.vue";
import QuemSomos from "../pages/QuemSomos.vue";
import Certificados from "../pages/Certificados.vue";
import Marcadores from "../pages/Marcadores.vue";
import Eventos from "../pages/Eventos.vue";
import Artigos from "../pages/Artigos.vue";
import Marketplace from "../pages/Marketplace.vue";
import Contato from "../pages/Contato.vue";
import ArtigoDetalhes from "../pages/ArtigoDetalhes.vue";
import EventoDetalhes from "../pages/EventosDetalhes.vue";
import MarketplaceDetalhes from "../pages/MarketplaceDetalhes.vue";
// import Login from "../pages/Login.vue";
// import Cadastro from "../pages/Cadastro.vue";
import Teste from "../pages/teste.vue";
import TermosPrivacidade from "../pages/TermosPrivacidade.vue";
import Cadastro from "../pages/cadastro/cadastro.vue";
import CadastroF from "../pages/cadastro/f/cadastroF.vue";
import Obrigado from "../pages/Obrigado.vue";
import Linktree from "../pages/Linktree.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/quemsomos", name: "QuemSomos", component: QuemSomos },
  { path: "/certificados", name: "Certificados", component: Certificados },
  { path: "/marcadores", name: "Marcadores", component: Marcadores },
  { path: "/eventos", name: "Eventos", component: Eventos },
  { path: "/artigos", name: "Artigos", component: Artigos },
  { path: "/marketplace", name: "Marketplace", component: Marketplace },
  { path: "/contato", name: "Contato", component: Contato },
  // { path: "/login", name: "Login", component: Login },
  // { path: "/cadastro", name: "Cadastro", component: Cadastro },
  { path: "/artigo/:id", name: "ArtigoDetalhe", component: ArtigoDetalhes },
  { path: "/evento/:id", name: "EventoDetalhe", component: EventoDetalhes },
  { path: "/linktree", name: "Linktree", component: Linktree },
  {
    path: "/marketplace/:id",
    name: "MarketDetalhes",
    component: MarketplaceDetalhes,
  },
  { path: "/teste", name: "Teste", component: Teste },
  {
    path: "/termosprivacidade",
    name: "TermosPrivacidade",
    component: TermosPrivacidade,
  },
  { path: "/cadastro", name: "Cadastro", component: Cadastro },
  { path: "/f/cadastro", name: "CadastroF", component: CadastroF },
    { path: "/obrigado", name: "obrigado", component: Obrigado },
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior() {
    nextTick(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
    return false;
  },
});


router.afterEach((to) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-XTN2MCVPCG', {
      page_path: to.fullPath
    });
  }
});

export default router;
