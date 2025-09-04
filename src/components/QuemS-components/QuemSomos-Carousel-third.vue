<template>
  <swiper :pagination="true" :modules="modules" class="mySwiper w-full">
    <swiper-slide class="w-full h-full flex items-center justify-center mb-10">

                <div class="w-full h-[600px] flex items-center  flex-col text-center gap-[18px] ">
                    <div class="text-center w-full ">
                    <img class="w-full h-[349px] min-h-[300px] object-cover rounded-[12px]"
                        src="../../assets/quems-imgs/perfil-01.jpg" alt="">
                    <h3 class="text-[1.4em] lg:text-[1.8em] font-[600] italic mt-7">Emilio Machado</h3>
                    <span class="text-[1em] lg:text-[1.3em]">Founder & CEO</span>
                    <p class="mt-4 leading-[20px] lg:leading-[30px] text-[0.85em] lg:text-[1em] mb-10">
                        Empreendedor com mais de 30 anos de experiência e apaixonado por inovação em saúde
                    </p>
                </div>
                </div>    

    </swiper-slide>
    <swiper-slide>
                <div class="w-full h-[600px] flex items-center  flex-col text-center gap-[18px] ">
                    <div class="text-center w-full ">
                    <img class="w-full h-[349px] min-h-[300px] object-cover rounded-[12px]"
                        src="../../assets/quems-imgs/perfil-02.jpg" alt="">
                    <h3 class="text-[1.4em] lg:text-[1.8em] font-[600] italic mt-7">Lucas Machado</h3>
                    <span class="text-[1em] lg:text-[1.3em]">Head of Business Development</span>
                    <p class="mt-4 leading-[20px] lg:leading-[30px] text-[0.85em] lg:text-[1em] mb-10">
                        Responsável pelas parcerias comerciais e expansão estratégica do FitCertify365
                    </p>
                </div>
                </div>    
    </swiper-slide>
    <swiper-slide>
                <div class="w-full h-[600px] flex items-center  flex-col text-center gap-[18px]">
                <div class="text-center w-full ">
                    <img class="w-full h-[349px] min-h-[300px] object-cover rounded-[12px]"
                        src="../../assets/quems-imgs/perfil-03.jpg" alt="">
                    <h3 class="text-[1.4em] lg:text-[1.8em] font-[600] italic mt-7">Adriana Gabardo</h3>
                    <span class="text-[1em] lg:text-[1.3em]">Chief Financial Officer (CFO)</span>
                    <p class="mt-4 leading-[20px] lg:leading-[30px] text-[0.85em] lg:text-[1em] mb-10">
                        Com sólida experiência nas áreas da saúde e financeira, lidera a gestão econômica do
                        FitCertify365 com foco em sustentabilidade e crescimento
                    </p>
                </div>
                </div>    
    </swiper-slide>
    <swiper-slide>
                <div class="w-full h-[600px] flex items-center  flex-col text-center gap-[18px]">
                <div class="text-center w-full ">
                    <img class="w-full h-[349px] min-h-[300px] object-cover rounded-[12px]"
                        src="../../assets/quems-imgs/perfil-04.jpg" alt="">
                    <h3 class="text-[1.4em] lg:text-[1.8em] font-[600] italic mt-7">Alessandro Datcho</h3>
                    <span class="text-[1em] lg:text-[1.3em]">Chief Marketing Officer (CMO)</span>
                    <p class="mt-4 leading-[20px] lg:leading-[30px] text-[0.85em] lg:text-[1em] mb-10">
                        Especialista em estratégias digitais e branding, lidera a comunicação e posicionamento do
                        FitCertify365
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
