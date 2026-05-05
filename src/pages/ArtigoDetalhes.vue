<template>
  <div ref="adPageRef" class="art-det-page bg-[#060606] text-white font-body">
    <section
      class="art-det-hero art-det-hero-shell relative isolate overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20"
    >
      <div class="art-det-hero__media pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          v-if="loading || !heroImage"
          class="absolute inset-0 bg-gradient-to-br from-[#0a0a0c] via-[#060606] to-[#0a0a0c]"
        />
        <img
          v-else
          :src="heroImage"
          alt=""
          class="art-det-hero__bg pointer-events-none absolute inset-0 h-full w-full max-w-none object-cover object-center"
        />
      </div>
      <div class="art-det-hero__overlay pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />
      <div class="art-det-hero__grid pointer-events-none absolute inset-0 z-[2]" aria-hidden="true" />

      <div class="relative z-[3] mx-auto w-full max-w-[1200px] px-4 md:px-12">
        <RouterLink :to="{ name: 'Artigos' }" class="ad-hero-item art-det-back inline-flex items-center gap-2">
          <span class="art-det-back__arrow" aria-hidden="true">←</span>
          <span>{{ t('artigos.detalhe.backToList') }}</span>
        </RouterLink>

        <div class="mt-8 max-w-[820px]">
          <p class="ad-hero-item eyebrow">
            {{ t('artigos.heroEyebrow') }}
          </p>

          <template v-if="loading">
            <div class="ad-hero-item art-det-skeleton h-12 w-4/5 max-w-[600px] rounded bg-white/10 md:h-16" />
            <div class="ad-hero-item mt-6 art-det-skeleton h-5 w-full max-w-[520px] rounded bg-white/[0.08]" />
            <div class="ad-hero-item mt-2 art-det-skeleton h-5 w-2/3 max-w-[420px] rounded bg-white/[0.08]" />
          </template>

          <template v-else>
            <h1
              class="ad-hero-item font-head text-[clamp(28px,5.6vw,60px)] font-bold leading-[1.05] tracking-[-0.03em] text-white"
            >
              {{ getLocalizedField(item, 'titulo') }}
              <span class="art-det-hero__dot" aria-hidden="true" />
            </h1>
            <p
              v-if="getLocalizedField(item, 'subTitulo')"
              class="ad-hero-item art-det-hero__sub mt-7 max-w-[640px] border-l-2 border-[#00C6FE] pl-5 text-[15px] leading-[1.7] text-white/70 md:text-[17px]"
            >
              {{ getLocalizedField(item, 'subTitulo') }}
            </p>

            <ul class="ad-hero-item mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-[12.5px] text-white/55">
              <li v-if="authorName" class="flex items-center gap-2">
                <span class="art-det-meta__dot art-det-meta__dot--cyan" aria-hidden="true" />
                <span class="font-head font-semibold uppercase tracking-[0.08em] text-white/75">
                  {{ authorName }}
                </span>
              </li>
              <li v-if="readingMinutes > 0" class="flex items-center gap-2">
                <span class="art-det-meta__dot" aria-hidden="true" />
                <span class="font-head uppercase tracking-[0.08em]">
                  {{ t('artigos.detalhe.readingTime', { min: readingMinutes }) }}
                </span>
              </li>
            </ul>
          </template>
        </div>
      </div>

      <div
        class="pointer-events-none absolute bottom-0 left-0 right-0 z-[4] h-px bg-gradient-to-r from-transparent via-[#00C6FE]/45 to-transparent"
        aria-hidden="true"
      />
    </section>

    <section class="art-det-body relative border-t border-white/[0.06] bg-[#060606] py-14 md:py-20">
      <div class="mx-auto w-full max-w-[920px] px-4 md:px-8">
        <article class="art-prose">
          <div class="ad-reveal art-prose__block">
            <p class="art-prose__kicker">{{ t('artigos.detalhe.sectionIntro') }}</p>
            <template v-if="loading">
              <div class="art-det-skeleton h-5 w-full rounded bg-white/[0.08]" />
              <div class="mt-3 art-det-skeleton h-5 w-11/12 rounded bg-white/[0.08]" />
              <div class="mt-3 art-det-skeleton h-5 w-9/12 rounded bg-white/[0.08]" />
            </template>
            <p v-else class="art-prose__lead">
              {{ getLocalizedField(item, 'introducao') }}
            </p>
          </div>

          <div class="art-prose__divider" aria-hidden="true" />

          <div class="ad-reveal art-prose__block">
            <p class="art-prose__kicker">{{ t('artigos.detalhe.sectionContent') }}</p>
            <template v-if="loading">
              <div class="art-det-skeleton h-5 w-full rounded bg-white/[0.08]" />
              <div class="mt-3 art-det-skeleton h-5 w-11/12 rounded bg-white/[0.08]" />
              <div class="mt-3 art-det-skeleton h-5 w-10/12 rounded bg-white/[0.08]" />
              <div class="mt-3 art-det-skeleton h-5 w-9/12 rounded bg-white/[0.08]" />
            </template>
            <p v-else class="art-prose__body">
              {{ getLocalizedField(item, 'conteudo') }}
            </p>
          </div>

          <figure v-if="!loading && getLocalizedField(item, 'citacao')" class="ad-reveal art-quote">
            <p class="art-quote__kicker font-head">{{ t('artigos.detalhe.sectionQuote') }}</p>
            <span class="art-quote__mark" aria-hidden="true">&ldquo;</span>
            <blockquote class="art-quote__text">
              {{ getLocalizedField(item, 'citacao') }}
            </blockquote>
            <figcaption v-if="authorName" class="art-quote__caption font-head">
              — {{ authorName }}
            </figcaption>
          </figure>
        </article>
      </div>
    </section>

    <section v-if="loading || bannerImage" class="bg-[#060606] py-12 md:py-14">
      <div class="mx-auto w-full max-w-[1200px] px-4 md:px-12">
        <div class="ad-reveal art-det-banner relative overflow-hidden rounded-[20px] border border-white/10 shadow-[0_36px_96px_-50px_rgba(0,0,0,0.95)]">
          <div v-if="loading" class="art-det-skeleton aspect-[16/8] w-full bg-white/[0.06]" />
          <img v-else :src="bannerImage" alt="" class="aspect-[16/8] w-full object-cover" />
          <div
            v-if="!loading"
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060606]/60 via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>

    <section
      v-if="loading || getLocalizedField(item, 'conclusao')"
      class="art-det-body relative bg-[#060606] py-14 md:py-20"
    >
      <div class="mx-auto w-full max-w-[920px] px-4 md:px-8">
        <article class="art-prose">
          <div class="ad-reveal art-prose__block">
            <p class="art-prose__kicker">{{ t('artigos.detalhe.sectionConclusion') }}</p>
            <template v-if="loading">
              <div class="art-det-skeleton h-5 w-full rounded bg-white/[0.08]" />
              <div class="mt-3 art-det-skeleton h-5 w-10/12 rounded bg-white/[0.08]" />
            </template>
            <p v-else class="art-prose__body">
              {{ getLocalizedField(item, 'conclusao') }}
            </p>
          </div>
        </article>
      </div>
    </section>

    <!--
    <section class="art-det-author relative border-t border-white/[0.08] bg-[#0a0a0b] py-14 md:py-20">
      <div class="mx-auto w-full max-w-[1100px] px-4 md:px-12">
        <p class="art-author-eyebrow font-head">{{ t('artigos.detalhe.author.eyebrow') }}</p>

        <div class="art-author-card mt-5">
          <template v-if="loading">
            <div class="flex flex-col items-center gap-6 md:flex-row md:gap-8">
              <div class="art-det-skeleton h-24 w-24 rounded-full bg-white/10 md:h-28 md:w-28" />
              <div class="flex w-full flex-col gap-3">
                <div class="art-det-skeleton h-7 w-2/3 max-w-[260px] rounded bg-white/10" />
                <div class="art-det-skeleton h-4 w-1/2 max-w-[180px] rounded bg-white/[0.08]" />
                <div class="art-det-skeleton h-4 w-3/4 max-w-[260px] rounded bg-white/[0.08]" />
              </div>
              <div class="art-det-skeleton h-12 w-[200px] rounded-lg bg-white/[0.08]" />
            </div>
          </template>

          <template v-else>
            <div class="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-8">
              <div class="art-author-avatar shrink-0">
                <img
                  v-if="medico?.usuario?.avatarUrl"
                  :src="medico.usuario.avatarUrl"
                  alt=""
                  class="h-full w-full rounded-full object-cover"
                />
                <div v-else class="flex h-full w-full items-center justify-center rounded-full bg-white/[0.08] font-head text-2xl font-bold text-white/55">
                  {{ authorInitials }}
                </div>
              </div>

              <div class="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
                <span class="font-head text-[clamp(18px,2.4vw,24px)] font-bold leading-tight text-white">
                  {{ authorName }}
                </span>
                <span v-if="medico?.especializacao" class="mt-1 text-[13px] font-medium text-[#88CE0D]">
                  {{ medico.especializacao }}
                </span>
                <span v-if="criadoPor?.email" class="mt-1 text-[13px] text-white/55">
                  {{ criadoPor.email }}
                </span>
              </div>

              <div v-if="medico?.id && medico?.telefone" class="w-full md:w-auto">
                <a
                  :href="whatsappUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-lime w-full md:w-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="mr-2"
                  >
                    <path
                      d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
                    />
                  </svg>
                  {{ t('artigos.detalhe.author.contact') }}
                </a>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>
    -->


    <section class="border-t border-white/[0.06] bg-[#080808] py-14 md:py-20">
      <div class="mx-auto w-full max-w-[1200px] px-4 md:px-12">
        <header class="ad-reveal mb-10 md:mb-12 md:flex md:items-end md:justify-between md:gap-10">
          <div>
            <p class="art-related-eyebrow font-head">{{ t('artigos.detalhe.related.eyebrow') }}</p>
            <h2
              class="mt-3 font-head text-[clamp(22px,3.4vw,34px)] font-bold leading-[1.1] tracking-[-0.03em] text-white"
            >
              {{ t('artigos.detalhe.related.title') }}
            </h2>
          </div>
        </header>

        <ArtigoDetalhe @refresh-page="refreshPage" />
      </div>
    </section>

    <section class="art-det-cta relative isolate overflow-hidden border-t border-white/[0.08] bg-[#060606] py-16 md:py-24">
      <div class="art-det-cta__grid pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <div class="art-det-cta__veil pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />

      <div
        class="relative z-[2] mx-auto flex w-full max-w-[1200px] flex-col items-stretch gap-10 px-4 md:px-12 lg:flex-row lg:items-center lg:justify-between"
      >
        <div class="ad-reveal art-det-cta__glass min-w-0 flex-1 lg:max-w-[640px]">
          <p class="art-det-cta__kicker font-head">{{ t('artigos.detalhe.cta.eyebrow') }}</p>
          <h2
            class="mt-4 font-head text-[clamp(22px,4vw,36px)] font-bold leading-[1.1] tracking-[-0.03em] text-white"
          >
            {{ t('artigos.detalhe.cta.title') }}
          </h2>
          <p
            class="mt-6 max-w-[520px] border-l-2 border-[#88CE0D] pl-5 text-[14px] leading-[1.75] text-white/80 sm:text-[15px]"
          >
            {{ t('artigos.detalhe.cta.text') }}
          </p>
          <div class="mt-8">
            <RouterLink :to="{ name: 'Contato' }" class="btn btn-lime">
              {{ t('artigos.detalhe.cta.button') }}
            </RouterLink>
          </div>
        </div>

        <div ref="ctaLogoWrapRef" class="ad-reveal art-det-cta__logo-wrap relative flex shrink-0 items-center justify-center lg:w-[320px]">
          <span class="art-det-cta__logo-glow pointer-events-none absolute inset-0 -z-[1]" aria-hidden="true" />
          <img
            ref="ctaLogoRef"
            src="/logoFit-column.png"
            alt="FitCertify365"
            class="art-det-cta__logo h-auto w-[160px] max-w-full object-contain md:w-[200px] lg:w-[240px]"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, watch, computed, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ArtigoService from '../services/Artigos/artigos-service'
import ArtigoDetalhe from '../components/Artigo-Detalhe-Components/ArtigosDet.vue'
import medicoService from '../services/Medico/medico-service'
import { useI18n } from '../composables/useI18n'

gsap.registerPlugin(ScrollTrigger)

const route = useRoute()
const item = ref(null)
const criadoPor = ref(null)
const loading = ref(false)
const error = ref(null)
const medico = ref(null)
const { t, currentLocale } = useI18n()

const adPageRef = ref(null)

function getLocalizedField(it, field) {
  if (!it) return ''
  return currentLocale.value === 'en' ? it[`en_${field}`] : it[field]
}

const heroImage = computed(() => {
  if (!item.value) return ''
  const banner = item.value?.imagensArtigo?.find((i) => i.isBanner === true)
  const fallback = item.value?.imagensArtigo?.find((i) => i.isBanner === false)
  return banner?.imagemUrl || fallback?.imagemUrl || ''
})

const bannerImage = computed(() => {
  if (!item.value) return ''
  return item.value?.imagensArtigo?.find((i) => i.isBanner === true)?.imagemUrl || ''
})

const authorName = computed(() => {
  return criadoPor.value?.nome || t('artigos.detalhe.author.fallbackName')
})

const authorInitials = computed(() => {
  const name = authorName.value || ''
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() || '')
    .join('')
})

const readingMinutes = computed(() => {
  if (!item.value) return 0
  const intro = getLocalizedField(item.value, 'introducao') || ''
  const conteudo = getLocalizedField(item.value, 'conteudo') || ''
  const conclusao = getLocalizedField(item.value, 'conclusao') || ''
  const totalWords = `${intro} ${conteudo} ${conclusao}`.trim().split(/\s+/).filter(Boolean).length
  if (totalWords <= 0) return 0
  return Math.max(1, Math.round(totalWords / 220))
})

const loadArtigo = async (id) => {
  try {
    loading.value = true
    error.value = null
    const response = await ArtigoService.getByArtigoId(id)
    item.value = response.data
    criadoPor.value = response.data.criadoPor || null
    if (criadoPor.value?.medicoId) {
      await buscarMedicoPorId()
    }
  } catch (err) {
    error.value = 'Erro ao carregar artigo'
    console.error(err)
  } finally {
    loading.value = false
  }
}

const buscarMedicoPorId = async () => {
  const medicoId = criadoPor.value?.medicoId
  try {
    const res = await medicoService.getMeditoById(medicoId)
    medico.value = res.data
  } catch (err) {
    console.error('Erro ao buscar médico:', err)
  }
}

const whatsappUrl = computed(() => {
  if (!medico.value?.telefone) return '#'
  const message = encodeURIComponent(t('artigos.detalhe.author.whatsappMessage'))
  return `https://wa.me/${medico.value.telefone}?text=${message}`
})

const refreshPage = async () => {
  if (route.params.id) {
    await loadArtigo(route.params.id)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}

watch(
  () => route.params.id,
  (newId) => {
    if (newId) loadArtigo(newId)
  },
  { immediate: true }
)

// ── Tilt 3D na logo do CTA ─────────────────────────
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

// ── Animações de montagem (hero) e scroll (reveal) ──
let adGsapCtx = null
let adHeroDone = false
let adGsapAlive = true
let adStPostNavTimer = 0

function killAdCtx() {
  adGsapCtx?.revert()
  adGsapCtx = null
}

function runAdGsap(attempt = 0) {
  if (!adGsapAlive) return
  nextTick(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!adGsapAlive) return
        const root = adPageRef.value
        const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

        if (!root && attempt < 10) {
          window.setTimeout(() => runAdGsap(attempt + 1), 40)
          return
        }
        if (!root) {
          ScrollTrigger.refresh()
          return
        }

        if (reduceMotion) {
          killAdCtx()
          gsap.set(root.querySelectorAll('.ad-hero-item, .ad-reveal'), {
            opacity: 1,
            y: 0,
            clearProps: 'opacity,transform',
          })
          ScrollTrigger.refresh()
          return
        }

        killAdCtx()
        const ease = 'power3.out'

        adGsapCtx = gsap.context(() => {
          const heroItems = root.querySelectorAll('.ad-hero-item')
          if (heroItems.length && !adHeroDone) {
            gsap.from(heroItems, {
              opacity: 0,
              y: 26,
              duration: 0.78,
              stagger: 0.1,
              ease,
            })
            adHeroDone = true
          }

          const heroBg = root.querySelector('.art-det-hero__bg')
          const heroShell = root.querySelector('.art-det-hero-shell')
          if (heroBg && heroShell) {
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

          root.querySelectorAll('.ad-reveal').forEach((el) => {
            gsap.from(el, {
              opacity: 0,
              y: 32,
              duration: 0.72,
              ease,
              scrollTrigger: { trigger: el, start: 'top 88%', once: true },
            })
          })
        }, root)

        ScrollTrigger.refresh()
        document.fonts?.ready?.then(() => {
          if (adGsapAlive) ScrollTrigger.refresh()
        })
      })
    })
  })
}

watch(currentLocale, () => {
  nextTick(() => ScrollTrigger.refresh())
})

watch(loading, (isLoading) => {
  if (isLoading) {
    adHeroDone = false
    return
  }
  adHeroDone = false
  nextTick(() => {
    requestAnimationFrame(() => {
      if (adGsapAlive) runAdGsap(0)
    })
  })
})

watch(
  () => route.params.id,
  () => {
    adHeroDone = false
  }
)

watch(
  () => route.name,
  (name) => {
    if (name !== 'ArtigoDetalhe') return
    nextTick(() => {
      requestAnimationFrame(() => ScrollTrigger.refresh())
      if (adStPostNavTimer) window.clearTimeout(adStPostNavTimer)
      adStPostNavTimer = window.setTimeout(() => {
        adStPostNavTimer = 0
        if (adGsapAlive) ScrollTrigger.refresh()
      }, 520)
    })
  },
  { flush: 'post' }
)

onMounted(() => {
  adGsapAlive = true
  nextTick(() => {
    setupCtaLogoTilt()
    // Se a página já não estiver carregando (ex.: cache), dispara as animações de imediato.
    // Caso contrário, o watcher de `loading` cuida disso quando o conteúdo real chegar.
    if (!loading.value) runAdGsap(0)
  })
  if (typeof window !== 'undefined') {
    adStPostNavTimer = window.setTimeout(() => {
      adStPostNavTimer = 0
      if (adGsapAlive) ScrollTrigger.refresh()
    }, 520)
  }
})

onUnmounted(() => {
  adGsapAlive = false
  ctaLogoCleanup?.()
  ctaLogoCleanup = null
  killAdCtx()
  if (adStPostNavTimer) {
    window.clearTimeout(adStPostNavTimer)
    adStPostNavTimer = 0
  }
})
</script>

<style scoped lang="postcss">
@reference '../style.css';

.art-det-page {
  --det-btn-radius: 8px;
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

.art-det-back {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  transition: color 0.22s ease, transform 0.22s ease;
}
.art-det-back:hover {
  color: #00c6fe;
}
.art-det-back__arrow {
  display: inline-block;
  transition: transform 0.22s ease;
}
.art-det-back:hover .art-det-back__arrow {
  transform: translateX(-3px);
}

.art-det-hero {
  background: #060606;
}
.art-det-hero__bg {
  will-change: transform;
  transform-origin: center center;
}
.art-det-hero__overlay {
  background:
    linear-gradient(to right, rgba(6, 6, 6, 0.92) 0%, rgba(6, 6, 6, 0.78) 45%, rgba(6, 6, 6, 0.45) 100%),
    linear-gradient(to top, rgba(6, 6, 6, 0.95) 0%, rgba(6, 6, 6, 0.4) 60%, transparent 100%),
    rgba(6, 6, 6, 0.3);
}
.art-det-hero__grid {
  background-image:
    linear-gradient(rgba(0, 198, 254, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 198, 254, 0.04) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.12) 58%, transparent 100%);
}
.art-det-hero__dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-left: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #88ce0d, #00c6fe);
  vertical-align: super;
}
.art-det-hero__sub {
  font-family: 'DM Sans', sans-serif;
}

.art-det-meta__dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.45);
}
.art-det-meta__dot--cyan {
  background: #00c6fe;
  box-shadow: 0 0 0 3px rgba(0, 198, 254, 0.18);
}

.art-det-skeleton {
  position: relative;
  overflow: hidden;
  animation: art-det-pulse 1.4s ease-in-out infinite;
}
@keyframes art-det-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

.art-prose {
  display: flex;
  flex-direction: column;
  gap: 36px;
}
.art-prose__block {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.art-prose__kicker {
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #00c6fe;
}
.art-prose__lead {
  margin: 0;
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(17px, 2.2vw, 21px);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.88);
  white-space: pre-line;
}
.art-prose__body {
  margin: 0;
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.72);
  white-space: pre-line;
}
@media (min-width: 768px) {
  .art-prose__body {
    font-size: 17px;
  }
}
.art-prose__divider {
  height: 1px;
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 30%,
    rgba(0, 198, 254, 0.3) 50%,
    rgba(255, 255, 255, 0.1) 70%,
    transparent 100%
  );
}

.art-quote {
  position: relative;
  margin: 16px 0 0;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(168deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%);
  padding: 32px 28px 32px;
  box-shadow:
    0 28px 72px -36px rgba(0, 0, 0, 0.85),
    0 0 0 1px rgba(0, 198, 254, 0.08) inset;
  backdrop-filter: blur(12px);
  overflow: hidden;
}
@media (min-width: 768px) {
  .art-quote {
    padding: 40px 44px 40px 56px;
  }
}
.art-quote::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: 4px;
  background: linear-gradient(to bottom, #88ce0d 0%, #00c6fe 100%);
}
.art-quote__kicker {
  margin: 0 0 12px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #88ce0d;
}
.art-quote__mark {
  position: absolute;
  top: 8px;
  right: 22px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 110px;
  font-weight: 700;
  line-height: 1;
  color: rgba(0, 198, 254, 0.18);
  pointer-events: none;
  user-select: none;
}
.art-quote__text {
  margin: 0;
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(18px, 2.6vw, 24px);
  line-height: 1.5;
  font-weight: 500;
  color: #fff;
  font-style: italic;
}
.art-quote__caption {
  margin: 16px 0 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}

.art-det-banner img {
  display: block;
}

.art-author-eyebrow {
  margin: 0;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}

.art-author-card {
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%);
  padding: 24px;
  box-shadow: 0 28px 72px -40px rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
}
@media (min-width: 768px) {
  .art-author-card {
    padding: 28px 32px;
  }
}

.art-author-avatar {
  height: 96px;
  width: 96px;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid rgba(0, 198, 254, 0.35);
  box-shadow:
    0 16px 36px -18px rgba(0, 198, 254, 0.35),
    inset 0 0 0 4px rgba(6, 6, 6, 0.85);
}
@media (min-width: 768px) {
  .art-author-avatar {
    height: 112px;
    width: 112px;
  }
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: var(--det-btn-radius);
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

.art-related-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #00c6fe;
}

.art-det-cta {
  background: #060606;
}
.art-det-cta__grid {
  opacity: 0.5;
  background-image:
    linear-gradient(rgba(0, 198, 254, 0.09) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 198, 254, 0.07) 1px, transparent 1px);
  background-size: 52px 52px;
  mask-image: radial-gradient(
    ellipse 85% 70% at 50% 40%,
    rgba(0, 0, 0, 0.55) 0%,
    rgba(0, 0, 0, 0.2) 55%,
    transparent 100%
  );
}
.art-det-cta__veil {
  background:
    radial-gradient(ellipse 120% 80% at 50% 100%, rgba(0, 198, 254, 0.05) 0%, transparent 50%),
    radial-gradient(ellipse 90% 60% at 0% 0%, rgba(136, 206, 13, 0.04) 0%, transparent 45%);
}
.art-det-cta__kicker {
  margin: 0;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #88ce0d;
}
.art-det-cta__glass {
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(168deg, rgba(24, 24, 30, 0.96) 0%, rgba(10, 10, 12, 0.96) 100%);
  padding: 28px 22px 32px;
  box-shadow:
    0 28px 72px -36px rgba(0, 0, 0, 0.92),
    0 0 0 1px rgba(0, 198, 254, 0.1) inset,
    0 1px 0 rgba(255, 255, 255, 0.06) inset;
  backdrop-filter: blur(14px);
}
@media (min-width: 768px) {
  .art-det-cta__glass {
    padding: 36px 40px 40px;
  }
}
.art-det-cta__logo-wrap {
  min-height: 200px;
  perspective: 800px;
}
.art-det-cta__logo {
  filter: drop-shadow(0 24px 48px rgba(0, 0, 0, 0.7));
  transition: filter 0.4s ease;
  will-change: transform;
  cursor: pointer;
}
.art-det-cta__logo-wrap:hover .art-det-cta__logo {
  filter: drop-shadow(0 28px 60px rgba(0, 198, 254, 0.28))
          drop-shadow(0 12px 28px rgba(136, 206, 13, 0.18));
}
.art-det-cta__logo-glow {
  background: radial-gradient(
    closest-side,
    rgba(0, 198, 254, 0.22) 0%,
    rgba(136, 206, 13, 0.12) 45%,
    transparent 75%
  );
  filter: blur(28px);
}

@media (prefers-reduced-motion: reduce) {
  .art-det-skeleton {
    animation: none;
  }
  .art-det-back:hover .art-det-back__arrow {
    transform: none;
  }
  .btn-lime:hover {
    transform: none;
  }
}
</style>
