<template>
    <section
        class="bg-[url('/src/assets/quems-imgs/quems-banner.jpg')] w-full h-[128.4px] md:h-[263px] lg:h-[397px] bg-left lg:bg-center bg-cover flex justify-center items-center p-[10px]">
        <div class="w-full container flex items-center justify-center">
            <div
                class="w-full max-w-[261px] h-[53px] md:max-w-[406px] md:h-[82px] lg:max-w-[647.5px] lg:h-[131.1px] bg-cyan-400 transform -skew-x-12 flex items-center justify-center text-center text-white font-[600] italic">
                <h1 class="text-[1.625em] md:text-[2.5em] lg:text-[4.5em]">
                    {{ t('quemSomos.title') }}
                </h1>
            </div>
        </div>
    </section>



    <section class="w-full flex">
        <div class="w-full h-[115px] lg:h-[240px] flex justify-center items-center bg-sky-50">
            <div class="container w-full p-5 md:p-10">
                <h2
                    class="text-[1.375em] md:text-[1.5em] lg:text-[2.25em] text-cyan-400 font-[600] italic leading-[34px]  text-center">
                    {{ t('quemSomos.subtitle') }}
                </h2>
            </div>
        </div>
    </section>


    <section class="w-full">
        <div class="">
            <div
                class="flex conteiner flex-col items-center md:items-stretch md:flex-row-reverse h-auto md:h-[383px] lg:h-[480px]">
                <div class="md:w-1/2">
                    <img class="w-full min-h-[350px] md:h-full object-cover object-bottom xl:object-center"
                        src="../assets/quems-imgs/quems-img-01.jpg" alt="">
                </div>

                <div class="md:w-1/2 md:h-auto flex flex-col lg:items-center justify-center gap-[24px]">
                    <p class="text-[1em] lg:text-[1.5em] leading-[30px] lg:leading-[40px] xl:leading-[50px] hidden lg:flex
        w-full lg:max-w-[603.2px] xl:max-w-[658px]">                {{ t('quemSomos.section1.text1') }}
                    </p>

                    <div class="lg:hidden  flex flex-col gap-[20px] mt-[16px] p-10 md:mt-0">
                        <p class="text-[1em]  leading-[30px]
        w-full max-w-[325px]  md:max-w-[355px]">
        {{ t('quemSomos.section1.textSeparado1') }}
                        </p>

                        <p class="text-[1em]  leading-[30px] md:leading-[25px]
        w-full max-w-[325px] md:max-w-[355px] ">
        {{ t('quemSomos.section1.textSeparado2') }}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </section>






    <section class="w-full flex justify-center items-center flex-col">
        <div class="w-full h-full flex justify-center items-center bg-sky-50 md:gap-[32px] lg:gap-0 flex-wrap">
            <h2
                class="text-[1.625em] md:text-[1.75em] lg:text-[2.25em] text-lime-500 font-[600] italic leading-[40px] md:leading-[55px] p-10 md:text-center mt-[52px]">
                {{ t('quemSomos.section2.title') }}
            </h2>
            <div
                class="w-full md:h-[656px] lg:h-[501px] container hidden md:flex items-center justify-center gap-[32px] lg:gap-[64px] md:flex-wrap lg:flex-nowrap">
                <div class="w-[230px] h-[295px] flex items-center flex-col text-center gap-[18px] lg:gap-[42px]">
                    <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 24 24" fill="none"
                            stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-square-check-big-icon lucide-square-check-big">
                            <path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344" />
                            <path d="m9 11 3 3L22 4" />
                        </svg>
                    </div>

                    <div class="w-full md:max-w-[155px]  lg:max-w-[237px] h-[228px]">
                        <p class="text-[1em] lg:text-[1.25em] leading-[40px] md:p-0">
                            {{ t('quemSomos.section2.card1') }}
                        </p>
                    </div>
                </div>

                <div class="w-[230px] h-[295px] flex items-center flex-col text-center gap-[18px] lg:gap-[42px]">
                    <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 24 24" fill="none"
                            stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-monitor-icon lucide-monitor">
                            <rect width="20" height="14" x="2" y="3" rx="2" />
                            <line x1="8" x2="16" y1="21" y2="21" />
                            <line x1="12" x2="12" y1="17" y2="21" />
                        </svg>
                    </div>

                    <div class="w-full md:max-w-[155px]  lg:max-w-[237px] h-[228px]">
                        <p class="text-[1em] lg:text-[1.25em] leading-[40px] md:p-0">
                            {{ t('quemSomos.section2.card2') }}
                        </p>
                    </div>
                </div>

                <div class="w-[230px] h-[295px] flex items-center flex-col text-center gap-[18px] lg:gap-[42px]">
                    <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 24 24" fill="none"
                            stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-chart-no-axes-column-icon lucide-chart-no-axes-column">
                            <line x1="18" x2="18" y1="20" y2="10" />
                            <line x1="12" x2="12" y1="20" y2="4" />
                            <line x1="6" x2="6" y1="20" y2="14" />
                        </svg>
                    </div>

                    <div class="w-full md:max-w-[155px]  lg:max-w-[237px] h-[228px]">
                        <p class="text-[1em] lg:text-[1.25em] leading-[40px] p-10 md:p-0">
                            {{ t('quemSomos.section2.card3') }}
                        </p>
                    </div>
                </div>

                <div class="w-[237px] h-[295px] flex items-center flex-col text-center gap-[18px] lg:gap-[42px]">
                    <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 24 24" fill="none"
                            stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-calendar-icon lucide-calendar">
                            <path d="M8 2v4" />
                            <path d="M16 2v4" />
                            <rect width="18" height="18" x="3" y="4" rx="2" />
                            <path d="M3 10h18" />
                        </svg>
                    </div>

                    <div class="w-full md:max-w-[155px]  lg:max-w-[237px] h-[228px]">
                        <p class="text-[1em] lg:text-[1.25em] leading-[40px] p-10 md:p-0">
                            {{ t('quemSomos.section2.card4') }}
                        </p>
                    </div>
                </div>

                <div class="w-[237px] h-[295px] flex items-center flex-col text-center gap-[18px] lg:gap-[42px]">
                    <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 24 24" fill="none"
                            stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-link2-icon lucide-link-2">
                            <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                            <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
                            <line x1="8" x2="16" y1="12" y2="12" />
                        </svg>
                    </div>

                    <div class="w-full md:max-w-[155px]  lg:max-w-[237px] h-[228px]">
                        <p class="text-[1em] lg:text-[1.25em] leading-[40px] p-10 md:p-0">
                            {{ t('quemSomos.section2.card5') }}
                        </p>
                    </div>
                </div>

            </div>

            <div class="w-full flex md:hidden p-[10px] pb-0 pt-0 items-center justify-center">
                <Carousel />
            </div>

        </div>
    </section>




    <section class="w-full">
        <div
            class="flex conteiner flex-col items-center md:items-stretch md:flex-row-reverse lg:flex-row h-auto md:h-[446px] lg:h-[480px] md:bg-lime-100">
            <div class="md:w-1/2">
                <img class="w-full min-h-[350px] md:h-full object-cover object-bottom"
                    src="../assets/quems-imgs/quems-img-02.jpg" alt="">
            </div>

            <div
                class="hidden md:flex md:w-1/2 md:h-auto flex-col lg:items-center justify-center gap-[22px] lg:gap-[54px] md:p-10">
                <h2 class="text-[1.25em] md:text-[1.75em] lg:text-[2.5em] xl:text-[3em] font-[700] italic text-cyan-400
        w-full max-w-[461px] lg:max-w-[658px] mt-[27px] leading-[35px] lg:leading-[55px]">
                    {{ t('quemSomos.section3.title') }}
                </h2>
                <p class="text-[1em] lg:text-[1.25em] leading-[30px] md:leading-[35px] lg:leading-[40px] xl:leading-[40px] lg:flex
        w-full lg:max-w-[603.2px] xl:max-w-[658px]">
                    {{ t('quemSomos.section3.text') }}
                </p>

            </div>


            <div class="md:hidden w-full flex min-h-[310px]">
                <CarouselSecond />
            </div>
        </div>
    </section>




    <section class="w-full flex  justify-center p-5 md:p-10 bg-sky-50">
        <div class="container flex flex-col">

            <div class="w-full  flex flex-col items-center text-center">
                <h2 class="text-[1.5em] md:text-[2em] lg:text-[2em] xl:text-[2.3em] font-[700] italic text-lime-500
        w-full max-w-[461px] lg:max-w-[658px] mt-[27px] leading-[35px] lg:leading-[55px]">
        {{ t('quemSomos.section5.title') }}
                </h2>
                <p class="w-full max-w-[1140px] leading-[39px] mt-3 mb-5">
                    {{ t('quemSomos.section5.text1') }}

                </p>
                <p class="w-full max-w-[1140px] leading-[39px] mt-3 mb-5">
                    {{ t('quemSomos.section5.text2') }}

                </p>
            </div>

            <div class="hidden md:flex flex-wrap items-start justify-center gap-6 mt-5">
                <div class="text-center w-full sm:w-[300px] md:w-[310px] max-w-[400px]">
                    <img class="w-full h-[349px] min-h-[300px] object-cover object-left-center rounded-[12px]"
                        src="../assets/quems-imgs/emilio-perfil.jpg" alt="">
                    <h3 class="text-[1.4em] lg:text-[1.8em] font-[600] italic mt-7">Emilio Machado</h3>
                    <span class="text-[1em] lg:text-[1.3em]">{{ t('quemSomos.section6.emilioTitle') }}</span>
                    <p class="mt-4 leading-[20px] lg:leading-[30px] text-[0.85em] lg:text-[1em] mb-10">
                        {{ t('quemSomos.section6.emilioDesc') }}
                    </p>
                </div>

                <div class="text-center w-full sm:w-[300px] md:w-[310px] max-w-[400px]">
                    <img class="w-full h-[349px] min-h-[300px] object-cover rounded-[12px]"
                        src="../assets/quems-imgs/lucas-perfil.jpg" alt="">
                    <h3 class="text-[1.4em] lg:text-[1.8em] font-[600] italic mt-7">Lucas Machado</h3>
                    <span class="text-[1em] lg:text-[1.3em]">{{ t('quemSomos.section6.lucasTitle') }}</span>
                    <p class="mt-4 leading-[20px] lg:leading-[30px] text-[0.85em] lg:text-[1em] mb-10">
                        {{ t('quemSomos.section6.lucasDesc') }}                    </p>
                </div>

                <div class="text-center w-full sm:w-[300px] md:w-[310px] max-w-[400px]">
                    <img class="w-full h-[349px] min-h-[300px] object-cover rounded-[12px]"
                        src="../assets/quems-imgs/marcelo-perfil.png" alt="">
                    <h3 class="text-[1.4em] lg:text-[1.8em] font-[600] italic mt-7">Dr. Marcelo Leitão</h3>
                    <span class="text-[1em] lg:text-[1.3em]">{{ t('quemSomos.section6.marceloTitle') }}</span>
                    <p class="mt-4 leading-[20px] lg:leading-[30px] text-[0.85em] lg:text-[1em] mb-10">
                         {{ t('quemSomos.section6.marceloDesc') }}
                    </p>
                </div>

             
            </div>

            <div class="flex md:hidden flex-wrap items-start justify-center gap-6 mt-5">
                <CarouselThird />
            </div>

        </div>
    </section>




    <section class="w-full h-full flex flex-col items-center justify-center lg:pt-[82px]">
        <div class="w-full hidden md:flex items-center justify-center md:pb-[32px] lg:pb-[18px]">
            <img class="w-full lg:max-w-[1560px] md:h-[267.3px] lg:h-[315px] object-cover object-[25%_30%]"
                src="../assets/quems-imgs/quems-banner-02.jpg" alt="">
        </div>

        <div class="w-full container hidden md:flex items-top justify-center">
            <div class="w-full md:w-1/2 lg:max-w-[408px] h-[276px] p-10 flex flex-col  text-start">
                <h3 class="text-[2em] lg:text-[2.25em] italic text-cyan-400 font-[600] mb-[18px] leading-[40px]">
                    {{ t('quemSomos.section4.card1.text') }}
                </h3>
                <p class="text-[0.95em] lg:text-[1.25em] font-[400] leading-[35px] lg:leading-[40px]">
                    {{ t('quemSomos.section4.card1.descricao') }}
                </p>
            </div>

            <div class="w-full md:w-1/2 lg:max-w-[408px] h-[276px] p-10 flex flex-col text-start">
                <h3 class="text-[2em] lg:text-[2.25em] italic text-cyan-400 font-[600] mb-[18px] leading-[40px]">
                    {{ t('quemSomos.section4.card2.text') }}
                </h3>
                <p class="text-[0.95em] lg:text-[1.25em] font-[400] leading-[35px] lg:leading-[40px]">
                    {{ t('quemSomos.section4.card2.descricao') }}
                </p>
            </div>

            <div class="w-full md:w-1/2 lg:max-w-[408px] min-h-[276px] p-10 flex flex-col text-start">
                <h3 class="text-[2em] lg:text-[2.25em] italic text-cyan-400 font-[600] mb-[18px] leading-[40px]">
                    {{ t('quemSomos.section4.card3.text') }}
                </h3>

                <span>
                    <li class="text-[0.95em] lg:text-[1.25em] font-[400] leading-[35px] lg:leading-[40px]">
                        {{ t('quemSomos.section4.card3.descricao') }}
                    </li>
                    <li class="text-[0.95em] lg:text-[1.25em] font-[400] leading-[35px] lg:leading-[40px]">
                        {{ t('quemSomos.section4.card3.descricao2') }}
                    </li>
                    <li class="text-[0.95em] lg:text-[1.25em] font-[400] leading-[35px] lg:leading-[40px]">
                        {{ t('quemSomos.section4.card3.descricao3') }}
                    </li>
                    <li class="text-[0.95em] lg:text-[1.25em] font-[400] leading-[35px] lg:leading-[40px]">
                        {{ t('quemSomos.section4.card3.descricao4') }}
                    </li>
                    <li class="text-[0.95em] lg:text-[1.25em] font-[400] leading-[35px] lg:leading-[40px]">
                        {{ t('quemSomos.section4.card3.descricao5') }}
                    </li>
                </span>
            </div>


        </div>

    </section>


    <section class="w-full">
        <div
            class="flex conteiner flex-col items-center md:items-stretch lg:flex-row h-auto md:h-auto lg:h-[480px] bg-sky-100">
            <div class="lg:w-1/2">
                <img class="w-full min-h-[350px] md:h-full object-cover object-left xl:object-center"
                    src="../assets/quems-imgs/quems-img-03.jpg" alt="">
            </div>

            <div
                class=" md:w-[571px] flex md:h-auto flex-col lg:items-center justify-center gap-[22px] md:gap-[20px] p-10">
                <h2 class="text-[1.75em] md:text-[2em] lg:text-[2.5em] xl:text-[3em] font-[700] italic text-lime-500
        w-full max-w-[249px] md:max-w-[535px] lg:max-w-[520px] mt-[27px] leading-[55px] lg:leading-[55px]">
                    {{ t('quemSomos.section7.title') }}
                </h2>
                <p class="text-[1em] lg:text-[1.25em] leading-[30px] md:leading-[35px] lg:leading-[40px] xl:leading-[40px] lg:flex
        w-full max-w-[318px] md:max-w-[571px] lg:max-w-[603.2px] xl:max-w-[658px]">
                    {{ t('quemSomos.section7.text') }}
                </p>

            </div>

        </div>
    </section>

</template>

<script setup>
import Carousel from '../components/QuemS-components/QuemS-Carousel-First.vue'
import CarouselSecond from '../components/QuemS-components/QuemS-Carousel-second.vue';
import CarouselThird from '../components/QuemS-components/QuemSomos-Carousel-third.vue';
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>