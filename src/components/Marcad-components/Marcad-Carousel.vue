<template>
  <swiper :pagination="true" :modules="modules" class="mySwiper w-full">
    <swiper-slide class="w-full h-full flex items-center justify-center mb-15">

        <div class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center">
                <div class="flex flex-col w-full max-w-[320px] h-[178px] md:h-[204px] bg-white rounded-[12px] shadow-xl p-5 gap-[12px]">
                    <h3 class="text-[1.125em] font-[700] text-lime-500">
                        {{ t('marcadores.section1.card1.title') }}
                    </h3>
                    <p class="text-[0.875em] text-slate-700">
                        {{ t('marcadores.section1.card1.text') }}
                    </p>
                </div>
        </div>   

    </swiper-slide>
    <swiper-slide>
        <div class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center">
                <div class="flex flex-col w-full max-w-[320px] h-[178px] md:h-[204px] bg-white rounded-[12px] shadow-xl p-5 gap-[12px]">
                    <h3 class="text-[1.125em] font-[700] text-lime-500">
                        {{ t('marcadores.section1.card2.title') }}
                    </h3>
                    <p class="text-[0.875em] text-slate-700">
                        {{ t('marcadores.section1.card2.text') }}
                    </p>
                </div>
        </div>   
    </swiper-slide>
    <swiper-slide>
        <div class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center">
                <div class="flex flex-col w-full max-w-[320px] h-[178px] md:h-[204px] bg-white rounded-[12px] shadow-xl p-5 gap-[12px]">
                    <h3 class="text-[1.125em] font-[700] text-lime-500">
                        {{ t('marcadores.section1.card3.title') }}
                    </h3>
                    <p class="text-[0.875em] text-slate-700">
                        {{ t('marcadores.section1.card3.text') }}
                    </p>
                </div>
        </div>   
    </swiper-slide>
    <swiper-slide>
        <div class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center">
                <div class="flex flex-col w-full max-w-[320px] h-[178px] md:h-[204px] bg-white rounded-[12px] shadow-xl p-5 gap-[12px]">
                    <h3 class="text-[1.125em] font-[700] text-lime-500">
                        {{ t('marcadores.section1.card4.title') }}
                    </h3>
                    <p class="text-[0.875em] text-slate-700">
                        {{ t('marcadores.section1.card4.text') }}
                    </p>
                </div>
        </div>    
    </swiper-slide>
        <swiper-slide>
        <div class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center">
                <div class="flex flex-col w-full max-w-[320px] h-[178px] md:h-[204px] bg-white rounded-[12px] shadow-xl p-5 gap-[12px]">
                    <h3 class="text-[1.125em] font-[700] text-lime-500">
                        {{ t('marcadores.section1.card5.title') }}
                    </h3>
                    <p class="text-[0.875em] text-slate-700">
                        {{ t('marcadores.section1.card5.text') }}
                    </p>
                </div>
        </div>    
    </swiper-slide>
        <swiper-slide>
        <div class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center">
                <div class="flex flex-col w-full max-w-[320px] h-[178px] md:h-[204px] bg-white rounded-[12px] shadow-xl p-5 gap-[12px]">
                    <h3 class="text-[1.125em] font-[700] text-lime-500">
                        {{ t('marcadores.section1.card6.title') }}
                    </h3>
                    <p class="text-[0.875em] text-slate-700">
                        {{ t('marcadores.section1.card6.text') }}
                    </p>
                </div>
        </div>    
    </swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { useI18n } from '../../composables/useI18n';

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
      const { t } = useI18n();
      
      return {
        modules: [Pagination],
        t
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
