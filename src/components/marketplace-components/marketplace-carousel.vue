<template>
  <swiper :pagination="true" :modules="modules" class="mySwiper w-full">
    <swiper-slide class="w-full h-full flex items-center justify-center mb-15">

        <div class="w-full flex-shrink-0 text-left flex flex-col justify-center items-center ">
                <div class="flex w-full bg-gray-300 h-[320px]"></div>
        </div>   

    </swiper-slide>
    <swiper-slide>
        <div class="w-full flex-shrink-0 text-left flex flex-col justify-center items-center">
                <div class="flex w-full bg-gray-300 h-[320px]"></div>
        </div> 
    </swiper-slide>
    <swiper-slide>
        <div class="w-full flex-shrink-0 text-left flex flex-col justify-center items-center">
                <div class="flex w-full bg-gray-300 h-[320px]"></div>
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
