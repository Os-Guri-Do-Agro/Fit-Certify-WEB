<template>
<section class="w-full flex flex-col bg-sky-100 ">
    <div class="flex flex-col items-center md:items-stretch md:flex-row-reverse h-auto md:h-[383px] lg:h-[637px]">
      <div class="w-full overflow-hidden lg:overflow-visible h-[350px] md:h-full md:w-1/2">
          <img class="w-full min-h-[350px] md:min-h-full md:h-full object-cover object-bottom" :src="artigo?.imagensArtigo.find((i) => i.isBanner == false)?.imagemUrl" alt=""> 
      </div>

      <div class="w-full md:w-1/2 md:h-auto flex flex-col lg:items-center justify-center gap-[24px]  p-5 lg:p-10">
        <h2 class="text-[1.25em] md:text-[1.75em] lg:text-[2.5em] xl:text-[3em] font-[700] italic text-cyan-400
        w-full max-w-[361px] lg:max-w-[658px] 2xl:ml-12 mt-[27px] leading-[35px] lg:leading-[62px]">
          {{ artigo?.titulo }}
        </h2>
        <p class="text-[0.875em] lg:text-[1em] xl:text-[1.25em] leading-[26px] md:leading-[43px]
        w-full max-w-[330px] md:max-w-[325px] lg:max-w-[658px] xl:max-w-[658px] 2xl:ml-12 lg:pr-[24px]">
          {{ artigo?.subTitulo }}
        </p>

      </div>
    </div>
    </section>



    <section class="w-full flex flex-col items-center justify-center gap-5 p-5 lg:p-10">
      <div class="container">
        <div class="flex flex-col gap-20 ">
          <p class="text-[0.875em] lg:text-[1.25em] xl:text-[1.25em] leading-[32px] lg :leading-[43px] w-full max-h-[300px] overflow-y-auto opacity-90">
            {{ artigo?.introducao }}
          </p>


          <p class="text-[0.875em] lg:text-[1.25em] xl:text-[1.25em] leading-[32px] lg :leading-[43px] w-full overflow-y-auto flex flex-col gap-3 opacity-90 max-h-[400px] lg:max-h-full">
            <span class="font-bold opacity-80 text-[1.5em]">Duis aute irure dolor</span>
            {{ artigo?.conteudo }}
          </p>
        </div>


        <div class="container flex flex-col gap-5 mt-10">
            <div class="flex gap-10 items-start">
                <img class="w-8 lg:w-12" src="../assets/artigo-detalhe-imgs/citacao-left.jpg" alt="">
                <div class="w-full h-[3px] bg-sky-100"></div>
            </div>
            <p class="text-[0.875em] lg:text-[1.375em] font-[600] opacity-90 leading-[32px] lg:leading-[43px] w-full text-center">
              {{ artigo?.citacao }}
            </p>

            <div class="flex gap-10 items-end flex-row-reverse">
                <img class="w-8 lg:w-12 rotate-180" src="../assets/artigo-detalhe-imgs/citacao-left.jpg" alt="">
                <div class="w-full h-[3px] bg-sky-100"></div>
            </div>
        </div>
      </div>

    </section>



    <section class="w-full flex flex-col items-center justify-center gap-5 p-5 lg:p-10">
      <div class="container">
        <div class="flex flex-col gap-20 ">
            <img class="w-full h-[350px] md:h-[595px] object-cover object-bottom" :src="artigo?.imagensArtigo.find((i) => i.isBanner == true)?.imagemUrl" alt="">
          <p class="text-[0.875em] lg:text-[1.25em] xl:text-[1.25em] leading-[32px] lg :leading-[43px] w-full max-h-[300px] overflow-y-auto opacity-90">
            {{ artigo?.introducao }}
          </p>
        </div>
      </div>
    </section>



    <section class="w-full flex flex-col items-center gap-5 p-5 lg:p-10">
        <div class="container">
            <div class="w-full h-[3px] bg-cyan-400 mb-7"></div>
            <div class="flex justify-between gap-7 flex-wrap">
                <div class="flex items-center justify-center  gap-7">
                    <img class="rounded-[50%]" src="../assets/artigo-detalhe-imgs/perfil.jpg" alt="">
                    <div class="flex flex-col">
                        <span class="font-semibold text-[1.5em]">Por Nome Sobrenome</span>
                        <span>Médica do esporte</span>
                        <span>email@email.com</span>
                    </div>
                </div>


                <div class="flex gap-7 items-center justify-center flex-wrap">
                    <button class="w-[220px] h-[43px] rounded-[50px] bg-sky-100 flex items-center justify-center cursor-pointer hover:scale-105 hover:bg-sky-200 duration-300">
                        <RouterLink to="/contato" class="text-[0.875em] font-semibold text-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="black" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                            </svg>
                        </RouterLink>                        
                    </button>

                    <button class="w-[220px] h-[43px] rounded-[50px] bg-sky-100 flex items-center justify-center cursor-pointer hover:scale-105 hover:bg-sky-200 duration-300">
                        <RouterLink to="/contato" class="text-[0.875em] font-semibold text-cyan-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="Black" className="bi bi-share" viewBox="0 0 16 16">
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                            </svg>
                        </RouterLink>                        
                    </button>
                </div>
            </div>

            <div class="w-full h-[3px] bg-cyan-400 mt-7"></div>
        </div>
    </section>



    <section class="w-full flex items-center justify-center mt-10">
        <div class="container p-5 lg:p-10 flex items-center justify-center">
            <ArtigoDetalhe @refresh-page="refreshPage" />
        </div>
    </section>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref, watch } from 'vue'
import ArtigoService from '../services/Artigos/artigos-service'
import { RouterLink } from 'vue-router'
import ArtigoDetalhe from '../components/Artigo-Detalhe-Components/ArtigosDet.vue'

const route = useRoute();
const router = useRouter();
const artigo = ref(null)

const loadArtigo = async (id) => {
  const response = await ArtigoService.getByArtigoId(id)
  artigo.value = response.data
}

const refreshPage = async (id) => {
  await router.push({ name: 'ArtigoDetalhe', params: { id } })
}

watch(() => route.params.id, (newId) => {
  if (newId) loadArtigo(newId)
}, { immediate: true })

onMounted(() => {
  loadArtigo(route.params.id)
})

</script>