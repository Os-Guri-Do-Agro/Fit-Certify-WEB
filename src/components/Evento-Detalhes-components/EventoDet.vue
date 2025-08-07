<template>
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
        {{ item.titulo }}
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
        Prova conectada com a FitCertify365
      </div>


      <RouterLink :to="{ name: 'EventoDetalhe', params: { id: item.id } }"
        class="w-full max-w-[178.4px] h-[40px]  lg:h-[40px] bg-cyan-400 hover:bg-cyan-500 text-white rounded-full text-[0.9em] font-medium duration-300 cursor-pointer flex items-center justify-center"
      >
        Enviar certificado
      </RouterLink>
    </div>
  </div>







  <div
    class="grid md:hidden md:grid-cols-3 md:grid-rows-3 w-full mt-5 gap-5 "
    v-if="Eventos.data && Eventos.data.length"
  >
    <div
      class="bg-white w-full max-w-full lg:max-w-[364px] xl:max-w-full h-[252px] p-3 text-start gap-1 flex flex-col rounded-[12px] shadow-lg"
      v-for="item in Eventos.data.slice(0, 3)"
      :key="item.id"
    >

      <h1 class="md:text-[1em] lg:text-[1.17em] font-[700] text-lime-500">
        {{ item.titulo }}
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
        Prova conectada com a FitCertify365
      </div>


      <button  @click="emit('refresh-page', item.id)"
        class="w-full max-w-[178.4px] h-[40px]  lg:h-[40px] bg-cyan-400 hover:bg-cyan-500 text-white rounded-full text-[0.9em] font-medium duration-300 cursor-pointer flex items-center justify-center"
      >
        Enviar certificadooo
    </button>

    </div>

    <div class="flex w-full gap-3 justify-center mt-10">
      <div class="w-3 h-3 bg-lime-500 rounded-2xl cursor-pointer"></div>
      <div class="w-3 h-3 bg-lime-400 rounded-2xl cursor-pointer"></div>
      <div class="w-3 h-3 bg-lime-400 rounded-2xl cursor-pointer"></div>
    </div>
  </div>


</template>



<script setup lang="ts">
import { onMounted, ref } from 'vue'
import EventosService from '../../services/Eventos/eventos-services'
import { RouterLink } from 'vue-router'

const Eventos = ref<{ data: any[] }>({ data: [] })
const emit = defineEmits<{
  'refresh-page': [id: string]
}>()

onMounted(async () => {
  Eventos.value = await EventosService.getAllEventos()
})

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('pt-BR')
}


function formatDistancias(distancias: any[]) {
  if (!distancias || !distancias.length) return ''
  return distancias
    .sort((a, b) => a.distancia - b.distancia)
    .map(d => `${d.distancia}K`)
    .join(' | ')
}
</script>


