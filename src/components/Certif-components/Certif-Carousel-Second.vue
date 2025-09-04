<template>
  <swiper :pagination="true" :modules="modules" class="mySwiper w-full">
    <swiper-slide class="w-full h-full flex items-center justify-center mb-15">

        <div class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center">
                <div class="w-full max-w-[340px] h-[248.9px] flex justify-center flex-col gap-[32px] bg-white rounded-[12px] shadow-lg p-[20px]">
                    <div class="">
                        <h4 class="text-[1.17em] text-cyan-400 font-[700] mb-[12px]">
                            Ciclismo e Triathlon
                        </h4>
                        <p class="text-[1em]">
                            Endurance e provas combinadas
                            Inclui exames opcionais
                        </p>                        
                    </div>

                    <div class="">
                        <router-link
                             class="text-[0.83em] font-[700] w-[85.7px] h-[39.5px] rounded-[30px] border-1 border-cyan-400 text-center text-white bg-cyan-400 hover:bg-cyan-500 duration-300 flex items-center justify-center"
                            to='/cadastro'
                        >Iniciar</router-link>                        
                    </div>
                </div>
        </div>   

    </swiper-slide>
    <swiper-slide>
        <div class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center">
                <div class="w-full max-w-[340px] h-[248.9px] flex justify-center flex-col gap-[32px] bg-white rounded-[12px] shadow-lg p-[20px]">
                    <div class="">
                        <h4 class="text-[1.17em] text-cyan-400 font-[700] mb-[12px]">
                            Corrida de Rua
                        </h4>
                        <p class="text-[1em]">
                            Para provas de 5K a maratona
                        </p>                        
                    </div>

                    <div class="">
                        <router-link
                             class="text-[0.83em] font-[700] w-[85.7px] h-[39.5px] rounded-[30px] border-1 border-cyan-400 text-center text-white bg-cyan-400 hover:bg-cyan-500 duration-300 flex items-center justify-center"
                            to='/cadastro'
                        >Iniciar</router-link>                        
                    </div>
                </div>
        </div>      
    </swiper-slide>
    <swiper-slide>
        <div class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center">
                <div class="w-full max-w-[340px] h-[248.9px] flex justify-center flex-col gap-[32px] bg-white rounded-[12px] shadow-lg p-[20px]">
                    <div class="">
                        <h4 class="text-[1.17em] text-cyan-400 font-[700] mb-[12px]">
                            Academias e Treinos
                        </h4>
                        <p class="text-[1em]">
                            Crossfit, musculação e funcional
                        </p>                        
                    </div>

                    <div class="">
                        <router-link
                             class="text-[0.83em] font-[700] w-[85.7px] h-[39.5px] rounded-[30px] border-1 border-cyan-400 text-center text-white bg-cyan-400 hover:bg-cyan-500 duration-300 flex items-center justify-center"
                            to='/cadastro'
                        >Iniciar</router-link>                        
                    </div>
                </div>
        </div>    
    </swiper-slide>
    <swiper-slide>
        <div class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center">
                <div class="w-full max-w-[340px] h-[248.9px] flex justify-center flex-col gap-[32px] bg-white rounded-[12px] shadow-lg p-[20px]">
                    <div class="">
                        <h4 class="text-[1.17em] text-cyan-400 font-[700] mb-[12px]">
                            Programas Corporativos
                        </h4>
                        <p class="text-[1em]">
                            Para funcionários que participam de ações esportivas
                        </p>                        
                    </div>

                    <div class="">
                        <router-link
                             class="text-[0.83em] font-[700] w-[85.7px] h-[39.5px] rounded-[30px] border-1 border-cyan-400 text-center text-white bg-cyan-400 hover:bg-cyan-500 duration-300 flex items-center justify-center"
                            to='/cadastro'
                        >Iniciar</router-link>                        
                    </div>
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
  width: 5px;
  height: 5px;
  margin: 0 6px;
  transition: all 0.3s ease;
  border-radius: 9999px; 
}


:deep(.swiper-pagination-bullet-active) {
  background-color: black; 
  transform: scale(1.2);
}
</style>
