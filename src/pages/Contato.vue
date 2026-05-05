<template>
  <div ref="ctPageRef" class="ct-page bg-[#060606] text-white font-body">
    <section
      class="ct-hero ct-hero-shell relative isolate flex min-h-[min(60vh,520px)] overflow-hidden pb-14 pt-24 md:min-h-[min(70vh,580px)] md:pb-16 md:pt-20"
    >
      <div class="ct-hero__media pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src="/src/assets/contatos-imgs/image-01.jpg"
          alt=""
          class="ct-hero__bg pointer-events-none absolute inset-0 h-full w-full max-w-none object-cover object-center"
        />
      </div>
      <div class="ct-hero__overlay pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />
      <div class="ct-hero__grid pointer-events-none absolute inset-0 z-[2]" aria-hidden="true" />

      <div class="relative z-[3] mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-4 md:px-12">
        <div class="ct-hero__copy w-full max-w-[min(640px,100%)]">
          <p class="ct-hero-item eyebrow">{{ t('contact.heroEyebrow') }}</p>
          <h1
            class="ct-hero-item font-head text-[clamp(30px,6vw,60px)] font-bold leading-[0.98] tracking-[-0.04em]"
          >
            {{ t('contact.title') }}
            <span class="ct-hero__dot" aria-hidden="true" />
          </h1>
          <p
            class="ct-hero-item mt-6 max-w-[520px] border-l-2 border-[#00C6FE] pl-5 text-[14px] leading-[1.7] text-white/65 sm:text-[15px]"
          >
            {{ t('contact.heroLead') }}
          </p>

          <ul class="ct-hero-item mt-9 flex flex-wrap items-center gap-x-3 gap-y-2.5">
            <li>
              <a
                href="mailto:atendimento@fitcertify365.com"
                class="ct-hero-pill"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                atendimento@fitcertify365.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5541991858019"
                target="_blank"
                rel="noopener noreferrer"
                class="ct-hero-pill ct-hero-pill--lime"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path
                    d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592"
                  />
                </svg>
                +55 (41) 99185-8019
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="pointer-events-none absolute bottom-0 left-0 right-0 z-[4] h-px bg-gradient-to-r from-transparent via-[#00C6FE]/45 to-transparent"
        aria-hidden="true"
      />
    </section>

    <section class="border-t border-white/[0.06] bg-[#080808] py-14 md:py-20">
      <div class="mx-auto w-full max-w-[1200px] px-4 md:px-12">
        <div class="grid gap-8 lg:grid-cols-[1.2fr_0.85fr] lg:gap-10">
          <div ref="ctFormPanelRef" class="ct-reveal ct-glass ct-form-panel min-w-0">
            <p class="ct-section-eyebrow font-head">{{ t('contact.formEyebrow') }}</p>
            <h2
              class="mt-3 font-head text-[clamp(22px,3.4vw,34px)] font-bold leading-[1.1] tracking-[-0.03em] text-white"
            >
              {{ t('contact.formTitle') }}
            </h2>
            <p class="mt-4 max-w-[460px] text-[14px] leading-[1.7] text-white/55">
              {{ t('contact.formLead') }}
            </p>

            <form class="mt-8 grid gap-5" @submit.prevent="enviarEmail">
              <div class="ct-field">
                <label class="ct-label" for="ct-nome">{{ t('contact.name') }}</label>
                <input
                  id="ct-nome"
                  v-model="form.nome"
                  type="text"
                  name="nome"
                  required
                  :placeholder="t('contact.namePlaceholder')"
                  class="ct-input"
                />
              </div>

              <div class="grid gap-5 sm:grid-cols-2">
                <div class="ct-field">
                  <label class="ct-label" for="ct-email">{{ t('contact.email') }}</label>
                  <input
                    id="ct-email"
                    v-model="form.email"
                    type="email"
                    name="email"
                    required
                    :placeholder="t('contact.emailPlaceholder')"
                    class="ct-input"
                  />
                </div>
                <div class="ct-field">
                  <label class="ct-label" for="ct-telefone">{{ t('contact.phone') }}</label>
                  <input
                    id="ct-telefone"
                    v-model="form.telefone"
                    type="tel"
                    name="telefone"
                    v-maska="'(##) #####-####'"
                    maxlength="15"
                    :placeholder="t('contact.phonePlaceholder')"
                    required
                    class="ct-input"
                  />
                </div>
              </div>

              <div class="ct-field">
                <label class="ct-label" for="ct-mensagem">{{ t('contact.message') }}</label>
                <textarea
                  id="ct-mensagem"
                  ref="ctMensagemRef"
                  v-model="form.mensagem"
                  name="mensagem"
                  rows="5"
                  :placeholder="t('contact.messagePlaceholder')"
                  class="ct-input ct-textarea"
                />
              </div>

              <div class="mt-2 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end">
                <button
                  type="submit"
                  :disabled="loading || !isFormValid"
                  class="btn btn-lime sm:w-auto"
                >
                  <svg
                    v-if="loading"
                    class="mr-2 animate-spin"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    aria-hidden="true"
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" stroke-linecap="round" />
                  </svg>
                  {{ loading ? t('contact.sending') : t('contact.send') }}
                </button>
              </div>
            </form>
          </div>

          <aside class="ct-channels flex flex-col gap-4">
            <div class="ct-reveal">
              <p class="ct-section-eyebrow font-head">{{ t('contact.channels.eyebrow') }}</p>
              <h3
                class="mt-3 font-head text-[clamp(20px,2.8vw,28px)] font-bold leading-[1.15] tracking-[-0.03em] text-white"
              >
                {{ t('contact.channels.title') }}
              </h3>
              <p class="mt-3 max-w-[360px] text-[13.5px] leading-[1.65] text-white/50">
                {{ t('contact.channels.lead') }}
              </p>
            </div>

            <a
              href="mailto:atendimento@fitcertify365.com"
              class="ct-channel-card ct-channel ct-channel--cyan"
            >
              <span class="ct-channel__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <span class="ct-channel__body">
                <span class="ct-channel__label font-head">{{ t('contact.channels.email.label') }}</span>
                <span class="ct-channel__value">{{ t('contact.channels.email.value') }}</span>
              </span>
              <span class="ct-channel__arrow" aria-hidden="true">→</span>
            </a>

            <a
              href="https://wa.me/5541991858019"
              target="_blank"
              rel="noopener noreferrer"
              class="ct-channel-card ct-channel ct-channel--lime"
            >
              <span class="ct-channel__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 16 16" fill="currentColor">
                  <path
                    d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
                  />
                </svg>
              </span>
              <span class="ct-channel__body">
                <span class="ct-channel__label font-head">{{ t('contact.channels.whatsapp.label') }}</span>
                <span class="ct-channel__value">{{ t('contact.channels.whatsapp.value') }}</span>
              </span>
              <span class="ct-channel__arrow" aria-hidden="true">→</span>
            </a>
          </aside>
        </div>
      </div>
    </section>

    <section class="ct-cta relative isolate overflow-hidden border-t border-white/[0.08] bg-[#060606] py-16 md:py-24">
      <div class="ct-cta__grid pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <div class="ct-cta__veil pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />

      <div
        class="relative z-[2] mx-auto flex w-full max-w-[1200px] flex-col items-stretch gap-10 px-4 md:px-12 lg:flex-row lg:items-center lg:justify-between"
      >
        <div class="ct-reveal ct-cta__glass min-w-0 flex-1 lg:max-w-[640px]">
          <p class="ct-cta__kicker font-head">{{ t('contact.lastSection.eyebrow') }}</p>
          <h2
            class="mt-4 font-head text-[clamp(22px,4vw,38px)] font-bold leading-[1.08] tracking-[-0.03em] text-white"
          >
            {{ t('contact.lastSection.title') }}
          </h2>
          <p
            class="mt-6 max-w-[520px] border-l-2 border-[#88CE0D] pl-5 text-[14px] leading-[1.75] text-white/80 sm:text-[15px]"
          >
            {{ t('contact.lastSection.text') }}
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <button type="button" class="btn btn-lime" @click="goToForm">
              {{ t('contact.lastSection.button') }}
            </button>
          </div>
        </div>

        <div ref="ctaLogoWrapRef" class="ct-reveal ct-cta__logo-wrap relative flex shrink-0 items-center justify-center lg:w-[320px]">
          <span class="ct-cta__logo-glow pointer-events-none absolute inset-0 -z-[1]" aria-hidden="true" />
          <img
            ref="ctaLogoRef"
            src="/logoFit-column.png"
            alt="FitCertify365"
            class="ct-cta__logo h-auto w-[160px] max-w-full object-contain md:w-[200px] lg:w-[240px]"
          />
        </div>
      </div>
    </section>

    <Toast position="top-right" />
  </div>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'
import contatoService from '../services/contato/contato-service'
import { useToast } from 'primevue/usetoast'
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { t, currentLocale } = useI18n()
const route = useRoute()
const toast = useToast()
const loading = ref(false)

const ctPageRef = ref(null)
const ctFormPanelRef = ref(null)
const ctMensagemRef = ref(null)

const form = ref({
  nome: '',
  email: '',
  telefone: '',
  mensagem: '',
})

const goToForm = () => {
  if (typeof window === 'undefined') return
  const target = ctFormPanelRef.value
  if (target?.scrollIntoView) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  if (!form.value.mensagem.trim()) {
    form.value.mensagem = t('contact.partnershipPrefill')
  }
  setTimeout(() => {
    ctMensagemRef.value?.focus?.()
  }, 450)
}

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const isFormValid = computed(() => {
  return (
    form.value.nome.trim() &&
    form.value.email.trim() &&
    form.value.telefone.trim() &&
    form.value.mensagem.trim()
  )
})

const enviarEmail = async () => {
  if (
    !form.value.nome.trim() ||
    !form.value.email.trim() ||
    !form.value.telefone.trim() ||
    !form.value.mensagem.trim()
  ) {
    toast.add({
      severity: 'warn',
      summary: t('contact.toast.warnTitle'),
      detail: t('contact.toast.warnRequired'),
      life: 3000,
    })
    return
  }

  if (!isValidEmail(form.value.email)) {
    toast.add({
      severity: 'warn',
      summary: t('contact.toast.warnTitle'),
      detail: t('contact.toast.warnEmail'),
      life: 3000,
    })
    return
  }

  if (form.value.telefone.length < 15) {
    toast.add({
      severity: 'warn',
      summary: t('contact.toast.warnTitle'),
      detail: t('contact.toast.warnPhone'),
      life: 3000,
    })
    return
  }

  loading.value = true
  try {
    const data = {
      nome: form.value.nome,
      email: form.value.email,
      telefone: form.value.telefone,
      mensagem: form.value.mensagem,
    }
    await contatoService.enviarEmail(data)

    toast.add({
      severity: 'success',
      summary: t('contact.toast.successTitle'),
      detail: t('contact.toast.successDetail'),
      life: 3000,
    })

    form.value = { nome: '', email: '', telefone: '', mensagem: '' }
  } catch (error) {
    console.log('Erro ao entrar em contato. ', error)
    toast.add({
      severity: 'error',
      summary: t('contact.toast.errorTitle'),
      detail: t('contact.toast.errorDetail'),
      life: 3000,
    })
  } finally {
    loading.value = false
  }
}

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
let ctGsapCtx = null
let ctGsapAlive = true
let ctStPostNavTimer = 0

function killCtCtx() {
  ctGsapCtx?.revert()
  ctGsapCtx = null
}

function runCtGsap(attempt = 0) {
  if (!ctGsapAlive) return
  nextTick(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!ctGsapAlive) return
        const root = ctPageRef.value
        const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

        if (!root && attempt < 10) {
          window.setTimeout(() => runCtGsap(attempt + 1), 40)
          return
        }
        if (!root) {
          ScrollTrigger.refresh()
          return
        }

        if (reduceMotion) {
          killCtCtx()
          gsap.set(root.querySelectorAll('.ct-hero-item, .ct-reveal, .ct-channel-card'), {
            opacity: 1,
            y: 0,
            clearProps: 'opacity,transform',
          })
          ScrollTrigger.refresh()
          return
        }

        killCtCtx()
        const ease = 'power3.out'

        ctGsapCtx = gsap.context(() => {
          const heroItems = root.querySelectorAll('.ct-hero-item')
          if (heroItems.length) {
            gsap.from(heroItems, {
              opacity: 0,
              y: 26,
              duration: 0.78,
              stagger: 0.11,
              ease,
            })
          }

          const heroBg = root.querySelector('.ct-hero__bg')
          const heroShell = root.querySelector('.ct-hero-shell')
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

          root.querySelectorAll('.ct-reveal').forEach((el) => {
            gsap.from(el, {
              opacity: 0,
              y: 32,
              duration: 0.75,
              ease,
              scrollTrigger: { trigger: el, start: 'top 88%', once: true },
            })
          })

          const channels = root.querySelectorAll('.ct-channel-card')
          if (channels.length) {
            gsap.from(channels, {
              opacity: 0,
              y: 22,
              duration: 0.62,
              stagger: 0.12,
              ease,
              clearProps: 'opacity,transform',
              scrollTrigger: {
                trigger: channels[0],
                start: 'top 90%',
                once: true,
              },
            })
          }
        }, root)

        ScrollTrigger.refresh()
        document.fonts?.ready?.then(() => {
          if (ctGsapAlive) ScrollTrigger.refresh()
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
    if (name !== 'Contato') return
    nextTick(() => {
      requestAnimationFrame(() => ScrollTrigger.refresh())
      if (ctStPostNavTimer) window.clearTimeout(ctStPostNavTimer)
      ctStPostNavTimer = window.setTimeout(() => {
        ctStPostNavTimer = 0
        if (ctGsapAlive) ScrollTrigger.refresh()
      }, 520)
    })
  },
  { flush: 'post' }
)

onMounted(() => {
  ctGsapAlive = true
  nextTick(() => {
    setupCtaLogoTilt()
    runCtGsap(0)
  })
  if (typeof window !== 'undefined') {
    ctStPostNavTimer = window.setTimeout(() => {
      ctStPostNavTimer = 0
      if (ctGsapAlive) ScrollTrigger.refresh()
    }, 520)
  }
})

onUnmounted(() => {
  ctGsapAlive = false
  ctaLogoCleanup?.()
  ctaLogoCleanup = null
  killCtCtx()
  if (ctStPostNavTimer) {
    window.clearTimeout(ctStPostNavTimer)
    ctStPostNavTimer = 0
  }
})
</script>

<style scoped lang="postcss">
@reference '../style.css';

.ct-page {
  --ct-btn-radius: 8px;
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

.ct-section-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #00c6fe;
}

.ct-hero {
  background: #060606;
}
.ct-hero__bg {
  will-change: transform;
  transform-origin: center center;
}
.ct-hero__overlay {
  background:
    linear-gradient(to right, rgba(6, 6, 6, 0.94) 0%, rgba(6, 6, 6, 0.8) 42%, rgba(6, 6, 6, 0.5) 100%),
    linear-gradient(to top, rgba(6, 6, 6, 0.9) 0%, transparent 55%),
    rgba(6, 6, 6, 0.32);
}
.ct-hero__grid {
  background-image:
    linear-gradient(rgba(0, 198, 254, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 198, 254, 0.04) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.12) 58%, transparent 100%);
}
.ct-hero__dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-left: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #88ce0d, #00c6fe);
  vertical-align: super;
}

.ct-hero-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  border: 1px solid rgba(0, 198, 254, 0.4);
  background: rgba(0, 198, 254, 0.08);
  padding: 7px 14px 7px 12px;
  font-family: 'DM Sans', sans-serif;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: #d6f4ff;
  text-decoration: none;
  transition:
    border-color 0.22s ease,
    background-color 0.22s ease,
    color 0.22s ease,
    transform 0.22s ease;
}
.ct-hero-pill:hover {
  border-color: rgba(0, 198, 254, 0.65);
  background: rgba(0, 198, 254, 0.16);
  color: #fff;
  transform: translateY(-1px);
}
.ct-hero-pill--lime {
  border-color: rgba(136, 206, 13, 0.42);
  background: rgba(136, 206, 13, 0.08);
  color: #e6f7c7;
}
.ct-hero-pill--lime:hover {
  border-color: rgba(136, 206, 13, 0.65);
  background: rgba(136, 206, 13, 0.16);
  color: #fff;
}

.ct-glass {
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(168deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%);
  padding: 28px 22px 30px;
  box-shadow:
    0 28px 72px -36px rgba(0, 0, 0, 0.85),
    0 0 0 1px rgba(0, 198, 254, 0.06) inset,
    0 1px 0 rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(14px);
}
@media (min-width: 768px) {
  .ct-glass {
    padding: 36px 36px 40px;
  }
}

.ct-form-panel {
  position: relative;
  overflow: hidden;
}

.ct-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.ct-label {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}

.ct-input {
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(6, 6, 6, 0.5);
  padding: 12px 14px;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.92);
  transition:
    border-color 0.22s ease,
    box-shadow 0.22s ease,
    background-color 0.22s ease;
}
.ct-input::placeholder {
  color: rgba(255, 255, 255, 0.32);
}
.ct-input:hover {
  border-color: rgba(0, 198, 254, 0.35);
}
.ct-input:focus {
  outline: none;
  border-color: rgba(0, 198, 254, 0.7);
  background: rgba(6, 6, 6, 0.7);
  box-shadow: 0 0 0 3px rgba(0, 198, 254, 0.18);
}
.ct-textarea {
  resize: vertical;
  min-height: 140px;
  line-height: 1.55;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: var(--ct-btn-radius);
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
    color 0.22s cubic-bezier(0.2, 0.8, 0.2, 1),
    opacity 0.22s ease;
}
.btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
.btn-lime {
  background: #88ce0d;
  color: #060606;
}
.btn-lime:not(:disabled):hover {
  transform: translateY(-1px);
  background: #9dea0f;
  box-shadow: 0 18px 40px -12px rgba(136, 206, 13, 0.55);
}

.ct-channels {
  min-width: 0;
}
.ct-channel {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 18px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%);
  padding: 18px 18px;
  text-decoration: none;
  color: inherit;
  backdrop-filter: blur(10px);
  transition:
    border-color 0.22s ease,
    background-color 0.22s ease,
    transform 0.22s ease,
    box-shadow 0.22s ease;
}
a.ct-channel:hover {
  border-color: rgba(0, 198, 254, 0.45);
  transform: translateY(-2px);
  box-shadow: 0 22px 52px -28px rgba(0, 198, 254, 0.28);
}
.ct-channel__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.85);
}
.ct-channel--cyan .ct-channel__icon {
  border-color: rgba(0, 198, 254, 0.45);
  background: rgba(0, 198, 254, 0.1);
  color: #00c6fe;
  box-shadow: inset 0 0 0 1px rgba(0, 198, 254, 0.18);
}
.ct-channel--lime .ct-channel__icon {
  border-color: rgba(136, 206, 13, 0.45);
  background: rgba(136, 206, 13, 0.1);
  color: #88ce0d;
  box-shadow: inset 0 0 0 1px rgba(136, 206, 13, 0.18);
}
.ct-channel--neutral {
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.015) 100%);
}
.ct-channel__body {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.ct-channel__label {
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}
.ct-channel__value {
  font-family: 'DM Sans', sans-serif;
  font-size: 14.5px;
  font-weight: 600;
  color: #fff;
  word-break: break-word;
}
.ct-channel__hint {
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
}
.ct-channel__arrow {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.4);
  transition:
    transform 0.22s ease,
    color 0.22s ease;
}
a.ct-channel:hover .ct-channel__arrow {
  color: #00c6fe;
  transform: translateX(3px);
}
a.ct-channel--lime:hover .ct-channel__arrow {
  color: #88ce0d;
}

.ct-cta {
  background: #060606;
}
.ct-cta__grid {
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
.ct-cta__veil {
  background:
    radial-gradient(ellipse 120% 80% at 50% 100%, rgba(0, 198, 254, 0.05) 0%, transparent 50%),
    radial-gradient(ellipse 90% 60% at 0% 0%, rgba(136, 206, 13, 0.04) 0%, transparent 45%);
}
.ct-cta__kicker {
  margin: 0;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #88ce0d;
}
.ct-cta__glass {
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
  .ct-cta__glass {
    padding: 36px 40px 40px;
  }
}
.ct-cta__logo-wrap {
  min-height: 200px;
  perspective: 800px;
}
.ct-cta__logo {
  filter: drop-shadow(0 24px 48px rgba(0, 0, 0, 0.7));
  transition: filter 0.4s ease;
  will-change: transform;
  cursor: pointer;
}
.ct-cta__logo-wrap:hover .ct-cta__logo {
  filter: drop-shadow(0 28px 60px rgba(0, 198, 254, 0.28))
          drop-shadow(0 12px 28px rgba(136, 206, 13, 0.18));
}
.ct-cta__logo-glow {
  background: radial-gradient(
    closest-side,
    rgba(0, 198, 254, 0.22) 0%,
    rgba(136, 206, 13, 0.12) 45%,
    transparent 75%
  );
  filter: blur(28px);
}

@media (prefers-reduced-motion: reduce) {
  .ct-hero-pill:hover,
  a.ct-channel:hover,
  .btn-lime:not(:disabled):hover {
    transform: none;
  }
  a.ct-channel:hover .ct-channel__arrow {
    transform: none;
  }
}
</style>
