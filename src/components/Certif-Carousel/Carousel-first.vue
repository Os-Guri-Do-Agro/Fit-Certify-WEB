<template>
  <div class="w-full">
    <!-- Carousel Container -->
    <div
      class="relative overflow-hidden w-full h-full"
      style="height: 400px;"
    >
      <!-- Carousel Wrapper -->
      <div
        ref="carousel"
        class="carousel-container flex transition-transform duration-500 ease-in-out h-full w-full"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <!-- Slide 1 -->
        <div class="carousel-slide w-full flex-shrink-0 text-center flex flex-col justify-center">
          <div class="mb-8 ">
            <div class="inline-block ">
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg>
            </div>
          </div>
                        <span class="text-[1.25em] text-lime-500 font-[700]">1.</span>
                        <p class="text-[1.25em]">
                            Cadastre-se na nossa plataforma
                        </p>
        </div>

        <!-- Slide 2 -->

        <div class="carousel-slide w-full flex-shrink-0 text-center flex flex-col justify-center">
          <div class="mb-8">
            <div class="inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
            </div>
          </div>
                        <span class="text-[1.25em] text-lime-500 font-[700]">2.</span>
                        <p class="text-[1.25em]">
                            Agende sua consulta e realize a avaliação presencial exigida para emissão do certificado.
                        </p>
        </div> 
               
        <!-- Slide 3 -->

        <div class="carousel-slide w-full flex-shrink-0 text-center flex flex-col justify-center">
          <div class="mb-8">
            <div class="inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
          </div>
                        <span class="text-[1.25em] text-lime-500 font-[700]">3.</span>
                        <p class="text-[1.25em]">
                            Após a consulta, o certificado pode ser emitido por um médico parceiro ou enviado por você, se for de um médico particular.
                        </p>
        </div>
        
        <!-- Slide 4 -->

        <div class="carousel-slide w-full flex-shrink-0 text-center flex flex-col justify-center">
          <div class="mb-8">
            <div class="inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="#88CE0D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paperclip-icon lucide-paperclip"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/></svg>
            </div>
          </div>
                        <span class="text-[1.25em] text-lime-500 font-[700]">4.</span>
                        <p class="text-[1.25em]">
                            Enquanto seu certificado estiver válido, você pode usá-lo em diferentes provas do mesmo perfil, com poucos cliques. 
                        </p>
        </div>      
        
      </div>

      <!-- Navigation Dots -->
      <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
        <button
          v-for="(dot, index) in totalSlides"
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
const totalSlides = 4
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
