<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 h-[68px] border-b border-white/5 transition-colors duration-300 font-head"
    :class="scrolled ? 'bg-dark/97 backdrop-blur-xl' : 'bg-dark/88 backdrop-blur-lg'"
  >
    <!-- Logo -->
    <a href="#" class="flex items-center gap-0 text-xl font-bold tracking-widest text-white no-underline">
      FIT<span class="text-primary">CERTIFY</span><span class="text-lime">365</span>
    </a>

    <!-- Links -->
    <ul class="flex items-center gap-8 list-none m-0 p-0">
      <li v-for="link in links" :key="link.label">
        <a
          :href="link.href"
          class="text-[13px] font-medium tracking-[0.06em] uppercase text-white/60 hover:text-white transition-colors no-underline"
        >{{ link.label }}</a>
      </li>
    </ul>

    <!-- Actions -->
    <div class="flex items-center gap-3">
      <a href="#" class="btn btn-outline">Entrar</a>
      <a href="#" class="btn btn-primary">Comece agora</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const links = [
  { label: 'Início', href: '#' },
  { label: 'Saúde', href: '#' },
  { label: 'Eventos', href: '#' },
  { label: 'Indicadores', href: '#' },
  { label: 'Artigos', href: '#' },
]

function onScroll() { scrolled.value = window.scrollY > 60 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.btn {
  @apply inline-flex items-center gap-2 font-head font-semibold text-[13px] tracking-[0.05em] uppercase px-5 py-[10px] rounded cursor-pointer no-underline transition-all duration-200;
}
.btn-outline {
  @apply bg-transparent border border-white/20 text-white hover:border-primary hover:text-primary;
}
.btn-primary {
  @apply bg-primary text-dark border-none hover:bg-[#22d4ff] hover:-translate-y-px;
}
</style>
