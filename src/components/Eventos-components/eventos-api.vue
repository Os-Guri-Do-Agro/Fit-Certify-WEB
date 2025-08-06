<template>
  <div
    class="hidden lg:grid md:grid-cols-2 md:grid-rows-5 lg:grid-cols-3 lg:grid-rows-5 w-full mt-5 gap-5 justify-center"
    v-if="Eventos.data && Eventos.data.length"
  >
    <div
      class="bg-white w-full lg:max-w-[364px] xl:max-w-full h-[252px] p-3 text-start gap-1 flex flex-col rounded-[12px] shadow-lg"
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






    <div class="md:flex w-full gap-2 hidden lg:hidden">
    <div
    class="grid lg:hidden md:grid-cols-2 md:grid-rows-6 lg:grid-cols-3 lg:grid-rows-5 w-full mt-5 gap-5 "
    v-if="Eventos.data && Eventos.data.length"
  >

    <div
      class="bg-white w-full  h-[252px] p-3 lg:p-5 text-start gap-1 flex flex-col rounded-[12px] shadow-lg"
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
        <span>
          {{ formatDistancias(item.distanciasEvento) }}
        </span>
      </span>


      <div class="bg-cyan-50 text-cyan-400 text-[0.65em] lg:text-[0.75em]  rounded-[8px] w-full max-w-[241px] lg:h-[25px] flex items-center px-2 mt-2 mb-2">
        Prova conectada com a FitCertify365
      </div>


      <RouterLink :to="{ name: 'EventoDetalhe', params: { id: item.id } }"
        class="w-full max-w-[178.4px] h-[40px]  lg:h-[40px] bg-cyan-400 hover:bg-cyan-500 text-white rounded-full text-[0.9em] font-medium duration-300 cursor-pointer"
      >
        Enviar certificado
      </RouterLink>
    </div>
  </div>


      
        <div class="w-full max-w-[120px] md:max-w-[180px]  lg:max-w-[218.23px] hidden md:flex flex-col gap-5 ml-3  mt-5">

                        <div class="">
                            <img class="w-full h-[268px]" src="../../assets/eventos-imgs/image-01.jpg" alt="">
                        </div>
                        <div class="">
                            <img class="w-full h-[148px]" src="../../assets/eventos-imgs/image-02.jpg" alt="">
                        </div>
                        <div class="">
                            <img class="w-full h-[202px]" src="../../assets/eventos-imgs/image-03.jpg" alt="">
                        </div>
                        <div class="">
                            <img class="w-full h-[310px]" src="../../assets/eventos-imgs/image-04.jpg" alt="">
                        </div>
                        <div class="">
                            <img class="w-full h-[208px]" src="../../assets/eventos-imgs/image-05.jpg" alt="">
                        </div>
                        <div class="">
                            <img class="w-full h-[147px]" src="../../assets/eventos-imgs/image-06.jpg" alt="">
                        </div>

        </div>
    </div>









<div
    class="grid md:hidden md:grid-cols-1 md:grid-rows-5 lg:grid-cols-3 lg:grid-rows-5 w-full mt-5 gap-5"
    v-if="Eventos.data && Eventos.data.length"
  >

    <div
      class="bg-white w-full  h-[252px] p-3 lg:p-5 text-start gap-1 flex flex-col rounded-[12px] shadow-lg"
      v-for="item in Eventos.data.slice(0, 5)"
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
        <span>
          {{ formatDistancias(item.distanciasEvento) }}
        </span>
      </span>


      <div class="bg-cyan-50 text-cyan-400 text-[0.65em] lg:text-[0.75em]  rounded-[8px] w-full max-w-[241px] lg:h-[25px] flex items-center px-2 mt-2 mb-2">
        Prova conectada com a FitCertify365
      </div>


      <button
        class="w-full max-w-[178.4px] h-[40px]  lg:h-[40px] bg-cyan-400 hover:bg-cyan-500 text-white rounded-full text-[0.9em] font-medium duration-300 cursor-pointer"
      >
        Saiba Mais
      </button>
    </div>
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

const Eventos = ref<{ data: any[] }>({ data: [] })

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


