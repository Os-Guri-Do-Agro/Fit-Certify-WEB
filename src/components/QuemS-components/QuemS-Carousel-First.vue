<template>
  <swiper :pagination="true" :modules="modules" class="mySwiper w-full">
    <swiper-slide class="w-full h-full flex items-center justify-center mb-10">

                <div class="w-full h-[295px] flex items-center justify-center flex-col text-center gap-[18px]">
                    <div class="max-w-[268px] h-1/3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 24 24" fill="none" stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-check-big-icon lucide-square-check-big"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"/><path d="m9 11 3 3L22 4"/></svg>
                    </div>
                    
                    <div class="w-full max-w-[224px] h-1/2">
                        <p class="text-[1em] leading-[40px]">
                            Validamos atestados digitais com validade <br> legal
                        </p>
                    </div>
                </div>    

    </swiper-slide>
    <swiper-slide>
                <div class="w-full h-[295px] flex items-center justify-center flex-col text-center gap-[18px]">
                    <div class="max-w-[268px] h-1/3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 24 24" fill="none" stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor-icon lucide-monitor"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
                    </div>
                    
                    <div class="w-full max-w-[224px] h-1/2">
                        <p class="text-[1em] leading-[40px]">
                            Monitoramos marcadores de saúde ao longo do tempo
                        </p>
                    </div>
                </div>    
    </swiper-slide>
    <swiper-slide>
                <div class="w-full h-[295px] flex items-center justify-center flex-col text-center gap-[18px]">
                    <div class="max-w-[268px] h-1/3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 24 24" fill="none" stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column-icon lucide-chart-no-axes-column"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>
                    </div>
                    
                    <div class="w-full max-w-[224px] h-1/2">
                        <p class="text-[1em] leading-[40px]">
                            Integramos dados de exames e dispositivos inteligentes
                        </p>
                    </div>
                </div>    
    </swiper-slide>
    <swiper-slide>
                <div class="w-full h-[295px] flex items-center justify-center flex-col text-center gap-[18px]">
                    <div class="max-w-[268px] h-1/3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 24 24" fill="none" stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                    </div>
                    
                    <div class="w-full max-w-[224px] h-1/2">
                        <p class="text-[1em] leading-[40px]">
                            Facilitamos a jornada do atleta e do organizador de eventos
                        </p>
                    </div>
                </div>    
    </swiper-slide>
    <swiper-slide>
                <div class="w-full h-[295px] flex items-center justify-center flex-col text-center gap-[18px]">
                    <div class="max-w-[268px] h-1/3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 24 24" fill="none" stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link2-icon lucide-link-2"><path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/></svg>
                    </div>
                    
                    <div class="w-full max-w-[224px] h-1/2">
                        <p class="text-[1em] leading-[40px]">
                            Criamos conexões com corridas e provas que valorizam a saúde
                        </p>
                    </div>
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
  background-color: #88CE0D; 
  transform: scale(1.2);
}
</style>
