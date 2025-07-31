<template>
  <swiper :pagination="true" :modules="modules" class="mySwiper w-full">
    <swiper-slide class="w-full h-full flex items-center justify-center mb-10">

        <div class="w-full h-full p-8 text-left flex flex-col justify-center">
          <h2 class="text-[1.875em] font-[600] text-cyan-400 mb-3 italic">Missão</h2>
          <p class="leading-[35px] max-w-[307px]">
            Tornar a saúde esportiva mais acessível, integrada e conectada à realidade dos atletas modernos.
          </p>
        </div>  

    </swiper-slide>
    <swiper-slide>

        <div class="w-full h-full p-8 text-left flex flex-col justify-center">
          <h2 class="text-[1.875em] font-[600] text-cyan-400 mb-3 italic">Visão</h2>
          <p class="leading-[35px] max-w-[307px]">
            Ser referência nacional em certificações digitais e monitoramento de saúde esportiva até 2027.
          </p>
        </div>   

    </swiper-slide>
    <swiper-slide>

        <div class="w-full h-full  p-8 text-left flex flex-col justify-center">
                  <h2 class="text-[1.875em] font-bold text-cyan-400 mb-5 italic ">Valores</h2>
                  <span>
                    <li class="text-[1em] font-[400] leading-[35px] lg:leading-[40px]">
                      <span class="text-[2em] font-bold mr-2">.</span> Integridade física do atleta
                    </li>
                    <li class="text-[1em] font-[400] leading-[35px] lg:leading-[40px]">
                      <span class="text-[2em] font-bold mr-2">.</span>  Ética
                    </li>
                    <li class="text-[1em] font-[400] leading-[35px] lg:leading-[40px]">
                      <span class="text-[2em] font-bold mr-2">.</span>  Inovação com propósito
                    </li>
                    <li class="text-[1em] font-[400] leading-[35px] lg:leading-[40px]">
                      <span class="text-[2em] font-bold mr-2">.</span>  Segurança digital
                    </li>
                    <li class="text-[1em] font-[400] leading-[35px] lg:leading-[40px]">
                      <span class="text-[2em] font-bold mr-2">.</span>  Responsabilidade clínica
                    </li>
                </span>
        </div>
        

    </swiper-slide>

  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';

  // import required modules
  import { Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
  };
</script>


<style scoped>

:deep(.swiper-pagination-bullet) {
  background-color: #d1d5db; 
  opacity: 1;
  width: 10px;
  height: 10px;
  margin: 0 6px;
  transition: all 0.3s ease;
  border-radius: 9999px; 
}


:deep(.swiper-pagination-bullet-active) {
  background-color: #00C6FE; 
  transform: scale(1.2);
}
</style>
