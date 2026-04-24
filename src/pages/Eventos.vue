<template>
  <section
    class="bg-[url('/src/assets/eventos-imgs/banner-01.jpg')] w-full h-[128.4px] md:h-[263px] lg:h-[397px] bg-left lg:bg-center bg-cover flex justify-center items-center ">
    <div class="w-full container flex items-center justify-center">
      <div
        class="w-full max-w-[261px] h-[53px] md:max-w-[659px] md:h-[82px] lg:max-w-[728px] lg:h-[131.1px] bg-cyan-400 transform -skew-x-12 flex items-center justify-center text-center text-white font-[600] italic">
        <h1 class="text-[1.625em] md:text-[2.5em] lg:text-[4.5em]">
          {{ t('eventos.title') }}
        </h1>
      </div>
    </div>
  </section>

  <section class="w-full flex justify-center ">
    <div class="w-full  lg:h-[240px] flex justify-center items-center bg-sky-50">
      <div class=" w-full p-5 md:p-10">
        <h2
          class="text-[1.375em] md:text-[1.5em] lg:text-[2.25em] text-cyan-400 font-[600] italic leading-[34px]  text-center">
          {{ t('eventos.subtitle') }}
        </h2>
      </div>
    </div>
  </section>

  <section class="flex flex-col items-center justify-center p-5 lg:p-10">
    <div class="container flex flex-col justify-center items-center lg:h-[223px] bg-white ">
      <p
        class="text-[1em] lg:text-[1.375em] md:text-center leading-[30px] md:leading-[35px] max-h-[205px] md:max-h-full overflow-scroll md:overflow-auto">
        {{ t('eventos.section1.text') }}
      </p>
    </div>

    <section class="bg-sky-50 w-full flex justify-center mt-20">
      <div class="container flex flex-col items-center ">
        <div class="flex flex-col text-center gap-5 w-full items-center">
          <h3 class="text-[2.25em] italic text-lime-500 font-[600]">
            {{ t('eventos.section2.title') }}
          </h3>
          <span class="text-[1.5em] text-lime-500 font-[700]">
            {{ t('eventos.section2.subtitle') }}
          </span>

          <div class="flex gap-5 flex-col md:flex-row w-full md:justify-center items-center">
            <div class="w-full md:max-w-[200px]">
              <el-select v-model="tipoEventoIdSelecionado" :options="tipos" :placeholder="t('eventos.section2.tipoEvento')"
                style="width: 100%;" filterable clearable @change="(e) => onChangeTipoEventoId(e)">
                <el-option v-for="item in tipoEventos" :key="item.id" :label="getLocalizedField(item, 'nome')" :value="item.id" />
              </el-select>
            </div>

            <div class="w-full md:max-w-[200px]">
              <el-select v-model="cidadeSelecionada" :placeholder="t('eventos.section2.localidade')" style="width: 100%;" filterable clearable
                @change="(e) => onChangeLocalidade(e)">
                <el-option v-for="item in cidades" :key="item.id" :label="item.name" :value="item.name" />
              </el-select>
            </div>

            <div class="w-full md:max-w-[200px]">
              <el-select v-model="mesSelecionado" :placeholder="t('eventos.section2.mes')" style="width: 100%;" filterable clearable
                value-key="nome" @change="(e) => onChangeMes(e)">
                <el-option v-for="item in listaMeses()" :key="item.value" :label="item.nome" :value="item" />
              </el-select>
            </div>
          </div>

          <div class="hidden md:flex lg:hidden">
            <img class="w-full  h-[302px] object-cover object-bottom" src="../assets/eventos-imgs/banner-02.jpg" alt="">
          </div>

          <div class="grid grid-cols-1 md:grid-cols-[3fr_1fr] lg:grid-cols-[5fr_1fr] gap-5 h-auto w-full ">

            <div class="flex flex-col gap-2">
              <div class="hidden lg:flex">
                <img class="w-full  h-[302px] object-cover object-bottom" src="../assets/eventos-imgs/banner-02.jpg"
                  alt="">
              </div>
              <div class="w-full block justify-center lg:mt-5">
                <!-- 🔹 Grid de Eventos -->
                <div class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 w-full gap-5 justify-center">
                  <!-- Skeletons -->
                  <template v-if="isLoading">
                    <div v-for="n in itemsPerPage" :key="'skeleton-' + n"
                      class="bg-white w-full rounded-[12px] shadow-lg animate-pulse flex flex-col overflow-hidden">
                      <div class="aspect-[16/9] w-full bg-gray-300 flex-shrink-0"></div>
                      <div class="p-4 flex flex-col gap-3">
                        <div class="h-4 w-1/2 bg-gray-200 rounded"></div>
                        <div class="h-4 w-2/3 bg-gray-200 rounded"></div>
                        <div class="h-4 w-1/3 bg-gray-200 rounded"></div>
                        <div class="h-4 w-3/4 bg-gray-200 rounded mt-2"></div>
                        <div class="h-[42px] w-full bg-gray-300 rounded-full mt-2"></div>
                      </div>
                    </div>
                  </template>

                  <!-- Eventos -->
                  <template v-else>
                    <div v-for="item in eventosData" :key="item.id"
                      class="group bg-white w-full text-start flex flex-col rounded-[12px] shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1">
                      <div class="relative w-full aspect-[16/9] overflow-hidden flex-shrink-0 bg-gray-100">
                        <img v-if="item.imagemUrl" :src="item.imagemUrl" :alt="getLocalizedField(item, 'titulo')"
                          class="absolute inset-0 w-full h-full object-cover block transition-transform duration-500 group-hover:scale-105" />
                        <div v-else class="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-400 to-lime-400"></div>
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                        <h1 class="absolute bottom-0 left-0 right-0 p-3 text-white font-[700] text-[1.05em] lg:text-[1.17em] leading-tight drop-shadow-md line-clamp-2">
                          {{ getLocalizedField(item, 'titulo') }}
                        </h1>
                      </div>

                      <div class="p-4 flex flex-col flex-1">
                        <div class="flex flex-col gap-2 pb-3 border-b border-gray-100">
                          <span class="text-[0.85em] flex items-center gap-2 text-gray-700">
                            <MapPinIcon class="w-4 h-4 text-cyan-400 shrink-0" />
                            <span class="truncate">{{ item.local }}</span>
                          </span>
                          <span class="text-[0.85em] flex items-center gap-2 text-gray-700">
                            <CalendarDaysIcon class="w-4 h-4 text-cyan-400 shrink-0" />
                            {{ formatDate(item.data) }}
                          </span>
                          <span class="text-[0.85em] flex items-center gap-2 text-gray-700">
                            <FlagIcon class="w-4 h-4 text-cyan-400 shrink-0" />
                            <span class="truncate">{{ formatDistancias(item.distanciaEventos) }}</span>
                          </span>
                        </div>

                        <div class="flex items-center gap-1.5 mt-3 mb-4">
                          <ShieldCheckIcon class="w-4 h-4 text-cyan-500 shrink-0" />
                          <span class="text-[0.75em] font-medium text-cyan-600">
                            {{ t('eventos.listEventos.subtitle') }}
                          </span>
                        </div>

                        <RouterLink :to="{ name: 'EventoDetalhe', params: { id: item.id } }"
                          class="mt-auto w-full h-[42px] bg-cyan-400 hover:bg-cyan-500 text-white rounded-full text-[0.9em] font-semibold duration-300 cursor-pointer flex items-center justify-center gap-2 group/btn shadow-sm hover:shadow-md">
                          {{ t('eventos.listEventos.button') }}
                          <ArrowRightIcon class="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </RouterLink>
                      </div>
                    </div>
                  </template>
                </div>

                <!-- 🔹 Paginação -->
                <div class="flex justify-center mt-15 md:mt-20">
                  <el-pagination v-model:current-page="currentPage" v-model:page-size="itemsPerPage" :total="totalItens"
                    :pager-count="5" layout="prev, pager, next" background @current-change="buscarEventosPaginados" />
                </div>
              </div>
            </div>

            <div class="w-full hidden md:flex flex-col gap-5 lg:items-end">
              <img class="w-full max-w-[234px] h-[303px] object-cover" src="../assets/eventos-imgs/image-01.jpg" alt="">
              <img class="w-full max-w-[234px] h-[168px] object-cover" src="../assets/eventos-imgs/image-02.jpg" alt="">
              <img class="w-full max-w-[234px] h-[231px] object-cover" src="../assets/eventos-imgs/image-03.jpg" alt="">
              <img class="w-full max-w-[234px] h-[354px] object-cover" src="../assets/eventos-imgs/image-04.jpg" alt="">
              <img class="w-full max-w-[234px] h-[238px] object-cover" src="../assets/eventos-imgs/image-05.jpg" alt="">
              <img class="w-full max-w-[234px] h-[168px] object-cover" src="../assets/eventos-imgs/image-06.jpg" alt="">
              <img class="w-full max-w-[234px] h-[169px] object-cover" src="../assets/eventos-imgs/image-07.jpg" alt="">
            </div>

          </div>

        </div>
      </div>
    </section>
  </section>

  <section class="w-full">
    <div class="flex conteiner flex-col items-center md:items-stretch md:flex-row h-auto md:h-auto lg:h-[412.82px]">
      <div class="w-full md:max-w-[854.25px]">
        <img class="w-full md:h-full h-[350px] lg:h-[412.82px] object-cover object-left xl:object-center"
          src="../assets/eventos-imgs/banner-03.jpg" alt="">
      </div>

      <div
        class=" w-full max-w-[655px] flex md:h-auto flex-col lg:items-center justify-center gap-[22px] md:gap-[20px] p-5 md:p-10">
        <h2 class="text-[1.75em] md:text-[2em] lg:text-[2.25em]  font-[700] italic text-cyan-400
        w-full  lg:leading-[55px]">
        {{ t('eventos.section3.title') }}
        </h2>
        <p class="text-[1em] lg:text-[1.25em] leading-[30px] md:leading-[35px] lg:leading-[40px] lg:flex
        w-full">
        {{ t('eventos.section3.text') }}
        </p>

        <div class="w-full flex ">
          <RouterLink
            class="flex w-[284px] lg:w-[282px] h-[40px] lg:h-[40px] border-1 border-cyan-400 items-center justify-center rounded-[30px] text-[0.8em] text-white font-[500] bg-cyan-400 hover:bg-cyan-500  duration-300"
            to="/contato">
            {{ t('eventos.section3.button') }}
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue'
import { RouterLink } from 'vue-router'
import EventoService from '../services/Eventos/eventos-services'
import { useI18n } from '../composables/useI18n'
import { MapPinIcon, CalendarDaysIcon, FlagIcon, ShieldCheckIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'

const tipoEventos = ref([])
const eventosData = ref([])
const { t, currentLocale } = useI18n();
const cidadeSelecionada = ref('')
const mesSelecionado = ref('')
const tipoEventoIdSelecionado = ref('')
const isLoading = ref(false)

// Paginação
const currentPage = ref(1)
const itemsPerPage = 6
const totalItens = ref(0)

function getLocalizedField(tipoEventos, field) {
  return currentLocale.value === 'en' ? tipoEventos[`en_${field}`] : tipoEventos[field]
}

const listaMeses = () => {
  if (currentLocale.value === 'pt') {
    return mesesPt
  } else {
    return mesesEn
  }
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
  { value: 12, nome: t('common.months.dezembro') }
];

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
  { value: 12, nome: 'December' }
];

onMounted(async () => {
  await buscarTipoEventos()
  await buscarEventosPaginados()
})

const cidades = computed(() => {
  const locais = eventosData?.value.map(e => e.local).filter(Boolean)
  const unicos = [...new Set(locais)]

  return [
    ...unicos.map((c, i) => ({ name: c }))
  ]
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
  if (currentLocale.value === 'pt') {
      return date.toLocaleDateString('pt-BR')
  } else {
      return date.toLocaleDateString('en-US')
  }
}

function formatDistancias(distancias) {
  if (!distancias || !distancias.length) return ''
  return distancias
    .sort((a, b) => a.distancia - b.distancia)
    .map((d) => {
      if (currentLocale.value === 'en') {
        const miles = (d.distancia * 0.621371).toFixed(1)
        return `${miles}mi`
      }
      return `${d.distancia}K`
    })
    .join(' | ')
}

watch(
  () => [tipoEventoIdSelecionado.value, cidadeSelecionada.value, mesSelecionado.value],
  async (
    [novoTipoEventoId, novoCidade, novoMes],
    [antigoTipoEventoId, antigoCidade, antigoMes]
  ) => {
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

const onChangeTipoEventoId = (e) => {
  tipoEventoIdSelecionado.value = e
}

const onChangeLocalidade = (e) => {
  cidadeSelecionada.value = e
}

const onChangeMes = (e) => {
  mesSelecionado.value = e
}
</script>
