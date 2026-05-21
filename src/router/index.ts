// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
import Home from "../pages/Home .vue";
import QuemSomos from "../pages/QuemSomos.vue";
import Certificados from "../pages/Certificados.vue";
import Marcadores from "../pages/Marcadores.vue";
import Eventos from "../pages/Eventos.vue";
import Artigos from "../pages/Artigos.vue";
// import Marketplace from "../pages/Marketplace.vue";
import Contato from "../pages/Contato.vue";
import ArtigoDetalhes from "../pages/ArtigoDetalhes.vue";
import EventoDetalhes from "../pages/EventosDetalhes.vue";
// import MarketplaceDetalhes from "../pages/MarketplaceDetalhes.vue";
// import Login from "../pages/Login.vue";
// import Cadastro from "../pages/Cadastro.vue";
import Teste from "../pages/teste.vue";
import TermosPrivacidade from "../pages/TermosPrivacidade.vue";
import Cadastro from "../pages/cadastro/cadastro.vue";
import CadastroF from "../pages/cadastro/f/cadastroF.vue";
import Obrigado from "../pages/Obrigado.vue";
import Linktree from "../pages/Linktree.vue";
import { siteAnalytics } from "../services/analytics/site-analytics";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/quemsomos", name: "QuemSomos", component: QuemSomos },
  { path: "/certificados", name: "Certificados", component: Certificados },
  { path: "/marcadores", name: "Marcadores", component: Marcadores },
  { path: "/eventos", name: "Eventos", component: Eventos },
  { path: "/artigos", name: "Artigos", component: Artigos },
  // { path: "/marketplace", name: "Marketplace", component: Marketplace },
  { path: "/contato", name: "Contato", component: Contato },
  // { path: "/login", name: "Login", component: Login },
  // { path: "/cadastro", name: "Cadastro", component: Cadastro },
  { path: "/artigo/:id", name: "ArtigoDetalhe", component: ArtigoDetalhes },
  { path: "/evento/:id", name: "EventoDetalhe", component: EventoDetalhes },
  { path: "/linktree", name: "Linktree", component: Linktree },
  // {
  //   path: "/marketplace/:id",
  //   name: "MarketDetalhes",
  //   component: MarketplaceDetalhes,
  // },
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

  scrollBehavior(to, _from, savedPosition) {
    // Botão voltar/avançar do navegador: respeita a posição que estava
    if (savedPosition) {
      return savedPosition;
    }
    // Navegação para uma âncora (#faq, etc.): vai para o elemento
    if (to.hash) {
      return { el: to.hash, top: 0, behavior: "smooth" };
    }
    // Navegação normal entre páginas: garante que comece no topo.
    // Usamos Promise com pequeno atraso para esperar o novo componente
    // montar (e o ScrollTrigger/GSAP terminarem o setup) antes do scroll,
    // evitando que animações de entrada cancelem o reposicionamento.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      }, 0);
    });
  },
});


router.beforeEach((to, from, next) => {
  // Em troca de rota, força o topo imediatamente para que a nova página
  // não apareça no meio/fim por causa da posição da página anterior.
  if (typeof window !== "undefined" && to.path !== from.path && !to.hash) {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }
  next();
});

router.afterEach((to, from) => {
  // Fallback: depois que a navegação completou, garante novamente que
  // estamos no topo (alguns ScrollTrigger.refresh em onMounted podem
  // tentar reposicionar a página).
  if (typeof window !== "undefined" && to.path !== from.path && !to.hash) {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    });
  }

  if (typeof window !== "undefined") {
    const queryString = new URLSearchParams(
      Object.entries(to.query).flatMap(([key, value]) => {
        if (value == null) return [];
        if (Array.isArray(value)) return value.map((v) => [key, String(v)]);
        return [[key, String(value)]];
      }),
    ).toString();

    siteAnalytics.onRouteChange(
      to.fullPath,
      queryString ? `?${queryString}` : window.location.search,
    );
  }

  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-XTN2MCVPCG', {
      page_path: to.fullPath
    });
  }
});

export default router;
