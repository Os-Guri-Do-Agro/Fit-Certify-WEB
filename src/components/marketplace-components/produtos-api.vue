<template>
  <!-- Produtos -->
  <div class="w-full">
    <!-- Skeletons -->
    <template v-if="isLoading">
      <div
        class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-4 gap-6 md:gap-7 place-items-center"
      >
        <div
          v-for="n in 12"
          :key="'skeleton-produto-' + n"
          class="w-full lg:min-h-[600px] max-w-md bg-white shadow-lg rounded-[12px] flex flex-col animate-pulse"
        >
          <!-- Imagem fake -->
          <div class="w-full h-[250px] md:max-h-[300px] lg:h-[400px] bg-gray-300"></div>

          <!-- Conteúdo -->
          <div class="flex flex-col gap-3 p-5 text-left flex-grow min-h-[280px]">
            <div class="h-4 w-1/2 bg-gray-300 rounded"></div>
            <div class="h-6 w-3/4 bg-gray-300 rounded"></div>
            <div class="h-4 w-full bg-gray-200 rounded"></div>
            <div class="h-4 w-2/3 bg-gray-200 rounded"></div>
            <div class="h-5 w-1/3 bg-gray-300 rounded mt-2"></div>
            <div class="h-[35.5px] w-[140px] bg-gray-300 rounded-[30px] mt-auto"></div>
          </div>
        </div>
      </div>
    </template>

    <!-- Produtos reais -->
    <template v-else>
      <div
        class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-4 gap-6 md:gap-7 place-items-center"
        v-if="Produtos && Produtos.length"
      >
        <div
          v-for="item in Produtos.slice(0, 12)"
          :key="item.id"
          class="w-full lg:min-h-[600px] max-w-md bg-white shadow-lg rounded-[12px] flex flex-col"
        >
          <!-- Imagem -->
          <div class="w-full h-[250px] md:max-h-[300px] lg:h-[400px] overflow-hidden">
            <img
              class="w-full h-full object-cover"
              :src="item.imagemUrl"
              :alt="item.nomeImagem"
            />
          </div>

          <!-- Conteúdo -->
          <div class="flex flex-col gap-3 p-5 text-left flex-grow min-h-[280px]">
            <!-- Selo -->
            <div class="w-full text-end">
              <span
                v-if="item.exclusivoParaCertificado"
                class="hidden lg:inline-block bg-sky-100 text-lime-500 max-w-[175.8px] text-[0.75em] px-2 py-1 rounded"
              >
                Exclusivo para certificados
              </span>

              <span
                v-if="item.exclusivoParaCertificado"
                class="inline-block lg:hidden text-lime-500 bg-sky-100 text-[0.75em] px-2 py-1 rounded relative bottom-15 max-w-[178px]"
              >
                Exclusivo para certificados
              </span>
            </div>

            <!-- Título -->
            <h1 class="text-[1.125em] lg:text-[1.25em] font-[700] text-cyan-400 break-words">
              {{ item.titulo }}
            </h1>

            <!-- Descrição -->
            <p class="text-[0.75em] lg:text-[0.875em] text-gray-500 break-words">
              {{ item.descricao }}
            </p>

            <!-- Preço -->
            <p class="text-[0.875em] font-semibold text-gray-600">
              A partir de R$ {{ item.preco }}
            </p>

            <!-- Botão -->
            <RouterLink
              v-if="item.id"
              :to="{ name: 'MarketDetalhes', params: { id: item.id } }"
              class="mt-auto w-full max-w-[140px] h-[35.5px] rounded-[30px] flex items-center justify-center text-[0.83em] text-white font-[500] bg-lime-500 hover:bg-lime-600 duration-300"
            >
              Saiba Mais
            </RouterLink>
          </div>
        </div>
      </div>
    </template>
  </div>

  <!-- Paginação mobile fake (bolinhas) -->
  <div class="w-full flex justify-center h-20 items-center gap-3 md:hidden">
    <div class="w-3 h-3 bg-cyan-400 rounded-2xl cursor-pointer"></div>
    <div class="w-3 h-3 bg-cyan-200 rounded-2xl cursor-pointer"></div>
    <div class="w-3 h-3 bg-cyan-200 rounded-2xl cursor-pointer"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import ProdutosServices from '../../services/marketplace/marketplace-services'

const Produtos = ref<any[]>([])
const isLoading = ref(true) // ⬅️ controle do loading

onMounted(async () => {
  try {
    const response = await ProdutosServices.getAllProdutos()
    Produtos.value = response.data
  } finally {
    isLoading.value = false // ⬅️ desliga o skeleton
  }
})
</script>
