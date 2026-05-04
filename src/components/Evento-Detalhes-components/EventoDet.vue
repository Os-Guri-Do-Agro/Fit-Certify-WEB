<template>
  <div class="det-rel-root">
    <template v-if="items.length">
      <div class="det-rel-grid">
        <RouterLink
          v-for="item in items"
          :key="item.id"
          :to="{ name: 'EventoDetalhe', params: { id: item.id } }"
          class="det-rel-card"
        >
          <div class="det-rel-card__media">
            <img
              v-if="item.imagemUrl"
              :src="item.imagemUrl"
              :alt="getLocalizedField(item, 'titulo')"
              class="det-rel-card__img"
            />
            <div v-else class="det-rel-card__ph" aria-hidden="true" />
            <div class="det-rel-card__grad" aria-hidden="true" />
            <h3 class="det-rel-card__title font-head">{{ getLocalizedField(item, 'titulo') }}</h3>
          </div>
          <div class="det-rel-card__body">
            <div class="det-rel-card__meta">
              <span class="det-rel-card__meta-line">
                <CalendarDaysIcon class="det-rel-card__ico" aria-hidden="true" />
                {{ formatDate(item.data) }}
              </span>
              <span class="det-rel-card__dot" aria-hidden="true" />
              <span class="det-rel-card__meta-line det-rel-card__meta-line--loc">
                <MapPinIcon class="det-rel-card__ico" aria-hidden="true" />
                <span class="det-rel-card__loc">{{ item.local }}</span>
              </span>
            </div>
            <div v-if="distLabels(item).length" class="det-rel-card__chips">
              <span
                v-for="(lab, idx) in distLabels(item)"
                :key="idx"
                class="det-rel-card__chip font-head"
              >
                {{ lab }}
              </span>
            </div>
            <p class="det-rel-card__trust font-head">
              <ShieldCheckIcon class="det-rel-card__trust-ico" aria-hidden="true" />
              {{ t('eventos.listEventos.subtitle') }}
            </p>
            <span class="det-rel-card__cta font-head">{{ t('eventos.listEventos.button') }}</span>
          </div>
        </RouterLink>
      </div>
    </template>

    <template v-else-if="loading">
      <div class="det-rel-grid">
        <div v-for="n in 6" :key="'sk-' + n" class="det-rel-card det-rel-card--skel">
          <div class="det-rel-card__media det-rel-card__media--skel" aria-hidden="true" />
          <div class="det-rel-card__body">
            <div class="det-rel-skel det-rel-skel--meta" />
            <div class="det-rel-skel-row">
              <div class="det-rel-skel det-rel-skel--chip" />
              <div class="det-rel-skel det-rel-skel--chip det-rel-skel--chip2" />
            </div>
            <div class="det-rel-skel det-rel-skel--trust" />
            <div class="det-rel-skel det-rel-skel--cta" />
          </div>
        </div>
      </div>
    </template>

    <p v-else class="det-rel-empty font-head">{{ t('eventos.empty') }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { MapPinIcon, CalendarDaysIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline'
import EventosService from '../../services/Eventos/eventos-services'
import { useI18n } from '../../composables/useI18n'

const props = defineProps<{
  excludeId?: string
}>()

const { t, currentLocale } = useI18n()
const rawList = ref<any[]>([])
const loading = ref(true)

const items = computed(() => {
  const ex = props.excludeId != null && props.excludeId !== '' ? String(props.excludeId) : ''
  return rawList.value
    .filter((e) => String(e?.id) !== ex)
    .slice(0, 6)
})

function getLocalizedField(item: any, field: string) {
  return currentLocale.value === 'en' ? item[`en_${field}`] : item[field]
}

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return currentLocale.value === 'pt' ? date.toLocaleDateString('pt-BR') : date.toLocaleDateString('en-US')
}

function distLabels(item: any) {
  const distancias = item.distanciasEvento ?? item.distanciaEventos
  if (!distancias?.length) return []
  return [...distancias]
    .sort((a: any, b: any) => a.distancia - b.distancia)
    .map((d: any) => {
      const n = Number(d.distancia)
      if (!Number.isFinite(n)) return ''
      if (currentLocale.value === 'en') {
        const miles = (n * 0.621371).toFixed(1)
        return `${miles} mi`
      }
      return `${n} km`
    })
    .filter(Boolean)
}

onMounted(async () => {
  loading.value = true
  try {
    const raw = await EventosService.getAllEventos()
    const arr = Array.isArray(raw) ? raw : raw?.data ?? raw?.itens ?? []
    rawList.value = Array.isArray(arr) ? arr : []
  } catch {
    rawList.value = []
  } finally {
    loading.value = false
  }
})
</script>

<style scoped lang="postcss">
@reference "../../style.css";

.font-head {
  font-family: 'Space Grotesk', sans-serif;
}

.det-rel-root {
  width: 100%;
}

/* Grade de cards verticais (diferente do layout em lista horizontal anterior) */
.det-rel-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
}
@media (min-width: 560px) {
  .det-rel-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px 22px;
  }
}
@media (min-width: 1024px) {
  .det-rel-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 22px;
  }
}

.det-rel-card {
  display: flex;
  height: 100%;
  min-height: 100%;
  flex-direction: column;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%);
  text-decoration: none;
  color: inherit;
  box-shadow: 0 20px 52px -34px rgba(0, 0, 0, 0.65);
  /* Sem transform no card — compatível com GSAP no ancestral */
  transition:
    border-color 0.28s ease,
    box-shadow 0.32s ease;
}
.det-rel-card:hover {
  border-color: rgba(0, 198, 254, 0.45);
  box-shadow: 0 24px 56px -30px rgba(0, 198, 254, 0.14);
}

.det-rel-card--skel {
  pointer-events: none;
}
.det-rel-card--skel:hover {
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 52px -34px rgba(0, 0, 0, 0.65);
}

.det-rel-card__media {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
  background: #0a0a0a;
}
.det-rel-card__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.det-rel-card:hover .det-rel-card__img {
  transform: scale(1.06);
}
.det-rel-card__ph {
  position: absolute;
  inset: 0;
  background: linear-gradient(155deg, rgba(0, 198, 254, 0.22) 0%, rgba(6, 6, 6, 0.75) 50%, rgba(136, 206, 13, 0.14) 100%);
}
.det-rel-card__grad {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(6, 6, 6, 0.9) 0%, rgba(6, 6, 6, 0.25) 45%, transparent 100%);
  pointer-events: none;
}
.det-rel-card__title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 14px 14px 16px;
  font-size: clamp(0.95rem, 2vw, 1.12rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #fff;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.55);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.det-rel-card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  padding: 14px 14px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: linear-gradient(180deg, rgba(0, 198, 254, 0.05) 0%, transparent 42%);
}

.det-rel-card__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px 10px;
  font-size: 12px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.58);
}
.det-rel-card__meta-line {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
}
.det-rel-card__meta-line--loc {
  min-width: 0;
  flex: 1 1 120px;
}
.det-rel-card__loc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.det-rel-card__dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(136, 206, 13, 0.65);
  flex-shrink: 0;
}
.det-rel-card__ico {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  color: #00c6fe;
}

.det-rel-card__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.det-rel-card__chip {
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(136, 206, 13, 0.45);
  background: rgba(136, 206, 13, 0.08);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #d4f88a;
}

.det-rel-card__trust {
  margin: 4px 0 0;
  padding-left: 12px;
  border-left: 2px solid rgba(136, 206, 13, 0.55);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.48);
  line-height: 1.35;
}
.det-rel-card__trust-ico {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  color: #00c6fe;
}

.det-rel-card__cta {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 14px;
  min-height: 42px;
  box-sizing: border-box;
  border-radius: 999px;
  border: 1px solid #88ce0d;
  background: #88ce0d;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #060606;
  text-align: center;
  line-height: 1.2;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}
.det-rel-card:hover .det-rel-card__cta {
  background: #060606;
  border-color: #060606;
  color: #fff;
}

.det-rel-card__media--skel {
  background: rgba(255, 255, 255, 0.06);
  animation: det-rel-skel 1.25s ease-in-out infinite;
}

.det-rel-empty {
  margin: 0;
  padding: 28px 12px;
  text-align: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.45);
}

@keyframes det-rel-skel {
  0%,
  100% {
    opacity: 0.35;
  }
  50% {
    opacity: 0.68;
  }
}
.det-rel-skel {
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  animation: det-rel-skel 1.25s ease-in-out infinite;
}
.det-rel-skel--meta {
  height: 14px;
  width: 88%;
}
.det-rel-skel-row {
  display: flex;
  gap: 8px;
}
.det-rel-skel--chip {
  height: 22px;
  width: 48px;
  border-radius: 999px;
}
.det-rel-skel--chip2 {
  width: 56px;
}
.det-rel-skel--trust {
  height: 12px;
  width: 70%;
  margin-top: 4px;
}
.det-rel-skel--cta {
  margin-top: auto;
  height: 42px;
  width: 100%;
  border-radius: 999px;
}

@media (prefers-reduced-motion: reduce) {
  .det-rel-card {
    transition: none;
  }
  .det-rel-card__img {
    transition: none;
  }
  .det-rel-card:hover .det-rel-card__img {
    transform: none;
  }
  .det-rel-card__media--skel,
  .det-rel-skel {
    animation: none;
    opacity: 0.42;
  }
}
</style>
