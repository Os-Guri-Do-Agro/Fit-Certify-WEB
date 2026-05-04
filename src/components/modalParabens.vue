<template>
  <!-- Raiz precisa ocupar viewport: filhos só `fixed` colapsam o container e o Headless UI fecha o Dialog via ResizeObserver -->
  <Dialog :open="dialogFormVisible" class="fixed inset-0 z-[200]" @close="fecharModal">
    <DialogOverlay
      class="fixed inset-0 bg-[#060606]/85 backdrop-blur-[6px] transition-opacity"
    />
    <!-- Só este nível rola se o conteúdo passar da altura da tela — nada de scroll dentro do card -->
    <div class="fixed inset-0 z-[1] overflow-y-auto overscroll-y-contain">
      <div class="flex min-h-full items-start justify-center p-4 py-10 sm:items-center sm:p-6 sm:py-10">
        <DialogPanel
          class="relative my-auto w-full max-w-[min(440px,calc(100vw-2rem))] shrink-0 overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0e0e0e] shadow-[0_24px_80px_-20px_rgba(0,0,0,0.65),0_0_0_1px_rgba(0,198,254,0.08)]"
        >
          <div
            class="h-1 w-full bg-gradient-to-r from-[#88CE0D] via-[#00C6FE] to-[#88CE0D]"
            aria-hidden="true"
          />

          <button
            type="button"
            class="absolute right-3 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-lg text-white/55 transition-colors hover:bg-white/[0.08] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C6FE]/60"
            :aria-label="t('modalParabens.closeAria')"
            @click="fecharModal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          <div class="px-6 pb-1 pt-7 text-center sm:px-8 sm:pt-8">
            <p class="modal-kicker font-head mb-3 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#88CE0D]">
              <span class="modal-kicker-line" aria-hidden="true" />
              {{ t('modalParabens.kicker') }}
            </p>
            <DialogTitle
              as="h2"
              class="font-head text-[clamp(1.25rem,4vw,1.625rem)] font-bold leading-tight tracking-[-0.02em] text-white [&_span]:font-bold"
            >
              <span v-html="t('modalParabens.title')" />
            </DialogTitle>
            <p
              class="modal-desc mt-3 text-left text-sm leading-snug text-white/60 sm:text-center [&_strong]:font-semibold"
              v-html="t('modalParabens.description')"
            />
          </div>

          <div class="h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" aria-hidden="true" />

          <div class="px-6 pb-7 pt-5 sm:px-8 sm:pb-8 sm:pt-6">
            <form class="modal-parabens-form flex flex-col gap-5 sm:gap-6" @submit.prevent="cadastrar">
              <div class="flex w-full flex-col gap-2">
                <label
                  class="block w-full font-head text-[10.5px] font-bold uppercase tracking-[0.13em] text-white/45"
                  for="modal-parabens-nome"
                >
                  {{ t('modalParabens.form.name') }}
                </label>
                <input
                  id="modal-parabens-nome"
                  v-model="form.nomeCompleto"
                  type="text"
                  required
                  autocomplete="name"
                  :placeholder="t('modalParabens.form.namePlaceholder')"
                  class="modal-parabens-input"
                />
              </div>

              <div class="flex w-full flex-col gap-2">
                <label
                  class="block w-full font-head text-[10.5px] font-bold uppercase tracking-[0.13em] text-white/45"
                  for="modal-parabens-email"
                >
                  {{ t('modalParabens.form.email') }}
                </label>
                <input
                  id="modal-parabens-email"
                  v-model="form.email"
                  type="email"
                  required
                  autocomplete="email"
                  :placeholder="t('modalParabens.form.emailPlaceholder')"
                  class="modal-parabens-input"
                />
              </div>

              <div class="flex w-full flex-col gap-2">
                <label
                  class="block w-full font-head text-[10.5px] font-bold uppercase tracking-[0.13em] text-white/45"
                  for="modal-parabens-wa"
                >
                  {{ t('modalParabens.form.whatsapp') }}
                </label>
                <input
                  id="modal-parabens-wa"
                  v-model="form.numberWhatsapp"
                  v-maska="'(##) #####-####'"
                  type="tel"
                  maxlength="15"
                  required
                  autocomplete="tel"
                  :placeholder="t('modalParabens.form.whatsappPlaceholder')"
                  class="modal-parabens-input"
                />
              </div>

              <button
                type="submit"
                :disabled="loading"
                class="group relative mt-1 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#88CE0D] font-head text-[12px] font-bold uppercase tracking-[0.06em] text-[#060606] transition hover:bg-[#9dea0f] hover:shadow-[0_8px_28px_-8px_rgba(136,206,13,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C6FE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0e0e] disabled:pointer-events-none disabled:opacity-55 sm:h-12 sm:text-[13px]"
              >
                <i v-if="loading" class="fas fa-spinner fa-spin text-[0.95em]" aria-hidden="true" />
                {{ loading ? t('modalParabens.form.submittingButton') : t('modalParabens.form.submitButton') }}
              </button>
            </form>
          </div>
        </DialogPanel>
      </div>
    </div>
  </Dialog>

  <Toast position="top-right" />
</template>

<script lang="ts" setup>
import { Dialog, DialogPanel, DialogOverlay, DialogTitle } from '@headlessui/vue'
import { useToast } from 'primevue/usetoast'
import { reactive, ref, onMounted, onUnmounted } from 'vue'
import ctaService from '../services/cta/cta-service'
import { useI18n } from '../composables/useI18n'

/** Cadastro concluído com sucesso (API retorna id) */
const STORAGE_CADASTRO_ID = 'cadastroId'
/**
 * Usuário fechou o modal sem enviar — não exibir de novo na Home.
 * v2: chave nova para não herdar dismiss gravado por bug do Headless UI (container 0×0 + ResizeObserver).
 */
const STORAGE_DISMISS_HOME = 'modalParabensHomeDismissed_v2'
const OPEN_DELAY_MS = 5000

const toast = useToast()
const { t } = useI18n()
const dialogFormVisible = ref(false)
const loading = ref(false)

let openTimer: ReturnType<typeof setTimeout> | null = null

function shouldSkipModal() {
  if (typeof window === 'undefined') return true
  try {
    return !!(window.localStorage.getItem(STORAGE_CADASTRO_ID) || window.localStorage.getItem(STORAGE_DISMISS_HOME))
  } catch {
    return true
  }
}

function fecharModal() {
  try {
    window.localStorage.setItem(STORAGE_DISMISS_HOME, '1')
  } catch {
    /* ignore quota / private mode */
  }
  dialogFormVisible.value = false
}

onMounted(() => {
  if (shouldSkipModal()) return
  openTimer = window.setTimeout(() => {
    openTimer = null
    dialogFormVisible.value = true
  }, OPEN_DELAY_MS)
})

onUnmounted(() => {
  if (openTimer != null) {
    window.clearTimeout(openTimer)
    openTimer = null
  }
})

const form = reactive({
  nomeCompleto: '',
  email: '',
  numberWhatsapp: '',
  promocaoRef: 'Fitcertify - Cadastro Parabéns',
})

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const cadastrar = async () => {
  if (!form.nomeCompleto.trim() || !form.email.trim() || !form.numberWhatsapp.trim()) {
    toast.add({
      severity: 'warn',
      summary: t('modalParabens.messages.attention'),
      detail: t('modalParabens.validation.requiredFields'),
      life: 3000,
    })
    return
  }

  if (!isValidEmail(form.email)) {
    toast.add({
      severity: 'warn',
      summary: t('modalParabens.messages.attention'),
      detail: t('modalParabens.validation.invalidEmail'),
      life: 3000,
    })
    return
  }

  if (form.numberWhatsapp.length < 15) {
    toast.add({
      severity: 'warn',
      summary: t('modalParabens.messages.attention'),
      detail: t('modalParabens.validation.invalidWhatsapp'),
      life: 3000,
    })
    return
  }

  loading.value = true

  try {
    const formData = {
      ...form,
      numberWhatsapp: form.numberWhatsapp.replace(/\D/g, ''),
    }
    const response = await ctaService.createCta(formData)

    if (response && response.data && response.data.id) {
      try {
        window.localStorage.setItem(STORAGE_CADASTRO_ID, String(response.data.id))
      } catch {
        /* ignore */
      }
    }

    toast.add({
      severity: 'success',
      summary: t('common.success'),
      detail: t('modalParabens.messages.success'),
      life: 3000,
    })

    dialogFormVisible.value = false
  } catch (error) {
    console.error('Erro ao enviar o cadastro:', error)
    toast.add({
      severity: 'error',
      summary: t('common.error'),
      detail: t('modalParabens.messages.error'),
      life: 3000,
    })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.modal-kicker-line {
  display: inline-block;
  width: 22px;
  height: 2px;
  flex-shrink: 0;
  background: #88ce0d;
}

.modal-parabens-form label {
  display: block;
  width: 100%;
}

.modal-parabens-form input.modal-parabens-input {
  display: block;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  -webkit-appearance: none;
  appearance: none;
  height: 3rem;
  padding: 0 1rem;
  font-size: 14px;
  line-height: 1.5;
  font-family: inherit;
  color: #f0f2f5;
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 10px;
  outline: none;
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease,
    background-color 0.18s ease;
}

.modal-parabens-form input.modal-parabens-input::placeholder {
  color: rgba(255, 255, 255, 0.28);
}

.modal-parabens-form input.modal-parabens-input:hover {
  border-color: rgba(255, 255, 255, 0.18);
  background-color: rgba(255, 255, 255, 0.06);
}

.modal-parabens-form input.modal-parabens-input:focus {
  border-color: rgba(0, 198, 254, 0.55);
  background-color: rgba(0, 198, 254, 0.05);
  box-shadow:
    0 0 0 3px rgba(0, 198, 254, 0.1),
    inset 0 0 0 1px rgba(0, 198, 254, 0.15);
}
</style>
