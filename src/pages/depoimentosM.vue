<template>
  <section
    class="relative w-full h-auto overflow-hidden flex items-center justify-center bg-gradient-to-r from-black to-neutral-900 py-10"
  >
    <div class="absolute right-0 top-0 w-full lg:w-[50%] h-full">
      <img
        src="../assets/novaJanela-imgs/header-01.png"
        alt="Header"
        class="w-full h-full object-cover object-flex-right sm:object-right"
      />

      <div
        class="absolute inset-0 bg-gradient-to-r from-black/90 to-black-30 z-10"
      ></div>

      <div
        class="absolute left-0 top-0 h-full w-48 bg-gradient-to-l from-zinc-950/90 to-transparent"
      ></div>
    </div>

    <div
      class="relative z-20 w-full max-w-7xl px-6 md:px-16 lg:px-24 text-white flex flex-col justify-center"
    >
      <div
        class="backdrop-blur-[2px] rounded-[30px] bg-gradient-to-b from-black/50 to-transparent w-full lg:w-[60%] p-10 mb-10"
      >
        <img src="/Logo-Grande.png" alt="Logo" class="w-50 lg:w-70 mb-5" />

        <h1
          class="text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight mb-6"
        >
          Agora, você <br />
          vai mais longe!
        </h1>

        <p
          class="text-[14px] md:text-[16px] lg:text-[18px] text-zinc-300 max-w-xl mb-8 leading-relaxed"
        >
          Seu
          <span class="font-semibold text-white"
            >passaporte digital de aptidão esportiva</span
          >
          está te esperando! Vamos facilitar sua vida antes das provas: sem
          correria, sem certificados perdidos, sem retrabalho e sem gastar duas
          vezes. <br />
          <span class="font-semibold text-white"
            >Seja o primeiro! Entre na lista de espera!</span
          >
        </p>

        <button
          @click="scrollToForm"
          class="bg-cyan-500 hover:bg-cyan-300 text-black font-semibold rounded-full px-8 py-3 lg:text-[18px] md:text-[16px] text-[12px] w-fit transition-all shadow-lg shadow-cyan-500/20 mb-12 cursor-pointer duration-300 hover:-translate-y-1"
        >
          Faça o seu cadastro!
        </button>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-white backdrop-blur-[4px] rounded-[30px] bg-gradient-to-b from-black/50 to-transparent p-5"
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

  <section
    class="w-full flex justify-center bg-gradient-to-r from-black to-neutral-900 py-20 px-5"
  >
    <div class="container">
      <div class="mb-10">
        <h2 class="text-3xl md:text-4xl font-bold text-white">Depoimentos</h2>
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
    class="w-full flex justify-center bg-gradient-to-r from-black to-neutral-900 py-20 px-5"
  >
    <div class="container">
      <div class="mb-10">
        <h2 class="text-3xl md:text-4xl font-bold text-white">Como Funciona</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div
          class="bg-gradient-to-b from-cyan-900/50 to-transparent duration-300 hover:-translate-y-5 flex flex-col p-10 gap-4 rounded-[30px]"
          v-for="(comoFunciona, index) in comoFunciona"
          :key="index"
        >
          <i :class="`${comoFunciona.icon} text-[36px] text-cyan-400`"></i>
          <span class="text-white text-[18px] md:text-[24px] font-semibold">{{
            comoFunciona.title
          }}</span>
          <p class="text-white text-[12px] md:text-[16px">
            {{ comoFunciona.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section
    id="formulario"
    class="w-full flex justify-center bg-gradient-to-r from-black to-neutral-900 py-20 px-5"
  >
    <div
      class="container bg-gradient-to-b from-black/30 to-transparent py-10 rounded-[30px]"
    >
      <div class="mb-10 text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-5">
          Faça parte da revolução esportiva
        </h2>
        <span class="text-white text-[13px] md:text-[16px]"
          >Informe seus dados para que possamos entrar em contato.</span
        >
      </div>
      <div class="w-full flex items-center justify-center my-20">
        <div class="w-[5%] h-[3px] bg-cyan-400 rounded-full"></div>
      </div>
      <form
        @submit.prevent="submitForm"
        class="flex flex-col items-center justify-center gap-5"
      >
        <label
          class="w-full max-w-[700px] flex flex-col gap-3 justify-center p-5 bg-gradient-to-b from-cyan-900 to-teal-600/20 rounded-[15px] cursor-pointer duration-300 hover:scale-105"
        >
          <div class="flex gap-3 w-full items-center">
            <i class="fa-regular fa-user text-[20px] text-cyan-400"></i>
            <span class="text-white text-[16px] font-medium">Nome</span>
          </div>
          <input
            v-model="form.nome"
            class="w-full p-2 text-white bg-transparent rounded"
            type="text"
            placeholder="Nome completo *"
            required
          />
        </label>

        <label
          class="w-full max-w-[700px] flex flex-col gap-3 justify-center p-5 bg-gradient-to-b from-cyan-900 to-teal-600/20 rounded-[15px] cursor-pointer duration-300 hover:scale-105"
        >
          <div class="flex gap-3 w-full items-center">
            <i class="fa-regular fa-envelope text-[20px] text-cyan-400"></i>
            <span class="text-white text-[16px] font-medium">E-mail</span>
          </div>
          <input
            v-model="form.email"
            class="w-full p-2 text-white bg-transparent rounded"
            type="email"
            placeholder="Seu melhor e-mail *"
            required
          />
        </label>

        <label
          class="w-full max-w-[700px] flex flex-col gap-3 justify-center p-5 bg-gradient-to-b from-cyan-900 to-teal-600/20 rounded-[15px] cursor-pointer duration-300 hover:scale-105 group-*"
        >
          <div class="flex gap-3 w-full items-center">
            <i class="fa-brands fa-whatsapp text-[20px] text-cyan-400"></i>
            <span class="text-white text-[16px] font-medium">Whatsapp</span>
          </div>
          <input
            v-model="form.whatsapp"
            class="w-full p-2 text-white bg-transparent rounded"
            type="tel"
            placeholder="Seu whatsapp *"
            required
          />
        </label>


        <button
          type="submit"
          class="bg-cyan-500 hover:bg-cyan-300 text-black font-medium rounded-full px-8 py-3 text-lg transition-all shadow-lg shadow-cyan-500/20 mt-5 text-[18px] md:text-[24px] cursor-pointer hover:-translate-y-1 duration-300"
        >
          Enviar cadastro!
        </button>
      </form>
    </div>
  </section>

  <Toast position="top-right" />

  <footer
    class="w-full flex justify-center bg-gradient-to-r from-black to-neutral-900 pt-20 pb-10 px-5 backdrop-blur-[5px]"
  >
    <div class="container">
      <div
        class="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center text-center lg:justify-between"
      >
        <div>
          <span class="text-neutral-500/50 text-sm md:text-base"
            >© 2025 FitCertify365. Todos os direitos reservados</span
          >
        </div>

        <div class="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <a
            class="text-neutral-500/50 hover:underline text-sm md:text-base"
            href="https://fitcertify365.com/#/termosprivacidade"
            target="_blank"
            >Política de Privacidade | Termos de uso</a
          >
        </div>

        <div class="flex gap-4">
          <div
            class="w-[35px] h-[35px] rounded-[50%] bg-neutral-600/50 flex items-center justify-center cursor-pointer duration-300 hover:-translate-y-1"
          >
            <i class="fab fa-instagram text-white text-[18px]"></i>
          </div>
          <div
            class="w-[35px] h-[35px] rounded-[50%] bg-neutral-600/50 flex items-center justify-center cursor-pointer duration-300 hover:-translate-y-1"
          >
            <i class="fa-solid fa-globe text-white text-[18px]"></i>
          </div>
          <div
            class="w-[35px] h-[35px] rounded-[50%] bg-neutral-600/50 flex items-center justify-center cursor-pointer duration-300 hover:-translate-y-1"
          >
            <i class="fab fa-twitter text-white text-[18px]"></i>
          </div>
          <div
            class="w-[35px] h-[35px] rounded-[50%] bg-neutral-600/50 flex items-center justify-center cursor-pointer duration-300 hover:-translate-y-1"
          >
            <i class="fab fa-youtube text-white text-[18px]"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import Swiper from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const form = reactive({
  nome: "",
  email: "",
  whatsapp: "",
});

function EnviarCadastro() {
  // const nome = form.nome;
  // const email = form.email;
  // const whatsapp = form.whatsapp;

  
  toast.add({
    severity: 'success',
    summary: '🎉 Cadastro Realizado!',
    detail: 'Seus dados foram enviados com sucesso. Em breve entraremos em contato!',
    life: 4000
  });
  
  // form.nome = "";
  // form.email = "";
  // form.whatsapp = "";
  
  setTimeout(() => {
    router.push('/obrigado');
  }, 1000);
}

const headerSwiperInstance = ref(null);

const submitForm = () => {
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
  headerSwiperInstance.value = new Swiper(".swiper", {
    modules: [Autoplay, EffectFade],
    autoplay: {
      delay: 9000,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: { crossFade: true },
    loop: true,
  });
});

const headerInfos = [
  {
    icon: "fa-solid fa-pen-to-square",
    title: "Passaporte Digital",
    desc: "Seu atestado em versão digital, validado e sempre à mão.",
  },
  {
    icon: "fa-solid fa-pen-to-square",
    title: "Aptidão Unificada",
    desc: "Exames e laudos reunidos num só lugar, claros e totalmente confiáveis.",
  },
  {
    icon: "fa-solid fa-pen-to-square",
    title: "Alertas Proativos",
    desc: "Lembretes de validade e atualizações antes de expirar.",
  },
  {
    icon: "fa-solid fa-pen-to-square",
    title: "Segurança Garantida",
    desc: "Seus dados protegidos, com acesso rápido e de forma segura.",
  },
];

const comoFunciona = [
  {
    icon: "fa-solid fa-pen-to-square",
    title: "Rápido e fácil",
    desc: "Preencha um cadastro simples com nome, e-mail e WhatsApp. Pronto! Sua conta já está ativa e seu passaporte de aptidão física começa a agregar seus dados de saúde.",
  },
  {
    icon: "fa-solid fa-code-fork",
    title: "Conecte seus exames",
    desc: "Envie seus laudos ou conecte fontes compatíveis. O app organiza, valida e cria seu documento digital com histórico inteligente e prazos de validade.",
  },
  {
    icon: "fa-solid fa-trophy",
    title: "Pronto para apresentar",
    desc: "Veja seu status de aptidão em tempo real, receba lembretes antes de vencer e mostre o passaporte online ou offline nas principais provas. Além de várias vantagens que estamos implementando para sua comodidade.",
  },
];

const depoimentos = [
  {
    texto:
      "Finalmente parei de sofrer com papelada e prazos. Centralizei meus exames no app e agora tenho meu atestado validado no celular, até offline! Meu foco agora é no treino. Chego nas provas sem stress.",
    nome: "Luiz Araújo",
    desc: "Corredor de provas 10k",
  },
  {
    texto:
      "O Fit Certify revolucionou minha preparação para provas esportivas. Agora tenho todos os meus exames organizados em um só lugar!",
    nome: "Maria Silva",
    desc: "Atleta",
  },
  {
    texto:
      "Nunca mais perdi um certificado ou esqueci de renovar meus exames. O sistema de alertas é fantástico!",
    nome: "João Santos",
    desc: "Corredor",
  },
];
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
</style>
