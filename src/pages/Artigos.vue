<template>
    <section
        class="bg-[url('/src/assets/artigos-imgs/banner-01.jpg')] w-full h-[128.4px] md:h-[263px] lg:h-[397px] bg-left lg:bg-center bg-cover flex justify-center items-center ">
        <div class="w-full container flex items-center justify-center">
            <div
                class="w-full max-w-[261px] h-[53px] md:max-w-[659px] md:h-[82px] lg:max-w-[728px] lg:h-[131.1px] bg-cyan-400 transform -skew-x-12 flex items-center justify-center text-center text-white font-[600] italic">
                <h1 class="text-[1.625em] md:text-[2.5em] lg:text-[4.5em]">
                    {{ t('artigos.title') }}
                </h1>
            </div>
        </div>
    </section>



    <section class="w-full flex">
        <div class="w-full h-[115px] lg:h-[240px] flex justify-center items-center bg-sky-50">
            <div class="container w-full p-5 md:p-10">
                <h2
                    class="text-[1.375em] md:text-[1.5em] lg:text-[2.25em] text-cyan-400 font-[600] italic leading-[34px]  text-center">
                    {{ t('artigos.subtitle') }}                </h2>
            </div>
        </div>
    </section>



    <section class="flex flex-col items-center justify-center pb-10">
        <div class="w-full flex flex-col justify-center items-center p-5 md:p-10 lg:h-[223px] bg-white">
            <p
                class="text-[1em] lg:text-[1.375em] md:text-center leading-[30px] md:leading-[35px] max-h-[205px] md:max-h-full overflow-scroll md:overflow-auto">
                {{ t('artigos.text') }}            </p>
        </div>
    </section>



    <section class="flex w-full h-full justify-center p-5 md:p-10">


        <div class="container flex w-full h-auto justify-between">

            <div class="flex flex-col lg:mr-5 gap-10 w-full">
                <div class="flex lg:hidden flex-col items-center gap-5">
                    <h3 class="text-cyan-400 mt-2 md:text-[1em] lg:text-[1.125em] font-[600]">
                        {{ t('artigos.categorias') }}
                    </h3>
                    <Listbox v-model="selectedPerson" @update:modelValue="selecionarCategoria(selectedPerson.id)">
                        <ListboxButton
                            class="w-full max-w-[400px] text-cyan-400 font-semibold p-3 shadow-lg border-1 border-cyan-400 rounded-[30px] cursor-pointer">
                            {{ selectedPerson.id === null ? t('artigos.todasCategorias') : getLocalizedField(selectedPerson, 'nome') }}</ListboxButton>
                        <ListboxOptions
                            class="flex flex-col bg-gray-50 border-1 border-cyan-300 p-5 rounded-[12px] shadow-2xl w-full max-w-[400px]">
                            <ListboxOption 
                                class="cursor-pointer hover:bg-cyan-400 hover:text-white p-3 rounded-[8px]"
                                v-for="categoria in CategoriasArtigos" 
                                :key="categoria.id" 
                                :value="categoria"
                            >
                                {{ categoria.id === null ? t('artigos.todasCategorias') : getLocalizedField(categoria, 'nome') }}
                            </ListboxOption>
                        </ListboxOptions>
                    </Listbox>
                </div>

                <Pages :categoria-id="categoriaIdSelecionada" />
            </div>
            <div class="w-full max-w-[120px] md:max-w-[180px]  lg:max-w-[218.23px] hidden lg:flex flex-col">

                <div class="text-center flex flex-col gap-10">
                    <h3 class="text-cyan-400 mt-2 text-[0.9em] md:text-[1em] lg:text-[1.125em] font-[600]">
                        {{ t('artigos.categorias') }}
                    </h3>

                    <a 
                        v-for="categoria in CategoriasArtigos"
                        :key="categoria.id"
                        @click="selecionarCategoria(categoria.id)"
                        class="text-[0.9em] md:text-[1em] lg:text-[1.125em] duration-300 hover:text-cyan-400 cursor-pointer"
                    >
                        {{ categoria.id === null ? t('artigos.todasCategorias') : getLocalizedField(categoria, 'nome') }}
                    </a>
                </div>

                <div class="w-full bg-slate-300 h-[511.24px] mt-10"></div>
                <div class="w-full bg-slate-300 h-[230.14px] mt-10"></div>

            </div>

        </div>
    </section>


    <section class="flex lg:hidden">
        <div class="flex container flex-col gap-5 p-5 md:p-10">
            <div class="w-full bg-slate-300 h-[300.24px] mt-10"></div>
            <div class="w-full bg-slate-300 h-[230.14px] mt-10"></div>
        </div>
    </section>

</template>


<script setup>
import Pages from '../components/Artigos-components/Artigos-pages.vue'
import artigoService from  '../services/Artigos/artigos-service.ts'
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
import { onMounted, ref, computed } from 'vue'
import { useI18n } from '../composables/useI18n.ts'

const { t, currentLocale } = useI18n();
const CategoriasArtigos = ref([])
const selectedPerson = ref({ id: null, nome: '', en_nome: '' })
const categoriaIdSelecionada = ref(null)



function getLocalizedField(item, field) {
  return currentLocale.value === 'en' ? item[`en_${field}`] : item[field]
}

const selecionarCategoria = (categoriaId) => {
    categoriaIdSelecionada.value = categoriaId
}

onMounted(async () => {
   const response = await artigoService.getAllCategoriaArtigos()
   CategoriasArtigos.value = response.data || []
   
   // Adiciona "Todas as Categorias" no início
   const todasCategorias = { id: null, nome: '', en_nome: '' }
   CategoriasArtigos.value.unshift(todasCategorias)
   selectedPerson.value = todasCategorias
})

</script>
