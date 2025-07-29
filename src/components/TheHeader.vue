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
            <li><router-link class="text-[0.9rem] font-[500] text-neutral-500 hover:text-cyan-400 duration-300 cursor-pointer" to="/">Home</router-link></li> 
            <li><router-link class="text-[0.9rem] font-[500] text-neutral-500 hover:text-cyan-400 duration-300 cursor-pointer" to='/quemsomos'>Quem Somos</router-link></li> 
            <li><router-link class="text-[0.9rem] font-[500] text-neutral-500 hover:text-cyan-400 duration-300 cursor-pointer" to="/sobre">Certificados</router-link></li> 
            <li><router-link class="text-[0.9rem] font-[500] text-neutral-500 hover:text-cyan-400 duration-300 cursor-pointer" to="/sobre">Eventos</router-link></li> 
            <li><router-link class="text-[0.9rem] font-[500] text-neutral-500 hover:text-cyan-400 duration-300 cursor-pointer" to="/sobre">Marcadores</router-link></li> 
            <li><router-link class="text-[0.9rem] font-[500] text-neutral-500 hover:text-cyan-400 duration-300 cursor-pointer" to="/sobre">Artigos</router-link></li> 
            <li><router-link class="text-[0.9rem] font-[500] text-neutral-500 hover:text-cyan-400 duration-300 cursor-pointer" to="/sobre">Marketplace</router-link></li> 
          </ul>

          
          <div class="hidden md:flex lg:flex gap-[10px] lg:gap-[32px] md:flex-col lg:flex-row">
            <router-link class="flex items-center justify-center w-[130px] h-[40px] rounded-[6px] border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white duration-300 text-[0.9em] font-[500]" to="/sobre">Login</router-link>
            <router-link class="flex justify-center items-center w-[130px] h-[40px] rounded-[6px] bg-cyan-400 hover:bg-cyan-500 duration-300 text-white text-[0.9em] font-[500]" to="/sobre">Cadastro</router-link>
          </div>

          <!-- Menu Mobile/Tablet Dropdown -->
          <transition name="fade">
            <div
              v-if="menuOpen"
              class="absolute top-[60px] right-0 w-[250px] bg-white shadow-xl rounded-md p-6 flex flex-col gap-4 lg:hidden z-50 "
            >
              <a href="#" class="text-neutral-700 text-[0.95rem] font-[500] hover:text-cyan-400 duration-300">Home</a>
              <a href="#" class="text-neutral-700 text-[0.95rem] font-[500] hover:text-cyan-400 duration-300">Quem Somos</a>
              <a href="#" class="text-neutral-700 text-[0.95rem] font-[500] hover:text-cyan-400 duration-300">Certificados</a>
              <a href="#" class="text-neutral-700 text-[0.95rem] font-[500] hover:text-cyan-400 duration-300">Eventos</a>
              <a href="#" class="text-neutral-700 text-[0.95rem] font-[500] hover:text-cyan-400 duration-300">Marcadores</a>
              <a href="#" class="text-neutral-700 text-[0.95rem] font-[500] hover:text-cyan-400 duration-300">Artigos</a>
              <a href="#" class="text-neutral-700 text-[0.95rem] font-[500] hover:text-cyan-400 duration-300">Marketplace</a>
              <div class="flex flex-col gap-3 mt-2 md:hidden">
                <a href="#" class="w-full text-center border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white duration-300 py-2 rounded-md font-[500]">
                  Login
                </a>
                <a href="#" class="w-full text-center bg-cyan-400 text-white py-2 hover:bg-cyan-500 duration-300 rounded-md font-[500]">
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
