<template>
  <section
    ref="heroRef"
    class="relative min-h-screen flex items-end pb-24 pt-[68px] overflow-hidden"
  >
    <!-- Background placeholder -->
    <div class="absolute inset-0 z-0">
      <div class="img-placeholder w-full h-full">
        <span>foto hero<br>corredora / esporte</span>
      </div>
    </div>

    <!-- Overlays -->
    <div
      class="absolute inset-0 z-[1]"
      style="background: linear-gradient(to right, rgba(6,6,6,0.92) 45%, rgba(6,6,6,0.3) 100%), linear-gradient(to top, rgba(6,6,6,0.8) 0%, transparent 50%)"
    ></div>
    <div class="hero-grid absolute inset-0 z-[2]"></div>

    <!-- Content -->
    <div class="relative z-[3] max-w-[1200px] mx-auto px-12 w-full">
      <p ref="eyebrow" class="eyebrow">Plataforma oficial de saúde esportiva</p>
      <h1 ref="title" class="font-head font-bold leading-[1.0] tracking-[-0.02em] text-[clamp(52px,7vw,92px)] max-w-[680px] mb-7">
        Saúde em dia<br>para o <em class="not-italic text-primary">esporte.</em>
      </h1>
      <p ref="subtitle" class="text-base text-white/65 max-w-[460px] leading-[1.7] mb-10">
        A FitCertify365 conecta atletas, médicos e eventos em uma única plataforma — para que a sua performance seja sempre validada com segurança e agilidade.
      </p>
      <div ref="actions" class="flex gap-4 flex-wrap">
        <a href="#" class="btn btn-lime">Comece agora</a>
        <a href="#" class="btn btn-outline">Saiba mais</a>
      </div>
    </div>

    <!-- Stats -->
    <div ref="stats" class="absolute bottom-24 right-12 z-[3] flex flex-col gap-4">
      <div class="stat-pill">
        <div>
          <div class="font-head font-bold text-[26px] text-primary leading-none">+50k</div>
          <div class="text-[11px] font-medium tracking-[0.08em] uppercase text-white/50 leading-[1.3] mt-1">Atletas<br>certificados</div>
        </div>
      </div>
      <div class="stat-pill">
        <div>
          <div class="font-head font-bold text-[26px] text-lime leading-none">300+</div>
          <div class="text-[11px] font-medium tracking-[0.08em] uppercase text-white/50 leading-[1.3] mt-1">Eventos<br>parceiros</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const heroRef = ref(null)
const eyebrow = ref(null)
const title = ref(null)
const subtitle = ref(null)
const actions = ref(null)
const stats = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.from(eyebrow.value,  { opacity: 0, y: 20, duration: 0.6 })
    .from(title.value,    { opacity: 0, y: 30, duration: 0.7 }, '-=0.3')
    .from(subtitle.value, { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
    .from(actions.value,  { opacity: 0, y: 16, duration: 0.5 }, '-=0.4')
    .from(stats.value,    { opacity: 0, x: 20, duration: 0.6 }, '-=0.5')
})
</script>

<style scoped>
.eyebrow {
  @apply inline-flex items-center gap-2 font-head text-[11px] font-semibold tracking-[0.14em] uppercase text-lime mb-6;
}
.eyebrow::before {
  content: '';
  display: block;
  width: 24px;
  height: 2px;
  background: #88CE0D;
}
.btn {
  @apply inline-flex items-center font-head font-semibold text-sm tracking-[0.05em] uppercase px-7 py-[14px] rounded cursor-pointer no-underline transition-all duration-200;
}
.btn-lime  { @apply bg-lime text-dark hover:bg-[#9dea0f] hover:-translate-y-px; }
.btn-outline { @apply bg-transparent border border-white/20 text-white hover:border-primary hover:text-primary; }
.stat-pill {
  @apply bg-white/5 border border-white/10 backdrop-blur-md rounded-lg px-5 py-[14px];
}
</style>
