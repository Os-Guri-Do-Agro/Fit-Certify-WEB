<template>
  <section
    class="bg-[url('/src/assets/home-imgs/banner-home.jpg')] w-full h-auto md:h-[419px] lg:h-[760px] bg-cover bg-no-repeat bg-right flex justify-center items-center p-10"
  >
    <div class="container flex">
      <div
        class="flex flex-col text-start max-w-[792px] gap-[18px] lg:gap-[28px]"
      >
        <h1
          class="text-[1.5em] md:text-[1.875em] lg:text-[4.875em] font-[600] italic text-cyan-400 leading-[30px] md:leading-[35px] lg:leading-[90px]"
          v-html="t('home.banner.title')"
        >
        </h1>

        <p
          class="text-[0.875em] lg:text-[1.5em] text-white font-[400] leading-[22px] md:leading-[26px] lg:leading-[40px] max-w-[317px] md:max-w-[394.7px] lg:max-w-[717px]"
        >
          {{ t('home.banner.description') }}
        </p>

        <a
          href="https://fit-certify-admin.vercel.app/registers"
          target="_blank"
          class="w-[197px] lg:w-[294.9px] h-[34px] lg:h-[50.57px] text-[0.8em] lg:text-[1.1em] bg-lime-500 rounded-[30px] flex items-center justify-center text-white tracking-[1.5%] text-center hover:bg-lime-600 duration-300"
          to="/cadastro"
          >{{ t('home.banner.cta') }}</a
        >
      </div>
      <div class="flex absolute">
        <modalParabens />
      </div>

    </div>
  </section>

  <section class="w-full flex justify-center min-h-[350px] bg-cyan-400">
    <div
      class="container flex items-center justify-center flex-col md:flex-row md:p-10 lg:p-0"
    >
      <div
        class="flex flex-col items-center justify-center w-1/2 h-[209px] text-center gap-[11px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-clock4-icon lucide-clock-4"
        >
          <path d="M12 6v6l4 2" />
          <circle cx="12" cy="12" r="10" />
        </svg>

        <h2 class="text-[1.5em] lg:text-[2.25em] italic font-[700] text-white">
          {{ t('home.features.agility.title') }}
        </h2>

        <span
          class="text-[1em] lg:text-[1.5em] font-[400] max-w-[256px] xl:max-w-[453.2px] text-white"
        >
          {{ t('home.features.agility.description') }}
        </span>
      </div>

      <div
        class="w-[200px] h-[2px] md:w-[2px] md:h-[276px] rounded-[2px] bg-cyan-500"
      ></div>

      <div
        class="flex flex-col items-center justify-center w-1/2 h-[209px] text-center gap-[11px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-key-icon lucide-key"
        >
          <path
            d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"
          />
          <path d="m21 2-9.6 9.6" />
          <circle cx="7.5" cy="15.5" r="5.5" />
        </svg>

        <h2 class="text-[1.5em] lg:text-[2.25em] italic font-[700] text-white">
          {{ t('home.features.security.title') }}
        </h2>

        <span
          class="text-[1em] lg:text-[1.5em] font-[400] max-w-[256px] xl:max-w-[443.2px] text-white"
        >
          {{ t('home.features.security.description') }}
        </span>
      </div>

      <div
        class="w-[200px] h-[2px] md:w-[2px] md:h-[276px] rounded-[2px] bg-cyan-500"
      ></div>

      <div
        class="flex flex-col items-center justify-center w-1/2 h-[209px] text-center gap-[11px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-radio-icon lucide-radio"
        >
          <path d="M16.247 7.761a6 6 0 0 1 0 8.478" />
          <path d="M19.075 4.933a10 10 0 0 1 0 14.134" />
          <path d="M4.925 19.067a10 10 0 0 1 0-14.134" />
          <path d="M7.753 16.239a6 6 0 0 1 0-8.478" />
          <circle cx="12" cy="12" r="2" />
        </svg>

        <h2 class="text-[1.5em] lg:text-[2.25em] italic font-[700] text-white">
          {{ t('home.features.technology.title') }}
        </h2>

        <span
          class="text-[1em] lg:text-[1.5em] font-[400] w-full max-w-[256px] xl:max-w-[443.2px] text-white mb-[32px] md:mb-0"
        >
          {{ t('home.features.technology.description') }}
        </span>
      </div>
    </div>
  </section>

  <section class="w-full flex flex-col">
    <div
      class="flex flex-col items-center md:items-stretch md:flex-row-reverse h-auto md:h-[383px] lg:h-[480px]"
    >
      <div class="md:w-1/2">
        <img
          class="w-full min-h-[350px] md:h-full object-cover object-bottom"
          src="../assets/home-imgs/home-img-01.jpg"
          alt=""
        />
      </div>

      <div
        class="md:w-1/2 md:h-auto flex flex-col lg:items-center justify-center gap-[24px] md:p-10"
      >
        <h2
          class="text-[1.25em] md:text-[1.75em] lg:text-[2.5em] xl:text-[3em] font-[700] italic text-cyan-400 w-full max-w-[461px] lg:max-w-[658px] md:ml-[24px] mt-[27px] leading-[35px] lg:leading-[55px]"
          v-html="t('home.sections.health.title')"
        >
        </h2>
        <p
         
          v-html="t('home.sections.health.description')"
          class="text-[0.875em] lg:text-[1em] xl:text-[1.25em] w-full max-w-[250px] md:max-w-[325px] lg:max-w-[658px] xl:max-w-[658px] md:ml-[24px] lg:pr-[24px]"
        >
        </p>

        <div class="w-full md:max-w-[461px] lg:max-w-[658px] md:ml-[24px]">
          <router-link
            class="text-[0.93em] font-[500] w-[224px] h-[28px] lg:h-[42px] rounded-[30px] border-1 border-cyan-400 text-center text-cyan-400 hover:bg-cyan-400 hover:text-white duration-300 flex items-center justify-center mb-[32px] md:mb-0"
            to="/quemsomos"
            >{{ t('home.learnMore') }}</router-link
          >
        </div>
      </div>
    </div>

    <div
      class="flex flex-col items-center md:items-stretch md:flex-row h-auto md:h-[383px] lg:h-[480px]"
    >
      <div class="md:w-1/2">
        <img
          class="w-full min-h-[350px] md:h-full object-cover object-bottom"
          src="../assets/home-imgs/home-img-02.jpg"
          alt=""
        />
      </div>

      <div
        class="md:w-1/2 md:h-auto flex flex-col lg:items-center justify-center gap-[24px] md:p-10 ml-4 md:ml-0"
      >
        <h2
          class="text-[1.25em] md:text-[1.75em] lg:text-[2.5em] xl:text-[3em] font-[700] italic text-lime-500 w-full max-w-[461px] lg:max-w-[658px] md:ml-[24px] mt-[27px] leading-[35px] lg:leading-[55px]"
          v-html="t('home.sections.events.title')"
        >
        </h2>
        <p
          class="text-[0.875em] lg:text-[1em] xl:text-[1.25em] w-full max-w-[250px] md:max-w-[325px] lg:max-w-[658px] xl:max-w-[658px] md:ml-[24px] lg:pr-[24px]"
        >
          {{ t('home.sections.events.description') }}
        </p>

        <div class="w-full md:max-w-[461px] lg:max-w-[658px] md:ml-[24px]">
          <router-link
            class="text-[0.93em] font-[500] w-[224px] h-[28px] lg:h-[42px] rounded-[30px] border-1 border-lime-500 text-center text-lime-500 hover:bg-lime-500 hover:text-white duration-300 flex items-center justify-center mb-[32px] md:mb-0"
            to="/eventos"
            >{{ t('home.learnMore') }}</router-link
          >
        </div>
      </div>
    </div>

    <div
      class="flex flex-col items-center md:items-stretch md:flex-row-reverse h-auto md:h-[383px] lg:h-[480px]"
    >
      <div class="md:w-1/2">
        <img
          class="w-full min-h-[350px] md:h-full object-cover object-bottom"
          src="../assets/home-imgs/home-img-03.jpg"
          alt=""
        />
      </div>

      <div
        class="md:w-1/2 md:h-auto flex flex-col lg:items-center justify-center gap-[24px] md:p-10 ml-9 md:ml-0"
      >
        <h2
          class="text-[1.25em] md:text-[1.75em] lg:text-[2.5em] xl:text-[3em] font-[700] italic text-cyan-400 w-full max-w-[461px] lg:max-w-[658px] md:ml-[24px] mt-[27px] leading-[35px] lg:leading-[55px]"
          v-html="t('home.sections.tracking.title')"
        >
        </h2>
        <p
          class="text-[0.875em] lg:text-[1em] xl:text-[1.25em] w-full max-w-[250px] md:max-w-[325px] lg:max-w-[658px] xl:max-w-[658px] md:ml-[24px] lg:pr-[24px]"
        >
          {{ t('home.sections.tracking.description') }}
        </p>

        <div class="w-full md:max-w-[461px] lg:max-w-[658px] md:ml-[24px]">
          <router-link
            class="text-[0.93em] font-[500] w-[224px] h-[28px] lg:h-[42px] rounded-[30px] border-1 border-cyan-400 text-center text-cyan-400 hover:bg-cyan-400 hover:text-white duration-300 flex items-center justify-center mb-[32px] md:mb-0"
            to="/marcadores"
            >{{ t('home.learnMore') }}</router-link
          >
        </div>
      </div>
    </div>

    <div
      class="flex flex-col items-center md:items-stretch md:flex-row h-auto md:h-[383px] lg:h-[480px]"
    >
      <div class="md:w-1/2">
        <img
          class="w-full min-h-[350px] md:h-full object-cover object-bottom"
          src="../assets/home-imgs/home-img-04.jpg"
          alt=""
        />
      </div>

      <div
        class="md:w-1/2 md:h-auto flex flex-col lg:items-center justify-center gap-[24px] p-10"
      >
        <h2
          class="text-[1.25em] md:text-[1.75em] lg:text-[2.5em] xl:text-[3em] font-[700] italic text-lime-500 w-full max-w-[461px] lg:max-w-[658px] md:ml-[24px] mt-[27px] leading-[35px] lg:leading-[55px]"
        >
          {{ t('home.sections.content.title') }}
        </h2>
        <p
          class="text-[0.875em] lg:text-[1em] xl:text-[1.25em] w-full max-w-[250px] md:max-w-[325px] lg:max-w-[658px] xl:max-w-[658px] md:ml-[24px] lg:pr-[24px]"
        >
          {{ t('home.sections.content.description') }}
        </p>

        <div class="w-full md:max-w-[461px] lg:max-w-[658px] md:ml-[24px]">
          <router-link
            class="text-[0.93em] font-[500] w-[224px] h-[28px] lg:h-[42px] rounded-[30px] border-1 border-lime-500 text-center text-lime-500 hover:bg-lime-500 hover:text-white duration-300 flex items-center justify-center mb-[32px] md:mb-0"
            to="/artigos"
            >{{ t('home.learnMore') }}</router-link
          >
        </div>
      </div>
    </div>
  </section>

  <section
    class="w-full  flex items-center justify-center bg-sky-50"
  >
    <div class="w-full container px-5 md:px-20 md-px-10 pt-20 pb-10">
      <div class="w-full flex flex-col items-center justify-center gap-[32px]">
        <div
          class="flex w-full flex-col justify-center items-center text-center gap-[16px] p-[10px] mt-[43px] md:mt-0"
        >
          <h2
            class="text-[1.6em] md:text-[2.25em] lg:text-[2.75em] xl:text-[3em] font-[600] italic text-cyan-400 w-full md:max-w-[768px] lg:max-w-[1392px] lg:mt-[32px]"
          >
            {{ t('home.support.title') }}
          </h2>
          <p class="text-[0.9em] lg:text-[1.25em] flex md:hidden lg:flex">
            {{ t('home.support.description') }}
          </p>
        </div>

        <div class="flex items-center justify-center">
  <ul class="flex flex-wrap gap-8 justify-center">
    <li 
      v-for="item in afiliadosApoiadores" 
      :key="item.id"
      class="flex items-center justify-center w-[280px] h-[170px] rounded-xl"
    >
      <a 
        :href="item?.linkRedirect" 
        target="_blank" 
        class="flex items-center justify-center w-full h-full"
      >
        <img 
          :src="item.imagemUrl"
          alt="Logo Apoiador"
          class="max-w-full max-h-full object-contain p-2"
        />
      </a>
    </li>
  </ul>
</div>

        <div
          class="flex w-full items-center justify-center mt-[32px] mb-[43px] md:mb-0"
        >
          <router-link
            class="text-[0.93em] font-[500] w-[224px] h-[42px] rounded-[30px] border-1 border-cyan-400 text-center text-cyan-400 hover:bg-cyan-400 hover:text-white duration-300 flex items-center justify-center"
            to="/contato"
            >{{ t('home.support.cta') }}</router-link
          >
        </div>
      </div>
    </div>
  </section>

  <section
    class="w-full flex items-center justify-center bg-sky-50 pb-20"
  >
    <div class="w-full container px-5 md:px-20 md-px-10 flex ">
      <div class="w-full flex flex-col items-center justify-center gap-[32px]">
        <div
          class="flex flex-col justify-center items-center text-center gap-[16px] p-[10px] mt-[43px] md:mt-0"
        >
          <h2
            class="text-[1.6em] md:text-[2.25em] lg:text-[2.75em] xl:text-[3em] font-[600] italic text-cyan-400 md:max-w-[768px] lg:max-w-[1392px] lg:mt-[32px]"
          >
            {{ t('home.sponsors.title') }}
          </h2>
          <p class="text-[0.9em] lg:text-[1.25em] flex md:hidden lg:flex">
            {{ t('home.sponsors.description') }}
          </p>
        </div>

        <div class="flex items-center justify-center">
  <ul class="flex flex-wrap gap-8 justify-center">
    <li 
      v-for="item in afiliadosPatrocinadores" 
      :key="item.id"
      class="flex items-center justify-center w-[280px] h-[170px] rounded-xl"
    >
      <a 
        :href="item?.linkRedirect" 
        target="_blank" 
        class="flex items-center justify-center w-full h-full"
      >
        <img 
          :src="item.imagemUrl"
          alt="Logo Patrocinador"
          class="max-w-full max-h-full object-contain p-2"
        />
      </a>
    </li>
  </ul>
</div>
            <router-link
            class="text-[0.93em] font-[500] w-[224px] h-[42px] rounded-[30px] border-1 border-cyan-400 text-center text-cyan-400 hover:bg-cyan-400 hover:text-white duration-300 flex items-center justify-center mt-5"
            to="/marketplace"
            >{{ t('home.viewMore') }}</router-link
          >
      </div>
    </div>
  </section>


</template>

<script setup>
import modalParabens from '../components/modalParabens.vue';
import afiliadoService from '../services/Afiliados/afiliado-service';
import {ref, onMounted, computed} from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const afiliados = ref([])

const afiliadosApoiadores = computed(() => {
  return afiliados.value.filter(item => item.isApoiador === true)
})

const afiliadosPatrocinadores = computed(() => {
  return afiliados.value.filter(item => item.isPatrocinador === true)
})

onMounted(() => {
  buscarAfiliados()
})

const buscarAfiliados = async () => {
  try {
    const response = await afiliadoService.getAllAfiliados()
    afiliados.value = response.data
  } catch (error) {
    console.error(error)
  }
}
</script>
