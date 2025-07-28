<template>
  <div class="w-full min-h-[130px] p-[10px] flex items-center justify-center bg-white relative">
    <div class="w-[1363px] h-auto flex items-center justify-between lg:justify-center flex-wrap lg:gap-[44px] gap-[10px]">
      
      <div>
        <a href="#">
          <img class="w-[176px] md:w-[247px] lg:w-[283px]" src="/public/fit-logo.jpg" alt="logo" />
        </a>
      </div>

     
      <div>
        <nav class="flex gap-[32px] lg:gap-[44px] items-center justify-center relative">
          
          <div
            class="flex flex-col gap-[8px] cursor-pointer w-[48px] h-[48px] lg:hidden items-center justify-center"
            @click="menuOpen = !menuOpen"
          >
            <div class="w-[33.75px] h-[4px] md:w-[36px] rounded-[4px] bg-cyan-400"></div>
            <div class="w-[36px] h-[4px] rounded-[4px] bg-cyan-400"></div>
            <div class="w-[36px] h-[4px] rounded-[4px] bg-cyan-400"></div>
          </div>

          
          <ul class="hidden lg:flex gap-[32px] items-center justify-center flex-wrap">
            <li><a class="text-[0.9rem] font-[500] text-neutral-500" href="#">Home</a></li>
            <li><a class="text-[0.9rem] font-[500] text-neutral-500" href="#">Quem Somos</a></li>
            <li><a class="text-[0.9rem] font-[500] text-neutral-500" href="#">Certificados</a></li>
            <li><a class="text-[0.9rem] font-[500] text-neutral-500" href="#">Eventos</a></li>
            <li><a class="text-[0.9rem] font-[500] text-neutral-500" href="#">Marcadores</a></li>
            <li><a class="text-[0.9rem] font-[500] text-neutral-500" href="#">Artigos</a></li>
            <li><a class="text-[0.9rem] font-[500] text-neutral-500" href="#">Marketplace</a></li>
          </ul>

          
          <div class="hidden md:flex lg:flex gap-[10px] lg:gap-[32px] md:flex-col lg:flex-row">
            <a href="#" class="flex items-center justify-center w-[130px] h-[40px] rounded-[6px] border border-cyan-400 text-cyan-400 text-[0.9em] font-[500]">
              Login
            </a>
            <a href="#" class="flex justify-center items-center w-[130px] h-[40px] rounded-[6px] bg-cyan-400 text-white text-[0.9em] font-[500]">
              Cadastro
            </a>
          </div>

          <!-- Menu Mobile/Tablet Dropdown -->
          <transition name="fade">
            <div
              v-if="menuOpen"
              class="absolute top-[60px] right-0 w-[250px] bg-white shadow-lg rounded-md p-6 flex flex-col gap-4 lg:hidden z-50"
            >
              <a href="#" class="text-neutral-700 text-[0.95rem] font-[500]">Home</a>
              <a href="#" class="text-neutral-700 text-[0.95rem] font-[500]">Quem Somos</a>
              <a href="#" class="text-neutral-700 text-[0.95rem] font-[500]">Certificados</a>
              <a href="#" class="text-neutral-700 text-[0.95rem] font-[500]">Eventos</a>
              <a href="#" class="text-neutral-700 text-[0.95rem] font-[500]">Marcadores</a>
              <a href="#" class="text-neutral-700 text-[0.95rem] font-[500]">Artigos</a>
              <a href="#" class="text-neutral-700 text-[0.95rem] font-[500]">Marketplace</a>
              <div class="flex flex-col gap-3 mt-2 md:hidden">
                <a href="#" class="w-full text-center border border-cyan-400 text-cyan-400 py-2 rounded-md font-[500]">
                  Login
                </a>
                <a href="#" class="w-full text-center bg-cyan-400 text-white py-2 rounded-md font-[500]">
                  Cadastro
                </a>
              </div>
            </div>
          </transition>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
