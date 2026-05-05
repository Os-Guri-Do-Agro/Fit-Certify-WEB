<template>
  <div ref="rootRef" class="art-related-root w-full">
    <div class="art-related-grid">
      <template v-if="isLoading">
        <div
          v-for="n in 3"
          :key="'rel-skel-' + n"
          class="art-rel-card art-rel-card--skeleton flex w-full flex-col overflow-hidden rounded-[18px] border border-white/10"
        >
          <div class="art-rel-card__media bg-white/10" />
          <div class="art-rel-card__body">
            <div class="h-7 w-4/5 max-w-[420px] rounded bg-white/10" />
            <div class="mt-2 h-4 w-full rounded bg-white/[0.08]" />
            <div class="h-4 w-5/6 rounded bg-white/[0.08]" />
            <div class="mt-auto h-10 w-[140px] rounded-lg bg-white/[0.08]" />
          </div>
        </div>
      </template>

      <template v-else-if="artigosFiltrados.length === 0">
        <p class="col-span-full text-center text-sm text-white/45">
          {{ t('artigos.detalhe.related.empty') }}
        </p>
      </template>

      <template v-else>
        <article
          v-for="item in artigosFiltrados"
          :key="item.id"
          class="art-rel-card group flex w-full flex-col overflow-hidden rounded-[18px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent shadow-[0_28px_72px_-40px_rgba(0,0,0,0.85)]"
        >
          <div class="art-rel-card__media relative overflow-hidden">
            <img
              class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              :src="item.imagensArtigo.find((i: any) => i.isBanner == false)?.imagemUrl"
              alt=""
            />
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060606]/80 via-transparent to-transparent opacity-90"
              aria-hidden="true"
            />
          </div>

          <div class="art-rel-card__body">
            <h3 class="art-rel-card__title font-head">
              {{ getLocalizedField(item, 'titulo') }}
            </h3>
            <p class="art-rel-card__excerpt">
              {{ getLocalizedField(item, 'subTitulo') }}
            </p>
            <div class="mt-auto pt-2">
              <RouterLink
                :to="{ name: 'ArtigoDetalhe', params: { id: item.id } }"
                class="btn-ghost inline-flex"
                @click="emit('refresh-page', item.id)"
              >
                {{ t('artigos.button') }}
              </RouterLink>
            </div>
          </div>
        </article>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ArtigoService from '../../services/Artigos/artigos-service'
import { useI18n } from '../../composables/useI18n'

gsap.registerPlugin(ScrollTrigger)

const { t, currentLocale } = useI18n()
const route = useRoute()

function getLocalizedField(item: any, field: any) {
  return currentLocale.value === 'en' ? item[`en_${field}`] : item[field]
}

const emit = defineEmits<{
  'refresh-page': [id: string]
}>()

const Artigos = ref<{ data: any[] }>({ data: [] })
const isLoading = ref(false)
const rootRef = ref<HTMLElement | null>(null)
let gsapCtx: gsap.Context | null = null

const artigosFiltrados = computed(() => {
  const currentId = String(route.params.id ?? '')
  return (Artigos.value.data || [])
    .filter((a: any) => a?.ativo === true)
    .filter((a: any) => String(a.id) !== currentId)
    .slice(0, 3)
})

function animateSkeletons() {
  if (!rootRef.value) return
  gsapCtx?.revert()
  gsapCtx = gsap.context(() => {
    gsap.from('.art-rel-card--skeleton', {
      opacity: 0,
      y: 18,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power2.out',
      clearProps: 'opacity,transform',
    })
  }, rootRef.value)
}

function animateCards() {
  if (!rootRef.value) return
  gsapCtx?.revert()
  const cards = rootRef.value.querySelectorAll<HTMLElement>('.art-rel-card:not(.art-rel-card--skeleton)')
  if (!cards.length) return
  gsapCtx = gsap.context(() => {
    gsap.from(cards, {
      opacity: 0,
      y: 28,
      scale: 0.97,
      duration: 0.65,
      stagger: 0.12,
      ease: 'power3.out',
      clearProps: 'opacity,transform',
      scrollTrigger: { trigger: cards[0], start: 'top 92%', once: true },
    })

    cards.forEach((card) => {
      const body = card.querySelector<HTMLElement>('.art-rel-card__body')
      if (!body) return
      const items = body.querySelectorAll<HTMLElement>(':scope > *')
      if (!items.length) return
      gsap.from(items, {
        opacity: 0,
        y: 12,
        duration: 0.45,
        stagger: 0.06,
        ease: 'power2.out',
        clearProps: 'opacity,transform',
        scrollTrigger: { trigger: card, start: 'top 92%', once: true },
        delay: 0.15,
      })
    })

    requestAnimationFrame(() => ScrollTrigger.refresh())
  }, rootRef.value)
}

watch(isLoading, async (loading) => {
  await nextTick()
  if (loading) {
    animateSkeletons()
  } else if (artigosFiltrados.value.length) {
    animateCards()
  }
})

watch(
  () => artigosFiltrados.value.map((a) => a.id).join('|'),
  async (key) => {
    if (!key || isLoading.value) return
    await nextTick()
    animateCards()
  }
)

onMounted(async () => {
  try {
    isLoading.value = true
    await nextTick()
    animateSkeletons()
    const response: any = await ArtigoService.getAllArtigos()
    Artigos.value = response?.data ? { data: response.data } : { data: [] }
  } finally {
    isLoading.value = false
  }
})

onUnmounted(() => {
  gsapCtx?.revert()
  gsapCtx = null
})
</script>

<style scoped lang="postcss">
@reference '../../style.css';

.art-related-root {
  --rel-btn-radius: 8px;
}

.font-head {
  font-family: 'Space Grotesk', sans-serif;
}

.art-related-grid {
  display: grid;
  gap: 22px;
  grid-template-columns: 1fr;
}
@media (min-width: 720px) {
  .art-related-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (min-width: 1024px) {
  .art-related-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }
}

.art-rel-card {
  max-height: 540px;
}
@media (min-width: 768px) {
  .art-rel-card {
    max-height: 560px;
  }
}

.art-rel-card__media {
  width: 100%;
  flex-shrink: 0;
  aspect-ratio: 16 / 10;
  max-height: 220px;
}
@media (min-width: 768px) {
  .art-rel-card__media {
    max-height: 240px;
  }
}

.art-rel-card__body {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 22px 20px 24px;
  min-height: 0;
  flex: 1 1 auto;
}
@media (min-width: 768px) {
  .art-rel-card__body {
    padding: 24px 24px 26px;
  }
}

.art-rel-card__title {
  margin: 0;
  font-size: clamp(1rem, 1.6vw, 1.25rem);
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: #fff;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.art-rel-card__excerpt {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.55);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  border-radius: var(--rel-btn-radius);
  border: 1px solid #00c6fe;
  background: transparent;
  padding: 8px 18px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #00c6fe;
  text-decoration: none;
  cursor: pointer;
  transition:
    transform 0.22s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.22s cubic-bezier(0.2, 0.8, 0.2, 1),
    background-color 0.22s cubic-bezier(0.2, 0.8, 0.2, 1),
    color 0.22s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.btn-ghost:hover {
  background: #00c6fe;
  color: #060606;
  transform: translateY(-1px);
  box-shadow: 0 12px 32px -18px rgba(0, 198, 254, 0.4);
}

.art-rel-card--skeleton {
  animation: art-rel-pulse 1.4s ease-in-out infinite;
}

@keyframes art-rel-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.72;
  }
}

@media (prefers-reduced-motion: reduce) {
  .art-rel-card--skeleton {
    animation: none;
  }
  .btn-ghost:hover {
    transform: none;
  }
}
</style>
