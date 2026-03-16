<template>
    <section class="bg-[url('/src/assets/marcad-imgs/banner.jpg')] w-full h-[128.4px] md:h-[263px] lg:h-[397px] bg-left lg:bg-center bg-cover flex justify-center items-center ">
        <div class="w-full container flex items-center justify-center">
            <div class="w-full max-w-[261px] h-[53px] md:max-w-[406px] md:h-[82px] lg:max-w-[647.5px] lg:h-[131.1px] bg-cyan-400 transform -skew-x-12 flex items-center justify-center text-center text-white font-[600] italic">
                <h1 class="text-[1.625em] md:text-[2.5em] lg:text-[4.5em]">
                    {{ t('marcadores.title') }}
                </h1>
            </div>
        </div>
    </section>



    <section class="w-full flex">
        <div class="w-full h-[115px] lg:h-[240px] flex justify-center items-center bg-sky-50">
            <div class="container w-full p-5 md:p-10">
            <h2 class="text-[1.375em] md:text-[1.5em] lg:text-[2.25em] text-cyan-400 font-[600] italic leading-[34px]  text-center">
                {{ t('marcadores.subtitle') }}
            </h2>                
            </div>
        </div>
    </section>


    <section class="flex flex-col items-center justify-center bg-cyan-50 pb-10">
        <div class="w-full flex flex-col justify-center items-center p-5 md:p-10 lg:h-[223px] bg-white">
            <p class="text-[1em] lg:text-[1.375em] md:text-center leading-[35px]">
                {{ t('marcadores.text') }}
            </p>
        </div>

        <div class="container flex flex-col justify-center items-center p-5 md:p-10 gap-[32px]">
            <div class="flex flex-col gap-[18px]">
                <h2 class="text-[1.625em] md:text-[2em] italic font-[600] text-cyan-400 text-center">
                    {{ t('marcadores.section1.title') }}
                </h2>
                <p class="text-center text-slate-700">
                    {{ t('marcadores.section1.subtitle') }}
                </p>
            </div>




            <div class="hidden md:flex w-full max-w-[1340px] gap-[22px] flex-wrap justify-center">
                <div class="flex flex-col w-full max-w-[320px] h-[178px] md:h-[204px] bg-white rounded-[12px] shadow-xl p-5 gap-[12px]">
                    <h3 class="text-[1.125em] font-[700] text-lime-500">
                        {{ t('marcadores.section1.card1.title') }}
                    </h3>
                    <p class="text-[0.875em text-slate-700">
                        {{ t('marcadores.section1.card1.text') }}
                    </p>
                </div>

                <div class="flex flex-col w-full max-w-[320px] h-[178px] md:h-[204px] bg-white rounded-[12px] shadow-xl p-5 gap-[12px]">
                    <h3 class="text-[1.125em] font-[700] text-lime-500">
                        {{ t('marcadores.section1.card2.title') }}
                    </h3>
                    <p class="text-[0.875em text-slate-700">
                        {{ t('marcadores.section1.card2.text') }}
                    </p>
                </div>

                <div class="flex flex-col w-full max-w-[320px] h-[178px] md:h-[204px] bg-white rounded-[12px] shadow-xl p-5 gap-[12px]">
                    <h3 class="text-[1.125em] font-[700] text-lime-500">
                        {{ t('marcadores.section1.card3.title') }}
                    </h3>
                    <p class="text-[0.875em text-slate-700">
                        {{ t('marcadores.section1.card3.text') }}
                    </p>
                </div>


<div class="flex flex-col w-full max-w-[320px] h-[178px] md:h-[204px] bg-white rounded-[12px] shadow-xl p-5 gap-[12px]">
                    <h3 class="text-[1.125em] font-[700] text-lime-500">
                        {{ t('marcadores.section1.card4.title') }}
                    </h3>
                    <p class="text-[0.875em text-slate-700">
                        {{ t('marcadores.section1.card4.text') }}
                    </p>
                </div>

                <div class="flex flex-col w-full max-w-[320px] h-[178px] md:h-[204px] bg-white rounded-[12px] shadow-xl p-5 gap-[12px]">
                    <h3 class="text-[1.125em] font-[700] text-lime-500">
                        {{ t('marcadores.section1.card5.title') }}
                    </h3>
                    <p class="text-[0.875em text-slate-700">
                        {{ t('marcadores.section1.card5.text') }}
                    </p>
                </div>

                <div class="flex flex-col w-full max-w-[320px] h-[178px] md:h-[204px] bg-white rounded-[12px] shadow-xl p-5 gap-[12px]">
                    <h3 class="text-[1.125em] font-[700] text-lime-500">
                        {{ t('marcadores.section1.card6.title') }}
                    </h3>
                    <p class="text-[0.875em text-slate-700">
                        {{ t('marcadores.section1.card6.text') }}
                    </p>
                </div>
            </div>


            <!-- COLOCAR UM CAROUSEL AQUI -->

            <div class="flex md:hidden w-full items-center justify-center">
                <Carousel />
            </div>

        </div>
    </section>


  <section class="w-full flex flex-col">
    <div class="flex conteiner flex-col items-center md:items-stretch md:flex-row-reverse h-auto md:h-[383px] lg:h-[480px]">
      <div class="md:w-1/2">
          <img class="w-full min-h-[350px] md:h-full object-cover object-bottom" src="../assets/marcad-imgs/image-01.jpg" alt=""> 
      </div>

      <div class="w-full md:w-1/2 md:h-auto flex flex-col lg:items-center justify-center gap-[10px] md:gap-[24px] p-5 md:p-10">
        <h2 class="text-[1.25em] md:text-[1.75em] lg:text-[2.5em] xl:text-[3em] font-[700] italic text-cyan-400
        w-full max-w-[325px] lg:max-w-[658px] md:ml-[24px] mt-[27px] leading-[35px] lg:leading-[55px]">
          {{ t('marcadores.section2.title') }}
        </h2>
        <p class="text-[0.875em] lg:text-[1em] xl:text-[1.25em] leading-[25px] md:leading-[30px]
        w-full md:max-w-[325px] lg:max-w-[658px] xl:max-w-[658px] md:ml-[24px] lg:pr-[24px]">
          {{ t('marcadores.section2.text') }}
        </p>

        <div class="w-full md:max-w-[461px] lg:max-w-[658px] md:ml-[24px]">
          <router-link
            class="text-[0.93em] font-[500] w-[290px] lg:w-[297px] h-[28px] lg:h-[42px] rounded-[30px] border-1 border-cyan-400 text-center text-cyan-400 hover:bg-cyan-400 hover:text-white duration-300 flex items-center justify-center mb-[32px] md:mb-0"
            to='/quemsomos'
            >{{ t('marcadores.section2.button') }}</router-link
          >
        </div>

      </div>
    </div>



    <div class="flex conteiner flex-col items-center md:items-stretch md:flex-row h-auto md:h-[383px] lg:h-[480px]">
      <div class="md:w-1/2">
          <img class="w-full min-h-[350px] md:h-full object-cover object-bottom" src="../assets/marcad-imgs/image-02.jpg" alt=""> 
      </div>

      <div class="w-full md:w-1/2 md:h-auto flex flex-col lg:items-center justify-center gap-[10px] md:gap-[24px] p-5 md:p-10">
        <h2 class="text-[1.25em] md:text-[1.75em] lg:text-[2.5em] xl:text-[3em] font-[700] italic text-lime-500
        w-full max-w-[325px] lg:max-w-[658px] md:ml-[24px] mt-[27px] leading-[35px] lg:leading-[55px] ">
          {{ t('marcadores.section3.title') }}
        </h2>
        <p class="text-[0.875em] lg:text-[1em] xl:text-[1.25em] leading-[25px] md:leading-[30px]
        w-full md:max-w-[325px] lg:max-w-[658px] xl:max-w-[658px] md:ml-[24px] lg:pr-[24px]" v-html="t('marcadores.section3.text')">
        </p>

      </div>
    </div>



    <div class="flex conteiner flex-col items-center md:items-stretch md:flex-row-reverse h-auto md:h-[383px] lg:h-[480px]">
      <div class="md:w-1/2">
          <img class="w-full min-h-[350px] md:h-full object-cover object-bottom" src="../assets/marcad-imgs/image-03.jpg" alt=""> 
      </div>

      <div class="w-full md:w-1/2 md:h-auto flex flex-col lg:items-center justify-center gap-[10px] md:gap-[24px] p-5 md:p-10">
        <h2 class="text-[1.25em] md:text-[1.75em] lg:text-[2.5em] xl:text-[3em] font-[700] italic text-cyan-400
        w-full max-w-[325px] lg:max-w-[658px] md:ml-[24px] mt-[27px] leading-[35px] lg:leading-[55px]" v-html="t('marcadores.section4.title')">
        </h2>
        <p class="text-[0.875em] lg:text-[1em] xl:text-[1.25em] leading-[25px] md:leading-[30px]
        w-full md:max-w-[325px] lg:max-w-[658px] xl:max-w-[658px] md:ml-[24px] lg:pr-[24px]">
          {{ t('marcadores.section4.text') }}
        </p>

      </div>
    </div>

  </section>



  <section class="w-full bg-sky-50 flex min-h-[206px] md:min-h-[256px] lg:min-h-[323px] justify-center items-center">
    <div class="container flex flex-col justify-center items-center gap-[28px] md:p-10">
        <h2 class="text-[1.375em] md:text-[1.875em] lg:text-[3em] text-center font-[600] italic text-cyan-400" v-html="t('marcadores.section5.title')">
        </h2>

        <router-link
            class="text-[0.93em] font-[500] w-[192px] h-[42px] rounded-[30px] border-1 border-cyan-400 text-center text-cyan-400 hover:bg-cyan-400 hover:text-white duration-300 flex items-center justify-center mb-[32px] md:mb-0 lg:hidden"
            to='/cadastro'
            >{{ t('marcadores.section5.buttonMobile') }}</router-link
        >

                <a
            class="text-[0.93em] font-[500] w-[192px] lg:w-[230px] h-[42px] rounded-[30px] border-1 border-cyan-400 text-center text-cyan-400 hover:bg-cyan-400 hover:text-white duration-300 items-center justify-center mb-[32px] md:mb-0 hidden lg:flex"
            href="https://admin.fitcert365.com/register"
            >{{ t('marcadores.section5.buttonDesktop') }}</a
        >
    </div>
  </section>
</template>


<script setup>
    import Carousel from '../components/Marcad-components/Marcad-Carousel.vue'
    import { useI18n } from '../composables/useI18n';

    const { t } = useI18n();
</script>