<template>
  <div class="max-w-4xl mx-auto bg-cyan-50 rounded-lg">
    <div class="space-y-4">
      <!-- FAQ Item 1 -->
      <div class="faq-item">
        <button
          @click="toggleFaq(0)"
          class="w-full text-left flex items-start space-x-3 pb-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <div class="flex-shrink-0 mt-1">
            <svg
              class="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="flex font-[600] text-slate-600">
              O certificado serve para todas as provas?
            </h3>
          </div>
        </button>

        <div
          v-if="openFaq === 0"
          class="ml-8 pb-4 pr-4 text-gray-600 leading-relaxed animate-fade-in"
        >
          Sim. O certificado de aptidão física emitido pelo FitCertify365 é
          válido para qualquer competição que exija comprovação de saúde,
          conforme as diretrizes das autoridades esportivas e médicas.
          Recomendamos apenas verificar se a organização do evento aceita
          certificados digitais.
        </div>
      </div>

      <!-- FAQ Item 2 -->
      <div class="faq-item">
        <button
          @click="toggleFaq(1)"
          class="w-full text-left flex items-start space-x-3 pb-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <div class="flex-shrink-0 mt-1">
            <svg
              class="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="flex font-[600] text-slate-600">
              Preciso fazer exames antes?
            </h3>
          </div>
        </button>

        <div
          v-if="openFaq === 1"
          class="ml-8 pb-4 pr-4 text-gray-600 leading-relaxed animate-fade-in"
        >
          Depende. Alguns usuários já possuem exames recentes e não precisam
          repetir. Outros podem ser orientados a realizar exames complementares,
          de acordo com a análise do profissional de saúde responsável. O
          FitCertify365 conecta você a médicos que seguirão critérios clínicos
          para garantir sua segurança.
        </div>
      </div>

      <!-- FAQ Item 3 -->
      <div class="faq-item">
        <button
          @click="toggleFaq(2)"
          class="w-full text-left flex items-start space-x-3 pb-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <div class="flex-shrink-0 mt-1">
            <svg
              class="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="flex font-[600] text-slate-600">
              Quem assina os certificados?
            </h3>
          </div>
        </button>

        <div
          v-if="openFaq === 2"
          class="ml-8 pb-4 pr-4 text-gray-600 leading-relaxed animate-fade-in"
        >
          Todos os certificados são assinados por médicos registrados no
          Conselho Regional de Medicina (CRM), com experiência em saúde
          esportiva e aptidão física. A plataforma garante a verificação e o
          registro digital da assinatura para sua validade.
        </div>
      </div>

      <!-- FAQ Item 4 -->
      <div class="faq-item">
        <button
          @click="toggleFaq(3)"
          class="w-full text-left flex items-start space-x-3 pb-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <div class="flex-shrink-0 mt-1">
            <svg
              class="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="flex font-[600] text-slate-600">
              Como sei se ele é válido?
            </h3>
          </div>
        </button>

        <div
          v-if="openFaq === 3"
          class="ml-8 pb-4 pr-4 text-gray-600 leading-relaxed animate-fade-in"
        >
          O certificado conta com autenticação digital, número de identificação
          único e validação online através do QR Code. Qualquer organizador ou
          terceiro autorizado pode verificar a autenticidade em segundos,
          acessando o link indicado no documento.
        </div>
      </div>

      <!-- FAQ Item 5 -->
      <div class="faq-item">
        <button
          @click="toggleFaq(4)"
          class="w-full text-left flex items-start space-x-3 pb-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <div class="flex-shrink-0 mt-1">
            <svg
              class="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="flex font-[600] text-slate-600">Quanto tempo leva?</h3>
          </div>
        </button>

        <div
          v-if="openFaq === 4"
          class="ml-8 pb-4 pr-4 text-gray-600 leading-relaxed animate-fade-in"
        >
          O processo é rápido. O médico realiza os exames com você no
          consultório e, se estiver tudo certo, o certificado é emitido na hora,
          de forma digital e com autenticação válida em todo o território
          nacional
        </div>
      </div>

      <!-- FAQ Item 6 -->
      <div class="faq-item">
        <button
          @click="toggleFaq(5)"
          class="w-full text-left flex items-start space-x-3 pb-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <div class="flex-shrink-0 mt-1">
            <svg
              class="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="flex font-[600] text-slate-600">
              Posso usar o mesmo para várias provas?
            </h3>
          </div>
        </button>

        <div
          v-if="openFaq === 5"
          class="ml-8 pb-4 pr-4 text-gray-600 leading-relaxed animate-fade-in"
        >
          Sim. O certificado pode ser utilizado em diversas provas, desde que
          esteja dentro do período de validade definido pelo médico (geralmente
          entre 3 e 12 meses). Basta apresentá-lo aos organizadores
          quando solicitado.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Reactive data
const openFaq = ref<number | null>(null);

// Methods
const toggleFaq = (index: number): void => {
  if (openFaq.value === index) {
    openFaq.value = null;
  } else {
    openFaq.value = index;
  }
};
</script>

<style scoped>
.faq-item {
  border-bottom: 1px solid #e5e7eb;
}

.faq-item:last-child {
  border-bottom: none;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
