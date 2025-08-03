<template>
        <section class="bg-[url('/src/assets/market-imgs/banner-01.jpg')] w-full h-[128.4px] md:h-[263px] lg:h-[397px] bg-left lg:bg-center bg-cover flex justify-center items-center ">
        <div class="w-full container flex items-center justify-center">
            <div class="w-full max-w-[261px] h-[53px] md:max-w-[659px] md:h-[82px] lg:max-w-[728px] lg:h-[131.1px] bg-cyan-400 transform -skew-x-12 flex items-center justify-center text-center text-white font-[600] italic">
                <h1 class="text-[1.625em] md:text-[2.5em] lg:text-[4.5em]">
                    Marketplace
                </h1>
            </div>
        </div>
    </section>



    <section class="w-full flex">
        <div class="w-full h-[115px] lg:h-[240px] flex justify-center items-center bg-sky-50">
            <div class="container w-full p-5 md:p-10">
            <h2 class="text-[1.375em] md:text-[1.5em] lg:text-[2.25em] text-cyan-400 font-[600] italic leading-[34px]  text-center">
                Vantagens para quem tem saúde em dia
            </h2>                
            </div>
        </div>
    </section>



    <section class="flex flex-col items-center justify-center pb-10">
        <div class="w-full flex flex-col justify-center items-center p-5 md:p-10 lg:h-[223px] bg-white">
            <p class="text-[1em] lg:text-[1.375em] md:text-center leading-[30px] md:leading-[35px] max-h-[205px] md:max-h-full overflow-scroll md:overflow-auto">
                Atletas que emitem certificados ou utilizam o painel de marcadores têm acesso a condições especiais em produtos e serviços selecionados no nosso marketplace. A FitCertify365 conecta saúde, performance e marcas parceiras para que você treine, cuide e evolua com mais vantagens.
            </p>
        </div>
  </section>    



        <section class="bg-sky-50 w-full flex justify-center p-5 md:p-10">
        <div class="container flex flex-col items-center">
            <div class="flex flex-col text-center gap-5 w-full items-center">
                <span class="text-[1.5em] text-cyan-400 font-[700]">
                    Filtrar por
                </span>

                <div class="flex gap-5 flex-col md:flex-row w-full md:justify-center items-center">
                    <input class="p-5 w-full md:max-w-[200px] h-[39px] border-1 border-gray-300 bg-white rounded-[8px] text-[0.8em] placeholder-black" type="text" placeholder="Categoria" id="categoria" name="categoria">
                    <input class="p-5 w-full md:max-w-[200px] h-[39px] border-1 border-gray-300 bg-white rounded-[8px] text-[0.8em] placeholder-black" type="text" placeholder="Faixa de Preço" id="preco" name="preco">
                    <input class="p-5 w-full md:max-w-[200px] h-[39px] border-1 border-gray-300 bg-white rounded-[8px] text-[0.8em] placeholder-black" type="text" placeholder="Condição especial" id="condicao" name="condicao">
                </div>


                <div class="w-full mt-5">
                    <Produtos />
                </div>
            </div>
        </div>
       </section>





       <section class="w-full flex justify-center bg-sky-50 p-5 md:p-10">
            <div class="container flex flex-col gap-5 md:mb-20">
                <div class="w-full h-[246px] bg-gray-300"></div>
                <div class="w-full h-[246px] bg-gray-300 hidden md:flex"></div>

                  <div class="w-full flex justify-center h-20 items-center gap-3 md:hidden">
    <div class="w-3 h-3 bg-cyan-400 rounded-2xl cursor-pointer"></div>
    <div class="w-3 h-3 bg-cyan-200 rounded-2xl cursor-pointer"></div>
    <div class="w-3 h-3 bg-cyan-200 rounded-2xl cursor-pointer"></div>
  </div>
            </div>

       </section>
</template>


<script setup>
    import Produtos from '../components/marketplace-components/produtos-api.vue'
</script>