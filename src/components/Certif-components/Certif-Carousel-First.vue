<template>
  <swiper :pagination="true" :modules="modules" class="mySwiper w-full">
    <swiper-slide class="w-full h-full flex items-center justify-center mb-15">

                <div class="w-full h-[295px] flex items-center justify-center flex-col text-center gap-[18px]">
                    <div class="max-w-[268px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg>
                    </div>
                    
                    <div class="w-full max-w-[224px] h-1/2">
                        <span class="text-[1.25em] font-bold text-lime-500">1.</span>
                        <p class="text-[1em] leading-[30px]">
                            Cadastre-se na nossa plataforma
                        </p>
                    </div>
                </div>    

    </swiper-slide>
    <swiper-slide>
                <div class="w-full h-[295px] flex items-center justify-center flex-col text-center gap-[18px]">
                    <div class="max-w-[268px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                    </div>
                    
                    <div class="w-full max-w-[224px] h-1/2">
                        <span class="text-[1.25em] font-bold text-lime-500">2.</span>
                        <p class="text-[1em] leading-[30px]">
                            Agende sua consulta e realize a avaliação presencial exigida para emissão do certificado.
                        </p>
                    </div>
                </div>      
    </swiper-slide>
    <swiper-slide>
                <div class="w-full h-[295px] flex items-center justify-center flex-col text-center gap-[18px]">
                    <div class="max-w-[268px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                    
                    <div class="w-full max-w-[224px] h-1/2">
                        <span class="text-[1.25em] font-bold text-lime-500">3.</span>
                        <p class="text-[1em] leading-[30px]">
                            Após a consulta, o certificado pode ser emitido por um médico parceiro ou enviado por você, se for de um médico particular.
                        </p>
                    </div>
                </div>    
    </swiper-slide>
    <swiper-slide>
                <div class="w-full h-[295px] flex items-center justify-center flex-col text-center gap-[18px]">
                    <div class="max-w-[268px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paperclip-icon lucide-paperclip"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/></svg>
                    </div>
                    
                    <div class="w-full max-w-[224px] h-1/2">
                        <span class="text-[1.25em] font-bold text-lime-500">4.</span>
                        <p class="text-[1em] leading-[30px]">
                            Enquanto seu certificado estiver válido, você pode usá-lo em diferentes provas do mesmo perfil, com poucos cliques. 
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
