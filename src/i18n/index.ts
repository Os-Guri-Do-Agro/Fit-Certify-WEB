import { createI18n } from 'vue-i18n'
import pt from './messages/pt'
import en from './messages/en'

const messages = {
  pt,
  en
}

const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'en',
  messages
})

export default i18n