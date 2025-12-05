<template>
  <!-- Desktop -->
  <div
    class="hidden md:grid md:grid-cols-3 md:grid-rows-3 w-full mt-5 gap-5 justify-center"
    v-if="Eventos.data && Eventos.data.length"
  >
    <div
      class="bg-white w-full max-w-full lg:max-w-[364px] xl:max-w-full h-[252px] p-3 text-start gap-1 flex flex-col rounded-[12px] shadow-lg"
      v-for="item in Eventos.data.slice(0, 6)"
      :key="item.id"
    >

      <h1 class="md:text-[1em] lg:text-[1.17em] font-[700] text-lime-500">
        {{ getLocalizedField(item, 'titulo') }}
      </h1>

      <span class="text-[0.8em] lg:text-[0.9em] flex items-center gap-1">
        📍 {{ item.local }}
      </span>

      <span class="text-[0.8em] lg:text-[0.9em] flex items-center gap-1">
        📅 {{ formatDate(item.data) }}
      </span>

      <span class="text-[0.8em] lg:text-[0.9em] flex items-center gap-1">
        🏃
        <span>
          {{ formatDistancias(item.distanciasEvento) }}
        </span>
      </span>

      <div class="bg-cyan-50 text-cyan-400 text-[0.6em] lg:text-[0.75em]  rounded-[8px] w-full max-w-[241px] lg:h-[25px] flex items-center px-2 mt-3 mb-3">
        {{ t('eventos.listEventos.subtitle') }}
      </div>

      <RouterLink :to="{ name: 'EventoDetalhe', params: { id: item.id } }"
        class="w-full max-w-[178.4px] h-[40px]  lg:h-[40px] bg-cyan-400 hover:bg-cyan-500 text-white rounded-full text-[0.9em] font-medium duration-300 cursor-pointer flex items-center justify-center"
      >
      {{ t('eventos.listEventos.button') }}
      </RouterLink>
    </div>
  </div>

  <!-- Skeleton Desktop -->
  <div
    class="hidden md:grid md:grid-cols-3 md:grid-rows-3 w-full mt-5 gap-5 justify-center"
    v-else
  >
    <div
      v-for="n in 6"
      :key="n"
      class="bg-gray-300 w-full max-w-full lg:max-w-[364px] xl:max-w-full h-[252px] p-3 flex flex-col gap-2 rounded-[12px] animate-pulse"
    >
      <div class="h-6 bg-gray-400 rounded w-3/4 mb-2"></div>
      <div class="h-4 bg-gray-400 rounded w-1/2 mb-1"></div>
      <div class="h-4 bg-gray-400 rounded w-1/2 mb-1"></div>
      <div class="h-4 bg-gray-400 rounded w-1/3 mb-2"></div>
      <div class="h-5 bg-gray-400 rounded w-full mt-auto"></div>
    </div>
  </div>

  <!-- Mobile -->
  <div
    class="grid md:hidden md:grid-cols-3 md:grid-rows-3 w-full mt-5 gap-5"
    v-if="Eventos.data && Eventos.data.length"
  >
    <div
      class="bg-white w-full max-w-full lg:max-w-[364px] xl:max-w-full h-[252px] p-3 text-start gap-1 flex flex-col rounded-[12px] shadow-lg"
      v-for="item in Eventos.data.slice(0, 3)"
      :key="item.id"
    >
      <h1 class="md:text-[1em] lg:text-[1.17em] font-[700] text-lime-500">
        {{ getLocalizedField(item, 'titulo') }}
      </h1>
      <span class="text-[0.8em] lg:text-[0.9em] flex items-center gap-1">📍 {{ item.local }}</span>
      <span class="text-[0.8em] lg:text-[0.9em] flex items-center gap-1">📅 {{ formatDate(item.data) }}</span>
      <span class="text-[0.8em] lg:text-[0.9em] flex items-center gap-1">🏃 <span>{{ formatDistancias(item.distanciasEvento) }}</span></span>
      <div class="bg-cyan-50 text-cyan-400 text-[0.6em] lg:text-[0.75em]  rounded-[8px] w-full max-w-[241px] lg:h-[25px] flex items-center px-2 mt-3 mb-3">
        {{ t('eventos.listEventos.subtitle') }}
      </div>
      <button @click="emit('refresh-page', item.id)"
        class="w-full max-w-[178.4px] h-[40px]  lg:h-[40px] bg-cyan-400 hover:bg-cyan-500 text-white rounded-full text-[0.9em] font-medium duration-300 cursor-pointer flex items-center justify-center"
      >
      {{ t('eventos.listEventos.button') }}
      </button>
    </div>

    <div class="flex w-full gap-3 justify-center mt-10">
      <div class="w-3 h-3 bg-lime-500 rounded-2xl cursor-pointer"></div>
      <div class="w-3 h-3 bg-lime-400 rounded-2xl cursor-pointer"></div>
      <div class="w-3 h-3 bg-lime-400 rounded-2xl cursor-pointer"></div>
    </div>
  </div>

  <!-- Skeleton Mobile -->
  <div
    class="grid md:hidden md:grid-cols-3 md:grid-rows-3 w-full mt-5 gap-5"
    v-else
  >
    <div
      v-for="n in 3"
      :key="n"
      class="bg-gray-300 w-full max-w-full lg:max-w-[364px] xl:max-w-full h-[252px] p-3 flex flex-col gap-2 rounded-[12px] animate-pulse"
    >
      <div class="h-6 bg-gray-400 rounded w-3/4 mb-2"></div>
      <div class="h-4 bg-gray-400 rounded w-1/2 mb-1"></div>
      <div class="h-4 bg-gray-400 rounded w-1/2 mb-1"></div>
      <div class="h-4 bg-gray-400 rounded w-1/3 mb-2"></div>
      <div class="h-5 bg-gray-400 rounded w-full mt-auto"></div>
    </div>
  </div>
</template>




<script setup lang="ts">
import { onMounted, ref } from 'vue'
import EventosService from '../../services/Eventos/eventos-services'
import { RouterLink } from 'vue-router'
import { useI18n } from '../../composables/useI18n'

const Eventos = ref<{ data: any[] }>({ data: [] })
const emit = defineEmits<{
  'refresh-page': [id: string]
}>()
const { t, currentLocale } = useI18n()

function getLocalizedField(item: any, field: any) {
  return currentLocale.value === 'en' ? item[`en_${field}`] : item[field]
}

onMounted(async () => {
  Eventos.value = await EventosService.getAllEventos()
})

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  if (currentLocale.value === 'pt') {
      return date.toLocaleDateString('pt-BR')
  } else {
    return date.toLocaleDateString('en-US')
  }
}


function formatDistancias(distancias: any[]) {
  if (!distancias || !distancias.length) return ''
  return distancias
    .sort((a, b) => a.distancia - b.distancia)
    .map(d => {
      if (currentLocale.value === 'en') {
        const miles = (d.distancia * 0.621371).toFixed(1)
        return `${miles}mi`
      }
      return `${d.distancia}K`
    })
    .join(' | ')
}
</script>


