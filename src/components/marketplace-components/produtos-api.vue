<template>
  <div
    class="lg:grid md:grid-cols-3 md:grid-rows-4 place-items-center w-full gap-10 md:gap-3 lg:gap-7 hidden"
    v-if="Produtos && Produtos.length"
  >
    <div
      class="w-full lg:h-[500px] xl:h-[600px] lg:max-w-full bg-white shadow-lg rounded-[12px]"
      v-for="item in Produtos.slice(0, 12)"
      :key="item.id"
    >

      <div class="flex">
        <img
          class="w-full object-cover"
          :src="item.imagemUrl"
          :alt="item.nomeImagem"
        />
      </div>


      <div class="flex flex-col gap-3 h-full text-start p-5">


        <div class="w-full text-end">
        <span
          v-if="item.exclusivoParaCertificado"
          class="inline-bloc bg-sky-100 text-lime-500 max-w-[175.8px] text-[0.75em] px-2 py-1 rounded"
        >
          Exclusivo para certificados
        </span>
        </div>


        <h1
          class="text-[1.125em] lg:text-[1.25em] font-[700] text-cyan-400 max-w-[327.25px]  "
        >
          {{ item.titulo }}
        </h1>

        <!-- Descrição -->
        <p
          class="text-[0.75em] lg:text-[0.875em] w-full max-w-[551px]  text-gray-500"
        >
          {{ item.descricao }}
        </p>

        <!-- Preço -->
        <p class="text-[0.875em] font-semibold text-gray-600">
          A partir de R$ {{ item.preco }}
        </p>

        <!-- Botão -->
        <RouterLink
          class="w-full max-w-[127.32px] lg:max-w-[137.48px] h-[35.5px] rounded-[30px] flex items-center justify-center text-[0.83em] text-white font-[500] bg-lime-500 hover:bg-lime-600 duration-300 mb-7"
          v-if="item.id"
          :key="item.id"  
          :to="{ name: 'MarketplaceDetalhe', params: { id: item.id } }"
        >
          Saiba Mais
        </RouterLink>
      </div>
    </div>
  </div>









<div
    class="md:grid md:grid-cols-2 md:grid-rows-4 place-items-center w-full gap-10 md:gap-3 lg:gap-7 hidden lg:hidden"
    v-if="Produtos && Produtos.length"
  >
    <div
      class="w-full h-[430px] xl:h-[600px] lg:max-w-full bg-white shadow-lg rounded-[12px]"
      v-for="item in Produtos.slice(0, 8)"
      :key="item.id"
    >

      <div class="flex relative lg:static">
        <img
          class="w-full object-cover h-[210px] md:h-[222px] lg:h-[277.5px]"
          :src="item.imagemUrl"
          :alt="item.nomeImagem"
        />
      </div>


      <div class="flex flex-col gap-3 h-full text-start p-5">


     
<div class="flex w-full justify-end">
  <span
  v-if="item.exclusivoParaCertificado"
  class="
    inline-block text-lime-500 bg-sky-100 backdrop-blur-sm
    text-[0.75em]  px-2 py-1 rounded relative bottom-15 max-w-[178px]
  "
>
  Exclusivo para certificados
</span>
</div>

        


        <h1
          class="text-[1.125em] lg:text-[1.25em] font-[700] text-cyan-400 max-w-[327.25px]  relative bottom-10"
        >
          {{ item.titulo }}
        </h1>

        <!-- Descrição -->
        <p
          class="text-[0.75em] lg:text-[0.875em] w-full max-w-[551px]  text-gray-500 relative bottom-10"
        >
          {{ item.descricao }}
        </p>

        <!-- Preço -->
        <p class="text-[0.875em] font-semibold text-gray-600 relative bottom-10">
          A partir de R$ {{ item.preco }}
        </p>

        <!-- Botão -->
        <RouterLink
          class="w-full max-w-[127.32px] lg:max-w-[137.48px] h-[35.5px] rounded-[30px] flex items-center justify-center text-[0.83em] text-white font-[500] bg-lime-500 hover:bg-lime-600 duration-300 mb-7 relative bottom-10"
          v-if="item.id"
          :key="item.id"  
          :to="{ name: 'MarketplaceDetalhe', params: { id: item.id } }"
        >
          Saiba Mais
        </RouterLink>
      </div>
    </div>
  </div>







  <div
    class="grid md:hidden md:grid-cols-2 md:grid-rows-4 place-items-center w-full gap-10 md:gap-3 lg:gap-7 "
    v-if="Produtos && Produtos.length"
  >
    <div
      class="w-full h-auto xl:h-[600px] lg:max-w-full bg-white shadow-lg rounded-[12px]"
      v-for="item in Produtos.slice(0, 5)"
      :key="item.id"
    >

      <div class="flex">
        <img
          class="w-full object-cover"
          :src="item.imagemUrl"
          :alt="item.nomeImagem"
        />
      </div>


      <div class="flex flex-col gap-3 h-full text-start p-5">


<div class="flex w-full justify-end">
  <span
  v-if="item.exclusivoParaCertificado"
  class="
    inline-block text-lime-500 bg-sky-100 backdrop-blur-sm
    text-[0.75em] px-2 py-1 rounded relative bottom-15 max-w-[178px]
  "
>
  Exclusivo para certificados
</span>
</div>


        <h1
          class="text-[1.125em] lg:text-[1.25em] font-[700] text-cyan-400 max-w-[327.25px]  relative bottom-5"
        >
          {{ item.titulo }}
        </h1>

        <!-- Descrição -->
        <p
          class="text-[0.75em] lg:text-[0.875em] w-full max-w-[551px] text-gray-500 relative bottom-5"
        >
          {{ item.descricao }}
        </p>

        <!-- Preço -->
        <p class="text-[0.875em] font-semibold text-gray-600 relative bottom-5">
          A partir de R$ {{ item.preco }}
        </p>

        <!-- Botão -->
        <RouterLink
          class="w-full max-w-[127.32px] lg:max-w-[137.48px] h-[35.5px] rounded-[30px] flex items-center justify-center text-[0.83em] text-white font-[500] bg-lime-500 hover:bg-lime-600 duration-300 mb-7 relative bottom-5"
          v-if="item.id"
          :key="item.id"  
          :to="{ name: 'MarketplaceDetalhe', params: { id: item.id } }"
        >
          Saiba Mais
        </RouterLink>
      </div>
    </div>
  </div>



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

onMounted(async () => {
  const response = await ProdutosServices.getAllProdutos()
  Produtos.value = response.data
})

</script>


