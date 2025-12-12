<template>
  <div>
    <!-- Grid de Cards -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 place-items-center w-full gap-6 md:gap-7 justify-center">

      <!-- Skeletons quando está carregando -->
      <template v-if="isLoading">
        <div v-for="n in itemsPerPage" :key="'skeleton-produto-' + n"
          class="w-full lg:min-h-[600px] max-w-md bg-white shadow-lg rounded-[12px] flex flex-col animate-pulse">
          <div class="w-full h-[250px] md:max-h-[300px] lg:h-[400px] bg-gray-300"></div>
          <div class="flex flex-col gap-3 p-5 text-left flex-grow min-h-[280px]">
            <div class="h-4 w-1/2 bg-gray-300 rounded"></div>
            <div class="h-6 w-3/4 bg-gray-300 rounded"></div>
            <div class="h-4 w-full bg-gray-200 rounded"></div>
            <div class="h-4 w-2/3 bg-gray-200 rounded"></div>
            <div class="h-5 w-1/3 bg-gray-300 rounded mt-2"></div>
            <div class="h-[35.5px] w-[140px] bg-gray-300 rounded-[30px] mt-auto"></div>
          </div>
        </div>
      </template>

      <!-- Cards de Produtos -->
      <template v-else>
        <!-- Mensagem quando lista está vazia -->
        <div v-if="Produtos.data.length === 0" class="col-span-full flex flex-col items-center justify-center py-20 text-center">
          <div class="text-6xl text-gray-300 mb-4">📦</div>
          <h3 class="text-xl font-semibold text-gray-600 mb-2">Nenhum produto encontrado</h3>
          <p class="text-gray-500">Tente ajustar os filtros para encontrar produtos</p>
        </div>
        
        <div v-else class="w-full lg:min-h-[600px] max-w-md bg-white shadow-lg rounded-[12px] flex flex-col"
          v-for="item in Produtos.data" :key="item.id">
          <!-- Imagem -->
          <div class="w-full h-[250px] md:max-h-[300px] lg:h-[400px] overflow-hidden">
            <img class="w-full h-full object-cover" :src="item.imagemUrl" :alt="item.nomeImagem" />
          </div>

          <!-- Conteúdo -->
          <div class="flex flex-col gap-3 p-5 text-left flex-grow min-h-[280px]">
            <div class="w-full text-end">
              <span v-if="item.exclusivoParaCertificado"
                class="bg-sky-100 text-lime-500 text-[0.75em] px-2 py-1 rounded">
                {{ t('marketplace.exclusivo') }}
              </span>
            </div>

            <h1 class="text-[1.125em] lg:text-[1.25em] font-[700] text-cyan-400 break-words">
              {{ getLocalizedField(item, 'titulo') }}
            </h1>

            <p class="text-[0.75em] lg:text-[0.875em] text-gray-500 break-words">
              {{ getLocalizedField(item, 'descricao') }}
            </p>

            <p class="text-[0.875em] font-semibold text-gray-600">
              {{ t('marketplace.valor')  }} {{ item.preco }}
            </p>

            <RouterLink :to="{ name: 'MarketDetalhes', params: { id: item.id } }"
              class="mt-auto w-full max-w-[140px] h-[35.5px] rounded-[30px] flex items-center justify-center text-[0.83em] text-white font-[500] bg-lime-500 hover:bg-lime-600 duration-300">
              {{ t('marketplace.button')  }}
            </RouterLink>
          </div>
        </div>
      </template>
    </div>

    <!-- Paginação -->
    <div class="flex justify-center mt-20">
      <el-pagination v-model:current-page="currentPage" v-model:page-size="itemsPerPage" :total="totalItens"
        :pager-count="7" layout="prev, pager, next" background @current-change="buscarProdutos" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { RouterLink } from 'vue-router'
import ProdutosServices from '../../services/marketplace/marketplace-services'
import { useI18n } from '../../composables/useI18n';

// Props
const { t, currentLocale } = useI18n()

function getLocalizedField(item: any, field: any) {
  return currentLocale.value === 'en' ? item[`en_${field}`] : item[field]
}

const props = defineProps<{
  categoria?: any
  empresa?: any
  preco?: any
  condicaoEspecial?: any
}>()

// Interface para tipar os produtos
interface Produto {
  id: string
  titulo: string
  descricao: string
  preco: number,
  empresa: string,
  imagemUrl: string
  nomeImagem?: string
  exclusivoParaCertificado?: boolean
  createdAt: string
  [key: string]: any
}

// Dados
const Produtos = ref<{ data: Produto[] }>({ data: [] })
const isLoading = ref(false)

// Paginação
const currentPage = ref(1)
const itemsPerPage = 9
const categoriaProdutoId = ref('')
const empresaId = ref('')
const totalPages = ref(1)
const totalItens = ref(0)
const condicaoEspecial = ref()
const precoSelected = ref()

async function buscarProdutos() {
  try {
    isLoading.value = true
    
    const response = await ProdutosServices.getAllPaginated(
      currentPage.value,
      itemsPerPage,
      categoriaProdutoId.value,
      condicaoEspecial.value,
      precoSelected.value,
      empresaId.value
    )

    const data = response.data
    totalItens.value = data.total

    Produtos.value.data = (data.itens || data.items || []).sort((a: Produto, b: Produto) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })

    totalPages.value = data.totalPages
  } finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  await buscarProdutos()
})

watch(
  () => [props.categoria, props.empresa, props.preco, props.condicaoEspecial],
  (
    [novaCategoria, novaEmpresa, novoPreco, novaCondicaoEspecial],
    [antigaCategoria, antigaEmpresa, antigoPreco, antigaCondicaoEspecial]
  ) => {
    if (
      novaCategoria !== antigaCategoria ||
      novaEmpresa !== antigaEmpresa ||
      novoPreco !== antigoPreco ||
      novaCondicaoEspecial !== antigaCondicaoEspecial
    ) {
      condicaoEspecial.value = props.condicaoEspecial || null
      categoriaProdutoId.value = props.categoria || ''
      empresaId.value = props.empresa || ''
      precoSelected.value = props.preco || ''
      currentPage.value = 1
      buscarProdutos();
    }
  }
);

</script>
