<template>
  <div class="tp-page bg-[#f8fafc] text-[#0f172a] font-body">
    <section
      class="tp-hero relative isolate flex min-h-[min(56vh,520px)] overflow-hidden pb-12 pt-24 md:min-h-[min(64vh,560px)] md:pb-16 md:pt-20"
    >
      <div class="tp-hero__overlay pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />
      <div class="tp-hero__grid pointer-events-none absolute inset-0 z-[2]" aria-hidden="true" />

      <div class="relative z-[3] mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-4 md:px-12">
        <div class="tp-hero__copy w-full max-w-[820px] text-white">
          <p class="eyebrow">{{ t('termos.heroEyebrow') }}</p>
          <h1
            class="font-head text-[clamp(28px,5.4vw,52px)] font-bold leading-[1.05] tracking-[-0.03em]"
            v-html="t('termos.title')"
          />
          <p
            class="mt-6 max-w-[640px] border-l-2 border-[#00C6FE] pl-5 text-[14px] leading-[1.7] text-white/70 sm:text-[15px]"
          >
            {{ t('termos.heroLead') }}
          </p>

          <ul class="mt-8 flex flex-wrap items-center gap-2.5">
            <li>
              <span class="tp-tag tp-tag--cyan">{{ t('termos.tags.lgpd') }}</span>
            </li>
            <li>
              <span class="tp-tag tp-tag--lime">{{ t('termos.tags.gdpr') }}</span>
            </li>
            <li>
              <span class="tp-tag">{{ t('termos.tags.hipaa') }}</span>
            </li>
            <li class="ml-1 flex items-center gap-2 text-[12px] text-white/55">
              <span class="tp-meta-dot" aria-hidden="true" />
              <span class="font-head uppercase tracking-[0.08em]">{{ t('termos.lastUpdated') }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="pointer-events-none absolute bottom-0 left-0 right-0 z-[4] h-px bg-gradient-to-r from-transparent via-[#00C6FE]/45 to-transparent"
        aria-hidden="true"
      />
    </section>

    <section class="border-t border-[#dbe3ef] bg-white py-14 md:py-20">
      <div class="mx-auto w-full max-w-[1200px] px-4 md:px-12">
        <details class="tp-toc-mobile lg:hidden">
          <summary class="tp-toc-mobile__summary">
            <span class="font-head">{{ t('termos.tocTitle') }}</span>
            <span class="tp-toc-mobile__chevron" aria-hidden="true">▾</span>
          </summary>
          <ol class="tp-toc__list mt-4">
            <li v-for="s in sections" :key="s.id">
              <a :href="`#${s.id}`" class="tp-toc__link" :class="{ 'is-active': activeId === s.id }">
                <span class="tp-toc__num font-head">{{ String(s.num).padStart(2, '0') }}</span>
                <span class="tp-toc__label">{{ t(`termos.section${s.num}.title`) }}</span>
              </a>
            </li>
          </ol>
        </details>

        <div class="grid gap-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
          <aside class="tp-toc hidden lg:block">
            <nav class="tp-toc__panel" :aria-label="t('termos.tocTitle')">
              <p class="tp-toc__title font-head">{{ t('termos.tocTitle') }}</p>
              <ol class="tp-toc__list">
                <li v-for="s in sections" :key="s.id">
                  <a :href="`#${s.id}`" class="tp-toc__link" :class="{ 'is-active': activeId === s.id }">
                    <span class="tp-toc__num font-head">{{ String(s.num).padStart(2, '0') }}</span>
                    <span class="tp-toc__label">{{ t(`termos.section${s.num}.title`) }}</span>
                  </a>
                </li>
              </ol>
            </nav>
          </aside>

          <article class="tp-article min-w-0">
            <section :id="`termos-1`" class="tp-section">
              <header class="tp-section__head">
                <span class="tp-section__num font-head">01</span>
                <h2 class="tp-section__title font-head" v-html="t('termos.section1.title')" />
              </header>
              <div class="tp-prose">
                <p v-html="formatText(t('termos.section1.paragraph1'))" />
                <p v-html="formatText(t('termos.section1.paragraph2'))" />
                <p v-html="formatText(t('termos.section1.paragraph3'))" />
                <p v-html="formatText(t('termos.section1.paragraph4'))" />
                <p v-html="formatText(t('termos.section1.paragraph5'))" />
                <p v-html="formatText(t('termos.section1.paragraph6'))" />
                <p v-html="formatText(t('termos.section1.paragraph7'))" />
              </div>
            </section>

            <section id="termos-2" class="tp-section">
              <header class="tp-section__head">
                <span class="tp-section__num font-head">02</span>
                <h2 class="tp-section__title font-head" v-html="t('termos.section2.title')" />
              </header>
              <div class="tp-prose">
                <p v-html="formatText(t('termos.section2.paragraph1'))" />
              </div>
            </section>

            <section id="termos-3" class="tp-section">
              <header class="tp-section__head">
                <span class="tp-section__num font-head">03</span>
                <h2 class="tp-section__title font-head" v-html="t('termos.section3.title')" />
              </header>
              <div class="tp-prose">
                <p v-html="formatText(t('termos.section3.paragraph1'))" />
                <p v-html="formatText(t('termos.section3.paragraph2'))" />
                <ol class="tp-list tp-list--ordered">
                  <li v-html="formatText(t('termos.section3.list1'))" />
                  <li v-html="formatText(t('termos.section3.list2'))" />
                </ol>
                <p v-html="formatText(t('termos.section3.paragraph3'))" />
                <p v-html="formatText(t('termos.section3.paragraph4'))" />
              </div>
            </section>

            <section id="termos-4" class="tp-section">
              <header class="tp-section__head">
                <span class="tp-section__num font-head">04</span>
                <h2 class="tp-section__title font-head" v-html="t('termos.section4.title')" />
              </header>
              <div class="tp-prose">
                <p v-html="formatText(t('termos.section4.paragraph1'))" />
              </div>
            </section>

            <section id="termos-5" class="tp-section">
              <header class="tp-section__head">
                <span class="tp-section__num font-head">05</span>
                <h2 class="tp-section__title font-head" v-html="t('termos.section5.title')" />
              </header>
              <div class="tp-prose">
                <p v-html="formatText(t('termos.section5.paragraph1'))" />
                <ul class="tp-list tp-list--bullet">
                  <li v-html="formatText(t('termos.section5.list1'))" />
                  <li v-html="formatText(t('termos.section5.list2'))" />
                  <li v-html="formatText(t('termos.section5.list3'))" />
                  <li v-html="formatText(t('termos.section5.list4'))" />
                  <li v-html="formatText(t('termos.section5.list5'))" />
                  <li v-html="formatText(t('termos.section5.list6'))" />
                </ul>
              </div>
            </section>

            <section id="termos-6" class="tp-section">
              <header class="tp-section__head">
                <span class="tp-section__num font-head">06</span>
                <h2 class="tp-section__title font-head" v-html="t('termos.section6.title')" />
              </header>
              <div class="tp-prose">
                <p v-html="formatText(t('termos.section6.paragraph1'))" />
              </div>
            </section>

            <section id="termos-7" class="tp-section">
              <header class="tp-section__head">
                <span class="tp-section__num font-head">07</span>
                <h2 class="tp-section__title font-head" v-html="t('termos.section7.title')" />
              </header>
              <div class="tp-prose">
                <p v-html="formatText(t('termos.section7.paragraph1'))" />
              </div>
            </section>

            <section id="termos-8" class="tp-section">
              <header class="tp-section__head">
                <span class="tp-section__num font-head">08</span>
                <h2 class="tp-section__title font-head" v-html="t('termos.section8.title')" />
              </header>
              <div class="tp-prose">
                <p v-html="formatText(t('termos.section8.paragraph1'))" />
              </div>
            </section>

            <section id="termos-9" class="tp-section">
              <header class="tp-section__head">
                <span class="tp-section__num font-head">09</span>
                <h2 class="tp-section__title font-head" v-html="t('termos.section9.title')" />
              </header>
              <div class="tp-prose">
                <p v-html="formatText(t('termos.section9.paragraph1'))" />
                <p v-html="formatText(t('termos.section9.paragraph2'))" />
              </div>
            </section>

            <section id="termos-10" class="tp-section">
              <header class="tp-section__head">
                <span class="tp-section__num font-head">10</span>
                <h2 class="tp-section__title font-head" v-html="t('termos.section10.title')" />
              </header>
              <div class="tp-prose">
                <p v-html="formatText(t('termos.section10.paragraph1'))" />
              </div>
            </section>

            <section id="termos-11" class="tp-section">
              <header class="tp-section__head">
                <span class="tp-section__num font-head">11</span>
                <h2 class="tp-section__title font-head" v-html="t('termos.section11.title')" />
              </header>
              <div class="tp-prose">
                <p v-html="formatText(t('termos.section11.paragraph1'))" />
              </div>
            </section>

            <section id="termos-12" class="tp-section">
              <header class="tp-section__head">
                <span class="tp-section__num font-head">12</span>
                <h2 class="tp-section__title font-head" v-html="t('termos.section12.title')" />
              </header>
              <div class="tp-prose">
                <p v-html="formatText(t('termos.section12.paragraph1'))" />
              </div>
            </section>

            <section id="termos-13" class="tp-section">
              <header class="tp-section__head">
                <span class="tp-section__num font-head">13</span>
                <h2 class="tp-section__title font-head" v-html="t('termos.section13.title')" />
              </header>
              <div class="tp-prose">
                <p v-html="formatText(t('termos.section13.paragraph1'))" />
              </div>
            </section>

            <section id="termos-14" class="tp-section">
              <header class="tp-section__head">
                <span class="tp-section__num font-head">14</span>
                <h2 class="tp-section__title font-head" v-html="t('termos.section14.title')" />
              </header>
              <div class="tp-prose">
                <p v-html="formatText(t('termos.section14.paragraph1'))" />
              </div>
            </section>

            <section id="termos-15" class="tp-section">
              <header class="tp-section__head">
                <span class="tp-section__num font-head">15</span>
                <h2 class="tp-section__title font-head" v-html="t('termos.section15.title')" />
              </header>
              <div class="tp-prose">
                <p v-html="formatText(t('termos.section15.paragraph1'))" />
              </div>
            </section>

            <section id="termos-16" class="tp-section">
              <header class="tp-section__head">
                <span class="tp-section__num font-head">16</span>
                <h2 class="tp-section__title font-head" v-html="t('termos.section16.title')" />
              </header>
              <div class="tp-prose">
                <p v-html="formatText(t('termos.section16.paragraph1'))" />
              </div>
            </section>

            <section id="termos-17" class="tp-section tp-section--last">
              <header class="tp-section__head">
                <span class="tp-section__num font-head">17</span>
                <h2 class="tp-section__title font-head" v-html="t('termos.section17.title')" />
              </header>
              <div class="tp-prose">
                <p v-html="formatText(t('termos.section17.paragraph1'))" />
              </div>
            </section>
          </article>
        </div>
      </div>
    </section>

    <section class="tp-cta relative isolate overflow-hidden border-t border-[#dbe3ef] bg-[#f8fafc] py-16 md:py-24">
      <div class="tp-cta__grid pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <div class="tp-cta__veil pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />

      <div
        class="relative z-[2] mx-auto flex w-full max-w-[1200px] flex-col items-stretch gap-10 px-4 md:px-12 lg:flex-row lg:items-center lg:justify-between"
      >
        <div class="tp-cta__glass min-w-0 flex-1 lg:max-w-[640px]">
          <p class="tp-cta__kicker font-head">{{ t('termos.cta.eyebrow') }}</p>
          <h2
            class="mt-4 font-head text-[clamp(22px,4vw,38px)] font-bold leading-[1.08] tracking-[-0.03em] text-[#0f172a]"
          >
            {{ t('termos.cta.title') }}
          </h2>
          <p
            class="mt-6 max-w-[520px] border-l-2 border-[#88CE0D] pl-5 text-[14px] leading-[1.75] text-[#475569] sm:text-[15px]"
          >
            {{ t('termos.cta.text') }}
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <RouterLink :to="{ name: 'Contato' }" class="btn btn-lime">
              {{ t('termos.cta.button') }}
            </RouterLink>
          </div>
        </div>

        <div ref="ctaLogoWrapRef" class="tp-cta__logo-wrap relative flex shrink-0 items-center justify-center lg:w-[320px]">
          <span class="tp-cta__logo-glow pointer-events-none absolute inset-0 -z-[1]" aria-hidden="true" />
          <img
            ref="ctaLogoRef"
            src="/logoFit-column.png"
            alt="FitCertify365"
            class="tp-cta__logo h-auto w-[160px] max-w-full object-contain md:w-[200px] lg:w-[240px]"
          />
        </div>
      </div>
    </section>

    <button
      v-show="showBackToTop"
      type="button"
      class="tp-back-to-top"
      :aria-label="t('termos.backToTop')"
      @click="scrollTop"
    >
      <span aria-hidden="true">↑</span>
    </button>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const sections = Array.from({ length: 17 }, (_, i) => ({
  id: `termos-${i + 1}`,
  num: i + 1,
}))

const activeId = ref('termos-1')
const showBackToTop = ref(false)
let observer = null

const ctaLogoWrapRef = ref(null)
const ctaLogoRef = ref(null)
let ctaLogoCleanup = null

function setupCtaLogoTilt() {
  const wrap = ctaLogoWrapRef.value
  const img = ctaLogoRef.value
  if (!wrap || !img) return

  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  if (reduce) return

  gsap.set(img, { transformPerspective: 800, transformOrigin: 'center center' })

  const xTo = gsap.quickTo(img, 'rotationY', { duration: 0.45, ease: 'power2.out' })
  const yTo = gsap.quickTo(img, 'rotationX', { duration: 0.45, ease: 'power2.out' })
  const sTo = gsap.quickTo(img, 'scale', { duration: 0.45, ease: 'power2.out' })

  const onMove = (e) => {
    const r = wrap.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    xTo((x - 0.5) * 18)
    yTo(-(y - 0.5) * 12)
  }
  const onEnter = () => { sTo(1.05) }
  const onLeave = () => {
    gsap.to(img, {
      rotationY: 0, rotationX: 0, scale: 1,
      duration: 0.6, ease: 'power3.out',
    })
  }

  wrap.addEventListener('mousemove', onMove)
  wrap.addEventListener('mouseenter', onEnter)
  wrap.addEventListener('mouseleave', onLeave)

  ctaLogoCleanup = () => {
    wrap.removeEventListener('mousemove', onMove)
    wrap.removeEventListener('mouseenter', onEnter)
    wrap.removeEventListener('mouseleave', onLeave)
    gsap.killTweensOf(img)
  }
}

const formatText = (text) => {
  return (text || '')
    .replace(/\{strongOpen\}/g, '<strong>')
    .replace(/\{strongClose\}/g, '</strong>')
    .replace(/\{at\}/g, '@')
}

const onScroll = () => {
  showBackToTop.value = window.scrollY > 480
}

const scrollTop = () => {
  if (typeof window === 'undefined') return
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  if (typeof window === 'undefined') return

  const targets = sections
    .map((s) => document.getElementById(s.id))
    .filter((el) => el !== null)

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      })
    },
    { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
  )
  targets.forEach((el) => observer?.observe(el))

  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  setupCtaLogoTilt()
})

onUnmounted(() => {
  observer?.disconnect()
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', onScroll)
  }
  ctaLogoCleanup?.()
  ctaLogoCleanup = null
})
</script>

<style scoped lang="postcss">
@reference '../style.css';

.tp-page {
  --tp-btn-radius: 8px;
}

.font-head {
  font-family: 'Space Grotesk', sans-serif;
}
.font-body {
  font-family: 'DM Sans', sans-serif;
}

.eyebrow {
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
.eyebrow::before {
  content: '';
  width: 22px;
  height: 2px;
  background: #88ce0d;
}

.tp-hero {
  background:
    radial-gradient(ellipse 55% 70% at 90% 0%, rgba(0, 198, 254, 0.14) 0%, transparent 58%),
    radial-gradient(ellipse 45% 65% at 0% 100%, rgba(136, 206, 13, 0.1) 0%, transparent 52%),
    linear-gradient(180deg, #0b1220 0%, #0f172a 42%, #111827 100%);
}
/* Topo mais fechado para o header fixo (links brancos) não “sumirem” no fundo claro */
.tp-hero__overlay {
  background:
    linear-gradient(to bottom, rgba(6, 8, 12, 0.92) 0%, rgba(6, 8, 12, 0.55) 38%, rgba(15, 23, 42, 0.2) 72%, transparent 100%),
    linear-gradient(to right, rgba(6, 8, 12, 0.55) 0%, transparent 52%);
}
.tp-hero__grid {
  background-image:
    linear-gradient(rgba(0, 198, 254, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 198, 254, 0.04) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.12) 55%, transparent 100%);
}

.tp-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  border: 1px solid #dbe3ef;
  background: #ffffff;
  padding: 7px 13px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #334155;
}
.tp-tag--cyan {
  border-color: rgba(0, 198, 254, 0.35);
  background: rgba(0, 198, 254, 0.08);
  color: #0369a1;
}
.tp-tag--lime {
  border-color: rgba(136, 206, 13, 0.45);
  background: rgba(136, 206, 13, 0.12);
  color: #3f6212;
}
.tp-meta-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: #94a3b8;
}

/* Tags na hero escura (sobrescreve estilos claros de .tp-tag) */
.tp-hero .tp-tag {
  border-color: rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.88);
}
.tp-hero .tp-tag--cyan {
  border-color: rgba(0, 198, 254, 0.42);
  background: rgba(0, 198, 254, 0.1);
  color: #d6f4ff;
}
.tp-hero .tp-tag--lime {
  border-color: rgba(136, 206, 13, 0.42);
  background: rgba(136, 206, 13, 0.1);
  color: #e6f7c7;
}
.tp-hero .tp-meta-dot {
  background: rgba(255, 255, 255, 0.45);
}

.tp-toc-mobile {
  margin-bottom: 32px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(168deg, rgba(30, 32, 40, 0.98) 0%, rgba(12, 14, 20, 0.99) 100%);
  padding: 18px 18px;
  box-shadow:
    0 24px 56px -32px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(0, 198, 254, 0.06) inset;
}
.tp-toc-mobile__summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  cursor: pointer;
  list-style: none;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #00c6fe;
}
.tp-toc-mobile__summary::-webkit-details-marker {
  display: none;
}
.tp-toc-mobile__chevron {
  color: rgba(255, 255, 255, 0.45);
  transition: transform 0.22s ease;
}
.tp-toc-mobile[open] .tp-toc-mobile__chevron {
  transform: rotate(180deg);
}

/* Sticky no aside (não só no painel): com align-self:start o sumário acompanha o scroll da página */
.tp-toc {
  position: sticky;
  top: 96px;
  align-self: start;
  z-index: 20;
  width: 100%;
  max-width: 260px;
}
.tp-toc__panel {
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(168deg, rgba(30, 32, 40, 0.98) 0%, rgba(12, 14, 20, 0.99) 100%);
  padding: 22px 18px 24px;
  box-shadow:
    0 28px 72px -36px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(0, 198, 254, 0.06) inset;
  max-height: min(560px, calc(100vh - 112px));
  overflow-y: auto;
  overscroll-behavior: contain;
}
.tp-toc__title {
  margin: 0 0 16px;
  padding: 0 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #00c6fe;
}
.tp-toc__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tp-toc__link {
  display: grid;
  grid-template-columns: 28px 1fr;
  align-items: center;
  gap: 10px;
  border-left: 2px solid transparent;
  padding: 9px 8px;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  line-height: 1.35;
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  transition:
    color 0.22s ease,
    border-color 0.22s ease,
    background-color 0.22s ease;
}
.tp-toc__link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
}
.tp-toc__link.is-active {
  color: #7dd3fc;
  border-left-color: #00c6fe;
  background: rgba(0, 198, 254, 0.12);
}
.tp-toc__num {
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.38);
}
.tp-toc__link.is-active .tp-toc__num {
  color: #00c6fe;
}
.tp-toc__label {
  font-weight: 500;
}

.tp-article {
  display: flex;
  flex-direction: column;
}

.tp-section {
  position: relative;
  scroll-margin-top: 96px;
  padding-bottom: 36px;
  margin-bottom: 36px;
  border-bottom: 1px solid #e2e8f0;
}
.tp-section--last {
  border-bottom: 0;
  margin-bottom: 0;
  padding-bottom: 0;
}

.tp-section__head {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
}
@media (min-width: 768px) {
  .tp-section__head {
    flex-direction: row;
    align-items: baseline;
    gap: 18px;
  }
}
.tp-section__num {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #00c6fe;
}
.tp-section__title {
  margin: 0;
  font-size: clamp(18px, 2.4vw, 24px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: #0f172a;
}

.tp-prose {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  line-height: 1.78;
  color: #475569;
  max-width: 760px;
}
@media (min-width: 768px) {
  .tp-prose {
    font-size: 15.5px;
  }
}
.tp-prose :deep(strong) {
  font-weight: 700;
  color: #0369a1;
}
.tp-prose :deep(a) {
  color: #4d7c0f;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.tp-prose :deep(a):hover {
  color: #00c6fe;
}
.tp-prose :deep(p) {
  margin: 0;
}

.tp-list {
  list-style: none;
  margin: 4px 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.tp-list :deep(li) {
  position: relative;
  padding-left: 28px;
  line-height: 1.7;
}
.tp-list--bullet :deep(li)::before {
  content: '';
  position: absolute;
  left: 4px;
  top: 0.7em;
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: linear-gradient(135deg, #00c6fe, #88ce0d);
  box-shadow: 0 0 0 3px rgba(0, 198, 254, 0.18);
}
.tp-list--ordered {
  counter-reset: tp-ord;
}
.tp-list--ordered :deep(li) {
  counter-increment: tp-ord;
}
.tp-list--ordered :deep(li)::before {
  content: counter(tp-ord, decimal-leading-zero);
  position: absolute;
  left: 0;
  top: 0.05em;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #88ce0d;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: var(--tp-btn-radius);
  border: 1px solid transparent;
  padding: 10px 22px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  cursor: pointer;
  transition:
    transform 0.22s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.22s cubic-bezier(0.2, 0.8, 0.2, 1),
    background-color 0.22s cubic-bezier(0.2, 0.8, 0.2, 1),
    color 0.22s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.btn-lime {
  background: #88ce0d;
  color: #060606;
}
.btn-lime:hover {
  transform: translateY(-1px);
  background: #9dea0f;
  box-shadow: 0 18px 40px -12px rgba(136, 206, 13, 0.55);
}

.tp-cta {
  background: #f8fafc;
}
.tp-cta__grid {
  opacity: 0.45;
  background-image:
    linear-gradient(rgba(0, 198, 254, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 198, 254, 0.06) 1px, transparent 1px);
  background-size: 52px 52px;
  mask-image: radial-gradient(
    ellipse 85% 70% at 50% 40%,
    rgba(15, 23, 42, 0.08) 0%,
    rgba(15, 23, 42, 0.03) 55%,
    transparent 100%
  );
}
.tp-cta__veil {
  background:
    radial-gradient(ellipse 120% 80% at 50% 100%, rgba(0, 198, 254, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse 90% 60% at 0% 0%, rgba(136, 206, 13, 0.05) 0%, transparent 45%);
}
.tp-cta__kicker {
  margin: 0;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #88ce0d;
}
.tp-cta__glass {
  border-radius: 22px;
  border: 1px solid #dbe3ef;
  background: linear-gradient(168deg, #ffffff 0%, #f8fafc 100%);
  padding: 28px 22px 32px;
  box-shadow:
    0 24px 56px -36px rgba(15, 23, 42, 0.18),
    0 0 0 1px rgba(0, 198, 254, 0.08) inset;
}
@media (min-width: 768px) {
  .tp-cta__glass {
    padding: 36px 40px 40px;
  }
}
.tp-cta__logo-wrap {
  min-height: 200px;
  perspective: 800px;
}
.tp-cta__logo {
  filter: drop-shadow(0 18px 36px rgba(15, 23, 42, 0.14));
  transition: filter 0.4s ease;
  will-change: transform;
  cursor: pointer;
}
.tp-cta__logo-wrap:hover .tp-cta__logo {
  filter: drop-shadow(0 22px 44px rgba(0, 198, 254, 0.2)) drop-shadow(0 10px 24px rgba(136, 206, 13, 0.12));
}
.tp-cta__logo-glow {
  background: radial-gradient(
    closest-side,
    rgba(0, 198, 254, 0.22) 0%,
    rgba(136, 206, 13, 0.12) 45%,
    transparent 75%
  );
  filter: blur(28px);
}

.tp-back-to-top {
  position: fixed;
  right: 18px;
  bottom: 22px;
  z-index: 40;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid #dbe3ef;
  background: #ffffff;
  color: #00c6fe;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  box-shadow:
    0 16px 36px -16px rgba(15, 23, 42, 0.18),
    0 0 0 1px rgba(0, 198, 254, 0.1);
  transition:
    transform 0.22s ease,
    background-color 0.22s ease,
    color 0.22s ease,
    box-shadow 0.22s ease;
}
.tp-back-to-top:hover {
  transform: translateY(-2px);
  background: #00c6fe;
  color: #060606;
  border-color: #00c6fe;
  box-shadow: 0 18px 40px -14px rgba(0, 198, 254, 0.45);
}
@media (min-width: 768px) {
  .tp-back-to-top {
    right: 28px;
    bottom: 28px;
    width: 48px;
    height: 48px;
    font-size: 18px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .btn-lime:hover,
  .tp-back-to-top:hover {
    transform: none;
  }
  .tp-toc-mobile__chevron {
    transition: none;
  }
}
</style>
