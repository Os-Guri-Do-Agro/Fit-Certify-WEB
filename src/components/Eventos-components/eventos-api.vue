<template>
  <div
    class="hidden lg:grid md:grid-cols-2 md:grid-rows-5 lg:grid-cols-3 lg:grid-rows-5 w-full mt-5 gap-5 justify-center"
  >
    <!-- 🔹 Skeletons -->
    <template v-if="isLoading">
      <div
        v-for="n in 15"
        :key="'skeleton-' + n"
        class="bg-white w-full lg:max-w-[364px] xl:max-w-full h-[252px] p-3 rounded-[12px] shadow-lg animate-pulse flex flex-col gap-3"
      >
        <div class="h-6 w-3/4 bg-gray-300 rounded"></div>
        <div class="h-4 w-1/2 bg-gray-300 rounded"></div>
        <div class="h-4 w-2/3 bg-gray-300 rounded"></div>
        <div class="h-4 w-1/3 bg-gray-300 rounded"></div>
        <div class="h-6 w-2/3 bg-gray-200 rounded mt-3"></div>
        <div class="h-10 w-[150px] bg-gray-300 rounded-full mt-3"></div>
      </div>
    </template>

    <!-- 🔹 Eventos Reais -->
    <template v-else>
      <div
        class="bg-white w-full lg:max-w-[364px] xl:max-w-full h-[252px] p-3 text-start gap-1 flex flex-col rounded-[12px] shadow-lg "
        v-for="item in Eventos.data.slice(0, 15)"
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
          🏃 {{ formatDistancias(item.distanciasEvento) }}
        </span>

        <div
          class="bg-cyan-50 text-cyan-400 text-[0.6em] lg:text-[0.75em] rounded-[8px] w-full max-w-[241px] lg:h-[25px] flex items-center px-2 mt-3 mb-3"
        >
          Prova conectada com a FitCertify365
        </div>

        <RouterLink
          :to="{ name: 'EventoDetalhe', params: { id: item.id } }"
          class="w-full max-w-[178.4px] h-[40px] bg-cyan-400 hover:bg-cyan-500 text-white rounded-full text-[0.9em] font-medium duration-300 cursor-pointer flex items-center justify-center"
        >
          Enviar certificado
        </RouterLink>
      </div>
    </template>
  </div>






<div class="md:flex w-full gap-2 hidden lg:hidden">
  <!-- 🔹 Skeletons no tablet -->
  <template v-if="isLoading">
    <div
      class="grid lg:hidden md:grid-cols-2 md:grid-rows-6 w-full mt-5 gap-5"
    >
      <div
        v-for="n in 12"
        :key="'skeleton-tablet-' + n"
        class="bg-white w-full h-[252px] p-3 rounded-[12px] shadow-lg animate-pulse flex flex-col gap-3"
      >
        <div class="h-6 w-3/4 bg-gray-300 rounded"></div>
        <div class="h-4 w-1/2 bg-gray-300 rounded"></div>
        <div class="h-4 w-2/3 bg-gray-300 rounded"></div>
        <div class="h-4 w-1/3 bg-gray-300 rounded"></div>
        <div class="h-6 w-2/3 bg-gray-200 rounded mt-3"></div>
        <div class="h-10 w-[150px] bg-gray-300 rounded-full mt-3"></div>
      </div>
    </div>
  </template>

  <!-- 🔹 Eventos reais no tablet -->
  <template v-else>
    <div
      class="grid lg:hidden md:grid-cols-2 md:grid-rows-6 w-full mt-5 gap-5"
      v-if="Eventos.data && Eventos.data.length"
    >
      <div
        class="bg-white w-full h-[252px] p-3 lg:p-5 text-start gap-1 flex flex-col rounded-[12px] shadow-lg"
        v-for="item in Eventos.data.slice(0, 12)"
        :key="item.id"
      >
        <h1 class="md:text-[1.05em] lg:text-[1.17em] font-[700] text-lime-500">
          {{ item.titulo }}
        </h1>

        <span class="text-[0.85em] lg:text-[0.9em] flex items-center gap-1">
          📍 {{ item.local }}
        </span>

        <span class="text-[0.85em] lg:text-[0.9em] flex items-center gap-1">
          📅 {{ formatDate(item.data) }}
        </span>

        <span class="text-[0.85em] lg:text-[0.9em] flex items-center gap-1">
          🏃
          <span>{{ formatDistancias(item.distanciasEvento) }}</span>
        </span>

        <div
          class="bg-cyan-50 text-cyan-400 text-[0.65em] lg:text-[0.75em] rounded-[8px] w-full max-w-[241px] lg:h-[25px] flex items-center px-2 mt-2 mb-2"
        >
          Prova conectada com a FitCertify365
        </div>

        <RouterLink
          :to="{ name: 'EventoDetalhe', params: { id: item.id } }"
          class="w-full max-w-[178.4px] h-[40px] bg-cyan-400 hover:bg-cyan-500 text-white rounded-full text-[0.9em] font-medium duration-300 cursor-pointer flex items-center justify-center"
        >
          Enviar certificado
        </RouterLink>
      </div>
    </div>
  </template>

  <!-- Sidebar de imagens (continua igual) -->
  <div
    class="w-full max-w-[120px] md:max-w-[180px] lg:max-w-[218.23px] hidden md:flex flex-col gap-5 ml-3 mt-5"
  >
    <div><img class="w-full h-[268px]" src="../../assets/eventos-imgs/image-01.jpg" alt=""></div>
    <div><img class="w-full h-[148px]" src="../../assets/eventos-imgs/image-02.jpg" alt=""></div>
    <div><img class="w-full h-[202px]" src="../../assets/eventos-imgs/image-03.jpg" alt=""></div>
    <div><img class="w-full h-[310px]" src="../../assets/eventos-imgs/image-04.jpg" alt=""></div>
    <div><img class="w-full h-[208px]" src="../../assets/eventos-imgs/image-05.jpg" alt=""></div>
    <div><img class="w-full h-[147px]" src="../../assets/eventos-imgs/image-06.jpg" alt=""></div>
  </div>
</div>








<!-- 🔹 MOBILE -->
<div class="w-full">
  <!-- Skeletons -->
  <template v-if="isLoading">
    <div class="grid md:hidden grid-cols-1 w-full mt-5 gap-5">
      <div
        v-for="n in 5"
        :key="'skeleton-mobile-' + n"
        class="bg-white w-full h-[252px] p-3 rounded-[12px] shadow-lg animate-pulse flex flex-col gap-3"
      >
        <div class="h-6 w-3/4 bg-gray-300 rounded"></div>
        <div class="h-4 w-1/2 bg-gray-300 rounded"></div>
        <div class="h-4 w-2/3 bg-gray-300 rounded"></div>
        <div class="h-4 w-1/3 bg-gray-300 rounded"></div>
        <div class="h-6 w-2/3 bg-gray-200 rounded mt-3"></div>
        <div class="h-10 w-[150px] bg-gray-300 rounded-full mt-3"></div>
      </div>
    </div>
  </template>

  <!-- Eventos reais -->
  <template v-else>
    <div
      class="grid md:hidden grid-cols-1 w-full mt-5 gap-5 "
      v-if="Eventos.data && Eventos.data.length"
    >
      <div
        class="bg-white w-full h-[252px] p-3 text-start gap-1 flex flex-col rounded-[12px] shadow-lg"
        v-for="item in Eventos.data.slice(0, 5)"
        :key="item.id"
      >
        <h1 class="text-[1.05em] font-[700] text-lime-500">
          {{ item.titulo }}
        </h1>

        <span class="text-[0.85em] flex items-center gap-1">
          📍 {{ item.local }}
        </span>

        <span class="text-[0.85em] flex items-center gap-1">
          📅 {{ formatDate(item.data) }}
        </span>

        <span class="text-[0.85em] flex items-center gap-1">
          🏃 <span>{{ formatDistancias(item.distanciasEvento) }}</span>
        </span>

        <div
          class="bg-cyan-50 text-cyan-400 text-[0.65em] rounded-[8px] w-full max-w-[241px] flex items-center px-2 mt-2 mb-2"
        >
          Prova conectada com a FitCertify365
        </div>

        <RouterLink
          :to="{ name: 'EventoDetalhe', params: { id: item.id } }"
          class="w-full max-w-[178.4px] h-[40px] bg-cyan-400 hover:bg-cyan-500 text-white rounded-full text-[0.9em] font-medium duration-300 cursor-pointer flex items-center justify-center"
        >
          Enviar certificado
        </RouterLink>
      </div>
    </div>
  </template>
</div>




    <div class="w-full hidden md:flex justify-center mt-10">
      <p class="text-center text-gray-600 max-w-[430px] lg:max-w-full">
        O certificado FitCertify365 também é aceito em <strong>todas as outras provas que exigem atestado médico.</strong>
      </p>
    </div>

    <div class="w-full mt-5 md:hidden">
      <Carousel />
    </div>
</template>



<script setup lang="ts">
import { onMounted, ref } from 'vue'
import EventosService from '../../services/Eventos/eventos-services'
import Carousel from './eventos-carousel.vue'
import { RouterLink } from 'vue-router'

// Interface para tipar os eventos
interface Evento {
  id: string
  title?: string
  createdAt: string
  dataEvento?: string
  distancias?: { distancia: number }[]
  [key: string]: any
}

const Eventos = ref<{ data: Evento[] }>({ data: [] })
const isLoading = ref(false)

onMounted(async () => {
  try {
    isLoading.value = true
    const response = await EventosService.getAllEventos()
    
    // Ordena os eventos do mais recente para o mais antigo
    Eventos.value.data = response.data.sort((a: Evento, b: Evento) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })
  } finally {
    isLoading.value = false
  }
})

function formatDate(dateStr: string) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('pt-BR')
}

function formatDistancias(distancias: { distancia: number }[]) {
  if (!distancias || !distancias.length) return ''
  return distancias
    .sort((a, b) => a.distancia - b.distancia)
    .map(d => `${d.distancia}K`)
    .join(' | ')
}
</script>



