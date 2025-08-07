<template>
  <div class="w-full h-screen flex flex-col lg:flex-row">
    <div class="lg:w-1/3 lg: bg-sky-400 flex flex-col md:flex-row lg:flex-col justify-center items-center gap-15 p-8">
        <div class="w-full max-w-[364px] items-center flex md:justify-center lg:justify-start">
          <RouterLink to="/" class="flex items-center">            
          <img class="w-[163px] h-[180px] " src="../assets/login-imgs/logo-fit.png" alt="">
          </RouterLink>
        </div>

        <div class=" w-full max-w-[364px] flex flex-col gap-5">
          <h1 class="text-[1.25em] md:text-[1.625em] text-white italic leading-[25px] md:leading-[36px] font-semibold">Comece agora sua jornada com mais saúde e performance.</h1>
          <p class="text-[0.9em] md:text-[1.25em] leading-[25px] md:leading-[36px] text-white">Criar sua conta na FitCertify365 é rápido, seguro e gratuito.Com ela, você poderá emitir certificados, acompanhar seus marcadores de saúde e aproveitar benefícios exclusivos no nosso marketplace.</p>
        </div>
    </div>

    <div class="lg:w-2/3 flex flex-col p-5 md:p-10 justify-center gap-5">
       <div class="w-full">
        <span class="text-[1.25em] md:text-[1.65em] font-bold text-lime-500 w-[500px]">1. Informações Pessoais</span>
       </div>

       <div class="grid md:grid-cols-[3fr_1fr] gap-5 w-full grid-cols-1 :grid-cols-1">
        <label class="flex-1" for="nomeCompleto">
          <span class="text-[0.9em] font-semibold text-gray-700">Nome Completo:</span>
          <input
            id="nomeCompleto"
            type="text"
            required
            class="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </label>

        <label class="flex-3" for="cpf">
          <span class="text-[0.9em] font-semibold text-gray-700">CPF</span>
          <input
            id="cpf"
            type="text"
            required
            class="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </label>
       </div>

       <div class="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-5 w-full">
        <label class="flex-1" for="telefone">
          <span class="text-[0.9em] font-semibold text-gray-700">Telefone</span>
          <input
            id="telefone"
            type="tel"
            required
            class="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </label>

        <label class="flex-1" for="email">
          <span class="text-[0.9em] font-semibold text-gray-700">E-mail</span>
          <input
            id="email"
            type="email"
            required
            class="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </label>

        <label class="flex-1" for="dataNascimento">
          <span class="text-[0.9em] font-semibold text-gray-700">Data de nascimento:</span>
          <input
            id="dataNascimento"
            type="text"
            required
            class="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </label>
       </div>

       <div class="grid grid-cols-1 grid-rows-3 gap-5">
        <label class="flex-1" for="altura">
          <span class="text-[0.9em] font-semibold text-gray-700">Altura (cm):</span>
          <input
            id="altura"
            type="number"
            required
            class="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </label>

        <label class="flex-1" for="peso">
          <span class="text-[0.9em] font-semibold text-gray-700">Peso (kg):</span>
          <input
            id="peso"
            type="number"
            required
            class="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </label>

        <label class="flex-1" for="telefone2">
          <span class="text-[0.9em] font-semibold text-gray-700">Telefone</span>
          <input
            id="telefone2"
            type="tel"
            required
            class="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </label>

        <label class="flex-1" for="atividadeFisica">
          <span class="text-[0.9em] font-semibold text-gray-700">Pratica atividade física regularmente?</span>
          <input
            id="atividadeFisica"
            type="text"
            required
            class="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
        </label>
       </div>

       <div class="w-full flex justify-end ">
          <button class=" w-full md:w-[237px] h-[43px] bg-sky-400 text-white rounded-[6px] cursor-pointer hover:bg-sky-500 duration-300 transition-colors text-[0.9em]">
             Próximo
          </button>
       </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';



</script>
