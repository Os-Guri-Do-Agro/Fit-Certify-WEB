<template>
  <div class="bg-dark-2 py-24 px-12 text-center">
    <div ref="apoioRef" class="max-w-[860px] mx-auto">
      <p class="section-tag justify-center mx-auto w-fit mb-5">Apoio Institucional</p>
      <h2 class="font-head font-bold text-[clamp(28px,3.5vw,44px)] leading-[1.2] tracking-[-0.02em] mb-4">
        Reconhecido pelas principais<br>entidades esportivas do Brasil.
      </h2>
      <p class="text-base text-white/55 mb-10">Parceiros que tornam a FitCertify365 possível.</p>
      <a href="#" class="btn-ghost mx-auto mb-12 inline-flex">Seja um parceiro →</a>
      <div class="flex justify-center gap-8 flex-wrap">
        <div
          v-for="name in partners"
          :key="name"
          class="w-[120px] h-[60px] bg-white/[0.04] border border-white/[0.08] rounded-lg flex items-center justify-center"
        >
          <span class="font-head font-semibold text-[11px] text-white/20 tracking-[0.06em]">{{ name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'

const apoioRef = ref(null)
useReveal(() => apoioRef.value?.children)

const partners = ['CBAT', 'CBAt', 'FIPA', 'SEME', 'CBTRI']
</script>

<style scoped>
.section-tag {
  @apply inline-flex items-center gap-2 font-head text-[11px] font-semibold tracking-[0.14em] uppercase text-lime;
}
.section-tag::before {
  content: ''; display: block; width: 20px; height: 2px; background: #88CE0D;
}
.btn-ghost {
  @apply inline-flex items-center font-head font-semibold text-[13px] tracking-[0.05em] uppercase px-[18px] py-2 rounded border border-primary text-primary bg-transparent hover:bg-primary hover:text-dark transition-all duration-200 no-underline;
}
</style>
