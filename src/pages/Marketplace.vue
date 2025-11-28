<template>
  <section
    class="bg-[url('/src/assets/market-imgs/banner-01.jpg')] w-full h-[128.4px] md:h-[263px] lg:h-[397px] bg-left lg:bg-center bg-cover flex justify-center items-center">
    <div class="w-full container flex items-center justify-center">
      <div
        class="w-full max-w-[261px] h-[53px] md:max-w-[659px] md:h-[82px] lg:max-w-[728px] lg:h-[131.1px] bg-cyan-400 transform -skew-x-12 flex items-center justify-center text-center text-white font-[600] italic">
        <h1 class="text-[1.625em] md:text-[2.5em] lg:text-[4.5em]">
          {{ t('marketplace.title')  }}
        </h1>
      </div>
    </div>
  </section>

  <section class="w-full flex">
    <div class="w-full h-[115px] lg:h-[240px] flex justify-center items-center bg-sky-50">
      <div class="container w-full p-5 md:p-10">
        <h2
          class="text-[1.375em] md:text-[1.5em] lg:text-[2.25em] text-cyan-400 font-[600] italic leading-[34px] text-center">
          {{ t('marketplace.subtitle')  }}
        </h2>
      </div>
    </div>
  </section>

  <section class="flex flex-col items-center justify-center pb-10">
    <div class="w-full flex flex-col justify-center items-center p-5 md:p-10 lg:h-[223px] bg-white">
      <p
        class="text-[1em] lg:text-[1.375em] md:text-center leading-[30px] md:leading-[35px] max-h-[205px] md:max-h-full overflow-scroll md:overflow-auto">
        {{ t('marketplace.text')  }}
      </p>
    </div>
  </section>

  <section class="bg-sky-50 w-full flex justify-center p-5 md:p-10">
    <div class="container flex flex-col items-center">
      <div class="flex flex-col text-center gap-5 w-full items-center">
        <span class="text-[1.5em] text-cyan-400 font-[700]">
          {{ t('marketplace.filtro')  }}
        </span>

        <div class="flex gap-5 flex-col md:flex-row w-full md:justify-center items-center">
          <div class="w-full md:max-w-[200px]">
            <el-select clearable v-model="categoriaSelecionada" :placeholder="t('marketplace.categoria')" style="width: 100%;" filterable>
              <el-option v-for="item in categoriasProduto" :key="item.id" :label="item.nome" :value="item.id" />
            </el-select>
          </div>
          <div class="w-full md:max-w-[200px]">
            <el-select clearable v-model="precoSelecionado" :placeholder="t('marketplace.price')" style="width: 100%;" filterable>
              <el-option v-for="item in opcaoPreco" :key="item.value" :label="item.nome" :value="item.value" />
            </el-select>
          </div>
          <div class="w-full md:max-w-[200px]">
            <el-select clearable v-model="condicaoSelecionada" :placeholder="t('marketplace.CondicaoEspecial')" style="width: 100%;"
              filterable>
              <el-option v-for="item in opcaoCondicaoEspecial" :key="item.value" :label="item.nome"
                :value="item.value" />
            </el-select>
          </div>
        </div>

        <div class="w-full mt-5">

          <Produtos :categoria="categoriaSelecionada" :preco="precoSelecionado" :condicaoEspecial="condicaoSelecionada" />
        </div>
      </div>
    </div>
  </section>

  <!-- <section class="w-full hidden md:flex justify-center bg-sky-50 p-5 md:p-10">
    <div class="container flex flex-col gap-5 md:mb-20">
      <div class="w-full h-[246px] bg-gray-300"></div>
      <div class="w-full h-[246px] bg-gray-300"></div>
      <div class="w-full h-[246px] bg-gray-300"></div>
    </div>
  </section> -->

  <section class="w-full flex md:hidden justify-center bg-sky-50 p-5 md:p-10">
    <Carousel />
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Produtos from '../components/marketplace-components/produtos-api.vue'
import Categoria from '../components/marketplace-components/market-categoria-select.vue'
import Preço from '../components/marketplace-components/market-preco-select.vue'
import Condicao from '../components/marketplace-components/market-condicao-select.vue'
import Carousel from '../components/marketplace-components/marketplace-carousel.vue'
import marketplaceServices from '../services/marketplace/marketplace-services'
import { useI18n } from '../composables/useI18n'
// refs dos selects
const categoriaSelecionada = ref()
const precoSelecionado = ref()
const condicaoSelecionada = ref()
const categoriasProduto = ref([])
const { t } = useI18n();
const opcaoCondicaoEspecial = [
  {
    value: true,
    nome: t('marketplace.condicaoEspecial'),
  },
]
const opcaoPreco = [
  {
    value: 50,
    nome: t('marketplace.ate50'),
  },
  {
    value: 100,
    nome: t('marketplace.ate100'),
  },
  {
    value: 200,
    nome: t('marketplace.ate200'),
  },
  {
    value: 1000,
    nome: t('marketplace.acima200'),
  },
]

onMounted(async () => {
  const response = await marketplaceServices.getAllCategoria()
  categoriasProduto.value = response.data || []
})

</script>

<style scoped>
.el-select-dropdown__item.is-selected {
  color: #88CE0D !important;
  font-weight: bold;
}
</style>
