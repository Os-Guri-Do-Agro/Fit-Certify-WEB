<template>
  <Dialog :open="dialogFormVisible" class="relative z-50">
    <div class="fixed inset-0 overflow-hidden" style="background-color: rgba(0, 0, 0, 0.7);" aria-hidden="true" />
    <div class="fixed inset-0 flex items-center justify-center p-4 rounded-2xl overflow-y-auto">
      <DialogPanel class="w-full max-w-md bg-gray-200 rounded-2xl shadow-lg border-2 border-cyan-400 relative my-8"
        style="width: min(600px, 100vw); max-height: calc(100vh - 4rem);">
        <div class="flex justify-end align-center w-full">
                  <button @click="fecharModal"
          class="hover:text-gray-700 text-xl font-bold p-[5px] rounded-[12px] cursor-pointer border-0 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
        </div>


        <div class="bg-gray-200 p-8 text-center rounded-2xl">
          <h2 class="text-2xl font-semibold mb-3 text-gray-800" v-html="t('modalParabens.title')"></h2>
          <p class="text-sm leading-relaxed text-gray-600" v-html="t('modalParabens.description')">
          </p>
        </div>
        <div class="flex w-full items-center justify-around">
          <div class="w-full max-w-[55%] h-[2px] bg-cyan-400 rounded-lg"></div>
        </div>


        <div class="overflow-y-auto max-h-96">
        <form @submit.prevent="cadastrar" class="p-8  flex flex-col gap-5">
          <div>
            <span class="font-bold text-sm text-gray-700">{{ t('modalParabens.form.name') }}</span>
            <input v-model="form.nomeCompleto" :placeholder="t('modalParabens.form.namePlaceholder')" type="text" required
              class="w-full h-11 p-3 border border-gray-300 rounded-md focus:border-cyan-400 focus:outline-none" />
          </div>

          <div>
            <span class="font-bold text-sm text-gray-700">{{ t('modalParabens.form.email') }}</span>
            <input v-model="form.email" :placeholder="t('modalParabens.form.emailPlaceholder')" type="email" required
              class="w-full h-11 p-3 border border-gray-300 rounded-md focus:border-cyan-400 focus:outline-none" />
          </div>

          <div>
            <span class="font-bold text-sm text-gray-700">{{ t('modalParabens.form.whatsapp') }}</span>
            <input v-model="form.numberWhatsapp" :placeholder="t('modalParabens.form.whatsappPlaceholder')" type="tel" v-maska="'(##) #####-####'"
              maxlength="15" required
              class="w-full h-11 p-3 border border-gray-300 rounded-md focus:border-cyan-400 focus:outline-none" />
          </div>

          <button type="submit" data-track="modal_parabens:submit" :disabled="loading"
            class="w-full h-11 bg-cyan-400 hover:bg-cyan-500 text-white font-medium rounded-md cursor-pointer ">
            <i v-if="loading" class="fas fa-spinner fa-spin mr-2"></i>
            {{ loading ? t('modalParabens.form.submittingButton') : t('modalParabens.form.submitButton') }}
          </button>
        </form>
        </div>


      </DialogPanel>
    </div>
  </Dialog>

  <Toast position="top-right" />
</template>

<script lang="ts" setup>
import { Dialog, DialogPanel } from '@headlessui/vue'
import { useToast } from 'primevue/usetoast'
import { reactive, ref } from 'vue'
import ctaService from '../services/cta/cta-service'
import { siteAnalytics } from '../services/analytics/site-analytics'
import { useI18n } from '../composables/useI18n'


const WEBHOOK_CADASTRO_URL = 'https://webhook.allmaticbrasil.com/webhook/cadastro'

const toast = useToast()
const { t } = useI18n()
const dialogFormVisible = ref(false)
const loading = ref(false)

const cadastroSalvo = localStorage.getItem('cadastroId')
if (!cadastroSalvo) {
  setTimeout(() => {
    dialogFormVisible.value = true
    siteAnalytics.trackEvento({ tipo: 'modal_aberto', dataTrack: 'modal_parabens:open' })
  }, 3000)
}

const form = reactive({
  nomeCompleto: "",
  email: "",
  numberWhatsapp: "",
  promocaoRef: "Fitcertify - Cadastro Parabéns"
})

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

type CadastroPayload = {
  nomeCompleto: string
  email: string
  numberWhatsapp: string
  promocaoRef: string
}

function fecharModal() {
  siteAnalytics.trackEvento({ tipo: 'modal_fechado', dataTrack: 'modal_parabens:close' })
  dialogFormVisible.value = false
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
      life: 3000
    })
    return
  }

  if (!isValidEmail(form.email)) {
    toast.add({
      severity: 'warn',
      summary: t('modalParabens.messages.attention'),
      detail: t('modalParabens.validation.invalidEmail'),
      life: 3000
    })
    return
  }

  if (form.numberWhatsapp.length < 15) {
    toast.add({
      severity: 'warn',
      summary: t('modalParabens.messages.attention'),
      detail: t('modalParabens.validation.invalidWhatsapp'),
      life: 3000
    })
    return
  }

  loading.value = true

  try {
    const core: CadastroPayload = {
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
    if (cadastroId) {
      localStorage.setItem('cadastroId', String(cadastroId))
    }

    toast.add({
      severity: 'success',
      summary: t('common.success'),
      detail: t('modalParabens.messages.success'),
      life: 3000
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
      life: 3000
    })
  } finally {
    loading.value = false
  }
}


</script>
