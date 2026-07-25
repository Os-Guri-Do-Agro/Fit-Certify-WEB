<template>
  <!-- Raiz precisa ocupar viewport: filhos só `fixed` colapsam o container e o Headless UI fecha o Dialog via ResizeObserver -->
  <Dialog :open="dialogFormVisible" class="fixed inset-0 z-[200]" @close="() => fecharModal(true)">
    <DialogOverlay
      class="fixed inset-0 bg-[#060606]/85 backdrop-blur-[6px] transition-opacity"
    />
    <!-- Só este nível rola se o conteúdo passar da altura da tela — nada de scroll dentro do card -->
    <div class="fixed inset-0 z-[1] overflow-y-auto overscroll-y-contain">
      <div class="flex min-h-full items-start justify-center p-4 py-10 sm:items-center sm:p-6 sm:py-10">
        <DialogPanel
          class="relative my-auto w-full max-w-[min(440px,calc(100vw-2rem))] shrink-0 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-[0_24px_80px_-20px_rgba(15,23,42,0.28),0_0_0_1px_rgba(0,198,254,0.06)]"
        >
          <div
            class="h-1 w-full bg-gradient-to-r from-[#88CE0D] via-[#00C6FE] to-[#88CE0D]"
            aria-hidden="true"
          />

          <button
            type="button"
            class="absolute right-3 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-lg text-[#64748b] transition-colors hover:bg-[#f1f5f9] hover:text-[#0f172a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C6FE]/60"
            :aria-label="t('modalParabens.closeAria')"
            @click="() => fecharModal(true)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          <div class="px-6 pb-1 pt-7 text-center sm:px-8 sm:pt-8">
            <p class="modal-kicker font-head mb-3 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#65a30d]">
              <span class="modal-kicker-line" aria-hidden="true" />
              {{ t('modalParabens.kicker') }}
            </p>
            <DialogTitle
              as="h2"
              class="font-head text-[clamp(1.25rem,4vw,1.625rem)] font-bold leading-tight tracking-[-0.02em] text-[#0f172a] [&_span]:font-bold"
            >
              <span v-html="t('modalParabens.title')" />
            </DialogTitle>
            <p
              class="modal-desc mt-3 text-left text-sm leading-snug text-[#64748b] sm:text-center [&_strong]:font-semibold [&_strong]:text-[#334155]"
              v-html="t('modalParabens.description')"
            />
          </div>

          <div class="h-px bg-gradient-to-r from-transparent via-[#cbd5e1] to-transparent" aria-hidden="true" />

          <div class="px-6 pb-7 pt-5 sm:px-8 sm:pb-8 sm:pt-6">
            <form class="modal-parabens-form flex flex-col gap-5 sm:gap-6" @submit.prevent="cadastrar">
              <div class="flex w-full flex-col gap-2">
                <label
                  class="block w-full font-head text-[10.5px] font-bold uppercase tracking-[0.13em] text-[#64748b]"
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
                  class="block w-full font-head text-[10.5px] font-bold uppercase tracking-[0.13em] text-[#64748b]"
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
                  class="block w-full font-head text-[10.5px] font-bold uppercase tracking-[0.13em] text-[#64748b]"
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
                data-track="modal_parabens:submit"
                :disabled="loading"
                class="group relative mt-1 flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#88CE0D] font-head text-[12px] font-bold uppercase tracking-[0.06em] text-[#060606] transition hover:bg-[#9dea0f] hover:shadow-[0_8px_28px_-8px_rgba(136,206,13,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C6FE] focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-55 sm:h-12 sm:text-[13px]"
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
import { siteAnalytics } from '../services/analytics/site-analytics'
import { useI18n } from '../composables/useI18n'

/** Cadastro concluído com sucesso (API retorna id) */
const STORAGE_CADASTRO_ID = 'cadastroId'
/**
 * Usuário fechou o modal sem enviar — não exibir de novo na Home.
 * v2: chave nova para não herdar dismiss gravado por bug do Headless UI (container 0×0 + ResizeObserver).
 */
const STORAGE_DISMISS_HOME = 'modalParabensHomeDismissed_v2'
const OPEN_DELAY_MS = 5000
const WEBHOOK_CADASTRO_URL = 'https://webhook.allmaticbrasil.com/webhook/cadastro'

const toast = useToast()
const { t } = useI18n()
const dialogFormVisible = ref(false)
const loading = ref(false)
/** Evita gravar dismiss em @close espúrio do Headless UI antes do modal abrir de fato. */
const modalJaFoiExibido = ref(false)

let openTimer: ReturnType<typeof setTimeout> | null = null

function shouldSkipModalParabens(): boolean {
  if (typeof window === 'undefined') return true
  try {
    return !!(
      window.localStorage.getItem(STORAGE_CADASTRO_ID) ||
      window.localStorage.getItem(STORAGE_DISMISS_HOME)
    )
  } catch {
    return true
  }
}

function persistirNaoMostrarNovamente() {
  try {
    window.localStorage.setItem(STORAGE_DISMISS_HOME, '1')
  } catch {
    /* ignore quota / private mode */
  }
}

function fecharModal(persistir = true) {
  if (!dialogFormVisible.value) return

  if (persistir && modalJaFoiExibido.value) {
    siteAnalytics.trackEvento({ tipo: 'modal_fechado', dataTrack: 'modal_parabens:close' })
    persistirNaoMostrarNovamente()
  }

  dialogFormVisible.value = false
}

onMounted(() => {
  if (shouldSkipModalParabens()) return

  openTimer = window.setTimeout(() => {
    openTimer = null
    if (shouldSkipModalParabens()) return
    dialogFormVisible.value = true
    modalJaFoiExibido.value = true
    siteAnalytics.trackEvento({ tipo: 'modal_aberto', dataTrack: 'modal_parabens:open' })
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

type CadastroCore = {
  nomeCompleto: string
  email: string
  numberWhatsapp: string
  promocaoRef: string
}

async function enviarWebhookCadastro(payload: Record<string, unknown>) {
  const res = await fetch(WEBHOOK_CADASTRO_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    throw new Error(`Webhook cadastro falhou: ${res.status}`)
  }
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
    const core: CadastroCore = {
      ...form,
      numberWhatsapp: form.numberWhatsapp.replace(/\D/g, ''),
    }

    siteAnalytics.trackEvento({
      tipo: 'form_submit',
      dataTrack: 'modal_parabens:submit',
      detalhe: core.promocaoRef,
    })

    const [response] = await Promise.all([
      ctaService.createCta(siteAnalytics.buildApiPayload(core)),
      enviarWebhookCadastro(siteAnalytics.buildWebhookPayload(core)),
    ])

    const cadastroId = response?.id ?? response?.data?.id
    try {
      if (cadastroId) {
        window.localStorage.setItem(STORAGE_CADASTRO_ID, String(cadastroId))
      }
      persistirNaoMostrarNovamente()
    } catch {
      /* ignore */
    }

    toast.add({
      severity: 'success',
      summary: t('common.success'),
      detail: t('modalParabens.messages.success'),
      life: 3000,
    })

    dialogFormVisible.value = false
  } catch (error) {
    siteAnalytics.trackEvento({
      tipo: 'form_error',
      dataTrack: 'modal_parabens:submit',
      detalhe: error instanceof Error ? error.message : 'erro',
    })
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
  color: #0f172a;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  outline: none;
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease,
    background-color 0.18s ease;
}

.modal-parabens-form input.modal-parabens-input::placeholder {
  color: #94a3b8;
}

.modal-parabens-form input.modal-parabens-input:hover {
  border-color: #cbd5e1;
  background-color: #f1f5f9;
}

.modal-parabens-form input.modal-parabens-input:focus {
  border-color: rgba(0, 198, 254, 0.65);
  background-color: #fff;
  box-shadow:
    0 0 0 3px rgba(0, 198, 254, 0.12),
    inset 0 0 0 1px rgba(0, 198, 254, 0.2);
}
</style>
