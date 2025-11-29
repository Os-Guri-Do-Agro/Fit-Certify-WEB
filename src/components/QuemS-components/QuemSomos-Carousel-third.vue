<template>
  <swiper :pagination="true" :modules="modules" class="mySwiper w-full">
    <swiper-slide class="w-full h-full flex items-center justify-center mb-10">

                <div class="w-full h-[600px] flex items-center  flex-col text-center gap-[18px] ">
                    <div class="text-center w-full ">
                    <img class="w-full h-[349px] min-h-[300px] object-cover rounded-[12px]"
                        src="../../assets/quems-imgs/emilio-perfil.jpg" alt="">
                    <h3 class="text-[1.4em] lg:text-[1.8em] font-[600] italic mt-7">Emilio Machado</h3>
                    <span class="text-[1em] lg:text-[1.3em]">Founder & CEO</span>
                    <p class="mt-4 leading-[20px] lg:leading-[30px] text-[0.85em] lg:text-[1em] mb-10">
                      {{ t('quemSomos.section6.emilioDesc') }}
                    </p>
                </div>
                </div>    

    </swiper-slide>
    <swiper-slide>
                <div class="w-full h-[600px] flex items-center  flex-col text-center gap-[18px] ">
                    <div class="text-center w-full ">
                    <img class="w-full h-[349px] min-h-[300px] object-cover rounded-[12px]"
                        src="../../assets/quems-imgs/lucas-perfil.jpg" alt="">
                    <h3 class="text-[1.4em] lg:text-[1.8em] font-[600] italic mt-7">Lucas Machado</h3>
                    <span class="text-[1em] lg:text-[1.3em]">Head of Business Development</span>
                    <p class="mt-4 leading-[20px] lg:leading-[30px] text-[0.85em] lg:text-[1em] mb-10">
                      {{ t('quemSomos.section6.lucasDesc') }}
                    </p>
                </div>
                </div>    
    </swiper-slide>
    <swiper-slide>
                <div class="w-full h-[600px] flex items-center  flex-col text-center gap-[18px]">
                <div class="text-center w-full ">
                    <img class="w-full h-[349px] min-h-[300px] object-cover rounded-[12px]"
                        src="../../assets/quems-imgs/marcelo-perfil.png" alt="">
                    <h3 class="text-[1.4em] lg:text-[1.8em] font-[600] italic mt-7">Dr. Marcelo Leitão</h3>
                    <span class="text-[1em] lg:text-[1.3em]">{{ t('quemSomos.section6.marceloTitle') }}</span>
                    <p class="mt-4 leading-[20px] lg:leading-[30px] text-[0.85em] lg:text-[1em] mb-10">
                      {{ t('quemSomos.section6.marceloDesc') }}
                    </p>
                </div>
                </div>    
    </swiper-slide>
    <swiper-slide>
                <div class="w-full h-[600px] flex items-center  flex-col text-center gap-[18px]">
                <div class="text-center w-full ">
                    <img class="w-full h-[349px] min-h-[300px] object-cover rounded-[12px]"
                        src="../../assets/quems-imgs/datcho-perfil.jpg" alt="">
                    <h3 class="text-[1.4em] lg:text-[1.8em] font-[600] italic mt-7">Alessandro Datcho</h3>
                    <span class="text-[1em] lg:text-[1.3em]">Chief Marketing Officer (CMO)</span>
                    <p class="mt-4 leading-[20px] lg:leading-[30px] text-[0.85em] lg:text-[1em] mb-10">
                      {{ t('quemSomos.section6.alessandroDesc') }}
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
import { useI18n } from '../../composables/useI18n'

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const { t } = useI18n();
      
      return {
        modules: [Pagination],
        t,
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
