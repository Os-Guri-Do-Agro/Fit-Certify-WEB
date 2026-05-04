<template>
  <div class="cert-page bg-[#060606] text-white font-body">
    <!-- HERO: conteúdo à esquerda + foto de fundo com overlay escuro -->
    <section
      class="cert-hero-shell relative flex min-h-[min(72vh,620px)] overflow-hidden pb-16 pt-24 md:min-h-[min(78vh,700px)] md:pb-20 md:pt-20"
    >
      <img
        src="/src/assets/certifi-imgs/certif-banner.jpg"
        alt=""
        class="cert-hero-bg pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div class="cert-hero-overlay pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />
      <div class="cert-hero-grid pointer-events-none absolute inset-0 z-[2]" aria-hidden="true" />

      <div
        class="relative z-[3] mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-4 md:px-12"
      >
        <div class="cert-hero-copy w-full max-w-[min(560px,100%)]">
          <p class="cert-hero-item eyebrow">{{ t('certificados.heroEyebrow') }}</p>
          <h1
            class="cert-hero-item cert-hero-title font-head text-[clamp(30px,6vw,68px)] font-bold leading-[0.95] tracking-[-0.04em]"
          >
            {{ t('certificados.title') }}
            <span class="cert-hero-title__dot" aria-hidden="true" />
          </h1>
          <p
            class="cert-hero-item cert-hero-lead mt-6 max-w-[440px] border-l-2 border-[#00C6FE] pl-5 text-[14px] leading-[1.7] text-white/65 sm:text-[15px]"
          >
            {{ t('certificados.subtitle') }}
          </p>
          <div class="cert-hero-item mt-9 flex flex-wrap gap-3">
            <a
              href="https://admin.fitcert365.com/register"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-lime"
            >
              {{ t('certificados.section2.streetRunning.button') }}
            </a>
            <router-link :to="{ name: 'Certificados', hash: '#faq' }" class="btn btn-outline">
              {{ t('certificados.faq.title') }}
            </router-link>
          </div>
        </div>
      </div>

      <div
        class="pointer-events-none absolute bottom-0 left-0 right-0 z-[4] h-px bg-gradient-to-r from-transparent via-[#00C6FE]/50 to-transparent"
        aria-hidden="true"
      />
    </section>

    <!-- Intro editorial + imagem flutuante -->
    <section class="relative bg-[#0c0c0e] pb-20 pt-6 md:pb-28 md:pt-2">
      <div class="cert-reveal cert-editorial relative mx-auto max-w-[1100px] px-4 md:px-10">
        <div class="cert-editorial__grid">
          <div class="cert-editorial__rail font-head" aria-hidden="true">
            <span class="cert-editorial__index">01</span>
          </div>
          <div class="cert-editorial__body">
            <p class="section-tag">{{ t('certificados.title') }}</p>
            <h2 class="cert-editorial__head font-head text-[clamp(22px,3.6vw,38px)] font-bold leading-[1.12] tracking-[-0.03em] text-white">
              {{ t('certificados.subtitle') }}
            </h2>
            <p class="cert-editorial__text mt-5 hidden text-[15px] leading-[1.8] text-white/58 lg:block">
              {{ t('certificados.section1.text') }}
            </p>
            <div class="mt-5 flex flex-col gap-4 lg:hidden">
              <p class="text-[15px] leading-[1.75] text-white/58">{{ t('certificados.section1.textSeparado1') }}</p>
              <p class="text-[15px] leading-[1.75] text-white/58">{{ t('certificados.section1.textSeparado2') }}</p>
            </div>
            <a
              href="https://admin.fitcert365.com/register"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-ghost mt-8 w-fit"
            >
              {{ t('certificados.section4.button') }}
            </a>
          </div>
          <div class="cert-editorial__float">
            <img src="/src/assets/certifi-imgs/image01.jpg" alt="" class="cert-editorial__float-img" />
            <div class="cert-editorial__float-cap font-head">{{ t('certificados.heroEyebrow') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bento: tipos (fundo escuro + células assimétricas) -->
    <section class="cert-bento-wrap relative overflow-x-clip bg-[#080808] py-16 md:py-22">
      <div class="cert-bento-gridlines pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true" />
      <div class="cert-bento-stage cert-reveal relative z-[1] mx-auto max-w-[1180px] px-4 md:px-8">
        <header class="cert-bento-head mb-10 md:mb-14 md:flex md:items-end md:justify-between md:gap-8">
          <div>
            <p class="cert-bento-eyebrow font-head">{{ t('certificados.section2.title') }}</p>
            <h2 class="mt-2 font-head text-[clamp(26px,4vw,44px)] font-bold leading-[1.05] tracking-[-0.03em] text-white">
              {{ t('certificados.subtitle') }}
            </h2>
          </div>
          <p class="cert-bento-note mt-4 max-w-[340px] text-[13px] leading-relaxed text-white/45 md:mt-0 md:text-right">
            {{ t('certificados.section2.validityNote') }}
          </p>
        </header>

        <div class="cert-bento-grid hidden md:grid">
          <article
            v-for="(card, i) in typeCards"
            :key="card.id"
            class="cert-bento-cell"
            :class="'cert-bento-cell--' + ['a', 'b', 'c', 'd'][i]"
          >
            <div class="cert-bento-cell__surface">
              <span class="cert-bento-cell__tag font-head">{{ String(i + 1).padStart(2, '0') }}</span>
              <h3 class="cert-bento-cell__title font-head">{{ card.title }}</h3>
              <p class="cert-bento-cell__desc" v-html="card.description" />
              <a
                href="https://admin.fitcert365.com/register"
                target="_blank"
                rel="noopener noreferrer"
                class="cert-bento-cell__cta font-head"
              >
                {{ card.button }}
              </a>
            </div>
          </article>
        </div>

        <div class="cert-types-carousel-wrap md:hidden">
          <Carousel
            v-model:page="typesCarouselPage"
            class="cert-types-carousel"
            :value="typeCards"
            :numVisible="1"
            :numScroll="1"
            circular
            :autoplayInterval="typesCarouselAutoplayMs"
            :showNavigators="false"
            :showIndicators="true"
            :pt="{ root: { 'aria-label': t('certificados.section2.carouselLabel') } }"
          >
            <template #item="{ data: card, index: i }">
              <article class="cert-bento-cell cert-bento-cell--carousel h-full mx-1">
                <div class="cert-bento-cell__surface">
                  <span class="cert-bento-cell__tag font-head">{{ String(i + 1).padStart(2, '0') }}</span>
                  <h3 class="cert-bento-cell__title font-head">{{ card.title }}</h3>
                  <p class="cert-bento-cell__desc" v-html="card.description" />
                  <a
                    href="https://admin.fitcert365.com/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="cert-bento-cell__cta font-head"
                  >
                    {{ card.button }}
                  </a>
                </div>
              </article>
            </template>
          </Carousel>
        </div>
      </div>
    </section>

    <!-- Timeline: como funciona -->
    <section class="relative overflow-x-clip bg-[#060606] py-16 md:py-24">
      <div class="cert-timeline-stage cert-reveal mx-auto max-w-[720px] px-4 md:max-w-[800px] md:px-8">
        <h2 class="mb-12 text-center font-head text-[clamp(24px,4vw,40px)] font-bold tracking-[-0.03em] md:mb-16">
          {{ t('certificados.section3.title') }}
        </h2>

        <div class="cert-timeline">
          <div class="cert-timeline__line" aria-hidden="true" />
          <div
            v-for="(step, i) in steps"
            :key="step.id"
            class="cert-tl-item"
          >
            <div class="cert-tl-item__node font-head">{{ i + 1 }}</div>
            <div class="cert-tl-item__panel">
              <div class="cert-tl-item__icon" v-html="step.icon" />
              <p class="cert-tl-item__text">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA: faixa horizontal (lime + imagem) -->
    <section class="cert-reveal cert-cta-band relative overflow-hidden">
      <div class="cert-cta-band__grid">
        <div class="cert-cta-band__copy">
          <p class="cert-cta-band__eyebrow font-head">{{ t('certificados.heroEyebrow') }}</p>
          <h2 class="font-head text-[clamp(22px,3.4vw,34px)] font-bold leading-[1.15] tracking-[-0.02em] text-[#060606]">
            {{ t('certificados.section4.title') }}
          </h2>
          <p class="cert-cta-band__desc mt-4 text-[14px] leading-[1.65] text-[#060606]/75 md:text-[15px]">
            {{ t('certificados.section4.description') }}
          </p>
          <a
            href="https://admin.fitcert365.com/register"
            target="_blank"
            rel="noopener noreferrer"
            class="cert-cta-band__btn btn btn-dark mt-8"
          >
            {{ t('certificados.section4.button') }}
          </a>
        </div>
        <div class="cert-cta-band__visual">
          <img
            src="/src/assets/certifi-imgs/image02.jpg"
            alt=""
            class="cert-cta-band__img"
          />
          <div class="cert-cta-band__visual-mask" aria-hidden="true" />
        </div>
      </div>
    </section>

    <!-- FAQ: coluna fixa + lista -->
    <section id="faq" class="cert-reveal cert-faq-shell bg-[#f4f6fb] py-16 md:py-24">
      <div class="mx-auto max-w-[1120px] px-4 md:px-10">
        <div class="lg:grid lg:grid-cols-[minmax(200px,280px)_1fr] lg:items-start lg:gap-14">
          <div class="cert-faq-intro lg:sticky lg:top-28">
            <p class="cert-faq-intro__water font-head" aria-hidden="true">?</p>
            <h2 class="relative font-head text-[clamp(26px,3.2vw,36px)] font-bold leading-[1.1] tracking-[-0.03em] text-[#111827]">
              {{ t('certificados.faq.title') }}
            </h2>
            <p class="relative mt-4 text-[14px] leading-relaxed text-[#64748b]">
              {{ t('certificados.subtitle') }}
            </p>
          </div>

          <div class="cert-faq-list mt-10 flex flex-col gap-3 lg:mt-0">
            <article
              v-for="(item, i) in faqItems"
              :key="'faq-' + i"
              class="cert-faq-card"
              :class="{ 'cert-faq-card--open': openFaqIndex === i }"
            >
              <button
                :id="'cert-faq-trigger-' + i"
                type="button"
                class="cert-faq-card__trigger"
                :aria-expanded="openFaqIndex === i"
                :aria-controls="'cert-faq-panel-' + i"
                @click="toggleFaq(i)"
              >
                <span class="cert-faq-card__num font-head">{{ String(i + 1).padStart(2, '0') }}</span>
                <span class="cert-faq-card__q font-head">{{ item.q }}</span>
                <span class="cert-faq-card__chevron" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="m6 9 6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </button>
              <div
                :id="'cert-faq-panel-' + i"
                class="cert-faq-card__panel"
                role="region"
                :aria-labelledby="'cert-faq-trigger-' + i"
              >
                <div class="cert-faq-card__panel-inner">
                  <p class="cert-faq-card__a">{{ item.a }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Carousel from 'primevue/carousel'
import { useI18n } from '../composables/useI18n'

gsap.registerPlugin(ScrollTrigger)

const { t, currentLocale } = useI18n()
const route = useRoute()

const STEP_ICONS = [
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/></svg>',
]

const typeCards = computed(() => [
  {
    id: 'street',
    title: t('certificados.section2.streetRunning.title'),
    description: t('certificados.section2.streetRunning.description'),
    button: t('certificados.section2.streetRunning.button'),
  },
  {
    id: 'gym',
    title: t('certificados.section2.gymsTraining.title'),
    description: t('certificados.section2.gymsTraining.description'),
    button: t('certificados.section2.gymsTraining.button'),
  },
  {
    id: 'bike',
    title: t('certificados.section2.cyclingTriathlon.title'),
    description: t('certificados.section2.cyclingTriathlon.description'),
    button: t('certificados.section2.cyclingTriathlon.button'),
  },
  {
    id: 'corp',
    title: t('certificados.section2.corporatePrograms.title'),
    description: t('certificados.section2.corporatePrograms.description'),
    button: t('certificados.section2.corporatePrograms.button'),
  },
])

const steps = computed(() =>
  ['step1', 'step2', 'step3', 'step4'].map((key, i) => ({
    id: key,
    number: t(`certificados.section3.${key}.number`),
    description: t(`certificados.section3.${key}.description`),
    icon: STEP_ICONS[i],
  }))
)

const faqItems = computed(() =>
  [1, 2, 3, 4, 5, 6].map((n) => ({
    q: t(`certificados.faq.question${n}.question`),
    a: t(`certificados.faq.question${n}.answer`),
  }))
)

const openFaqIndex = ref(null)

function toggleFaq(index) {
  openFaqIndex.value = openFaqIndex.value === index ? null : index
}

const typesCarouselPage = ref(0)
const typesCarouselAutoplayMs = ref(3000)

let certGsapAlive = true
/** `scrollBehavior` usa scroll suave — refresh tardio evita triggers com posição errada */
let certStPostNavTimer = 0

/** Só células do layout visível (grid desktop vs carrossel mobile); evita `display:none` no ST */
function queryVisibleBentoCells() {
  const grid = document.querySelector('.cert-bento-grid')
  const carouselWrap = document.querySelector('.cert-types-carousel-wrap')
  if (!grid) return []
  try {
    if (window.getComputedStyle(grid).display !== 'none') {
      return Array.from(grid.querySelectorAll('.cert-bento-cell'))
    }
  } catch {
    return []
  }
  return carouselWrap ? Array.from(carouselWrap.querySelectorAll('.cert-bento-cell')) : []
}

watch(currentLocale, () => {
  typesCarouselPage.value = 0
  nextTick(() => ScrollTrigger.refresh())
})

/** Após navegação SPA o layout (header/footer) muda — recalcula triggers da página */
watch(
  () => route.name,
  (name) => {
    if (name !== 'Certificados') return
    nextTick(() => {
      requestAnimationFrame(() => ScrollTrigger.refresh())
      if (certStPostNavTimer) window.clearTimeout(certStPostNavTimer)
      certStPostNavTimer = window.setTimeout(() => {
        certStPostNavTimer = 0
        if (certGsapAlive) ScrollTrigger.refresh()
      }, 520)
    })
  },
  { flush: 'post' }
)

function scrollToFaqIfHash() {
  if (route.hash !== '#faq') return
  nextTick(() => {
    setTimeout(() => {
      document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })
    }, 120)
  })
}

onMounted(() => {
  certGsapAlive = true
  scrollToFaqIfHash()

  if (typeof window === 'undefined') return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) {
    typesCarouselAutoplayMs.value = 0
    return
  }

  const heroEase = 'power3.out'

  gsap.from('.cert-hero-item', {
    opacity: 0,
    y: 26,
    duration: 0.78,
    stagger: 0.11,
    ease: heroEase,
  })

  gsap.to('.cert-hero-bg', {
    yPercent: 10,
    ease: 'none',
    scrollTrigger: {
      trigger: '.cert-hero-shell',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  })

  gsap.utils.toArray('.cert-reveal').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 32,
      duration: 0.75,
      ease: heroEase,
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    })
  })

  const bentoCells = queryVisibleBentoCells()
  if (bentoCells.length) {
    gsap.from(bentoCells, {
      opacity: 0,
      y: 28,
      duration: 0.62,
      stagger: 0.09,
      ease: heroEase,
      clearProps: 'opacity,transform',
      scrollTrigger: { trigger: '.cert-bento-stage', start: 'top 90%', once: true },
    })
  }

  gsap.from('.cert-tl-item', {
    opacity: 0,
    duration: 0.58,
    stagger: 0.12,
    ease: heroEase,
    clearProps: 'opacity',
    scrollTrigger: { trigger: '.cert-timeline', start: 'top 88%', once: true },
  })

  gsap.from('.cert-faq-card', {
    opacity: 0,
    y: 18,
    duration: 0.52,
    stagger: 0.06,
    ease: heroEase,
    clearProps: 'opacity,transform',
    scrollTrigger: { trigger: '.cert-faq-shell', start: 'top 90%', once: true },
  })

  certStPostNavTimer = window.setTimeout(() => {
    certStPostNavTimer = 0
    if (certGsapAlive) ScrollTrigger.refresh()
  }, 520)
})

onUnmounted(() => {
  certGsapAlive = false
  if (certStPostNavTimer) {
    window.clearTimeout(certStPostNavTimer)
    certStPostNavTimer = 0
  }
})
</script>

<style scoped lang="postcss">
@reference "../style.css";

.cert-page {
  --cert-btn-radius: 8px;
  --cert-btn-duration: 0.22s;
  --cert-btn-ease: cubic-bezier(0.2, 0.8, 0.2, 1);
  --cert-btn-lift: translateY(-1px);
  --cert-btn-press: scale(0.98);
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

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: var(--cert-btn-radius);
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
    transform var(--cert-btn-duration) var(--cert-btn-ease),
    box-shadow var(--cert-btn-duration) var(--cert-btn-ease),
    border-color var(--cert-btn-duration) var(--cert-btn-ease),
    background-color var(--cert-btn-duration) var(--cert-btn-ease),
    color var(--cert-btn-duration) var(--cert-btn-ease);
}
.btn:focus-visible {
  outline: 2px solid #00c6fe;
  outline-offset: 3px;
}
.btn:active:not(:disabled) {
  transform: var(--cert-btn-press);
}
.btn-outline {
  background: transparent;
  border-color: rgba(255, 255, 255, 0.22);
  color: #fff;
}
.btn-outline:hover {
  border-color: #00c6fe;
  color: #00c6fe;
  transform: var(--cert-btn-lift);
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
  transform: var(--cert-btn-lift);
  background: #9dea0f;
  box-shadow: 0 18px 40px -12px rgba(136, 206, 13, 0.55);
}
.btn-dark {
  padding: 14px 26px;
  font-size: 13px;
  letter-spacing: 0.06em;
  background: #060606;
  color: #fff;
  border-color: #060606;
}
.btn-dark:hover {
  transform: var(--cert-btn-lift);
  background: #111;
  box-shadow: 0 16px 40px -14px rgba(6, 6, 6, 0.45);
}
.btn-ghost {
  display: inline-flex;
  align-items: center;
  border-radius: var(--cert-btn-radius);
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
    transform var(--cert-btn-duration) var(--cert-btn-ease),
    box-shadow var(--cert-btn-duration) var(--cert-btn-ease),
    background-color var(--cert-btn-duration) var(--cert-btn-ease),
    color var(--cert-btn-duration) var(--cert-btn-ease);
}
.btn-ghost:hover {
  background: #00c6fe;
  color: #060606;
  transform: var(--cert-btn-lift);
  box-shadow: 0 12px 32px -18px rgba(0, 198, 254, 0.4);
}
.btn-ghost:focus-visible {
  outline: 2px solid #88ce0d;
  outline-offset: 3px;
}

@media (max-width: 767px) {
  .cert-page .btn:not(.cert-bento-cell__cta) {
    font-size: 11px;
    padding: 9px 16px;
    min-height: 42px;
  }
  .cert-page .btn-lime:not(.cert-bento-cell__cta),
  .cert-page .btn-dark:not(.cert-bento-cell__cta) {
    padding: 10px 18px;
  }
  .cert-page .btn-ghost {
    font-size: 11px;
    padding: 7px 14px;
  }
}

/* —— Hero —— */
.cert-hero-shell {
  background: #060606;
}
.cert-hero-bg {
  will-change: transform;
}
.cert-hero-overlay {
  background:
    linear-gradient(to right, rgba(6, 6, 6, 0.94) 0%, rgba(6, 6, 6, 0.82) 40%, rgba(6, 6, 6, 0.62) 100%),
    linear-gradient(to top, rgba(6, 6, 6, 0.9) 0%, transparent 52%),
    rgba(6, 6, 6, 0.35);
}
.cert-hero-grid {
  background-image:
    linear-gradient(rgba(0, 198, 254, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 198, 254, 0.04) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.15) 55%, transparent 100%);
}
.cert-hero-title__dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-left: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #88ce0d, #00c6fe);
  vertical-align: super;
}

/* —— Editorial —— */
.cert-editorial__grid {
  display: grid;
  gap: 28px;
  align-items: start;
}
@media (min-width: 900px) {
  .cert-editorial__grid {
    grid-template-columns: minmax(72px, 100px) minmax(0, 1fr) minmax(200px, 280px);
    gap: 36px 40px;
    align-items: center;
  }
}
.cert-editorial__rail {
  display: none;
}
@media (min-width: 900px) {
  .cert-editorial__rail {
    display: block;
    position: relative;
    align-self: stretch;
    border-right: 1px solid rgba(255, 255, 255, 0.08);
  }
}
.cert-editorial__index {
  position: sticky;
  top: 120px;
  display: block;
  padding-top: 8px;
  font-size: clamp(64px, 10vw, 120px);
  font-weight: 700;
  line-height: 0.85;
  letter-spacing: -0.06em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(0, 198, 254, 0.35);
}
.cert-editorial__float {
  position: relative;
  margin-top: 8px;
  max-width: 280px;
}
@media (min-width: 900px) {
  .cert-editorial__float {
    margin-top: 0;
    justify-self: end;
  }
}
.cert-editorial__float-img {
  display: block;
  width: 100%;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.75);
}
.cert-editorial__float-cap {
  position: absolute;
  right: -8px;
  top: -12px;
  padding: 6px 10px;
  border-radius: 6px;
  background: #00c6fe;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #060606;
}

/* —— Bento —— */
.cert-bento-gridlines {
  background-image:
    linear-gradient(rgba(0, 198, 254, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 198, 254, 0.06) 1px, transparent 1px);
  background-size: 56px 56px;
}
.cert-bento-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #00c6fe;
}
.cert-bento-note {
  border-left: 2px solid rgba(136, 206, 13, 0.45);
  padding-left: 16px;
}
@media (min-width: 768px) {
  .cert-bento-note {
    border-left: none;
    border-top: 2px solid rgba(136, 206, 13, 0.35);
    padding-left: 0;
    padding-top: 12px;
  }
}

.cert-bento-grid {
  gap: 14px;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
}
@media (min-width: 900px) {
  .cert-bento-grid {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr) minmax(0, 1fr);
    grid-template-rows: minmax(200px, 1fr) minmax(180px, auto);
    min-height: 400px;
  }
  .cert-bento-cell--a {
    grid-column: 1;
    grid-row: 1 / span 2;
  }
  .cert-bento-cell--b {
    grid-column: 2;
    grid-row: 1;
  }
  .cert-bento-cell--c {
    grid-column: 3;
    grid-row: 1;
  }
  .cert-bento-cell--d {
    grid-column: 2 / span 2;
    grid-row: 2;
  }
}

.cert-bento-cell__surface {
  position: relative;
  display: flex;
  height: 100%;
  min-height: 200px;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%);
  padding: 22px 20px 20px;
  transition:
    border-color 0.3s ease,
    box-shadow 0.35s ease,
    transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.cert-bento-cell:hover .cert-bento-cell__surface {
  border-color: rgba(0, 198, 254, 0.45);
  box-shadow: 0 20px 56px -28px rgba(0, 198, 254, 0.15);
  transform: translateY(-3px);
}
.cert-bento-cell--a .cert-bento-cell__surface {
  min-height: 100%;
  background: linear-gradient(155deg, rgba(0, 198, 254, 0.12) 0%, rgba(255, 255, 255, 0.03) 55%, rgba(136, 206, 13, 0.06) 100%);
}
.cert-bento-cell--d .cert-bento-cell__surface {
  min-height: 160px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 24px;
}
.cert-bento-cell--d .cert-bento-cell__title {
  flex: 1 1 140px;
}
.cert-bento-cell--d .cert-bento-cell__desc {
  flex: 2 1 220px;
}
.cert-bento-cell--d .cert-bento-cell__cta {
  margin-top: 0;
}
.cert-bento-cell__tag {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: rgba(0, 198, 254, 0.75);
}
.cert-bento-cell__title {
  font-size: clamp(17px, 2vw, 22px);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;
}
.cert-bento-cell--a .cert-bento-cell__title {
  font-size: clamp(22px, 2.8vw, 30px);
}
.cert-bento-cell__desc {
  flex: 1;
  font-size: 14px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.62);
}
.cert-bento-cell__cta {
  align-self: flex-start;
  margin-top: auto;
  padding: 10px 18px;
  border-radius: 999px;
  border: 1px solid #88ce0d;
  background: #88ce0d;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #060606;
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}
.cert-bento-cell__cta:hover {
  background: #060606;
  border-color: #060606;
  color: #fff;
}

.cert-types-carousel-wrap {
  position: relative;
  z-index: 2;
  max-width: 100%;
}

.cert-types-carousel :deep(.p-carousel-indicator-list) {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 16px;
  padding-bottom: 8px;
  margin: 0;
  list-style: none;
}

.cert-types-carousel :deep(.p-carousel-indicator-button) {
  display: block;
  width: 10px;
  height: 10px;
  min-width: 10px;
  min-height: 10px;
  padding: 0;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.22);
  transition:
    width 0.25s ease,
    background-color 0.2s ease;
}

.cert-types-carousel :deep(.p-carousel-indicator-active .p-carousel-indicator-button) {
  width: 28px;
  background: #88ce0d;
}

.cert-types-carousel :deep(.p-carousel-viewport) {
  overflow-x: hidden;
}

.cert-bento-cell--carousel .cert-bento-cell__surface {
  min-height: 280px;
}

/* —— Timeline —— */
.cert-timeline {
  position: relative;
  padding-left: 0;
}
.cert-timeline__line {
  position: absolute;
  left: 19px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  border-radius: 2px;
  background: linear-gradient(180deg, #00c6fe, rgba(136, 206, 13, 0.65));
}
.cert-tl-item {
  position: relative;
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 14px 16px;
  padding-bottom: 24px;
}
@media (min-width: 768px) {
  .cert-tl-item {
    gap: 18px 22px;
    padding-bottom: 28px;
  }
}
.cert-tl-item:last-child {
  padding-bottom: 0;
}
/* Pulso só com box-shadow (sem transform) — evita conflito com qualquer transform no ancestral */
@keyframes cert-tl-node-pulse {
  0%,
  100% {
    box-shadow:
      0 0 0 4px rgba(136, 206, 13, 0.18),
      0 0 0 0 rgba(0, 198, 254, 0),
      0 0 0 0 rgba(136, 206, 13, 0);
  }
  42% {
    box-shadow:
      0 0 0 11px rgba(136, 206, 13, 0.07),
      0 0 0 1px rgba(0, 198, 254, 0.2),
      0 0 24px rgba(0, 198, 254, 0.45);
  }
  68% {
    box-shadow:
      0 0 0 6px rgba(136, 206, 13, 0.1),
      0 0 14px rgba(0, 198, 254, 0.2),
      0 0 0 0 rgba(136, 206, 13, 0);
  }
}
.cert-tl-item__node {
  z-index: 1;
  display: flex;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 2px solid #060606;
  background: #88ce0d;
  font-size: 14px;
  font-weight: 700;
  color: #060606;
  box-shadow: 0 0 0 4px rgba(136, 206, 13, 0.15);
  animation: cert-tl-node-pulse 2.6s ease-in-out infinite;
  will-change: box-shadow;
}
.cert-timeline > .cert-tl-item:nth-child(2) .cert-tl-item__node {
  animation-delay: 0s;
}
.cert-timeline > .cert-tl-item:nth-child(3) .cert-tl-item__node {
  animation-delay: 0.35s;
}
.cert-timeline > .cert-tl-item:nth-child(4) .cert-tl-item__node {
  animation-delay: 0.7s;
}
.cert-timeline > .cert-tl-item:nth-child(5) .cert-tl-item__node {
  animation-delay: 1.05s;
}
.cert-tl-item__panel {
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  padding: 18px 20px;
  transition:
    border-color 0.28s ease,
    background 0.28s ease,
    box-shadow 0.32s ease;
}
.cert-tl-item:hover .cert-tl-item__panel {
  border-color: rgba(0, 198, 254, 0.35);
  background: rgba(0, 198, 254, 0.05);
  box-shadow: 0 16px 40px -24px rgba(0, 0, 0, 0.5);
}
.cert-tl-item__icon {
  margin-bottom: 12px;
  display: flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid rgba(0, 198, 254, 0.25);
  color: #00c6fe;
  transition: color 0.25s ease, border-color 0.25s ease;
}
.cert-tl-item__icon :deep(svg) {
  width: 22px;
  height: 22px;
}
.cert-tl-item:hover .cert-tl-item__icon {
  color: #88ce0d;
  border-color: rgba(136, 206, 13, 0.35);
}
.cert-tl-item__text {
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.78);
}

/* —— CTA band —— */
.cert-cta-band__grid {
  display: grid;
  min-height: 280px;
  grid-template-columns: 1fr;
}
@media (min-width: 900px) {
  .cert-cta-band__grid {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
    min-height: 320px;
  }
}
.cert-cta-band__copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #88ce0d;
  padding: 36px 28px 40px;
}
@media (min-width: 900px) {
  .cert-cta-band__copy {
    padding: 48px 44px 52px 56px;
    clip-path: polygon(0 0, 100% 0, 94% 100%, 0 100%);
  }
}
.cert-cta-band__eyebrow {
  margin-bottom: 10px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(6, 6, 6, 0.55);
}
.cert-cta-band__visual {
  position: relative;
  min-height: 220px;
  background: #0a0a0a;
}
@media (min-width: 900px) {
  .cert-cta-band__visual {
    min-height: 100%;
  }
}
.cert-cta-band__img {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.cert-cta-band__visual-mask {
  position: absolute;
  inset: 0;
  background: linear-gradient(105deg, rgba(136, 206, 13, 0.35) 0%, transparent 42%);
  mix-blend-mode: multiply;
  opacity: 0.85;
}
@media (min-width: 900px) {
  .cert-cta-band__visual-mask {
    background: linear-gradient(90deg, rgba(136, 206, 13, 0.5) 0%, transparent 35%);
  }
}

/* —— FAQ —— */
.cert-faq-intro {
  position: relative;
}
.cert-faq-intro__water {
  position: absolute;
  left: -8px;
  top: -48px;
  font-size: clamp(100px, 22vw, 160px);
  font-weight: 700;
  line-height: 1;
  color: rgba(0, 198, 254, 0.08);
  pointer-events: none;
  user-select: none;
}
.cert-faq-card {
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid rgba(17, 24, 39, 0.08);
  background: #fff;
  box-shadow: 0 10px 32px -22px rgba(17, 24, 39, 0.2);
  transition:
    border-color 0.25s ease,
    box-shadow 0.3s ease;
}
.cert-faq-card--open {
  border-color: rgba(0, 198, 254, 0.35);
  box-shadow: 0 16px 40px -20px rgba(0, 198, 254, 0.14);
}
.cert-faq-card__trigger {
  display: grid;
  width: 100%;
  grid-template-columns: 44px minmax(0, 1fr) 36px;
  align-items: center;
  gap: 12px 14px;
  padding: 16px 16px 16px 18px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;
  -webkit-tap-highlight-color: transparent;
}
.cert-faq-card__trigger:hover {
  background: rgba(248, 250, 252, 0.9);
}
.cert-faq-card__trigger:focus-visible {
  outline: 2px solid #00c6fe;
  outline-offset: -2px;
}
.cert-faq-card__num {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #88ce0d;
}
.cert-faq-card__q {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.35;
  color: #1e293b;
}
.cert-faq-card__chevron {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(30, 41, 59, 0.55);
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.cert-faq-card--open .cert-faq-card__chevron {
  transform: rotate(180deg);
  color: #00c6fe;
}
.cert-faq-card__panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.38s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.cert-faq-card--open .cert-faq-card__panel {
  grid-template-rows: 1fr;
}
.cert-faq-card__panel-inner {
  overflow: hidden;
  min-height: 0;
}
.cert-faq-card__a {
  margin: 0;
  padding: 0 18px 18px 76px;
  font-size: 14px;
  line-height: 1.62;
  color: rgba(51, 65, 85, 0.88);
}
@media (max-width: 639px) {
  .cert-faq-card__a {
    padding-left: 18px;
    padding-top: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cert-tl-item__node {
    animation: none;
    will-change: auto;
    box-shadow: 0 0 0 4px rgba(136, 206, 13, 0.15);
  }
  .cert-bento-cell__surface,
  .cert-bento-cell__cta,
  .cert-tl-item__panel,
  .cert-tl-item__icon,
  .cert-faq-card,
  .cert-faq-card__panel,
  .cert-faq-card__chevron,
  .btn,
  .btn-ghost {
    transition: none;
  }
  .cert-bento-cell:hover .cert-bento-cell__surface {
    transform: none;
  }
  .cert-page .btn:hover,
  .cert-page .btn:active {
    transform: none;
  }
}
</style>
