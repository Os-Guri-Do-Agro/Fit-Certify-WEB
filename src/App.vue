<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';
import Footer from './components/Footer.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const showLayout = computed(() => {
  return route.path !== '/login' && route.path !== '/cadastro';
});
</script>

<template>
  <!-- deploy 1 -->
  <div>
    <TheHeader v-if="showLayout" />
    <router-view />
    <Footer v-if="showLayout" />
  </div>
</template>