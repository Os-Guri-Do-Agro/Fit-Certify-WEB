<template>
  <div ref="detPageRef" class="det-page bg-[#f8fafc] text-[#0f172a] font-body">
    <!-- Hero: mesmo vocabulário de Eventos (overlay + grid + copy à esquerda) -->
    <section
      class="det-hero-shell relative flex min-h-[min(64vh,520px)] overflow-hidden pb-16 pt-24 md:min-h-[min(70vh,600px)] md:pb-20 md:pt-20"
    >
      <img
        v-if="heroImageSrc"
        :src="heroImageSrc"
        alt=""
        class="det-hero-bg pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div
        v-else
        class="det-hero-bg det-hero-bg--placeholder pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      />
      <div class="det-hero-overlay pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />
      <div class="det-hero-grid pointer-events-none absolute inset-0 z-[2]" aria-hidden="true" />

      <div
        class="relative z-[3] mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-4 py-6 md:px-12 md:py-10"
      >
        <div class="det-hero-copy w-full max-w-[min(580px,100%)] text-white">
          <div class="det-hero-stack">
            <RouterLink
              :to="{ name: 'Eventos' }"
              class="det-hero-item det-back font-head"
            >
              {{ t('eventosDetalhes.back') }}
            </RouterLink>
            <p class="det-hero-item eyebrow det-hero-eyebrow">{{ t('eventosDetalhes.heroEyebrow') }}</p>
          </div>

          <template v-if="carregando">
            <div class="det-hero-item det-skel det-skel--title" aria-hidden="true" />
            <div class="det-hero-item det-skel det-skel--lead" aria-hidden="true" />
            <div class="det-hero-item flex flex-wrap gap-3">
              <div class="det-skel det-skel--btn" aria-hidden="true" />
              <div class="det-skel det-skel--btn" aria-hidden="true" />
            </div>
          </template>

          <template v-else>
            <h1
              class="det-hero-item det-hero-title font-head text-[clamp(22px,3.6vw,40px)] font-bold leading-[1.08] tracking-[-0.03em]"
            >
              {{ getLocalizedField(evento, 'titulo', tipoEvento) }}
              <span class="det-hero-title__dot" aria-hidden="true" />
            </h1>
            <p
              class="det-hero-item det-hero-lead max-w-[480px] border-l-2 border-[#00C6FE] pl-5 text-[14px] leading-[1.75] text-white/65 sm:text-[15px]"
            >
              {{ heroLead }}
            </p>
            <div class="det-hero-item det-hero-actions flex flex-wrap gap-3">
              <a
                v-if="evento?.linkEnviarCertificado"
                class="btn btn-lime"
                :href="`mailto:${evento.linkEnviarCertificado}`"
              >
                {{ t('eventosDetalhes.button1') }}
              </a>
              <a
                v-if="evento?.linkSiteProva"
                class="btn btn-outline"
                :href="evento.linkSiteProva"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ t('eventosDetalhes.button2') }}
              </a>
            </div>
          </template>
        </div>
      </div>

      <div
        class="pointer-events-none absolute bottom-0 left-0 right-0 z-[4] h-px bg-gradient-to-r from-transparent via-[#00C6FE]/50 to-transparent"
        aria-hidden="true"
      />
    </section>

    <!-- Painel de dados: faixa horizontal com “cartões” (layout diferente da lista Eventos) -->
    <section class="relative overflow-x-clip bg-white py-12 md:py-16">
      <div class="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <div
          class="h-full w-full"
          style="
            background-image: linear-gradient(rgba(0, 198, 254, 0.45) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 198, 254, 0.4) 1px, transparent 1px);
            background-size: 48px 48px;
          "
        />
      </div>
      <div class="det-reveal relative z-[1] mx-auto max-w-[1100px] px-4 md:px-8">
        <div class="det-facts-rail">
          <article v-for="(fact, i) in factItems" :key="fact.key" class="det-fact">
            <div class="det-fact__top">
              <span class="det-fact__index font-head" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
              <p class="det-fact__label font-head">{{ fact.label }}</p>
            </div>
            <div v-if="carregando" class="det-skel det-skel--fact-val" aria-hidden="true" />
            <p v-else class="det-fact__val font-head">{{ fact.value }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Descrição: coluna única editorial (contraste com grid de cima) -->
    <section class="relative bg-[#f8fafc] py-14 md:py-20">
      <div class="det-reveal mx-auto max-w-[min(820px,calc(100%-32px))] px-4 md:px-8">
        <p class="section-tag">{{ t('eventosDetalhes.section2.title') }}</p>
        <div v-if="carregando" class="det-skel det-skel--prose mt-6" aria-hidden="true" />
        <div v-else class="det-prose mt-6">
          <p class="det-prose__text">
            {{ getLocalizedField(evento, 'descricao', tipoEvento) }}
          </p>
        </div>
      </div>
    </section>

    <!-- Organização: faixa escura + vitrines circulares -->
    <section
      v-if="carregando || organizacao.length"
      class="relative border-y border-[#dbe3ef] bg-white py-12 md:py-16"
    >
      <div class="det-reveal mx-auto max-w-[900px] px-4 md:px-8">
        <p class="det-org-eyebrow font-head">{{ t('eventosDetalhes.section3.title') }}</p>
        <div class="det-org-grid">
          <template v-if="carregando">
            <div v-for="n in 2" :key="'org-skel-' + n" class="det-org-skel" aria-hidden="true" />
          </template>
          <div
            v-for="org in organizacao"
            v-else
            :key="org.id"
            class="det-org-cell"
          >
            <div class="det-org-ring">
              <img class="det-org-logo" :src="org.logoUrl" :alt="org.nome" />
            </div>
            <p class="det-org-name font-head">{{ org.nome }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Próximos eventos: lista horizontal compacta (componente) -->
    <section class="relative overflow-x-clip bg-[#f8fafc] py-14 md:py-20">
      <div class="det-reveal mx-auto max-w-[1180px] px-4 md:px-10">
        <header class="mb-10 md:mb-12 md:flex md:items-end md:justify-between md:gap-8">
          <div>
            <p class="det-related-eyebrow font-head">{{ t('eventos.heroEyebrow') }}</p>
            <h2 class="mt-2 font-head text-[clamp(22px,3.2vw,34px)] font-bold leading-[1.1] tracking-[-0.03em] text-[#0f172a]">
              {{ t('eventosDetalhes.section4.title') }}
            </h2>
          </div>
          <RouterLink :to="{ name: 'Eventos', hash: '#eventos' }" class="btn btn-outline det-related-link mt-4 md:mt-0">
            {{ t('eventos.heroCtaEventos') }}
          </RouterLink>
        </header>
        <EventoDet :exclude-id="String(route.params.id ?? '')" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import EventosService from '../services/Eventos/eventos-services'
import EventoDet from '../components/Evento-Detalhes-components/EventoDet.vue'
import { useI18n } from '../composables/useI18n'

gsap.registerPlugin(ScrollTrigger)

const route = useRoute()
const detPageRef = ref(null)
const evento = ref(null)
const tipoEvento = ref(null)
const organizacao = ref([])
const carregando = ref(true)
const tipoEventoId = ref(null)
const { t, currentLocale } = useI18n()

let ctx = null
let detGsapAlive = true
let detStPostNavTimer = 0

function getLocalizedField(entity, field, tipoEv) {
  if (!entity && !tipoEv) return ''
  return currentLocale.value === 'en'
    ? (entity?.[`en_${field}`] ?? tipoEv?.[`en_${field}`] ?? '')
    : (entity?.[field] ?? tipoEv?.[field] ?? '')
}

const heroImageSrc = computed(() => {
  if (carregando.value || !evento.value?.imagemUrl) return ''
  return evento.value.imagemUrl
})

const heroLead = computed(() => {
  if (!evento.value) return ''
  const d = formatDate(evento.value.data)
  const loc = evento.value.local || '—'
  return `${d} · ${loc}`
})

const factItems = computed(() => {
  const chips = distanciaChips(evento.value?.distanciasEvento)
  const distStr = chips.length ? chips.join(' · ') : '—'
  return [
    {
      key: 'data',
      label: t('eventosDetalhes.section1.data'),
      value: evento.value ? formatDate(evento.value.data) : '',
    },
    {
      key: 'local',
      label: t('eventosDetalhes.section1.local'),
      value: evento.value?.local || '—',
    },
    {
      key: 'mod',
      label: t('eventosDetalhes.section1.modalidade'),
      value: tipoEvento.value ? getLocalizedField(null, 'nome', tipoEvento.value) : '',
    },
    {
      key: 'dist',
      label: t('eventosDetalhes.section1.distancia'),
      value: distStr,
    },
  ]
})

function formatDate(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return currentLocale.value === 'pt' ? date.toLocaleDateString('pt-BR') : date.toLocaleDateString('en-US')
}

function distanciaChips(distancias) {
  if (!distancias?.length) return []
  return [...distancias]
    .sort((a, b) => a.distancia - b.distancia)
    .map((d) => {
      const n = Number(d.distancia)
      if (!Number.isFinite(n)) return ''
      if (currentLocale.value === 'en') {
        const miles = (n * 0.621371).toFixed(1)
        return `${miles} mi`
      }
      return `${n} km`
    })
    .filter(Boolean)
}

async function carregarEvento(id) {
  try {
    carregando.value = true
    evento.value = null
    tipoEvento.value = null
    organizacao.value = []
    const resposta = await EventosService.getByEventoId(id)
    evento.value = resposta?.data ?? resposta
    tipoEventoId.value = evento.value?.tipoEventoId ?? null
    organizacao.value = (evento.value?.organizacaoEvento ?? [])
      .map((item) => item.organizacao)
      .filter(Boolean)
    await getTipoEventoId()
  } catch (erro) {
    console.error('Erro ao carregar o evento:', erro)
    evento.value = null
    organizacao.value = []
  } finally {
    carregando.value = false
    nextTick(() => {
      runDetGsap(0)
    })
  }
}

async function getTipoEventoId() {
  try {
    if (!tipoEventoId.value) {
      tipoEvento.value = null
      return
    }
    const response = await EventosService.getTipoEventoById(tipoEventoId.value)
    tipoEvento.value = response?.data ?? response
  } catch (error) {
    console.error('Erro ao buscar o tipo de evento:', error)
    tipoEvento.value = null
  }
}

function killDetCtx() {
  ctx?.revert()
  ctx = null
}

function runDetGsap(attempt = 0) {
  if (!detGsapAlive) return
  nextTick(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!detGsapAlive) return
        const root = detPageRef.value
        const reduceMotion =
          false

        if (!root && attempt < 8) {
          window.setTimeout(() => runDetGsap(attempt + 1), 40)
          return
        }

        if (reduceMotion) {
          killDetCtx()
          if (root) {
            gsap.set(root.querySelectorAll('.det-hero-item, .det-reveal'), {
              opacity: 1,
              y: 0,
              clearProps: 'opacity,transform',
            })
            const bg = root.querySelector('.det-hero-bg')
            if (bg) gsap.set(bg, { clearProps: 'transform' })
          }
          ScrollTrigger.refresh()
          return
        }

        if (!root) {
          ScrollTrigger.refresh()
          return
        }

        killDetCtx()

        const ease = 'power3.out'
        ctx = gsap.context(() => {
          const heroItems = root.querySelectorAll('.det-hero-item')
          if (heroItems.length) {
            gsap.from(heroItems, {
              opacity: 0,
              y: 22,
              duration: 0.72,
              stagger: 0.1,
              ease,
            })
          }

          const heroBg = root.querySelector('.det-hero-bg')
          const heroShell = root.querySelector('.det-hero-shell')
          if (heroBg && heroShell && heroImageSrc.value) {
            gsap.to(heroBg, {
              yPercent: 8,
              ease: 'none',
              scrollTrigger: {
                trigger: heroShell,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
              },
            })
          }

          root.querySelectorAll('.det-reveal').forEach((el) => {
            gsap.from(el, {
              opacity: 0,
              y: 28,
              duration: 0.7,
              ease,
              scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                once: true,
              },
            })
          })
        }, root)

        ScrollTrigger.refresh()
        document.fonts?.ready?.then(() => {
          if (detGsapAlive) ScrollTrigger.refresh()
        })
      })
    })
  })
}

watch(
  () => route.params.id,
  (novoId) => {
    if (novoId) carregarEvento(novoId)
  }
)

watch(currentLocale, () => {
  nextTick(() => ScrollTrigger.refresh())
})

watch(
  () => route.name,
  (name) => {
    if (name !== 'EventoDetalhe') return
    nextTick(() => {
      requestAnimationFrame(() => ScrollTrigger.refresh())
      if (detStPostNavTimer) window.clearTimeout(detStPostNavTimer)
      detStPostNavTimer = window.setTimeout(() => {
        detStPostNavTimer = 0
        if (detGsapAlive) ScrollTrigger.refresh()
      }, 520)
    })
  },
  { flush: 'post' }
)

onMounted(async () => {
  detGsapAlive = true
  if (route.params.id) await carregarEvento(route.params.id)
  else carregando.value = false
  if (typeof window !== 'undefined') {
    detStPostNavTimer = window.setTimeout(() => {
      detStPostNavTimer = 0
      if (detGsapAlive) ScrollTrigger.refresh()
    }, 520)
  }
})

onUnmounted(() => {
  detGsapAlive = false
  if (detStPostNavTimer) {
    window.clearTimeout(detStPostNavTimer)
    detStPostNavTimer = 0
  }
  killDetCtx()
})
</script>

<style scoped lang="postcss">
@reference "../style.css";

.det-page {
  --det-btn-radius: 8px;
  --det-btn-duration: 0.22s;
  --det-btn-ease: cubic-bezier(0.2, 0.8, 0.2, 1);
  --det-btn-lift: translateY(-1px);
  --det-btn-press: scale(0.98);
}

.font-head {
  font-family: 'Space Grotesk', sans-serif;
}
.font-body {
  font-family: 'DM Sans', sans-serif;
}

.eyebrow,
.section-tag {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #88ce0d;
}
.eyebrow::before,
.section-tag::before {
  content: '';
  width: 22px;
  height: 2px;
  background: #88ce0d;
}

.det-back {
  display: inline-flex;
  margin-bottom: 14px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.72);
  text-decoration: none;
  transition: color 0.2s ease;
}
.det-back:hover {
  color: #00c6fe;
}

/* Hero: coluna com ritmo vertical (evita back + eyebrow na mesma linha por serem inline-flex) */
.det-hero-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}
@media (min-width: 768px) {
  .det-hero-copy {
    gap: 24px;
  }
}
.det-hero-stack {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}
@media (min-width: 768px) {
  .det-hero-stack {
    gap: 12px;
  }
}
.det-hero-copy .det-back {
  margin-bottom: 0;
}
.det-hero-eyebrow {
  margin-bottom: 0;
}
.det-hero-actions {
  margin-top: 2px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: var(--det-btn-radius);
  border: 1px solid transparent;
  padding: 10px 20px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  cursor: pointer;
  transition:
    transform var(--det-btn-duration) var(--det-btn-ease),
    box-shadow var(--det-btn-duration) var(--det-btn-ease),
    border-color var(--det-btn-duration) var(--det-btn-ease),
    background-color var(--det-btn-duration) var(--det-btn-ease),
    color var(--det-btn-duration) var(--det-btn-ease);
}
.btn:focus-visible {
  outline: 2px solid #00c6fe;
  outline-offset: 3px;
}
.btn:active:not(:disabled) {
  transform: var(--det-btn-press);
}
.btn-outline {
  background: transparent;
  border-color: #cbd5e1;
  color: #0f172a;
}
.btn-outline:hover {
  border-color: #00c6fe;
  color: #00c6fe;
  transform: var(--det-btn-lift);
  box-shadow: 0 10px 28px -14px rgba(0, 198, 254, 0.35);
}
.btn-lime {
  padding: 14px 28px;
  font-size: 14px;
  letter-spacing: 0.06em;
  background: #88ce0d;
  color: #060606;
}
.btn-lime:hover {
  transform: var(--det-btn-lift);
  background: #9dea0f;
  box-shadow: 0 18px 40px -12px rgba(136, 206, 13, 0.55);
}
.det-hero-shell .btn-outline {
  border-color: rgba(255, 255, 255, 0.22);
  color: #fff;
}

.det-hero-shell {
  background: #060606;
}
.det-hero-bg {
  will-change: transform;
}
.det-hero-bg--placeholder {
  background: linear-gradient(155deg, rgba(0, 198, 254, 0.22) 0%, rgba(6, 6, 6, 0.9) 45%, rgba(136, 206, 13, 0.12) 100%);
}
.det-hero-overlay {
  background:
    linear-gradient(to right, rgba(6, 6, 6, 0.94) 0%, rgba(6, 6, 6, 0.8) 45%, rgba(6, 6, 6, 0.52) 100%),
    linear-gradient(to top, rgba(6, 6, 6, 0.88) 0%, transparent 55%),
    rgba(6, 6, 6, 0.3);
}
.det-hero-grid {
  background-image:
    linear-gradient(rgba(0, 198, 254, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 198, 254, 0.04) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.1) 58%, transparent 100%);
}
.det-hero-title__dot {
  display: inline-block;
  width: 9px;
  height: 9px;
  margin-left: 5px;
  border-radius: 50%;
  background: linear-gradient(135deg, #88ce0d, #00c6fe);
  vertical-align: 0.15em;
}

/* Skeleton hero (sem animate-pulse) */
@keyframes det-skel-fade {
  0%,
  100% {
    opacity: 0.38;
  }
  50% {
    opacity: 0.72;
  }
}
.det-skel {
  border-radius: 10px;
  background: #e2e8f0;
  animation: det-skel-fade 1.35s ease-in-out infinite;
}
.det-skel--title {
  height: clamp(34px, 6.5vw, 44px);
  max-width: 92%;
}
.det-skel--lead {
  height: 52px;
  max-width: 70%;
}
.det-skel--btn {
  height: 46px;
  width: 160px;
  border-radius: 8px;
}
.det-skel--fact-val {
  min-height: 36px;
  height: 36px;
  width: 100%;
  margin-top: 4px;
}
.det-skel--prose {
  min-height: 140px;
  width: 100%;
}

/* Painel de dados — cartões (sem barra lateral) */
.det-facts-rail {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
@media (min-width: 900px) {
  .det-facts-rail {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
    gap: 18px;
  }
  .det-fact {
    flex: 1 1 0;
    min-width: 0;
  }
}

.det-fact {
  position: relative;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid #dbe3ef;
  background:
    linear-gradient(125deg, rgba(0, 198, 254, 0.07) 0%, transparent 55%),
    linear-gradient(168deg, #ffffff 0%, #f8fafc 55%, #eef2f7 100%);
  padding: 20px 18px 22px;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.7) inset,
    0 22px 48px -34px rgba(15, 23, 42, 0.24);
  transition:
    border-color 0.28s ease,
    box-shadow 0.32s ease;
}
.det-fact:hover {
  border-color: rgba(0, 198, 254, 0.38);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.8) inset,
    0 26px 52px -30px rgba(0, 198, 254, 0.14);
}
.det-fact__top {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px 12px;
  margin-bottom: 14px;
}
.det-fact__index {
  flex-shrink: 0;
  padding: 4px 9px;
  border-radius: 8px;
  border: 1px solid rgba(0, 198, 254, 0.28);
  background: rgba(0, 198, 254, 0.08);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: #0284c7;
}
.det-fact__label {
  margin: 0;
  flex: 1 1 auto;
  min-width: 0;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  text-align: right;
  color: #64748b;
}
@media (max-width: 899px) {
  .det-fact__label {
    text-align: left;
    flex-basis: 100%;
  }
  .det-fact__top {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    margin-bottom: 12px;
  }
}
.det-fact__val {
  margin: 0;
  margin-top: auto;
  padding-top: 4px;
  border-top: 1px solid #e2e8f0;
  font-size: clamp(0.95rem, 2vw, 1.22rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.35;
  color: #0f172a;
  word-break: break-word;
}

.det-prose {
  border-radius: 14px;
  border: 1px solid #dbe3ef;
  background: #ffffff;
  padding: 22px 20px 24px;
}
.det-prose__text {
  margin: 0;
  font-size: 15px;
  line-height: 1.82;
  color: #475569;
}

.det-org-eyebrow {
  margin-bottom: 20px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #00c6fe;
}
.det-org-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 28px 36px;
}
.det-org-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  max-width: 200px;
  text-align: center;
}
.det-org-ring {
  display: flex;
  width: 112px;
  height: 112px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid rgba(136, 206, 13, 0.45);
  background: #ffffff;
  box-shadow: 0 0 0 6px rgba(136, 206, 13, 0.08);
  transition:
    border-color 0.28s ease,
    box-shadow 0.32s ease;
}
.det-org-cell:hover .det-org-ring {
  border-color: rgba(0, 198, 254, 0.55);
  box-shadow: 0 0 0 8px rgba(0, 198, 254, 0.08);
}
.det-org-logo {
  max-width: 72%;
  max-height: 72%;
  object-fit: contain;
}
.det-org-name {
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #475569;
}
.det-org-skel {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  background: #e2e8f0;
  animation: det-skel-fade 1.35s ease-in-out infinite;
}

.det-related-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #00c6fe;
}
.det-related-link {
  align-self: flex-start;
}

@media (max-width: 767px) {
  .det-page .btn {
    font-size: 11px;
    padding: 9px 16px;
    min-height: 42px;
  }
  .det-page .btn-lime {
    padding: 10px 18px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .det-skel {
    animation: none;
    opacity: 0.45;
  }
  .det-org-skel {
    animation: none;
    opacity: 0.45;
  }
  .det-fact:hover {
    box-shadow: none;
  }
  .btn:hover,
  .btn:active {
    transform: none;
  }
}
</style>
