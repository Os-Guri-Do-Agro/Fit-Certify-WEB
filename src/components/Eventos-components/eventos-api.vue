<template>
  <div>
    <!-- 🔹 Grid de Eventos -->
    <div class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 w-full gap-5 justify-center">
      <!-- Skeletons -->
      <template v-if="isLoading">
        <div v-for="n in itemsPerPage" :key="'skeleton-' + n"
          class="bg-white w-full h-[252px] p-3 rounded-[12px] shadow-lg animate-pulse flex flex-col gap-3">
          <div class="h-6 w-3/4 bg-gray-300 rounded"></div>
          <div class="h-4 w-1/2 bg-gray-300 rounded"></div>
          <div class="h-4 w-2/3 bg-gray-300 rounded"></div>
          <div class="h-4 w-1/3 bg-gray-300 rounded"></div>
          <div class="h-6 w-2/3 bg-gray-200 rounded mt-3"></div>
          <div class="h-10 w-[150px] bg-gray-300 rounded-full mt-3"></div>
        </div>
      </template>

      <!-- Eventos -->
      <template v-else>
        <div v-for="item in Eventos.data" :key="item.id"
          class="bg-white w-full h-[252px] p-3 text-start gap-1 flex flex-col rounded-[12px] shadow-lg">
          <h1 class="md:text-[1em] lg:text-[1.17em] font-[700] text-lime-500">
            {{ item.titulo }}
          </h1>
          <span class="text-[0.85em] flex items-center gap-1">
            📍 {{ item.local }}
          </span>
          <span class="text-[0.85em] flex items-center gap-1">
            📅 {{ formatDate(item.data) }}
          </span>
          <span class="text-[0.85em] flex items-center gap-1">
            🏃 {{ formatDistancias(item.distanciaEventos) }}
          </span>

          <div
            class="bg-cyan-50 text-cyan-400 text-[0.7em] rounded-[8px] w-full max-w-[241px] flex items-center px-2 mt-3 mb-3">
            {{ t('eventos.listEventos.subtitle') }}
          </div>

          <RouterLink :to="{ name: 'EventoDetalhe', params: { id: item.id } }"
            class="w-full max-w-[178.4px] h-[40px] bg-cyan-400 hover:bg-cyan-500 text-white rounded-full text-[0.9em] font-medium duration-300 cursor-pointer flex items-center justify-center">
            {{ t('eventos.listEventos.button') }}
          </RouterLink>
        </div>
      </template>
    </div>

    <!-- 🔹 Paginação -->
    <div class="flex justify-center mt-15 md:mt-20">
      <el-pagination v-model:current-page="currentPage" v-model:page-size="itemsPerPage" :total="totalItens"
        :pager-count="5" layout="prev, pager, next" background @current-change="buscarEventos" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import EventosService from '../../services/Eventos/eventos-services'
import { useI18n } from '../../composables/useI18n'

interface Evento {
  id: string
  titulo: string
  local?: string
  data?: string
  tipoEventoId?: string
  createdAt: string
  distanciasEvento?: { distancia: number }[]
  [key: string]: any
}

const { t } = useI18n();
const Eventos = ref<{ data: Evento[] }>({ data: [] })
const isLoading = ref(false)

const props = defineProps<{
  cidade?: string
  mes?: { value: string, nome: string }
  tipoEventoId?: string
}>()

// paginação
const currentPage = ref(1)
const itemsPerPage = 6
const totalItens = ref(0)

async function buscarEventos() {
  try {
    isLoading.value = true

    const response = await EventosService.getAllPaginated(
      currentPage.value,
      itemsPerPage,
      props.tipoEventoId || undefined,
      props.cidade !== '' ? props.cidade : undefined,
      props.mes?.nome !== '' ? props.mes?.value?.toString() : undefined
    )

    const data: Evento[] = response.data.itens
    totalItens.value = response.data?.total

    Eventos.value.data = data
      .sort(
        (a: Evento, b: Evento) =>
          new Date(b.createdAt).getTime() -
          new Date(a.createdAt).getTime()
      )

  } finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  await buscarEventos()
})

watch(
  () => [props.tipoEventoId, props.cidade, props.mes],
  (
    [novoTipoEventoId, novoCidade, novoMes],
    [antigoTipoEventoId, antigoCidade, antigoMes]
  ) => {
    if (
      novoTipoEventoId !== antigoTipoEventoId ||
      novoCidade !== antigoCidade ||
      novoMes !== antigoMes
    ) {
      currentPage.value = 1
      buscarEventos();
    }
  }
);


function formatDate(dateStr?: string) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('pt-BR')
}

function formatDistancias(distancias?: any) {
  if (!distancias || !distancias.length) return ''
  return distancias
    .sort((a: any, b: any) => a.distancia - b.distancia)
    .map((d: any) => `${d.distancia}K`)
    .join(' | ')
}
</script>
