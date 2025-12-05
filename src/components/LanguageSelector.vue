<template>
  <div class="language-selector">
    <button 
      @click="toggleDropdown"
      class="locale-button"
    >
      <img :src="currentFlag" :alt="currentLocale" class="flag-icon" />
      <span class="locale-text">{{ currentLocale.toUpperCase() }}</span>
      <svg class="chevron" :class="{ 'rotate-180': isOpen }" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6,9 12,15 18,9"></polyline>
      </svg>
    </button>
    
    <div v-if="isOpen" class="dropdown" @click.stop>
      <button 
        v-for="locale in locales" 
        :key="locale.code"
        @click="selectLocale(locale.code)"
        class="dropdown-item"
        :class="{ 'active': locale.code === currentLocale }"
      >
        <img :src="locale.flag" :alt="locale.code" class="flag-icon" />
        <span>{{ locale.name }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n'

const { currentLocale, changeLocale, initLocale } = useI18n()
const isOpen = ref(false)

const locales = [
  { code: 'pt' as const, name: 'Português', flag: 'https://flagcdn.com/w40/br.png' },
  { code: 'en' as const, name: 'English', flag: 'https://flagcdn.com/w40/gb.png' }
]

const currentFlag = computed(() => {
  return locales.find(l => l.code === currentLocale.value)?.flag || locales[0].flag
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectLocale = (locale: typeof locales[number]['code']) => {
  changeLocale(locale)
  isOpen.value = false
}

const closeDropdown = (event: Event) => {
  if (!event.target || !(event.target as Element).closest('.language-selector')) {
    isOpen.value = false
  }
}

onMounted(() => {
  initLocale()
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<style scoped>
.language-selector {
  position: relative;
  display: inline-block;
}

.locale-button {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #6b7280;
  transition: color 0.3s ease;
}

.locale-button:hover {
  color: #06b6d4;
}

.flag-icon {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  object-fit: cover;
}

.locale-text {
  font-weight: 500;
  font-size: 13px;
}

.chevron {
  transition: transform 0.2s ease;
}

.rotate-180 {
  transform: rotate(180deg);
}

.dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 50;
  min-width: 140px;
  white-space: nowrap;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #374151;
  transition: background-color 0.2s ease;
}

.dropdown-item:hover {
  background-color: #f3f4f6;
}

.dropdown-item.active {
  background-color: #eff6ff;
  color: #06b6d4;
}

.dropdown-item:first-child {
  border-radius: 6px 6px 0 0;
}

.dropdown-item:last-child {
  border-radius: 0 0 6px 6px;
}
</style>