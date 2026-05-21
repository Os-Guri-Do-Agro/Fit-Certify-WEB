<template>
  <div ref="mPageRef" class="m-page bg-[#f8fafc] text-[#0f172a] font-body">
    <!-- Hero: padrão Certificados (clip + overlay + grelha + CTAs) -->
    <section
      class="m-hero-shell relative isolate flex min-h-[min(72vh,620px)] overflow-hidden pb-16 pt-24 md:min-h-[min(78vh,700px)] md:pb-20 md:pt-20"
    >
      <div class="m-hero-media pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src="/src/assets/marcad-imgs/banner.jpg"
          alt=""
          class="m-hero-bg pointer-events-none absolute left-0 right-0 top-[-9%] z-0 h-[118%] w-full max-w-none object-cover object-center"
        />
      </div>
      <div class="m-hero-overlay pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />
      <div class="m-hero-grid pointer-events-none absolute inset-0 z-[2]" aria-hidden="true" />

      <div class="relative z-[3] mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-4 md:px-12">
        <div class="m-hero-copy w-full max-w-[min(560px,100%)] text-white">
          <p class="m-hero-item eyebrow">{{ t('marcadores.heroEyebrow') }}</p>
          <h1
            class="m-hero-item m-hero-title font-head text-[clamp(30px,6vw,64px)] font-bold leading-[0.95] tracking-[-0.04em]"
          >
            {{ t('marcadores.title') }}
            <span class="m-hero-title__dot" aria-hidden="true" />
          </h1>
          <p
            class="m-hero-item m-hero-lead mt-6 max-w-[440px] border-l-2 border-[#00C6FE] pl-5 text-[14px] leading-[1.7] text-white/65 sm:text-[15px]"
          >
            {{ t('marcadores.subtitle') }}
          </p>
          <div class="m-hero-item mt-9 flex flex-wrap gap-3">
            <a
              href="https://admin.fitcert365.com/register"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-lime"
            >
              {{ t('marcadores.section5.buttonDesktop') }}
            </a>
          </div>
        </div>
      </div>

      <div
        class="pointer-events-none absolute bottom-0 left-0 right-0 z-[4] h-px bg-gradient-to-r from-transparent via-[#00C6FE]/50 to-transparent"
        aria-hidden="true"
      />
    </section>

    <!-- Indicadores: cabeçalho editorial + grelha / carrossel -->
    <section class="relative overflow-x-clip border-t border-[#dbe3ef] bg-white py-14 md:py-24">
      <div class="m-features-gridlines pointer-events-none absolute inset-0 opacity-[0.055]" aria-hidden="true" />
      <div class="relative z-[1] mx-auto max-w-[1180px] px-4 md:px-10">
        <header class="m-reveal mb-12 md:mb-14 md:flex md:items-end md:justify-between md:gap-10">
          <div class="max-w-xl">
            <p class="qs-sec-kicker font-head">{{ t('marcadores.section1.subtitle') }}</p>
            <h2 class="mt-3 font-head text-[clamp(22px,3.5vw,38px)] font-bold leading-[1.12] tracking-[-0.03em] text-[#0f172a]">
              {{ t('marcadores.section1.title') }}
            </h2>
          </div>
          <p class="mt-6 max-w-[520px] text-[15px] leading-[1.82] text-[#475569] md:mt-0">
            {{ t('marcadores.text') }}
          </p>
        </header>

        <div class="m-features-grid hidden gap-6 md:grid md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8">
          <article v-for="(card, i) in healthCards" :key="card.id" class="m-feature-card">
            <div class="m-feature-card__surface">
              <div class="m-feature-card__top">
                <span class="m-feature-card__tag font-head">{{ String(i + 1).padStart(2, '0') }}</span>
                <div
                  class="m-feature-card__icon-wrap"
                  :class="i % 2 === 0 ? 'm-feature-card__icon-wrap--cyan' : 'm-feature-card__icon-wrap--lime'"
                >
                  <component :is="card.icon" class="m-feature-card__ico" aria-hidden="true" />
                </div>
              </div>
              <h3 class="m-feature-card__title font-head">{{ t(card.titleKey) }}</h3>
              <p class="m-feature-card__body">{{ t(card.textKey) }}</p>
            </div>
          </article>
        </div>

        <div class="m-swiper-features m-reveal md:hidden">
          <Carousel :items="healthCards" />
        </div>
      </div>
    </section>

    <!-- Como funciona: mesmo ritmo da Home (Saúde validada / Eventos) — max-w-[1200px] + imagem 50vw -->
    <section class="border-t border-[#dbe3ef] bg-[#f8fafc]">

      <!-- Passo 01 — imagem à direita (padrão “Saúde validada”) -->
      <div class="overflow-x-clip bg-white">
        <div class="m-reveal relative mx-auto flex max-w-[1200px] flex-col md:min-h-[480px] lg:min-h-[520px]">
          <div
            class="relative z-10 order-2 flex w-full min-w-0 flex-col justify-center px-6 py-14 md:max-w-none md:px-12 md:py-16 lg:max-w-[min(600px,calc(50%-2rem))] lg:pr-16"
          >
            <p class="section-tag">{{ t('marcadores.steps.step1Eyebrow') }}</p>
            <h3 class="mb-5 font-head text-[clamp(22px,5.5vw,42px)] font-bold leading-[1.1] tracking-[-0.02em] break-words text-[#0f172a] md:text-[clamp(26px,3.5vw,42px)]">
              <span class="text-[#00C6FE]">{{ t('marcadores.section2.title') }}</span>
            </h3>
            <p class="max-w-[480px] text-[15px] leading-[1.75] text-[#475569] md:text-base">
              {{ t('marcadores.section2.text') }}
            </p>
          </div>
          <div
            class="m-split-visual relative order-1 min-h-[300px] w-full overflow-hidden lg:absolute lg:inset-y-0 lg:left-1/2 lg:top-0 lg:min-h-0 lg:w-[50vw]"
          >
            <img
              src="/src/assets/marcad-imgs/image-01.jpg"
              alt=""
              class="m-step-img absolute inset-0 h-full w-full object-cover object-center"
            />
            <div
              class="pointer-events-none absolute inset-0"
              style="background: linear-gradient(to right, #ffffff 0%, transparent 34%)"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <!-- Passo 02 — imagem à esquerda (padrão “Eventos”) -->
      <div class="overflow-x-clip bg-[#f8fafc]">
        <div
          class="m-reveal relative mx-auto flex max-w-[1200px] flex-col md:min-h-[480px] lg:min-h-[520px] lg:flex-row lg:justify-end"
        >
          <div
            class="m-split-visual relative order-1 min-h-[300px] w-full overflow-hidden lg:absolute lg:inset-y-0 lg:left-auto lg:right-1/2 lg:top-0 lg:min-h-0 lg:w-[50vw]"
          >
            <img
              src="/src/assets/marcad-imgs/image-02.jpg"
              alt=""
              class="m-step-img absolute inset-0 h-full w-full object-cover object-center"
            />
            <div
              class="pointer-events-none absolute inset-0"
              style="background: linear-gradient(to left, #f8fafc 0%, transparent 34%)"
              aria-hidden="true"
            />
          </div>
          <div
            class="relative z-10 order-2 flex w-full min-w-0 flex-col justify-center px-6 py-14 md:max-w-none md:px-12 md:py-16 lg:ml-auto lg:max-w-[min(600px,calc(50%-2rem))] lg:shrink-0 lg:px-16 lg:pl-20 lg:pr-12"
          >
            <p class="section-tag">{{ t('marcadores.steps.step2Eyebrow') }}</p>
            <h3 class="mb-5 font-head text-[clamp(22px,5.5vw,42px)] font-bold leading-[1.1] tracking-[-0.02em] break-words text-[#0f172a] md:text-[clamp(26px,3.5vw,42px)]">
              <span class="text-[#88CE0D]">{{ t('marcadores.section3.title') }}</span>
            </h3>
            <p class="max-w-[480px] text-[15px] leading-[1.75] text-[#475569] md:text-base" v-html="t('marcadores.section3.text')" />
          </div>
        </div>
      </div>

      <!-- Passo 03 — imagem à direita -->
      <div class="overflow-x-clip bg-white">
        <div class="m-reveal relative mx-auto flex max-w-[1200px] flex-col md:min-h-[480px] lg:min-h-[520px]">
          <div
            class="relative z-10 order-2 flex w-full min-w-0 flex-col justify-center px-6 py-14 md:max-w-none md:px-12 md:py-16 lg:max-w-[min(600px,calc(50%-2rem))] lg:pr-16"
          >
            <p class="section-tag">{{ t('marcadores.steps.step3Eyebrow') }}</p>
            <h3
              class="mb-5 font-head text-[clamp(22px,5.5vw,42px)] font-bold leading-[1.1] tracking-[-0.02em] break-words text-[#0f172a] md:text-[clamp(26px,3.5vw,42px)]"
              v-html="t('marcadores.section4.title')"
            ></h3>
            <p class="max-w-[480px] text-[15px] leading-[1.75] text-[#475569] md:text-base">
              {{ t('marcadores.section4.text') }}
            </p>
          </div>
          <div
            class="m-split-visual relative order-1 min-h-[300px] w-full overflow-hidden lg:absolute lg:inset-y-0 lg:left-1/2 lg:top-0 lg:min-h-0 lg:w-[50vw]"
          >
            <img
              src="/src/assets/marcad-imgs/image-03.jpg"
              alt=""
              class="m-step-img absolute inset-0 h-full w-full object-cover object-center"
            />
            <div
              class="pointer-events-none absolute inset-0"
              style="background: linear-gradient(to right, #ffffff 0%, transparent 34%)"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA: fundo preto + grelha + painel e chips -->
    <section class="m-cta-section relative isolate overflow-hidden border-t border-[#dbe3ef] bg-white py-16 md:py-20">
      <div class="m-cta-gridlines pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <div class="m-cta-vignette pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />

      <div
        class="relative z-[2] mx-auto flex w-full max-w-[1200px] flex-col justify-start gap-10 px-4 md:px-12 lg:flex-row lg:items-stretch lg:justify-between lg:gap-12"
      >
        <div class="m-reveal m-cta-panel-wrap w-full min-w-0 lg:max-w-[min(580px,calc(100%-380px))]">
          <div class="m-cta-glass text-left">
            <p class="m-cta-kicker font-head">{{ t('marcadores.section5.ctaKicker') }}</p>
            <h2
              class="mt-4 font-head text-[clamp(26px,4.2vw,44px)] font-bold leading-[1.06] tracking-[-0.035em] text-[#0f172a]"
              v-html="t('marcadores.section5.title')"
            ></h2>
            <p class="m-cta-lead mt-6 border-l-2 border-[#88CE0D] pl-5 text-[14px] leading-[1.75] text-[#334155] sm:text-[15px]">
              {{ t('marcadores.text') }}
            </p>
            <ul class="m-cta-bullets mt-8 list-none p-0">
              <li v-for="bk in ctaBulletKeys" :key="bk" class="m-cta-bullets__item">
                <span class="m-cta-bullets__dot" aria-hidden="true" />
                <span>{{ t(bk) }}</span>
              </li>
            </ul>
            <div class="mt-10 flex flex-wrap gap-3">
              <a
                href="https://admin.fitcert365.com/register"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-lime"
              >
                {{ t('marcadores.section5.buttonDesktop') }}
              </a>
              <RouterLink :to="{ name: 'Certificados' }" class="btn btn-outline">
                {{ t('nav.certificates') }}
              </RouterLink>
            </div>
          </div>
        </div>

        <aside class="m-reveal m-cta-aside w-full shrink-0 lg:w-[360px] lg:max-w-[360px]">
          <div class="m-cta-aside-panel">
            <p class="m-cta-aside-title font-head">{{ t('marcadores.section5.asideTitle') }}</p>
            <ul class="m-cta-aside-list">
              <li v-for="item in asideItemsDisplay" :key="item.id">
                <component
                  :is="item.to ? RouterLink : 'div'"
                  :to="item.to"
                  class="m-cta-aside-item"
                  :class="[
                    `m-cta-aside-item--${item.variant}`,
                    item.to ? 'm-cta-aside-item--link' : '',
                  ]"
                >
                  <span class="m-cta-aside-item__icon" aria-hidden="true">
                    <component :is="item.icon" class="m-cta-aside-item__ico" />
                  </span>
                  <span class="m-cta-aside-item__body">
                    <span class="m-cta-aside-item__title font-head">{{ item.title }}</span>
                    <span v-if="item.subtitle" class="m-cta-aside-item__desc">{{ item.subtitle }}</span>
                  </span>
                  <ChevronRightIcon v-if="item.to" class="m-cta-aside-item__arrow" aria-hidden="true" />
                </component>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <div
        class="pointer-events-none absolute bottom-0 left-0 right-0 z-[4] h-px bg-gradient-to-r from-transparent via-[#00C6FE]/45 to-transparent"
        aria-hidden="true"
      />
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  HeartIcon,
  ScaleIcon,
  BeakerIcon,
  BoltIcon,
  SignalIcon,
  ClipboardDocumentListIcon,
  FireIcon,
  ShieldCheckIcon,
  CalendarDaysIcon,
  ChevronRightIcon,
} from '@heroicons/vue/24/outline'
import Carousel from '../components/Marcad-components/Marcad-Carousel.vue'
import { useI18n } from '../composables/useI18n'

gsap.registerPlugin(ScrollTrigger)

const { t, currentLocale } = useI18n()
const route = useRoute()
const mPageRef = ref(null)

const healthCards = [
  {
    id: 'mhc1',
    icon: HeartIcon,
    titleKey: 'marcadores.section1.card1.title',
    textKey: 'marcadores.section1.card1.text',
  },
  {
    id: 'mhc2',
    icon: ScaleIcon,
    titleKey: 'marcadores.section1.card2.title',
    textKey: 'marcadores.section1.card2.text',
  },
  {
    id: 'mhc3',
    icon: BeakerIcon,
    titleKey: 'marcadores.section1.card3.title',
    textKey: 'marcadores.section1.card3.text',
  },
  {
    id: 'mhc4',
    icon: BoltIcon,
    titleKey: 'marcadores.section1.card4.title',
    textKey: 'marcadores.section1.card4.text',
  },
  {
    id: 'mhc5',
    icon: SignalIcon,
    titleKey: 'marcadores.section1.card5.title',
    textKey: 'marcadores.section1.card5.text',
  },
  {
    id: 'mhc6',
    icon: ClipboardDocumentListIcon,
    titleKey: 'marcadores.section1.card6.title',
    textKey: 'marcadores.section1.card6.text',
  },
]

const ctaBulletKeys = [
  'marcadores.section5.ctaBullet1',
  'marcadores.section5.ctaBullet2',
  'marcadores.section5.ctaBullet3',
]

const asideItems = [
  {
    id: 'train',
    lineKey: 'marcadores.section5.asideLine1',
    variant: 'cyan',
    icon: FireIcon,
    to: null,
  },
  {
    id: 'cert',
    lineKey: 'marcadores.section5.asideLine2',
    variant: 'lime',
    icon: ShieldCheckIcon,
    to: null,
  },
  {
    id: 'live',
    lineKey: 'marcadores.section5.asideLine3',
    variant: 'neutral',
    icon: SignalIcon,
    to: null,
  },
  {
    id: 'events',
    lineKey: 'marcadores.section5.asideLine4',
    variant: 'cyan',
    icon: CalendarDaysIcon,
    to: { name: 'Eventos' },
  },
]

function parseAsideLine(key) {
  const text = t(key)
  const breakAt = text.indexOf('\n')
  if (breakAt === -1) return { title: text, subtitle: null }
  return {
    title: text.slice(0, breakAt),
    subtitle: text.slice(breakAt + 1),
  }
}

const asideItemsDisplay = computed(() =>
  asideItems.map((item) => ({
    ...item,
    ...parseAsideLine(item.lineKey),
  }))
)

let ctx = null
let mGsapAlive = true
let mStPostNavTimer = 0

function killMctx() {
  ctx?.revert()
  ctx = null
}

function runMarcadoresGsap(attempt = 0) {
  if (!mGsapAlive) return
  nextTick(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!mGsapAlive) return
        const root = mPageRef.value
        const reduceMotion =
          false

        if (!root && attempt < 10) {
          window.setTimeout(() => runMarcadoresGsap(attempt + 1), 40)
          return
        }

        if (reduceMotion) {
          killMctx()
          if (root) {
            gsap.set(root.querySelectorAll('.m-hero-item, .m-reveal'), {
              opacity: 1,
              y: 0,
              clearProps: 'opacity,transform',
            })
            const bg = root.querySelector('.m-hero-bg')
            if (bg) gsap.set(bg, { clearProps: 'transform' })
          }
          ScrollTrigger.refresh()
          return
        }

        if (!root) {
          ScrollTrigger.refresh()
          return
        }

        killMctx()
        const ease = 'power3.out'

        ctx = gsap.context(() => {
          const heroItems = root.querySelectorAll('.m-hero-item')
          if (heroItems.length) {
            gsap.from(heroItems, {
              opacity: 0,
              y: 24,
              duration: 0.75,
              stagger: 0.11,
              ease,
            })
          }

          const heroBg = root.querySelector('.m-hero-bg')
          const heroShell = root.querySelector('.m-hero-shell')
          if (heroBg && heroShell) {
            gsap.to(heroBg, {
              yPercent: 6,
              ease: 'none',
              scrollTrigger: {
                trigger: heroShell,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
              },
            })
          }

          root.querySelectorAll('.m-reveal').forEach((el) => {
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

          const grid = root.querySelector('.m-features-grid')
          if (grid) {
            try {
              if (window.getComputedStyle(grid).display !== 'none') {
                const featureCards = grid.querySelectorAll('.m-feature-card')
                if (featureCards.length) {
                  gsap.from(featureCards, {
                    opacity: 0,
                    y: 26,
                    duration: 0.58,
                    stagger: 0.08,
                    ease,
                    clearProps: 'opacity,transform',
                    scrollTrigger: {
                      trigger: grid,
                      start: 'top 88%',
                      once: true,
                    },
                  })
                }
              }
            } catch {
              /* ignore */
            }
          }

          root.querySelectorAll('.m-step-img').forEach((img) => {
            const visual = img.closest('.m-split-visual')
            if (!visual) return
            gsap.to(img, {
              scale: 1.05,
              ease: 'none',
              scrollTrigger: {
                trigger: visual,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            })
          })

        }, root)

        ScrollTrigger.refresh()
        document.fonts?.ready?.then(() => {
          if (mGsapAlive) ScrollTrigger.refresh()
        })
      })
    })
  })
}

watch(currentLocale, () => {
  nextTick(() => ScrollTrigger.refresh())
})

watch(
  () => route.name,
  (name) => {
    if (name !== 'Marcadores') return
    nextTick(() => {
      requestAnimationFrame(() => ScrollTrigger.refresh())
      if (mStPostNavTimer) window.clearTimeout(mStPostNavTimer)
      mStPostNavTimer = window.setTimeout(() => {
        mStPostNavTimer = 0
        if (mGsapAlive) ScrollTrigger.refresh()
      }, 520)
    })
  },
  { flush: 'post' }
)

onMounted(() => {
  mGsapAlive = true
  runMarcadoresGsap(0)
  if (typeof window !== 'undefined') {
    mStPostNavTimer = window.setTimeout(() => {
      mStPostNavTimer = 0
      if (mGsapAlive) ScrollTrigger.refresh()
    }, 520)
  }
})

onUnmounted(() => {
  mGsapAlive = false
  killMctx()
  if (mStPostNavTimer) {
    window.clearTimeout(mStPostNavTimer)
    mStPostNavTimer = 0
  }
})
</script>

<style scoped lang="postcss">
@reference "../style.css";

.m-page {
  --m-btn-radius: 8px;
  --m-btn-duration: 0.22s;
  --m-btn-ease: cubic-bezier(0.2, 0.8, 0.2, 1);
  --m-btn-lift: translateY(-1px);
  --m-btn-press: scale(0.98);
}

.font-head {
  font-family: 'Space Grotesk', sans-serif;
}
.font-body {
  font-family: 'DM Sans', sans-serif;
}

.qs-sec-kicker {
  margin-bottom: 0;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #00c6fe;
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

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: var(--m-btn-radius);
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
    transform var(--m-btn-duration) var(--m-btn-ease),
    box-shadow var(--m-btn-duration) var(--m-btn-ease),
    border-color var(--m-btn-duration) var(--m-btn-ease),
    background-color var(--m-btn-duration) var(--m-btn-ease),
    color var(--m-btn-duration) var(--m-btn-ease);
}
.btn:focus-visible {
  outline: 2px solid #00c6fe;
  outline-offset: 3px;
}
.btn:active:not(:disabled) {
  transform: var(--m-btn-press);
}
.btn-outline {
  background: transparent;
  border-color: #cbd5e1;
  color: #0f172a;
}
.btn-outline:hover {
  border-color: #00c6fe;
  color: #00c6fe;
  transform: var(--m-btn-lift);
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
  transform: var(--m-btn-lift);
  background: #9dea0f;
  box-shadow: 0 18px 40px -12px rgba(136, 206, 13, 0.55);
}
.btn-ghost {
  display: inline-flex;
  align-items: center;
  border-radius: var(--m-btn-radius);
  border: 1px solid #00c6fe;
  background: transparent;
  padding: 8px 18px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #00c6fe;
  text-decoration: none;
  transition:
    transform var(--m-btn-duration) var(--m-btn-ease),
    box-shadow var(--m-btn-duration) var(--m-btn-ease),
    background-color var(--m-btn-duration) var(--m-btn-ease),
    color var(--m-btn-duration) var(--m-btn-ease);
}
.btn-ghost:hover {
  background: #00c6fe;
  color: #060606;
  transform: var(--m-btn-lift);
  box-shadow: 0 12px 32px -18px rgba(0, 198, 254, 0.4);
}
.m-hero-shell .btn-outline,
.m-cta-section .btn-outline {
  border-color: rgba(255, 255, 255, 0.22);
  color: #fff;
}
.m-cta-section .btn-outline {
  border-color: #cbd5e1;
  color: #0f172a;
}

@media (max-width: 767px) {
  .m-page .btn {
    font-size: 11px;
    padding: 9px 16px;
    min-height: 42px;
  }
  .m-page .btn-lime {
    padding: 10px 18px;
  }
  .m-page .btn-ghost {
    font-size: 11px;
    padding: 7px 14px;
  }
}

/* Hero */
.m-hero-shell {
  background: #060606;
}
.m-hero-bg {
  will-change: transform;
  transform-origin: center center;
}
.m-hero-overlay {
  background:
    linear-gradient(to right, rgba(6, 6, 6, 0.94) 0%, rgba(6, 6, 6, 0.82) 40%, rgba(6, 6, 6, 0.62) 100%),
    linear-gradient(to top, rgba(6, 6, 6, 0.9) 0%, transparent 52%),
    rgba(6, 6, 6, 0.35);
}
.m-hero-grid {
  background-image:
    linear-gradient(rgba(0, 198, 254, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 198, 254, 0.04) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.15) 55%, transparent 100%);
}
.m-hero-title__dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-left: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #88ce0d, #00c6fe);
  vertical-align: super;
}

.m-features-gridlines {
  background-image:
    linear-gradient(rgba(0, 198, 254, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 198, 254, 0.07) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.35) 0%, transparent 78%);
}

.m-feature-card {
  min-width: 0;
}
.m-feature-card__surface {
  display: flex;
  height: 100%;
  min-height: 200px;
  flex-direction: column;
  border-radius: 18px;
  border: 1px solid #dbe3ef;
  background: linear-gradient(165deg, #ffffff 0%, #f8fafc 100%);
  padding: 24px 22px 26px;
  box-shadow: 0 22px 56px -40px rgba(15, 23, 42, 0.25);
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.m-feature-card:hover .m-feature-card__surface {
  border-color: rgba(0, 198, 254, 0.45);
  box-shadow: 0 28px 64px -36px rgba(0, 198, 254, 0.16);
  transform: translateY(-3px);
}
.m-feature-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}
.m-feature-card__tag {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: rgba(136, 206, 13, 0.95);
}
.m-feature-card__icon-wrap {
  display: flex;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  border: 1px solid #dbe3ef;
  background: linear-gradient(155deg, #ffffff 0%, #f1f5f9 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.85),
    0 10px 28px -16px rgba(15, 23, 42, 0.22);
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
}
@media (min-width: 1024px) {
  .m-feature-card__icon-wrap {
    width: 54px;
    height: 54px;
    border-radius: 15px;
  }
}
.m-feature-card__icon-wrap--cyan {
  border-color: rgba(0, 198, 254, 0.38);
  background: linear-gradient(145deg, rgba(0, 198, 254, 0.2) 0%, rgba(0, 198, 254, 0.06) 100%);
  box-shadow:
    inset 0 1px 0 rgba(0, 198, 254, 0.2),
    0 14px 36px -18px rgba(0, 198, 254, 0.38);
}
.m-feature-card__icon-wrap--lime {
  border-color: rgba(136, 206, 13, 0.38);
  background: linear-gradient(145deg, rgba(136, 206, 13, 0.18) 0%, rgba(136, 206, 13, 0.05) 100%);
  box-shadow:
    inset 0 1px 0 rgba(136, 206, 13, 0.14),
    0 14px 36px -18px rgba(136, 206, 13, 0.28);
}
.m-feature-card:hover .m-feature-card__icon-wrap {
  transform: translateY(-3px);
}
.m-feature-card__icon-wrap--cyan .m-feature-card__ico {
  color: #00c6fe;
}
.m-feature-card__icon-wrap--lime .m-feature-card__ico {
  color: #7baf12;
}
.m-feature-card__ico {
  width: 24px;
  height: 24px;
}
@media (min-width: 1024px) {
  .m-feature-card__ico {
    width: 26px;
    height: 26px;
  }
}
.m-feature-card__title {
  margin: 0 0 10px;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.35;
  color: #0f172a;
}
.m-feature-card__body {
  margin: 0;
  margin-top: auto;
  font-size: 14px;
  line-height: 1.62;
  color: #475569;
}

.m-split-visual {
  background: #0a0a0a;
}
.m-step-img {
  will-change: transform;
  transform-origin: center center;
}

.m-cta-section {
  background: #ffffff;
}
.m-cta-gridlines {
  opacity: 1;
  background-image:
    linear-gradient(rgba(0, 198, 254, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 198, 254, 0.05) 1px, transparent 1px);
  background-size: 52px 52px;
  mask-image: radial-gradient(ellipse 85% 70% at 50% 40%, rgba(0, 0, 0, 0.38) 0%, rgba(0, 0, 0, 0.15) 55%, transparent 100%);
}
.m-cta-vignette {
  background: radial-gradient(ellipse 120% 80% at 50% 100%, rgba(0, 198, 254, 0.025) 0%, transparent 50%),
    radial-gradient(ellipse 90% 60% at 0% 0%, rgba(136, 206, 13, 0.02) 0%, transparent 45%);
}
.m-cta-kicker {
  margin: 0;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #88ce0d;
}
.m-cta-lead {
  margin: 0;
  max-width: 520px;
}
.m-cta-bullets {
  margin: 0;
  display: flex;
  max-width: 520px;
  flex-direction: column;
  gap: 12px;
}
.m-cta-bullets__item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14px;
  line-height: 1.55;
  color: #334155;
}
.m-cta-bullets__dot {
  position: relative;
  margin-top: 7px;
  height: 7px;
  width: 7px;
  flex-shrink: 0;
  border-radius: 999px;
  background: linear-gradient(135deg, #00c6fe, #88ce0d);
  box-shadow: 0 0 0 3px rgba(136, 206, 13, 0.2);
  animation: evt-cta-mark-glow 2.4s ease-in-out infinite;
}
.m-cta-bullets__dot::before,
.m-cta-bullets__dot::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  border: 1.5px solid rgba(136, 206, 13, 0.55);
  pointer-events: none;
  animation: evt-cta-mark-pulse 2.4s ease-out infinite;
  transform-origin: center;
}
.m-cta-bullets__dot::after {
  border-color: rgba(0, 198, 254, 0.5);
  animation-delay: 1.2s;
}
.m-cta-bullets__item:nth-child(2) .m-cta-bullets__dot { animation-delay: 0.4s; }
.m-cta-bullets__item:nth-child(2) .m-cta-bullets__dot::before { animation-delay: 0.4s; }
.m-cta-bullets__item:nth-child(2) .m-cta-bullets__dot::after  { animation-delay: 1.6s; }
.m-cta-bullets__item:nth-child(3) .m-cta-bullets__dot { animation-delay: 0.8s; }
.m-cta-bullets__item:nth-child(3) .m-cta-bullets__dot::before { animation-delay: 0.8s; }
.m-cta-bullets__item:nth-child(3) .m-cta-bullets__dot::after  { animation-delay: 2s; }
@keyframes evt-cta-mark-pulse {
  0%   { transform: scale(0.85); opacity: 0.85; }
  70%  { transform: scale(2.4);  opacity: 0; }
  100% { transform: scale(2.4);  opacity: 0; }
}
@keyframes evt-cta-mark-glow {
  0%, 100% { box-shadow: 0 0 0 3px rgba(136, 206, 13, 0.18); }
  50%      { box-shadow: 0 0 0 4px rgba(136, 206, 13, 0.32); }
}
.m-cta-glass {
  border-radius: 22px;
  border: 1px solid #dbe3ef;
  background: linear-gradient(168deg, #ffffff 0%, #f8fafc 100%);
  padding: 28px 22px 32px;
  box-shadow:
    0 28px 72px -40px rgba(15, 23, 42, 0.24),
    0 0 0 1px rgba(0, 198, 254, 0.08) inset,
    0 1px 0 rgba(255, 255, 255, 0.8) inset;
  backdrop-filter: blur(14px);
}
@media (min-width: 768px) {
  .m-cta-glass {
    padding: 36px 40px 40px;
  }
}
.m-cta-aside-panel {
  display: flex;
  height: 100%;
  min-height: 100%;
  flex-direction: column;
  border-radius: 22px;
  border: 1px solid #dbe3ef;
  background: linear-gradient(168deg, #ffffff 0%, #f8fafc 100%);
  padding: 22px 18px 20px;
  box-shadow:
    0 28px 72px -40px rgba(15, 23, 42, 0.22),
    0 0 0 1px rgba(0, 198, 254, 0.06) inset;
}
@media (min-width: 768px) {
  .m-cta-aside-panel {
    padding: 28px 22px 24px;
  }
}
.m-cta-aside-title {
  margin: 0 0 18px;
  padding-bottom: 14px;
  border-bottom: 1px solid #e2e8f0;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #64748b;
}
.m-cta-aside-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.m-cta-aside-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
  min-height: 64px;
  border-radius: 14px;
  border: 1px solid #e2e8f0;
  padding: 14px 14px 14px 12px;
  background: #fff;
  text-decoration: none;
  color: inherit;
  transition:
    border-color 0.22s ease,
    box-shadow 0.22s ease,
    transform 0.22s ease,
    background-color 0.22s ease;
}
.m-cta-aside-item--cyan {
  border-color: rgba(0, 198, 254, 0.28);
  background: linear-gradient(165deg, rgba(0, 198, 254, 0.06) 0%, #ffffff 72%);
}
.m-cta-aside-item--lime {
  border-color: rgba(136, 206, 13, 0.32);
  background: linear-gradient(165deg, rgba(136, 206, 13, 0.07) 0%, #ffffff 72%);
}
.m-cta-aside-item--neutral {
  border-color: #dbe3ef;
  background: linear-gradient(165deg, #f8fafc 0%, #ffffff 100%);
}
.m-cta-aside-item--link:hover,
.m-cta-aside-item--link:focus-visible {
  border-color: rgba(0, 198, 254, 0.45);
  box-shadow: 0 18px 44px -28px rgba(0, 198, 254, 0.22);
  transform: translateY(-2px);
}
.m-cta-aside-item--link:focus-visible {
  outline: 2px solid #00c6fe;
  outline-offset: 3px;
}
.m-cta-aside-item__icon {
  display: flex;
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid #dbe3ef;
  background: #fff;
  box-shadow: 0 10px 24px -16px rgba(15, 23, 42, 0.2);
}
.m-cta-aside-item--cyan .m-cta-aside-item__icon {
  border-color: rgba(0, 198, 254, 0.35);
  background: linear-gradient(145deg, rgba(0, 198, 254, 0.16) 0%, rgba(0, 198, 254, 0.04) 100%);
}
.m-cta-aside-item--lime .m-cta-aside-item__icon {
  border-color: rgba(136, 206, 13, 0.35);
  background: linear-gradient(145deg, rgba(136, 206, 13, 0.14) 0%, rgba(136, 206, 13, 0.04) 100%);
}
.m-cta-aside-item--neutral .m-cta-aside-item__icon {
  border-color: #cbd5e1;
  background: linear-gradient(145deg, #f1f5f9 0%, #ffffff 100%);
}
.m-cta-aside-item__ico {
  width: 22px;
  height: 22px;
}
.m-cta-aside-item--cyan .m-cta-aside-item__ico {
  color: #00a8d4;
}
.m-cta-aside-item--lime .m-cta-aside-item__ico {
  color: #7baf12;
}
.m-cta-aside-item--neutral .m-cta-aside-item__ico {
  color: #475569;
}
.m-cta-aside-item__body {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  gap: 4px;
  padding-top: 2px;
}
.m-cta-aside-item__title {
  font-size: 14px;
  font-weight: 700;
  line-height: 1.35;
  color: #0f172a;
}
.m-cta-aside-item__desc {
  font-size: 13px;
  line-height: 1.5;
  color: #64748b;
}
.m-cta-aside-item__arrow {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  margin-top: 10px;
  color: #94a3b8;
  transition: color 0.22s ease, transform 0.22s ease;
}
.m-cta-aside-item--link:hover .m-cta-aside-item__arrow,
.m-cta-aside-item--link:focus-visible .m-cta-aside-item__arrow {
  color: #00c6fe;
  transform: translateX(2px);
}
@media (max-width: 1023px) {
  .m-cta-aside {
    max-width: 520px;
  }
}

.m-swiper-features :deep(.swiper-pagination-bullet) {
  background: rgba(15, 23, 42, 0.14);
  opacity: 1;
}
.m-swiper-features :deep(.swiper-pagination-bullet-active) {
  background: #00c6fe;
}

@media (prefers-reduced-motion: reduce) {
  .m-cta-bullets__dot,
  .m-cta-bullets__dot::before,
  .m-cta-bullets__dot::after {
    animation: none;
  }
  .m-feature-card:hover .m-feature-card__surface {
    transform: none;
  }
  .m-feature-card:hover .m-feature-card__icon-wrap {
    transform: none;
  }
  .m-cta-aside-item--link:hover,
  .m-cta-aside-item--link:focus-visible {
    transform: none;
  }
}
</style>
