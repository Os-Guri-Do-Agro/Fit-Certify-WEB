<template>
  <swiper :pagination="true" :modules="modules" class="mySwiper w-full">
    <swiper-slide class="w-full h-full flex items-center justify-center mb-15">
      <div
        class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center"
      >
        <div
          class="w-full max-w-[340px] h-[248.9px] flex justify-center flex-col gap-[32px] bg-white rounded-[12px] shadow-lg p-[20px]"
        >
          <div class="">
            <h4 class="text-[1.17em] text-cyan-400 font-[700] mb-[12px]">
              {{ $t('certificados.section2.cyclingTriathlon.title') }}
            </h4>
            <p class="text-[1em]">
              {{ $t('certificados.section2.cyclingTriathlon.description') }}
            </p>
          </div>

          <div class="">
            <a
              href="https://fit-certify-admin.vercel.app/registers"
              target="_blank"
              class="text-[0.83em] font-[700] w-[85.7px] h-[39.5px] rounded-[30px] border-1 border-cyan-400 text-center text-white bg-cyan-400 hover:bg-cyan-500 duration-300 flex items-center justify-center"
              to="/cadastro"
              >{{ $t('certificados.section2.cyclingTriathlon.button') }}</a
            >
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div
        class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center"
      >
        <div
          class="w-full max-w-[340px] h-[248.9px] flex justify-center flex-col gap-[32px] bg-white rounded-[12px] shadow-lg p-[20px]"
        >
          <div class="">
            <h4 class="text-[1.17em] text-cyan-400 font-[700] mb-[12px]">
              {{ $t('certificados.section2.streetRunning.title') }}
            </h4>
            <p class="text-[1em]">{{ $t('certificados.section2.streetRunning.description') }}</p>
          </div>

          <div class="">
            <a
              href="https://fit-certify-admin.vercel.app/registers"
              target="_blank"
              class="text-[0.83em] font-[700] w-[85.7px] h-[39.5px] rounded-[30px] border-1 border-cyan-400 text-center text-white bg-cyan-400 hover:bg-cyan-500 duration-300 flex items-center justify-center"
              to="/cadastro"
              >{{ $t('certificados.section2.streetRunning.button') }}</a
            >
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div
        class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center"
      >
        <div
          class="w-full max-w-[340px] h-[248.9px] flex justify-center flex-col gap-[32px] bg-white rounded-[12px] shadow-lg p-[20px]"
        >
          <div class="">
            <h4 class="text-[1.17em] text-cyan-400 font-[700] mb-[12px]">
              {{ $t('certificados.section2.gymsTraining.title') }}
            </h4>
            <p class="text-[1em]">{{ $t('certificados.section2.gymsTraining.description') }}</p>
          </div>

          <div class="">
            <a
              href="https://fit-certify-admin.vercel.app/registers"
              target="_blank"
              class="text-[0.83em] font-[700] w-[85.7px] h-[39.5px] rounded-[30px] border-1 border-cyan-400 text-center text-white bg-cyan-400 hover:bg-cyan-500 duration-300 flex items-center justify-center"
              to="/cadastro"
              >{{ $t('certificados.section2.gymsTraining.button') }}</a
            >
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div
        class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center"
      >
        <div
          class="w-full max-w-[340px] h-[248.9px] flex justify-center flex-col gap-[32px] bg-white rounded-[12px] shadow-lg p-[20px]"
        >
          <div class="">
            <h4 class="text-[1.17em] text-cyan-400 font-[700] mb-[12px]">
              {{ $t('certificados.section2.corporatePrograms.title') }} 
            </h4>
            <p class="text-[1em]">
              {{ $t('certificados.section2.corporatePrograms.description') }} 
            </p>
          </div>

          <div class="">
            <a
              href="https://fit-certify-admin.vercel.app/registers"
              target="_blank"
              class="text-[0.83em] font-[700] w-[85.7px] h-[39.5px] rounded-[30px] border-1 border-cyan-400 text-center text-white bg-cyan-400 hover:bg-cyan-500 duration-300 flex items-center justify-center"
              to="/cadastro"
              >{{ $t('certificados.section2.corporatePrograms.button') }} </a
            >
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import { useI18n } from "../../composables/useI18n";

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
