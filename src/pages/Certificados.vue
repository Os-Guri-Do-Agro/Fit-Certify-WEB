<template>
  <section
    class="bg-[url('/src/assets/certifi-imgs/certif-banner.jpg')] w-full h-[128.4px] md:h-[263px] lg:h-[397px] bg-left lg:bg-center bg-cover flex justify-center items-center"
  >
    <div class="w-full container flex items-center justify-center">
      <div
        class="w-full max-w-[261px] h-[53px] md:max-w-[406px] md:h-[82px] lg:max-w-[647.5px] lg:h-[131.1px] bg-cyan-400 transform -skew-x-12 flex items-center justify-center text-center text-white font-[600] italic"
      >
        <h1 class="text-[1.625em] md:text-[2.5em] lg:text-[4.5em]">
          {{ t('certificados.title') }}
        </h1>
      </div>
    </div>
  </section>

  <section class="w-full flex">
    <div
      class="w-full h-[115px] lg:h-[240px] flex justify-center items-center bg-sky-50"
    >
      <div class="container w-full p-5 md:p-10">
        <h2
          class="text-[1.375em] md:text-[1.5em] lg:text-[2.25em] text-cyan-400 font-[600] italic leading-[34px] text-center"
        >
        {{ t('certificados.subtitle') }}
        </h2>
      </div>
    </div>
  </section>

  <section class="w-full">
    <div class="">
      <div
        class="flex conteiner flex-col items-center md:items-stretch md:flex-row-reverse h-auto md:h-[510px] lg:h-[480px]"
      >
        <div class="md:w-1/2">
          <img
            class="w-full min-h-[350px] object-left md:h-full object-cover md:object-bottom xl:object-center"
            src="../assets/certifi-imgs/image01.jpg"
            alt=""
          />
        </div>

        <div
          class="w-full md:w-1/2 md:h-auto flex flex-col lg:items-center justify-center gap-[24px] p-5 lg:p-10"
        >
          <p
            class="text-[1em] lg:text-[1.5em] leading-[30px] lg:leading-[40px] xl:leading-[50px] hidden lg:flex w-full lg:max-w-[603.2px] xl:max-w-[658px]"
          >
          {{ t('certificados.section1.text') }}
          </p>

          <div class="lg:hidden flex flex-col mt-[16px] pt-5 pb-5 md:mt-0">
            <p
              class="text-[1em] leading-[30px] w-full max-w-[325px] md:max-w-[355px] md:p-10 md:pb-0"
            >
            {{ t('certificados.section1.textSeparado1') }}
            </p>

            <p
              class="text-[1em] leading-[30px] md:leading-[25px] w-full max-w-[325px] md:max-w-[355px] md:p-10 pt-0"
            >
            {{ t('certificados.section1.textSeparado2') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="w-full min-h-[513px] md:min-h-[210px] hidden md:flex justify-center items-center flex-col"
  >
    <div
      class="w-full md:min-h-[847px] lg:min-h-[501px] flex justify-center items-center bg-cyan-400 flex-col md:gap-[52px]"
    >
      <h2
        class="text-[1.375em] md:text-[1.75em] lg:text-[2.25em] text-white font-[600] italic leading-[40px] md:leading-[55px] md:text-center mt-[52px]"
      >
        {{ t('certificados.section2.title') }}
      </h2>
      <div
        class="w-full container hidden md:flex items-center justify-center gap-[18px] flex-wrap lg:flex-nowrap p-5"
      >
        <div
          class="w-[340px] h-[248.9px] flex justify-center flex-col gap-[32px] bg-white rounded-[12px] shadow-lg p-[20px]"
        >
          <div class="">
            <h4 class="text-[1.17em] text-cyan-400 font-[700] mb-[12px]">
              {{ t('certificados.section2.streetRunning.title') }}
            </h4>
            <p class="text-[1em]" v-html="t('certificados.section2.streetRunning.description')"></p>
          </div>

          <div class="">
            <a
              href="https://fit-certify-admin.vercel.app/register"
              target="_blank"
              class="text-[0.83em] font-[700] w-[85.7px] h-[39.5px] rounded-[30px] border-1 border-cyan-400 text-center text-white bg-cyan-400 hover:bg-cyan-500 duration-300 flex items-center justify-center"
              >{{ t('certificados.section2.streetRunning.button') }}</a
            >
          </div>
        </div>

        <div
          class="w-[340px] h-[248.9px] flex justify-center flex-col gap-[32px] bg-white rounded-[12px] shadow-lg p-[20px]"
        >
          <div class="">
            <h4 class="text-[1.17em] text-cyan-400 font-[700] mb-[12px]">
              {{ t('certificados.section2.gymsTraining.title') }}
            </h4>
            <p class="text-[1em]" v-html="t('certificados.section2.gymsTraining.description')"></p>
          </div>

          <div class="">
            <a
              href="https://fit-certify-admin.vercel.app/register"
              target="_blank"
              class="text-[0.83em] font-[700] w-[85.7px] h-[39.5px] rounded-[30px] border-1 border-cyan-400 text-center text-white bg-cyan-400 hover:bg-cyan-500 duration-300 flex items-center justify-center"
              >{{ t('certificados.section2.gymsTraining.button') }}</a
            >
          </div>
        </div>

        <div
          class="w-[340px] h-[248.9px] flex justify-center flex-col gap-[32px] bg-white rounded-[12px] shadow-lg p-[20px]"
        >
          <div class="">
            <h4 class="text-[1.17em] text-cyan-400 font-[700] mb-[12px]">
              {{ t('certificados.section2.cyclingTriathlon.title') }}
            </h4>
            <p class="text-[1em]" v-html="t('certificados.section2.cyclingTriathlon.description')">
            </p>
          </div>

          <div class="">
            <a
              href="https://fit-certify-admin.vercel.app/register"
              target="_blank"
              class="text-[0.83em] font-[700] w-[85.7px] h-[39.5px] rounded-[30px] border-1 border-cyan-400 text-center text-white bg-cyan-400 hover:bg-cyan-500 duration-300 flex items-center justify-center"
              >{{ t('certificados.section2.cyclingTriathlon.button') }}</a
            >
          </div>
        </div>

        <div
          class="w-[340px] h-[248.9px] flex justify-center flex-col gap-[32px] bg-white rounded-[12px] shadow-lg p-[20px]"
        >
          <div class="">
            <h4 class="text-[1.17em] text-cyan-400 font-[700] mb-[12px]">
              {{ t('certificados.section2.corporatePrograms.title') }}
            </h4>
            <p class="text-[1em]" v-html="t('certificados.section2.corporatePrograms.description')">
            </p>
          </div>

          <div class="">
            <a
              href="https://fit-certify-admin.vercel.app/register"
              target="_blank"
              class="text-[0.83em] font-[700] w-[85.7px] h-[39.5px] rounded-[30px] border-1 border-cyan-400 text-center text-white bg-cyan-400 hover:bg-cyan-500 duration-300 flex items-center justify-center"
              >{{ t('certificados.section2.corporatePrograms.button') }}</a
            >
          </div>
        </div>
      </div>

      <div class="text-center pb-[32px] p-5">
        <span class="text-zinc-800">
          {{ t('certificados.section2.validityNote') }}
        </span>
      </div>
    </div>
  </section>

  <section class="w-full flex flex-col md:hidden bg-cyan-400">
    <div
      class="w-full container flex items-center justify-center flex-wrap lg:flex-nowrap"
    >
      <div class="">
        <h2
          class="text-[1.375em] text-white font-[600] italic leading-[40px] md:text-center mt-[52px]"
        >
          {{ t('certificados.section2.title') }}
        </h2>
      </div>

      <div class="w-full items-center justify-center md:hidden pb-0 pt-0">
        <CarouselSecond />
      </div>

      <div class="text-center pb-[52px] p-5">
        <span class="text-zinc-800">
          {{ t('certificados.section2.validityNote') }}
        </span>
      </div>
    </div>
  </section>

  <section
    class="w-full h-full flex flex-col items-center justify-center lg:pt-[52px]"
  >
    <div
      class="w-full md:min-h-[607px] lg:min-h-[651px] hidden md:flex items-center flex-col md:gap-[52px]"
    >
      <h2
        class="text-[1.375em] md:text-[1.75em] lg:text-[2.25em] text-lime-500 font-[600] italic leading-[40px] md:leading-[55px] md:text-center mt-[52px]"
      >
        {{ t('certificados.section3.title') }}
      </h2>
      <div
        class="w-full container hidden md:flex items-center justify-center gap-[52px] lg:gap-[84px] lg:flex-nowrap p-5 md:p-10"
      >
        <div
          class="w-[237px] h-[295px] flex items-center flex-col gap-[32px] lg:gap-[52px]"
        >
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#88CE0D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-menu-icon lucide-menu"
            >
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          </div>

          <div class="flex items-top flex-col lg:flex-row justify-top">
            <div class=" w-10 flex-shrink-0">
                          <span class="text-[1em] lg:text-[1.25em] text-lime-500 font-[700]"
              >{{ t('certificados.section3.step1.number') }}</span
            >
            </div>

            <p class="text-[1em] lg:text-[1.25em]">
              {{ t('certificados.section3.step1.description') }}
            </p>
          </div>
        </div>

        <div
          class="w-[237px] h-[295px] flex items-center flex-col gap-[32px] lg:gap-[52px]"
        >
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#88CE0D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-search-icon lucide-search"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          </div>

          <div class="flex items-top flex-col lg:flex-row justify-top">
            <div class=" w-10 flex-shrink-0">
              <span class="text-[1em] lg:text-[1.25em] text-lime-500 font-[700]"
                >{{ t('certificados.section3.step2.number') }}</span
              >
            </div>
            <p class="text-[1em] lg:text-[1.25em]">
              {{ t('certificados.section3.step2.description') }}
            </p>
          </div>
        </div>

        <div
          class="w-[237px] h-[295px] flex items-center flex-col gap-[32px] lg:gap-[52px]"
        >
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#88CE0D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-check-icon lucide-check"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>

          <div class="flex items-top flex-col lg:flex-row justify-top">
            <div class=" w-10 flex-shrink-0">
              <span class="text-[1em] lg:text-[1.25em] text-lime-500 font-[700]"
                >{{ t('certificados.section3.step3.number') }}</span
              >
            </div>
            <p class="text-[1em] lg:text-[1.25em]">
              {{ t('certificados.section3.step3.description') }}
            </p>
          </div>
        </div>

        <div
          class="w-[237px] h-[295px] flex items-center flex-col gap-[32px] lg:gap-[52px]"
        >
          <div class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#88CE0D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-paperclip-icon lucide-paperclip"
            >
              <path
                d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"
              />
            </svg>
          </div>

          <div class="flex items-top flex-col lg:flex-row justify-top">
            <div class=" w-10 flex-shrink-0">
              <span class="text-[1em] lg:text-[1.25em] text-lime-500 font-[700]"
                >{{ t('certificados.section3.step4.number') }}</span
              >
            </div>
            <p class="text-[1em] lg:text-[1.25em]">
              {{ t('certificados.section3.step4.description') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col md:hidden w-full items-center justify-center pb-0 pt-0"
    >
      <h2
        class="text-[1.375em] text-lime-500 font-[600] italic leading-[40px] text-center mt-[52px]"
      >
        {{ t('certificados.section3.title') }}
      </h2>
      <Carousel />
    </div>
  </section>

  <section
    class="w-full min-h-[240px] flex justify-between items-center flex-col mt-[52px] bg-lime-100"
  >
    <div
      class="flex w-full flex-col-reverse items-center md:items-stretch md:flex-row h-auto md:h-[453px] lg:h-[451px] overflow-hidden"
    >
      <div class="w-full md:w-1/2">
        <img
          class="w-full min-h-[350px] md:h-[453px] object-cover object-bottom"
          src="../assets/certifi-imgs/image02.jpg"
          alt=""
        />
      </div>

      <div
        class="md:w-1/2 h-[409px] md:h-auto flex flex-col lg:items-center justify-center gap-[24px] md:p-10 p-5"
      >
        <h2
          class="text-[1.625em] md:text-[1.75em] lg:text-[2.5em] xl:text-[3em] font-[700] italic text-cyan-400 w-full max-w-[461px] lg:max-w-[658px] md:ml-[24px] leading-[35px] lg:leading-[55px]"
        >
          {{ t('certificados.section4.title') }}
        </h2>
        <p
          class="text-[1em] xl:text-[1.25em] leading-[32px] w-full max-w-[322px] md:max-w-[325px] lg:max-w-[658px] xl:max-w-[658px] md:ml-[24px] lg:pr-[24px]"
        >
          {{ t('certificados.section4.description') }}
        </p>

        <div class="hidden md:flex w-full lg:max-w-[658px] md:ml-[24px]">
          <a
            href="https://fit-certify-admin.vercel.app/register"
            target="_blank"
            class="text-[0.93em] w-full font-[500] max-w-[359px] h-[41px] lg:h-[53px] rounded-[30px] border-1 border-cyan-400 text-center text-cyan-400 hover:bg-cyan-400 hover:text-white duration-300 flex items-center justify-center mb-[32px] md:mb-0"
            to="/cadastro"
            >{{ t('certificados.section4.button') }}</a
          >
        </div>
      </div>
    </div>
  </section>

  <section id="faq" class="w-full flex justify-center items-center bg-cyan-50">
    <div
      class="w-full container flex flex-col mt-[32px] md:mt-[52px] lg:mt-[82px] lg:gap-[32px] p-5 md:p-10"
    >
      <div class="w-full flex items-center md:justify-center pb-4">
        <h2
          class="text-[1.375em] md:text-[2em] text-lime-500 font-[600] italic"
        >
          {{ t('certificados.faq.title') }}
        </h2>
      </div>

      <div class="hidden lg:flex w-full md:flex-col gap-[32px]">
        <div class="flex md:gap-[42px] lg:gap-[84px] justify-between">
          <h6 class="flex w-[500px] gap-[5px] font-[600] text-slate-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00ff4c"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-check-icon lucide-check"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {{ t('certificados.faq.question1.question') }}
          </h6>

          <p class="md:max-w-[400px] lg:max-w-[800px] opacity-80">
            {{ t('certificados.faq.question1.answer') }}
          </p>
        </div>

        <div class="flex md:gap-[42px] lg:gap-[84px] justify-between">
          <h6 class="flex w-[500px] gap-[5px] font-[600] text-slate-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00ff4c"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-check-icon lucide-check"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {{ t('certificados.faq.question2.question') }}
          </h6>

          <p class="md:max-w-[400px] lg:max-w-[800px] opacity-80">
            {{ t('certificados.faq.question2.answer') }}
          </p>
        </div>

        <div class="flex md:gap-[42px] lg:gap-[84px] justify-between">
          <h6 class="flex w-[500px] gap-[5px] font-[600] text-slate-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00ff4c"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-check-icon lucide-check"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {{ t('certificados.faq.question3.question') }}
          </h6>

          <p class="md:max-w-[400px] lg:max-w-[800px] opacity-80">
            {{ t('certificados.faq.question3.answer') }}
          </p>
        </div>

        <div class="flex md:gap-[42px] lg:gap-[84px] justify-between">
          <h6 class="flex w-[500px] gap-[5px] font-[600] text-slate-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00ff4c"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-check-icon lucide-check"
            >
              <path d="M20 6 9 17l-5-5" /></svg
            >{{ t('certificados.faq.question4.question') }}
          </h6>

          <p class="md:max-w-[400px] lg:max-w-[800px] opacity-80">
            {{ t('certificados.faq.question4.answer') }}
          </p>
        </div>

        <div class="flex md:gap-[42px] lg:gap-[84px] justify-between">
          <h6 class="flex w-[500px] gap-[5px] font-[600] text-slate-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00ff4c"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-check-icon lucide-check"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {{ t('certificados.faq.question5.question') }}
          </h6>

          <p class="md:max-w-[400px] lg:max-w-[800px] opacity-80">
            {{ t('certificados.faq.question5.answer') }}
          </p>
        </div>

        <div class="flex md:gap-[42px] lg:gap-[84px] justify-between">
          <h6 class="flex w-[500px] gap-[5px] font-[600] text-slate-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00ff4c"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-check-icon lucide-check"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {{ t('certificados.faq.question6.question') }}
          </h6>

          <p class="md:max-w-[400px] lg:max-w-[800px] opacity-80">
            Sim. O certificado pode ser utilizado em diversas provas, desde que
            esteja dentro do período de validade definido pelo médico
            (geralmente entre 3 e 12 meses). Basta apresentá-lo aos
            organizadores quando solicitado.
          </p>
        </div>
      </div>

      <div class="lg:hidden">
        <Faq />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";
import Carousel from "../components/Certif-components/Certif-Carousel-First.vue";
import CarouselSecond from "../components/Certif-components/Certif-Carousel-Second.vue";
import Faq from "../components/Certif-components/FAQ.vue";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();


const route = useRoute();

onMounted(() => {
  if (route.hash === "#faq") {
    nextTick(() => {
      setTimeout(() => {
        const element = document.getElementById("faq");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    });
  }
});
</script>
