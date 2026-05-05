<template>
  <div class="bg-dark-2">
    <div class="max-w-[1200px] mx-auto grid grid-cols-2 min-h-[560px]">
      <!-- Content -->
      <div ref="contentRef" class="flex flex-col justify-center px-12 py-24 pr-16">
        <p class="section-tag">Certificação médica</p>
        <h2 class="font-head font-bold text-[clamp(32px,4vw,54px)] leading-[1.1] tracking-[-0.02em] mb-5">
          Sua saúde validada.<br><span class="text-lime">Seu esporte garantido.</span>
        </h2>
        <p class="text-base text-white/60 leading-[1.75] max-w-[480px] mb-6">
          Conectamos você a médicos especializados em saúde esportiva para emissão de atestados reconhecidos por eventos em todo o Brasil. Simples, rápido e 100% digital.
        </p>
        <ul class="flex flex-col gap-3 mb-9 list-none p-0">
          <li v-for="item in checks" :key="item" class="flex items-center gap-3 text-[15px] text-white/75">
            <span class="check-dot"></span>{{ item }}
          </li>
        </ul>
        <a href="#" class="btn-ghost">Saiba mais →</a>
      </div>

      <!-- Image -->
      <div class="relative overflow-hidden">
        <div class="img-placeholder absolute inset-0">
          <span>foto<br>médico / checkup<br>esportivo</span>
        </div>
        <div class="absolute inset-0" style="background: linear-gradient(to right, #0e0e0e 0%, transparent 30%)"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'

const contentRef = ref(null)
useReveal(() => contentRef.value?.children)

const checks = [
  'Atestados válidos para corridas e eventos esportivos',
  'Médicos credenciados e especializados',
  'Processo 100% online e sem filas',
]
</script>

<style scoped>
.section-tag {
  @apply inline-flex items-center gap-2 font-head text-[11px] font-semibold tracking-[0.14em] uppercase text-lime mb-5;
}
.section-tag::before {
  content: ''; display: block; width: 20px; height: 2px; background: #88CE0D;
}
.check-dot {
  width: 20px; height: 20px; flex-shrink: 0; border-radius: 50%;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='10' fill='%2388CE0D'/%3E%3Cpath d='M5 10L8.5 13.5L15 7' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-size: cover;
}
.btn-ghost {
  @apply inline-flex items-center font-head font-semibold text-[13px] tracking-[0.05em] uppercase px-[18px] py-2 rounded border border-primary text-primary bg-transparent hover:bg-primary hover:text-dark transition-all duration-200 no-underline w-fit;
}
</style>
