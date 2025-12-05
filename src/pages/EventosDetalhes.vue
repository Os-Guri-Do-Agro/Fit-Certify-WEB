<template>
<section class="w-full"> <!-- altura fixa -->
  <div>
    <!-- Skeleton Loading -->
    <div v-if="!evento?.imagemUrl" class="w-full h-64 md:h-96 bg-gray-300 animate-pulse"></div>

    <!-- Imagem real -->
    <img v-else class="w-full h-full object-cover max-h-[637px]" :src="evento?.imagemUrl" alt="">
  </div>
</section>


<section class="w-full flex justify-center bg-sky-100">
  <div class="container min-h-[370px] flex items-center p-5 md:p-10 flex-col md:flex-row gap-5">

    <!-- Conteúdo do texto -->
    <div class="md:w-1/2 flex flex-col gap-5">
      <!-- Skeleton para título -->
      <div v-if="carregando" class="h-12 md:h-14 lg:h-16 bg-gray-300 rounded-md animate-pulse w-full"></div>
      <!-- Título real -->
      <h1 v-else class="text-[2em] md:text-[2.5em] text-center md:text-start lg:text-[3em] italic font-[600] text-cyan-400">{{ getLocalizedField(evento, 'titulo') }}</h1>

      <div class="flex gap-5 items-center md:items-start flex-col md:flex-row">
        <!-- Skeleton para botões -->
        <div v-if="carregando" class="flex gap-5">
          <div class="h-[45px] md:h-[55px] w-[170px] md:w-[200px] lg:w-[270px] bg-gray-300 rounded-[30px] animate-pulse"></div>
          <div class="h-[45px] md:h-[55px] w-[170px] md:w-[200px] lg:w-[270px] bg-gray-300 rounded-[30px] animate-pulse"></div>
        </div>

        <!-- Botões reais -->
        <template v-else>
          <div class="" v-if="evento?.linkEnviarCertificado">
          <RouterLink class="flex text-[0.9em] md:text-[1em] lg:text-[1.43em] bg-lime-500 w-[170px] h-[45px] md:w-[200px] md:lg:w-[270px] md:h-[55px] lg:h-[55px] items-center justify-center rounded-[30px] font-bold text-white hover:bg-lime-600 duration-300" :to="evento?.linkEnviarCertificado" >
            {{ t('eventosDetalhes.button1') }}
          </RouterLink>            
          </div>
          <div class="" v-if="evento?.linkSiteProva">
          <RouterLink class="flex text-[0.9em] md:text-[1em] lg:text-[1.43em] w-[170px] h-[45px] md:w-[200px] md:lg:w-[270px] md:h-[55px] lg:h-[55px] items-center justify-center rounded-[30px] font-bold text-lime-500 hover:text-white border-2 border-lime-500 hover:bg-lime-500 duration-300" :to="evento?.linkSiteProva" target="_blank" >
            {{ t('eventosDetalhes.button2') }}
          </RouterLink>            
          </div>
        </template>
      </div>
    </div>

    <!-- Conteúdo da imagem -->
    <div class="md:w-1/2 flex justify-end ">
      <div class=" max-w-[350px] lg:max-w-[455px]  max-h-[256px] rounded-[20px] bg-white overflow-hidden flex items-center justify-center">
        <!-- Skeleton para imagem -->
        <div v-if="carregando" class="w-full h-full bg-gray-300 animate-pulse rounded-[20px]"></div>
        <!-- Imagem real -->
        <img v-else class="object-cover w-full max-w-[410px]" :src="evento?.logoUrl" alt="">
      </div>
    </div>

  </div>
</section>




<section class="w-full flex justify-center">
  <div class="container p-5 md:p-10">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-y-8 md:gap-y-10 lg:gap-y-0 lg:divide-x-2 divide-sky-100 gap-x-5"
    >
      <!-- Data -->
      <div class="flex flex-col items-center lg:items-start text-center lg:text-left gap-10">
        <span class="font-bold text-base md:text-lg lg:text-xl opacity-80">{{ t('eventosDetalhes.section1.data') }}</span>
        <span class="text-xl md:text-2xl lg:text-4xl text-zinc-500">
          <div v-if="carregando" class="w-24 h-8 md:h-10 lg:h-12 bg-gray-300 rounded animate-pulse mx-auto"></div>
          <span v-else>{{ formatDate(evento?.data) }}</span>
        </span>
      </div>

      <!-- Local -->
      <div class="flex flex-col items-center lg:items-start text-center lg:text-left px-4 gap-10">
        <span class="font-bold text-base md:text-lg lg:text-xl opacity-80">{{ t('eventosDetalhes.section1.local') }}</span>
        <span class="text-xl md:text-2xl lg:text-4xl text-zinc-500">
          <div v-if="carregando" class="w-32 h-8 md:h-10 lg:h-12 bg-gray-300 rounded animate-pulse mx-auto"></div>
          <span v-else>{{ evento?.local }}</span>
        </span>
      </div>

      <!-- Modalidade -->
      <div class="flex flex-col items-center lg:items-start text-center lg:text-left px-4 gap-10">
        <span class="font-bold text-base md:text-lg lg:text-xl opacity-80">{{ t('eventosDetalhes.section1.modalidade') }}</span>
        <span class="text-xl md:text-2xl lg:text-4xl text-zinc-500">
          <div v-if="carregando" class="w-24 h-8 md:h-10 lg:h-12 bg-gray-300 rounded animate-pulse mx-auto"></div>
          <span v-else>{{ getLocalizedField(tipoEvento, 'nome') }}</span>
        </span>
      </div>

      <!-- Distância -->
      <div class="flex flex-col items-center lg:items-start text-center lg:text-left px-4 gap-10">
        <span class="font-bold text-base md:text-lg lg:text-xl opacity-80">{{ t('eventosDetalhes.section1.distancia') }}</span>
        <span class="text-xl md:text-2xl lg:text-4xl text-zinc-500">
          <div v-if="carregando" class="w-36 h-8 md:h-10 lg:h-12 bg-gray-300 rounded animate-pulse mx-auto"></div>
          <span v-else>{{ formatDistancias(evento?.distanciasEvento) }}</span>
        </span>
      </div>

    </div>
  </div>
</section>



<section class="w-full flex justify-center">
  <div class="container flex gap-5 flex-col p-5 md:p-10">
    <div class="w-full h-[2px] bg-sky-100 mb-7"></div>

    <span class="font-bold text-base md:text-lg lg:text-xl opacity-80 ">{{ t('eventosDetalhes.section2.title') }}</span>

    <!-- Skeleton para descrição -->
    <div v-if="carregando" class="w-full h-24 md:h-32 lg:h-36 bg-gray-300 rounded animate-pulse"></div>

    <!-- Texto real -->
    <span v-else class="text-[0.875em] lg:text-[1.25em] xl:text-[1.25em] leading-[32px] lg:leading-[43px] w-full max-h-[300px] overflow-y-auto opacity-90">
      {{ getLocalizedField(evento, 'descricao') }}
    </span>

    <div class="w-full h-[2px] bg-sky-100 mt-7"></div>
  </div>
</section>


<section class="w-full flex justify-center">
  <div class="container flex-col md:flex-row flex gap-5 p-5 md:p-10 text-center md:text-start">

    <span class="font-bold text-base md:text-lg lg:text-xl opacity-80 ">{{ t('eventosDetalhes.section3.title') }}</span>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
      <!-- Skeleton enquanto não carrega -->
      <div v-if="carregando" v-for="n in 5" :key="n" class="flex flex-col items-center justify-center bg-gray-300 rounded-lg shadow-md animate-pulse">
        <div class="w-full h-full md:w-32 md:h-32 lg:w-36 lg:h-36 bg-gray-400 rounded-md"></div>
      </div>

      <!-- Logos reais -->
      <div v-else v-for="org in organizacao" :key="org.id" class="flex flex-col items-center justify-center bg-white rounded-lg shadow-md">
        <img
          class="object-cover w-full h-full md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-md"
          :src="org.logoUrl"
          :alt="org.nome"
        />
      </div>
    </div>

  </div>
</section>



    <section class="flex bg-sky-50 justify-center mt-10 md:h-[800px]">
        <div class="container flex flex-col p-5 md:p-10">
            <h2 class="text-[1.75em] md:text-[2.25em] text-center lg:text-[3em] italic font-[600] text-lime-500 mb-5">{{ t('eventosDetalhes.section4.title') }}</h2>

            <div class="flex w-full">
                <Eventos @refresh-page="refreshPage"/>
            </div>
        </div>
    </section>

</template>


<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import EventosService from '../services/Eventos/eventos-services'
import Eventos from '../components/Evento-Detalhes-components/EventoDet.vue'
import { useI18n } from '../composables/useI18n'

const route = useRoute()
const router = useRouter()
const evento = ref(null)
const tipoEvento = ref(null)
const organizacao = ref([])
const carregando = ref(true)
const tipoEventoId = ref(null)
const { t, currentLocale } = useI18n()

function getLocalizedField(evento, field, tipoEvento) {
  return currentLocale.value === 'en' ? evento[`en_${field}`] : evento[field] || tipoEvento?.[field]
}


function formatDate(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  if (currentLocale.value === 'pt') {
      return date.toLocaleDateString('pt-BR')
  } else {
    return date.toLocaleDateString('en-US')
  }
}

function formatDistancias(distancias) {
  if (!distancias || !distancias.length) return ''
  return distancias
    .map(d => {
      if (currentLocale.value === 'en') {
        const miles = (d.distancia * 0.621371).toFixed(1)
        return `${miles} mi`
      }
      return `${d.distancia} km`
    })
    .join(' / ')
}

const carregarEvento = async (id) => {
  try {
    carregando.value = true
    const resposta = await EventosService.getByEventoId(id)

    evento.value = resposta.data
    tipoEventoId.value = evento.value.tipoEventoId
    // pega a organização (ajuste aqui dependendo de como vem na API)
    organizacao.value = resposta.data.organizacaoEvento.map(item => item.organizacao)
    
    // Chama getTipoEventoId após definir tipoEventoId
    await getTipoEventoId()
  } catch (erro) {
    console.error('Erro ao carregar o evento:', erro)
  } finally {
    carregando.value = false
  }
}

const getTipoEventoId = async () => {
  try {
    if (!tipoEventoId.value) {
      console.error('tipoEventoId está vazio ou null')
      return
    }
    const response = await EventosService.getTipoEventoById(tipoEventoId.value)
    tipoEvento.value = response.data
  } catch (error) {
    console.error('Erro ao buscar o tipo de evento:', error)
  }
}



onMounted(async () => {
  await carregarEvento(route.params.id)
})

const atualizarPagina = async (id) => {
  await router.push({ name: 'EventoDetalhes', params: { id } })
}

const refreshPage = async () => {
  if (route.params.id) {
    await carregarEvento(route.params.id)
  }
}

watch(
  () => route.params.id,
  (novoId) => {
    if (novoId) carregarEvento(novoId)
  }
)
</script>


