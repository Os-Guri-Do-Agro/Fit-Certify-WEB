<template>
  <!-- Skeleton Loading -->
  <div v-if="!Artigos.data || Artigos.data.length === 0" class="grid md:grid-cols-3 md:grid-rows-1 place-items-center w-full gap-10 md:gap-3 lg:gap-7 justify-center">
    <div v-for="n in 3" :key="n" class="w-full md:max-w-[558px] lg:max-w-full min-h-[680px] md:min-h-[700px] lg:min-h-[850px] xl:min-h-[750px] animate-pulse">
      
      <div class="w-full h-[433px] bg-gray-300 rounded-lg"></div>
      
      <div class="flex flex-col justify-between gap-3 h-full mt-5 lg:mt-7 min-h-[230px] md:min-h-[280px] lg:min-h-[320px]">
        <div class="h-[40px] lg:h-[52px] bg-gray-300 rounded w-full max-w-[525px]"></div>
        <div class="h-[60px] lg:h-[80px] bg-gray-300 rounded w-full max-w-[551px]"></div>
        <div class="h-[36px] lg:h-[40px] bg-gray-300 rounded w-[550px] lg:w-[212px]"></div>
      </div>

    </div>
  </div>

  <!-- Artigos Reais -->
  <div class="grid md:grid-cols-3 md:grid-rows-1 place-items-center w-full gap-10 md:gap-3 lg:gap-7 justify-center"
    v-else>
    <div class="w-full md:max-w-[558px] lg:max-w-full min-h-[680px] md:min-h-[700px] lg:min-h-[850px] xl:min-h-[750px]" v-for="item in Artigos.data.slice(0, 3)" :key="item.id">
      <div class="flex">
        <img class="w-full max-w-[558px] h-[433px] object-cover"
          :src="item.imagensArtigo.find((i: any) => i.isBanner == false)?.imagemUrl" alt="">
      </div>

      <div class="flex flex-col justify-between gap-3 h-full mt-5 lg:mt-7 min-h-[230px] md:min-h-[280px] lg:min-h-[320px]">
        <div class="">
        <h1
          class="text-[1.3em] lg:text-[2.25em] font-[600] italic text-cyan-400 max-w-[525px] lg:leading-[52px] md:leading-[30px] leading-[26px] line-clamp-3 overflow-hidden">
          {{ getLocalizedField(item, 'titulo') }}</h1>          
        </div>

        <div class="">
        <p class="text-[0.85em] lg:text-[1.25em] w-full max-w-[551px] leading-[26px] lg:leading-[36px] line-clamp-2 overflow-hidden">{{ getLocalizedField(item, 'subTitulo') }}</p>          
        </div>

        <div class="">
        <RouterLink :to="{ name: 'ArtigoDetalhe', params: { id: item.id } }"
          class="w-full max-w-[150px] lg:max-w-[212.6px] h-[36.3px] rounded-[30px] flex items-center justify-center text-[0.9em] text-cyan-400 font-[500] border border-cyan-400 duration-300 hover:bg-cyan-400 hover:text-white cursor-pointer"
          @click="emit('refresh-page', item.id)">
          {{ t('artigos.button') }}
        </RouterLink>          
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ArtigoService from '../../services/Artigos/artigos-service'
import { useI18n } from '../../composables/useI18n';

const { t, currentLocale } = useI18n()

function getLocalizedField(item: any, field: any) {
  return currentLocale.value === 'en' ? item[`en_${field}`] : item[field]
}

const emit = defineEmits<{
  'refresh-page': [id: string]
}>()

const Artigos = ref<{ data: any[] }>({ data: [] })

onMounted(async () => {
  Artigos.value = await ArtigoService.getAllArtigos()
})
</script>
