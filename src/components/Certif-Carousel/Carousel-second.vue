<template>
  <div class="w-full flex items-center justify-center">
    <!-- Carousel Container -->
    <div class="relative overflow-hidden " style="height: 400px;">
      <!-- Carousel Wrapper -->
      <div 
        ref="carousel"
        class="flex transition-transform duration-500 ease-in-out h-[350px]"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <!-- Slide 1 - Missão -->
        <div class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center">
                <div class="w-full max-w-[340px] h-[248.9px] flex justify-center flex-col gap-[32px] bg-white rounded-[12px] shadow-lg p-[20px]">
                    <div class="">
                        <h4 class="text-[1.17em] text-cyan-400 font-[700] mb-[12px]">
                            Corrida de Rua
                        </h4>
                        <p class="text-[1em]">
                            Para provas de 5K a maratona
                        </p>                        
                    </div>

                    <div class="">
                        <router-link
                             class="text-[0.83em] font-[700] w-[85.7px] h-[39.5px] rounded-[30px] border-1 border-cyan-400 text-center text-white bg-cyan-400 hover:bg-cyan-500 duration-300 flex items-center justify-center"
                            to='/'
                        >Iniciar</router-link>                        
                    </div>
                </div>
        </div>

        <!-- Slide 2 - Visão -->
        <div class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center">
                 <div class="w-full max-w-[340px] h-[248.9px] flex justify-center flex-col gap-[32px] bg-white rounded-[12px] shadow-lg p-[20px]">
                    <div class="">
                        <h4 class="text-[1.17em] text-cyan-400 font-[700] mb-[12px]">
                            Academias e Treinos
                        </h4>
                        <p class="text-[1em]">
                            Crossfit, musculação e funcional
                        </p>                        
                    </div>

                    <div class="">
                        <router-link
                             class="text-[0.83em] font-[700] w-[85.7px] h-[39.5px] rounded-[30px] border-1 border-cyan-400 text-center text-white bg-cyan-400 hover:bg-cyan-500 duration-300 flex items-center justify-center"
                            to='/'
                        >Iniciar</router-link>                        
                    </div>
                </div>
        </div>

        <!-- Slide 3 - Valores -->
        <div class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center">
                <div class="w-full max-w-[340px] h-[248.9px] flex justify-center flex-col gap-[32px] bg-white rounded-[12px] shadow-lg p-[20px]">
                    <div class="">
                        <h4 class="text-[1.17em] text-cyan-400 font-[700] mb-[12px]">
                            Ciclismo e Triathlon
                        </h4>
                        <p class="text-[1em]">
                            Endurance e provas combinadas <br>
                            Inclui exames opcionais
                        </p>                        
                    </div>

                    <div class="">
                        <router-link
                             class="text-[0.83em] font-[700] w-[85.7px] h-[39.5px] rounded-[30px] border-1 border-cyan-400 text-center text-white bg-cyan-400 hover:bg-cyan-500 duration-300 flex items-center justify-center"
                            to='/'
                        >Iniciar</router-link>                        
                    </div>
                </div>
        </div>

        <!-- Slide 4 -->

        <div class="w-full flex-shrink-0 p-5 text-left flex flex-col justify-center items-center">
                <div class="w-full max-w-[340px] h-[248.9px] flex justify-center flex-col gap-[32px] bg-white rounded-[12px] shadow-lg p-[20px]">
                    <div class="">
                        <h4 class="text-[1.17em] text-cyan-400 font-[700] mb-[12px]">
                            Programas Corporativos
                        </h4>
                        <p class="text-[1em]">
                            Para funcionários que participam de ações esportivas
                        </p>                        
                    </div>

                    <div class="">
                        <router-link
                             class="text-[0.83em] font-[700] w-[85.7px] h-[39.5px] rounded-[30px] border-1 border-cyan-400 text-center text-white bg-cyan-400 hover:bg-cyan-500 duration-300 flex items-center justify-center"
                            to='/'
                        >Iniciar</router-link>                        
                    </div>
                </div>

        </div>
        
      </div>

      <!-- Navigation Dots -->
      <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
        <button 
          v-for="(slide, index) in totalSlides" 
          :key="index"
          class="w-3 h-3 rounded-full transition-colors duration-300"
          :class="currentSlide === index ? 'bg-white' : 'bg-cyan-600'"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Reactive data
const currentSlide = ref<number>(0)
const totalSlides = ref<number>(4)
const carousel = ref<HTMLElement | null>(null)

// Touch handling
const startX = ref<number>(0)
const endX = ref<number>(0)

// Auto-play interval
let autoPlayInterval: number | null = null 

// Methods
const goToSlide = (slideIndex: number): void => {
  currentSlide.value = slideIndex
}

const nextSlide = (): void => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value
}

const prevSlide = (): void => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value
}

const handleTouchStart = (e: TouchEvent): void => {
  startX.value = e.touches[0].clientX
}

const handleTouchEnd = (e: TouchEvent): void => {
  endX.value = e.changedTouches[0].clientX
  handleSwipe()
}

const handleSwipe = (): void => {
  const swipeThreshold = 50
  const diff = startX.value - endX.value

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }
}

const startAutoPlay = (): void => {
  autoPlayInterval = setInterval(nextSlide, 9000)
}

const stopAutoPlay = (): void => {
  if (autoPlayInterval !== null) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}


onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>

</style>
