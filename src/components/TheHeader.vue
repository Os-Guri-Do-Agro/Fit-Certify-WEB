<template>
  <div class="w-full min-h-[97px] md:min-h-[130px] flex items-center justify-center bg-white relative">
    <div class="container h-auto flex items-center justify-between lg:flex-wrap xl:flex-nowrap xl:justify-between px-5 lg:px-10">
      
      <div class="lg:w-1/4">
        <router-link to="/">
          <img class="w-[176px] md:w-[247px] lg:w-[283px]" src="/public/fit-logo.jpg" alt="logo" />
        </router-link>
      </div>


      <div class="lg:w-1/1 flex justify-end">
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
            <li><router-link class="text-[0.8rem] xl:text-[0.9em] font-[500] text-neutral-500 hover:text-cyan-400 duration-300 cursor-pointer" to='/'>{{ t('nav.home') }}</router-link></li>
            <li><router-link class="text-[0.8rem] xl:text-[0.9em] font-[500] text-neutral-500 hover:text-cyan-400 duration-300 cursor-pointer" to='/quemsomos'>{{ t('nav.about') }}</router-link></li> 
            <li><router-link class="text-[0.8rem] xl:text-[0.9em] font-[500] text-neutral-500 hover:text-cyan-400 duration-300 cursor-pointer" to='/certificados'>{{ t('nav.certificates') }}</router-link></li> 
            <li><router-link class="text-[0.8rem] xl:text-[0.9em] font-[500] text-neutral-500 hover:text-cyan-400 duration-300 cursor-pointer" to='/eventos'>{{ t('nav.events') }}</router-link></li> 
            <li><router-link class="text-[0.8rem] xl:text-[0.9em] font-[500] text-neutral-500 hover:text-cyan-400 duration-300 cursor-pointer" to='/marcadores'>{{ t('nav.marcadores') }}</router-link></li> 
            <li><router-link class="text-[0.8rem] xl:text-[0.9em] font-[500] text-neutral-500 hover:text-cyan-400 duration-300 cursor-pointer" to='/artigos'>{{ t('nav.articles') }}</router-link></li> 
            <li><router-link class="text-[0.8rem] xl:text-[0.9em] font-[500] text-neutral-500 hover:text-cyan-400 duration-300 cursor-pointer" to='/marketplace'>{{ t('nav.marketplace') }}</router-link></li> 
          </ul>

          
          <div class="hidden md:flex lg:flex gap-[10px] lg:gap-[16px] md:flex-col lg:flex-row items-center">
            <div class="hidden lg:flex"><LanguageSelector /></div>
            <a class="flex items-center justify-center w-[130px] h-[40px] rounded-[6px] border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white duration-300 text-[0.9em] font-[500]" href="https://fit-certify-admin.vercel.app/login">{{ t('auth.login') }}</a>
            <a class="flex justify-center items-center w-[130px] h-[40px] rounded-[6px] bg-cyan-400 hover:bg-cyan-500 duration-300 text-white text-[0.9em] font-[500]" href="https://fit-certify-admin.vercel.app/login?tipo-cadastro">{{ t('auth.register') }}</a>
          </div>

          <!-- Menu Mobile/Tablet Dropdown -->
          <transition name="fade">
            <div
              v-if="menuOpen"
              class="absolute top-[60px] right-0 w-[250px] bg-white shadow-xl rounded-md p-6 flex flex-col gap-4 lg:hidden z-50 "
            >
              <li class="list-none"><router-link @click="menuOpen = false" class="text-neutral-700 text-[0.95rem] font-[500] hover:text-cyan-400 duration-300" to='/'>{{ t('nav.home') }}</router-link></li>
              <li class="list-none"><router-link @click="menuOpen = false" class="text-neutral-700 text-[0.95rem] font-[500] hover:text-cyan-400 duration-300" to='/quemsomos'>{{ t('nav.about') }}</router-link></li>
              <li class="list-none"><router-link @click="menuOpen = false" class="text-neutral-700 text-[0.95rem] font-[500] hover:text-cyan-400 duration-300" to='/certificados'>{{ t('nav.certificates') }}</router-link></li>
              <li class="list-none"><router-link @click="menuOpen = false" class="text-neutral-700 text-[0.95rem] font-[500] hover:text-cyan-400 duration-300" to='/eventos'>{{ t('nav.events') }}</router-link></li>
              <li class="list-none"><router-link @click="menuOpen = false" class="text-neutral-700 text-[0.95rem] font-[500] hover:text-cyan-400 duration-300" to='/marcadores'>{{ t('nav.marcadores') }}</router-link></li>
              <li class="list-none"><router-link @click="menuOpen = false" class="text-neutral-700 text-[0.95rem] font-[500] hover:text-cyan-400 duration-300" to='/artigos'>{{ t('nav.articles') }}</router-link></li>
              <li class="list-none"><router-link @click="menuOpen = false" class="text-neutral-700 text-[0.95rem] font-[500] hover:text-cyan-400 duration-300" to='/marketplace'>{{ t('nav.marketplace') }}</router-link></li>
              <LanguageSelector />

              <div class="flex flex-col gap-3 mt-2 md:hidden">
                <a @click="menuOpen = false" class="flex items-center justify-center w-[130px] h-[40px] rounded-[6px] border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white duration-300 text-[0.9em] font-[500]" href="https://fit-certify-admin.vercel.app/login">{{ t('auth.login') }}</a>
                <a @click="menuOpen = false" class="flex justify-center items-center w-[130px] h-[40px] rounded-[6px] bg-cyan-400 hover:bg-cyan-500 duration-300 text-white text-[0.9em] font-[500]" href="https://fit-certify-admin.vercel.app/register">{{ t('auth.register') }}</a>
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
import { useI18n } from '../composables/useI18n'
import LanguageSelector from './LanguageSelector.vue'

const menuOpen = ref(false)
const { t } = useI18n()
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
