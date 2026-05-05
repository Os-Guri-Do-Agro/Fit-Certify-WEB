# Referência de UI — estilo da Home (`Home .vue`)

Este documento extrai **tokens, padrões e componentes** usados na landing da Home para servir de base ao alinhar **outras telas** ao mesmo idioma visual (dark premium + acentos ciano e lima).

**Arquivo-fonte:** `src/pages/Home .vue` (template + `<style scoped>` + animações GSAP no `onMounted`).

---

## 1. Identidade visual (resumo)

- **Base:** fundo quase preto (`#060606`), texto branco, sensação **tech / saúde / performance**.
- **Acentos duplos:**
  - **Ciano** `#00C6FE` — links, destaques em título, bordas de CTA secundário, ícones e métricas “frias”.
  - **Lima** `#88CE0D` — energia, marca, marquee, destaques alternados, checks e hovers complementares.
- **Contraste:** seções alternam `#060606`, `#0e0e0e`, `#1a1a1a` e faixas **sólidas** em ciano ou lima para ritmo vertical.
- **Textura:** grade sutil no hero (`.hero-grid`), gradientes sobre fotos, **reveal no scroll** (opacidade + translateY).

---

## 2. Paleta (valores literais da página)

| Token de uso | Hex / valor | Onde aparece |
|--------------|-------------|--------------|
| Fundo principal | `#060606` | Wrapper da página, seções “default”, sponsors |
| Fundo elevado / imagem | `#0e0e0e` | Bloco “Saúde validada”, cards de artigos |
| Fundo intermediário | `#1a1a1a` | Seção indicadores/métricas |
| Acento ciano | `#00C6FE` | Título hero (ênfase `<em>`), barra de features, highlights em H2, ghost button, hovers de lista |
| Acento lima | `#88CE0D` | Marquee, highlights em H2, CTA primário hero, tags/checks, métricas “quentes”, hover em apoiadores |
| Ciano escuro (gradiente CTA) | `#007DB8` | Gradiente do banner final com `#00C6FE` |
| Texto secundário | `white/60`, `white/55`, `white/50`, `white/45`, `white/35` | Parágrafos, meta, labels vazias |
| Borda sutil escura | `white/[0.06]` a `white/[0.08]` | Cards, listas, separador sponsors |
| Superfície clara (cards na faixa ciano) | `white/95`, borda `white/90` | Três cards da feature bar |

**Regra prática:** em fundo escuro, **títulos** em branco com **uma linha ou palavra** em ciano *ou* lima (alternância entre seções na Home). Corpo em **branco com opacidade** (~60%).

---

## 3. Tipografia

| Papel | Família | Observações na Home |
|-------|---------|----------------------|
| Títulos / UI forte | **Space Grotesk** | Classes `.font-head`; uppercase em labels pequenos; `tracking` negativo em H1/H2 (`-0.02em` a `-0.03em`) |
| Corpo | **DM Sans** | `.font-body` no container raiz |

**Escalas recorrentes (clamp / fixo):**

- **H1 hero:** `clamp(34px, 4.76vw, 60px)` → breakpoints maiores ampliam até ~83px.
- **H2 de seção:** `clamp(32px, 4vw, 54px)` (blocos principais) ou `clamp(28px, 3vw, 42px)` (conteúdo / CTA).
- **Lead hero:** 12px → 14px → 15px conforme viewport; `leading` ~1.65; cor `white/60`.
- **Corpo de seção:** `text-base` com `leading-[1.75]` e `text-white/60`.
- **Eyebrow / section tag:** ~11px, **uppercase**, `letter-spacing: 0.14em`, peso 700, cor **lima** + traço antes (`::before` 22×2px).

**Microcopy de cards:** kickers `11px–12px` uppercase; títulos de card `15px–17px`; excerpt `13px` com `white/50`.

---

## 4. Layout e espaçamento

- **Largura máxima do conteúdo:** `max-w-[1200px]` (maioria das seções); apoio institucional usa `max-w-[1100px]`.
- **Padding horizontal:** `px-4` mobile → `md:px-12` desktop (padrão repetido).
- **Seções verticais:** `py-16` em blocos texto+imagem; conteúdos `py-[120px]`; CTA banner `py-20`; apoio/patrocinadores `py-24`.
- **Grid:** feature bar `md:grid-cols-3`; métricas `md:grid-cols-2`; artigos `md:grid-cols-3` com `gap-6`.
- **Imagens full-bleed:** `lg:w-[50vw]` com posicionamento absoluto e gradiente lateral (`#0e0e0e` ou `#060606` → transparente em ~30%) para fundir com o texto.

---

## 5. Componentes reutilizáveis (classes da Home)

### 5.1 Botões (`.btn` + variantes)

Definidos no `<style scoped>` da Home — **ideal extrair para CSS global ou componente** ao propagar o design.

| Classe | Visual | Uso na Home |
|--------|--------|-------------|
| `.btn` | Base: radius 8px, padding 10×20, Space Grotesk 13px bold, uppercase, `letter-spacing: 0.05em` | Base para todas as variantes |
| `.btn-lime` | Fundo `#88CE0D`, texto `#060606`, padding maior (14×28), hover leve `translateY(-1px)` + lima mais clara | CTA principal do hero |
| `.btn-outline` | Transparente, borda `white/20`, hover borda e texto `#00C6FE` | Secundário hero |
| `.btn-ghost` | Borda e texto `#00C6FE`, hover preenche ciano e texto `#060606` | “Ver mais” em seções |
| `.btn-dark` | (Nome legado) fundo lima, texto branco — usado no CTA sobre gradiente | Login no banner |
| `.btn-white` | Fundo branco, texto lima | Registro no banner |
| `.btn-primary` | Definido no CSS mas não usado no template atual | Reserva para ações primárias em fundo escuro |

### 5.2 Tags de seção

- `.section-tag` — mesmo sistema visual do `.eyebrow` (lima + linha). No centro: `mx-auto w-fit justify-center`.

### 5.3 Listas e checks

- Itens: `flex gap-3`, texto `text-white/75`, ícone `.check-dot` (SVG inline, círculo lima + check preto).

### 5.4 Cards e listas

- **Feature bar:** `rounded-2xl`, `border-white/90`, `bg-white/95`, sombra `0_16px_48px_-18px`, `backdrop-blur-md`, hover para branco puro e sombra maior; ícone em caixa `rounded-xl` / `md:rounded-2xl` com sombra inset.
- **Eventos (lista):** `rounded-lg`, `border-white/[0.08]`, `bg-white/[0.04]`, hover `border-[#00C6FE]`; data em “pill” ciano com texto `#060606`.
- **Artigos:** `rounded-xl`, `border-white/[0.06]`, `bg-[#0e0e0e]`, hover `-translate-y-1` e `border-[#00C6FE]/30`; tag categoria em lima uppercase ~10px.
- **Apoiadores:** borda `white/[0.08]`, hover `border-[#88CE0D]/40`.
- **Patrocinadores:** `bg-white/[0.08]`, sem borda colorida no hover (só opacidade).

### 5.5 Métricas (grid 2×2)

- Card: `rounded-xl`, borda e fundo com opacidade baixa (`lime` ou `cyan`).
- Número: `font-head`, `text-[32px]`, cor do acento.
- Unidade: `11px` uppercase `tracking-[0.08em]` `text-white/45`.
- Label: `text-xs` `text-white/50`.

### 5.6 Faixas especiais

- **Marquee:** fundo `#88CE0D`, texto `#060606`, itens em uppercase forte, separador `✦` em `#060606/30`, animação CSS `marquee` 22s linear.
- **CTA final:** gradiente `135deg` de `#00C6FE` para `#007DB8`; títulos em `#060606` com highlight lima; subtítulo `#060606/70`.

---

## 6. Hero (padrão fotográfico)

1. Imagem full viewport (`object-cover`), overlay em **dois gradientes** (escurecer à esquerda e na base).
2. Camada `.hero-grid`: grid 80×80px em ciano muito suave + `mask-image` para sumir nas bordas.
3. Copy com stagger GSAP nos `.hero-item`.

**Ao replicar em outras páginas:** manter a mesma lógica de **gradiente + grade opcional** para não competir com o texto.

---

## 7. Motion (GSAP)

- **Hero:** `from` em `.hero-item` — `opacity 0`, `y: 26`, `duration 0.8`, `stagger 0.14`, `ease: power3.out`.
- **Scroll reveal:** cada `.reveal-item` — `opacity 0`, `y: 28`, `duration 0.7`, `ScrollTrigger` `start: 'top 88%'`, `once: true`.
- **Contadores:** `ScrollTrigger` no container de métricas; tween numérico com `power2.out` 1.4s.

**Diretriz:** animações **entrada única** (once), deslocamento vertical modesto (26–28px), easing suave — evita “site exagerado” e mantém consistência.

---

## 8. Imagens e fallback

- Artigo sem imagem: `bg-gradient-to-br from-[#00C6FE]/40 to-[#88CE0D]/30`.
- Skeletons: `animate-pulse`, bordas e fundos `white/10` ou `white/[0.04]`.

---

## 9. Checklist para alinhar outra tela

1. [ ] Raiz: `bg-[#060606]` (ou `#0e0e0e` / `#1a1a1a` se for subpágina “mais contida”) + `text-white` + `font-body` no wrapper.
2. [ ] Títulos com `font-head`, `font-bold`, `tracking-[-0.02em]`, escala tipo clamp da Home.
3. [ ] Eyebrow/tag: padrão lima + linha (copiar `.section-tag` / `.eyebrow` ou componentizar).
4. [ ] Corpo: `text-base` + `leading-[1.75]` + `text-white/60` onde for descritivo.
5. [ ] CTAs: usar as mesmas variantes (lime primário em destaque, outline/ghost secundários).
6. [ ] Cards: `rounded-xl` ou `rounded-2xl`, bordas `white/[0.06–0.08]`, hover com **ciano** ou **lima** conforme contexto (lista dinâmica → ciano; parceiros → lima).
7. [ ] Container `max-w-[1200px]` + `px-4 md:px-12`.
8. [ ] Opcional: classe `reveal-item` + mesmo trecho GSAP para continuidade entre páginas.
9. [ ] Acessibilidade: manter contraste em botões sobre lima/ciano (texto `#060606` em fundos claros).

---

## 10. Próximo passo técnico recomendado

Hoje parte dos tokens vive **só no scoped da Home** (botões, tags, check, marquee, hero-grid). Para escalar:

- Extrair **variáveis CSS** (`--color-bg`, `--accent-cyan`, `--accent-lime`, `--font-head`, `--radius-btn`) ou **@theme** do Tailwind no projeto.
- Criar **componentes** `BaseButton`, `SectionTag`, `ContentSection` espelhando estes padrões.

Assim o presente MD permanece como **referência semântica**; o código compartilhado vira a fonte única da verdade.

---

*Documento gerado a partir da análise estática de `src/pages/Home .vue` — atualize este arquivo se a Home for alterada.*
