<template>
  <div class="w-full min-h-[97px]  md:min-h-[130px] p-5 md:p-10 flex items-center justify-center bg-white relative">
    <div class="container h-auto flex items-center justify-between lg:justify-center lg:flex-wrap xl:flex-nowrap xl:justify-between ">
      
      <div class="lg:w-1/4">
        <router-link to="/">
          <img class="w-[176px] md:w-[247px] lg:w-[283px]" src="/public/fit-logo.jpg" alt="logo" />
        </router-link>
      </div>


      <div class="lg:w-1/1">
        <nav class="flex gap-[32px] lg:gap-[44px] items-center justify-center relative">
          
          <div
            class="flex flex-col gap-[8px] cursor-pointer w-[48px] h-[48px] lg:hidden items-center justify-center"
            @click="menuOpen = !menuOpen"
          >
            <div class="w-[33.75px] h-[4px] md:w-[36px] rounded-[4px] bg-cyan-400"></div>
            <div class="w-[36px] h-[4px] rounded-[4px] bg-cyan-400"></div>
            <div class="w-[36px] h-[4px] rounded-[4px] bg-cyan-400"></div>
          </div>

          
          <ul class="hidden lg:flex gap-[18px] items-center justify-center flex-wrap">
            <li><router-link class="text-[0.8rem] xl:text-[0.9em] font-[500] text-neutral-500 hover:text-cyan-400 duration-300 cursor-pointer" to='/'>Home</router-link></li>
            <li><router-link class="text-[0.8rem] xl:text-[0.9em] font-[500] text-neutral-500 hover:text-cyan-400 duration-300 cursor-pointer" to='/quemsomos'>Quem Somos</router-link></li> 
            <li><router-link class="text-[0.8rem] xl:text-[0.9em] font-[500] text-neutral-500 hover:text-cyan-400 duration-300 cursor-pointer" to='/certificados'>Certificados</router-link></li> 
            <li><router-link class="text-[0.8rem] xl:text-[0.9em] font-[500] text-neutral-500 hover:text-cyan-400 duration-300 cursor-pointer" to='/eventos'>Eventos</router-link></li> 
            <li><router-link class="text-[0.8rem] xl:text-[0.9em] font-[500] text-neutral-500 hover:text-cyan-400 duration-300 cursor-pointer" to='/marcadores'>Marcadores</router-link></li> 
            <li><router-link class="text-[0.8rem] xl:text-[0.9em] font-[500] text-neutral-500 hover:text-cyan-400 duration-300 cursor-pointer" to='/artigos'>Artigos</router-link></li> 
            <li><router-link class="text-[0.8rem] xl:text-[0.9em] font-[500] text-neutral-500 hover:text-cyan-400 duration-300 cursor-pointer" to=''>Marketplace</router-link></li> 
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
              <li class="list-none"><router-link class="text-neutral-700 text-[0.95rem] font-[500] hover:text-cyan-400 duration-300" to="/">Home</router-link></li>
              <li class="list-none"><router-link class="text-neutral-700 text-[0.95rem] font-[500] hover:text-cyan-400 duration-300" to='/quemsomos'>Quem Somos</router-link></li>
              <li class="list-none"><router-link class="text-neutral-700 text-[0.95rem] font-[500] hover:text-cyan-400 duration-300" to='/certificados'>Certificados</router-link></li>
              <li class="list-none"><router-link class="text-neutral-700 text-[0.95rem] font-[500] hover:text-cyan-400 duration-300" to='/eventos'>Eventos</router-link></li>
              <li class="list-none"><router-link class="text-neutral-700 text-[0.95rem] font-[500] hover:text-cyan-400 duration-300" to='/marcadores'>Marcadores</router-link></li>
              <li class="list-none"><router-link class="text-neutral-700 text-[0.95rem] font-[500] hover:text-cyan-400 duration-300" to="/sobre">Artigos</router-link></li>
              <li class="list-none"><router-link class="text-neutral-700 text-[0.95rem] font-[500] hover:text-cyan-400 duration-300" to="/sobre">Marketplace</router-link></li>

              <div class="flex flex-col gap-3 mt-2 md:hidden">
                <router-link class="flex items-center justify-center w-[130px] h-[40px] rounded-[6px] border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white duration-300 text-[0.9em] font-[500]" to="/sobre">Login</router-link>
                <router-link class="flex justify-center items-center w-[130px] h-[40px] rounded-[6px] bg-cyan-400 hover:bg-cyan-500 duration-300 text-white text-[0.9em] font-[500]" to="/sobre">Cadastro</router-link>
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
