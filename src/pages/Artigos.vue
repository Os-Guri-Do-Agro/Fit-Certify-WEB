<template>
        <section class="bg-[url('/src/assets/artigos-imgs/banner-01.jpg')] w-full h-[128.4px] md:h-[263px] lg:h-[397px] bg-left lg:bg-center bg-cover flex justify-center items-center ">
        <div class="w-full container flex items-center justify-center">
            <div class="w-full max-w-[261px] h-[53px] md:max-w-[659px] md:h-[82px] lg:max-w-[728px] lg:h-[131.1px] bg-cyan-400 transform -skew-x-12 flex items-center justify-center text-center text-white font-[600] italic">
                <h1 class="text-[1.625em] md:text-[2.5em] lg:text-[4.5em]">
                    Artigos
                </h1>
            </div>
        </div>
    </section>



    <section class="w-full flex">
        <div class="w-full h-[115px] lg:h-[240px] flex justify-center items-center bg-sky-50">
            <div class="container w-full p-5 md:p-10">
            <h2 class="text-[1.375em] md:text-[1.5em] lg:text-[2.25em] text-cyan-400 font-[600] italic leading-[34px]  text-center">
                Conteúdo confiável para quem leva o esporte a sério
            </h2>                
            </div>
        </div>
    </section>



    <section class="flex flex-col items-center justify-center pb-10">
        <div class="w-full flex flex-col justify-center items-center p-5 md:p-10 lg:h-[223px] bg-white">
            <p class="text-[1em] lg:text-[1.375em] md:text-center leading-[30px] md:leading-[35px] max-h-[205px] md:max-h-full overflow-scroll md:overflow-auto">
                Dicas, estudos e atualizações sobre saúde, prevenção, performance e tudo o que move quem vive o esporte.
            </p>
        </div>
  </section>    



  <section class="flex w-full">
        <div class="w-full">
            <Pages />
        </div>
  </section>
</template>


<script setup>
    import Pages from '../components/Artigos-components/Artigos-pages.vue'
</script>
