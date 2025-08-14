<template>
  <div class="grid md:grid-cols-2 md:grid-rows-3 place-items-center w-full gap-10 md:gap-3 lg:gap-7 justify-center md:justify-baseline" v-if="Artigos.data && Artigos.data.length">
    <div class="w-full md:max-w-[558px] lg:max-w-full min-h-[680px] md:min-h-[700px] lg:min-h-[850px] xl:min-h-[750px]" v-for="item in Artigos.data.slice(0, 6)" :key="item.id">
        <div class="flex">
            <img class="w-full h-[350px] min-h-[433px] object-cover" :src="item.imagensArtigo.find((i: any) => i.isBanner == false)?.imagemUrl" alt="">        
        </div>

      <div class="flex flex-col justify-between gap-10 h-full mt-5 lg:mt-7 min-h-[200px] lg:min-h-[350px]">
        <div class="">
          <h1 class="text-[1.3em] lg:text-[2.25em] font-[600] italic text-cyan-400 max-w-[525px] lg:leading-[52px] md:leading-[30px] leading-[26px]">{{ item.titulo }}</h1>
        </div>
        <div class="">
          <p class="text-[0.85em] lg:text-[1.25em] w-full max-w-[551px] leading-[26px] lg:leading-[36px]">{{ item.subTitulo }}</p>          
        </div>


        <div class="">
                  <RouterLink
  class="w-full max-w-[150px] lg:max-w-[212.6px] h-[36.3px] rounded-[30px] flex items-center justify-center text-[0.9em] text-cyan-400 font-[500] border border-cyan-400 duration-300 hover:bg-cyan-400 hover:text-white"
  :to="{ name: 'ArtigoDetalhe', params: { id: item.id } }"
>
  LEIA MAIS
</RouterLink>
        </div>


      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ArtigoService from '../../services/Artigos/artigos-service'
import { RouterLink } from 'vue-router'

const Artigos = ref<{ data: any[] }>({ data: [] })

onMounted(async () => {
  Artigos.value = await ArtigoService.getAllArtigos()
})
</script>
