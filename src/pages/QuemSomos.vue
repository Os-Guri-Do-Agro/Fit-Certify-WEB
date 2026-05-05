<template>
  <div ref="qsPageRef" class="qs-page bg-[#f8fafc] text-[#0f172a] font-body">
    <!-- Hero: mesmo padrão de Certificados (copy à esquerda + overlay + grelha) -->
    <section
      class="qs-hero-shell relative isolate flex min-h-[min(72vh,620px)] overflow-hidden pb-16 pt-24 md:min-h-[min(78vh,700px)] md:pb-20 md:pt-20"
    >
      <!-- Contentor com clip: o parallax (yPercent) na imagem não pode vazar da hero -->
      <div class="qs-hero-media pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          :src="qsHeroBanner"
          alt=""
          class="qs-hero-bg pointer-events-none"
        />
      </div>
      <div class="qs-hero-overlay pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />
      <div class="qs-hero-grid pointer-events-none absolute inset-0 z-[2]" aria-hidden="true" />

      <div class="relative z-[3] mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-4 md:px-12">
        <div class="qs-hero-copy w-full max-w-[min(560px,100%)] text-white">
          <p class="qs-hero-item eyebrow">{{ t('quemSomos.heroEyebrow') }}</p>
          <h1
            class="qs-hero-item qs-hero-title font-head text-[clamp(30px,6vw,64px)] font-bold leading-[0.95] tracking-[-0.04em]"
          >
            {{ t('quemSomos.title') }}
            <span class="qs-hero-title__dot" aria-hidden="true" />
          </h1>
          <p
            class="qs-hero-item qs-hero-lead mt-6 max-w-[440px] border-l-2 border-[#00C6FE] pl-5 text-[14px] leading-[1.7] text-white/65 sm:text-[15px]"
          >
            {{ t('quemSomos.subtitle') }}
          </p>
          <div class="qs-hero-item mt-9 flex flex-wrap gap-3">
            <RouterLink :to="{ name: 'Certificados' }" class="btn btn-lime">{{ t('quemSomos.heroCtaCert') }}</RouterLink>
            <RouterLink :to="{ name: 'Eventos' }" class="btn btn-outline">{{ t('quemSomos.heroCtaEvents') }}</RouterLink>
          </div>
        </div>
      </div>

      <div
        class="pointer-events-none absolute bottom-0 left-0 right-0 z-[4] h-px bg-gradient-to-r from-transparent via-[#00C6FE]/50 to-transparent"
        aria-hidden="true"
      />
    </section>

    <!-- História: grelha editorial (imagem + painel, alinhada ao resto da página) -->
    <section class="qs-story-section relative overflow-x-clip bg-white py-12 md:py-20">
      <div class="qs-story-section__gridlines pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true" />
      <div
        class="qs-reveal relative z-[1] mx-auto grid max-w-[1180px] gap-10 px-4 md:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] md:items-stretch md:gap-12 lg:gap-16 md:px-10"
      >
        <div class="qs-story-arc">
          <img
            :src="qsStoryImg"
            alt=""
            class="qs-story__img-el absolute inset-0 h-full w-full object-cover object-[center_30%]"
          />
          <div class="qs-story-arc__cap font-head">{{ t('quemSomos.manifestoKicker') }}</div>
        </div>
        <div class="qs-story-panel">
          <div class="qs-story-panel__rail font-head" aria-hidden="true">
            <span class="qs-story-panel__rail-n">01</span>
            <span class="qs-story-panel__rail-line" />
          </div>
          <div class="qs-story-panel__main">
            <p class="section-tag qs-story-panel__tag">{{ t('quemSomos.subtitle') }}</p>
            <p class="qs-story-panel__headline font-head">
              {{ t('quemSomos.section2.title') }}
            </p>
            <p class="qs-story-panel__body mt-6 hidden text-[15px] leading-[1.85] text-[#475569] md:block">
              {{ t('quemSomos.section1.text1') }}
            </p>
            <div class="mt-6 flex flex-col gap-4 md:hidden">
              <p class="text-[15px] leading-[1.8] text-[#475569]">{{ t('quemSomos.section1.textSeparado1') }}</p>
              <p class="text-[15px] leading-[1.8] text-[#475569]">{{ t('quemSomos.section1.textSeparado2') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pilares (O que fazemos): grelha larga + cartões maiores -->
    <section class="relative border-t border-[#dbe3ef] bg-[#f8fafc] py-16 md:py-24">
      <div class="mx-auto max-w-[1180px] px-4 md:px-10">
        <header class="qs-reveal mb-12 md:mb-14 md:flex md:items-end md:justify-between md:gap-8">
          <div>
            <p class="qs-sec-kicker font-head">{{ t('quemSomos.pillarsKicker') }}</p>
            <h2 class="mt-3 max-w-[820px] font-head text-[clamp(22px,3.5vw,38px)] font-bold leading-[1.12] tracking-[-0.03em] text-[#0f172a]">
              {{ t('quemSomos.section2.title') }}
            </h2>
          </div>
        </header>

        <div class="qs-pillars-grid qs-reveal hidden gap-6 md:grid md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8">
          <article v-for="(p, i) in pillarDefs" :key="p.id" class="qs-pillar-card">
            <div class="qs-pillar-card__surface">
              <div class="qs-pillar-card__top">
                <span class="qs-pillar-card__tag font-head">{{ String(i + 1).padStart(2, '0') }}</span>
                <component :is="p.icon" class="qs-pillar-card__ico" aria-hidden="true" />
              </div>
              <p class="qs-pillar-card__text">{{ t(`quemSomos.section2.card${i + 1}`) }}</p>
            </div>
          </article>
        </div>

        <div class="qs-swiper-pillars qs-reveal md:hidden">
          <Carousel />
        </div>
      </div>
    </section>

    <!-- Cultura: citação destacada + foto em “janela” -->
    <section class="relative bg-white py-16 md:py-24">
      <div class="qs-reveal mx-auto grid max-w-[1180px] gap-10 px-5 md:grid-cols-[1fr_1.05fr] md:items-center md:gap-14 md:px-8">
        <div class="qs-quote relative min-w-0">
          <span class="qs-quote__mark font-head" aria-hidden="true">“</span>
          <p class="qs-sec-kicker font-head">{{ t('quemSomos.humanizationKicker') }}</p>
          <h2 class="relative z-[1] mt-4 font-head text-[clamp(24px,3.4vw,38px)] font-bold leading-[1.12] tracking-[-0.03em] text-[#0f172a]">
            {{ t('quemSomos.section3.title') }}
          </h2>
          <p class="relative z-[1] mt-6 text-[15px] leading-[1.82] text-[#475569]">
            {{ t('quemSomos.section3.text') }}
          </p>
        </div>
        <div class="qs-window relative aspect-[4/3] overflow-hidden rounded-[20px] border border-[#dbe3ef] md:aspect-[5/4]">
          <img
            :src="qsCultureImg"
            alt=""
            class="qs-window__img absolute inset-0 h-full w-full object-cover object-center"
          />
          <div class="qs-window__frame" aria-hidden="true" />
        </div>
      </div>
    </section>

    <!-- Propósito (MVV): cartões com ícone + hover -->
    <section class="relative overflow-x-clip bg-white py-16 md:py-24">
      <div class="mx-auto max-w-[1180px] px-4 md:px-10">
        <div class="qs-reveal qs-mvv-head mb-12 text-center md:mb-14 md:text-left">
          <p class="qs-sec-kicker font-head">{{ t('quemSomos.mvvKicker') }}</p>
        </div>

        <div class="qs-mvv-board qs-reveal hidden gap-6 md:grid md:grid-cols-3 md:gap-7">
          <article class="qs-mvv-card">
            <div class="qs-mvv-card__surface">
              <div class="qs-mvv-card__icon-wrap">
                <FlagIcon class="qs-mvv-card__icon" aria-hidden="true" />
              </div>
              <span class="qs-mvv-card__idx font-head">01</span>
              <h3 class="qs-mvv-card__h font-head">{{ t('quemSomos.section4.card1.text') }}</h3>
              <p class="qs-mvv-card__p">{{ t('quemSomos.section4.card1.descricao') }}</p>
            </div>
          </article>
          <article class="qs-mvv-card">
            <div class="qs-mvv-card__surface">
              <div class="qs-mvv-card__icon-wrap">
                <LightBulbIcon class="qs-mvv-card__icon" aria-hidden="true" />
              </div>
              <span class="qs-mvv-card__idx font-head">02</span>
              <h3 class="qs-mvv-card__h font-head">{{ t('quemSomos.section4.card2.text') }}</h3>
              <p class="qs-mvv-card__p">{{ t('quemSomos.section4.card2.descricao') }}</p>
            </div>
          </article>
          <article class="qs-mvv-card">
            <div class="qs-mvv-card__surface">
              <div class="qs-mvv-card__icon-wrap">
                <ShieldCheckIcon class="qs-mvv-card__icon" aria-hidden="true" />
              </div>
              <span class="qs-mvv-card__idx font-head">03</span>
              <h3 class="qs-mvv-card__h font-head">{{ t('quemSomos.section4.card3.text') }}</h3>
              <ul class="qs-mvv-card__ul">
                <li>{{ t('quemSomos.section4.card3.descricao') }}</li>
                <li>{{ t('quemSomos.section4.card3.descricao2') }}</li>
                <li>{{ t('quemSomos.section4.card3.descricao3') }}</li>
                <li>{{ t('quemSomos.section4.card3.descricao4') }}</li>
                <li>{{ t('quemSomos.section4.card3.descricao5') }}</li>
              </ul>
            </div>
          </article>
        </div>

        <div class="qs-swiper-mvv qs-reveal pb-2 md:hidden">
          <CarouselSecond />
        </div>
      </div>
    </section>

    <!-- Faixa imagem com máscara inferior -->
    <section class="qs-reveal relative hidden overflow-hidden md:block">
      <div class="qs-cinema">
        <img
          :src="qsCinemaBanner"
          alt=""
          class="qs-cinema__img"
        />
        <div class="qs-cinema__shade" aria-hidden="true" />
      </div>
    </section>

    <!-- Equipa: fileiras horizontais alternadas -->
    <section class="relative bg-[#f8fafc] py-16 md:py-24">
      <div class="mx-auto max-w-[960px] px-5 md:px-8">
        <div class="qs-reveal text-center md:text-left">
          <p class="qs-sec-kicker font-head">{{ t('quemSomos.teamKicker') }}</p>
          <h2 class="mt-3 font-head text-[clamp(24px,3.2vw,36px)] font-bold leading-[1.12] tracking-[-0.03em] text-[#0f172a]">
            {{ t('quemSomos.section5.title') }}
          </h2>
          <p class="mx-auto mt-5 max-w-[720px] text-[15px] leading-[1.78] text-[#475569] md:mx-0">
            {{ t('quemSomos.section5.text1') }}
          </p>
          <p class="mx-auto mt-4 max-w-[720px] text-[15px] leading-[1.78] text-[#475569] md:mx-0">
            {{ t('quemSomos.section5.text2') }}
          </p>
        </div>

        <div class="qs-team-list qs-reveal mt-14 hidden flex-col gap-10 md:flex">
          <article
            v-for="(m, idx) in teamMembers"
            :key="m.name"
            class="qs-team-row"
            :class="{ 'qs-team-row--flip': idx % 2 === 1 }"
          >
            <div class="qs-team-row__photo">
              <img :src="m.img" :alt="m.name" class="qs-team-row__img" />
            </div>
            <div class="qs-team-row__meta">
              <h3 class="qs-team-row__name font-head">{{ m.name }}</h3>
              <p class="qs-team-row__role font-head">{{ t(m.titleKey) }}</p>
              <p class="qs-team-row__bio">{{ t(m.descKey) }}</p>
            </div>
          </article>
        </div>

        <div class="qs-swiper-team mt-10 md:hidden">
          <CarouselThird />
        </div>
      </div>
    </section>

    <!-- Para quem é: imagem full-bleed + painel editorial -->
    <section class="qs-closer-section qs-reveal relative min-h-[min(88vh,640px)] overflow-hidden md:min-h-[min(85vh,720px)]">
      <img
        :src="qsCloserImg"
        alt=""
        class="qs-closer-bg pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-[center_40%]"
      />
      <div class="qs-closer-scrim pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />
      <div class="qs-closer-gridlines pointer-events-none absolute inset-0 z-[2] opacity-[0.35]" aria-hidden="true" />

      <div class="relative z-[3] mx-auto flex min-h-[min(88vh,640px)] max-w-[1180px] flex-col justify-end px-4 py-16 md:min-h-[min(85vh,720px)] md:justify-center md:px-10 md:py-24">
        <div class="qs-closer-glass max-w-[min(560px,100%)]">
          <p class="qs-closer-kicker font-head">{{ t('quemSomos.closerKicker') }}</p>
          <h2 class="mt-4 font-head text-[clamp(26px,4vw,42px)] font-bold leading-[1.08] tracking-[-0.035em] text-white">
            {{ t('quemSomos.section7.title') }}
          </h2>
          <p class="qs-closer-lead mt-6 border-l-2 border-[#88CE0D] pl-5 text-[14px] leading-[1.75] text-white/70 sm:text-[15px]">
            {{ t('quemSomos.section7.text') }}
          </p>
          <div class="mt-10 flex flex-wrap gap-3">
            <a
              href="https://admin.fitcert365.com/register"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-lime"
            >
              {{ t('home.landing.hero.ctaStart') }}
            </a>
            <RouterLink :to="{ name: 'Certificados' }" class="btn btn-outline">{{ t('quemSomos.heroCtaCert') }}</RouterLink>
          </div>
        </div>
      </div>

      <div
        class="pointer-events-none absolute bottom-0 left-0 right-0 z-[4] h-px bg-gradient-to-r from-transparent via-[#00C6FE]/45 to-transparent"
        aria-hidden="true"
      />
    </section>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ClipboardDocumentCheckIcon,
  ComputerDesktopIcon,
  ChartBarSquareIcon,
  CalendarDaysIcon,
  LinkIcon,
  LockClosedIcon,
  FlagIcon,
  LightBulbIcon,
  ShieldCheckIcon,
} from '@heroicons/vue/24/outline'
import Carousel from '../components/QuemS-components/QuemS-Carousel-First.vue'
import CarouselSecond from '../components/QuemS-components/QuemS-Carousel-second.vue'
import CarouselThird from '../components/QuemS-components/QuemSomos-Carousel-third.vue'
import { useI18n } from '../composables/useI18n'
import qsHeroBanner from '../assets/quems-imgs/quems-banner.jpg'
import qsStoryImg from '../assets/quems-imgs/quems-img-01.jpg'
import qsCultureImg from '../assets/quems-imgs/quems-img-02.jpg'
import qsCinemaBanner from '../assets/quems-imgs/quems-banner-02.jpg'
import qsCloserImg from '../assets/quems-imgs/quems-img-03.jpg'
import teamEmilioImg from '../assets/quems-imgs/emilio-perfil.jpg'
import teamLucasImg from '../assets/quems-imgs/lucas-perfil.jpg'
import teamMarceloImg from '../assets/quems-imgs/marcelo-perfil.png'

gsap.registerPlugin(ScrollTrigger)

const { t, currentLocale } = useI18n()
const route = useRoute()

const qsPageRef = ref(null)
const pillarDefs = [
  { id: 'p1', icon: ClipboardDocumentCheckIcon },
  { id: 'p2', icon: ComputerDesktopIcon },
  { id: 'p3', icon: ChartBarSquareIcon },
  { id: 'p4', icon: CalendarDaysIcon },
  { id: 'p5', icon: LinkIcon },
  { id: 'p6', icon: LockClosedIcon },
]

const teamMembers = [
  {
    name: 'Emilio Machado',
    img: teamEmilioImg,
    titleKey: 'quemSomos.section6.emilioTitle',
    descKey: 'quemSomos.section6.emilioDesc',
  },
  {
    name: 'Lucas Machado',
    img: teamLucasImg,
    titleKey: 'quemSomos.section6.lucasTitle',
    descKey: 'quemSomos.section6.lucasDesc',
  },
  {
    name: 'Dr. Marcelo Leitão',
    img: teamMarceloImg,
    titleKey: 'quemSomos.section6.marceloTitle',
    descKey: 'quemSomos.section6.marceloDesc',
  },
]

let ctx = null
let qsGsapAlive = true
let qsStPostNavTimer = 0

function killQsCtx() {
  ctx?.revert()
  ctx = null
}

function runQsGsap(attempt = 0) {
  if (!qsGsapAlive) return
  nextTick(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!qsGsapAlive) return
        const root = qsPageRef.value
        const reduceMotion =
          false

        if (!root && attempt < 10) {
          window.setTimeout(() => runQsGsap(attempt + 1), 40)
          return
        }

        if (reduceMotion) {
          killQsCtx()
          if (root) {
            gsap.set(root.querySelectorAll('.qs-hero-item, .qs-reveal'), {
              opacity: 1,
              y: 0,
              clearProps: 'opacity,transform',
            })
            const bg = root.querySelector('.qs-hero-bg')
            if (bg) gsap.set(bg, { clearProps: 'transform' })
          }
          ScrollTrigger.refresh()
          return
        }

        if (!root) {
          ScrollTrigger.refresh()
          return
        }

        killQsCtx()

        const ease = 'power3.out'
        try {
        ctx = gsap.context(() => {
          const heroItems = root.querySelectorAll('.qs-hero-item')
          if (heroItems.length) {
            gsap.from(heroItems, {
              opacity: 0,
              y: 24,
              duration: 0.75,
              stagger: 0.11,
              ease,
            })
          }

          const heroBg = root.querySelector('.qs-hero-bg')
          const heroShell = root.querySelector('.qs-hero-shell')
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

          root.querySelectorAll('.qs-reveal').forEach((el) => {
            gsap.from(el, {
              opacity: 0,
              y: 30,
              duration: 0.72,
              ease,
              scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                once: true,
              },
            })
          })

          const pillarsGrid = root.querySelector('.qs-pillars-grid')
          if (pillarsGrid) {
            try {
              if (window.getComputedStyle(pillarsGrid).display !== 'none') {
                const cards = pillarsGrid.querySelectorAll('.qs-pillar-card')
                if (cards.length) {
                  gsap.from(cards, {
                    opacity: 0,
                    y: 32,
                    duration: 0.62,
                    stagger: 0.09,
                    ease,
                    clearProps: 'opacity,transform',
                    scrollTrigger: {
                      trigger: pillarsGrid,
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

          const mvvBoard = root.querySelector('.qs-mvv-board')
          if (mvvBoard) {
            try {
              if (window.getComputedStyle(mvvBoard).display !== 'none') {
                const mvvCards = mvvBoard.querySelectorAll('.qs-mvv-card')
                if (mvvCards.length) {
                  gsap.from(mvvCards, {
                    opacity: 0,
                    y: 28,
                    duration: 0.62,
                    stagger: 0.12,
                    ease,
                    clearProps: 'opacity,transform',
                    scrollTrigger: {
                      trigger: mvvBoard,
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

          const closerBg = root.querySelector('.qs-closer-bg')
          const closerSection = root.querySelector('.qs-closer-section')
          if (closerBg && closerSection) {
            gsap.to(closerBg, {
              yPercent: 8,
              ease: 'none',
              scrollTrigger: {
                trigger: closerSection,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            })
          }

          const teamList = root.querySelector('.qs-team-list')
          if (teamList) {
            try {
              if (window.getComputedStyle(teamList).display !== 'none') {
                const teamRows = teamList.querySelectorAll('.qs-team-row')
                if (teamRows.length) {
                  gsap.from(teamRows, {
                    opacity: 0,
                    y: 28,
                    duration: 0.62,
                    stagger: 0.14,
                    ease,
                    clearProps: 'opacity,transform',
                    scrollTrigger: {
                      trigger: teamList,
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

          const storyImg = root.querySelector('.qs-story__img-el')
          const storyArc = root.querySelector('.qs-story-arc')
          if (storyImg && storyArc) {
            gsap.to(storyImg, {
              scale: 1.06,
              ease: 'none',
              scrollTrigger: {
                trigger: storyArc,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            })
          }

        }, root)
        } catch (err) {
          console.error('Erro no GSAP context (QuemSomos):', err)
        }

        ScrollTrigger.refresh()
        document.fonts?.ready?.then(() => {
          if (qsGsapAlive) ScrollTrigger.refresh()
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
    if (name !== 'QuemSomos') return
    nextTick(() => {
      requestAnimationFrame(() => ScrollTrigger.refresh())
      if (qsStPostNavTimer) window.clearTimeout(qsStPostNavTimer)
      qsStPostNavTimer = window.setTimeout(() => {
        qsStPostNavTimer = 0
        if (qsGsapAlive) ScrollTrigger.refresh()
      }, 520)
    })
  },
  { flush: 'post' }
)

onMounted(() => {
  qsGsapAlive = true
  runQsGsap(0)
  if (typeof window !== 'undefined') {
    qsStPostNavTimer = window.setTimeout(() => {
      qsStPostNavTimer = 0
      if (qsGsapAlive) ScrollTrigger.refresh()
    }, 520)
  }
})

onUnmounted(() => {
  qsGsapAlive = false
  if (qsStPostNavTimer) {
    window.clearTimeout(qsStPostNavTimer)
    qsStPostNavTimer = 0
  }
  killQsCtx()
})
</script>

<style scoped lang="postcss">
@reference "../style.css";

.qs-page {
  --qs-btn-radius: 8px;
  --qs-btn-duration: 0.22s;
  --qs-btn-ease: cubic-bezier(0.2, 0.8, 0.2, 1);
  --qs-btn-lift: translateY(-1px);
  --qs-btn-press: scale(0.98);
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

.qs-hero-shell {
  background: #060606;
}
.qs-hero-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.qs-hero-overlay {
  background:
    linear-gradient(to right, rgba(6, 6, 6, 0.94) 0%, rgba(6, 6, 6, 0.82) 40%, rgba(6, 6, 6, 0.62) 100%),
    linear-gradient(to top, rgba(6, 6, 6, 0.9) 0%, transparent 52%),
    rgba(6, 6, 6, 0.35);
}
.qs-hero-grid {
  background-image:
    linear-gradient(rgba(0, 198, 254, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 198, 254, 0.04) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.15) 55%, transparent 100%);
}
.qs-hero-media {
  contain: paint;
}
.qs-hero-bg {
  position: absolute;
  left: 0;
  top: -9%;
  width: 100%;
  height: 118%;
  max-width: none;
  object-fit: cover;
  object-position: center;
  will-change: transform;
}
.qs-hero-title__dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-left: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #88ce0d, #00c6fe);
  vertical-align: super;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: var(--qs-btn-radius);
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
    transform var(--qs-btn-duration) var(--qs-btn-ease),
    box-shadow var(--qs-btn-duration) var(--qs-btn-ease),
    border-color var(--qs-btn-duration) var(--qs-btn-ease),
    background-color var(--qs-btn-duration) var(--qs-btn-ease),
    color var(--qs-btn-duration) var(--qs-btn-ease);
}
.btn:focus-visible {
  outline: 2px solid #00c6fe;
  outline-offset: 3px;
}
.btn:active:not(:disabled) {
  transform: var(--qs-btn-press);
}
.btn-outline {
  background: transparent;
  border-color: #cbd5e1;
  color: #0f172a;
}
.btn-outline:hover {
  border-color: #00c6fe;
  color: #00c6fe;
  transform: var(--qs-btn-lift);
  box-shadow: 0 10px 28px -14px rgba(0, 198, 254, 0.35);
}
.qs-hero-shell .btn-outline,
.qs-closer-section .btn-outline {
  border-color: rgba(255, 255, 255, 0.22);
  color: #fff;
}
.btn-lime {
  padding: 14px 28px;
  font-size: 14px;
  letter-spacing: 0.06em;
  background: #88ce0d;
  color: #060606;
}
.btn-lime:hover {
  transform: var(--qs-btn-lift);
  background: #9dea0f;
  box-shadow: 0 18px 40px -12px rgba(136, 206, 13, 0.55);
}

.qs-story-section__gridlines {
  background-image:
    linear-gradient(rgba(0, 198, 254, 0.35) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 198, 254, 0.28) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.35) 0%, transparent 75%);
}
.qs-story-arc {
  position: relative;
  overflow: hidden;
  min-height: 280px;
  border-radius: 22px;
  border: 1px solid #dbe3ef;
  background: #0a0a0a;
  box-shadow: 0 28px 72px -44px rgba(0, 0, 0, 0.85);
}
@media (min-width: 768px) {
  .qs-story-arc {
    min-height: 100%;
    border-radius: 24px;
  }
}
@media (min-width: 768px) {
  .qs-reveal:has(.qs-story-arc) .qs-story-arc {
    min-height: 420px;
  }
}
.qs-story__img-el {
  will-change: transform;
  transform-origin: center center;
}
.qs-story-arc__cap {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 14px 20px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.88);
  background: linear-gradient(to top, rgba(6, 6, 6, 0.92) 0%, transparent 100%);
}
.qs-story-panel {
  position: relative;
  z-index: 3;
  display: flex;
  gap: 18px;
  align-items: stretch;
  margin: 0;
  max-width: none;
  border-radius: 22px;
  border: 1px solid #dbe3ef;
  background: linear-gradient(168deg, #ffffff 0%, #f8fafc 100%);
  padding: 24px 20px 28px;
  text-align: left;
  box-shadow: 0 24px 70px -40px rgba(0, 198, 254, 0.12);
}
@media (min-width: 768px) {
  .qs-story-panel {
    padding: 36px 32px 40px;
    gap: 22px;
  }
}
.qs-story-panel__rail {
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 2px;
}
.qs-story-panel__rail-n {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: rgba(136, 206, 13, 0.95);
}
.qs-story-panel__rail-line {
  flex: 1;
  width: 1px;
  min-height: 40px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(0, 198, 254, 0.85) 0%, rgba(0, 198, 254, 0.08) 100%);
}
.qs-story-panel__main {
  min-width: 0;
  flex: 1;
}
.qs-story-panel__headline {
  margin: 10px 0 0;
  font-size: clamp(21px, 4.5vw, 32px);
  font-weight: 700;
  line-height: 1.14;
  letter-spacing: -0.03em;
  color: #0f172a;
}
.qs-story-panel .section-tag {
  justify-content: flex-start;
}

.qs-sec-kicker {
  margin-bottom: 0;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #00c6fe;
}
/* Pilares — cartões em grelha */
.qs-pillar-card {
  min-width: 0;
}
.qs-pillar-card__surface {
  display: flex;
  height: 100%;
  min-height: 200px;
  flex-direction: column;
  border-radius: 18px;
  border: 1px solid #dbe3ef;
  background: linear-gradient(165deg, #ffffff 0%, #f8fafc 100%);
  padding: 26px 22px 28px;
  box-shadow: 0 22px 56px -40px rgba(15, 23, 42, 0.28);
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
}
@media (min-width: 1024px) {
  .qs-pillar-card__surface {
    min-height: 220px;
    padding: 28px 24px 30px;
  }
}
.qs-pillar-card:hover .qs-pillar-card__surface {
  border-color: rgba(0, 198, 254, 0.45);
  box-shadow: 0 28px 64px -36px rgba(0, 198, 254, 0.18);
  transform: translateY(-4px);
}
.qs-pillar-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
}
.qs-pillar-card__tag {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: rgba(136, 206, 13, 0.95);
}
.qs-pillar-card__ico {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  color: #00c6fe;
}
@media (min-width: 1024px) {
  .qs-pillar-card__ico {
    width: 48px;
    height: 48px;
  }
}
.qs-pillar-card__text {
  margin: 0;
  font-size: 15px;
  line-height: 1.58;
  color: #475569;
}
@media (min-width: 1024px) {
  .qs-pillar-card__text {
    font-size: 16px;
    line-height: 1.55;
  }
}

.qs-quote__mark {
  position: absolute;
  top: -0.2em;
  left: -0.08em;
  z-index: 0;
  font-size: clamp(5rem, 18vw, 8rem);
  font-weight: 700;
  line-height: 1;
  color: rgba(0, 198, 254, 0.12);
  pointer-events: none;
}
.qs-window__frame {
  position: absolute;
  inset: 0;
  border: 1px solid #dbe3ef;
  border-radius: 20px;
  pointer-events: none;
  box-shadow: inset 0 0 0 1px rgba(0, 198, 254, 0.08);
}
.qs-window__img {
  will-change: transform;
}

.qs-mvv-card {
  min-width: 0;
}
.qs-mvv-card__surface {
  position: relative;
  display: flex;
  height: 100%;
  min-height: 320px;
  flex-direction: column;
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid #dbe3ef;
  background: linear-gradient(168deg, #ffffff 0%, #f8fafc 100%);
  padding: 26px 22px 28px;
  box-shadow: 0 22px 52px -38px rgba(15, 23, 42, 0.26);
  transition:
    border-color 0.32s ease,
    box-shadow 0.32s ease,
    transform 0.38s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.qs-mvv-card__surface::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, rgba(0, 198, 254, 0.65), rgba(136, 206, 13, 0.55), transparent);
  opacity: 0.85;
  transition: opacity 0.3s ease;
}
.qs-mvv-card:hover .qs-mvv-card__surface {
  border-color: rgba(0, 198, 254, 0.42);
  box-shadow: 0 30px 70px -34px rgba(0, 198, 254, 0.2);
  transform: translateY(-6px);
}
.qs-mvv-card:hover .qs-mvv-card__surface::before {
  opacity: 1;
}
.qs-mvv-card__icon-wrap {
  display: flex;
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  border: 1px solid rgba(0, 198, 254, 0.28);
  background: rgba(0, 198, 254, 0.08);
  margin-bottom: 18px;
  transition:
    border-color 0.3s ease,
    background-color 0.3s ease,
    transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.qs-mvv-card__icon {
  width: 28px;
  height: 28px;
  color: #00c6fe;
}
.qs-mvv-card:hover .qs-mvv-card__icon-wrap {
  border-color: rgba(136, 206, 13, 0.45);
  background: rgba(136, 206, 13, 0.1);
  transform: scale(1.06);
}
.qs-mvv-card:hover .qs-mvv-card__icon {
  color: #88ce0d;
}
.qs-mvv-card__idx {
  display: inline-block;
  margin-bottom: 10px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: rgba(136, 206, 13, 0.9);
}
.qs-mvv-card__h {
  margin: 0 0 12px;
  font-size: 1.28rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #0f172a;
}
.qs-mvv-card__p {
  margin: 0;
  font-size: 15px;
  line-height: 1.68;
  color: #475569;
}
.qs-mvv-card__ul {
  margin: 0;
  padding-left: 1.15rem;
  font-size: 15px;
  line-height: 1.65;
  color: #475569;
}
.qs-mvv-card__ul li {
  margin-bottom: 6px;
}

.qs-cinema {
  position: relative;
  clip-path: ellipse(125% 100% at 50% 0%);
}
.qs-cinema__img {
  display: block;
  width: 100%;
  height: min(38vh, 360px);
  object-fit: cover;
  object-position: 25% 30%;
}
.qs-cinema__shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(6, 6, 6, 0.75) 100%),
    linear-gradient(90deg, rgba(6, 6, 6, 0.4) 0%, transparent 40%, transparent 60%, rgba(6, 6, 6, 0.35) 100%);
  pointer-events: none;
}

.qs-team-row {
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid #dbe3ef;
  background: #ffffff;
  padding: 20px;
  transition:
    border-color 0.28s ease,
    box-shadow 0.32s ease;
}
@media (min-width: 768px) {
  .qs-team-row {
    flex-direction: row;
    align-items: center;
    gap: 32px;
    padding: 24px 28px;
  }
  .qs-team-row--flip {
    flex-direction: row-reverse;
  }
}
.qs-team-row:hover {
  border-color: rgba(0, 198, 254, 0.28);
  box-shadow: 0 22px 56px -36px rgba(0, 198, 254, 0.12);
}
.qs-team-row__photo {
  flex-shrink: 0;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 16px;
  background: #111;
  aspect-ratio: 1;
}
@media (min-width: 768px) {
  .qs-team-row__photo {
    width: 168px;
    max-width: none;
    margin: 0;
  }
}
.qs-team-row__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.55s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.qs-team-row:hover .qs-team-row__img {
  transform: scale(1.03);
}
.qs-team-row__meta {
  min-width: 0;
  flex: 1;
  text-align: center;
}
@media (min-width: 768px) {
  .qs-team-row__meta {
    text-align: left;
  }
}
.qs-team-row__name {
  margin: 0 0 6px;
  font-size: 1.35rem;
  font-weight: 700;
  color: #0f172a;
}
.qs-team-row__role {
  margin: 0 0 12px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #88ce0d;
}
.qs-team-row__bio {
  margin: 0;
  font-size: 14px;
  line-height: 1.65;
  color: #475569;
}

.qs-closer-section {
  background: #060606;
}
.qs-closer-bg {
  will-change: transform;
}
.qs-closer-scrim {
  background:
    linear-gradient(to right, rgba(6, 6, 6, 0.88) 0%, rgba(6, 6, 6, 0.55) 42%, rgba(6, 6, 6, 0.25) 100%),
    linear-gradient(to top, rgba(6, 6, 6, 0.92) 0%, transparent 45%);
}
.qs-closer-gridlines {
  background-image:
    linear-gradient(rgba(0, 198, 254, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 198, 254, 0.05) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, transparent 70%);
}
.qs-closer-glass {
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(165deg, rgba(12, 12, 14, 0.92) 0%, rgba(6, 6, 6, 0.88) 100%);
  padding: 28px 24px 32px;
  box-shadow: 0 32px 80px -40px rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(10px);
}
@media (min-width: 768px) {
  .qs-closer-glass {
    padding: 36px 40px 40px;
  }
}
.qs-closer-kicker {
  margin-bottom: 0;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #88ce0d;
}

.qs-swiper-pillars :deep(.swiper-pagination-bullet-active),
.qs-swiper-mvv :deep(.swiper-pagination-bullet-active),
.qs-swiper-team :deep(.swiper-pagination-bullet-active) {
  background: #00c6fe;
}
.qs-swiper-pillars :deep(.swiper-pagination-bullet),
.qs-swiper-mvv :deep(.swiper-pagination-bullet),
.qs-swiper-team :deep(.swiper-pagination-bullet) {
  background: rgba(255, 255, 255, 0.22);
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .btn:hover,
  .btn:active {
    transform: none;
  }
  .qs-team-row:hover .qs-team-row__img {
    transform: none;
  }
  .qs-pillar-card:hover .qs-pillar-card__surface,
  .qs-mvv-card:hover .qs-mvv-card__surface,
  .qs-mvv-card:hover .qs-mvv-card__icon-wrap {
    transform: none;
  }
}

@media (max-width: 767px) {
  .qs-page .btn {
    font-size: 11px;
    padding: 9px 16px;
    min-height: 42px;
  }
  .qs-page .btn-lime {
    padding: 10px 18px;
  }
}
</style>
