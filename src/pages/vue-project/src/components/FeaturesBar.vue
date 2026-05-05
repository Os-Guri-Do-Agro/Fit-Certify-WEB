<template>
  <div class="bg-primary">
    <div ref="barRef" class="max-w-[1200px] mx-auto px-12 grid grid-cols-3">
      <div
        v-for="(f, i) in features"
        :key="f.label"
        class="flex items-center gap-5 py-9 px-8"
        :class="i < features.length - 1 ? 'border-r border-dark/10' : ''"
      >
        <div class="w-12 h-12 bg-dark/10 rounded-xl flex items-center justify-center shrink-0">
          <component :is="f.icon" class="w-6 h-6 stroke-dark" />
        </div>
        <div>
          <div class="font-head font-bold text-[13px] tracking-[0.1em] uppercase text-dark mb-1">{{ f.label }}</div>
          <div class="text-[13px] text-dark/65 leading-[1.4]">{{ f.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, h } from 'vue'
import { useReveal } from '../composables/useReveal'

const barRef = ref(null)
useReveal(() => barRef.value?.querySelectorAll(':scope > div'))

// Inline SVG icons as render functions
const BoltIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', 'stroke-width': 2, 'stroke-linecap': 'round' },
  [h('path', { d: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' })])

const ShieldIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', 'stroke-width': 2, 'stroke-linecap': 'round' },
  [h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })])

const MonitorIcon = () => h('svg', { viewBox: '0 0 24 24', fill: 'none', 'stroke-width': 2, 'stroke-linecap': 'round' },
  [h('rect', { x: 2, y: 3, width: 20, height: 14, rx: 2 }), h('path', { d: 'M8 21h8M12 17v4' })])

const features = [
  { label: 'Agilidade',   desc: 'Resultado do seu atestado em minutos, onde estiver.', icon: BoltIcon },
  { label: 'Segurança',   desc: 'Dados médicos protegidos e validados por profissionais.', icon: ShieldIcon },
  { label: 'Tecnologia',  desc: 'Plataforma digital integrada a wearables e apps de saúde.', icon: MonitorIcon },
]
</script>
