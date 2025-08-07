<template>
  <div class="flex h-screen flex-col md:flex-row overflow-x-hidden">

    <div class="w-full md:max-w-[553px] flex flex-col justify-center items-center bg-cyan-400 p-8">
      <div class="max-w-xs w-full">

        <div class="mb-8">
          <RouterLink to="/" class="flex items-center">
          <img class="w-[163px]" src="../assets/login-imgs/logo-fit.png" alt="">
          </RouterLink>
        </div>

        <p class="text-white mb-6">Bem-vindo! Faça seu login para acessar sua conta.</p>

        <form @submit.prevent="handleSubmit">
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="w-full mb-4 px-4 py-2 rounded bg-white placeholder-gray-400 text-gray-800 focus:outline-none"
          />
          <input
            v-model="password"
            type="password"
            placeholder="Senha"
            class="w-full mb-6 px-4 py-2 rounded bg-white placeholder-gray-400 text-gray-800 focus:outline-none"
          />
          <RouterLink to="/"
            type="submit"
            class="w-full flex items-center justify-center md:max-w-[108px] h-[40px] md:h-[47px] bg-lime-500 text-white font-semibold rounded hover:bg-lime-600 transition cursor-pointer duration-300"
          >
            Entrar
          </RouterLink>
        </form>
      </div>
    </div>

    <div class="w-full h-full md:h-auto bg-[url('./assets/login-imgs/banner.jpg')] bg-cover bg-center"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const email = ref('');
const password = ref('');

function handleSubmit() {
  console.log('Email:', email.value);
  console.log('Senha:', password.value);
}
</script>
