<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const footerColumns = computed(() => [
  {
    id: 'pages',
    title: t('footer.columns.pages'),
    links: [
      { label: t('footer.navegacao.quemSomos'), to: '/quemsomos' },
      { label: t('footer.navegacao.certificados'), to: '/certificados' },
      { label: t('nav.marcadores'), to: '/marcadores' },
      { label: t('nav.events'), to: '/eventos' },
      { label: t('nav.articles'), to: '/artigos' },
    ],
  },
  {
    id: 'help',
    title: t('footer.columns.help'),
    links: [
      { label: t('nav.contact'), to: '/contato' },
      { label: t('footer.navegacao.faq'), to: '/certificados#faq' },
      { label: t('footer.termsPrivacyLink'), to: '/termosprivacidade' },
    ],
  },
])
</script>

<template>
  <footer class="relative overflow-hidden border-t border-white/[0.06] bg-[#060606] px-4 pb-8 pt-16 md:px-12">
    <div class="relative mx-auto max-w-[1200px]">
      <div class="mb-14 grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <RouterLink to="/" class="mb-4 inline-flex no-underline">
            <img src="/Logo-Grande.png" alt="FitCertify365" class="h-10 w-auto md:h-12" />
          </RouterLink>
          <p class="mb-6 mt-4 max-w-[280px] text-sm leading-[1.7] text-white/45">
            {{ t('footer.tagline') }}
          </p>
          <div class="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/company/fitcertify365/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.12] text-white/50 no-underline transition-all duration-200 hover:border-[#00C6FE] hover:text-[#00C6FE]"
              :aria-label="t('footer.social.linkedin')"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61581850576820"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.12] text-white/50 no-underline transition-all duration-200 hover:border-[#00C6FE] hover:text-[#00C6FE]"
              :aria-label="t('footer.social.facebook')"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a
              href="https://www.youtube.com/@FitCertify365"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.12] text-white/50 no-underline transition-all duration-200 hover:border-[#00C6FE] hover:text-[#00C6FE]"
              :aria-label="t('footer.social.youtube')"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2.5 17a24.12 24.12 0 010-10 2 2 0 011.4-1.4 49.56 49.56 0 0116.2 0A2 2 0 0121.5 7a24.12 24.12 0 010 10 2 2 0 01-1.4 1.4 49.55 49.55 0 01-16.2 0A2 2 0 012.5 17"/><path d="M10 15l5-3-5-3z"/></svg>
            </a>
            <a
              href="https://www.instagram.com/fitcertify365/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.12] text-white/50 no-underline transition-all duration-200 hover:border-[#00C6FE] hover:text-[#00C6FE]"
              :aria-label="t('footer.social.instagram')"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
          <div class="mt-7">
            <p class="mb-3 font-head text-[12px] font-bold uppercase tracking-[0.1em] text-white/35">
              {{ t('footer.apps.heading') }}
            </p>
            <div class="flex flex-wrap items-center gap-3">
              <a
                href="https://apps.apple.com/br/app/fitcertify365/id6752969790"
                target="_blank"
                rel="noopener noreferrer"
                class="store-badge"
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
                class="store-badge"
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
        <div v-for="col in footerColumns" :key="col.id">
          <p class="mb-5 font-head text-[12px] font-bold uppercase tracking-[0.1em] text-white/35">{{ col.title }}</p>
          <ul class="flex flex-col gap-[10px] list-none p-0">
            <li v-for="link in col.links" :key="link.to">
              <RouterLink
                :to="link.to"
                class="text-sm text-white/55 no-underline transition-colors hover:text-white"
              >{{ link.label }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06] pt-7">
        <p class="text-[13px] text-white/25">
          © 2026 FitCertify365. {{ t('footer.navegacao.todosDireitos') }}
        </p>
        <RouterLink
          to="/termosprivacidade"
          class="text-[13px] text-white/25 no-underline transition-colors hover:text-white/55"
        >{{ t('footer.termsPrivacyLink') }}</RouterLink>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.store-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: transform 0.2s ease, opacity 0.2s ease, filter 0.2s ease;
  opacity: 0.85;
}
.store-badge:hover {
  opacity: 1;
  transform: translateY(-1px);
  filter: drop-shadow(0 4px 14px rgba(0, 198, 254, 0.18));
}
.store-badge:focus-visible {
  outline: 2px solid #00c6fe;
  outline-offset: 3px;
}
.store-badge img {
  display: block;
}
</style>
