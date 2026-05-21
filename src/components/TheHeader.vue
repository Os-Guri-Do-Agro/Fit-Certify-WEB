<template>
  <Disclosure
    v-slot="{ open }"
    as="nav"
    :data-scrolled="scrolled || mobileMenuOpen"
    class="header-root fixed inset-x-0 top-0 z-50"
  >
    <span class="hidden" aria-hidden="true">{{ syncMenuOpen(open) }}</span>
    <div ref="headerBarRef" class="header-bar mx-auto flex w-full items-center justify-between px-4 md:px-8 xl:px-12">

      <router-link to="/" data-track="header:logo" class="header-brand no-underline shrink-0">
        <img src="/Logo-Grande.png" alt="FitCertify365" class="header-brand__logo w-auto" />
      </router-link>

      <!-- Desktop nav -->
      <div class="hidden items-center gap-6 lg:flex xl:gap-8">
        <router-link
          v-for="link in startLinks"
          :key="link.to"
          :to="link.to"
          class="header-nav-link font-body font-medium uppercase tracking-[0.06em] text-white/60 transition-colors duration-200 hover:text-white no-underline whitespace-nowrap"
        >
          {{ link.label }}
        </router-link>

        <!-- Dropdown marca / páginas institucionais -->
        <Menu as="div" class="relative">
          <MenuButton class="header-nav-link header-nav-link--brand flex items-center gap-1 font-body font-medium tracking-[0.01em] text-white/60 transition-colors duration-200 hover:text-white whitespace-nowrap cursor-pointer select-none outline-none">
            {{ t('header.brandDropdown') }}
            <svg class="mt-px h-3.5 w-3.5 transition-transform duration-200 ui-open:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
          </MenuButton>
          <transition
            enter-active-class="transition duration-[120ms] ease-out"
            enter-from-class="opacity-0 scale-[0.97] -translate-y-1"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-[0.97] -translate-y-1"
          >
            <MenuItems class="absolute left-0 top-[calc(100%+10px)] z-50 min-w-[200px] origin-top-left rounded-xl border border-white/[0.1] bg-[#111114] py-1.5 shadow-[0_20px_48px_-8px_rgba(0,0,0,0.75)] outline-none">
              <MenuItem v-for="link in moreLinks" :key="link.to" v-slot="{ active }">
                <router-link
                  :to="link.to"
                  class="flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-medium text-white/55 no-underline transition-colors whitespace-nowrap"
                  :class="active ? 'bg-white/[0.06] text-white' : ''"
                >
                  {{ link.label }}
                </router-link>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>

        <router-link
          v-for="link in endLinks"
          :key="link.to"
          :to="link.to"
          class="header-nav-link font-body font-medium uppercase tracking-[0.06em] text-white/60 transition-colors duration-200 hover:text-white no-underline whitespace-nowrap"
        >
          {{ link.label }}
        </router-link>
      </div>

      <!-- Desktop actions -->
      <div class="header-actions hidden items-center gap-2 lg:flex xl:gap-3">
        <LanguageSelector variant="dark" />
        <a
          href="https://admin.fitcert365.com/login"
          target="_blank"
          rel="noopener noreferrer"
          data-track="header:login"
          class="header-cta-btn header-cta-btn--ghost inline-flex items-center font-head font-semibold uppercase tracking-[0.05em] rounded cursor-pointer no-underline bg-transparent border border-white/20 text-white hover:border-[#00C6FE] hover:text-[#00C6FE] whitespace-nowrap"
        >
          {{ t('header.login') }}
        </a>
        <a
          href="https://admin.fitcert365.com/register"
          target="_blank"
          rel="noopener noreferrer"
          data-track="header:register"
          class="header-cta-btn header-cta-btn--solid inline-flex items-center font-head font-semibold uppercase tracking-[0.05em] rounded cursor-pointer no-underline bg-[#00C6FE] text-[#060606] border-none hover:bg-[#22d4ff] whitespace-nowrap"
        >
          {{ t('header.ctaRegister') }}
        </a>
      </div>

      <!-- Hamburger (mobile only) -->
      <DisclosureButton
        class="header-burger lg:hidden inline-flex h-10 w-10 items-center justify-center rounded border border-white/20 text-white transition-colors hover:border-[#00C6FE] hover:text-[#00C6FE]"
        :aria-label="open ? t('header.menuClose') : t('header.menuOpen')"
      >
        <span class="sr-only">{{ open ? t('header.menuClose') : t('header.menuOpen') }}</span>
        <span class="relative h-4 w-5">
          <span
            class="absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition-transform duration-300"
            :class="open ? 'translate-y-[7px] rotate-45' : ''"
          />
          <span
            class="absolute left-0 top-[7px] h-0.5 w-5 rounded bg-current transition-opacity duration-200"
            :class="open ? 'opacity-0' : 'opacity-100'"
          />
          <span
            class="absolute left-0 top-[14px] h-0.5 w-5 rounded bg-current transition-transform duration-300"
            :class="open ? '-translate-y-[7px] -rotate-45' : ''"
          />
        </span>
      </DisclosureButton>
    </div>

    <!-- Mobile panel -->
    <DisclosurePanel class="border-t border-white/10 bg-[#060606] lg:hidden">
      <div ref="mobilePanelInnerRef" class="mobile-panel-inner space-y-1 px-4 py-3">
        <router-link
          v-for="link in allLinks"
          :key="`m-${link.to}`"
          :to="link.to"
          class="header-mobile-link block rounded px-2 py-2 text-sm text-white/80 hover:bg-white/5 no-underline"
        >
          {{ link.label }}
        </router-link>
        <div class="header-mobile-lang flex justify-center py-2 border-t border-white/10">
          <LanguageSelector variant="dark" />
        </div>
        <div class="header-mobile-ctas mt-3 grid grid-cols-1 gap-2 pt-3 border-t border-white/10">
          <a
            href="https://admin.fitcert365.com/login"
            target="_blank"
            rel="noopener noreferrer"
            data-track="header:login_mobile"
            class="inline-flex justify-center items-center font-head font-semibold text-[13px] uppercase tracking-[0.05em] rounded cursor-pointer no-underline transition-colors duration-200 px-4 py-[10px] bg-transparent border border-white/20 text-white hover:border-[#00C6FE] hover:text-[#00C6FE]"
          >
            {{ t('header.login') }}
          </a>
          <a
            href="https://admin.fitcert365.com/register"
            target="_blank"
            rel="noopener noreferrer"
            data-track="header:register_mobile"
            class="inline-flex justify-center items-center font-head font-semibold text-[13px] uppercase tracking-[0.05em] rounded cursor-pointer no-underline transition-colors duration-200 px-4 py-[10px] bg-[#00C6FE] text-[#060606] border-none hover:bg-[#22d4ff]"
          >
            {{ t('header.ctaRegister') }}
          </a>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import gsap from 'gsap'
import LanguageSelector from './LanguageSelector.vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const headerBarRef = ref(null)
const mobilePanelInnerRef = ref(null)
let headerCtx = null
let mobileMenuCtx = null

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const onScroll = () => { scrolled.value = window.scrollY > 60 }

function syncMenuOpen(open) {
  if (mobileMenuOpen.value !== open) mobileMenuOpen.value = open
  return ''
}

function runHeaderEntrance() {
  const root = headerBarRef.value
  if (!root) return
  const reduce = false
  headerCtx?.revert()
  if (reduce) return
  root.classList.add('header-is-entering')
  headerCtx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete() { root.classList.remove('header-is-entering') },
    })
    tl.from('.header-brand', { opacity: 0, x: -18, duration: 0.55, clearProps: 'opacity,transform' }, 0)
      .from('.header-nav-link', { opacity: 0, y: -12, duration: 0.42, stagger: 0.055, clearProps: 'opacity,transform' }, 0.08)
      .from('.header-actions > *', { opacity: 0, y: -10, duration: 0.38, stagger: 0.07, clearProps: 'opacity,transform' }, 0.2)
      .from('.header-burger', { opacity: 0, scale: 0.88, duration: 0.45, ease: 'back.out(1.6)', clearProps: 'opacity,transform' }, 0.12)
  }, root)
}

function animateMobilePanelOpen(open) {
  mobileMenuCtx?.revert()
  if (!open) return
  const reduce = false
  if (reduce) return
  nextTick(() => {
    const root = mobilePanelInnerRef.value
    if (!root) return
    root.classList.add('mobile-panel-is-entering')
    mobileMenuCtx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete() { root.classList.remove('mobile-panel-is-entering') },
      })
      tl.fromTo(
        '.header-mobile-link',
        { opacity: 0, x: -12 },
        { opacity: 1, x: 0, duration: 0.34, stagger: 0.055, ease: 'power2.out', clearProps: 'opacity,transform' },
        0
      )
        .from('.header-mobile-lang', { opacity: 0, y: 8, duration: 0.32, ease: 'power2.out', clearProps: 'opacity,transform' }, 0.1)
        .from('.header-mobile-ctas', { opacity: 0, y: 10, duration: 0.36, ease: 'power2.out', clearProps: 'opacity,transform' }, 0.16)
    }, root)
  })
}

watch(mobileMenuOpen, (open) => {
  if (open) animateMobilePanelOpen(true)
  else mobileMenuCtx?.revert()
})

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  nextTick(() => runHeaderEntrance())
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  headerCtx?.revert()
  mobileMenuCtx?.revert()
})

const startLinks = computed(() => [
  { label: t('nav.home'), to: '/' },
])

const endLinks = computed(() => [
  { label: t('nav.events'), to: '/eventos' },
  { label: t('nav.articles'), to: '/artigos' },
])

const moreLinks = computed(() => [
  { label: t('header.navSaude'), to: '/quemsomos' },
  { label: t('footer.navegacao.certificados'), to: '/certificados' },
  { label: t('nav.marcadores'), to: '/marcadores' },
])

const allLinks = computed(() => [
  ...startLinks.value,
  { label: t('header.brandDropdown'), to: '/quemsomos' },
  ...moreLinks.value.filter((l) => l.to !== '/quemsomos'),
  ...endLinks.value,
])
</script>

<style scoped>
/* ── Background do header (transparente no top, sólido após scroll) ── */
.header-root {
  border-bottom: 1px solid transparent;
  background-color: transparent;
  transition:
    background-color 0.3s ease,
    backdrop-filter 0.3s ease,
    -webkit-backdrop-filter 0.3s ease,
    border-color 0.3s ease;
}
.header-root[data-scrolled='false'] {
  background-color: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  border-bottom-color: transparent;
}
.header-root[data-scrolled='true'] {
  background-color: rgba(6, 6, 6, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom-color: rgba(255, 255, 255, 0.06);
}

/* ── Tamanhos com transição (encolhem ao scrollar) ── */
.header-bar {
  transition: height 0.3s ease-out;
}
.header-root[data-scrolled='false'] .header-bar { height: 76px; }
.header-root[data-scrolled='true']  .header-bar { height: 56px; }

.header-brand__logo {
  transition: height 0.3s ease-out;
}
.header-root[data-scrolled='false'] .header-brand__logo { height: 40px; }
.header-root[data-scrolled='true']  .header-brand__logo { height: 30px; }

.header-nav-link {
  transition: color 0.2s ease, font-size 0.3s ease-out, letter-spacing 0.3s ease-out;
}
.header-root[data-scrolled='false'] .header-nav-link { font-size: 13px; }
.header-root[data-scrolled='true']  .header-nav-link { font-size: 12px; }
.header-root[data-scrolled='false'] .header-nav-link--brand { font-size: 14px; }
.header-root[data-scrolled='true']  .header-nav-link--brand { font-size: 13px; }

.header-cta-btn {
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease,
              padding 0.3s ease-out, font-size 0.3s ease-out;
}
.header-root[data-scrolled='false'] .header-cta-btn {
  padding: 9px 18px;
  font-size: 12px;
}
.header-root[data-scrolled='true'] .header-cta-btn {
  padding: 7px 14px;
  font-size: 11px;
}
@media (min-width: 1280px) {
  .header-root[data-scrolled='false'] .header-cta-btn { padding: 10px 20px; font-size: 13px; }
  .header-root[data-scrolled='true']  .header-cta-btn { padding: 8px 16px;  font-size: 12px; }
}

/* ── Neutraliza CSS transitions durante a entrada GSAP ── */
.header-is-entering .header-brand,
.header-is-entering .header-brand__logo,
.header-is-entering .header-nav-link,
.header-is-entering .header-actions > *,
.header-is-entering .header-cta-btn,
.header-is-entering .header-burger {
  transition: none !important;
}
.mobile-panel-is-entering .header-mobile-link,
.mobile-panel-is-entering .header-mobile-lang,
.mobile-panel-is-entering .header-mobile-ctas,
.mobile-panel-is-entering .header-mobile-ctas > * {
  transition: none !important;
}

@media (prefers-reduced-motion: reduce) {
  .header-bar,
  .header-brand__logo,
  .header-nav-link,
  .header-cta-btn {
    transition: none;
  }
}
</style>
