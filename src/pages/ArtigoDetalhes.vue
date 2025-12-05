<template>
<section class="relative w-full bg-sky-100 flex justify-center overflow-hidden flex-col-reverse md:flex-row">
  <div class="container relative z-10 flex flex-col justify-center gap-6 p-5 lg:p-10 items-center md:items-start text-center md:text-start min-h-[300px] md:min-h-[400px] lg:min-h-[637px]">

    <!-- Skeleton Loading para título -->
    <h2 v-if="!item"
        class="w-full max-w-[301px] lg:max-w-[388px] h-10 lg:h-16 bg-gray-300 animate-pulse rounded-md mt-[27px]">
    </h2>
    <h2 v-else
        class="text-[1.25em] md:text-[1.75em] lg:text-[2.5em] xl:text-[3em] font-[700] italic text-cyan-400
        w-full max-w-[301px] lg:max-w-[388px] mt-[27px] leading-[35px] lg:leading-[62px]">
      {{ getLocalizedField(item, 'titulo') }}
    </h2>

    <!-- Skeleton Loading para subtítulo -->
    <p v-if="!item"
       class="w-full max-w-[658px] h-6 lg:h-8 bg-gray-300 animate-pulse rounded-md">
    </p>
    <p v-else
       class="text-[0.875em] lg:text-[1em] xl:text-[1.25em] leading-[26px] md:leading-[43px]
        w-full max-w-[658px] text-center md:text-start" style="word-break: break-all; max-width: 50%;">
      {{ getLocalizedField(item, 'subTitulo') }}
    </p>

  </div>

  <!-- Skeleton Loading para imagem -->
  <div class="absolute inset-y-0 right-0 w-1/2 hidden md:block">
    <div v-if="!item" class="w-full h-full bg-gray-300 animate-pulse"></div>
    <img v-else
         class="w-full h-full object-cover object-bottom"
         :src="item?.imagensArtigo.find((i) => i.isBanner == false)?.imagemUrl" alt="">
  </div>

  <div class="w-full md:hidden">
    <div v-if="!item" class="w-full min-h-[200px] bg-gray-300 animate-pulse"></div>
    <img v-else
         class="w-full object-cover object-bottom min-h-[200px]"
         :src="item?.imagensArtigo.find((i) => i.isBanner == false)?.imagemUrl" alt="">
  </div>
</section>




<section class="w-full flex flex-col items-center justify-center gap-5">
  <div class="container p-5 lg:p-10">
    <div class="flex flex-col gap-20">

      <!-- Skeleton Loading para introdução -->
      <p v-if="loading" class="w-full h-20 lg:h-28 bg-gray-300 animate-pulse rounded-md"></p>
      <p v-else class="text-[0.875em] lg:text-[1.25em] xl:text-[1.25em] leading-[32px] lg:leading-[43px] w-full max-h-[300px] break-words whitespace-normal overflow-y-auto opacity-90">
        {{ getLocalizedField(item, 'introducao') }}
      </p>

      <!-- Skeleton Loading para conteúdo -->
      <div v-if="loading" class="w-full space-y-3">
        <div class="w-1/4 h-6 bg-gray-300 animate-pulse rounded-md"></div>
        <div class="w-full h-32 lg:h-40 bg-gray-300 animate-pulse rounded-md"></div>
      </div>
      <p v-else class="text-[0.875em] lg:text-[1.25em] xl:text-[1.25em] leading-[32px] lg:leading-[43px] w-full flex flex-col gap-3 opacity-90 max-h-[400px] lg:max-h-full break-words whitespace-normal overflow-y-auto">
        {{ getLocalizedField(item, 'conteudo') }}
      </p>

    </div>

    <div class="container flex flex-col gap-5 mt-10">

      <!-- Skeleton Loading para citação -->
      <div v-if="loading" class="space-y-3">
        <div class="w-12 h-3 bg-gray-300 animate-pulse rounded"></div>
        <div class="w-full h-32 bg-gray-300 animate-pulse rounded"></div>
        <div class="w-12 h-3 bg-gray-300 animate-pulse rounded"></div>
      </div>

      <template v-else>
        <div class="flex gap-10 items-start">
          <img class="w-8 lg:w-12" src="../assets/artigo-detalhe-imgs/citacao-left.jpg" alt="">
          <div class="w-full h-[3px] bg-sky-100"></div>
        </div>
        <div class="flex w-full h-[135px] justify-center">
          <p class="text-[0.875em] lg:text-[1.375em] font-[600] opacity-90 leading-[32px] lg:leading-[43px] break-words whitespace-normal overflow-y-auto text-center">
            {{ getLocalizedField(item, 'citacao') }}
          </p>
        </div>
        <div class="flex gap-10 items-end flex-row-reverse">
          <img class="w-8 lg:w-12 rotate-180" src="../assets/artigo-detalhe-imgs/citacao-left.jpg" alt="">
          <div class="w-full h-[3px] bg-sky-100"></div>
        </div>
      </template>

    </div>
  </div>
</section>




<section class="w-full flex flex-col items-center justify-center gap-5">
  <div class="container p-5 lg:p-10">
    <div class="flex flex-col gap-20">

      <!-- Skeleton Loading para imagem do banner -->
      <div v-if="loading" class="w-full h-[350px] md:h-[595px] bg-gray-300 animate-pulse rounded-md"></div>
      <img v-else
           class="w-full h-[350px] md:h-[595px] object-cover object-bottom"
           :src="item?.imagensArtigo.find((i) => i.isBanner == true)?.imagemUrl"
           alt="">

      <!-- Skeleton Loading para conclusão -->
      <div v-if="loading" class="w-full h-24 lg:h-32 bg-gray-300 animate-pulse rounded-md"></div>
      <p v-else class="text-[0.875em] lg:text-[1.25em] xl:text-[1.25em] leading-[32px] lg:leading-[43px] w-full max-h-[300px] overflow-y-auto break-words opacity-90">
        {{ getLocalizedField(item, 'conclusao') }}
      </p>

    </div>
  </div>
</section>




<section class="w-full flex flex-col items-center gap-5">
  <div class="container p-5 lg:p-10">

    <div class="w-full h-[3px] bg-cyan-400 mb-7"></div>

    <div class="flex justify-between gap-7 flex-wrap">

      <!-- Skeleton para informações do autor -->
      <div v-if="loading" class="flex items-center gap-7">
        <div class="w-16 h-16 rounded-full bg-gray-300 animate-pulse"></div>
        <div class="flex flex-col gap-2">
          <div class="w-40 h-6 bg-gray-300 animate-pulse rounded"></div>
          <div class="w-32 h-4 bg-gray-300 animate-pulse rounded"></div>
          <div class="w-32 h-4 bg-gray-300 animate-pulse rounded"></div>
        </div>
      </div>

      <!-- Conteúdo real do autor -->
      <div v-else class="flex flex-col md:flex-row items-center justify-center gap-7 w-full md:w-auto">
        <div class="flex flex-col md:flex-row text-center md:text-start gap-5 items-center">
          <img
  class="rounded-[50%] max-w-[116px]"
  :src="medico?.usuario?.avatarUrl"
  alt=""
>
        <div class="flex flex-col">
          <span class="font-semibold text-[1.5em]">{{ criadoPor?.nome }}</span>
          <span>{{ medico?.especializacao }}</span>
          <span>{{ criadoPor?.email }}</span>
        </div>
        </div>
      </div>

      <!-- Skeleton para botões -->
      <div v-if="loading" class="flex gap-7 items-center justify-center flex-wrap">
        <div class="w-[220px] h-[43px] bg-gray-300 animate-pulse rounded-full"></div>
        <div class="w-[220px] h-[43px] bg-gray-300 animate-pulse rounded-full"></div>
      </div>

      <!-- Botões reais -->
      <div v-else class="flex gap-7 items-center justify-center flex-wrap w-full md:w-auto">
        <button v-if="medico?.id" class="w-[220px] h-[43px] rounded-[50px] bg-sky-100 flex items-center justify-center cursor-pointer hover:scale-105 hover:bg-sky-200 duration-300">
          <a :href="whatsappUrl" target="_blank"  class="text-[0.875em] font-semibold text-cyan-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="black" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
          </a>                        
        </button>
      </div>

    </div>

    <div class="w-full h-[3px] bg-cyan-400 mt-7"></div>

  </div>
</section>




    <section class="w-full flex items-center justify-center mt-10">
        <div class="container p-5 lg:p-10 flex items-center justify-center">
            <ArtigoDetalhe @refresh-page="refreshPage" />
        </div>
    </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, watch, computed } from 'vue'
import ArtigoService from '../services/Artigos/artigos-service'
import ArtigoDetalhe from '../components/Artigo-Detalhe-Components/ArtigosDet.vue'
import medicoService from '../services/Medico/medico-service'
import { useDisabled } from 'element-plus'
import { useI18n } from '../composables/useI18n'

const route = useRoute()
const item = ref(null)
const criadoPor = ref(null) 
const loading = ref(false)
const error = ref(null)
const medico = ref(null)
const { t, currentLocale } = useI18n()

function getLocalizedField(item, field) {
  return currentLocale.value === 'en' ? item[`en_${field}`] : item[field]
}

const loadArtigo = async (id) => {
  try {
    loading.value = true
    error.value = null
    const response = await ArtigoService.getByArtigoId(id)
    item.value = response.data

    criadoPor.value = response.data.criadoPor || null
    
    if (criadoPor.value?.medicoId) {
      await buscarMedicoPorId()
    }
  } catch (err) {
    error.value = 'Erro ao carregar artigo'
    console.error(err)
  } finally {
    loading.value = false
  }
}

const buscarMedicoPorId = async() => {
  const medicoId = criadoPor.value?.medicoId
  try {
    const res = await medicoService.getMeditoById(medicoId)
    medico.value = res.data
  } catch (error) {
    console.error('Erro ao buscar médico:', error)
  }
}

const whatsappUrl = computed(() => {
  if (!medico.value?.telefone) return '#'
  const message = encodeURIComponent('Olá gostei bastante do Artigo que vi no FitCertify365')
  return `https://wa.me/${medico.value.telefone}?text=${message}`
})

const refreshPage = async () => {
  if (route.params.id) {
    await loadArtigo(route.params.id)
  }
}

watch(
  () => route.params.id,
  (newId) => {
    if (newId) loadArtigo(newId)
  },
  { immediate: true }
)
</script>



