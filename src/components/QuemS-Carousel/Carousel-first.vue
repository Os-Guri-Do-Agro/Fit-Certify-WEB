<template>
  <div class="w-full">
    <!-- Carousel Container -->
    <div
      class="relative bg-sky-50 overflow-hidden w-full h-full"
      style="height: 400px;"
    >
      <!-- Carousel Wrapper -->
      <div
        ref="carousel"
        class="carousel-container flex transition-transform duration-500 ease-in-out h-full w-full"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <!-- Slide 1 -->
        <div class="carousel-slide w-full flex-shrink-0 text-center flex flex-col justify-center bg-sky-50 ">
          <div class="mb-8 ">
            <div class="inline-block ">
                <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 24 24" fill="none" stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-check-big-icon lucide-square-check-big"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"/><path d="m9 11 3 3L22 4"/></svg>
            </div>
          </div>
          <p class="text-[1em] leading-[40px]">
            Validamos atestados digitais com validade legal
          </p>
        </div>

        <!-- Slide 2 -->

        <div class="carousel-slide w-full flex-shrink-0 text-center flex flex-col justify-center bg-sky-50 ">
          <div class="mb-8">
            <div class="inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 24 24" fill="none" stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor-icon lucide-monitor"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
            </div>
          </div>
          <p class="text-[1em] leading-[40px]">
            Monitoramos marcadores de saúde ao longo do tempo
          </p>
        </div> 
               
        <!-- Slide 3 -->

        <div class="carousel-slide w-full flex-shrink-0 text-center flex flex-col justify-center bg-sky-50">
          <div class="mb-8">
            <div class="inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 24 24" fill="none" stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-column-icon lucide-chart-no-axes-column"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>
            </div>
          </div>
          <p class="text-[1em] leading-[40px]">
            Integramos dados de exames e dispositivos inteligentes
          </p>
        </div>
        
        <!-- Slide 4 -->

        <div class="carousel-slide w-full flex-shrink-0 text-center flex flex-col justify-center bg-sky-50">
          <div class="mb-8">
            <div class="inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 24 24" fill="none" stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
            </div>
          </div>
          <p class="text-[1em] leading-[40px]">
            Facilitamos a jornada do atleta e do organizador de eventos
          </p>
        </div>
        
        <!-- Slide 5 -->

        <div class="carousel-slide w-full flex-shrink-0 text-center flex flex-col justify-center bg-sky-50">
          <div class="mb-8">
            <div class="inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 24 24" fill="none" stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link2-icon lucide-link-2"><path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/></svg>
            </div>
          </div>
          <p class="text-[1em] leading-[40px]">
            Criamos conexões com corridas e provas que valorizam a saúde
          </p>
        </div>       
        
      </div>

      <!-- Navigation Dots -->
      <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
        <button
          v-for=" index in totalSlides"
          :key="index"
          @click="goToSlide(index)"
          :class="[
            'dot w-3 h-3 rounded-full transition-colors duration-300',
            currentSlide === index ? 'dot-active' : 'dot-inactive'
          ]"
        ></button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const currentSlide = ref(0)
const totalSlides = 5
const carousel = ref<HTMLElement | null>(null)

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides
}

// Auto-play
setInterval(nextSlide, 9000)

// Touch support
let startX = 0
let endX = 0

onMounted(() => {
  if (!carousel.value) return

  carousel.value.addEventListener('touchstart', (e: TouchEvent) => {
    startX = e.touches[0].clientX
  })

  carousel.value.addEventListener('touchend', (e: TouchEvent) => {
    endX = e.changedTouches[0].clientX
    const swipeThreshold = 50
    const diff = startX - endX

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide()
      } else {
        currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides
      }
    }
  })
})
</script>

<style scoped>
.carousel-container {
  scroll-behavior: smooth;
}
.carousel-slide {
  scroll-snap-align: start;
}
.dot-active {
  background-color: #88CE0D;
}
.dot-inactive {
  background-color: #d1d5db;
}
</style>
