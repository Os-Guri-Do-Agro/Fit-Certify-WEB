<template>
  <div class="evt-page bg-[#f8fafc] text-[#0f172a] font-body">
    <!-- HERO: mesmo padrão visual de Certificados (overlay + grid + copy à esquerda) -->
    <section
      class="evt-hero-shell relative flex min-h-[min(72vh,620px)] overflow-hidden pb-16 pt-24 md:min-h-[min(78vh,700px)] md:pb-20 md:pt-20"
    >
      <img
        src="/src/assets/eventos-imgs/banner-01.jpg"
        alt=""
        class="evt-hero-bg pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div class="evt-hero-overlay pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />
      <div class="evt-hero-grid pointer-events-none absolute inset-0 z-[2]" aria-hidden="true" />

      <div
        class="relative z-[3] mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-4 md:px-12"
      >
        <div class="evt-hero-copy w-full max-w-[min(560px,100%)] text-white">
          <p class="evt-hero-item eyebrow">{{ t('eventos.heroEyebrow') }}</p>
          <h1
            class="evt-hero-item evt-hero-title font-head text-[clamp(30px,6vw,68px)] font-bold leading-[0.95] tracking-[-0.04em]"
          >
            {{ t('eventos.title') }}
            <span class="evt-hero-title__dot" aria-hidden="true" />
          </h1>
          <p
            class="evt-hero-item evt-hero-lead mt-6 max-w-[440px] border-l-2 border-[#00C6FE] pl-5 text-[14px] leading-[1.7] text-white/65 sm:text-[15px]"
          >
            {{ t('eventos.subtitle') }}
          </p>
          <div class="evt-hero-item mt-9 flex flex-wrap gap-3">
            <router-link :to="{ name: 'Eventos', hash: '#eventos' }" class="btn btn-lime">
              {{ t('eventos.heroCtaEventos') }}
            </router-link>
            <a
              href="https://admin.fitcert365.com/register"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline"
            >
              {{ t('eventos.listEventos.button') }}
            </a>
          </div>
        </div>
      </div>

      <div
        class="pointer-events-none absolute bottom-0 left-0 right-0 z-[4] h-px bg-gradient-to-r from-transparent via-[#00C6FE]/50 to-transparent"
        aria-hidden="true"
      />
    </section>

    <!-- Faixa editorial: marca d’água + texto (layout diferente de Certificados) -->
    <section class="relative overflow-hidden bg-white py-16 md:py-24">
      <div class="evt-reveal evt-kicker relative mx-auto max-w-[1100px] px-4 md:px-10">
        <div class="evt-kicker__grid">
          <div class="evt-kicker__aside font-head" aria-hidden="true">
            <span class="evt-kicker__glyph">+</span>
            <span class="evt-kicker__glyph evt-kicker__glyph--dim">+</span>
          </div>
          <div class="evt-kicker__body">
            <p class="section-tag">{{ t('eventos.section2.title') }}</p>
            <p class="evt-kicker__text mt-4 text-[15px] leading-[1.85] text-[#475569] md:text-[16px]">
              {{ t('eventos.section1.text') }}
            </p>
          </div>
          <img
            src="/logoFit-column.png"
            alt=""
            class="evt-kicker__logo"
            width="150"
            loading="lazy"
            decoding="async"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>

    <!-- Calendário + filtros -->
    <section id="calendario" class="relative scroll-mt-[88px] bg-[#f8fafc] py-12 md:py-16">
      <div class="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <div
          class="h-full w-full"
          style="
            background-image: linear-gradient(rgba(0, 198, 254, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 198, 254, 0.45) 1px, transparent 1px);
            background-size: 48px 48px;
          "
        />
      </div>

      <div class="evt-reveal evt-filters-wrap relative z-[1] mx-auto max-w-[1180px] px-4 md:px-8">
        <header class="mb-8 md:mb-10 md:flex md:items-end md:justify-between md:gap-8">
          <div>
            <p class="evt-filters-eyebrow font-head">{{ t('eventos.heroEyebrow') }}</p>
            <h2 class="mt-2 font-head text-[clamp(24px,3.8vw,40px)] font-bold leading-[1.08] tracking-[-0.03em] text-[#0f172a]">
              {{ t('eventos.section2.title') }}
            </h2>
          </div>
          <p class="evt-filters-note mt-4 max-w-[360px] text-[13px] leading-relaxed text-[#64748b] md:mt-0 md:text-right">
            {{ t('eventos.section2.subtitle') }}
          </p>
        </header>

        <div class="evt-filters-panel">
          <div class="evt-filters-fields">
            <div class="evt-filters-field">
              <label class="evt-filters-label font-head">{{ t('eventos.section2.tipoEvento') }}</label>
              <el-select
                v-model="tipoEventoIdSelecionado"
                class="evt-filters-select"
                :placeholder="t('eventos.section2.tipoEvento')"
                filterable
                clearable
                @change="onChangeTipoEventoId"
              >
                <el-option
                  v-for="item in tipoEventos"
                  :key="item.id"
                  :label="getLocalizedField(item, 'nome')"
                  :value="item.id"
                />
              </el-select>
            </div>
            <div class="evt-filters-field">
              <label class="evt-filters-label font-head">{{ t('eventos.section2.localidade') }}</label>
              <el-select
                v-model="cidadeSelecionada"
                class="evt-filters-select"
                :placeholder="t('eventos.section2.localidade')"
                filterable
                clearable
                @change="onChangeLocalidade"
              >
                <el-option v-for="item in cidades" :key="item.id" :label="item.name" :value="item.name" />
              </el-select>
            </div>
            <div class="evt-filters-field">
              <label class="evt-filters-label font-head">{{ t('eventos.section2.mes') }}</label>
              <el-select
                v-model="mesSelecionado"
                class="evt-filters-select"
                :placeholder="t('eventos.section2.mes')"
                filterable
                clearable
                value-key="nome"
                @change="onChangeMes"
              >
                <el-option v-for="item in listaMeses()" :key="item.value" :label="item.nome" :value="item" />
              </el-select>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lista de provas (âncora #eventos — hero e CTA apontam aqui) -->
    <section id="eventos" class="evt-list-shell relative scroll-mt-[88px] overflow-x-clip bg-white py-14 md:py-20">
      <div class="evt-list-gridlines pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true"></div>
      <div class="relative z-[1] mx-auto max-w-[min(1200px,calc(100%-32px))] px-4 md:px-10">
        <div ref="evtGridStageRef" class="evt-grid-stage">
          <template v-if="isLoading">
            <div v-for="n in itemsPerPage" :key="'skeleton-' + n" class="evt-skel-card">
              <div class="evt-skel-card__shine" />
              <div class="evt-skel-card__media" />
              <div class="evt-skel-card__body">
                <div class="evt-skel-line evt-skel-line--w55" />
                <div class="evt-skel-line evt-skel-line--w80" />
                <div class="evt-skel-chips">
                  <div class="evt-skel-chip" />
                  <div class="evt-skel-chip evt-skel-chip--w" />
                </div>
                <div class="evt-skel-trust" />
                <div class="evt-skel-btn" />
              </div>
            </div>
          </template>

          <template v-else-if="eventosData.length === 0">
            <p class="evt-empty font-head col-span-full text-center text-[15px] text-[#64748b] md:text-[16px]">
              {{ t('eventos.empty') }}
            </p>
          </template>

          <template v-else>
            <article v-for="item in eventosData" :key="item.id" class="evt-card-reveal">
              <RouterLink :to="{ name: 'EventoDetalhe', params: { id: item.id } }" class="evt-card">
                <div class="evt-card__media">
                  <img
                    v-if="item.imagemUrl"
                    :src="item.imagemUrl"
                    :alt="getLocalizedField(item, 'titulo')"
                    class="evt-card__img"
                  />
                  <div v-else class="evt-card__placeholder" />
                  <div class="evt-card__media-grad" aria-hidden="true" />
                  <h3 class="evt-card__title">
                    {{ getLocalizedField(item, 'titulo') }}
                  </h3>
                </div>
                <div class="evt-card__body">
                  <div class="evt-card__meta">
                    <div class="evt-card__row">
                      <CalendarDaysIcon class="evt-card__row-ico" aria-hidden="true" />
                      <time class="evt-card__row-txt" :datetime="item.data">{{ formatDate(item.data) }}</time>
                    </div>
                    <div class="evt-card__row">
                      <MapPinIcon class="evt-card__row-ico" aria-hidden="true" />
                      <span class="evt-card__row-txt evt-card__row-txt--truncate">{{ item.local }}</span>
                    </div>
                    <template v-for="chips in [distanciaChips(item.distanciaEventos)]" :key="'dist-wrap-' + item.id">
                      <div v-if="chips.length" class="evt-card__dist">
                        <p class="evt-card__dist-eyebrow font-head">{{ t('eventos.card.distancesLabel') }}</p>
                        <div class="evt-card__chips">
                          <span
                            v-for="(chip, idx) in chips"
                            :key="item.id + '-d-' + idx"
                            class="evt-card__chip font-head"
                          >
                            {{ chip }}
                          </span>
                        </div>
                      </div>
                    </template>
                  </div>
                  <p class="evt-card__trust font-head">
                    <ShieldCheckIcon class="evt-card__trust-ico" aria-hidden="true" />
                    <span>{{ t('eventos.listEventos.subtitle') }}</span>
                  </p>
                  <div class="evt-card__cta-wrap">
                    <span class="evt-card__cta font-head">{{ t('eventos.listEventos.button') }}</span>
                  </div>
                </div>
              </RouterLink>
            </article>
          </template>
        </div>

        <div v-if="!isLoading && eventosData.length > 0" class="evt-pagination-wrap">
          <el-pagination
            v-model:current-page="currentPage"
            v-model:page-size="itemsPerPage"
            :total="totalItens"
            :pager-count="5"
            layout="prev, pager, next"
            background
            @current-change="buscarEventosPaginados"
          />
        </div>
      </div>
    </section>

    <!-- CTA organizadores -->
    <section class="evt-reveal evt-cta-org relative overflow-hidden bg-[#f8fafc]">
      <div class="evt-cta-org__bg-grid pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true" />
      <div class="evt-cta-org__glow pointer-events-none absolute -left-[20%] top-1/2 h-[min(90%,520px)] w-[55%] -translate-y-1/2 rounded-full blur-[100px]" aria-hidden="true" />

      <div class="evt-cta-org__inner relative z-[1] mx-auto max-w-[1200px] px-4 py-14 md:px-10 md:py-20 lg:py-24">
        <div class="evt-cta-org__layout">
          <div class="evt-cta-org__copy">
            <p class="evt-cta-org__eyebrow font-head">{{ t('eventos.heroEyebrow') }}</p>
            <h2 class="evt-cta-org__title font-head text-[clamp(26px,4vw,42px)] font-bold leading-[1.08] tracking-[-0.035em] text-[#0f172a]">
              {{ t('eventos.section3.title') }}
            </h2>
            <span class="evt-cta-org__rule" aria-hidden="true" />
            <p class="evt-cta-org__text mt-6 max-w-[52ch] text-[15px] leading-[1.82] text-[#475569] md:text-[16px]">
              {{ t('eventos.section3.text') }}
            </p>

            <ul class="evt-cta-org__list font-head" :aria-label="t('eventos.section3.title')">
              <li class="evt-cta-org__li">
                <span class="evt-cta-org__li-mark" aria-hidden="true" />
                <span>{{ t('eventos.section3.point1') }}</span>
              </li>
              <li class="evt-cta-org__li">
                <span class="evt-cta-org__li-mark" aria-hidden="true" />
                <span>{{ t('eventos.section3.point2') }}</span>
              </li>
              <li class="evt-cta-org__li">
                <span class="evt-cta-org__li-mark" aria-hidden="true" />
                <span>{{ t('eventos.section3.point3') }}</span>
              </li>
            </ul>

            <div class="evt-cta-org__actions">
              <RouterLink to="/contato" class="btn btn-lime evt-cta-org__btn-primary">
                {{ t('eventos.section3.button') }}
              </RouterLink>
              <RouterLink :to="{ name: 'Eventos', hash: '#eventos' }" class="btn btn-outline evt-cta-org__btn-secondary">
                {{ t('eventos.heroCtaEventos') }}
              </RouterLink>
            </div>
          </div>

          <div class="evt-cta-org__visual">
            <div class="evt-cta-org__frame">
              <img
                src="/src/assets/eventos-imgs/banner-03.jpg"
                alt=""
                class="evt-cta-org__img"
              />
              <div class="evt-cta-org__img-grad" aria-hidden="true" />
              <img
                src="/logoFit-column.png"
                alt=""
                class="evt-cta-org__logo-badge"
                width="168"
                loading="lazy"
                decoding="async"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        class="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-px bg-gradient-to-r from-transparent via-[#00C6FE]/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import EventoService from '../services/Eventos/eventos-services'
import { useI18n } from '../composables/useI18n'
import { MapPinIcon, CalendarDaysIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline'

gsap.registerPlugin(ScrollTrigger)

const tipoEventos = ref([])
const eventosData = ref([])
const { t, currentLocale } = useI18n()
const route = useRoute()
const evtGridStageRef = ref(null)

const cidadeSelecionada = ref('')
const mesSelecionado = ref('')
const tipoEventoIdSelecionado = ref('')
const isLoading = ref(false)

const currentPage = ref(1)
const itemsPerPage = 6
const totalItens = ref(0)

let evtGsapAlive = true
let evtStPostNavTimer = 0

function getLocalizedField(entity, field) {
  return currentLocale.value === 'en' ? entity[`en_${field}`] : entity[field]
}

const listaMeses = () => {
  return currentLocale.value === 'pt' ? mesesPt : mesesEn
}

const mesesPt = [
  { value: 1, nome: t('common.months.janeiro') },
  { value: 2, nome: t('common.months.fevereiro') },
  { value: 3, nome: t('common.months.marco') },
  { value: 4, nome: t('common.months.abril') },
  { value: 5, nome: t('common.months.maio') },
  { value: 6, nome: t('common.months.junho') },
  { value: 7, nome: t('common.months.julho') },
  { value: 8, nome: t('common.months.agosto') },
  { value: 9, nome: t('common.months.setembro') },
  { value: 10, nome: t('common.months.outubro') },
  { value: 11, nome: t('common.months.novembro') },
  { value: 12, nome: t('common.months.dezembro') },
]

const mesesEn = [
  { value: 1, nome: 'January' },
  { value: 2, nome: 'February' },
  { value: 3, nome: 'March' },
  { value: 4, nome: 'April' },
  { value: 5, nome: 'May' },
  { value: 6, nome: 'June' },
  { value: 7, nome: 'July' },
  { value: 8, nome: 'August' },
  { value: 9, nome: 'September' },
  { value: 10, nome: 'October' },
  { value: 11, nome: 'November' },
  { value: 12, nome: 'December' },
]

const cidades = computed(() => {
  const locais = eventosData?.value.map((e) => e.local).filter(Boolean)
  const unicos = [...new Set(locais)]
  return unicos.map((name) => ({ id: name, name }))
})

async function buscarEventosPaginados() {
  try {
    isLoading.value = true
    const response = await EventoService.getAllPaginated(
      currentPage.value,
      itemsPerPage,
      tipoEventoIdSelecionado.value || undefined,
      cidadeSelecionada.value !== '' ? cidadeSelecionada.value : undefined,
      mesSelecionado.value?.nome !== '' ? mesSelecionado.value?.value?.toString() : undefined
    )
    eventosData.value = response.data?.itens || []
    totalItens.value = response.data?.total || 0
  } catch (error) {
    console.error('Erro ao buscar eventos:', error)
    eventosData.value = []
    totalItens.value = 0
  } finally {
    isLoading.value = false
  }
}

const buscarTipoEventos = async () => {
  try {
    const res = await EventoService.getAllTipoEventos()
    tipoEventos.value = res.data || []
  } catch (error) {
    console.error('Erro ao buscar tipos de eventos:', error)
  }
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return currentLocale.value === 'pt' ? date.toLocaleDateString('pt-BR') : date.toLocaleDateString('en-US')
}

/** Lista de rótulos por percurso (chips), ex.: "5 km", "10 km" ou "3.1 mi" */
function distanciaChips(distancias) {
  if (!distancias?.length) return []
  return [...distancias]
    .sort((a, b) => a.distancia - b.distancia)
    .map((d) => {
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

watch(
  () => [tipoEventoIdSelecionado.value, cidadeSelecionada.value, mesSelecionado.value],
  async ([novoTipoEventoId, novoCidade, novoMes], [antigoTipoEventoId, antigoCidade, antigoMes]) => {
    if (
      novoTipoEventoId !== antigoTipoEventoId ||
      novoCidade !== antigoCidade ||
      novoMes !== antigoMes
    ) {
      currentPage.value = 1
      await buscarEventosPaginados()
    }
  }
)

watch(currentLocale, () => {
  nextTick(() => ScrollTrigger.refresh())
})

watch(
  () => route.name,
  (name) => {
    if (name !== 'Eventos') return
    nextTick(() => {
      requestAnimationFrame(() => ScrollTrigger.refresh())
      if (evtStPostNavTimer) window.clearTimeout(evtStPostNavTimer)
      evtStPostNavTimer = window.setTimeout(() => {
        evtStPostNavTimer = 0
        if (evtGsapAlive) ScrollTrigger.refresh()
      }, 520)
    })
  },
  { flush: 'post' }
)

watch([eventosData, isLoading], () => {
  nextTick(() => {
    if (!evtGsapAlive || typeof window === 'undefined') return
    requestAnimationFrame(() => {
      if (evtGsapAlive) ScrollTrigger.refresh()
    })
  })
})

function scrollToEventsFromHash() {
  const h = route.hash
  if (h !== '#eventos' && h !== '#calendario') return
  nextTick(() => {
    setTimeout(() => {
      const id = h === '#calendario' ? 'calendario' : 'eventos'
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 120)
  })
}

watch(
  () => route.hash,
  () => {
    if (route.name !== 'Eventos') return
    scrollToEventsFromHash()
  }
)

function onChangeTipoEventoId(e) {
  tipoEventoIdSelecionado.value = e
}
function onChangeLocalidade(e) {
  cidadeSelecionada.value = e
}
function onChangeMes(e) {
  mesSelecionado.value = e
}

onMounted(async () => {
  evtGsapAlive = true
  scrollToEventsFromHash()

  if (typeof window === 'undefined') {
    await buscarTipoEventos()
    await buscarEventosPaginados()
    return
  }

  const reduceMotion = false
  const heroEase = 'power3.out'

  if (!reduceMotion) {
    gsap.from('.evt-hero-item', {
      opacity: 0,
      y: 26,
      duration: 0.78,
      stagger: 0.11,
      ease: heroEase,
    })

    gsap.to('.evt-hero-bg', {
      yPercent: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: '.evt-hero-shell',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    gsap.utils.toArray('.evt-reveal').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 32,
        duration: 0.75,
        ease: heroEase,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      })
    })
  }

  await buscarTipoEventos()
  await buscarEventosPaginados()

  evtStPostNavTimer = window.setTimeout(() => {
    evtStPostNavTimer = 0
    if (evtGsapAlive) ScrollTrigger.refresh()
  }, 520)
})

onUnmounted(() => {
  evtGsapAlive = false
  if (evtStPostNavTimer) {
    window.clearTimeout(evtStPostNavTimer)
    evtStPostNavTimer = 0
  }
})
</script>

<style scoped lang="postcss">
@reference "../style.css";

.evt-page {
  --evt-btn-radius: 8px;
  --evt-btn-duration: 0.22s;
  --evt-btn-ease: cubic-bezier(0.2, 0.8, 0.2, 1);
  --evt-btn-lift: translateY(-1px);
  --evt-btn-press: scale(0.98);
}

.font-head {
  font-family: 'Space Grotesk', sans-serif;
}
.font-body {
  font-family: 'DM Sans', sans-serif;
}

.eyebrow,
.section-tag {
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
.eyebrow::before,
.section-tag::before {
  content: '';
  width: 22px;
  height: 2px;
  background: #88ce0d;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: var(--evt-btn-radius);
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
    transform var(--evt-btn-duration) var(--evt-btn-ease),
    box-shadow var(--evt-btn-duration) var(--evt-btn-ease),
    border-color var(--evt-btn-duration) var(--evt-btn-ease),
    background-color var(--evt-btn-duration) var(--evt-btn-ease),
    color var(--evt-btn-duration) var(--evt-btn-ease);
}
.btn:focus-visible {
  outline: 2px solid #00c6fe;
  outline-offset: 3px;
}
.btn:active:not(:disabled) {
  transform: var(--evt-btn-press);
}
.btn-outline {
  background: transparent;
  border-color: #cbd5e1;
  color: #0f172a;
}
.btn-outline:hover {
  border-color: #00c6fe;
  color: #00c6fe;
  transform: var(--evt-btn-lift);
  box-shadow: 0 10px 28px -14px rgba(0, 198, 254, 0.35);
}
.btn-lime {
  padding: 14px 28px;
  font-size: 14px;
  letter-spacing: 0.06em;
  background: #88ce0d;
  color: #060606;
}
.btn-lime:hover {
  transform: var(--evt-btn-lift);
  background: #9dea0f;
  box-shadow: 0 18px 40px -12px rgba(136, 206, 13, 0.55);
}
.evt-hero-shell .btn-outline {
  border-color: rgba(255, 255, 255, 0.22);
  color: #fff;
}

@media (max-width: 767px) {
  .evt-page .btn {
    font-size: 11px;
    padding: 9px 16px;
    min-height: 42px;
  }
  .evt-page .btn-lime {
    padding: 10px 18px;
  }
}

/* Hero */
.evt-hero-shell {
  background: #060606;
}
.evt-hero-bg {
  will-change: transform;
}
.evt-hero-overlay {
  background:
    linear-gradient(to right, rgba(6, 6, 6, 0.94) 0%, rgba(6, 6, 6, 0.82) 42%, rgba(6, 6, 6, 0.55) 100%),
    linear-gradient(to top, rgba(6, 6, 6, 0.88) 0%, transparent 55%),
    rgba(6, 6, 6, 0.32);
}
.evt-hero-grid {
  background-image:
    linear-gradient(rgba(0, 198, 254, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 198, 254, 0.04) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.12) 58%, transparent 100%);
}
.evt-hero-title__dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-left: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, #88ce0d, #00c6fe);
  vertical-align: super;
}

/* Kicker */
.evt-kicker__grid {
  display: grid;
  gap: 24px;
  align-items: start;
}
@media (min-width: 768px) {
  .evt-kicker__grid {
    grid-template-columns: auto 1fr minmax(120px, 220px);
    gap: 28px 36px;
    align-items: center;
  }
}
.evt-kicker__aside {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 4px;
}
.evt-kicker__glyph {
  font-size: 42px;
  font-weight: 700;
  line-height: 0.85;
  color: #00c6fe;
  opacity: 0.85;
}
.evt-kicker__glyph--dim {
  font-size: 28px;
  opacity: 0.35;
}
.evt-kicker__logo {
  display: none;
  width: clamp(88px, 16vw, 150px);
  height: auto;
  max-height: min(42vh, 220px);
  justify-self: end;
  object-fit: contain;
  object-position: right center;
  opacity: 0.95;
}
@media (min-width: 768px) {
  .evt-kicker__logo {
    display: block;
  }
}

/* Mood */
.evt-mood__img {
  will-change: transform;
  transform-origin: center center;
}
.evt-mood__veil {
  background: linear-gradient(90deg, rgba(6, 6, 6, 0.55) 0%, transparent 38%, rgba(6, 6, 6, 0.4) 100%),
    linear-gradient(to top, rgba(6, 6, 6, 0.75), transparent 45%);
}

/* Filtros */
.evt-filters-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #00c6fe;
}
.evt-filters-note {
  border-left: 2px solid rgba(136, 206, 13, 0.4);
  padding-left: 16px;
}
@media (min-width: 768px) {
  .evt-filters-note {
    border-left: none;
    border-top: 2px solid rgba(136, 206, 13, 0.35);
    padding-left: 0;
    padding-top: 12px;
  }
}
.evt-filters-panel {
  border-radius: 16px;
  border: 1px solid #dbe3ef;
  background: linear-gradient(165deg, #ffffff 0%, #f8fafc 100%);
  padding: 22px 20px 24px;
  box-shadow: 0 24px 60px -40px rgba(15, 23, 42, 0.22);
}
.evt-filters-fields {
  display: grid;
  gap: 18px;
}
@media (min-width: 768px) {
  .evt-filters-fields {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
  }
}
.evt-filters-label {
  display: block;
  margin-bottom: 8px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #64748b;
}

.evt-filters-select {
  width: 100%;
}
.evt-filters-select :deep(.el-select__wrapper) {
  min-height: 46px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: none;
  border: 1px solid #dbe3ef;
}
.evt-filters-select :deep(.el-select__wrapper:hover) {
  border-color: rgba(0, 198, 254, 0.45);
}
.evt-filters-select :deep(.el-select__placeholder),
.evt-filters-select :deep(.el-select__selected-item) {
  color: #334155;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
}
.evt-filters-select :deep(.el-select__caret) {
  color: #00c6fe;
}

/* Lista de eventos — fundo e grade como Certificados (bento) */
.evt-list-shell {
  background: #ffffff;
}
.evt-list-gridlines {
  background-image:
    linear-gradient(rgba(0, 198, 254, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 198, 254, 0.06) 1px, transparent 1px);
  background-size: 56px 56px;
}

/* Grade: 2 colunas no tablet, 3 no desktop — tamanho equilibrado */
.evt-grid-stage {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
}
@media (min-width: 640px) {
  .evt-grid-stage {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px 22px;
  }
}
@media (min-width: 1100px) {
  .evt-grid-stage {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 22px;
  }
}

/* Card = mesma linguagem de .cert-bento-cell__surface (vidro escuro + lime/cyan) */
.evt-card {
  display: flex;
  height: 100%;
  min-height: 100%;
  flex-direction: column;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid #dbe3ef;
  background: linear-gradient(165deg, #ffffff 0%, #f8fafc 100%);
  text-decoration: none;
  color: inherit;
  box-shadow: 0 24px 56px -36px rgba(15, 23, 42, 0.22);
  transition:
    border-color 0.3s ease,
    box-shadow 0.35s ease,
    transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.evt-card:hover {
  border-color: rgba(0, 198, 254, 0.45);
  box-shadow: 0 24px 56px -28px rgba(0, 198, 254, 0.12);
  transform: translateY(-2px);
}
.evt-card__media {
  position: relative;
  /* Mais altura que 16/9 para duas linhas de título + gradiente sem cortar na borda do body */
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #0a0a0a;
}
.evt-card__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.55s cubic-bezier(0.2, 0.8, 0.2, 1);
  will-change: transform;
}
.evt-card:hover .evt-card__img {
  transform: scale(1.05);
}
.evt-card__placeholder {
  position: absolute;
  inset: 0;
  background: linear-gradient(155deg, rgba(0, 198, 254, 0.2) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(136, 206, 13, 0.12) 100%);
}
.evt-card__media-grad {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(6, 6, 6, 0.88) 0%, rgba(6, 6, 6, 0.25) 48%, transparent 100%);
  pointer-events: none;
}
.evt-card__title {
  position: absolute;
  z-index: 2;
  left: 14px;
  right: 14px;
  bottom: 14px;
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(0.94rem, 1.5vw, 1.08rem);
  font-weight: 700;
  line-height: 1.3;
  color: #fff;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.55);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  overflow: hidden;
  overflow-wrap: break-word;
  word-break: break-word;
}
.evt-card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 18px 18px 20px;
  gap: 0;
  border-top: 1px solid #e2e8f0;
  background: linear-gradient(180deg, rgba(0, 198, 254, 0.06) 0%, transparent 42%);
}
.evt-card__meta {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.evt-card__row {
  display: grid;
  grid-template-columns: 20px minmax(0, 1fr);
  column-gap: 12px;
  align-items: start;
  font-size: 14px;
  line-height: 1.5;
  color: #475569;
}
.evt-card__row-ico {
  width: 18px;
  height: 18px;
  margin-top: 2px;
  flex-shrink: 0;
  color: #00c6fe;
}
.evt-card__row-txt {
  min-width: 0;
  font-weight: 500;
}
.evt-card__row-txt--truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.evt-card__dist {
  margin-top: 4px;
  padding-top: 14px;
  border-top: 1px solid #e2e8f0;
}
.evt-card__dist-eyebrow {
  margin: 0 0 10px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #00c6fe;
}
.evt-card__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.evt-card__chip {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid rgba(0, 198, 254, 0.45);
  background: rgba(0, 198, 254, 0.1);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #0369a1;
}
.evt-card__trust {
  margin: 18px 0 0;
  padding: 0 0 0 14px;
  border-left: 2px solid rgba(136, 206, 13, 0.55);
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 10px;
  font-weight: 700;
  line-height: 1.45;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #64748b;
}
.evt-card__trust-ico {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: 1px;
  color: #00c6fe;
}
/* Espaço fixo de 5px acima do CTA mantendo o botão no rodapé do card (flex) */
.evt-card__cta-wrap {
  margin-top: auto;
  padding-top: 10px;
  align-self: stretch;
}
/* CTA alinhado a .cert-bento-cell__cta */
.evt-card__cta {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  min-height: 44px;
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
.evt-card:hover .evt-card__cta {
  background: #0f172a;
  border-color: #0f172a;
  color: #fff;
}

.evt-pagination-wrap {
  display: flex;
  justify-content: center;
  margin-top: 36px;
}
.evt-pagination-wrap :deep(.el-pagination.is-background .el-pager li.is-active) {
  background-color: #88ce0d !important;
  color: #060606 !important;
}
.evt-pagination-wrap :deep(.el-pagination.is-background .btn-prev),
.evt-pagination-wrap :deep(.el-pagination.is-background .btn-next),
.evt-pagination-wrap :deep(.el-pagination.is-background .el-pager li) {
  background-color: #ffffff !important;
  color: #334155 !important;
  border: 1px solid #dbe3ef;
}
.evt-pagination-wrap :deep(.el-pagination.is-background .btn-prev:hover),
.evt-pagination-wrap :deep(.el-pagination.is-background .btn-next:hover),
.evt-pagination-wrap :deep(.el-pagination.is-background .el-pager li:hover) {
  border-color: rgba(0, 198, 254, 0.45);
  color: #00c6fe !important;
}

/* Skeleton — só opacidade, sem animate-pulse do Tailwind */
@keyframes evt-skel-shimmer {
  0%,
  100% {
    opacity: 0.45;
  }
  50% {
    opacity: 0.9;
  }
}
.evt-skel-card {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid #dbe3ef;
  background: linear-gradient(165deg, #ffffff 0%, #f8fafc 100%);
  box-shadow: 0 24px 56px -36px rgba(15, 23, 42, 0.2);
}
.evt-skel-card__shine {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(
    105deg,
    transparent 0%,
    rgba(0, 198, 254, 0.1) 45%,
    transparent 90%
  );
  animation: evt-skel-shimmer 1.4s ease-in-out infinite;
}
.evt-skel-card__media {
  aspect-ratio: 16 / 10;
  background: #e2e8f0;
}
.evt-skel-card__body {
  padding: 18px 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-top: 1px solid #e2e8f0;
  background: linear-gradient(180deg, rgba(0, 198, 254, 0.05) 0%, transparent 40%);
}
.evt-skel-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 12px;
  margin-top: 4px;
  border-top: 1px solid #e2e8f0;
}
.evt-skel-chip {
  width: 44px;
  height: 24px;
  border-radius: 999px;
  background: rgba(136, 206, 13, 0.12);
  border: 1px solid rgba(136, 206, 13, 0.25);
}
.evt-skel-chip--w {
  width: 52px;
}
.evt-skel-trust {
  height: 12px;
  max-width: 180px;
  border-radius: 2px;
  background: #e2e8f0;
  border-left: 2px solid rgba(136, 206, 13, 0.4);
  padding-left: 12px;
}
.evt-skel-line {
  height: 10px;
  border-radius: 6px;
  background: #e2e8f0;
}
.evt-skel-line--w50 {
  width: 50%;
}
.evt-skel-line--w80 {
  width: 80%;
}
.evt-skel-line--w70 {
  width: 70%;
}
.evt-skel-line--w35 {
  width: 35%;
}
.evt-skel-line--w90 {
  width: 90%;
}
.evt-skel-line--mt {
  margin-top: 6px;
}
.evt-skel-btn {
  margin-top: auto;
  height: 44px;
  border-radius: 999px;
  background: rgba(136, 206, 13, 0.35);
  border: 1px solid rgba(136, 206, 13, 0.45);
}

/* CTA final */
.evt-cta-org__bg-grid {
  background-image:
    linear-gradient(rgba(0, 198, 254, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 198, 254, 0.06) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.35) 0%, transparent 70%);
}
.evt-cta-org__glow {
  background: radial-gradient(closest-side, rgba(0, 198, 254, 0.22) 0%, rgba(136, 206, 13, 0.08) 45%, transparent 70%);
}

.evt-cta-org__layout {
  display: grid;
  gap: 40px;
  align-items: center;
}
@media (min-width: 900px) {
  .evt-cta-org__layout {
    grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.95fr);
    gap: 48px 56px;
  }
}

.evt-cta-org__copy {
  position: relative;
  padding-top: 8px;
  border-top: 4px solid #88ce0d;
}
@media (min-width: 640px) {
  .evt-cta-org__copy {
    padding-top: 0;
    padding-left: 24px;
    border-top: none;
    border-left: 4px solid #88ce0d;
  }
}

.evt-cta-org__eyebrow {
  margin-bottom: 12px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #00c6fe;
}

.evt-cta-org__rule {
  display: block;
  margin-top: 18px;
  height: 3px;
  width: 72px;
  border-radius: 2px;
  background: linear-gradient(90deg, #88ce0d, #00c6fe);
}

.evt-cta-org__list {
  margin: 28px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.evt-cta-org__li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.45;
  letter-spacing: -0.01em;
  color: #334155;
}
@media (min-width: 768px) {
  .evt-cta-org__li {
    font-size: 15px;
  }
}
.evt-cta-org__li-mark {
  position: relative;
  flex-shrink: 0;
  margin-top: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #88ce0d, #00c6fe);
  box-shadow: 0 0 0 3px rgba(136, 206, 13, 0.2);
  animation: evt-cta-mark-glow 2.4s ease-in-out infinite;
}
.evt-cta-org__li-mark::before,
.evt-cta-org__li-mark::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  border: 1.5px solid rgba(136, 206, 13, 0.55);
  pointer-events: none;
  animation: evt-cta-mark-pulse 2.4s ease-out infinite;
  transform-origin: center;
}
.evt-cta-org__li-mark::after {
  border-color: rgba(0, 198, 254, 0.5);
  animation-delay: 1.2s;
}
.evt-cta-org__li:nth-child(2) .evt-cta-org__li-mark { animation-delay: 0.4s; }
.evt-cta-org__li:nth-child(2) .evt-cta-org__li-mark::before { animation-delay: 0.4s; }
.evt-cta-org__li:nth-child(2) .evt-cta-org__li-mark::after  { animation-delay: 1.6s; }
.evt-cta-org__li:nth-child(3) .evt-cta-org__li-mark { animation-delay: 0.8s; }
.evt-cta-org__li:nth-child(3) .evt-cta-org__li-mark::before { animation-delay: 0.8s; }
.evt-cta-org__li:nth-child(3) .evt-cta-org__li-mark::after  { animation-delay: 2s; }

@keyframes evt-cta-mark-pulse {
  0%   { transform: scale(0.85); opacity: 0.85; }
  70%  { transform: scale(2.4);  opacity: 0; }
  100% { transform: scale(2.4);  opacity: 0; }
}
@keyframes evt-cta-mark-glow {
  0%, 100% { box-shadow: 0 0 0 3px rgba(136, 206, 13, 0.18); }
  50%      { box-shadow: 0 0 0 4px rgba(136, 206, 13, 0.32); }
}

@media (prefers-reduced-motion: reduce) {
  .evt-cta-org__li-mark,
  .evt-cta-org__li-mark::before,
  .evt-cta-org__li-mark::after {
    animation: none;
  }
}

.evt-cta-org__actions {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
}

.evt-cta-org__btn-primary {
  min-height: 48px;
}

.evt-cta-org__btn-secondary {
  border-color: #cbd5e1;
  color: #0f172a;
}
.evt-cta-org__btn-secondary:hover {
  border-color: #00c6fe;
  color: #00c6fe;
  background: rgba(0, 198, 254, 0.08);
}

.evt-cta-org__visual {
  position: relative;
}
.evt-cta-org__frame {
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid #dbe3ef;
  background: #0a0a0a;
  box-shadow: 0 28px 70px -36px rgba(0, 0, 0, 0.75);
  min-height: 240px;
}
@media (min-width: 900px) {
  .evt-cta-org__frame {
    min-height: 320px;
  }
}
.evt-cta-org__img {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 240px;
  object-fit: cover;
  object-position: center;
}
@media (min-width: 900px) {
  .evt-cta-org__img {
    min-height: 320px;
  }
}
.evt-cta-org__img-grad {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(125deg, rgba(6, 6, 6, 0.75) 0%, transparent 42%),
    linear-gradient(to top, rgba(6, 6, 6, 0.55) 0%, transparent 48%),
    linear-gradient(90deg, rgba(136, 206, 13, 0.12) 0%, transparent 55%);
}
.evt-cta-org__logo-badge {
  position: absolute;
  right: 14px;
  bottom: 14px;
  z-index: 1;
  width: clamp(108px, 26vw, 168px);
  height: auto;
  max-height: 38%;
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(6, 6, 6, 0.5);
  object-fit: contain;
  object-position: center;
  backdrop-filter: blur(8px);
}

@media (prefers-reduced-motion: reduce) {
  .evt-card {
    transition: none;
  }
  .evt-card:hover {
    transform: none;
  }
  .evt-card__img {
    transition: none;
  }
  .evt-card:hover .evt-card__img {
    transform: none;
  }
  .evt-skel-card__shine {
    animation: none;
    opacity: 0.35;
  }
  .btn:hover,
  .btn:active {
    transform: none;
  }
}
</style>
