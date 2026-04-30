<template>
  <div class="bg-dark py-[120px] px-12">
    <div ref="sectionRef" class="max-w-[1200px] mx-auto">
      <!-- Header -->
      <div class="flex items-end justify-between mb-12">
        <div>
          <p class="section-tag">Conteúdos e artigos</p>
          <h2 class="font-head font-bold text-[clamp(28px,3vw,42px)] leading-[1.1] tracking-[-0.02em]">
            Saúde e performance<br>para atletas de verdade.
          </h2>
        </div>
        <a href="#" class="btn-ghost shrink-0">Ver todos →</a>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-3 gap-6">
        <div
          v-for="(article, i) in articles"
          :key="article.title"
          class="bg-dark-2 border border-white/[0.06] rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:border-primary/30 hover:-translate-y-1"
          :ref="el => { if (el) cardRefs[i] = el }"
        >
          <div class="h-[180px] relative overflow-hidden">
            <div class="img-placeholder absolute inset-0">
              <span>{{ article.imgHint }}</span>
            </div>
          </div>
          <div class="p-6">
            <span class="inline-block font-head font-bold text-[10px] tracking-[0.1em] uppercase text-lime mb-3">{{ article.tag }}</span>
            <h3 class="font-head font-semibold text-[17px] leading-[1.3] mb-3 text-white">{{ article.title }}</h3>
            <p class="text-[13px] text-white/50 leading-[1.6]">{{ article.excerpt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'

const sectionRef = ref(null)
const cardRefs = ref([])
useReveal(() => cardRefs.value)

const articles = [
  {
    tag: 'Nutrição',
    title: 'Como se alimentar antes de uma corrida de longa distância',
    excerpt: 'Carboidratos, hidratação e timing certo para garantir energia do início ao fim.',
    imgHint: 'foto artigo\nnutrição esportiva',
  },
  {
    tag: 'Treino',
    title: 'Periodização para corredores amadores: como planejar sua temporada',
    excerpt: 'Estratégias práticas para evoluir sem risco de lesão ao longo do ano.',
    imgHint: 'foto artigo\ntreino / academia',
  },
  {
    tag: 'Saúde',
    title: 'Por que o atestado médico esportivo é mais do que uma burocracia',
    excerpt: 'Entenda o que os exames revelam sobre o seu coração e por que isso importa.',
    imgHint: 'foto artigo\nmédico esportivo',
  },
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
  @apply inline-flex items-center font-head font-semibold text-[13px] tracking-[0.05em] uppercase px-[18px] py-2 rounded border border-primary text-primary bg-transparent hover:bg-primary hover:text-dark transition-all duration-200 no-underline;
}
</style>
