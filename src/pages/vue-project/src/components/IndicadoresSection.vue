<template>
  <div class="bg-dark-3">
    <div class="max-w-[1200px] mx-auto grid grid-cols-2 min-h-[560px] items-center">
      <!-- Content -->
      <div ref="contentRef" class="px-12 py-24 pr-16">
        <p class="section-tag">Dashboard pessoal</p>
        <h2 class="font-head font-bold text-[clamp(32px,4vw,54px)] leading-[1.1] tracking-[-0.02em] mb-5">
          Acompanhe seus indicadores em<br><span class="text-primary">tempo real.</span>
        </h2>
        <p class="text-base text-white/60 leading-[1.75] max-w-[480px] mb-8">
          Visualize frequência cardíaca, VO₂ máximo, histórico de treinos e exames em um único painel — integrado aos seus dispositivos favoritos.
        </p>
        <a href="#" class="btn-ghost">Ver meu painel →</a>
      </div>

      <!-- Metrics -->
      <div ref="metricsRef" class="px-12 py-12 flex justify-center">
        <div class="grid grid-cols-2 gap-4 w-full max-w-[340px]">
          <div
            v-for="m in metrics"
            :key="m.label"
            class="rounded-xl p-5 text-center border"
            :class="m.accent === 'lime'
              ? 'bg-lime/[0.06] border-lime/20'
              : 'bg-primary/[0.06] border-primary/20'"
          >
            <div
              :ref="el => { if (el) counterRefs[m.label] = el }"
              class="font-head font-bold text-[32px] leading-none mb-1"
              :class="m.accent === 'lime' ? 'text-lime' : 'text-primary'"
            >{{ m.display }}</div>
            <div class="text-[11px] font-semibold tracking-[0.08em] uppercase text-white/45">{{ m.unit }}</div>
            <div class="text-xs text-white/50 mt-[6px]">{{ m.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReveal } from '../composables/useReveal'

gsap.registerPlugin(ScrollTrigger)

const contentRef = ref(null)
const metricsRef = ref(null)
const counterRefs = ref({})
useReveal(() => contentRef.value?.children)

const metrics = [
  { label: 'Freq. Cardíaca', target: 72,  decimals: 0, unit: 'bpm',   accent: 'cyan', display: '0' },
  { label: 'VO₂ Máx.',       target: 48,  decimals: 0, unit: 'ml/kg', accent: 'lime', display: '0' },
  { label: 'Hoje',           target: 5.4, decimals: 1, unit: 'km',    accent: 'lime', display: '0' },
  { label: 'SpO₂',           target: 98,  decimals: 0, unit: '%',     accent: 'cyan', display: '0' },
]

onMounted(() => {
  ScrollTrigger.create({
    trigger: metricsRef.value,
    start: 'top 85%',
    once: true,
    onEnter() {
      metrics.forEach(m => {
        const el = counterRefs.value[m.label]
        if (!el) return
        gsap.to({ val: 0 }, {
          val: m.target,
          duration: 1.4,
          ease: 'power2.out',
          onUpdate() { el.textContent = m.decimals ? this._targets[0].val.toFixed(m.decimals) : Math.round(this._targets[0].val) },
        })
      })
    },
  })
})
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
