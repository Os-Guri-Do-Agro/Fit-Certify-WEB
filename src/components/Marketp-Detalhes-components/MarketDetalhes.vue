<template>
  <div>
    <!-- Produtos Carregados -->
    <div
      class="lg:grid md:grid-cols-3 md:grid-rows-1 place-items-center w-full gap-10 md:gap-3 lg:gap-7"
      v-if="!loadingProdutos && Produtos && Produtos.data && Produtos.data.length"
    >
      <div
        class="w-full h-auto min-h-[500px] md:min-h-[700px] lg:max-w-full bg-white shadow-lg rounded-[12px]"
        v-for="item in Produtos.data.slice(0, 3)"
        :key="item.id"
      >
        <div class="w-full h-[250px] md:h-[300px] lg:h-[400px] overflow-hidden ">
          <img
            class="w-full h-full object-cover"
            :src="item.imagemUrl"
            :alt="item.nomeImagem"
          />
        </div>

        <div class="flex flex-col justify-between gap-3 h-full text-start p-5 min-h-[250px] lg:min-h-[300px]">
          <div class="w-full text-end">
            <span
              v-if="item.exclusivoParaCertificado"
              class="inline-bloc bg-sky-100 text-lime-500 max-w-[175.8px] text-[0.75em] px-2 py-1 rounded"
            >
              Exclusivo para certificados
            </span>
          </div>

          <div>
            <h1 class="text-[1.125em] lg:text-[1.25em] font-[700] text-cyan-400 max-w-[327.25px]">
              {{ item.titulo }}
            </h1>
          </div>

          <div>
            <p class="text-[0.75em] lg:text-[0.875em] w-full max-w-[551px] text-gray-500">
              {{ item.descricao }}
            </p>
          </div>

          <div>
            <p class="text-[0.875em] font-semibold text-gray-600">
              A partir de R$ {{ item.preco }}
            </p>
          </div>

          <div>
            <button
              class="w-full max-w-[127.32px] lg:max-w-[137.48px] cursor-pointer h-[35.5px] rounded-[30px] flex items-center justify-center text-[0.83em] text-white font-[500] bg-lime-500 hover:bg-lime-600 duration-300 mb-7"
              @click="emit('refresh-page', item.id)"
            >
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Skeleton Loading -->
    <div
      v-else
      class="lg:grid md:grid-cols-3 md:grid-rows-1 place-items-center w-full gap-10 md:gap-3 lg:gap-7"
    >
      <div
        v-for="n in 3"
        :key="n"
        class="w-full h-auto min-h-[500px] md:min-h-[700px] lg:max-w-full bg-white shadow-lg rounded-[12px] p-5 flex flex-col gap-3 animate-pulse"
      >
        <div class="w-full h-[250px] md:h-[300px] lg:h-[400px] bg-gray-300 rounded"></div>
        <div class="w-full h-6 bg-gray-300 rounded"></div>
        <div class="w-full h-4 bg-gray-300 rounded mt-2"></div>
        <div class="w-1/2 h-4 bg-gray-300 rounded mt-2"></div>
        <div class="w-[127px] h-[35.5px] bg-gray-300 rounded mt-auto"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ProdutosServices from '../../services/marketplace/marketplace-services'

const Produtos = ref<{ data: any[] }>({ data: [] })
const loadingProdutos = ref(true)
const emit = defineEmits<{
  'refresh-page': [id: string]
}>()

onMounted(async () => {
  try {
    Produtos.value = await ProdutosServices.getAllProdutos()
  } finally {
    loadingProdutos.value = false
  }
})
</script>
