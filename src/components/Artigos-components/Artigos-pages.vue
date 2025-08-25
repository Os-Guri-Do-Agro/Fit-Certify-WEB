<template>
  <div>
    <!-- Grid de Cards -->
    <div class="grid md:grid-cols-2 md:grid-rows-1 place-items-center w-full gap-10 md:gap-3 lg:gap-7 justify-center">
      
      <!-- Skeletons quando está carregando -->
      <template v-if="isLoading">
        <div 
          v-for="n in itemsPerPage" 
          :key="'skeleton-' + n"
          class="w-full md:max-w-[558px] shadow-xl md:shadow-none pb-5 md:pb-0 rounded-lg lg:max-w-full min-h-[680px] md:min-h-[700px] lg:min-h-[850px] xl:min-h-[750px] animate-pulse "
        >
          <div class="flex">
            <div class="w-full max-w-[558px] lg:max-w-full h-[433px] bg-gray-300 rounded"></div>
          </div>

          <div class="flex flex-col justify-between gap-3 h-full mt-5 lg:mt-7 min-h-[230px] md:min-h-[280px] lg:min-h-[320px] px-3 md:px-0">
            <div class="h-7 lg:h-10 bg-gray-300 rounded md:w-3/4"></div>
            <div class="h-5 lg:h-7 bg-gray-300 rounded w-full mt-3"></div>
            <div class="h-5 lg:h-7 bg-gray-300 rounded md:w-5/6 mt-2"></div>
            <div class="h-[36px] bg-gray-300 rounded-full w-[558px] lg:w-[212px] mt-4"></div>
          </div>
        </div>
      </template>

      <!-- Cards de Artigos -->
      <template v-else>
        <div 
          class="w-full md:max-w-[558px] shadow-xl md:shadow-none pb-5 md:pb-0 rounded-lg lg:max-w-full min-h-[680px] md:min-h-[700px] lg:min-h-[850px] xl:min-h-[750px]"
          v-for="item in Artigos.data" 
          :key="item.id"
        >
          <div class="flex">
            <img 
              class="w-full max-w-[558px] lg:max-w-full h-[433px] object-cover"
              :src="item.imagensArtigo.find((i: any) => i.isBanner == false)?.imagemUrl" 
              alt=""
            >
          </div>

          <div class="flex flex-col justify-between gap-3 h-full mt-5 lg:mt-7 min-h-[230px] md:min-h-[280px] lg:min-h-[320px] px-5 md:px-0">
            <div>
              <h1 class="text-[1.3em] lg:text-[2.125em] font-[600] italic text-cyan-400 max-w-[525px] lg:leading-[52px] md:leading-[30px] leading-[26px]">
                {{ item.titulo }}
              </h1>
            </div>

            <div>
              <p class="text-[0.85em] lg:text-[1.25em] w-full max-w-[551px] leading-[26px] lg:leading-[36px]">
                {{ item.subTitulo }}
              </p>
            </div>

            <div>
              <RouterLink 
                :to="{ name: 'ArtigoDetalhe', params: { id: item.id } }"
                class="w-full max-w-[150px] lg:max-w-[212.6px] h-[36.3px] rounded-[30px] flex items-center justify-center text-[0.9em] text-cyan-400 font-[500] border border-cyan-400 duration-300 hover:bg-cyan-400 hover:text-white cursor-pointer"
                @click="emit('refresh-page', item.id)"
              >
                LEIA MAIS
              </RouterLink>
            </div>
          </div>
        </div>
      </template>
    </div>

    <!-- Paginação -->
    <div class="flex justify-center mt-20">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="itemsPerPage"
        :total="totalItens"
        :pager-count="7"
        background
        layout="prev, pager, next"
        @current-change="buscarArtigos"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import ArtigoService from '../../services/Artigos/artigos-service'

const emit = defineEmits<{
  'refresh-page': [id: string]
}>()

const props = defineProps<{
  categoriaId?: string 
}>()

// Interface para tipar os artigos
interface Artigo {
  id: string
  title?: string
  createdAt: string
  [key: string]: any // outros campos opcionais
}

// Dados
const Artigos = ref<{ data: Artigo[] }>({ data: [] })
const isLoading = ref(false)

// Paginação
const currentPage = ref(1)
const itemsPerPage = ref(4)
const categoriaArtigoId = ref(props.categoriaId)
const totalPages = ref(1)
const totalItens = ref(0)

async function buscarArtigos() {
  try {
    isLoading.value = true
    const response = await ArtigoService.getAllPaginated(
      currentPage.value,        
      itemsPerPage.value,         
      categoriaArtigoId.value,  
      false,
      true
    )
    
    const data = response.data
    totalItens.value = data.total

    // Ordena os artigos do mais recente para o mais antigo
    Artigos.value.data = data.itens.sort((a: Artigo, b: Artigo) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })
    
    totalPages.value = data.totalPages
  } finally {
    isLoading.value = false
  }
}

onMounted(async() => {
   await buscarArtigos()
})

watch([currentPage, categoriaArtigoId], () => {
  buscarArtigos()
})

watch(() => props.categoriaId, (newValue) => {
  categoriaArtigoId.value = newValue
  currentPage.value = 1
})
</script>


