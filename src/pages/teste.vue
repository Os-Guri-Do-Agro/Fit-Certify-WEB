<template>
  <div>
    <!-- Grid de Cards -->
    <div class="grid md:grid-cols-3 md:grid-rows-1 place-items-center w-full gap-10 md:gap-3 lg:gap-7 justify-center"
         v-if="paginatedItems.length">
      <div class="w-full md:max-w-[558px] lg:max-w-full min-h-[680px] md:min-h-[700px] lg:min-h-[850px] xl:min-h-[750px]"
           v-for="item in paginatedItems" :key="item.id">
        <div class="flex">
          <img class="w-full max-w-[558px] h-[433px] object-cover"
               :src="item.imagensArtigo.find((i: any) => i.isBanner == false)?.imagemUrl" alt="">
        </div>

        <div class="flex flex-col justify-between gap-3 h-full mt-5 lg:mt-7 min-h-[230px] md:min-h-[280px] lg:min-h-[320px]">
          <div>
            <h1 class="text-[1.3em] lg:text-[2.25em] font-[600] italic text-cyan-400 max-w-[525px] lg:leading-[52px] md:leading-[30px] leading-[26px]">
              {{ item.titulo }}
            </h1>
          </div>

          <div>
            <p class="text-[0.85em] lg:text-[1.25em] w-full max-w-[551px] leading-[26px] lg:leading-[36px]">
              {{ item.subTitulo }}
            </p>
          </div>

          <div>
            <button
              class="w-full max-w-[150px] lg:max-w-[212.6px] h-[36.3px] rounded-[30px] flex items-center justify-center text-[0.9em] text-cyan-400 font-[500] border border-cyan-400 duration-300 hover:bg-cyan-400 hover:text-white cursor-pointer"
              @click="emit('refresh-page', item.id)">
              LEIA MAIS
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Paginação -->
    <div class="flex items-center md:justify-center gap-4 mt-6 flex-col md:flex-row mt-10 md:mt-20">
      <div class="flex md:hidden">
        <span class="flex items-center"> {{ currentPage }} - {{ totalPages }}</span>
      </div>

      <div class="flex  gap-4">
              <button @click="goToFirstPage" :disabled="currentPage === 1"
              className="border-1 border-cyan-400 text-cyan-400 cursor-pointer hover:bg-cyan-400 hover:text-white duration-300 w-17 h-12 flex items-center justify-center rounded-[6px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-left-icon lucide-chevrons-left"><path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/></svg></button>
      <button @click="prevPage" :disabled="currentPage === 1"
              className="border-1 border-cyan-400 text-cyan-400 cursor-pointer hover:bg-cyan-400 hover:text-white duration-300 w-17 h-12 flex items-center justify-center rounded-[6px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg></button>
      <span class="flex items-center hidden md:flex"> {{ currentPage }} - {{ totalPages }}</span>
      <button  @click="nextPage" :disabled="currentPage === totalPages"
              className="border-1 border-cyan-400 text-cyan-400 cursor-pointer hover:bg-cyan-400 hover:text-white duration-300 w-17 h-12 flex items-center justify-center rounded-[6px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg></button>
      <button @click="goToLastPage" :disabled="currentPage === totalPages"
              className="border-1 border-cyan-400 text-cyan-400 cursor-pointer hover:bg-cyan-400 hover:text-white duration-300 w-17 h-12 flex items-center justify-center rounded-[6px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-right-icon lucide-chevrons-right"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg></button>
      </div>


    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ArtigoService from '../services/Artigos/artigos-service'

const emit = defineEmits<{
  'refresh-page': [id: string]
}>()

// Dados
const Artigos = ref<{ data: any[] }>({ data: [] })

// Paginação
const currentPage = ref(1)
const itemsPerPage = 6

const totalPages = computed(() => Math.ceil(Artigos.value.data.length / itemsPerPage))
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return Artigos.value.data.slice(start, end)
})

// Funções de navegação
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

const goToFirstPage = () => {
  currentPage.value = 1
}

const goToLastPage = () => {
  currentPage.value = totalPages.value
}

// Buscar artigos
onMounted(async () => {
  Artigos.value = await ArtigoService.getAllArtigos()
})
</script>
