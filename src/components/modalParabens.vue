<template>
  <Dialog :open="dialogFormVisible" class="relative z-50 ">
    <div class="fixed inset-0 bg-black/30 overflow-hidden" aria-hidden="true" />
    <div class="fixed inset-0 flex items-center justify-center p-4 rounded-2xl">
      <DialogPanel class="w-full max-w-md bg-white rounded-2xl shadow-lg border-2 border-cyan-400" style="width: min(600px, 100vw)">
    <div class="bg-white p-8 text-center rounded-2xl">
      <h2 class="text-2xl font-semibold mb-3 text-gray-800">Nosso <span class="text-cyan-400">aplicativo</span> está pronto!</h2>
      <p class="text-sm leading-relaxed text-gray-600">
        Como você chegou primeiro por aqui, vamos te presentear com
        <strong class="text-cyan-400">1 ano</strong> de aplicativo grátis! <br />
        Basta preencher o formulário e entraremos em contato.
      </p>
    </div>
    <div class="flex w-full items-center justify-around">
          <div class="w-full max-w-[55%] h-[2px] bg-cyan-400 rounded-lg"></div>
    </div>


    <form @submit.prevent="cadastrar" class="p-8 bg-white flex flex-col gap-5">
      <div>
        <span class="font-bold text-sm text-gray-700">Nome:</span>
        <input
          v-model="form.nomeCompleto"
          placeholder="Nome completo *"
          type="text"
          required
          class="w-full h-11 p-3 border border-gray-300 rounded-md focus:border-cyan-400 focus:outline-none"
        />
      </div>

      <div>
        <span class="font-bold text-sm text-gray-700">E-mail:</span>
        <input
          v-model="form.email"
          placeholder="Seu melhor e-mail *"
          type="email"
          required
          class="w-full h-11 p-3 border border-gray-300 rounded-md focus:border-cyan-400 focus:outline-none"
        />
      </div>

      <div>
        <span class="font-bold text-sm text-gray-700">Whatsapp:</span>
        <input
          v-model="form.numberWhatsapp"
          placeholder="Seu whatsapp *"
          type="tel"
          v-maska="'(##) #####-####'"
          maxlength="15"
          required
          class="w-full h-11 p-3 border border-gray-300 rounded-md focus:border-cyan-400 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        :disabled="loading"
        @click="cadastrar"
        class="w-full h-11 bg-cyan-400 hover:bg-cyan-500 text-white font-medium rounded-md cursor-pointer "
      >
        <i v-if="loading" class="fas fa-spinner fa-spin mr-2"></i>
        {{ loading ? 'Enviando...' : 'Cadastrar' }}
      </button>
    </form>

    <div class="text-center mx-8 mb-5 text-sm text-gray-500">
      <span>ou faça seu cadastro com</span>
      <div class="mt-5">
        <button @click="console.log('Google')"  class="text-white bg-cyan-400  border-1 w-[120px] h-auto rounded-[50px] cursor-pointer hover:scale-110 duration-300 p-2">
          <i class="fab fa-google text-xl"></i>
        </button>
      </div>
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

const toast = useToast()
const dialogFormVisible = ref(true)
const loading = ref(false)

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

const cadastrar = async () => {
  if (!form.nomeCompleto.trim() || !form.email.trim() || !form.numberWhatsapp.trim()) {
    toast.add({
      severity: 'warn',
      summary: 'Atenção',
      detail: 'Por favor, preencha todos os campos obrigatórios',
      life: 3000
    })
    return
  }

  if (!isValidEmail(form.email)) {
    toast.add({
      severity: 'warn',
      summary: 'Atenção',
      detail: 'Por favor, digite um e-mail válido',
      life: 3000
    })
    return
  }

  if (form.numberWhatsapp.length < 15) {
    toast.add({
      severity: 'warn',
      summary: 'Atenção',
      detail: 'Por favor, digite o número de WhatsApp completo',
      life: 3000
    })
    return
  }

  loading.value = true

  try {
    const formData = {
      ...form,
      numberWhatsapp: form.numberWhatsapp.replace(/\D/g, '')
    }
    const response = await ctaService.createCta(formData)

    if (response && response.data && response.data.id) {
      localStorage.setItem('cadastroId', response.data.id)
    }

    toast.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Cadastro enviado com sucesso!',
      life: 3000
    })

    dialogFormVisible.value = false

  } catch (error) {
    console.error('Erro ao enviar o cadastro:', error)
    toast.add({
      severity: 'error',
      summary: 'Erro',
      detail: 'Erro ao enviar o cadastro',
      life: 3000
    })
  } finally {
    loading.value = false
  }
}

const cadastroSalvo = localStorage.getItem('cadastroId');
if (cadastroSalvo) {
  dialogFormVisible.value = false
}
</script>
