<template>
<section class="relative w-full bg-sky-100 flex justify-center overflow-hidden flex-col-reverse md:flex-row">
  <div class="container relative z-10 flex flex-col justify-center gap-6 p-5 lg:p-10 items-center md:items-start text-center md:text-start">
    <h2 class="text-[1.25em] md:text-[1.75em] lg:text-[2.5em] xl:text-[3em] font-[700] italic text-cyan-400
        w-full max-w-[301px] lg:max-w-[388px] mt-[27px] leading-[35px] lg:leading-[62px]">
      {{ produto?.titulo }}
    </h2>

    <div class="w-full max-w-[361px] lg:max-w-[658px] flex items-start">
      <div class="w-full md:max-w-[206px] lg:max-w-[276px] h-[77px] rounded-[20px] bg-white flex items-center justify-center">
        <img class="object-cover md:w-[150px] lg:w-[171px]" src="../assets/market-detalhes-imgs/LogoDasa 1.jpg" alt="">
      </div>
    </div>

    <p class="text-[0.875em] lg:text-[1em] xl:text-[1.25em] leading-[26px] md:leading-[43px]
        w-full max-w-[658px] text-center md:text-start">
      {{ produto?.subTitulo }}
    </p>

    <span class="hidden text-center md:text-start" v-if="produto?.condicaoEspecial">
      Sem condição especial
    </span>
    <span class="text-[0.875em] lg:text-[1em] xl:text-[1.25em] leading-[26px] md:leading-[43px]
        w-full max-w-[658px] font-[700] opacity-65 text-center md:text-start" v-else>
      Desconto de 20%
    </span>

    <div class="flex flex-col md:flex-row w-full xl:max-w-[500px] 2xl:max-w-[658px] items-stretch md:items-end flex-wrap gap-3 md:gap-5 justify-between">
      <button class="text-white font-semibold bg-lime-500 w-full md:max-w-[211px] h-[55px] rounded-[30px] cursor-pointer hover:bg-lime-600 transition-colors duration-300">
        Gerar cupom
      </button>
      <span class="w-full md:max-w-[253px] min-h-[36px] bg-white text-lime-500 rounded-[30px] flex items-center justify-center">
        Exclusivo para certificados
      </span>
    </div>
  </div>

  <div class="absolute inset-y-0 right-0 w-1/2 hidden md:block">
    <img
      class="w-full h-full object-cover object-bottom"
      :src="produto?.imagemUrl"
      alt=""
    />
  </div>

  <div class="w-full md:hidden">
    <img
      class="w-full object-cover object-bottom min-h-[200px]"
      :src="produto?.imagemUrl"
      alt=""
    />
  </div>
</section>




    <section class="w-full flex justify-center">
        <div class=" container flex flex-col gap-15 p-5 md:p-10">
            <div class="flex flex-col gap-3">
                <span class="text-[0.875em] lg:text-[1em] xl:text-[1.5em] leading-[26px] md:leading-[43px]
        w-full max-w-[330px] md:max-w-[325px] lg:max-w-[658px] xl:max-w-[658px] font-[700] opacity-80">Descrição</span>
                <p class="text-[0.875em] lg:text-[1em] xl:text-[1.25em] leading-[26px] md:leading-[43px]">
                    {{ produto?.descricao }}
                </p>
            </div>


            <div class="w-full h-[2px] bg-cyan-400"></div>

            <div class="flex flex-col gap-3">
                <span class="text-[0.875em] lg:text-[1em] xl:text-[1.5em] leading-[26px] md:leading-[43px]
        w-full max-w-[330px] md:max-w-[325px] lg:max-w-[658px] xl:max-w-[658px] font-[700] opacity-80">Orientação</span>
                <p class="text-[0.875em] lg:text-[1em] xl:text-[1.25em] leading-[26px] md:leading-[43px]">
                    {{ produto?.orientacao }}
                </p>
            </div>


            <div class="w-full h-[2px] bg-cyan-400"></div>

            <div class="flex flex-col gap-3">
                <span class="text-[0.875em] lg:text-[1em] xl:text-[1.5em] leading-[26px] md:leading-[43px]
        w-full max-w-[330px] md:max-w-[325px] lg:max-w-[658px] xl:max-w-[658px] font-[700] opacity-80">{{ empresa?.nome}}</span>
                <p class="text-[0.875em] lg:text-[1em] xl:text-[1.25em] leading-[26px] md:leading-[43px]">
                    {{ empresa?.sobre }}
                </p>
            </div>
        </div>        
    </section>



    <section class="w-full flex justify-center bg-sky-50 ">
        <div class=" container flex flex-col gap-5 p-5 md:p-10">
            <div class="flex items-center gap-4 flex-col md:flex-row">
                <div class="">
            <span class="text-[0.875em] lg:text-[1em] xl:text-[1.5em] leading-[26px] md:leading-[43px]
        w-full max-w-[330px] md:max-w-[325px] lg:max-w-[658px] xl:max-w-[658px] font-[700] opacity-80">
                Avaliações
            </span>                    
                </div>

                <div class="flex gap-1">
            <img class="w-[37px] h-[37px]" src="../assets/market-detalhes-imgs/stars.png" alt="">     
            <img class="w-[37px] h-[37px]" src="../assets/market-detalhes-imgs/stars.png" alt=""> 
            <img class="w-[37px] h-[37px]" src="../assets/market-detalhes-imgs/stars.png" alt=""> 
            <img class="w-[37px] h-[37px]" src="../assets/market-detalhes-imgs/stars.png" alt=""> 
            <img class="w-[37px] h-[37px]" src="../assets/market-detalhes-imgs/stars.png" alt="">                 
                </div>

               
            </div>


            <div class="w-full flex flex-col gap-5">
                <div class="flex items-center gap-5">
                    <img class="w-[81px] h-[81px] rounded-[50%]" src="../assets/market-detalhes-imgs/perfil.jpg" alt="">
                    <span class="font-semibold text-[1.25em]">Nome Sobrenome</span>
                </div>

                <div class="flex flex-col gap-3">
                    <!-- <span>{{ avaliacao?.estrelas }}</span> -->
                <div class="flex gap-1">
            <img class="w-[37px] h-[37px]" src="../assets/market-detalhes-imgs/stars.png" alt="">     
            <img class="w-[37px] h-[37px]" src="../assets/market-detalhes-imgs/stars.png" alt=""> 
            <img class="w-[37px] h-[37px]" src="../assets/market-detalhes-imgs/stars.png" alt=""> 
            <img class="w-[37px] h-[37px]" src="../assets/market-detalhes-imgs/stars.png" alt=""> 
            <img class="w-[37px] h-[37px]" src="../assets/market-detalhes-imgs/stars.png" alt="">                 
                </div>

                <div class="">
                    <p class="text-[0.875em] lg:text-[1em] xl:text-[1.25em] leading-[26px] md:leading-[43px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    </p>
                </div>

                <div class="flex gap-5">
                    <div class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
                    </div>
                    <div class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share2-icon lucide-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                    </div>

                </div>
                </div>






                <div class="flex items-center gap-5 mt-20">
                    <img class="w-[81px] h-[81px] rounded-[50%]" src="../assets/market-detalhes-imgs/perfil.jpg" alt="">
                    <span class="font-semibold text-[1.25em]">Nome Sobrenome</span>
                </div>

                <div class="flex flex-col gap-3">
                    <!-- <span>{{ avaliacao?.estrelas }}</span> -->
                <div class="flex gap-1">
            <img class="w-[37px] h-[37px]" src="../assets/market-detalhes-imgs/stars.png" alt="">     
            <img class="w-[37px] h-[37px]" src="../assets/market-detalhes-imgs/stars.png" alt=""> 
            <img class="w-[37px] h-[37px]" src="../assets/market-detalhes-imgs/stars.png" alt=""> 
            <img class="w-[37px] h-[37px]" src="../assets/market-detalhes-imgs/stars.png" alt=""> 
            <img class="w-[37px] h-[37px]" src="../assets/market-detalhes-imgs/stars.png" alt="">                 
                </div>

                <div class="">
                    <p class="text-[0.875em] lg:text-[1em] xl:text-[1.25em] leading-[26px] md:leading-[43px]">
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa   a               
                    </p>
                </div>

                <div class="flex gap-5">
                    <div class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
                    </div>
                    <div class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share2-icon lucide-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                    </div>

                </div>
                </div>

            </div>

            
        </div>
    </section>



    <section class="w-full flex justify-center">
        <div class=" container flex flex-col gap-5 p-5 md:p-10">
            <MarketDetalhes @refresh-page="refreshPage"/>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProdutosServices from '../services/marketplace/marketplace-services'
import MarketDetalhes from '../components/Marketp-Detalhes-components/MarketDetalhes.vue'

const route = useRoute()
const router = useRouter()

const produto = ref(null)
const empresa = ref(null)


const loadProduto = async (id) => {
  try {
    const response = await ProdutosServices.getProdutoById(id)
    produto.value = response.data
    empresa.value = response.data?.empresa

  } catch (error) {
    console.error('Erro ao carregar produto:', error)
  }
}

const refreshPage = async (id) => {
  await router.push({ name: 'MarketDetalhes', params: { id } })
}

watch(
  () => route.params.id, (newId) => {
  if (newId) loadProduto(newId)
}, { immediate: true })

</script>
