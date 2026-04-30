<template>
  <div class="py-20 px-12" style="background: linear-gradient(135deg, #00C6FE 0%, #007DB8 100%)">
    <div ref="ctaRef" class="max-w-[1200px] mx-auto flex items-center justify-between gap-12">
      <div>
        <h2 class="font-head font-bold text-[clamp(28px,3vw,42px)] text-dark leading-[1.2] tracking-[-0.02em] mb-2">
          Pronto para correr com segurança?
        </h2>
        <p class="text-base text-dark/60">Obtenha seu atestado médico digital em menos de 24 horas.</p>
      </div>
      <div class="flex gap-3 shrink-0">
        <a href="#" class="btn btn-dark">Entrar</a>
        <a href="#" class="btn btn-white">Criar conta grátis</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'

const ctaRef = ref(null)
useReveal(() => ctaRef.value?.children)
</script>

<style scoped>
.btn {
  @apply inline-flex items-center font-head font-semibold text-sm tracking-[0.05em] uppercase px-7 py-[14px] rounded cursor-pointer no-underline transition-all duration-200 border-none;
}
.btn-dark  { @apply bg-dark text-white hover:bg-dark-3; }
.btn-white { @apply bg-white text-dark hover:bg-gray-100; }
</style>
