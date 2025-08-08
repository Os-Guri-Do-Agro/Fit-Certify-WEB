<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>

    <footer class="w-full flex items-center justify-center flex-col mt-[52px]">

            <!-- <div class="hidden lg:flex w-full container p-5 md:p-10 justify-end gap-[10px]">
                <div class="">
                    <a href="#">
                        <img class="w-full max-w-[133.9px] h-[44.6px]" src="../assets/footer-imgs/app-store-01.jpg" alt=""></img>
                    </a>
                </div>
                <div class="">
                    <a href="#">
                        <img class="w-full max-w-[133.9px] h-[44.6px]"  src="../assets/footer-imgs/app-store-01.jpg" alt="">
                    </a>
                </div>                
            </div> -->

        <section class="w-full container flex items-end justify-center p-5 md:p-10 mb-[32px] md:mb-[52px]">
            <div class="w-full h-full flex flex-1 flex-col lg:flex-row gap-[10px] lg:gap-[91px] items-start md:items-center justify-center">
                <RouterLink class="text-[0.875em] md:text-[0.9375em] text-zinc-500 font-[700] hover:text-cyan-400" to='/quemsomos'>Quem somos</RouterLink>
                <RouterLink class="text-[0.875em] md:text-[0.9375em] text-zinc-500 font-[700] hover:text-cyan-400" to='/certificados'>Certificados</RouterLink>
                <RouterLink class="text-[0.875em] md:text-[0.9375em] text-zinc-500 font-[700] hover:text-cyan-400" to='/contato'>Contato</RouterLink>
                <!-- <RouterLink class="lg:hidden mt-[10px]" to="#">
                    <img class="w-full max-w-[108px] h-[38px]" src="../assets/footer-imgs/app-store-01.jpg" alt="image">
                </RouterLink>                 -->
            </div>

            <div class="flex flex-1 w-[99px] h-[140px] lg:h-[128px] items-center justify-center">
                <RouterLink to='/'>
                <img class="w-full max-w-[83px] h-[107px]" src="/Logo-pequena.png" alt="">
                </RouterLink>
            </div>

            <div class="w-full h-full flex flex-1 flex-col lg:flex-row gap-[10px] lg:gap-[91px] items-end md:items-center justify-center">
                <RouterLink class="text-[0.875em] md:text-[0.9375em] text-zinc-500 font-[700] hover:text-cyan-400" to='/contato'>SAC</RouterLink>
                <RouterLink class="text-[0.875em] md:text-[0.9375em] text-zinc-500 font-[700] hover:text-cyan-400" to='/certificados#faq'>FAQ</RouterLink>
                <RouterLink class="text-[0.875em] md:text-[0.9375em] text-zinc-500 font-[700] hover:text-cyan-400" to='/marketplace'>Parceiros</RouterLink>
                <!-- <RouterLink class="lg:hidden mt-[10px]" to="#">
                    <img class="w-full max-w-[108px] h-[38px]" src="../assets/footer-imgs/app-store-01.jpg" alt="image">
                </RouterLink> -->
            </div>
        </section>

        <section class="w-full h-[171px] lg:h-[206px] flex items-center justify-center p-5 md:p-[10px] bg-cyan-400">
            <div class="w-full flex-col container flex items-center justify-center gap-[31px] md:gap-[62px]">
            <div class="flex gap-[41px]">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                </a>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
            </div>

            <span class="text-white text-[0.75em] lg:text-[0.9em]">
                © FitCertify365 2025
            </span>
            </div>
        </section>

    </footer>
</template>

<style scoped>

section svg {
    transition: all 0.2s ease-in-out;
}

section svg:hover {
    transform: scale(1.1);
}

@media (min-width: 768px) and (max-width: 1024px) {
    section svg {
        width: 40px;
        height: auto;
    }
}

/* Desktop (≥1025px) */
@media (min-width: 1025px) {
    section svg {
        width: 48px;
        height: auto;      
    }
}
</style>
