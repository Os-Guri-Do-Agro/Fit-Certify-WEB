# FitCertify365 — Vue 3 + Tailwind CSS + GSAP

## Stack
- **Vue 3** (Composition API + `<script setup>`)
- **Vite** — dev server e build
- **Tailwind CSS v3** — utilitários + tokens customizados
- **GSAP + ScrollTrigger** — animações de entrada e contadores

## Instalação

```bash
npm install
npm run dev
```

Build de produção:
```bash
npm run build
npm run preview
```

## Estrutura

```
src/
├── App.vue                        # Raiz — importa todos os componentes
├── main.js
├── style.css                      # Tailwind base + utilitários globais
├── composables/
│   └── useReveal.js               # Hook GSAP ScrollTrigger reutilizável
└── components/
    ├── TheNav.vue                 # Navbar fixa com scroll detection
    ├── HeroSection.vue            # Hero com timeline GSAP
    ├── MarqueeBar.vue             # Faixa verde animada via CSS
    ├── FeaturesBar.vue            # Barra ciano com 3 pilares
    ├── SaudeSection.vue           # Split layout — saúde validada
    ├── EventosSection.vue         # Split layout — eventos parceiros
    ├── IndicadoresSection.vue     # Métricas com contador GSAP
    ├── ConteudosSection.vue       # Grid de artigos
    ├── CtaBanner.vue              # Banner de conversão
    ├── ApoioSection.vue           # Apoio institucional
    ├── PatrocinadoresSection.vue  # Logos patrocinadores
    └── TheFooter.vue              # Footer com colunas
```

## Cores (tailwind.config.js)

| Token       | Hex       |
|-------------|-----------|
| `primary`   | `#00C6FE` |
| `lime`      | `#88CE0D` |
| `dark`      | `#060606` |
| `dark-2`    | `#0e0e0e` |
| `dark-3`    | `#1a1a1a` |

## Fontes
- **Space Grotesk** — títulos (`font-head`)
- **DM Sans** — corpo (`font-body`)

> Carregadas via Google Fonts no `index.html`.

## Imagens
Os componentes usam placeholders textuais indicando o conteúdo esperado.  
Substitua os elementos com classe `img-placeholder` por `<img>` ou background real.
