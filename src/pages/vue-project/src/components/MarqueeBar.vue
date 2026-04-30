<template>
  <div class="bg-lime overflow-hidden py-3">
    <div class="marquee-track flex gap-0 w-max">
      <template v-for="_ in 2" :key="_">
        <template v-for="item in items" :key="item">
          <span class="font-head font-bold text-[12px] tracking-[0.12em] uppercase text-dark px-8 whitespace-nowrap">{{ item }}</span>
          <span class="text-dark/30 px-0">✦</span>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup>
const items = [
  'Agilidade', 'Segurança', 'Tecnologia',
  'Saúde Validada', 'Esporte Garantido', 'Indicadores em Tempo Real',
]
</script>
