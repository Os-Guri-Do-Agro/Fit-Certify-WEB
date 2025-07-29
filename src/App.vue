<script setup lang="ts">
import Home from './pages/Home.vue'
import TheHeader from './components/TheHeader.vue';
import Footer from './components/Footer.vue';
import QuemSomos from './pages/QuemSomos.vue';
</script>

<template>
  
  <div class="">
  <TheHeader />
  <router-view />
  <Footer />
  </div>
</template>

<style scoped>

</style>
