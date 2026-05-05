<template>
  <div class="art-page bg-[#060606] text-white font-body">
    <section
      class="art-hero-shell relative isolate flex min-h-[min(68vh,560px)] overflow-hidden pb-14 pt-24 md:min-h-[min(74vh,640px)] md:pb-16 md:pt-20"
    >
      <div class="art-hero-media pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src="/src/assets/artigos-imgs/banner-01.jpg"
          alt=""
          class="art-hero-bg pointer-events-none absolute left-0 right-0 top-[-8%] z-0 h-[116%] w-full max-w-none object-cover object-center"
        />
      </div>
      <div class="art-hero-overlay pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />
      <div class="art-hero-grid pointer-events-none absolute inset-0 z-[2]" aria-hidden="true" />

      <div class="relative z-[3] mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-4 md:px-12">
        <div class="art-hero-copy w-full max-w-[min(560px,100%)]">
          <p class="eyebrow">{{ t('artigos.heroEyebrow') }}</p>
          <h1
            class="art-hero-title font-head text-[clamp(30px,6vw,56px)] font-bold leading-[0.95] tracking-[-0.04em]"
          >
            {{ t('artigos.title') }}
            <span class="art-hero-title__dot" aria-hidden="true" />
          </h1>
          <p
            class="art-hero-lead mt-6 max-w-[480px] border-l-2 border-[#00C6FE] pl-5 text-[14px] leading-[1.7] text-white/65 sm:text-[15px]"
          >
            {{ t('artigos.subtitle') }}
          </p>
        </div>
      </div>

      <div
        class="pointer-events-none absolute bottom-0 left-0 right-0 z-[4] h-px bg-gradient-to-r from-transparent via-[#00C6FE]/50 to-transparent"
        aria-hidden="true"
      />
    </section>

    <section class="art-intro relative overflow-hidden border-t border-white/[0.06] bg-[#080808] py-16 md:py-24">
      <div class="art-intro-gridlines pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true" />

      <div class="relative z-[1] mx-auto max-w-[1200px] px-4 md:px-12">
        <header class="md:flex md:items-end md:justify-between md:gap-12">
          <div class="max-w-[560px]">
            <p class="art-intro-eyebrow font-head">{{ t('artigos.intro.eyebrow') }}</p>
            <h2
              class="mt-4 font-head text-[clamp(24px,3.8vw,40px)] font-bold leading-[1.1] tracking-[-0.03em] text-white"
            >
              {{ t('artigos.intro.title') }}
            </h2>
          </div>
          <p class="art-intro-lead mt-6 max-w-[480px] text-[15px] leading-[1.78] text-white/60 md:mt-0">
            {{ t('artigos.intro.lead') }}
          </p>
        </header>

        <ul class="art-intro-meta mt-10 grid gap-4 sm:grid-cols-3 md:mt-12">
          <li class="art-intro-meta__item">
            <span class="art-intro-meta__dot" aria-hidden="true" />
            <span class="art-intro-meta__text">{{ t('artigos.intro.meta1') }}</span>
          </li>
          <li class="art-intro-meta__item">
            <span class="art-intro-meta__dot art-intro-meta__dot--lime" aria-hidden="true" />
            <span class="art-intro-meta__text">{{ t('artigos.intro.meta2') }}</span>
          </li>
          <li class="art-intro-meta__item">
            <span class="art-intro-meta__dot" aria-hidden="true" />
            <span class="art-intro-meta__text">{{ t('artigos.intro.meta3') }}</span>
          </li>
        </ul>

        <div class="art-intro-divider mt-12 md:mt-14" aria-hidden="true" />
      </div>
    </section>

    <section class="relative scroll-mt-[88px] bg-[#080808] py-12 md:py-14">
      <div class="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <div
          class="h-full w-full"
          style="
            background-image:
              linear-gradient(rgba(0, 198, 254, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 198, 254, 0.45) 1px, transparent 1px);
            background-size: 48px 48px;
          "
        />
      </div>

      <div class="art-filters-wrap relative z-[1] mx-auto max-w-[1180px] px-4 md:px-8">
        <header class="mb-8 md:mb-10 md:flex md:items-end md:justify-between md:gap-8">
          <div>
            <p class="art-filters-eyebrow font-head">{{ t('artigos.heroEyebrow') }}</p>
            <h2
              class="mt-2 font-head text-[clamp(22px,3.4vw,34px)] font-bold leading-[1.1] tracking-[-0.03em] text-white"
            >
              {{ t('artigos.categorias') }}
            </h2>
          </div>
          <p class="art-filters-note mt-4 max-w-[360px] text-[13px] leading-relaxed text-white/45 md:mt-0 md:text-right">
            {{ t('artigos.subtitle') }}
          </p>
        </header>

        <div class="art-filters-panel">
          <div class="art-filters-fields">
            <div class="art-filters-field">
              <label class="art-filters-label font-head">{{ t('artigos.categorias') }}</label>
              <el-select
                v-model="categoriaIdSelecionada"
                class="art-filters-select"
                :placeholder="t('artigos.todasCategorias')"
                filterable
                clearable
                @change="onChangeCategoria"
              >
                <el-option
                  v-for="categoria in categoriasOptions"
                  :key="String(categoria.id ?? 'all')"
                  :label="categoria.id === null ? t('artigos.todasCategorias') : getLocalizedField(categoria, 'nome')"
                  :value="categoria.id"
                />
              </el-select>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-t border-white/[0.06] bg-[#060606] py-12 md:py-20">
      <div class="mx-auto w-full max-w-[1200px] px-4 md:px-12">
        <Pages :categoria-id="categoriaIdSelecionada" />
      </div>
    </section>

    <section class="art-cta-section relative isolate overflow-hidden border-t border-white/[0.08] bg-[#060606] py-16 md:py-24">
      <div class="art-cta-gridlines pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <div class="art-cta-vignette pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />

      <div
        class="relative z-[2] mx-auto flex w-full max-w-[1200px] flex-col items-stretch gap-10 px-4 md:px-12 lg:flex-row lg:items-center lg:justify-between"
      >
        <div class="art-cta-glass min-w-0 flex-1 lg:max-w-[640px]">
          <p class="art-cta-kicker font-head">{{ t('artigos.cta.eyebrow') }}</p>
          <h2
            class="mt-4 font-head text-[clamp(24px,4.4vw,40px)] font-bold leading-[1.08] tracking-[-0.03em] text-white"
          >
            {{ t('artigos.cta.title') }}
          </h2>
          <p
            class="art-cta-lead mt-6 border-l-2 border-[#88CE0D] pl-5 text-[14px] leading-[1.75] text-white/80 sm:text-[15px]"
          >
            {{ t('artigos.cta.text') }}
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <RouterLink :to="{ name: 'Contato' }" class="btn btn-lime">
              {{ t('artigos.cta.button') }}
            </RouterLink>
          </div>
        </div>

        <div class="art-cta-logo-wrap relative flex shrink-0 items-center justify-center lg:w-[340px]">
          <span class="art-cta-logo-glow pointer-events-none absolute inset-0 -z-[1]" aria-hidden="true" />
          <img
            src="/logoFit-column.png"
            alt="FitCertify365"
            class="art-cta-logo h-auto w-[180px] max-w-full object-contain md:w-[220px] lg:w-[260px]"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Pages from '../components/Artigos-components/Artigos-pages.vue'
import artigoService from '../services/Artigos/artigos-service.ts'
import { onMounted, ref, computed } from 'vue'
import { useI18n } from '../composables/useI18n.ts'

const { t, currentLocale } = useI18n()
const CategoriasArtigos = ref([])
const categoriaIdSelecionada = ref(null)

const categoriasOptions = computed(() => CategoriasArtigos.value)

const introTopics = [
  { key: 'health', tone: 'art-intro-chip--cyan' },
  { key: 'prevention', tone: 'art-intro-chip--lime' },
  { key: 'performance', tone: 'art-intro-chip--cyan' },
  { key: 'recovery', tone: 'art-intro-chip--neutral' },
  { key: 'nutrition', tone: 'art-intro-chip--lime' },
  { key: 'mindset', tone: 'art-intro-chip--neutral' },
]

function getLocalizedField(item, field) {
  return currentLocale.value === 'en' ? item[`en_${field}`] : item[field]
}

function onChangeCategoria(value) {
  categoriaIdSelecionada.value = value ?? null
}

onMounted(async () => {
  const response = await artigoService.getAllCategoriaArtigos()
  const lista = response.data || []
  CategoriasArtigos.value = [{ id: null, nome: '', en_nome: '' }, ...lista]
})
</script>

<style scoped lang="postcss">
@reference '../style.css';

.art-page {
  --art-btn-radius: 8px;
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

.art-hero-shell {
  background: #060606;
}
.art-hero-bg {
  will-change: transform;
  transform-origin: center center;
}
.art-hero-overlay {
  background:
    linear-gradient(to right, rgba(6, 6, 6, 0.94) 0%, rgba(6, 6, 6, 0.82) 42%, rgba(6, 6, 6, 0.55) 100%),
    linear-gradient(to top, rgba(6, 6, 6, 0.88) 0%, transparent 52%),
    rgba(6, 6, 6, 0.32);
}
.art-hero-grid {
  background-image:
    linear-gradient(rgba(0, 198, 254, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 198, 254, 0.04) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.12) 58%, transparent 100%);
}
.art-hero-title__dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-left: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #88ce0d, #00c6fe);
  vertical-align: super;
}

.art-intro-gridlines {
  background-image:
    linear-gradient(rgba(0, 198, 254, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 198, 254, 0.45) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, transparent 80%);
}
.art-intro-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #00c6fe;
}
.art-intro-lead {
  border-left: 2px solid rgba(136, 206, 13, 0.4);
  padding-left: 16px;
}
@media (min-width: 768px) {
  .art-intro-lead {
    border-left: none;
    border-top: 2px solid rgba(136, 206, 13, 0.35);
    padding-left: 0;
    padding-top: 14px;
  }
}

.art-intro-meta {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 10px;
}
.art-intro-meta__item {
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.015) 100%);
  padding: 14px 16px;
  backdrop-filter: blur(8px);
}
.art-intro-meta__dot {
  height: 8px;
  width: 8px;
  flex-shrink: 0;
  border-radius: 999px;
  background: #00c6fe;
  box-shadow: 0 0 0 4px rgba(0, 198, 254, 0.14);
}
.art-intro-meta__dot--lime {
  background: #88ce0d;
  box-shadow: 0 0 0 4px rgba(136, 206, 13, 0.14);
}
.art-intro-meta__text {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.82);
}

.art-intro-divider {
  height: 1px;
  background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.12) 30%, rgba(0, 198, 254, 0.35) 50%, rgba(255, 255, 255, 0.12) 70%, transparent 100%);
}

.art-intro-topics-title {
  margin: 0;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}

.art-intro-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  padding: 8px 14px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.82);
  transition:
    border-color 0.22s ease,
    background-color 0.22s ease,
    color 0.22s ease;
}
.art-intro-chip:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.22);
}
.art-intro-chip--cyan {
  border-color: rgba(0, 198, 254, 0.38);
  color: #d6f4ff;
  background: rgba(0, 198, 254, 0.08);
}
.art-intro-chip--cyan:hover {
  border-color: rgba(0, 198, 254, 0.6);
  background: rgba(0, 198, 254, 0.14);
}
.art-intro-chip--lime {
  border-color: rgba(136, 206, 13, 0.4);
  color: #e6f7c7;
  background: rgba(136, 206, 13, 0.08);
}
.art-intro-chip--lime:hover {
  border-color: rgba(136, 206, 13, 0.62);
  background: rgba(136, 206, 13, 0.14);
}
.art-intro-chip--neutral {
  color: rgba(255, 255, 255, 0.78);
}

.art-filters-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #00c6fe;
}
.art-filters-note {
  border-left: 2px solid rgba(136, 206, 13, 0.4);
  padding-left: 16px;
}
@media (min-width: 768px) {
  .art-filters-note {
    border-left: none;
    border-top: 2px solid rgba(136, 206, 13, 0.35);
    padding-left: 0;
    padding-top: 12px;
  }
}
.art-filters-panel {
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  padding: 22px 20px 24px;
  box-shadow: 0 24px 60px -40px rgba(0, 0, 0, 0.85);
}
.art-filters-fields {
  display: grid;
  gap: 18px;
}
@media (min-width: 768px) {
  .art-filters-fields {
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
  }
}
.art-filters-label {
  display: block;
  margin-bottom: 8px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
}

.art-filters-select {
  width: 100%;
}
.art-filters-select :deep(.el-select__wrapper) {
  min-height: 46px;
  border-radius: 10px;
  background: rgba(6, 6, 6, 0.45);
  box-shadow: none;
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.art-filters-select :deep(.el-select__wrapper:hover) {
  border-color: rgba(0, 198, 254, 0.45);
}
.art-filters-select :deep(.el-select__placeholder),
.art-filters-select :deep(.el-select__selected-item) {
  color: rgba(255, 255, 255, 0.88);
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
}
.art-filters-select :deep(.el-select__caret) {
  color: #00c6fe;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: var(--art-btn-radius);
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

.art-cta-section {
  background: #060606;
}
.art-cta-gridlines {
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
.art-cta-vignette {
  background:
    radial-gradient(ellipse 120% 80% at 50% 100%, rgba(0, 198, 254, 0.05) 0%, transparent 50%),
    radial-gradient(ellipse 90% 60% at 0% 0%, rgba(136, 206, 13, 0.04) 0%, transparent 45%);
}
.art-cta-kicker {
  margin: 0;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #88ce0d;
}
.art-cta-glass {
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
  .art-cta-glass {
    padding: 36px 40px 40px;
  }
}

.art-cta-logo-wrap {
  min-height: 220px;
}
.art-cta-logo {
  filter: drop-shadow(0 24px 48px rgba(0, 0, 0, 0.7));
}
.art-cta-logo-glow {
  background: radial-gradient(
    closest-side,
    rgba(0, 198, 254, 0.22) 0%,
    rgba(136, 206, 13, 0.12) 45%,
    transparent 75%
  );
  filter: blur(28px);
}
</style>
