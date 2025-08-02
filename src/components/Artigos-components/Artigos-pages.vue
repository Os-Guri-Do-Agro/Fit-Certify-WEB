<template>

    <div class="">
        <div class="" v-for="item in Artigos.data.slice(0,4)">
            <img :src=item.imagemUrl alt="">
            <h1>{{ item.titulo }}</h1>
        </div>
    </div>
    
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ArtigoService from '../../services/Artigos/artigos-service'

    const Artigos = ref<any>([])
    onMounted(async() => {
        Artigos.value = await ArtigoService.getAllArtigos()

})

</script>