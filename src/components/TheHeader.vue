<template>
  <Disclosure
    v-slot="{ open }"
    as="nav"
    class="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] backdrop-blur-xl transition-colors duration-300"
    :class="scrolled ? 'bg-[#060606]/97' : 'bg-[#060606]/88'"
  >
    <span class="hidden" aria-hidden="true">{{ syncMenuOpen(open) }}</span>
    <div ref="headerBarRef" class="mx-auto flex h-[68px] w-full items-center justify-between px-4 md:px-8 xl:px-12">

      <router-link to="/" class="header-brand no-underline shrink-0">
        <img src="/Logo-Grande.png" alt="FitCertify365" class="h-10 w-auto" />
      </router-link>

      <!-- Desktop nav -->
      <div class="hidden items-center gap-6 lg:flex xl:gap-8">
        <router-link
          v-for="link in primaryLinks"
          :key="link.to"
          :to="link.to"
          class="header-nav-link font-body text-[13px] font-medium uppercase tracking-[0.06em] text-white/60 transition hover:text-white no-underline whitespace-nowrap"
        >
          {{ link.label }}
        </router-link>

        <!-- Dropdown "Mais" -->
        <Menu as="div" class="relative">
          <MenuButton class="header-nav-link flex items-center gap-1 font-body text-[13px] font-medium uppercase tracking-[0.06em] text-white/60 transition hover:text-white whitespace-nowrap cursor-pointer select-none outline-none">
            {{ t('header.more') }}
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
            <MenuItems class="absolute left-0 top-[calc(100%+10px)] z-50 min-w-[176px] origin-top-left rounded-xl border border-white/[0.1] bg-[#111114] py-1.5 shadow-[0_20px_48px_-8px_rgba(0,0,0,0.75)] outline-none">
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
      </div>

      <!-- Desktop actions -->
      <div class="header-actions hidden items-center gap-2 lg:flex xl:gap-3">
        <LanguageSelector variant="dark" />
        <a
          href="https://admin.fitcert365.com/login"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center font-head font-semibold text-[12px] uppercase tracking-[0.05em] rounded cursor-pointer no-underline transition-all duration-200 px-4 py-2 bg-transparent border border-white/20 text-white hover:border-[#00C6FE] hover:text-[#00C6FE] whitespace-nowrap xl:px-5 xl:py-[10px] xl:text-[13px]"
        >
          {{ t('header.login') }}
        </a>
        <a
          href="https://admin.fitcert365.com/register"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center font-head font-semibold text-[12px] uppercase tracking-[0.05em] rounded cursor-pointer no-underline transition-all duration-200 px-4 py-2 bg-[#00C6FE] text-[#060606] border-none hover:bg-[#22d4ff] hover:-translate-y-px whitespace-nowrap xl:px-5 xl:py-[10px] xl:text-[13px]"
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
            class="inline-flex justify-center items-center font-head font-semibold text-[13px] uppercase tracking-[0.05em] rounded cursor-pointer no-underline transition-all duration-200 px-4 py-[10px] bg-transparent border border-white/20 text-white hover:border-[#00C6FE] hover:text-[#00C6FE]"
          >
            {{ t('header.login') }}
          </a>
          <a
            href="https://admin.fitcert365.com/register"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex justify-center items-center font-head font-semibold text-[13px] uppercase tracking-[0.05em] rounded cursor-pointer no-underline transition-all duration-200 px-4 py-[10px] bg-[#00C6FE] text-[#060606] border-none hover:bg-[#22d4ff]"
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
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  headerCtx?.revert()
  headerCtx = gsap.context(() => {
    if (reduce) return
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from('.header-brand', { opacity: 0, x: -18, duration: 0.55 }, 0)
      .from('.header-nav-link', { opacity: 0, y: -12, duration: 0.42, stagger: 0.055 }, 0.08)
      .from('.header-actions > *', { opacity: 0, y: -10, duration: 0.38, stagger: 0.07 }, 0.2)
      .from('.header-burger', { opacity: 0, scale: 0.88, duration: 0.45, ease: 'back.out(1.6)' }, 0.12)
  }, root)
}

function animateMobilePanelOpen(open) {
  mobileMenuCtx?.revert()
  if (!open) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) return
  nextTick(() => {
    const root = mobilePanelInnerRef.value
    if (!root) return
    mobileMenuCtx = gsap.context(() => {
      gsap.fromTo(
        '.header-mobile-link',
        { opacity: 0, x: -12 },
        { opacity: 1, x: 0, duration: 0.34, stagger: 0.055, ease: 'power2.out' }
      )
      gsap.from('.header-mobile-lang', { opacity: 0, y: 8, duration: 0.32, ease: 'power2.out', delay: 0.1 })
      gsap.from('.header-mobile-ctas', { opacity: 0, y: 10, duration: 0.36, ease: 'power2.out', delay: 0.16 })
    }, root)
  })
}

watch(mobileMenuOpen, (open) => {
  if (open) animateMobilePanelOpen(true)
  else mobileMenuCtx?.revert()
})

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  nextTick(() => runHeaderEntrance())
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  headerCtx?.revert()
  mobileMenuCtx?.revert()
})

const primaryLinks = computed(() => [
  { label: t('nav.home'), to: '/' },
  { label: t('footer.navegacao.certificados'), to: '/certificados' },
  { label: t('nav.events'), to: '/eventos' },
])

const moreLinks = computed(() => [
  { label: t('header.navSaude'), to: '/quemsomos' },
  { label: t('nav.marcadores'), to: '/marcadores' },
  { label: t('nav.articles'), to: '/artigos' },
])

const allLinks = computed(() => [...primaryLinks.value, ...moreLinks.value])
</script>

<style scoped>
</style>
