<template>
  <section
    class="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-r from-black to-neutral-900 px-5 py-20"
  >
    <div class="absolute right-0 top-0 w-full  h-full">
      <img
        src="../assets/novaJanela-imgs/obrigado-banner.jpg"
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
    <div class="relative z-20 container flex flex-col items-center justify-center text-center backdrop-blur-[5px] bg-gradient-to-b from-black to-transparent p-5 md:p-10 rounded-2xl ">
      <div class="mb-10 flex flex-col items-center justify-center">
        <div class="w-20 h-20 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center mb-8 mx-auto">
          <i class="fa-solid fa-check text-3xl text-black"></i>
        </div>
        <h1 class="text-white text-4xl md:text-6xl font-bold mb-6">
          Obrigado!
        </h1>
        <h2 class="text-cyan-400 text-xl md:text-2xl font-medium mb-8 md:max-w-[50%]">
          Sua inscrição foi recebida com sucesso. Em breve, entraremos em contato para você participar do nosso lançamento. 
        </h2>

      </div>

      <div class="w-full flex items-center justify-center mb-12">
        <div class="w-[5%] h-[3px] bg-cyan-400 rounded-full"></div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 mb-16">
        <button
          @click="$router.push('/')"
          class="bg-cyan-500 hover:bg-cyan-300 text-black font-medium rounded-full px-8 py-3 text-lg transition-all shadow-lg shadow-cyan-500/20 cursor-pointer hover:-translate-y-1 duration-300"
        >
          Voltar ao Início
        </button>
      </div>

      <div class="">
        <h3 class="text-white font-medium mb-5">Fique por dentro das novidades da Fitcertify365</h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 w-full md:max-w-5xl">
        <a href="#" class="flex flex-col items-center text-center p-6 bg-gradient-to-b from-cyan-900/30 to-teal-600/10 rounded-2xl duration-300 hover:bg-gradient hover:from-cyan-900 hover:to-teal-300/20 hover:scale-110">
          <i class="fab fa-instagram text-3xl text-cyan-400 mb-4"></i>
          <h3 class="text-white text-lg font-semibold mb-2">Instagram</h3>
        </a>
        <a href="#" class="flex flex-col items-center text-center p-6 bg-gradient-to-b from-cyan-900/30 to-teal-600/10 rounded-2xl duration-300 hover:bg-gradient hover:from-cyan-900 hover:to-teal-300/20 hover:scale-110">
          <i class="fab fa-youtube text-3xl text-cyan-400 mb-4"></i>
          <h3 class="text-white text-lg font-semibold mb-2">YouTube</h3>
        </a>
        <a href="#" class="flex flex-col items-center text-center p-6 bg-gradient-to-b from-cyan-900/30 to-teal-600/10 rounded-2xl duration-300 hover:bg-gradient hover:from-cyan-900 hover:to-teal-300/20 hover:scale-110">
          <i class="fab fa-twitter text-3xl text-cyan-400 mb-4"></i>
          <h3 class="text-white text-lg font-semibold mb-2">X / Twitter</h3>
        </a>
        <a href="#" class="flex flex-col items-center text-center p-6 bg-gradient-to-b from-cyan-900/30 to-teal-600/10 rounded-2xl duration-300 hover:bg-gradient hover:from-cyan-900 hover:to-teal-300/20 hover:scale-110">
          <i class="fab fa-facebook text-3xl text-cyan-400 mb-4"></i>
          <h3 class="text-white text-lg font-semibold mb-2">Facebook</h3>
        </a>
      </div>
    </div>
  </section>

  <footer
    class="w-full flex justify-center bg-gradient-to-r from-black to-neutral-900 py-10 px-5 backdrop-blur-[5px]"
  >
    <div class="container">
      <div
        class="flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-center text-center "
      >
        <div>
          <span class="text-neutral-500/50 text-sm md:text-base lg:mr-10"
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


      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {

  setTimeout(() => {
    // router.push('/');
  }, 10000);
});
</script>

<style scoped>

.container {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>