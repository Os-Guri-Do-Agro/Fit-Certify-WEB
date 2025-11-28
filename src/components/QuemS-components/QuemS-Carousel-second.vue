<template>
  <swiper :pagination="true" :modules="modules" class="mySwiper w-full">
    <swiper-slide class="w-full h-full flex items-center justify-center mb-10">

        <div class="w-full h-full p-8 text-left flex flex-col justify-center">
          <h2 class="text-[1.875em] font-[600] text-cyan-400 mb-3 italic">{{ t('quemSomos.section4.card1.text') }}</h2>
          <p class="leading-[35px] max-w-[307px]">
            {{ t('quemSomos.section4.card1.descricao') }}
          </p>
        </div>  

    </swiper-slide>
    <swiper-slide>

        <div class="w-full h-full p-8 text-left flex flex-col justify-center">
          <h2 class="text-[1.875em] font-[600] text-cyan-400 mb-3 italic">{{ t('quemSomos.section4.card2.text') }}</h2>
          <p class="leading-[35px] max-w-[307px]">
            {{ t('quemSomos.section4.card2.descricao') }}
          </p>
        </div>   

    </swiper-slide>
    <swiper-slide>

        <div class="w-full h-full  p-8 text-left flex flex-col justify-center">
                  <h2 class="text-[1.875em] font-bold text-cyan-400 mb-5 italic ">{{ t('quemSomos.section4.card3.text') }}</h2>
                  <span>
                    <li class="text-[1em] font-[400] leading-[35px] lg:leading-[40px]">
                      <span class="text-[2em] font-bold mr-2">.</span> {{ t('quemSomos.section4.card3.descricao') }}
                    </li>
                    <li class="text-[1em] font-[400] leading-[35px] lg:leading-[40px]">
                      <span class="text-[2em] font-bold mr-2">.</span>  {{ t('quemSomos.section4.card3.descricao2') }}
                    </li>
                    <li class="text-[1em] font-[400] leading-[35px] lg:leading-[40px]">
                      <span class="text-[2em] font-bold mr-2">.</span>  {{ t('quemSomos.section4.card3.descricao3') }}
                    </li>
                    <li class="text-[1em] font-[400] leading-[35px] lg:leading-[40px]">
                      <span class="text-[2em] font-bold mr-2">.</span>  {{ t('quemSomos.section4.card3.descricao4') }}
                    </li>
                    <li class="text-[1em] font-[400] leading-[35px] lg:leading-[40px]">
                      <span class="text-[2em] font-bold mr-2">.</span>  {{ t('quemSomos.section4.card3.descricao5') }}
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

  import { useI18n } from '../../composables/useI18n';

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
  background-color: #00C6FE; 
  transform: scale(1.2);
}
</style>
