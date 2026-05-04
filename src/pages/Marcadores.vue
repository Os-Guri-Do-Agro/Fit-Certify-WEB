<template>
  <!-- ─── HERO ─── -->
  <section class="relative flex min-h-[66vh] items-end overflow-hidden pb-16 pt-28">
    <div class="absolute inset-0">
      <img
        src="../assets/marcad-imgs/banner.jpg"
        alt=""
        aria-hidden="true"
        class="h-full w-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-[#060606]/50 via-[#060606]/55 to-[#060606]" />
      <div class="absolute inset-0 bg-gradient-to-r from-[#060606]/60 via-transparent to-transparent" />
    </div>

    <div class="relative z-10 mx-auto w-full max-w-[1200px] px-4 md:px-8 xl:px-12">
      <p class="mb-5 inline-flex items-center gap-2.5 font-head text-[11px] font-bold uppercase tracking-[0.16em] text-[#88CE0D]">
        <span class="inline-block h-px w-5 bg-[#88CE0D]" aria-hidden="true" />
        FitCertify365
      </p>
      <h1 class="font-head text-[clamp(2rem,6vw,4.125rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white">
        {{ t('marcadores.title') }}
      </h1>
      <p class="mt-5 max-w-[520px] text-[0.9375rem] leading-[1.75] text-white/55 md:text-[1rem]">
        {{ t('marcadores.subtitle') }}
      </p>
      <div class="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="https://admin.fitcert365.com/register"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-lg bg-[#88CE0D] px-6 py-3 font-head text-[12px] font-bold uppercase tracking-[0.06em] text-[#060606] no-underline transition hover:bg-[#9dea0f] hover:shadow-[0_8px_28px_-8px_rgba(136,206,13,0.5)]"
        >
          {{ t('marcadores.section5.buttonDesktop') }}
        </a>
        <router-link
          to="/quemsomos"
          class="inline-flex items-center gap-1.5 font-head text-[12px] font-bold uppercase tracking-[0.06em] text-white/50 no-underline transition hover:text-white"
        >
          {{ t('marcadores.section2.button') }}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </router-link>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/25">
      <span class="font-head text-[10px] uppercase tracking-[0.2em]">scroll</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
    </div>
  </section>

  <!-- ─── FEATURES ─── -->
  <section class="bg-[#0a0a0a] px-4 py-16 md:px-8 md:py-24">
    <div class="mx-auto max-w-[1200px]">

      <!-- Header com o texto intro integrado -->
      <div class="mb-14 grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
        <div>
          <p class="mb-3 font-head text-[11px] font-bold uppercase tracking-[0.16em] text-[#88CE0D]">
            {{ t('marcadores.section1.subtitle') }}
          </p>
          <h2 class="font-head text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold leading-tight tracking-[-0.02em] text-white">
            {{ t('marcadores.section1.title') }}
          </h2>
        </div>
        <p class="text-[0.9375rem] leading-[1.8] text-white/50 md:pb-1">
          {{ t('marcadores.text') }}
        </p>
      </div>

      <!-- Desktop grid -->
      <div class="hidden grid-cols-2 gap-3 md:grid lg:grid-cols-3">
        <div
          v-for="(card, i) in cards"
          :key="i"
          class="group flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-[#0e0e0e] p-6 transition-all duration-300 hover:border-white/[0.13]"
        >
          <div class="flex items-center justify-between">
            <span class="font-head text-[11px] font-bold tracking-[0.12em] text-[#88CE0D]/55">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <span class="h-px w-8 bg-gradient-to-r from-[#88CE0D]/20 to-[#00C6FE]/20" aria-hidden="true" />
          </div>
          <h3 class="font-head text-[0.9375rem] font-bold leading-snug text-white">
            {{ t(card.titleKey) }}
          </h3>
          <p class="mt-auto text-[0.8125rem] leading-relaxed text-white/45">
            {{ t(card.textKey) }}
          </p>
        </div>
      </div>

      <!-- Mobile carousel -->
      <div class="md:hidden">
        <Carousel />
      </div>
    </div>
  </section>

  <!-- ─── COMO FUNCIONA (steps) ─── -->
  <section class="bg-[#060606]">
    <div class="mx-auto max-w-[1200px] px-4 py-16 md:px-8 md:py-20">
      <p class="mb-2 font-head text-[11px] font-bold uppercase tracking-[0.16em] text-[#00C6FE]">
        Como funciona
      </p>
      <h2 class="font-head text-[clamp(1.375rem,3vw,2rem)] font-bold tracking-[-0.02em] text-white">
        Do check-up ao evento
      </h2>
    </div>

    <!-- Step 01 -->
    <div class="flex flex-col md:flex-row-reverse">
      <div class="relative md:w-[55%]">
        <img
          src="../assets/marcad-imgs/image-01.jpg"
          alt=""
          class="h-[280px] w-full object-cover object-center md:h-[480px]"
        />
        <span class="absolute bottom-5 left-5 font-head text-[5rem] font-bold leading-none text-white/[0.07] md:text-[7rem]" aria-hidden="true">01</span>
      </div>
      <div class="flex flex-col justify-center gap-5 px-6 py-12 md:w-[45%] md:px-10 lg:px-14">
        <p class="font-head text-[11px] font-bold uppercase tracking-[0.14em] text-[#00C6FE]">
          Saúde Esportiva
        </p>
        <h3 class="font-head text-[clamp(1.25rem,2.5vw,1.875rem)] font-bold leading-tight tracking-[-0.02em] text-white">
          {{ t('marcadores.section2.title') }}
        </h3>
        <p class="text-[0.9375rem] leading-[1.8] text-white/55">
          {{ t('marcadores.section2.text') }}
        </p>
        <router-link
          to="/quemsomos"
          class="inline-flex w-fit items-center gap-2 font-head text-[12px] font-bold uppercase tracking-[0.06em] text-[#00C6FE] no-underline transition hover:text-white"
        >
          {{ t('marcadores.section2.button') }}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </router-link>
      </div>
    </div>

    <div class="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />

    <!-- Step 02 -->
    <div class="flex flex-col md:flex-row">
      <div class="relative md:w-[55%]">
        <img
          src="../assets/marcad-imgs/image-02.jpg"
          alt=""
          class="h-[280px] w-full object-cover object-center md:h-[480px]"
        />
        <span class="absolute bottom-5 right-5 font-head text-[5rem] font-bold leading-none text-white/[0.07] md:text-[7rem]" aria-hidden="true">02</span>
      </div>
      <div class="flex flex-col justify-center gap-5 px-6 py-12 md:w-[45%] md:px-10 lg:px-14">
        <p class="font-head text-[11px] font-bold uppercase tracking-[0.14em] text-[#88CE0D]">
          Performance
        </p>
        <h3 class="font-head text-[clamp(1.25rem,2.5vw,1.875rem)] font-bold leading-tight tracking-[-0.02em] text-white">
          {{ t('marcadores.section3.title') }}
        </h3>
        <p
          class="text-[0.9375rem] leading-[1.8] text-white/55"
          v-html="t('marcadores.section3.text')"
        />
      </div>
    </div>

    <div class="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" aria-hidden="true" />

    <!-- Step 03 -->
    <div class="flex flex-col md:flex-row-reverse">
      <div class="relative md:w-[55%]">
        <img
          src="../assets/marcad-imgs/image-03.jpg"
          alt=""
          class="h-[280px] w-full object-cover object-center md:h-[480px]"
        />
        <span class="absolute bottom-5 left-5 font-head text-[5rem] font-bold leading-none text-white/[0.07] md:text-[7rem]" aria-hidden="true">03</span>
      </div>
      <div class="flex flex-col justify-center gap-5 px-6 py-12 md:w-[45%] md:px-10 lg:px-14">
        <p class="font-head text-[11px] font-bold uppercase tracking-[0.14em] text-[#00C6FE]">
          Integração
        </p>
        <h3
          class="font-head text-[clamp(1.25rem,2.5vw,1.875rem)] font-bold leading-tight tracking-[-0.02em] text-white"
          v-html="t('marcadores.section4.title')"
        />
        <p class="text-[0.9375rem] leading-[1.8] text-white/55">
          {{ t('marcadores.section4.text') }}
        </p>
      </div>
    </div>
  </section>

  <!-- ─── CTA ─── -->
  <section class="relative overflow-hidden bg-[#0a0a0a] px-4 py-20 md:px-8 md:py-28">
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#88CE0D]/20 to-transparent" aria-hidden="true" />
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#88CE0D]/[0.035] blur-[90px]"
      aria-hidden="true"
    />
    <div class="relative mx-auto max-w-[640px] text-center">
      <h2
        class="font-head text-[clamp(1.625rem,4.5vw,2.75rem)] font-bold leading-tight tracking-[-0.02em] text-white"
        v-html="t('marcadores.section5.title')"
      />
      <p class="mx-auto mt-5 max-w-[440px] text-[0.9rem] leading-relaxed text-white/45">
        {{ t('marcadores.text') }}
      </p>
      <a
        href="https://admin.fitcert365.com/register"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#88CE0D] px-8 py-3.5 font-head text-[13px] font-bold uppercase tracking-[0.06em] text-[#060606] no-underline transition hover:bg-[#9dea0f] hover:shadow-[0_8px_28px_-8px_rgba(136,206,13,0.55)]"
      >
        {{ t('marcadores.section5.buttonDesktop') }}
      </a>
    </div>
  </section>
</template>

<script setup>
import Carousel from '../components/Marcad-components/Marcad-Carousel.vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const cards = [
  { titleKey: 'marcadores.section1.card1.title', textKey: 'marcadores.section1.card1.text' },
  { titleKey: 'marcadores.section1.card2.title', textKey: 'marcadores.section1.card2.text' },
  { titleKey: 'marcadores.section1.card3.title', textKey: 'marcadores.section1.card3.text' },
  { titleKey: 'marcadores.section1.card4.title', textKey: 'marcadores.section1.card4.text' },
  { titleKey: 'marcadores.section1.card5.title', textKey: 'marcadores.section1.card5.text' },
  { titleKey: 'marcadores.section1.card6.title', textKey: 'marcadores.section1.card6.text' },
]
</script>
