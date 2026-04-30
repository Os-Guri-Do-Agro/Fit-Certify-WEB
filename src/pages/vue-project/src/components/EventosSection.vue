<template>
  <div class="bg-dark">
    <div class="max-w-[1200px] mx-auto grid grid-cols-2 min-h-[520px]">
      <!-- Image -->
      <div class="relative overflow-hidden">
        <div class="img-placeholder absolute inset-0">
          <span>foto<br>largada de corrida<br>evento esportivo</span>
        </div>
        <div class="absolute inset-0" style="background: linear-gradient(to left, #060606 0%, transparent 30%)"></div>
      </div>

      <!-- Content -->
      <div ref="contentRef" class="flex flex-col justify-center px-12 py-24 pl-16">
        <p class="section-tag">Rede de eventos</p>
        <h2 class="font-head font-bold text-[clamp(32px,4vw,54px)] leading-[1.1] tracking-[-0.02em] mb-5">
          Vai correr?<br><span class="text-primary">Confira eventos parceiros.</span>
        </h2>
        <p class="text-base text-white/60 leading-[1.75] max-w-[480px] mb-6">
          Descubra corridas, triathlons e eventos esportivos que aceitam o atestado FitCertify365. Inscreva-se com um clique.
        </p>

        <div class="flex flex-col gap-3 mb-8">
          <div
            v-for="evento in eventos"
            :key="evento.name"
            class="flex items-center gap-4 bg-white/[0.04] border border-white/[0.08] rounded-lg px-5 py-4 cursor-pointer hover:border-primary transition-colors duration-200"
          >
            <div class="bg-primary text-dark font-head font-bold text-xs px-[10px] py-[6px] rounded text-center leading-[1.2] min-w-[44px]">
              {{ evento.day }}<br>{{ evento.month }}
            </div>
            <div>
              <div class="font-head font-semibold text-sm text-white">{{ evento.name }}</div>
              <div class="text-xs text-white/45 mt-[2px]">{{ evento.local }}</div>
            </div>
          </div>
        </div>

        <a href="#" class="btn-ghost">Ver todos os eventos →</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'

const contentRef = ref(null)
useReveal(() => contentRef.value?.children)

const eventos = [
  { day: '15', month: 'MAI', name: 'Meia Maratona SP',    local: 'São Paulo, SP · 21 km' },
  { day: '22', month: 'JUN', name: 'Run & Bike Rio',       local: 'Rio de Janeiro, RJ · 10 km' },
  { day: '06', month: 'JUL', name: 'Circuito Saúde BH',   local: 'Belo Horizonte, MG · 5 km' },
]
</script>

<style scoped>
.section-tag {
  @apply inline-flex items-center gap-2 font-head text-[11px] font-semibold tracking-[0.14em] uppercase text-lime mb-5;
}
.section-tag::before {
  content: ''; display: block; width: 20px; height: 2px; background: #88CE0D;
}
.btn-ghost {
  @apply inline-flex items-center font-head font-semibold text-[13px] tracking-[0.05em] uppercase px-[18px] py-2 rounded border border-primary text-primary bg-transparent hover:bg-primary hover:text-dark transition-all duration-200 no-underline w-fit;
}
</style>
