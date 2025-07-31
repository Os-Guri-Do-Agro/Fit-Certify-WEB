<template>
  <swiper :pagination="true" :modules="modules" class="mySwiper w-full">
    <swiper-slide class="w-full h-full flex items-center justify-center mb-15">

        <div class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center">
                <div class="flex flex-col w-full max-w-[320px] h-[178px] md:h-[204px] bg-white rounded-[12px] shadow-xl p-5 gap-[12px]">
                    <h3 class="text-[1.125em] font-[700] text-lime-500">
                        💓 Frequência Cardíaca de Repouso
                    </h3>
                    <p class="text-[0.875em] text-slate-700">
                        Identifique padrões de recuperação e esforço com base nos seus batimentos em repouso.
                    </p>
                </div>
        </div>   

    </swiper-slide>
    <swiper-slide>
        <div class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center">
                <div class="flex flex-col w-full max-w-[320px] h-[178px] md:h-[204px] bg-white rounded-[12px] shadow-xl p-5 gap-[12px]">
                    <h3 class="text-[1.125em] font-[700] text-lime-500">
                        ⚖️ IMC e Composição Corporal
                    </h3>
                    <p class="text-[0.875em] text-slate-700">
                        Avaliação de massa, peso e proporção corporal para acompanhamento físico contínuo.
                    </p>
                </div>
        </div>   
    </swiper-slide>
    <swiper-slide>
        <div class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center">
                <div class="flex flex-col w-full max-w-[320px] h-[178px] md:h-[204px] bg-white rounded-[12px] shadow-xl p-5 gap-[12px]">
                    <h3 class="text-[1.125em] font-[700] text-lime-500">
                        🧪 Exames Laboratoriais
                    </h3>
                    <p class="text-[0.875em] text-slate-700">
                        Visualize resultados como colesterol, glicemia, ferritina e outros indicadores clínicos.
                    </p>
                </div>
        </div>   
    </swiper-slide>
    <swiper-slide>
        <div class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center">
                <div class="flex flex-col w-full max-w-[320px] h-[178px] md:h-[204px] bg-white rounded-[12px] shadow-xl p-5 gap-[12px]">
                    <h3 class="text-[1.125em] font-[700] text-lime-500">
                        🫁 VO₂ Máx
                    </h3>
                    <p class="text-[0.875em] text-slate-700">
                        Estimativa de consumo máximo de oxigênio — essencial para esportes de resistência.
                    </p>
                </div>
        </div>    
    </swiper-slide>
        <swiper-slide>
        <div class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center">
                <div class="flex flex-col w-full max-w-[320px] h-[178px] md:h-[204px] bg-white rounded-[12px] shadow-xl p-5 gap-[12px]">
                    <h3 class="text-[1.125em] font-[700] text-lime-500">
                        🩺 Pressão Arterial
                    </h3>
                    <p class="text-[0.875em] text-slate-700">
                        Acompanhamento regular dos seus níveis de pressão, com registros manuais ou automáticos.
                    </p>
                </div>
        </div>    
    </swiper-slide>
        <swiper-slide>
        <div class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center">
                <div class="flex flex-col w-full max-w-[320px] h-[178px] md:h-[204px] bg-white rounded-[12px] shadow-xl p-5 gap-[12px]">
                    <h3 class="text-[1.125em] font-[700] text-lime-500">
                        📈 Histórico de Certificados
                    </h3>
                    <p class="text-[0.875em] text-slate-700">
                        Acompanhe sua linha do tempo de atestados, consultas e avaliações médicas.
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
  background-color: #00C6FE; 
  transform: scale(1.2);
}
</style>
