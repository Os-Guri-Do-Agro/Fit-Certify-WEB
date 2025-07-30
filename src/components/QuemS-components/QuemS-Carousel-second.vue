<template>
  <div class="max-w-md mx-auto">
    <!-- Carousel Container -->
    <div class="relative overflow-hidden" style="height: 350px;">
      <!-- Carousel Wrapper -->
      <div 
        ref="carousel"
        class="flex transition-transform duration-500 ease-in-out h-full pb-20"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <!-- Slide 1 - Missão -->
        <div class="w-full flex-shrink-0 p-8 text-left flex flex-col justify-center">
          <h2 class="text-[1.875em] font-bold text-cyan-400 mb-5 italic">Missão</h2>
          <p class="leading-relaxed">
            Tornar a saúde esportiva mais acessível, integrada e conectada à realidade dos atletas modernos.
          </p>
        </div>

        <!-- Slide 2 - Visão -->
        <div class="w-full flex-shrink-0 p-8 text-left flex flex-col justify-center">
          <h2 class="text-[1.875em] font-bold text-cyan-400 mb-5 italic">Visão</h2>
          <p class="leading-relaxed">
            Ser referência nacional em certificações digitais e monitoramento de saúde esportiva até 2027.
          </p>
        </div>

        <!-- Slide 3 - Valores -->
        <div class="w-full flex-shrink-0 p-8 text-left flex flex-col justify-center">
          <h2 class="text-[1.875em] font-bold text-cyan-400 mb-5 italic ">Valores</h2>
<span>
                    <li class="text-[1em] font-[400] leading-[35px] lg:leading-[40px]">
                        Integridade física do atleta
                    </li>
                    <li class="text-[1em] font-[400] leading-[35px] lg:leading-[40px]">
                        Ética
                    </li>
                    <li class="text-[1em] font-[400] leading-[35px] lg:leading-[40px]">
                        Inovação com propósito
                    </li>
                    <li class="text-[1em] font-[400] leading-[35px] lg:leading-[40px]">
                        Segurança digital
                    </li>
                    <li class="text-[1em] font-[400] leading-[35px] lg:leading-[40px]">
                        Responsabilidade clínica
                    </li>
                </span>
        </div>
      </div>

      <!-- Navigation Dots -->
      <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 pb-10">
        <button 
          v-for=" index in totalSlides" 
          :key="index"
          class="w-3 h-3 rounded-full transition-colors duration-300"
          :class="currentSlide === index ? 'bg-cyan-400' : 'bg-gray-300'"
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
const totalSlides = ref<number>(3)
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
  autoPlayInterval = setInterval(nextSlide, 6000)
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
