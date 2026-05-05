<template>
  <div class="bg-dark py-24 px-12 border-t border-white/[0.06]">
    <div ref="patRef" class="max-w-[1200px] mx-auto text-center">
      <p class="font-head font-semibold text-[13px] tracking-[0.14em] uppercase text-white/35 mb-10">
        Conheça os patrocinadores da FitCertify365
      </p>
      <div class="flex justify-center items-center gap-12 flex-wrap">
        <div
          v-for="s in sponsors"
          :key="s"
          class="opacity-25 hover:opacity-70 transition-opacity duration-200 cursor-pointer"
        >
          <div class="w-[100px] h-[40px] bg-white/[0.08] rounded flex items-center justify-center">
            <span class="font-head font-bold text-[10px] tracking-[0.1em] text-white">{{ s }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'

const patRef = ref(null)
useReveal(() => patRef.value?.children)

const sponsors = ['SPONSOR', 'PARTNER', 'BRAND', 'SPONSOR', 'PARTNER', 'BRAND']
</script>
