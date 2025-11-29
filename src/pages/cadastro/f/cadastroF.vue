<template>
<div class="bg-black">
  <section class="flex md:hidden items-center justify-center bg-black py-5 px-5 w-full pt-10 pb-5">
    <router-link to="/" class="flex justify-center items-center">
      <img src="/Logo-Grande.png" alt="Logo" class="w-full max-w-[80%] sm:max-w-full" />
    </router-link>
  </section>

<section class="relative w-full h-auto flex md:hidden">
  <img
    class="w-full h-full object-cover"
    src="../../../assets/NovoCadastro-imgs/banner-mobileF.jpg"
    alt=""
  >

  <h1 class="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-3xl font-bold drop-shadow-lg text-center w-full max-w-[80%]" v-html="t('cadastro.title')">
  </h1>
</section>

  <section
    class="relative w-full h-screen md:h-auto overflow-hidden md:flex items-center justify-center bg-gradient-to-r from-black to-neutral-900 py-10 hidden"
  >

    <div class="absolute right-0 top-0 w-full lg:w-[100%] h-full header-image-container ">
      <img
        src="../../../assets/NovoCadastro-imgs/header-02.png"
        alt="Header"
        class="w-full h-full object-cover object-right hidden md:block"
      />

      <div
        class="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent z-10 hidden md:flex"
      ></div>

      <div class="absolute bottom-8 sm:bottom-10 left-0 right-0 z-20 flex flex-col justify-center md:hidden px-10">
        <h1 class="text-4xl font-extrabold leading-tight text-white text-center px-5" v-html="t('cadastro.title')">
        </h1>
      </div>

    </div>

    <div
      class="container px-5 sm:px-10 md:header relative z-20 w-full  text-white flex flex-col justify-center "
    >
      <div
        class="backdrop-blur-[2px] rounded-[30px] bg-gradient-to-b from-black/50 to-transparent w-full lg:w-[60%] p-10 hidden md:flex flex-col"
      >
      <div class="">
              <router-link to="/" class="inline-block">
        <img src="/Logo-Grande.png" alt="Logo" class="w-50 lg:w-70 mb-5" />
      </router-link>
      </div>

        <h1
          class="text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight mb-6"
          v-html="t('cadastro.title')"
        >
        </h1>

        <p
          class="text-[14px] md:text-[16px] lg:text-[18px] text-zinc-300 max-w-xl mb-8 leading-relaxed"
          v-html="t('cadastro.descriptionF')"
        >
        </p>

        <button
          @click="scrollToForm"
          class="bg-cyan-500 hover:bg-cyan-300 text-black font-semibold rounded-full px-8 py-3 lg:text-[18px] md:text-[16px] text-[12px] w-fit transition-all shadow-lg shadow-cyan-500/20 mb-12 cursor-pointer duration-300 hover:-translate-y-1"
        >
          {{ t('cadastro.button') }}
        </button>
      </div>

      <div
        class="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap- text-sm text-white backdrop-blur-[4px] rounded-[30px] bg-gradient-to-b from-black/50 to-transparent p-5 w-full hidden"
      >
        <div
          class="p-5 transition-all flex gap-1 flex-col"
          v-for="(headerInfo, index) in headerInfos"
          :key="index"
        >
          <i :class="`${headerInfo.icon} text-[18px] mb-2`"></i>
          <p class="font-semibold text-[18px] text-white mb-1">
            {{ headerInfo.title }}
          </p>
          <li class="ml-5 hidden md:list-item">
            {{ headerInfo.desc }}
          </li>
          <p class="flex md:hidden">{{ headerInfo.desc }}</p>
        </div>
      </div>
      </div>

  </section>

  <section class="flex flex-col md:hidden bg-black">
    <div class="flex flex-col items-center justify-center px-15 ">
        <p
          class="text-[14px] md:text-[16px] lg:text-[18px] text-zinc-300 max-w-xl mb-8 leading-relaxed text-center"
          v-html="t('cadastro.descriptionF')"
        >
        </p>
        <button
          @click="scrollToForm"
          class="bg-cyan-500 hover:bg-cyan-300 text-black font-semibold rounded-full px-8 py-3 lg:text-[18px] md:text-[16px] text-[12px] w-fit transition-all shadow-lg shadow-cyan-500/20 mb-12 cursor-pointer duration-300 hover:-translate-y-1"
        >
          {{ t('cadastro.button') }}
        </button>
    </div>
    <div class="px-5 sm:px-10">
        <div
        class="grid md:hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap- text-sm text-white backdrop-blur-[4px] rounded-[30px] bg-gradient-to-b from-black/50 to-transparent p-5 w-full"
      >
        <div
          class=" p-5 transition-all flex gap-1 flex-col"
          v-for="(headerInfo, index) in headerInfos"
          :key="index"
        >
          <i :class="`${headerInfo.icon} text-[18px] mb-2`"></i>
          <p class="font-semibold text-[18px] text-white mb-1">
            {{ headerInfo.title }}
          </p>
          <li class="ml-5 hidden md:list-item">
            {{ headerInfo.desc }}
          </li>
          <p class="flex md:hidden">{{ headerInfo.desc }}</p>
        </div>
      </div>
      </div>
  </section>

  <section
    class="w-full flex justify-center bg-black md:bg-gradient-to-r md:from-black md:to-neutral-900 pt-20 "
  >
    <div class="container px-5 sm:px-10 md:depoimentos">
      <div class="mb-10 text-center md:text-start">
        <h2 class="text-3xl md:text-4xl font-bold text-white">{{ t('cadastro.depoimentos.title') }}</h2>
      </div>
      <div
        class="relative mx-auto py-10 rounded-[30px] bg-gradient-to-b from-black/30 to-transparent"
      >
        <swiper-container
          class="w-full"
          navigation="true"
          loop="true"
          autoplay-delay="4000"
          slides-per-view="1"
        >
          <swiper-slide
            v-for="(depoimento, index) in depoimentos"
            :key="index"
            class="flex flex-col items-center justify-center px-6 md:px-12 text-center"
          >
            <i class="fa-solid fa-quote-left text-cyan-400 text-4xl mb-6"></i>

            <p
              class="text-[12px] md:text-xl text-gray-200 leading-relaxed mb-6 max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]"
            >
              {{ depoimento.texto }}
            </p>

            <div class="w-8 h-[2px] bg-cyan-400 mb-4 rounded-full"></div>

            <h4 class="font-semibold text-white text-[13px] md:text-[16px]">
              {{ depoimento.nome }}
              <span
                class="font-normal text-gray-400 text-[10px] md:text-[12px]"
              >
                {{ depoimento.desc }}
              </span>
            </h4>
          </swiper-slide>
        </swiper-container>

        <div
          @click="prevSlide"
          class="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 border border-white rounded-full md:flex items-center justify-center cursor-pointer hover:border-white transition-all duration-300 hover:scale-110 hidden"
        >
          <i class="fas fa-chevron-left text-white text-sm"></i>
        </div>
        <div
          @click="nextSlide"
          class="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 border border-white rounded-full md:flex items-center justify-center cursor-pointer hover:border-white transition-all duration-300 hover:scale-110 hidden"
        >
          <i class="fas fa-chevron-right text-white text-sm"></i>
        </div>
      </div>
    </div>
  </section>

  <section
    class="w-full flex justify-center bg-black md:bg-gradient-to-r md:from-black md:to-neutral-900 pt-20 "
  >
    <div class="container px-5 sm:px-10 md:comoFunciona">
      <div class="mb-10 text-center md:text-start">
        <h2 class="text-3xl md:text-4xl font-bold text-white">{{ t('cadastro.comoFunciona.title') }}</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div
          class="bg-gradient-to-b from-cyan-900/50 to-transparent duration-300 hover:-translate-y-5 flex flex-col p-10 gap-4 rounded-[30px]"
          v-for="(comoFunciona, index) in comoFunciona"
          :key="index"
        >
          <i :class="`${comoFunciona.icon} text-[28px] lg:text-[36px] text-cyan-400`"></i>
          <span class="text-white text-[18px] md:text-[22px] font-semibold">{{
            comoFunciona.title
          }}</span>
          <p class="text-white text-[12px] md:text-[14px">
            {{ comoFunciona.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section
    id="formulario"
    class="w-full flex justify-center bg-black md:bg-gradient-to-r md:from-black md:to-neutral-900 py-20 px-5 sm:px-10 md:px-0"
  >
  <div class="container  md:px-10">
    <div
      class=" bg-gradient-to-b from-black/30 to-transparent py-10 rounded-[30px]"
    >
      <div class=" text-center">
        <h2 class=" text-2xl md:text-3xl lg:text-5xl font-bold text-white">
          {{ t('cadastro.formulario.title') }}
        </h2>
      </div>
      <div class="w-full flex items-center justify-center py-10 md:my-10">
        <div class="w-[20%] md:w-[5%] h-[3px] bg-cyan-400 rounded-full"></div>
      </div>
      <form
        @submit.prevent="submitForm"
        class="flex flex-col items-center justify-center gap-5"
      >
        <label
          class="w-full max-w-[700px] flex flex-col gap-3 justify-center p-5 bg-gradient-to-b from-cyan-900 to-teal-600/10 rounded-[15px] cursor-pointer duration-300 hover:scale-105"
        >
          <div class="flex gap-3 w-full items-center">
            <i class="fa-regular fa-user text-[20px] text-cyan-400"></i>
            <span class="text-white text-[16px] font-medium">{{ t('cadastro.formulario.nome') }}</span>
          </div>
          <input
            v-model="form.nomeCompleto"
            class="w-full p-2 text-white bg-transparent rounded"
            type="text"
            :placeholder="t('cadastro.formulario.nomePlaceholder')"
            required
          />
        </label>

        <label
          class="w-full max-w-[700px] flex flex-col gap-3 justify-center p-5 bg-gradient-to-b from-cyan-900 to-teal-600/10 rounded-[15px] cursor-pointer duration-300 hover:scale-105"
        >
          <div class="flex gap-3 w-full items-center">
            <i class="fa-regular fa-envelope text-[20px] text-cyan-400"></i>
            <span class="text-white text-[16px] font-medium">{{ t('cadastro.formulario.email') }}</span>
          </div>
          <input
            v-model="form.email"
            class="w-full p-2 text-white bg-transparent rounded"
            type="email"
            :placeholder="t('cadastro.formulario.emailPlaceholder')"
            required
          />
        </label>

        <label
          class="w-full max-w-[700px] flex flex-col gap-3 justify-center p-5 bg-gradient-to-b from-cyan-900 to-teal-600/10 rounded-[15px] cursor-pointer duration-300 hover:scale-105 group-*"
        >
          <div class="flex gap-3 w-full items-center">
            <i class="fa-brands fa-whatsapp text-[20px] text-cyan-400"></i>
            <span class="text-white text-[16px] font-medium">{{ t('cadastro.formulario.whatsapp') }}</span>
          </div>
          <input
            v-model="form.numberWhatsapp"
            class="w-full p-2 text-white bg-transparent rounded"
            type="tel"
            :placeholder="t('cadastro.formulario.whatsappPlaceholder')"
            v-maska="'(##) #####-####'"
            maxlength="15"
            required
          />
        </label>

        <button
          type="submit"
          :disabled="loading"
          :class="[
            'font-medium rounded-full px-8 py-3 text-lg transition-all shadow-lg mt-5 text-[18px] md:text-[24px] duration-300 flex items-center justify-center gap-2',
            loading 
              ? 'bg-gray-500 cursor-not-allowed' 
              : 'bg-cyan-500 hover:bg-cyan-300 cursor-pointer hover:-translate-y-1 shadow-cyan-500/20'
          ]"
        >
          <i v-if="loading" class="fas fa-spinner fa-spin"></i>
          {{ loading ? t('cadastro.formulario.buttonEnviando') : t('cadastro.formulario.buttonEnviar') }}
        </button>
      </form>
    </div>
    </div>
  </section>

  <Toast position="top-right" />
  
  <!-- Language Selector Fixed -->
  <div class="fixed top-4 left-20 z-50">
    <LanguageSelector />
  </div>

  <footer
    class="w-full flex justify-center bg-black md:bg-gradient-to-r md:from-black md:to-neutral-900 pt-20 pb-10 px-5 backdrop-blur-[5px]"
  >
    <div class="container">
      <div
        class="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center text-center lg:justify-between"
      >
        <div>
          <span class="text-neutral-500/50 text-sm md:text-base"
            >{{ t('cadastro.footer.direitos') }}</span
          >
        </div>

        <div class="flex md:hidden gap-4">
          <a href="https://www.instagram.com/fitcertify365" target="_blank"
            class="w-[35px] h-[35px] rounded-[50%] bg-neutral-600/50 flex items-center justify-center cursor-pointer duration-300 hover:-translate-y-1"
          >
            <i class="fab fa-instagram text-white text-[17px]"></i>
        </a>
          <a href="https://www.facebook.com/profile.php?id=61581850576820" target="_blank"
            class="w-[35px] h-[35px] rounded-[50%] bg-neutral-600/50 flex items-center justify-center cursor-pointer duration-300 hover:-translate-y-1"
          >
            <i class="fab fa-facebook text-white text-[17px]"></i>
      </a>

        </div>
        
        <div class="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <a
            class="text-neutral-500/50 hover:underline text-sm md:text-base"
            href="https://fitcertify365.com/#/termosprivacidade"
            target="_blank"
            >{{ t('cadastro.footer.termos') }}</a
          >
        </div>

        <div class="md:flex hidden gap-4">
          <a href="https://www.instagram.com/fitcertify365" target="_blank"
            class="w-[35px] h-[35px] rounded-[50%] bg-neutral-600/50 flex items-center justify-center cursor-pointer duration-300 hover:-translate-y-1"
          >
            <i class="fab fa-instagram text-white text-[17px]"></i>
        </a>
          <a href="https://www.facebook.com/profile.php?id=61581850576820" target="_blank"
            class="w-[35px] h-[35px] rounded-[50%] bg-neutral-600/50 flex items-center justify-center cursor-pointer duration-300 hover:-translate-y-1"
          >
            <i class="fab fa-facebook text-white text-[17px]"></i>
      </a>

        </div>
      </div>
    </div>
  </footer>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, computed } from "vue";
import Swiper from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';
import { useI18n } from '../../../composables/useI18n';
import LanguageSelector from '../../../components/LanguageSelector.vue';
import ctaService from "../../../services/cta/cta-service";

const { t } = useI18n();
const toast = useToast();
const router = useRouter();
const loading = ref(false)

const form = reactive({
  nomeCompleto: "",
  email: "",
  numberWhatsapp: "",
  promocaoRef: "Fitcertify - Cadastre-se Feminino"
});

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const EnviarCadastro = async () => {
  loading.value = true
  try{
    const formData = {
      ...form,
      numberWhatsapp: form.numberWhatsapp.replace(/\D/g, '')
    }
    const response = await ctaService.createCta(formData)
    
    if (response && response.data && response.data.id) {
      localStorage.setItem('cadastroId', response.data.id)
    }
    
    toast.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Cadastro enviado com sucesso!',
      life: 3000
    })
    
    setTimeout(() => {
      router.push('/obrigado')
    }, 1000)
  } catch (error) {
    console.error('Erro ao enviar o cadastro:', error)
    toast.add({
      severity: 'error',
      summary: 'Erro',
      detail: 'Erro ao enviar o cadastro',
      life: 3000
    })
  } finally {
    loading.value = false
  }
}

const headerSwiperInstance = ref(null);

const submitForm = () => {
  if (!form.nomeCompleto.trim() || !form.email.trim() || !form.numberWhatsapp.trim()) {
    toast.add({
      severity: 'warn',
      summary: 'Atenção',
      detail: 'Por favor, preencha todos os campos obrigatórios',
      life: 3000
    })
    return
  }
  
  if (!isValidEmail(form.email)) {
    toast.add({
      severity: 'warn',
      summary: 'Atenção',
      detail: 'Por favor, digite um e-mail válido',
      life: 3000
    })
    return
  }
  
  if (form.numberWhatsapp.length < 15) {
    toast.add({
      severity: 'warn',
      summary: 'Atenção',
      detail: 'Por favor, digite o número de WhatsApp completo',
      life: 3000
    })
    return
  }
  
  EnviarCadastro();
};

const nextSlide = () => {
  const swiperEl = document.querySelector("swiper-container");
  if (swiperEl && swiperEl.swiper) {
    swiperEl.swiper.slideNext();
  }
};

const prevSlide = () => {
  const swiperEl = document.querySelector("swiper-container");
  if (swiperEl && swiperEl.swiper) {
    swiperEl.swiper.slidePrev();
  }
};

const scrollToForm = () => {
  document.getElementById('formulario').scrollIntoView({ behavior: 'smooth' });
};

onMounted(() => {
  // Inicialização do componente
});

const headerInfos = computed(() => [
  {
    icon: "fa-solid fa-pen-to-square",
    title: t('cadastro.headerInfos.passaporte.title'),
    desc: t('cadastro.headerInfos.passaporte.desc'),
  },
  {
    icon: "fa-solid fa-pen-to-square",
    title: t('cadastro.headerInfos.aptidao.title'),
    desc: t('cadastro.headerInfos.aptidao.desc'),
  },
  {
    icon: "fa-solid fa-pen-to-square",
    title: t('cadastro.headerInfos.alertas.title'),
    desc: t('cadastro.headerInfos.alertas.desc'),
  },
  {
    icon: "fa-solid fa-pen-to-square",
    title: t('cadastro.headerInfos.seguranca.title'),
    desc: t('cadastro.headerInfos.seguranca.desc'),
  },
]);

const comoFunciona = computed(() => [
  {
    icon: "fa-solid fa-pen-to-square",
    title: t('cadastro.comoFunciona.items.rapido.title'),
    desc: t('cadastro.comoFunciona.items.rapido.desc'),
  },
  {
    icon: "fa-solid fa-code-fork",
    title: t('cadastro.comoFunciona.items.conecte.title'),
    desc: t('cadastro.comoFunciona.items.conecte.desc'),
  },
  {
    icon: "fa-solid fa-trophy",
    title: t('cadastro.comoFunciona.items.pronto.title'),
    desc: t('cadastro.comoFunciona.items.pronto.desc'),
  },
]);

const depoimentos = computed(() => [
  {
    texto: t('cadastro.depoimentos.items.luiz.texto'),
    nome: t('cadastro.depoimentos.items.luiz.nome'),
    desc: t('cadastro.depoimentos.items.luiz.desc'),
  },
  {
    texto: t('cadastro.depoimentos.items.maria.texto'),
    nome: t('cadastro.depoimentos.items.maria.nome'),
    desc: t('cadastro.depoimentos.items.maria.desc'),
  },
  {
    texto: t('cadastro.depoimentos.items.joao.texto'),
    nome: t('cadastro.depoimentos.items.joao.nome'),
    desc: t('cadastro.depoimentos.items.joao.desc'),
  },
]);
</script>

<style>
swiper-container::part(button-prev),
swiper-container::part(button-next) {
  display: none;
}

input:focus {
  outline: none;
  box-shadow: none;
}

  .depoimentos{
    padding: 0 100px 0px 100px;
  }

  .header {
    padding: 0 100px 0px 100px;
  }

  .comoFunciona{
    padding: 0 100px 0px 100px;
  }

  .facaParte{
    padding: 0 100px 0px 100px!important;
  }


.header-image-container {
  max-width: 1500px!important;
}

@media (min-width: 1024px) {
  .header-image-container {
    max-width: none;
  }
}
</style>