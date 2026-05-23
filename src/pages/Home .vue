<template>
  <div class="home-landing bg-[#f8fafc] text-[#0f172a] font-body">

    <!-- ── HERO ───────────────────────────────────────── -->
    <section class="relative flex min-h-[92vh] items-center overflow-hidden pb-16 pt-22 md:min-h-[95vh] md:pt-14">
      <img
        src="/src/assets/home-imgs/banner-home.jpg"
        :alt="t('home.landing.hero.bannerAlt')"
        class="hero-bg absolute inset-0 h-full w-full object-cover will-change-transform"
      />
      <div class="absolute inset-0 z-[1]"
        style="background: linear-gradient(to right,rgba(6,6,6,0.92) 45%,rgba(6,6,6,0.3) 100%),linear-gradient(to top,rgba(6,6,6,0.8) 0%,transparent 50%)">
      </div>
      <div class="hero-grid absolute inset-0 z-[2]"></div>

      <div class="relative z-[3] mx-auto w-full max-w-[1200px] px-4 md:px-12">
        <div class="flex items-center justify-between gap-10">
          <div class="hero-copy max-w-[760px] text-white">
            <p class="hero-item eyebrow">{{ t('home.landing.hero.eyebrow') }}</p>
            <h1 class="hero-item mb-7 max-w-[697px] font-head text-[clamp(26px,5.2vw,60px)] font-bold leading-[0.98] tracking-[-0.03em] md:text-[clamp(32px,4.76vw,60px)] lg:text-[clamp(41px,5.1vw,70px)] 2xl:text-[clamp(49px,4.6vw,83px)]">
              {{ t('home.landing.hero.titleLine1') }}<br>{{ t('home.landing.hero.titleLine2') }}
              <em class="not-italic text-[#00C6FE]">{{ t('home.landing.hero.titleEm') }}</em>
            </h1>
            <p class="hero-item mb-11 text-[13px] leading-[1.65] max-w-[450px] text-white/70 sm:text-[14px] lg:text-[14px] 2xl:text-[15px]">
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

    <!-- ── MARQUEE (N segmentos iguais; GSAP move o track −largura de 1 segmento) ── -->
    <div class="overflow-hidden bg-[#88CE0D] py-3">
      <div ref="marqueeTrackRef" class="marquee-track flex w-max flex-nowrap">
        <div
          v-for="copyIdx in marqueeCopyCount"
          :key="`m-copy-${copyIdx}`"
          :ref="(el) => bindMarqueeSegment(el, copyIdx)"
          class="marquee-segment inline-flex shrink-0 flex-nowrap items-center"
          :aria-hidden="copyIdx !== 1 ? 'true' : null"
        >
          <template v-for="(item, i) in marqueeItems" :key="`m-${copyIdx}-${MARQUEE_KEYS[i]}`">
            <span class="whitespace-nowrap px-6 font-head text-[11px] font-bold uppercase tracking-[0.12em] text-[#060606] sm:px-8 sm:text-[12px]">{{ item }}</span>
            <span class="text-[#060606]/30">✦</span>
          </template>
        </div>
      </div>
    </div>

    <!-- ── FEATURES BAR ────────────────────────────────── -->
    <div class="features-bar relative overflow-x-clip overflow-y-visible py-14 md:py-16">
      <div class="features-bar-grid pointer-events-none absolute inset-0" aria-hidden="true"></div>
      <div class="features-bar-spotlight pointer-events-none absolute inset-0" aria-hidden="true"></div>
      <div class="features-bar-deco features-bar-deco--1 pointer-events-none absolute" aria-hidden="true"></div>
      <div class="features-bar-deco features-bar-deco--2 pointer-events-none absolute" aria-hidden="true"></div>

      <div class="home-features-stage reveal-item relative mx-auto max-w-[1200px] px-4 md:px-12">
        <div v-if="isMobileHomeLayout" class="home-features-carousel-wrap">
          <Carousel
            v-model:page="featuresCarouselPage"
            class="home-features-carousel"
            :value="featureItems"
            :numVisible="1"
            :numScroll="1"
            circular
            :autoplayInterval="homeCarouselAutoplayMs"
            :showNavigators="false"
            :showIndicators="true"
            :pt="{ root: { 'aria-label': t('home.landing.features.carouselLabel') } }"
          >
            <template #item="{ data: f, index: i }">
              <article class="feature-bar-card h-full mx-1">
                <span class="feature-bar-card__accent" aria-hidden="true"></span>
                <span class="feature-bar-card__number">{{ String(i + 1).padStart(2, '0') }}</span>

                <div class="feature-bar-card__icon-wrap">
                  <svg
                    class="feature-bar-card__icon"
                    viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="f.icon"
                  />
                </div>

                <p class="feature-bar-card__kicker">{{ f.kicker }}</p>
                <h3 class="feature-bar-card__title">{{ f.title }}</h3>
                <p class="feature-bar-card__desc">{{ f.desc }}</p>
              </article>
            </template>
          </Carousel>
        </div>
        <div
          v-else
          class="home-features-desktop grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3"
        >
          <article
            v-for="(f, i) in featureItems" :key="f.titleKey"
            class="feature-bar-card"
          >
            <span class="feature-bar-card__accent" aria-hidden="true"></span>
            <span class="feature-bar-card__number">{{ String(i + 1).padStart(2, '0') }}</span>

            <div class="feature-bar-card__icon-wrap">
              <svg
                class="feature-bar-card__icon"
                viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="f.icon"
              />
            </div>

            <p class="feature-bar-card__kicker">{{ f.kicker }}</p>
            <h3 class="feature-bar-card__title">{{ f.title }}</h3>
            <p class="feature-bar-card__desc">{{ f.desc }}</p>
          </article>
        </div>
      </div>
    </div>

    <!-- ── SAÚDE VALIDADA ──────────────────────────────── -->
    <div class="bg-white overflow-x-clip">
      <div class="reveal-item relative mx-auto flex max-w-[1200px] flex-col md:min-h-[480px] lg:min-h-[560px]">
        <div
          class="relative z-10 order-2 flex w-full min-w-0 flex-col justify-center px-6 py-16 md:max-w-none md:px-12 md:py-16 lg:max-w-[600px] lg:pr-16"
        >
          <p class="section-tag">{{ t('home.landing.health.tag') }}</p>
          <h2 class="font-head text-[clamp(22px,5.5vw,54px)] font-bold leading-[1.1] tracking-[-0.02em] mb-5 break-words md:text-[clamp(28px,4vw,54px)]">
            {{ t('home.landing.health.titleLine1') }}<br><span class="text-[#88CE0D]">{{ t('home.landing.health.titleHighlight') }}</span>
          </h2>
          <p class="text-[15px] leading-[1.7] text-[#334155]/80 max-w-[480px] mb-6 md:text-base md:leading-[1.75]">
            {{ t('home.landing.health.desc') }}
          </p>
          <ul class="mb-8 flex flex-col gap-3 list-none p-0">
            <li v-for="(item, idx) in saudeChecks" :key="'hc-' + idx" class="flex items-center justify-start gap-3 text-[15px] text-[#1e293b]/90">
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
          <div class="absolute inset-0" style="background: linear-gradient(to right,rgba(255,255,255,1) 0%,rgba(255,255,255,0.94) 8%,rgba(255,255,255,0.44) 24%,rgba(255,255,255,0.14) 33%,transparent 42%),linear-gradient(to top,rgba(255,255,255,0.2) 0%,transparent 34%);"></div>
        </div>
      </div>
    </div>

    <!-- ── EVENTOS PARCEIROS ───────────────────────────── -->
    <div class="bg-[#f8fafc] overflow-x-clip">
      <div class="reveal-item relative mx-auto flex max-w-[1200px] flex-col md:min-h-[480px] lg:min-h-[520px] lg:flex-row lg:justify-end">
        <div
          class="relative order-1 min-h-[320px] w-full lg:absolute lg:inset-y-0 lg:left-auto lg:right-1/2 lg:top-0 lg:min-h-0 lg:w-[50vw]"
        >
          <img
            src="/src/assets/home-imgs/home-img-02.jpg"
            :alt="t('home.landing.events.imageAlt')"
            class="absolute inset-0 h-full w-full object-cover"
          />
          <div class="absolute inset-0" style="background: linear-gradient(to left,rgba(248,250,252,1) 0%,rgba(248,250,252,0.94) 8%,rgba(248,250,252,0.44) 24%,rgba(248,250,252,0.14) 33%,transparent 42%),linear-gradient(to top,rgba(248,250,252,0.2) 0%,transparent 34%);"></div>
        </div>
        <div
          class="relative z-10 order-2 flex w-full min-w-0 flex-col justify-center px-6 py-16 md:max-w-none md:px-12 md:py-16 lg:ml-auto lg:max-w-[min(600px,calc(50%-2rem))] lg:shrink-0 lg:px-16 lg:pl-20 lg:pr-12"
        >
          <p class="section-tag">{{ t('home.landing.events.tag') }}</p>
          <h2 class="font-head text-[clamp(32px,4vw,54px)] font-bold leading-[1.1] tracking-[-0.02em] mb-5 break-words">
            {{ t('home.landing.events.titleLine1') }}<br><span class="text-[#00C6FE]">{{ t('home.landing.events.titleHighlight') }}</span>
          </h2>
          <p class="text-base leading-[1.75] text-[#334155]/80 max-w-[480px] mb-6">
            {{ t('home.landing.events.desc') }}
          </p>
          <div class="mb-8 flex flex-col gap-3">
            <template v-if="isLoadingEventos">
              <div
                v-for="n in 3" :key="'ev-sk-' + n"
                class="flex animate-pulse items-center gap-4 rounded-lg border border-[#dbe3ef] bg-white px-5 py-4"
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
              class="flex cursor-pointer items-center gap-4 rounded-lg border border-[#dbe3ef] bg-white px-5 py-4 no-underline transition-colors duration-200 hover:border-[#00C6FE]"
            >
              <div class="min-w-[44px] rounded bg-[#00C6FE] px-[10px] py-[6px] text-center font-head text-xs font-bold leading-[1.2] text-[#060606]">
                {{ formatEventDateParts(evento.data).day }}<br>{{ formatEventDateParts(evento.data).month }}
              </div>
              <div class="min-w-0">
                <div class="font-head text-sm font-semibold break-words text-[#0f172a]">{{ getLocalizedField(evento, 'titulo') }}</div>
                <div class="mt-[2px] text-xs break-words text-[#475569]">{{ evento.local || t('home.landing.dash') }}</div>
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

        <div
          v-if="isLoadingPlanos"
          class="mt-12 grid w-full gap-6 md:grid-cols-2"
        >
          <div
            v-for="n in 2" :key="'plan-sk-' + n"
            class="plan-card-skeleton h-[560px] animate-pulse rounded-[24px] border border-[#d6dbe7] bg-white"
          />
        </div>
        <div v-else-if="planosHomeDisplay.length" class="home-plans-stage mt-12 w-full">
          <Carousel
            v-if="isMobileHomeLayout"
            v-model:page="plansCarouselPage"
            class="home-plans-carousel w-full"
            :value="planosHomeDisplay"
            :numVisible="1"
            :numScroll="1"
            circular
            :autoplayInterval="homeCarouselAutoplayMs"
            :showNavigators="true"
            :showIndicators="true"
          >
            <template #item="{ data: plano }">
              <article
                class="plan-card h-full mx-1"
                :class="{ 'plan-card--featured': plano.maisPopular }"
              >
                <span v-if="plano.maisPopular" class="plan-popular-badge">{{ t('home.landing.plans.popular') }}</span>

                <div class="plan-card__header">
                  <h3 class="plan-card__name">{{ planTranslatedName(plano) }}</h3>
                  <p class="plan-card__desc">{{ planTranslatedDescription(plano) }}</p>

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
                    <li v-for="b in includedBenefits(plano)" :key="`${plano.id}-${b.key}`">
                      <span class="plan-card__check">✓</span>
                      <span>{{ b.label }}</span>
                    </li>
                    <li v-if="!includedBenefits(plano).length">
                      <span class="plan-card__check">✓</span>
                      <span>{{ t('home.landing.plans.emptyBenefits') }}</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="https://admin.fitcert365.com/register" target="_blank" rel="noopener noreferrer"
                  class="plan-card__cta btn"
                  :class="plano.maisPopular ? 'btn-lime' : 'btn-surface'"
                >
                  <span class="plan-card__cta-label">{{ plano.maisPopular ? t('home.landing.plans.ctaFeatured') : t('home.landing.plans.ctaDefault') }}</span>
                </a>
              </article>
            </template>
          </Carousel>
          <div
            v-else
            class="home-plans-desktop grid w-full grid-cols-1 gap-6 lg:grid-cols-2"
          >
            <article
              v-for="plano in planosHomeDisplay" :key="plano.id"
              class="plan-card"
              :class="{ 'plan-card--featured': plano.maisPopular }"
            >
              <span v-if="plano.maisPopular" class="plan-popular-badge">{{ t('home.landing.plans.popular') }}</span>

              <div class="plan-card__header">
                <h3 class="plan-card__name">{{ planTranslatedName(plano) }}</h3>
                <p class="plan-card__desc">{{ planTranslatedDescription(plano) }}</p>

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
                  <li v-for="b in includedBenefits(plano)" :key="`${plano.id}-${b.key}`">
                    <span class="plan-card__check">✓</span>
                    <span>{{ b.label }}</span>
                  </li>
                  <li v-if="!includedBenefits(plano).length">
                    <span class="plan-card__check">✓</span>
                    <span>{{ t('home.landing.plans.emptyBenefits') }}</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://admin.fitcert365.com/register" target="_blank" rel="noopener noreferrer"
                class="plan-card__cta btn"
                :class="plano.maisPopular ? 'btn-lime' : 'btn-surface'"
              >
                <span class="plan-card__cta-label">{{ plano.maisPopular ? t('home.landing.plans.ctaFeatured') : t('home.landing.plans.ctaDefault') }}</span>
              </a>
            </article>
          </div>
        </div>
        <p v-else class="mt-12 w-full text-center text-sm text-[#4b5565]">{{ t('home.landing.plans.empty') }}</p>
      </div>
    </section>

    <!-- ── FREEMIUM (3 MESES GRÁTIS) ───────────────────── -->
    <section class="freemium-section relative overflow-hidden bg-[#f8fafc] px-4 py-24 md:px-12 md:py-32">
      <div class="freemium-grid pointer-events-none absolute inset-0" aria-hidden="true"></div>
      <div class="freemium-orb freemium-orb--lime pointer-events-none absolute -left-24 top-1/4 h-[420px] w-[420px] rounded-full bg-[#88CE0D]/[0.10] blur-[110px]" aria-hidden="true"></div>
      <div class="freemium-orb freemium-orb--cyan pointer-events-none absolute -right-32 bottom-0 h-[460px] w-[460px] rounded-full bg-[#00C6FE]/[0.08] blur-[120px]" aria-hidden="true"></div>

      <div class="reveal-item relative mx-auto max-w-[1200px]">
        <div class="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
          <!-- LEFT -->
          <div>
            <p class="freemium-kicker">{{ t('home.landing.freemium.kicker') }}</p>


            <h2 class="freemium-title font-head text-[clamp(24px,6vw,58px)] font-bold leading-[1.02] tracking-[-0.025em] text-[#0f172a] md:text-[clamp(30px,5vw,58px)]">
              {{ t('home.landing.freemium.titleBefore') }}
              <span class="freemium-highlight relative inline-block text-[#88CE0D]">
                {{ t('home.landing.freemium.titleHighlight') }}
                <span class="freemium-underline" aria-hidden="true"></span>
              </span>
              <br/>{{ t('home.landing.freemium.titleAfter') }}
            </h2>

            <p class="mt-6 max-w-[540px] text-[14px] leading-[1.68] text-[#334155]/80 sm:text-[15px] md:text-[16px] md:leading-[1.75]">
              {{ t('home.landing.freemium.desc') }}
            </p>

            <div class="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="https://admin.fitcert365.com/register" target="_blank" rel="noopener noreferrer"
                class="btn btn-lime inline-flex items-center gap-2.5 no-underline"
              >
                <span class="relative">{{ t('home.landing.freemium.cta') }}</span>
                <svg class="btn-chevron-end relative h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <p class="text-[12px] leading-[1.6] text-[#475569] md:text-[13px]">
                {{ t('home.landing.freemium.note') }}
              </p>
            </div>
          </div>

          <!-- RIGHT (bullets) -->
          <ul class="freemium-bullets grid gap-4 sm:grid-cols-2 list-none p-0">
            <li
              v-for="(b, i) in freemiumBullets" :key="b.titleKey"
              class="freemium-bullet"
            >
              <span class="freemium-bullet-shine" aria-hidden="true"></span>
              <div class="relative">
                <div class="freemium-bullet-icon">
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="b.icon" aria-hidden="true"></svg>
                </div>
                <p class="font-head text-[10px] font-bold uppercase tracking-[0.14em] text-[#88CE0D]/65">
                  {{ String(i + 1).padStart(2, '0') }}
                </p>
                <h3 class="mt-1 font-head text-[15px] font-bold leading-tight text-[#0f172a] md:text-[16px]">
                  {{ t(b.titleKey) }}
                </h3>
                <p class="mt-2 text-[13px] leading-[1.6] text-[#475569]">
                  {{ t(b.descKey) }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ── APP / DASHBOARD ─────────────────────────────── -->
    <div class="bg-white">
      <div class="reveal-item mx-auto grid min-w-0 max-w-[1200px] items-center md:grid-cols-2 md:min-h-[560px]">
        <div class="min-w-0 px-6 py-16 md:px-12 md:pr-16">
          <p class="section-tag">{{ t('home.landing.metrics.tag') }}</p>
          <h2 class="font-head text-[clamp(22px,5.5vw,54px)] font-bold leading-[1.1] tracking-[-0.02em] mb-5 md:text-[clamp(28px,4vw,54px)]">
            {{ t('home.landing.metrics.titleLine1') }}<br><span class="text-[#00C6FE]">{{ t('home.landing.metrics.titleHighlight') }}</span>
          </h2>
          <p class="text-[15px] leading-[1.7] text-[#334155]/80 max-w-[480px] mb-8 md:text-base md:leading-[1.75]">
            {{ t('home.landing.metrics.desc') }}
          </p>
          <div class="app-store-links">
            <p class="mb-3 font-head text-[11px] font-bold uppercase tracking-[0.14em] text-[#64748b]">
              {{ t('footer.apps.heading') }}
            </p>
            <div class="flex flex-wrap items-center gap-3">
              <a
                href="https://apps.apple.com/br/app/fitcertify365/id6752969790"
                target="_blank"
                rel="noopener noreferrer"
                class="home-store-badge"
                :aria-label="t('footer.apps.appStore')"
              >
                <img
                  src="/app-store-white.png"
                  :alt="t('footer.apps.appStore')"
                  class="h-10 w-auto md:h-11"
                  loading="lazy"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.nicolascastela.fitcertify&hl=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                class="home-store-badge"
                :aria-label="t('footer.apps.playStore')"
              >
                <img
                  src="/play-store-white.png"
                  :alt="t('footer.apps.playStore')"
                  class="h-10 w-auto md:h-11"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="relative flex min-w-0 w-full max-w-full justify-center overflow-x-clip px-4 py-16 sm:px-6 md:px-12">
          <!-- decor floating dots -->
          <span class="metrics-decor metrics-decor--1 pointer-events-none absolute h-2 w-2 rounded-full bg-[#88CE0D]" aria-hidden="true"></span>
          <span class="metrics-decor metrics-decor--2 pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-[#00C6FE]" aria-hidden="true"></span>
          <span class="metrics-decor metrics-decor--3 pointer-events-none absolute h-1 w-1 rounded-full bg-white/40" aria-hidden="true"></span>

          <!-- Phone mockup: largura fluida até 280px para não estourar em viewports estreitas -->
          <div class="phone-mockup group">
            <div class="phone-glow" aria-hidden="true"></div>
            <div class="phone-frame">
              <span class="phone-island" aria-hidden="true"></span>
              <div class="phone-screen">
                <img
                  :src="homeScreenImg"
                  :alt="t('home.landing.metrics.screenAlt')"
                  class="phone-screen-img"
                  width="390"
                  height="844"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── CONTEÚDOS ───────────────────────────────────── -->
    <div class="bg-[#f8fafc] px-4 py-[120px] md:px-12">
      <div class="reveal-item mx-auto max-w-[1200px]">
        <div class="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p class="section-tag">{{ t('home.landing.content.tag') }}</p>
            <h2 class="font-head text-[clamp(20px,4.5vw,42px)] font-bold leading-[1.1] tracking-[-0.02em] md:text-[clamp(26px,3vw,42px)]">
              {{ t('home.landing.content.titleLine1') }}<br>{{ t('home.landing.content.titleLine2') }}
            </h2>
          </div>
          <router-link to="/artigos" class="btn-ghost">{{ t('home.landing.content.viewAll') }}</router-link>
        </div>
        <div class="grid gap-6 md:grid-cols-3">
          <template v-if="isLoadingArtigos">
            <div
              v-for="n in 3" :key="'art-sk-' + n"
              class="block overflow-hidden rounded-xl border border-[#dbe3ef] bg-white animate-pulse"
            >
              <div class="h-[180px] bg-[#e2e8f0]"></div>
              <div class="space-y-3 p-6">
                <div class="h-3 w-20 rounded bg-[#e2e8f0]"></div>
                <div class="h-5 w-full rounded bg-[#e2e8f0]"></div>
                <div class="h-4 w-full rounded bg-[#e2e8f0]"></div>
              </div>
            </div>
          </template>
          <router-link
            v-else
            v-for="post in artigosPreview" :key="post.id"
            :to="{ name: 'ArtigoDetalhe', params: { id: post.id } }"
            class="home-article-card block cursor-pointer overflow-hidden rounded-xl border border-[#dbe3ef] bg-white no-underline hover:border-[#00C6FE]/30 hover:shadow-[0_18px_40px_-20px_rgba(0,198,254,0.45)]"
          >
            <article class="h-full">
              <div class="relative h-[180px] overflow-hidden bg-[#f1f5f9]">
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
                <h3 class="mb-3 font-head text-[17px] font-semibold leading-[1.3] text-[#0f172a] line-clamp-2">{{ post.title }}</h3>
                <p class="text-[13px] leading-[1.6] text-[#475569] line-clamp-3">{{ post.excerpt }}</p>
              </div>
            </article>
          </router-link>
        </div>
      </div>
    </div>

    <!-- ── PATROCINADORES (destaque) ──────────────────── -->
    <div class="sponsors-section bg-white px-4 py-28 text-center md:px-12 md:py-32">
      <div class="reveal-item mx-auto max-w-[1200px]">
        <p class="section-tag mx-auto mb-5 w-fit justify-center">{{ t('home.landing.sponsors.tag') }}</p>
        <h2 class="font-head text-[clamp(22px,5vw,52px)] font-bold leading-[1.1] tracking-[-0.02em] mb-4 md:text-[clamp(28px,4vw,52px)]">
          {{ t('home.landing.sponsors.titleLine1') }}<br>
          <span class="text-[#00C6FE]">{{ t('home.landing.sponsors.titleHighlight') }}</span>
        </h2>
        <p class="mx-auto mb-14 max-w-[640px] text-[15px] leading-relaxed text-[#334155]/80 md:mb-16 md:text-base">
          {{ t('home.landing.sponsors.subtitle') }}
        </p>
        <div class="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-12">
          <template v-if="isLoadingAfiliados">
            <div
              v-for="n in 4" :key="'pt-sk-' + n"
              class="sponsor-logo-card sponsor-logo-card--skeleton flex min-h-[10rem] w-[12rem] animate-pulse items-center justify-center sm:w-[14rem] md:min-h-[11rem] md:w-[16rem]"
            />
          </template>
          <template v-else-if="patrocinadoresHome.length">
            <template v-for="p in patrocinadoresHome" :key="p.id">
              <a
                v-if="p.linkRedirect"
                :href="p.linkRedirect"
                target="_blank"
                rel="noopener noreferrer"
                class="sponsor-logo-card flex min-h-[10rem] w-[12rem] cursor-pointer items-center justify-center sm:w-[14rem] md:min-h-[11rem] md:w-[16rem]"
              >
                <img
                  v-if="p.imagemUrl"
                  :src="p.imagemUrl"
                  :alt="p.nome || t('home.landing.sponsors.altLogo')"
                  class="max-h-[6rem] w-full max-w-[14rem] object-contain sm:max-h-28 md:max-h-32 md:max-w-[15rem]"
                />
                <span v-else class="font-head px-2 text-center text-sm font-bold tracking-[0.06em] text-[#475569] md:text-base">{{ p.nome }}</span>
              </a>
              <div
                v-else
                class="sponsor-logo-card flex min-h-[10rem] w-[12rem] items-center justify-center sm:w-[14rem] md:min-h-[11rem] md:w-[16rem]"
              >
                <img
                  v-if="p.imagemUrl"
                  :src="p.imagemUrl"
                  :alt="p.nome || t('home.landing.sponsors.altLogo')"
                  class="max-h-[6rem] w-full max-w-[14rem] object-contain sm:max-h-28 md:max-h-32 md:max-w-[15rem]"
                />
                <span v-else class="font-head px-2 text-center text-sm font-bold tracking-[0.06em] text-[#475569] md:text-base">{{ p.nome }}</span>
              </div>
            </template>
          </template>
          <p v-else class="w-full text-sm text-[#64748b]">{{ t('home.landing.sponsors.empty') }}</p>
        </div>
      </div>
    </div>

    <!-- ── APOIO INSTITUCIONAL (secundário) ───────────── -->
    <div class="border-t border-[#dbe3ef] bg-[#f8fafc] px-4 py-14 text-center md:px-12 md:py-16">
      <div class="reveal-item mx-auto max-w-[1000px]">
        <p class="mb-2 font-head text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748b]">
          {{ t('home.landing.support.tag') }}
        </p>
        <p class="mb-8 text-[13px] leading-relaxed text-[#64748b]/90 md:text-sm">{{ t('home.landing.support.subtitle') }}</p>
        <div class="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <template v-if="isLoadingAfiliados">
            <div
              v-for="n in 4" :key="'ap-sk-' + n"
              class="flex min-h-[4.5rem] w-[7.5rem] animate-pulse items-center justify-center rounded-lg border border-[#e2e8f0] bg-white/80 sm:w-[8.5rem] md:min-h-[5rem] md:w-[9.5rem]"
            />
          </template>
          <template v-else-if="apoiadoresHome.length">
            <template v-for="a in apoiadoresHome" :key="a.id">
              <a
                v-if="a.linkRedirect"
                :href="a.linkRedirect"
                target="_blank"
                rel="noopener noreferrer"
                class="flex min-h-[4.5rem] w-[7.5rem] cursor-pointer items-center justify-center rounded-lg border border-[#e2e8f0] bg-white/80 px-3 py-3 opacity-90 transition-opacity duration-200 hover:opacity-100 sm:w-[8.5rem] md:min-h-[5rem] md:w-[9.5rem]"
              >
                <img
                  v-if="a.imagemUrl"
                  :src="a.imagemUrl"
                  :alt="a.nome || t('home.landing.support.altLogo')"
                  class="max-h-[2.75rem] w-full max-w-[8rem] object-contain md:max-h-12"
                />
                <span v-else class="font-head px-1 text-center text-[10px] font-semibold tracking-[0.05em] text-[#94a3b8] md:text-[11px]">{{ a.nome }}</span>
              </a>
              <div
                v-else
                class="flex min-h-[4.5rem] w-[7.5rem] items-center justify-center rounded-lg border border-[#e2e8f0] bg-white/80 px-3 py-3 opacity-90 sm:w-[8.5rem] md:min-h-[5rem] md:w-[9.5rem]"
              >
                <img
                  v-if="a.imagemUrl"
                  :src="a.imagemUrl"
                  :alt="a.nome || t('home.landing.support.altLogo')"
                  class="max-h-[2.75rem] w-full max-w-[8rem] object-contain md:max-h-12"
                />
                <span v-else class="font-head px-1 text-center text-[10px] font-semibold tracking-[0.05em] text-[#94a3b8] md:text-[11px]">{{ a.nome }}</span>
              </div>
            </template>
          </template>
          <p v-else class="w-full text-xs text-[#94a3b8]">{{ t('home.landing.support.empty') }}</p>
        </div>
        <router-link to="/contato" class="btn-ghost mx-auto mt-8 inline-flex text-[11px] md:text-[12px]">{{ t('home.landing.support.cta') }}</router-link>
      </div>
    </div>

    <!-- ── FINAL CTA ────────────────────────────────────── -->
    <section
      class="final-cta relative overflow-hidden bg-[#f1f5f9] px-4 py-28 md:px-12 md:py-36"
      role="region"
      aria-labelledby="final-cta-heading"
    >
      <div class="final-cta-grid pointer-events-none absolute inset-0" aria-hidden="true"></div>
      <div class="final-cta-orb final-cta-orb--lime pointer-events-none absolute" aria-hidden="true"></div>
      <div class="final-cta-orb final-cta-orb--cyan pointer-events-none absolute" aria-hidden="true"></div>
      <div class="final-cta-line final-cta-line--top pointer-events-none absolute inset-x-0 top-0" aria-hidden="true"></div>
      <div class="final-cta-line final-cta-line--bottom pointer-events-none absolute inset-x-0 bottom-0" aria-hidden="true"></div>

      <div class="reveal-item relative mx-auto max-w-[820px] text-center">


        <h2
          id="final-cta-heading"
          class="final-cta-title mt-9 font-head text-[clamp(24px,6.5vw,68px)] font-bold leading-[0.98] tracking-[-0.025em] text-[#0f172a] md:text-[clamp(32px,5.5vw,68px)]"
        >
          {{ t('home.landing.cta.titleBefore') }}<br/>
          <span class="final-cta-highlight relative inline-block">
            {{ t('home.landing.cta.titleHighlight') }}
            <span class="final-cta-underline" aria-hidden="true"></span>
          </span>
        </h2>

        <p class="mx-auto mt-7 max-w-[560px] text-[14px] leading-[1.68] text-[#334155]/80 sm:text-[15px] md:text-[16px] md:leading-[1.75]">
          {{ t('home.landing.cta.subtitle') }}
        </p>

        <div class="final-cta-actions mx-auto mt-10 flex w-full max-w-[420px] flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
          <a
            href="https://admin.fitcert365.com/register" target="_blank" rel="noopener noreferrer"
            class="final-cta-primary btn btn-lime inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 no-underline sm:w-auto"
          >
            <span class="relative">{{ t('home.landing.cta.register') }}</span>
            <svg class="btn-chevron-end relative h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a
            href="https://admin.fitcert365.com/login" target="_blank" rel="noopener noreferrer"
            class="final-cta-secondary btn btn-outline-inverted inline-flex min-h-[52px] w-full items-center justify-center gap-2 no-underline sm:w-auto"
          >
            <svg class="final-cta-secondary-icon h-4 w-4 shrink-0 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
              <polyline points="10 17 15 12 10 7"/>
              <line x1="15" y1="12" x2="3" y2="12"/>
            </svg>
            {{ t('home.landing.cta.login') }}
          </a>
        </div>

        <p class="mt-7 font-head text-[11px] font-bold uppercase tracking-[0.16em] text-[#64748b]">
          {{ t('home.landing.cta.note') }}
        </p>
      </div>
    </section>

    <!-- Modal de cadastro: abre após 5s na Home; não reaparece se fechar (X) ou concluir cadastro (localStorage) -->
    <ModalParabens />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import Carousel from 'primevue/carousel'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import EventoService from '../services/Eventos/eventos-services'
import ArtigoService from '../services/Artigos/artigos-service'
import PlanosService from '../services/planos/planos-service'
import { useI18n } from '../composables/useI18n'
import AfiliadoService from '../services/Afiliados/afiliado-service'
import ModalParabens from '../components/modalParabens.vue'
import homeScreenImg from '../assets/home-imgs/homeScreen.jpg'

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

const marqueeTrackRef = ref(null)
const marqueeSegmentRef = ref(null)
// Quantas cópias do segmento renderizar. Inicia em 4 (seguro p/ desktop comum)
// e é recalculado dinamicamente no setup com base em viewport / largura do segmento,
// garantindo que o track tenha sempre pelo menos 2x a viewport — sem isso, em telas
// largas o final do último segmento entra em viewport e causa espaço vazio antes do reset.
const marqueeCopyCount = ref(4)
let marqueeGsapTween = null
let marqueeResizeObserver = null
let marqueeDebounceTimer = 0

// Function ref para o primeiro segmento — precisamos atribuir em `.value`
// porque atribuição direta no template do Vue 3 não funciona em refs reactive.
function bindMarqueeSegment(el, copyIdx) {
  if (copyIdx === 1) marqueeSegmentRef.value = el
}

function debouncedSetupMarqueeGsap() {
  if (marqueeDebounceTimer) window.clearTimeout(marqueeDebounceTimer)
  marqueeDebounceTimer = window.setTimeout(() => {
    marqueeDebounceTimer = 0
    setupMarqueeGsap()
  }, 100)
}

/** Marquee infinito: anima o track em x = −largura do 1.º segmento (cópia idêntica em seguida). */
function setupMarqueeGsap() {
  if (typeof window === 'undefined') return
  const track = marqueeTrackRef.value
  const segment = marqueeSegmentRef.value
  if (!track || !segment) return
  const rawW = segment.getBoundingClientRect().width
  if (!Number.isFinite(rawW) || rawW < 4) return
  // Largura arredondada para evitar drift sub-pixel entre o segmento real
  // e a sua cópia "fantasma" (que causa o salto visível ao reiniciar).
  const w = Math.round(rawW)

  // Garante cópias suficientes: precisamos que o track tenha pelo menos
  // 2x a largura da viewport, para que durante todo o ciclo (incluindo o
  // final, em x = -w) NUNCA exista espaço vazio à direita visível.
  const viewportW = window.innerWidth || document.documentElement.clientWidth || 0
  const desiredCopies = Math.max(3, Math.ceil((viewportW * 2) / w) + 1)
  if (desiredCopies !== marqueeCopyCount.value) {
    marqueeCopyCount.value = desiredCopies
    // Aguarda o re-render antes de criar o tween para que o track tenha a largura nova.
    nextTick(() => requestAnimationFrame(() => setupMarqueeGsap()))
    return
  }

  // Preserva progresso atual ao recriar (resize, troca de idioma, fontes
  // terminando de carregar) — evita pulo visível ao re-medir.
  const prevProgress = marqueeGsapTween?.progress?.() ?? 0
  marqueeGsapTween?.kill()
  marqueeGsapTween = null

  const pxPerSecond = 42
  const duration = Math.max(12, Math.min(48, w / pxPerSecond))

  // Wrap matemático puro: garante x sempre dentro de [-w, 0), eliminando
  // qualquer salto no momento do repeat. Mantém o loop verdadeiramente seamless.
  const wrap = gsap.utils.wrap(-w, 0)

  marqueeGsapTween = gsap.fromTo(
    track,
    { x: 0, force3D: true },
    {
      x: -w,
      duration,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: (val) => wrap(parseFloat(val)) + 'px',
      },
    }
  )

  if (prevProgress > 0 && prevProgress < 1) {
    marqueeGsapTween.progress(prevProgress)
  }
}

function initMarqueeLayoutWatchers() {
  if (typeof window === 'undefined') return
  marqueeResizeObserver?.disconnect()
  marqueeResizeObserver = null
  const seg = marqueeSegmentRef.value
  if (!seg || typeof ResizeObserver === 'undefined') return
  marqueeResizeObserver = new ResizeObserver(() => debouncedSetupMarqueeGsap())
  marqueeResizeObserver.observe(seg)
  // Resize de janela já é tratado pelo `window.addEventListener('resize', ...)`
  // registrado em onMounted, que também reentra em setupMarqueeGsap → recalcula cópias.
}

function runMarqueeAfterLayout() {
  nextTick(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setupMarqueeGsap()
        initMarqueeLayoutWatchers()
      })
    })
  })
}

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

/** Carrosséis em mobile + tablet (abaixo de lg / 1024px); grid só em lg+. */
const HOME_LAYOUT_MOBILE_MQ = '(max-width: 1023px)'
const isMobileHomeLayout = ref(
  typeof window !== 'undefined' && window.matchMedia(HOME_LAYOUT_MOBILE_MQ).matches
)
/** Autoplay 3s nos carrosséis compactos; 0 se prefers-reduced-motion. */
const homeCarouselAutoplayMs = ref(3000)
/** Sincroniza indicadores PrimeVue (página ativa) com autoplay e toque. */
const featuresCarouselPage = ref(0)
const plansCarouselPage = ref(0)

let homeLayoutMediaQuery = null
function syncHomeLayoutFromMq() {
  if (!homeLayoutMediaQuery) return
  isMobileHomeLayout.value = homeLayoutMediaQuery.matches
}

watch(isMobileHomeLayout, () => {
  featuresCarouselPage.value = 0
  plansCarouselPage.value = 0
  nextTick(() => ScrollTrigger.refresh())
})

// ── Freemium bullets ─────────────────────────────────────
const freemiumBullets = [
  {
    titleKey: 'home.landing.freemium.bullet1Title',
    descKey: 'home.landing.freemium.bullet1Desc',
    icon: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
  },
  {
    titleKey: 'home.landing.freemium.bullet2Title',
    descKey: 'home.landing.freemium.bullet2Desc',
    icon: '<path d="M9 12l2 2 4-4"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  },
  {
    titleKey: 'home.landing.freemium.bullet3Title',
    descKey: 'home.landing.freemium.bullet3Desc',
    icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
  },
  {
    titleKey: 'home.landing.freemium.bullet4Title',
    descKey: 'home.landing.freemium.bullet4Desc',
    icon: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
  },
]

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

function translatePlanoApiField(plano, field) {
  const id = plano?.id
  if (!id) return field === 'nome' ? plano?.nome : plano?.descricao
  const key = `home.landing.plans.api.planos.${id}.${field}`
  const out = t(key)
  return out === key ? (field === 'nome' ? plano?.nome : plano?.descricao) : out
}

function planTranslatedName(plano) {
  return translatePlanoApiField(plano, 'nome')?.trim() || t('home.landing.plans.fallbackName')
}

function planTranslatedDescription(plano) {
  return translatePlanoApiField(plano, 'descricao')?.trim() || t('home.landing.plans.fallbackDescription')
}

function translateBeneficioDescricao(row) {
  const bid = row?.beneficio?.id
  const fallback = String(row?.beneficio?.descricao ?? '').trim()
  if (!bid) return fallback
  const key = `home.landing.plans.api.beneficios.${bid}`
  const out = t(key)
  return out === key ? fallback : out
}

/** Lista de benefícios incluídos com texto traduzido e chave estável para o v-for. */
function includedBenefits(plano) {
  return (plano?.planoBeneficio || [])
    .filter((item) => item?.incluso)
    .map((item) => ({
      key: item.beneficio?.id || item.beneficioId || item.id,
      label: translateBeneficioDescricao(item),
    }))
    .filter((x) => x.label)
}

/** Plano Freemium: já tem secção dedicada na home — não listar nos cards. */
function isFreemiumPlano(plano) {
  if (!plano) return false
  if (plano.gratuito === true || plano.isFreemium === true) return true
  const s = (v) => String(v ?? '').toLowerCase()
  const blob = [s(plano.nome), s(plano.en_nome), s(plano.slug), s(plano.codigo), s(plano.tipo), s(plano.descricao)].join(' ')
  return blob.includes('freemium')
}

const planosHomeDisplay = computed(() => planosPreview.value.filter((p) => !isFreemiumPlano(p)))

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

/** Entrada dos cards de plano após a API (o DOM não existe no primeiro paint do mount). */
const planosEntranceAnimated = ref(false)
watch(
  planosHomeDisplay,
  async (list) => {
    if (!list?.length || planosEntranceAnimated.value) return
    planosEntranceAnimated.value = true
    await nextTick()
    ScrollTrigger.refresh()
    gsap.from('.home-plans-stage .plan-card', {
      opacity: 0,
      y: 32,
      scale: 0.97,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
      clearProps: 'opacity,transform',
      scrollTrigger: { trigger: '.home-plans-stage', start: 'top 88%', once: true },
    })
    requestAnimationFrame(() => ScrollTrigger.refresh())
  },
  { flush: 'post' }
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
  if (false) {
    homeCarouselAutoplayMs.value = 0
  }

  homeLayoutMediaQuery = window.matchMedia(HOME_LAYOUT_MOBILE_MQ)
  syncHomeLayoutFromMq()
  homeLayoutMediaQuery.addEventListener('change', syncHomeLayoutFromMq)

  loadEventosPreview()
  loadArtigosPreview()
  loadingAfiliadosPreview()
  loadPlanosPreview()

  const reduceMotion = false

  // Hero timeline
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  heroTl.from('.hero-item', {
    opacity: 0, y: 30, duration: 0.85, stagger: 0.14,
  })

  // Hero parallax (background image)
  if (!reduceMotion) {
    gsap.to('.hero-bg', {
      yPercent: 14,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-bg',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }

  // Scroll reveal
  gsap.utils.toArray('.reveal-item').forEach(el => {
    gsap.from(el, {
      opacity: 0, y: 32, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    })
  })

  // Stagger inside feature bar (grid desktop ou slides mobile)
  gsap.from('.home-features-stage .feature-bar-card', {
    opacity: 0, y: 28, duration: 0.7, stagger: 0.12, ease: 'power3.out',
    clearProps: 'opacity,transform',
    scrollTrigger: { trigger: '.home-features-stage', start: 'top 90%', once: true },
  })

  // Freemium bullets stagger
  gsap.from('.freemium-bullet', {
    opacity: 0, y: 24, duration: 0.65, stagger: 0.1, ease: 'power3.out',
    clearProps: 'opacity,transform',
    scrollTrigger: { trigger: '.freemium-bullets', start: 'top 92%', once: true },
  })

  if (!reduceMotion) {
    // Phone mockup floating + tilt loop
    gsap.to('.phone-mockup', {
      y: -14, duration: 3.4, ease: 'sine.inOut', yoyo: true, repeat: -1,
    })
    gsap.to('.phone-frame', {
      rotate: 1.4, duration: 5, ease: 'sine.inOut', yoyo: true, repeat: -1,
    })

    // Decor floating dots around phone
    gsap.to('.metrics-decor--1', { y: -22, x: 14, duration: 3.8, ease: 'sine.inOut', yoyo: true, repeat: -1 })
    gsap.to('.metrics-decor--2', { y: 18, x: -12, duration: 4.6, ease: 'sine.inOut', yoyo: true, repeat: -1 })
    gsap.to('.metrics-decor--3', { y: -14, x: -16, duration: 5.2, ease: 'sine.inOut', yoyo: true, repeat: -1 })

  }

  runMarqueeAfterLayout()
  document.fonts?.ready?.then(() => runMarqueeAfterLayout())
  window.addEventListener('resize', debouncedSetupMarqueeGsap)
})

onUnmounted(() => {
  homeLayoutMediaQuery?.removeEventListener('change', syncHomeLayoutFromMq)
  window.removeEventListener('resize', debouncedSetupMarqueeGsap)
  if (marqueeDebounceTimer) window.clearTimeout(marqueeDebounceTimer)
  marqueeDebounceTimer = 0
  marqueeResizeObserver?.disconnect()
  marqueeResizeObserver = null
  marqueeGsapTween?.kill()
  marqueeGsapTween = null
})

watch(marqueeItems, () => {
  runMarqueeAfterLayout()
})

watch(currentLocale, () => {
  featuresCarouselPage.value = 0
  plansCarouselPage.value = 0
  loadArtigosPreview()
  loadEventosPreview()
  loadPlanosPreview()
  runMarqueeAfterLayout()
})
</script>

<style scoped lang="postcss">
@reference "../style.css";

/* ── Home: tokens de botão (efeito / animação unificados) ── */
.home-landing {
  --home-btn-radius: 8px;
  --home-btn-duration: 0.22s;
  --home-btn-ease: cubic-bezier(0.2, 0.8, 0.2, 1);
  --home-btn-lift: translateY(-1px);
  --home-btn-press: scale(0.98);
}

/* Marquee: animação em GSAP — evitar encolher segmentos no flex */
.marquee-track {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.marquee-segment {
  min-width: min-content;
  transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

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

/* Buttons — base + variantes (mesma curva, lift, foco, brilho nos preenchidos) */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: var(--home-btn-radius);
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
    transform var(--home-btn-duration) var(--home-btn-ease),
    box-shadow var(--home-btn-duration) var(--home-btn-ease),
    border-color var(--home-btn-duration) var(--home-btn-ease),
    background-color var(--home-btn-duration) var(--home-btn-ease),
    color var(--home-btn-duration) var(--home-btn-ease);
}
.btn:focus-visible {
  outline: 2px solid #00c6fe;
  outline-offset: 3px;
}
.btn:active:not(:disabled) {
  transform: var(--home-btn-press);
}
.btn-outline {
  background: transparent;
  border-color: rgba(255, 255, 255, 0.22);
  color: #fff;
}
.btn-outline:hover {
  border-color: #00c6fe;
  color: #00c6fe;
  transform: var(--home-btn-lift);
  box-shadow: 0 10px 28px -14px rgba(0, 198, 254, 0.35);
}
.btn-primary {
  background: #00c6fe;
  color: #060606;
}
.btn-primary:hover {
  transform: var(--home-btn-lift);
  background: #22d4ff;
  box-shadow: 0 12px 32px -16px rgba(0, 198, 254, 0.45);
}
.btn-lime {
  padding: 14px 28px;
  font-size: 14px;
  letter-spacing: 0.06em;
  background: #88ce0d;
  color: #060606;
}
.btn-lime:hover {
  transform: var(--home-btn-lift);
  background: #9dea0f;
  box-shadow: 0 18px 40px -12px rgba(136, 206, 13, 0.55);
}
.btn-dark {
  padding: 14px 28px;
  font-size: 14px;
  background: #88ce0d;
  color: #fff;
}
.btn-dark:hover {
  transform: var(--home-btn-lift);
  background: #1a1a1a;
}
.btn-white {
  padding: 14px 28px;
  font-size: 14px;
  background: #fff;
  color: #88ce0d;
}
.btn-white:hover {
  transform: var(--home-btn-lift);
  background: #f3f4f6;
  box-shadow: 0 14px 36px -18px rgba(255, 255, 255, 0.2);
}
.btn-ghost {
  display: inline-flex;
  align-items: center;
  border-radius: var(--home-btn-radius);
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
}
.btn-ghost:hover {
  background: #00c6fe;
  color: #060606;
  transform: var(--home-btn-lift);
  box-shadow: 0 12px 32px -18px rgba(0, 198, 254, 0.4);
}
.btn-ghost:focus-visible {
  outline-color: #88ce0d;
}

/* Contorno claro em fundo branco / cards de plano */
.btn-surface {
  border-color: #d1d7e4;
  background: #fff;
  color: #1f2937;
}
.btn-surface:hover {
  transform: var(--home-btn-lift);
  border-color: #b8c0d4;
  background: #f8fafc;
  box-shadow: 0 12px 30px -20px rgba(17, 24, 39, 0.35);
}
.btn-surface:focus-visible {
  outline-color: #88ce0d;
}

/* Secundário em fundo escuro (ex.: CTA final) */
.btn-outline-inverted {
  border-color: #cbd5e1;
  background: transparent;
  color: #0f172a;
}
.btn-outline-inverted:hover {
  border-color: #00c6fe;
  color: #00c6fe;
  background: rgba(0, 198, 254, 0.08);
  transform: var(--home-btn-lift);
  box-shadow: 0 12px 32px -20px rgba(0, 198, 254, 0.25);
}
.btn-outline-inverted:focus-visible {
  outline-color: #88ce0d;
}

/* Mobile: botões da landing menores (exc. CTAs dos cards de plano) */
@media (max-width: 767px) {
  .home-landing .btn:not(.plan-card__cta) {
    font-size: 11px;
    padding: 9px 16px;
    min-height: 42px;
    letter-spacing: 0.05em;
  }
  .home-landing .btn-lime:not(.plan-card__cta),
  .home-landing .btn-dark:not(.plan-card__cta),
  .home-landing .btn-white:not(.plan-card__cta) {
    font-size: 11px;
    padding: 10px 18px;
    letter-spacing: 0.05em;
  }
  .home-landing .btn-ghost:not(.plan-card__cta) {
    font-size: 11px;
    padding: 7px 14px;
  }
  .home-landing .final-cta-primary.btn,
  .home-landing .final-cta-secondary.btn {
    min-height: 46px;
    font-size: 11px;
    padding-left: 16px;
    padding-right: 16px;
  }
}

.btn-chevron-end {
  transition: transform 0.25s var(--home-btn-ease);
}
.btn-lime:hover .btn-chevron-end {
  transform: translateX(4px);
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
  font-size: clamp(22px, 5vw, 46px);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #111827;
}
@media (min-width: 768px) {
  .plans-title {
    font-size: clamp(28px, 4vw, 46px);
  }
}

.plans-title > span {
  color: #88ce0d;
}

.plans-subtitle {
  margin-top: 14px;
  max-width: 700px;
  font-size: 14px;
  line-height: 1.58;
  color: #4b5565;
}
@media (min-width: 640px) {
  .plans-subtitle {
    font-size: 15px;
    line-height: 1.6;
  }
}

.plan-card-skeleton {
  width: 100%;
}

.plan-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 560px;
  overflow: visible;
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
  z-index: 5;
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
  font-size: clamp(26px, 6vw, 37px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.025em;
}
@media (min-width: 1024px) {
  .plan-card__name {
    font-size: 37px;
  }
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
  font-size: 26px;
  font-weight: 600;
  line-height: 1;
}
@media (min-width: 640px) {
  .plan-card__currency {
    font-size: 30px;
  }
}
@media (min-width: 1024px) {
  .plan-card__currency {
    font-size: 33px;
  }
}

.plan-card__price {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(40px, 11vw, 62px);
  font-weight: 700;
  line-height: 0.92;
  letter-spacing: -0.03em;
}
@media (min-width: 1024px) {
  .plan-card__price {
    font-size: 62px;
  }
}

.plan-card__period {
  margin-bottom: 6px;
  font-size: 17px;
  font-weight: 500;
  line-height: 1;
  opacity: 0.84;
}
@media (min-width: 640px) {
  .plan-card__period {
    font-size: 20px;
  }
}
@media (min-width: 1024px) {
  .plan-card__period {
    font-size: 22px;
  }
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

/* CTA dos cards de plano: texto menor; bloco centrado, linhas quebradas alinhadas à esquerda */
.plan-card__cta.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 28px 28px;
  align-self: stretch;
  width: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 11px;
  letter-spacing: 0.06em;
  line-height: 1.25;
  text-align: center;
}
.plan-card__cta-label {
  display: inline-block;
  max-width: 100%;
  text-align: left;
  font-size: inherit;
  letter-spacing: inherit;
  vertical-align: middle;
}
.plan-card__cta.btn-surface {
  font-size: 10px;
  letter-spacing: 0.07em;
}
.plan-card__cta.btn-lime {
  font-size: 11px;
  letter-spacing: 0.05em;
  border-color: rgba(136, 206, 13, 0.34);
}

/* ── Freemium Section ────────────────────────────── */
.freemium-kicker {
  margin-bottom: 18px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #88ce0d;
}
.freemium-kicker::before {
  content: '';
  width: 22px;
  height: 1.5px;
  background: #88ce0d;
}

.freemium-grid {
  background-image:
    linear-gradient(rgba(136, 206, 13, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(136, 206, 13, 0.05) 1px, transparent 1px);
  background-size: 90px 90px;
  mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 75%);
}

.freemium-badge {
  position: relative;
  padding: 8px 16px 8px 14px;
  border-radius: 999px;
  border: 1px solid rgba(136, 206, 13, 0.28);
  background: rgba(136, 206, 13, 0.08);
}
.freemium-badge-pulse {
  position: relative;
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #88ce0d;
  box-shadow: 0 0 0 0 rgba(136, 206, 13, 0.55);
  animation: freemium-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes freemium-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(136, 206, 13, 0.55); }
  50%      { box-shadow: 0 0 0 10px rgba(136, 206, 13, 0); }
}

.freemium-highlight {
  white-space: nowrap;
}
.freemium-underline {
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 8px;
  background: linear-gradient(90deg, rgba(136, 206, 13, 0.55), rgba(0, 198, 254, 0.45));
  border-radius: 4px;
  transform-origin: left center;
  transform: scaleX(0);
  animation: freemium-underline-grow 1.4s cubic-bezier(0.65, 0.05, 0.36, 1) 0.5s forwards;
  filter: blur(2px);
  opacity: 0.7;
}
@keyframes freemium-underline-grow {
  to { transform: scaleX(1); }
}

/* Freemium bullet card (no Tailwind transition-all to avoid GSAP fight) */
.freemium-bullet {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid #dbe3ef;
  background: #ffffff;
  padding: 24px;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    background-color 0.3s ease,
    box-shadow 0.3s ease;
}
.freemium-bullet:hover {
  transform: translateY(-4px);
  border-color: rgba(136, 206, 13, 0.32);
  background: #f8fafc;
  box-shadow: 0 14px 36px -18px rgba(136, 206, 13, 0.35);
}
.freemium-bullet-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(0, 198, 254, 0.08), transparent);
  transform: translateX(-100%);
  transition: transform 0.7s ease;
  pointer-events: none;
}
.freemium-bullet:hover .freemium-bullet-shine {
  transform: translateX(100%);
}
.freemium-bullet-icon {
  margin-bottom: 16px;
  display: flex;
  height: 44px;
  width: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid rgba(136, 206, 13, 0.25);
  background: rgba(136, 206, 13, 0.1);
  color: #88ce0d;
  transition: transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease;
}
.freemium-bullet:hover .freemium-bullet-icon {
  transform: scale(1.1);
  border-color: rgba(136, 206, 13, 0.5);
  background: rgba(136, 206, 13, 0.18);
}

/* ── Brilho periódico (apenas botões preenchidos lime / white) ── */
.btn-lime,
.btn-white {
  position: relative;
  overflow: hidden;
  isolation: isolate;
}
.btn-lime::before,
.btn-white::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    110deg,
    transparent 30%,
    rgba(255, 255, 255, 0.55) 48%,
    rgba(255, 255, 255, 0.7) 50%,
    rgba(255, 255, 255, 0.55) 52%,
    transparent 70%
  );
  transform: translateX(-120%);
  animation: cta-shine 3.6s ease-in-out infinite;
  pointer-events: none;
  z-index: 1;
  mix-blend-mode: overlay;
}
.btn-lime > *,
.btn-white > * {
  position: relative;
  z-index: 2;
}
@keyframes cta-shine {
  0%   { transform: translateX(-120%); }
  55%  { transform: translateX(120%); }
  100% { transform: translateX(120%); }
}
/* ── Featured plan card: destaque estático (sem animações infinitas) ─ */
.plan-card--featured {
  position: relative;
  overflow: visible;
  border-color: rgba(136, 206, 13, 0.55);
  border-width: 1.5px;
  transform: translateZ(0);
  box-shadow:
    0 0 0 1px rgba(136, 206, 13, 0.25),
    0 22px 48px -22px rgba(136, 206, 13, 0.32),
    0 28px 64px -28px rgba(8, 12, 26, 0.55);
}
@media (min-width: 1024px) {
  .plan-card--featured {
    transform: translateY(-6px);
  }
}

/* ── App store badges (seção app) ──────────────── */
.home-store-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #1e293b;
  background: #0f172a;
  border-radius: 8px;
  transition: transform 0.2s ease, opacity 0.2s ease, filter 0.2s ease;
  opacity: 0.92;
}
.home-store-badge:hover {
  opacity: 1;
  transform: translateY(-1px);
  filter: drop-shadow(0 4px 14px rgba(0, 198, 254, 0.18));
}
.home-store-badge:focus-visible {
  outline: 2px solid #00c6fe;
  outline-offset: 3px;
}
.home-store-badge img {
  display: block;
}

/* ── Phone Mockup ────────────────────────────────── */
.phone-mockup {
  position: relative;
  width: 100%;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
  perspective: 1200px;
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.phone-mockup:hover {
  transform: scale(1.025);
}
.phone-mockup:hover .phone-frame {
  transform: rotateY(-6deg) rotateX(4deg);
}

.phone-glow {
  position: absolute;
  inset: clamp(-18px, -6vw, -40px);
  background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0, 198, 254, 0.22), transparent 60%);
  filter: blur(clamp(16px, 5vw, 30px));
  z-index: 0;
  animation: phone-glow-pulse 4s ease-in-out infinite;
  pointer-events: none;
}
@keyframes phone-glow-pulse {
  0%, 100% { opacity: 0.55; transform: scale(1); }
  50%      { opacity: 0.9;  transform: scale(1.06); }
}

.phone-frame {
  position: relative;
  width: 100%;
  border-radius: clamp(28px, 8vw, 42px);
  padding: clamp(5px, 1.8vw, 8px);
  background: linear-gradient(160deg, #1c1d22 0%, #0a0b0e 60%, #1a1b1f 100%);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.06),
    0 30px 60px -20px rgba(0, 0, 0, 0.7),
    inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  transform-style: preserve-3d;
}

.phone-island {
  position: absolute;
  top: clamp(14px, 4vw, 18px);
  left: 50%;
  transform: translateX(-50%);
  width: clamp(64px, 28%, 88px);
  height: clamp(18px, 5vw, 22px);
  background: #060606;
  border-radius: 999px;
  z-index: 5;
}

.phone-screen {
  position: relative;
  border-radius: clamp(24px, 7vw, 36px);
  background: #0a0b0e;
  min-height: clamp(420px, 120vw, 540px);
  overflow: hidden;
}

.phone-screen-img {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  object-fit: cover;
  object-position: top center;
}

/* Decor positioning */
.metrics-decor--1 { top: 14%;  left: 18%; }
.metrics-decor--2 { top: 28%;  right: 14%; }
.metrics-decor--3 { bottom: 22%; left: 14%; }

/* ── Carrosséis: indicadores dentro do PrimeVue (clicáveis + slide ativo) ── */
.home-features-carousel-wrap {
  position: relative;
  z-index: 2;
}

.home-features-carousel :deep(.p-carousel-indicator-list),
.home-plans-carousel :deep(.p-carousel-indicator-list) {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 14px;
  padding-bottom: 6px;
  margin: 0;
  list-style: none;
  position: relative;
  z-index: 6;
}

.home-features-carousel :deep(.p-carousel-indicator),
.home-plans-carousel :deep(.p-carousel-indicator) {
  display: flex;
}

.home-features-carousel :deep(.p-carousel-indicator-button),
.home-plans-carousel :deep(.p-carousel-indicator-button) {
  display: block;
  width: 10px;
  height: 10px;
  min-width: 10px;
  min-height: 10px;
  padding: 0;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  transition:
    width 0.25s ease,
    background-color 0.2s ease,
    opacity 0.2s ease;
}

.home-features-carousel :deep(.p-carousel-indicator-button) {
  background: rgba(6, 6, 6, 0.3);
  opacity: 1;
}

.home-features-carousel :deep(.p-carousel-indicator-active .p-carousel-indicator-button) {
  width: 28px;
  background: #060606;
}

.home-plans-carousel :deep(.p-carousel-prev-button),
.home-plans-carousel :deep(.p-carousel-next-button) {
  color: #111827;
}

.home-plans-carousel :deep(.p-carousel-indicator-button) {
  background: rgba(17, 24, 39, 0.28);
}

.home-plans-carousel :deep(.p-carousel-indicator-active .p-carousel-indicator-button) {
  width: 28px;
  background: #111827;
}

/*
 * Badge “Mais popular” (top: -12px) não entra na altura do fluxo — o viewport do
 * Carousel corta. Reserva padding no item + na stage; overflow visible só no item.
 */
.home-plans-stage {
  padding-top: 32px;
}

.home-plans-desktop {
  padding-top: 20px;
}

.home-plans-carousel :deep(.p-carousel-item) {
  overflow: visible;
  padding-top: 22px;
  box-sizing: border-box;
}

.home-plans-carousel :deep(.p-carousel-item-list) {
  overflow: visible;
}

/* Viewport: só liberta o eixo vertical para o badge; horizontal continua contido no carrossel */
.home-plans-carousel {
  max-width: 100%;
}
.home-plans-carousel :deep(.p-carousel-viewport) {
  overflow-x: hidden;
  overflow-y: visible;
}

.features-bar {
  background:
    linear-gradient(180deg, #f8fafc 0%, #f1f5f9 55%, #eef2f7 100%);
  border-top: 1px solid rgba(0, 198, 254, 0.14);
  border-bottom: 1px solid #dbe3ef;
}
.features-bar-grid {
  background-image:
    linear-gradient(rgba(0, 198, 254, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(136, 206, 13, 0.05) 1px, transparent 1px);
  background-size: 90px 90px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 85%);
  -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 85%);
}
.features-bar-spotlight {
  background: radial-gradient(ellipse 120% 80% at 50% -30%, rgba(0, 198, 254, 0.1), transparent 60%);
}
.features-bar-deco {
  border-radius: 999px;
  filter: blur(110px);
}
.features-bar-deco--1 {
  top: -140px; left: -120px; width: 380px; height: 380px;
  background: rgba(0, 198, 254, 0.1);
}
.features-bar-deco--2 {
  bottom: -160px; right: -120px; width: 420px; height: 420px;
  background: rgba(136, 206, 13, 0.1);
}

.feature-bar-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px 24px 26px;
  border-radius: 18px;
  border: 1px solid #dbe3ef;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.98) 100%),
    #ffffff;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow:
    0 14px 40px -24px rgba(15, 23, 42, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
  overflow: hidden;
  isolation: isolate;
  transition:
    transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
    border-color 0.3s ease,
    box-shadow 0.4s ease,
    background 0.4s ease;
}
.feature-bar-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  background: radial-gradient(ellipse 90% 60% at 50% 0%, rgba(0, 198, 254, 0.1), transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 0;
}
.feature-bar-card > * {
  position: relative;
  z-index: 1;
}
.feature-bar-card:hover {
  transform: translateY(-6px);
  border-color: rgba(0, 198, 254, 0.35);
  box-shadow:
    0 24px 60px -22px rgba(0, 198, 254, 0.22),
    0 0 0 1px rgba(0, 198, 254, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
}
.feature-bar-card:hover::before {
  opacity: 1;
}

.feature-bar-card__accent {
  position: absolute;
  top: 0; left: 24px; right: 24px;
  height: 2px;
  border-radius: 0 0 4px 4px;
  background: linear-gradient(90deg, #00C6FE, #88CE0D);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  z-index: 2;
}
.feature-bar-card:hover .feature-bar-card__accent {
  transform: scaleX(1);
}

.feature-bar-card__number {
  position: absolute;
  top: 18px;
  right: 22px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: rgba(15, 23, 42, 0.25);
  transition: color 0.3s ease;
  z-index: 2;
}
.feature-bar-card:hover .feature-bar-card__number {
  color: rgba(136, 206, 13, 0.85);
}

.feature-bar-card__icon-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(140deg, rgba(0, 198, 254, 0.18), rgba(0, 198, 254, 0.04));
  border: 1px solid rgba(0, 198, 254, 0.25);
  transition: transform 0.4s ease, background 0.4s ease, border-color 0.3s ease, box-shadow 0.4s ease;
}
.feature-bar-card:hover .feature-bar-card__icon-wrap {
  transform: scale(1.06) rotate(-3deg);
  background: linear-gradient(140deg, rgba(136, 206, 13, 0.22), rgba(136, 206, 13, 0.05));
  border-color: rgba(136, 206, 13, 0.4);
  box-shadow: 0 0 0 4px rgba(136, 206, 13, 0.06);
}
.feature-bar-card__icon {
  width: 26px;
  height: 26px;
  stroke: #00c6fe;
  transition: stroke 0.3s ease;
}
.feature-bar-card:hover .feature-bar-card__icon {
  stroke: #88ce0d;
}

.feature-bar-card__kicker {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(0, 198, 254, 0.85);
  transition: color 0.3s ease;
}
.feature-bar-card:hover .feature-bar-card__kicker {
  color: #88ce0d;
}
.feature-bar-card__title {
  margin-top: 2px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #0f172a;
  transition: color 0.3s ease;
}
@media (min-width: 768px) {
  .feature-bar-card__title {
    font-size: 19px;
  }
}
.feature-bar-card__desc {
  margin-top: 2px;
  font-size: 14px;
  line-height: 1.65;
  color: rgba(30, 41, 59, 0.78);
}

/* ── Final CTA ─────────────────────────────────────── */
.final-cta-grid {
  background-image:
    linear-gradient(rgba(136, 206, 13, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 198, 254, 0.04) 1px, transparent 1px);
  background-size: 100px 100px;
  mask-image: radial-gradient(ellipse 65% 65% at 50% 50%, #000 25%, transparent 80%);
  -webkit-mask-image: radial-gradient(ellipse 65% 65% at 50% 50%, #000 25%, transparent 80%);
}
.final-cta-orb {
  border-radius: 999px;
  filter: blur(110px);
}
.final-cta-orb--lime {
  width: 480px; height: 480px;
  top: 10%; left: -120px;
  background: rgba(136, 206, 13, 0.14);
}
.final-cta-orb--cyan {
  width: 520px; height: 520px;
  bottom: 5%; right: -140px;
  background: rgba(0, 198, 254, 0.10);
}
.final-cta-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(136, 206, 13, 0.35), rgba(0, 198, 254, 0.35), transparent);
}
.final-cta-line--top {
  top: 0;
}
.final-cta-line--bottom {
  bottom: 0;
  opacity: 0.65;
}

.final-cta-badge {
  padding: 9px 18px 9px 16px;
  border-radius: 999px;
  border: 1px solid rgba(136, 206, 13, 0.32);
  background: rgba(136, 206, 13, 0.08);
  box-shadow: 0 0 32px -8px rgba(136, 206, 13, 0.4);
}

.final-cta-highlight {
  background: linear-gradient(110deg, #88CE0D 20%, #00C6FE 70%, #88CE0D 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: final-cta-text-shift 6s linear infinite;
}
@keyframes final-cta-text-shift {
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}
.final-cta-underline {
  position: absolute;
  left: 0; bottom: -6px;
  width: 100%;
  height: 10px;
  background: linear-gradient(90deg, rgba(136, 206, 13, 0.4), rgba(0, 198, 254, 0.4));
  border-radius: 6px;
  transform-origin: left center;
  transform: scaleX(0);
  animation: freemium-underline-grow 1.4s cubic-bezier(0.65, 0.05, 0.36, 1) 0.5s forwards;
  filter: blur(3px);
  opacity: 0.6;
}

.final-cta-secondary-icon {
  transition: transform 0.25s var(--home-btn-ease), opacity 0.25s ease;
}
.final-cta-secondary:hover .final-cta-secondary-icon {
  transform: translateX(-3px);
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .freemium-badge-pulse,
  .freemium-underline,
  .btn-lime::before,
  .btn-white::before,
  .phone-glow {
    animation: none;
  }
  .final-cta-highlight {
    animation: none;
    background: linear-gradient(110deg, #88ce0d 0%, #00c6fe 100%);
    background-size: 100% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .final-cta-underline {
    animation: none;
    transform: scaleX(1);
  }
  .home-landing .btn:hover {
    transform: none;
  }
  .home-landing .btn:active {
    transform: none;
  }
  .btn-lime:hover .btn-chevron-end,
  .final-cta-secondary:hover .final-cta-secondary-icon {
    transform: none;
  }
}

/* ── Patrocinadores (destaque) ── */
.sponsors-section {
  position: relative;
  overflow: hidden;
}
.sponsors-section::before {
  content: '';
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: min(900px, 90vw);
  height: 360px;
  border-radius: 999px;
  background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0, 198, 254, 0.08), transparent 70%);
  pointer-events: none;
}
.sponsor-logo-card {
  position: relative;
  border-radius: 20px;
  border: 1px solid #dbe3ef;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  padding: 28px 24px;
  box-shadow:
    0 18px 48px -28px rgba(15, 23, 42, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  transition:
    transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1),
    border-color 0.3s ease,
    box-shadow 0.35s ease;
}
.sponsor-logo-card--skeleton {
  background: #f1f5f9;
  border-color: #e2e8f0;
  box-shadow: none;
}
.sponsor-logo-card:hover {
  transform: translateY(-6px);
  border-color: rgba(0, 198, 254, 0.45);
  box-shadow:
    0 28px 56px -24px rgba(0, 198, 254, 0.28),
    0 0 0 1px rgba(0, 198, 254, 0.08);
}
.sponsor-logo-card img {
  transition: transform 0.4s ease;
}
.sponsor-logo-card:hover img {
  transform: scale(1.04);
}

/* ── Cards de artigo: transi\u00e7\u00e3o por CSS puro ── */
.home-article-card {
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  will-change: transform;
}
.home-article-card:hover {
  transform: translateY(-4px);
}
.home-article-card img {
  transition: transform 0.6s ease;
}
.home-article-card:hover img {
  transform: scale(1.06);
}
</style>
