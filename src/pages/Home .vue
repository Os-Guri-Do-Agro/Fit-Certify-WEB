<template>
  <div class="bg-[#060606] text-white font-body">

    <!-- ── HERO ───────────────────────────────────────── -->
    <section class="relative flex min-h-[92vh] items-center overflow-hidden pb-16 pt-22 md:min-h-[90vh] md:pt-14">
      <img
        src="/src/assets/home-imgs/banner-home.jpg"
        :alt="t('home.landing.hero.bannerAlt')"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 z-[1]"
        style="background: linear-gradient(to right,rgba(6,6,6,0.92) 45%,rgba(6,6,6,0.3) 100%),linear-gradient(to top,rgba(6,6,6,0.8) 0%,transparent 50%)">
      </div>
      <div class="hero-grid absolute inset-0 z-[2]"></div>

      <div class="relative z-[3] mx-auto w-full max-w-[1200px] px-4 md:px-12">
        <div class="flex items-center justify-between gap-10">
          <div class="hero-copy max-w-[760px]">
            <p class="hero-item eyebrow">{{ t('home.landing.hero.eyebrow') }}</p>
            <h1 class="hero-item mb-7 max-w-[697px] font-head text-[clamp(34px,4.76vw,60px)] font-bold leading-[0.98] tracking-[-0.03em] lg:text-[clamp(41px,5.1vw,70px)] 2xl:text-[clamp(49px,4.6vw,83px)]">
              {{ t('home.landing.hero.titleLine1') }}<br>{{ t('home.landing.hero.titleLine2') }}
              <em class="not-italic text-[#00C6FE]">{{ t('home.landing.hero.titleEm') }}</em>
            </h1>
            <p class="hero-item mb-11 text-[12px] leading-[1.65] max-w-[450px] text-white/60 lg:text-[14px] 2xl:text-[15px]">
              {{ t('home.landing.hero.lead') }}
            </p>
            <div class="hero-item flex flex-wrap gap-4">
              <a
                href="https://admin.fitcert365.com/register" target="_blank" rel="noopener noreferrer"
                class="btn btn-lime"
              >{{ t('home.landing.hero.ctaStart') }}</a>
              <router-link to="/quemsomos" class="btn btn-outline">{{ t('home.landing.hero.ctaLearnMore') }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── MARQUEE ─────────────────────────────────────── -->
    <div class="overflow-hidden bg-[#88CE0D] py-3">
      <div class="marquee-track flex w-max">
        <template v-for="x in 2" :key="x">
          <template v-for="item in marqueeItems" :key="`${x}-${item}`">
            <span class="whitespace-nowrap px-8 font-head text-[12px] font-bold uppercase tracking-[0.12em] text-[#060606]">{{ item }}</span>
            <span class="text-[#060606]/30">✦</span>
          </template>
        </template>
      </div>
    </div>

    <!-- ── FEATURES BAR ────────────────────────────────── -->
    <div class="relative overflow-hidden bg-[#00C6FE] py-10 md:py-12">
      <div
        class="pointer-events-none absolute inset-0 opacity-50"
        style="background: radial-gradient(ellipse 130% 90% at 50% -35%, #fff, transparent 58%)"
      />
      <div class="reveal-item relative mx-auto grid max-w-[1200px] gap-4 px-4 md:grid-cols-3 md:gap-5 md:px-12">
        <div
          v-for="f in featureItems" :key="f.titleKey"
          class="feature-bar-card group flex gap-5 rounded-2xl border border-white/90 bg-white/95 p-5 shadow-[0_16px_48px_-18px_rgba(6,6,6,0.22)] backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:shadow-[0_20px_56px_-16px_rgba(6,6,6,0.28)] md:flex-col md:p-6 lg:flex-row lg:items-start lg:gap-6"
        >
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-black/[0.06] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,1),0_4px_14px_-4px_rgba(6,6,6,0.12)] transition-transform duration-300 group-hover:scale-[1.03] md:h-16 md:w-16 md:rounded-2xl"
          >
            <svg
              class="h-7 w-7 stroke-[#00C6FE] transition-colors duration-200 group-hover:stroke-[#88CE0D] md:h-8 md:w-8"
              viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="f.icon"
            />
          </div>
          <div class="min-w-0 flex-1 pt-0.5 md:pt-0">
            <p
              class="font-head text-[11px] font-bold uppercase tracking-[0.14em] text-[#00C6FE]/85 transition-colors duration-200 group-hover:text-[#88CE0D] md:text-[12px]"
            >{{ f.kicker }}</p>
            <h3
              class="font-head mt-1 text-[15px] font-bold leading-tight tracking-[-0.02em] text-[#00C6FE] transition-colors duration-200 group-hover:text-[#88CE0D] md:text-[16px]"
            >
              {{ f.title }}
            </h3>
            <p class="mt-2 text-[13px] leading-[1.55] text-[#060606]/65 md:text-[14px] md:leading-[1.5]">
              {{ f.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- ── SAÚDE VALIDADA ──────────────────────────────── -->
    <div class="bg-[#0e0e0e] overflow-x-clip">
      <div class="reveal-item relative mx-auto flex max-w-[1200px] flex-col md:min-h-[480px] lg:min-h-[560px]">
        <div
          class="relative z-10 order-2 flex w-full min-w-0 flex-col justify-center px-6 py-16 md:max-w-none md:px-12 md:py-16 lg:max-w-[600px] lg:pr-16"
        >
          <p class="section-tag">{{ t('home.landing.health.tag') }}</p>
          <h2 class="font-head text-[clamp(32px,4vw,54px)] font-bold leading-[1.1] tracking-[-0.02em] mb-5 break-words">
            {{ t('home.landing.health.titleLine1') }}<br><span class="text-[#88CE0D]">{{ t('home.landing.health.titleHighlight') }}</span>
          </h2>
          <p class="text-base leading-[1.75] text-white/60 max-w-[480px] mb-6">
            {{ t('home.landing.health.desc') }}
          </p>
          <ul class="mb-8 flex flex-col gap-3 list-none p-0">
            <li v-for="(item, idx) in saudeChecks" :key="'hc-' + idx" class="flex items-start gap-3 text-[15px] text-white/75">
              <span class="check-dot mt-1.5 shrink-0"></span><span class="min-w-0 break-words">{{ item }}</span>
            </li>
          </ul>
          <router-link to="/certificados" class="btn-ghost w-fit">{{ t('home.landing.health.more') }}</router-link>
        </div>
        <div
          class="relative order-1 min-h-[320px] w-full lg:absolute lg:inset-y-0 lg:left-1/2 lg:top-0 lg:min-h-0 lg:w-[50vw]"
        >
          <img
            src="/src/assets/home-imgs/home-img-01.jpg"
            :alt="t('home.landing.health.imageAlt')"
            class="absolute inset-0 h-full w-full object-cover"
          />
          <div class="absolute inset-0" style="background: linear-gradient(to right,#0e0e0e 0%,transparent 30%)"></div>
        </div>
      </div>
    </div>

    <!-- ── EVENTOS PARCEIROS ───────────────────────────── -->
    <div class="bg-[#060606] overflow-x-clip">
      <div class="reveal-item relative mx-auto flex max-w-[1200px] flex-col md:min-h-[480px] lg:min-h-[520px] lg:flex-row lg:justify-end">
        <div
          class="relative order-1 min-h-[320px] w-full lg:absolute lg:inset-y-0 lg:left-auto lg:right-1/2 lg:top-0 lg:min-h-0 lg:w-[50vw]"
        >
          <img
            src="/src/assets/home-imgs/home-img-02.jpg"
            :alt="t('home.landing.events.imageAlt')"
            class="absolute inset-0 h-full w-full object-cover"
          />
          <div class="absolute inset-0" style="background: linear-gradient(to left,#060606 0%,transparent 30%)"></div>
        </div>
        <div
          class="relative z-10 order-2 flex w-full min-w-0 flex-col justify-center px-6 py-16 md:max-w-none md:px-12 md:py-16 lg:ml-auto lg:max-w-[min(600px,calc(50%-2rem))] lg:shrink-0 lg:px-16 lg:pl-20 lg:pr-12"
        >
          <p class="section-tag">{{ t('home.landing.events.tag') }}</p>
          <h2 class="font-head text-[clamp(32px,4vw,54px)] font-bold leading-[1.1] tracking-[-0.02em] mb-5 break-words">
            {{ t('home.landing.events.titleLine1') }}<br><span class="text-[#00C6FE]">{{ t('home.landing.events.titleHighlight') }}</span>
          </h2>
          <p class="text-base leading-[1.75] text-white/60 max-w-[480px] mb-6">
            {{ t('home.landing.events.desc') }}
          </p>
          <div class="mb-8 flex flex-col gap-3">
            <template v-if="isLoadingEventos">
              <div
                v-for="n in 3" :key="'ev-sk-' + n"
                class="flex animate-pulse items-center gap-4 rounded-lg border border-white/[0.08] bg-white/[0.04] px-5 py-4"
              >
                <div class="min-h-[44px] min-w-[44px] rounded bg-white/10"></div>
                <div class="min-w-0 flex-1 space-y-2">
                  <div class="h-4 w-3/4 max-w-[200px] rounded bg-white/10"></div>
                  <div class="h-3 w-1/2 max-w-[140px] rounded bg-white/10"></div>
                </div>
              </div>
            </template>
            <router-link
              v-else
              v-for="evento in eventosPreview" :key="evento.id"
              :to="{ name: 'EventoDetalhe', params: { id: evento.id } }"
              class="flex cursor-pointer items-center gap-4 rounded-lg border border-white/[0.08] bg-white/[0.04] px-5 py-4 no-underline transition-colors duration-200 hover:border-[#00C6FE]"
            >
              <div class="min-w-[44px] rounded bg-[#00C6FE] px-[10px] py-[6px] text-center font-head text-xs font-bold leading-[1.2] text-[#060606]">
                {{ formatEventDateParts(evento.data).day }}<br>{{ formatEventDateParts(evento.data).month }}
              </div>
              <div class="min-w-0">
                <div class="font-head text-sm font-semibold break-words text-white">{{ getLocalizedField(evento, 'titulo') }}</div>
                <div class="mt-[2px] text-xs break-words text-white/45">{{ evento.local || t('home.landing.dash') }}</div>
              </div>
            </router-link>
          </div>
          <router-link to="/eventos" class="btn-ghost w-fit">{{ t('home.landing.events.viewAll') }}</router-link>
        </div>
      </div>
    </div>

    <!-- ── PLANOS ───────────────────────────────────────── -->
    <section class="bg-[#f4f6fb] px-4 py-20 md:px-12">
      <div class="reveal-item mx-auto flex w-full max-w-[1200px] flex-col items-center">
        <p class="plans-kicker">{{ t('home.landing.plans.kicker') }}</p>
        <h2 class="plans-title text-center">
          {{ t('home.landing.plans.titleLine1') }}
          <span>{{ t('home.landing.plans.titleHighlight') }}</span>
        </h2>
        <p class="plans-subtitle text-center">{{ t('home.landing.plans.subtitle') }}</p>

        <div class="mt-12 grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
          <template v-if="isLoadingPlanos">
            <div
              v-for="n in 3" :key="'plan-sk-' + n"
              class="h-[560px] animate-pulse rounded-[24px] border border-[#d6dbe7] bg-white"
            />
          </template>
          <template v-else-if="planosPreview.length">
            <article
              v-for="plano in planosPreview" :key="plano.id"
              class="plan-card"
              :class="{ 'plan-card--featured': plano.maisPopular }"
            >
              <span v-if="plano.maisPopular" class="plan-popular-badge">{{ t('home.landing.plans.popular') }}</span>

              <div class="plan-card__header">
                <h3 class="plan-card__name">{{ plano.nome || t('home.landing.plans.fallbackName') }}</h3>
                <p class="plan-card__desc">{{ plano.descricao || t('home.landing.plans.fallbackDescription') }}</p>

                <div class="mt-8 flex items-end gap-1">
                  <span class="plan-card__currency">R$</span>
                  <span class="plan-card__price">{{ formatPlanMainPrice(plano) }}</span>
                  <span class="plan-card__period">{{ planPeriodLabel(plano) }}</span>
                </div>
                <p class="plan-card__hint">{{ planHintLabel(plano) }}</p>
              </div>

              <div class="plan-card__body">
                <div class="plan-card__guarantee">
                  <svg viewBox="0 0 24 24" fill="none" class="h-[17px] w-[17px]">
                    <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" stroke="currentColor" stroke-width="1.8" />
                    <path d="M8.6 11.5l2.3 2.3 4.5-4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>{{ t('home.landing.plans.guarantee') }}</span>
                </div>

                <div class="plan-card__divider"></div>
                <p class="plan-card__benefits-title">{{ t('home.landing.plans.includes') }}</p>

                <ul class="plan-card__benefits">
                  <li v-for="beneficio in includedBenefits(plano)" :key="`${plano.id}-${beneficio}`">
                    <span class="plan-card__check">✓</span>
                    <span>{{ beneficio }}</span>
                  </li>
                  <li v-if="!includedBenefits(plano).length">
                    <span class="plan-card__check">✓</span>
                    <span>{{ t('home.landing.plans.emptyBenefits') }}</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://admin.fitcert365.com/register" target="_blank" rel="noopener noreferrer"
                class="plan-card__cta"
                :class="{ 'plan-card__cta--featured': plano.maisPopular }"
              >
                {{ plano.maisPopular ? t('home.landing.plans.ctaFeatured') : t('home.landing.plans.ctaDefault') }}
              </a>
            </article>
          </template>
          <p v-else class="col-span-full text-center text-sm text-[#4b5565]">{{ t('home.landing.plans.empty') }}</p>
        </div>
      </div>
    </section>

    <!-- ── INDICADORES ─────────────────────────────────── -->
    <div class="bg-[#1a1a1a]">
      <div class="reveal-item mx-auto grid max-w-[1200px] items-center md:grid-cols-2 md:min-h-[560px]">
        <div class="px-6 py-16 md:px-12 md:pr-16">
          <p class="section-tag">{{ t('home.landing.metrics.tag') }}</p>
          <h2 class="font-head text-[clamp(32px,4vw,54px)] font-bold leading-[1.1] tracking-[-0.02em] mb-5">
            {{ t('home.landing.metrics.titleLine1') }}<br><span class="text-[#00C6FE]">{{ t('home.landing.metrics.titleHighlight') }}</span>
          </h2>
          <p class="text-base leading-[1.75] text-white/60 max-w-[480px] mb-8">
            {{ t('home.landing.metrics.desc') }}
          </p>
          <router-link to="/marcadores" class="btn-ghost w-fit">{{ t('home.landing.metrics.viewPanel') }}</router-link>
        </div>
        <div ref="metricsRef" class="flex justify-center px-6 py-12 md:px-12">
          <div class="grid w-full max-w-[340px] grid-cols-2 gap-4">
            <div v-for="m in metricsRows" :key="m.key"
              class="rounded-xl border p-5 text-center"
              :class="m.accent === 'lime' ? 'border-[#88CE0D]/20 bg-[#88CE0D]/[0.06]' : 'border-[#00C6FE]/20 bg-[#00C6FE]/[0.06]'"
            >
              <div :ref="el => { if (el) counterRefs[m.key] = el }"
                class="font-head text-[32px] font-bold leading-none mb-1"
                :class="m.accent === 'lime' ? 'text-[#88CE0D]' : 'text-[#00C6FE]'"
              >{{ m.display }}</div>
              <div class="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/45">{{ m.unit }}</div>
              <div class="mt-[6px] text-xs text-white/50">{{ m.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── CONTEÚDOS ───────────────────────────────────── -->
    <div class="bg-[#060606] px-4 py-[120px] md:px-12">
      <div class="reveal-item mx-auto max-w-[1200px]">
        <div class="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p class="section-tag">{{ t('home.landing.content.tag') }}</p>
            <h2 class="font-head text-[clamp(28px,3vw,42px)] font-bold leading-[1.1] tracking-[-0.02em]">
              {{ t('home.landing.content.titleLine1') }}<br>{{ t('home.landing.content.titleLine2') }}
            </h2>
          </div>
          <router-link to="/artigos" class="btn-ghost">{{ t('home.landing.content.viewAll') }}</router-link>
        </div>
        <div class="grid gap-6 md:grid-cols-3">
          <template v-if="isLoadingArtigos">
            <div
              v-for="n in 3" :key="'art-sk-' + n"
              class="block overflow-hidden rounded-xl border border-white/[0.06] bg-[#0e0e0e] animate-pulse"
            >
              <div class="h-[180px] bg-white/10"></div>
              <div class="space-y-3 p-6">
                <div class="h-3 w-20 rounded bg-white/10"></div>
                <div class="h-5 w-full rounded bg-white/10"></div>
                <div class="h-4 w-full rounded bg-white/10"></div>
              </div>
            </div>
          </template>
          <router-link
            v-else
            v-for="post in artigosPreview" :key="post.id"
            :to="{ name: 'ArtigoDetalhe', params: { id: post.id } }"
            class="block cursor-pointer overflow-hidden rounded-xl border border-white/[0.06] bg-[#0e0e0e] no-underline transition-all duration-200 hover:-translate-y-1 hover:border-[#00C6FE]/30"
          >
            <article class="h-full">
              <div class="relative h-[180px] overflow-hidden bg-white/5">
                <img
                  v-if="post.imageUrl"
                  :src="post.imageUrl"
                  :alt="post.title"
                  class="h-full w-full object-cover"
                />
                <div v-else class="h-full w-full bg-gradient-to-br from-[#00C6FE]/40 to-[#88CE0D]/30"></div>
              </div>
              <div class="p-6">
                <span class="mb-3 inline-block font-head text-[10px] font-bold uppercase tracking-[0.1em] text-[#88CE0D]">{{ post.tag }}</span>
                <h3 class="mb-3 font-head text-[17px] font-semibold leading-[1.3] text-white line-clamp-2">{{ post.title }}</h3>
                <p class="text-[13px] leading-[1.6] text-white/50 line-clamp-3">{{ post.excerpt }}</p>
              </div>
            </article>
          </router-link>
        </div>
      </div>
    </div>

    <!-- ── CTA BANNER ─────────────────────────────────── -->
    <div class="px-4 py-20 md:px-12" style="background: linear-gradient(135deg,#00C6FE 0%,#007DB8 100%)">
      <div class="reveal-item mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-8">
        <div>
          <h2 class="font-head text-[clamp(28px,3vw,42px)] font-bold leading-[1.2] tracking-[-0.02em] text-[#060606]">
            {{ t('home.landing.cta.titleBefore') }} <span class="text-[#88CE0D]">{{ t('home.landing.cta.titleHighlight') }}</span>
          </h2>
          <p class="mt-2 text-base text-[#060606]/70">{{ t('home.landing.cta.subtitle') }}</p>
        </div>
        <div class="flex flex-wrap gap-3">
          <a
            href="https://admin.fitcert365.com/login" target="_blank" rel="noopener noreferrer"
            class="btn btn-dark"
          >{{ t('home.landing.cta.login') }}</a>
          <a
            href="https://admin.fitcert365.com/register" target="_blank" rel="noopener noreferrer"
            class="btn btn-white"
          >{{ t('home.landing.cta.register') }}</a>
        </div>
      </div>
    </div>

    <!-- ── APOIO INSTITUCIONAL ────────────────────────── -->
    <div class="bg-[#0e0e0e] px-4 py-24 text-center md:px-12">
      <div class="reveal-item mx-auto max-w-[1100px]">
        <p class="section-tag mx-auto mb-5 w-fit justify-center">{{ t('home.landing.support.tag') }}</p>
        <h2 class="font-head text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.2] tracking-[-0.02em] mb-4">
          {{ t('home.landing.support.titleLine1') }}<br>{{ t('home.landing.support.titleLine2') }}
        </h2>
        <p class="mb-10 text-base text-white/55">{{ t('home.landing.support.subtitle') }}</p>
        <router-link to="/contato" class="btn-ghost mx-auto mb-12 inline-flex">{{ t('home.landing.support.cta') }}</router-link>
        <div class="flex flex-wrap justify-center gap-8 md:gap-10">
          <template v-if="isLoadingAfiliados">
            <div
              v-for="n in 4" :key="'ap-sk-' + n"
              class="flex min-h-[8.5rem] w-[11rem] animate-pulse items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.06] sm:w-[13rem] md:min-h-[9.5rem] md:w-[15rem]"
            />
          </template>
          <template v-else-if="apoiadoresHome.length">
            <template v-for="a in apoiadoresHome" :key="a.id">
              <a
                v-if="a.linkRedirect"
                :href="a.linkRedirect"
                target="_blank"
                rel="noopener noreferrer"
                class="flex min-h-[8.5rem] w-[11rem] cursor-pointer items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] px-5 py-5 transition-colors duration-200 hover:border-[#88CE0D]/40 sm:w-[13rem] md:min-h-[9.5rem] md:w-[15rem] md:px-6 md:py-6"
              >
                <img
                  v-if="a.imagemUrl"
                  :src="a.imagemUrl"
                  :alt="a.nome || t('home.landing.support.altLogo')"
                  class="max-h-[5.25rem] w-full max-w-[13rem] object-contain sm:max-h-24 md:max-h-28 md:max-w-[14rem]"
                />
                <span v-else class="font-head px-2 text-center text-sm font-semibold tracking-[0.06em] text-white/50">{{ a.nome }}</span>
              </a>
              <div
                v-else
                class="flex min-h-[8.5rem] w-[11rem] items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] px-5 py-5 sm:w-[13rem] md:min-h-[9.5rem] md:w-[15rem] md:px-6 md:py-6"
              >
                <img
                  v-if="a.imagemUrl"
                  :src="a.imagemUrl"
                  :alt="a.nome || t('home.landing.support.altLogo')"
                  class="max-h-[5.25rem] w-full max-w-[13rem] object-contain sm:max-h-24 md:max-h-28 md:max-w-[14rem]"
                />
                <span v-else class="font-head px-2 text-center text-sm font-semibold tracking-[0.06em] text-white/50">{{ a.nome }}</span>
              </div>
            </template>
          </template>
          <p v-else class="w-full text-sm text-white/35">{{ t('home.landing.support.empty') }}</p>
        </div>
      </div>
    </div>

    <!-- ── PATROCINADORES ─────────────────────────────── -->
    <div class="border-t border-white/[0.06] bg-[#060606] px-4 py-24 text-center md:px-12">
      <div class="reveal-item mx-auto max-w-[1200px]">
        <p class="mb-10 font-head text-[13px] font-semibold uppercase tracking-[0.14em] text-white/35">
          {{ t('home.landing.sponsors.title') }}
        </p>
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-14">
          <template v-if="isLoadingAfiliados">
            <div
              v-for="n in 4" :key="'pt-sk-' + n"
              class="flex min-h-[7rem] w-[11rem] animate-pulse items-center justify-center rounded-xl bg-white/[0.08] sm:w-[13rem] md:min-h-[8rem] md:w-[15rem]"
            />
          </template>
          <template v-else-if="patrocinadoresHome.length">
            <template v-for="p in patrocinadoresHome" :key="p.id">
              <a
                v-if="p.linkRedirect"
                :href="p.linkRedirect"
                target="_blank"
                rel="noopener noreferrer"
                class="flex min-h-[7rem] w-[11rem] cursor-pointer items-center justify-center rounded-xl bg-white/[0.08] px-5 py-4 opacity-95 transition-opacity duration-200 hover:opacity-100 sm:w-[13rem] md:min-h-[8rem] md:w-[15rem] md:px-6 md:py-5"
              >
                <img
                  v-if="p.imagemUrl"
                  :src="p.imagemUrl"
                  :alt="p.nome || t('home.landing.sponsors.altLogo')"
                  class="max-h-20 w-full max-w-[13rem] object-contain sm:max-h-24 md:max-h-28 md:max-w-[14rem]"
                />
                <span v-else class="font-head px-2 text-center text-xs font-bold tracking-[0.08em] text-white/60 md:text-sm">{{ p.nome }}</span>
              </a>
              <div
                v-else
                class="flex min-h-[7rem] w-[11rem] items-center justify-center rounded-xl bg-white/[0.08] px-5 py-4 opacity-95 sm:w-[13rem] md:min-h-[8rem] md:w-[15rem] md:px-6 md:py-5"
              >
                <img
                  v-if="p.imagemUrl"
                  :src="p.imagemUrl"
                  :alt="p.nome || t('home.landing.sponsors.altLogo')"
                  class="max-h-20 w-full max-w-[13rem] object-contain sm:max-h-24 md:max-h-28 md:max-w-[14rem]"
                />
                <span v-else class="font-head px-2 text-center text-xs font-bold tracking-[0.08em] text-white/60 md:text-sm">{{ p.nome }}</span>
              </div>
            </template>
          </template>
          <p v-else class="w-full text-sm text-white/35">{{ t('home.landing.sponsors.empty') }}</p>
        </div>
      </div>
    </div>

    <ModalParabens />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import EventoService from '../services/Eventos/eventos-services'
import ArtigoService from '../services/Artigos/artigos-service'
import PlanosService from '../services/planos/planos-service'
import { useI18n } from '../composables/useI18n'
import AfiliadoService from '../services/Afiliados/afiliado-service'
import ModalParabens from '../components/modalParabens.vue'

gsap.registerPlugin(ScrollTrigger)

const { currentLocale, t } = useI18n()

function getLocalizedField(item, field) {
  if (!item) return ''
  return currentLocale.value === 'en' ? item[`en_${field}`] : item[field]
}

const MESES_PT = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ']
const MESES_EN = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

function formatEventDateParts(dateStr) {
  if (!dateStr) return { day: t('home.landing.dash'), month: '' }
  const date = new Date(dateStr)
  const day = String(date.getDate()).padStart(2, '0')
  const month = currentLocale.value === 'en' ? MESES_EN[date.getMonth()] : MESES_PT[date.getMonth()]
  return { day, month }
}

function artigoCapaUrl(item) {
  const imgs = item?.imagensArtigo
  if (!Array.isArray(imgs)) return ''
  return imgs.find((i) => i.isBanner === false)?.imagemUrl || ''
}

function categoriaTag(item) {
  const cat = item?.categoriaArtigo
  if (cat && (cat.nome || cat.en_nome)) return getLocalizedField(cat, 'nome')
  return t('home.landing.articleFallback')
}

// ── Marquee ──────────────────────────────────────────────
const MARQUEE_KEYS = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6']
const marqueeItems = computed(() => MARQUEE_KEYS.map((k) => t(`home.landing.marquee.${k}`)))

const FEATURE_ICONS = [
  '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
  '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
]

// ── Features ─────────────────────────────────────────────
const featureItems = computed(() =>
  ['f1', 'f2', 'f3'].map((id, i) => ({
    titleKey: id,
    kicker: t(`home.landing.features.${id}.kicker`),
    title: t(`home.landing.features.${id}.title`),
    desc: t(`home.landing.features.${id}.desc`),
    icon: FEATURE_ICONS[i],
  }))
)

// ── Saude checks ─────────────────────────────────────────
const saudeChecks = computed(() => [
  t('home.landing.health.check1'),
  t('home.landing.health.check2'),
  t('home.landing.health.check3'),
])

const afiliadosTodos = ref([])
const isLoadingAfiliados = ref(false)

/** Resposta API: { success, data: Afiliado[] } ou lista direta */
function normalizarListaAfiliados(raw) {
  if (!raw) return []
  if (Array.isArray(raw)) return raw
  if (Array.isArray(raw.data)) return raw.data
  if (Array.isArray(raw.itens)) return raw.itens
  return []
}

const apoiadoresHome = computed(() =>
  afiliadosTodos.value.filter((a) => a.ativo && a.isApoiador)
)

const patrocinadoresHome = computed(() =>
  afiliadosTodos.value.filter((a) => a.ativo && a.isPatrocinador)
)

async function loadingAfiliadosPreview() {
  try {
    isLoadingAfiliados.value = true
    const raw = await AfiliadoService.getAllAfiliados()
    afiliadosTodos.value = normalizarListaAfiliados(raw)
  } catch (e) {
    console.error('Erro ao buscar afiliados na home:', e)
    afiliadosTodos.value = []
  } finally {
    isLoadingAfiliados.value = false
  }
}

// ── Eventos (API, mesmo padrão de Eventos.vue) ───────────
const eventosPreview = ref([])
const isLoadingEventos = ref(false)
const HOME_EVENTOS_LIMIT = 3

async function loadEventosPreview() {
  try {
    isLoadingEventos.value = true
    const response = await EventoService.getAllPaginated(1, HOME_EVENTOS_LIMIT)
    const payload = response?.data ?? response
    eventosPreview.value = payload?.itens || []
  } catch (e) {
    console.error('Erro ao buscar eventos na home:', e)
    eventosPreview.value = []
  } finally {
    isLoadingEventos.value = false
  }
}

// ── Planos (API) ──────────────────────────────────────────
const planosPreview = ref([])
const isLoadingPlanos = ref(false)

function normalizePlanosResponse(raw) {
  if (!raw) return []
  if (Array.isArray(raw)) return raw
  if (Array.isArray(raw.data)) return raw.data
  if (Array.isArray(raw?.data?.data)) return raw.data.data
  return []
}

function formatCurrencyWithoutSymbol(value) {
  const locale = currentLocale.value === 'en' ? 'en-US' : 'pt-BR'
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(Number(value || 0))
}

function formatPlanMainPrice(plano) {
  if (Number(plano?.precoAno) > 0) return formatCurrencyWithoutSymbol(Number(plano.precoAno))
  return formatCurrencyWithoutSymbol(Number(plano?.precoMes || 0))
}

function planPeriodLabel(plano) {
  return Number(plano?.precoAno) > 0 ? t('home.landing.plans.perYear') : t('home.landing.plans.perMonth')
}

function planHintLabel(plano) {
  if (Number(plano?.precoAno) > 0 && Number(plano?.precoMes) > 0) {
    return `${t('home.landing.plans.equivalent')} R$ ${formatCurrencyWithoutSymbol(Number(plano.precoMes))}/${t('home.landing.plans.month')}`
  }
  return t('home.landing.plans.noCommitment')
}

function includedBenefits(plano) {
  return (plano?.planoBeneficio || [])
    .filter((item) => item?.incluso)
    .map((item) => item?.beneficio?.descricao)
    .filter(Boolean)
}

async function loadPlanosPreview() {
  try {
    isLoadingPlanos.value = true
    const response = await PlanosService.getAllPlanos()
    const planos = normalizePlanosResponse(response)
    planosPreview.value = planos.sort((a, b) => {
      if (a.maisPopular && !b.maisPopular) return -1
      if (!a.maisPopular && b.maisPopular) return 1
      return Number(a.precoAno || a.precoMes || 0) - Number(b.precoAno || b.precoMes || 0)
    })
  } catch (e) {
    console.error('Erro ao buscar planos na home:', e)
    planosPreview.value = []
  } finally {
    isLoadingPlanos.value = false
  }
}

// ── Indicadores / métricas ───────────────────────────────
const metricsRef = ref(null)
const counterRefs = ref({})

const METRIC_DEFS = [
  { key: 'hr', target: 72, decimals: 0, accent: 'cyan', display: '0' },
  { key: 'vo2', target: 48, decimals: 0, accent: 'lime', display: '0' },
  { key: 'today', target: 5.4, decimals: 1, accent: 'lime', display: '0' },
  { key: 'spo2', target: 98, decimals: 0, accent: 'cyan', display: '0' },
]

const metricsRows = computed(() =>
  METRIC_DEFS.map((m) => ({
    ...m,
    label: t(`home.landing.metrics.${m.key}.label`),
    unit: t(`home.landing.metrics.${m.key}.unit`),
  }))
)

// ── Artigos (API, mesmo padrão de Artigos-pages.vue) ─────
const artigosPreview = ref([])
const isLoadingArtigos = ref(false)
const HOME_ARTIGOS_LIMIT = 3

async function loadArtigosPreview() {
  try {
    isLoadingArtigos.value = true
    const response = await ArtigoService.getAllPaginated(1, HOME_ARTIGOS_LIMIT, undefined, false, true)
    const data = response?.data ?? response
    const itens = (data?.itens || []).slice().sort((a, b) => {
      return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    })
    artigosPreview.value = itens.map((item) => ({
      id: item.id,
      title: getLocalizedField(item, 'titulo'),
      excerpt: getLocalizedField(item, 'subTitulo'),
      tag: categoriaTag(item),
      imageUrl: artigoCapaUrl(item),
    }))
  } catch (e) {
    console.error('Erro ao buscar artigos na home:', e)
    artigosPreview.value = []
  } finally {
    isLoadingArtigos.value = false
  }
}

// ── GSAP Animations ──────────────────────────────────────
onMounted(() => {
  loadEventosPreview()
  loadArtigosPreview()
  loadingAfiliadosPreview()
  loadPlanosPreview()

  // Hero timeline
  gsap.from('.hero-item', {
    opacity: 0, y: 26, duration: 0.8, stagger: 0.14, ease: 'power3.out',
  })

  // Scroll reveal
  gsap.utils.toArray('.reveal-item').forEach(el => {
    gsap.from(el, {
      opacity: 0, y: 28, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    })
  })

  // Metric counters
  ScrollTrigger.create({
    trigger: metricsRef.value,
    start: 'top 85%',
    once: true,
    onEnter() {
      METRIC_DEFS.forEach((m) => {
        const el = counterRefs.value[m.key]
        if (!el) return
        const obj = { val: 0 }
        gsap.to(obj, {
          val: m.target, duration: 1.4, ease: 'power2.out',
          onUpdate() {
            el.textContent = m.decimals ? obj.val.toFixed(m.decimals) : Math.round(obj.val)
          },
        })
      })
    },
  })
})

watch(currentLocale, () => {
  loadArtigosPreview()
  loadEventosPreview()
  loadPlanosPreview()
})
</script>

<style scoped lang="postcss">
@reference "../style.css";

/* Fonts */
.font-head { font-family: 'Space Grotesk', sans-serif; }
.font-body { font-family: 'DM Sans', sans-serif; }

.hero-copy .eyebrow {
  font-size: 9.35px;
  letter-spacing: 0.14em;
  margin-bottom: 15px;
}
.hero-copy .eyebrow::before {
  width: 18.7px;
}

.eyebrow,
.section-tag {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
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

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 10px 20px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}
.btn-outline {
  background: transparent;
  border-color: rgba(255, 255, 255, 0.2);
  color: #fff;
}
.btn-outline:hover {
  border-color: #00c6fe;
  color: #00c6fe;
}
.btn-primary {
  background: #00c6fe;
  color: #060606;
}
.btn-primary:hover {
  transform: translateY(-1px);
  background: #22d4ff;
}
.btn-lime {
  padding: 14px 28px;
  font-size: 14px;
  background: #88ce0d;
  color: #060606;
}
.btn-lime:hover {
  transform: translateY(-1px);
  background: #9dea0f;
}
.btn-dark {
  padding: 14px 28px;
  font-size: 14px;
  background: #88ce0d;
  color: #fff;
}
.btn-dark:hover { background: #1a1a1a; }
.btn-white {
  padding: 14px 28px;
  font-size: 14px;
  background: #fff;
  color: #88ce0d;
}
.btn-white:hover { background: #f3f4f6; }
.btn-ghost {
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
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
  transition: all 0.2s ease;
}
.btn-ghost:hover {
  background: #00c6fe;
  color: #060606;
}

/* Check dot */
.check-dot {
  width: 20px; height: 20px; border-radius: 50%; display: block;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='10' fill='%2388CE0D'/%3E%3Cpath d='M5 10L8.5 13.5L15 7' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-size: cover;
}

/* Stat pill */
.stat-pill {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  background: rgba(18, 19, 24, 0.7);
  padding: 16px 18px;
  backdrop-filter: blur(8px);
  min-width: 120px;
}
.stat-pill--hero {
  min-width: 0;
  padding: 14px 16px;
}

/* Hero grid */
.hero-grid {
  background-image: linear-gradient(rgba(0,198,254,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,198,254,0.04) 1px, transparent 1px);
  background-size: 80px 80px;
  mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 40%, transparent 100%);
}

/* Marquee */
.marquee-track { animation: marquee 22s linear infinite; }
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* Plans */
.plans-kicker {
  margin-bottom: 14px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #7f8ba3;
}

.plans-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(30px, 4vw, 46px);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #111827;
}

.plans-title > span {
  color: #88ce0d;
}

.plans-subtitle {
  margin-top: 14px;
  max-width: 700px;
  font-size: 15px;
  line-height: 1.6;
  color: #4b5565;
}

.plan-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 560px;
  border-radius: 24px;
  border: 1px solid #d6dbe7;
  background: #ffffff;
  color: #111827;
  box-shadow: 0 18px 54px -36px rgba(17, 24, 39, 0.22);
}

.plan-card--featured {
  border-color: #0e2c61;
  background:
    radial-gradient(130% 85% at 55% 120%, rgba(136, 206, 13, 0.24), transparent 52%),
    linear-gradient(180deg, #132240 0%, #0e1730 100%);
  color: #ffffff;
  box-shadow: 0 24px 58px -30px rgba(8, 12, 26, 0.62);
}

.plan-popular-badge {
  position: absolute;
  left: 50%;
  top: -12px;
  transform: translateX(-50%);
  border-radius: 999px;
  background: #88ce0d;
  padding: 5px 14px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0d1b36;
}

.plan-card__header {
  padding: 30px 28px 20px;
}

.plan-card__name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 37px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.025em;
}

.plan-card__desc {
  margin-top: 10px;
  min-height: 42px;
  font-size: 15px;
  line-height: 1.45;
  color: rgba(17, 24, 39, 0.72);
}

.plan-card--featured .plan-card__desc {
  color: rgba(255, 255, 255, 0.76);
}

.plan-card__currency {
  margin-bottom: 7px;
  font-size: 33px;
  font-weight: 600;
  line-height: 1;
}

.plan-card__price {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 62px;
  font-weight: 700;
  line-height: 0.92;
  letter-spacing: -0.03em;
}

.plan-card__period {
  margin-bottom: 6px;
  font-size: 22px;
  font-weight: 500;
  line-height: 1;
  opacity: 0.84;
}

.plan-card__hint {
  margin-top: 6px;
  font-size: 14px;
  color: rgba(17, 24, 39, 0.62);
}

.plan-card--featured .plan-card__hint {
  color: rgba(255, 255, 255, 0.62);
}

.plan-card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 28px;
}

.plan-card__guarantee {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: rgba(17, 24, 39, 0.74);
}

.plan-card--featured .plan-card__guarantee {
  color: rgba(255, 255, 255, 0.76);
}

.plan-card__divider {
  margin: 18px 0 16px;
  height: 1px;
  width: 100%;
  background: rgba(17, 24, 39, 0.1);
}

.plan-card--featured .plan-card__divider {
  background: rgba(255, 255, 255, 0.12);
}

.plan-card__benefits-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: rgba(17, 24, 39, 0.86);
}

.plan-card--featured .plan-card__benefits-title {
  color: rgba(255, 255, 255, 0.93);
}

.plan-card__benefits {
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding: 0;
  list-style: none;
}

.plan-card__benefits li {
  display: flex;
  gap: 10px;
  font-size: 14px;
  line-height: 1.45;
  color: rgba(17, 24, 39, 0.78);
}

.plan-card--featured .plan-card__benefits li {
  color: rgba(255, 255, 255, 0.84);
}

.plan-card__check {
  margin-top: 1px;
  font-weight: 700;
  color: #88ce0d;
}

.plan-card__cta {
  margin: 24px 28px 28px;
  border-radius: 999px;
  border: 1px solid #d1d7e4;
  padding: 12px 16px;
  text-align: center;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #1f2937;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

.plan-card__cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 30px -20px rgba(17, 24, 39, 0.46);
  background: #f8fafc;
}

.plan-card__cta--featured {
  border-color: rgba(136, 206, 13, 0.34);
  background: linear-gradient(90deg, #88ce0d 0%, #9de316 100%);
  color: #102122;
}

.plan-card__cta--featured:hover {
  background: linear-gradient(90deg, #95dd10 0%, #abf423 100%);
}
</style>
