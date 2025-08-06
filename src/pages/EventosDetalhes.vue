<template>
    <section class="w-full"> <!-- altura fixa -->
        <div>
            <img class="w-full h-full object-cover" src="../assets/eventoDetalhes-imgs/banner.jpg" alt="">
        </div>
    </section>


    <section class="w-full flex justify-center bg-sky-100">
        <div class="container min-h-[370px] flex items-center p-5 md:p-10 flex-col md:flex-row gap-5">
            <div class="md:w-1/2 flex flex-col gap-5">
                <h1 class="text-[2em] md:text-[2.5em] text-center md:text-start lg:text-[3em] italic font-[600] text-cyan-400">{{ evento?.titulo }}</h1>
                <div class="flex gap-5 items-center md:items-start flex-col md:flex-row">
                <RouterLink class="flex text-[0.9em] md:text-[1em] lg:text-[1.43em] bg-lime-500 w-[170px] h-[45px] md:w-[200px] md:lg:w-[270px] md:h-[55px] lg:h-[55px] items-center justify-center rounded-[30px] font-bold text-white hover:bg-lime-600 duration-300" to="/eventos" >Enviar certificado</RouterLink>
                <RouterLink class="flex text-[0.9em] md:text-[1em] lg:text-[1.43em] w-[170px] h-[45px] md:w-[200px] md:lg:w-[270px] md:h-[55px] lg:h-[55px] items-center justify-center rounded-[30px] font-bold text-lime-500 hover:text-white border-2 border-lime-500 hover:bg-lime-500 duration-300" to="/eventos" >Site da prova</RouterLink>
                </div>

            </div>
            <div class="md:w-1/2 flex justify-end ">
                <div class="max-w-[455px] h-[256px] rounded-[20px] bg-white overflow-hidden flex items-center justify-center">
                    <img class="object-cover w-full max-w-[410px]" src="../assets/eventoDetalhes-imgs/img-01.jpg" alt="">
                </div>
            </div>
        </div>
    </section>



    <section class="w-full flex justify-center">
  <div class="container p-5 md:p-10">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-y-8 md:gap-y-10 lg:gap-y-0 lg:divide-x divide-sky-100 gap-x-5"
    >
      
      <div class="flex flex-col items-center lg:items-start text-center lg:text-left gap-10">
        <span class="font-bold text-base md:text-lg lg:text-xl opacity-80">Data</span>
        <span class="text-xl md:text-2xl lg:text-4xl text-zinc-500">
          {{ evento?.data?.slice(0, 10)?.replaceAll('-', '/') }}
        </span>
      </div>

      
      <div class="flex flex-col items-center lg:items-start text-center lg:text-left px-4 gap-10">
        <span class="font-bold text-base md:text-lg lg:text-xl opacity-80">Local</span>
        <span class="text-xl md:text-2xl lg:text-4xl text-zinc-500">
          {{ evento?.local }}
        </span>
      </div>

      
      <div class="flex flex-col items-center lg:items-start text-center lg:text-left px-4 gap-10">
        <span class="font-bold text-base md:text-lg lg:text-xl opacity-80">Modalidade</span>
        <span class="text-xl md:text-2xl lg:text-4xl text-zinc-500">
          Corrida
        </span>
      </div>

      
      <div class="flex flex-col items-center lg:items-start text-center lg:text-left px-4 gap-10">
        <span class="font-bold text-base md:text-lg lg:text-xl opacity-80">Distância</span>
        <span class="text-xl md:text-2xl lg:text-4xl text-zinc-500">
          {{ evento?.distanciasEvento?.map(d => d.distancia + ' km').join(' / ') }}
        </span>
      </div>
    </div>
  </div>
    </section>


    <section class="w-full flex justify-center">
        <div class="container flex gap-5 flex-col p-5 md:p-10">
            <div class="w-full h-[2px] bg-sky-100 mb-7"></div>
            <span class="font-bold text-base md:text-lg lg:text-xl opacity-80 ">Descrição</span>
            <span class="text-[0.875em] lg:text-[1.25em] xl:text-[1.25em] leading-[32px] lg :leading-[43px] w-full max-h-[300px] overflow-y-auto opacity-90">
                {{ evento?.descricao }}
            </span>
            <div class="w-full h-[2px] bg-sky-100 mt-7"></div>
        </div>

    </section>

    <section class="w-full flex justify-center">
        <div class="container flex-col md:flex-row flex gap-5 p-5 md:p-10 text-center md:text-start">

            <span class="font-bold text-base md:text-lg lg:text-xl opacity-80 ">Organização</span>

            <div class="flex flex-col md:flex-row items-center w-full">
                <div class="flex items-center justify-center w-[203px] h-[203px]">
                    <img src="../assets/eventoDetalhes-imgs/logo-01.jpg" alt=""></img>
                </div>

                <div class="flex items-center justify-center w-[203px] h-[203px]">
                    <img src="../assets/eventoDetalhes-imgs/logo-02.jpg" alt=""></img>
                </div>

            </div>
        </div>

    </section>



    <section class="flex bg-sky-50 justify-center mt-10 md:h-[800px]">
        <div class="container flex flex-col p-5 md:p-10">
            <h2 class="text-[1.75em] md:text-[2.25em] text-center lg:text-[3em] italic font-[600] text-lime-500 mb-5">Próximos eventos</h2>

            <div class="flex w-full">
                <Eventos />
            </div>
        </div>
    </section>

</template>


<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import EventosService from '../services/Eventos/eventos-services'
import { RouterLink } from 'vue-router'
import EventoDetalhes from '../components/Eventos-components/eventos-api.vue'
import Eventos from '../components/Evento-Detalhes-components/EventoDetalhes.vue'

    const route = useRoute();

    const evento = ref(null)

    onMounted(async () => {
    const response = await EventosService.getByEventoId(route.params.id)
    evento.value = response.data
    console.log(evento.value)
    
})

</script>