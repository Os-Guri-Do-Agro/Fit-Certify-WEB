import { useI18n as useVueI18n } from 'vue-i18n'
import { computed } from 'vue'

export function useI18n() {
  const { t, locale } = useVueI18n()

  const currentLocale = computed(() => locale.value)
  
  const changeLocale = (newLocale: 'pt' | 'en') => {
    locale.value = newLocale
    localStorage.setItem('locale', newLocale)
  }

  const initLocale = () => {
    const savedLocale = localStorage.getItem('locale') as 'pt' | 'en'
    if (savedLocale && ['pt', 'en'].includes(savedLocale)) {
      locale.value = savedLocale
    }
  }

  return {
    t,
    currentLocale,
    changeLocale,
    initLocale
  }
}