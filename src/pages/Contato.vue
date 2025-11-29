<script setup>
import { RouterLink } from 'vue-router';
import { useI18n } from '../composables/useI18n';
import contatoService from '../services/contato/contato-service';
import { useToast } from 'primevue/usetoast';
import { ref, computed } from 'vue';

const { t } = useI18n();
const toast = useToast();
const loading = ref(false);

const form = ref({
  nome: '',
  email: '',
  telefone: '',
  assunto: '',
  mensagem: '',
})

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const isFormValid = computed(() => {
  return form.value.nome.trim() && 
         form.value.email.trim() && 
         form.value.telefone.trim() && 
         form.value.assunto.trim() && 
         form.value.mensagem.trim()
})

const enviarEmail = async() => {
  if (!form.value.nome.trim() || !form.value.email.trim() || !form.value.telefone.trim() || !form.value.assunto.trim() || !form.value.mensagem.trim()) {
    toast.add({
      severity: 'warn',
      summary: 'Atenção',
      detail: 'Todos os campos são obrigatórios',
      life: 3000
    })
    return
  }

  if (!isValidEmail(form.value.email)) {
    toast.add({
      severity: 'warn',
      summary: 'Atenção',
      detail: 'Por favor, insira um email válido',
      life: 3000
    })
    return
  }

  if (form.value.telefone.length < 15) {
    toast.add({
      severity: 'warn',
      summary: 'Atenção',
      detail: 'Por favor, insira um telefone válido',
      life: 3000
    })
    return
  }

  loading.value = true;
  
  try {
    const data = {
      nome: form.value.nome,
      email: form.value.email,
      telefone: form.value.telefone,
      assunto: form.value.assunto,
      mensagem: form.value.mensagem
    }
    await contatoService.enviarEmail(data)
    
    toast.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Contato enviado com sucesso!',
      life: 3000
    });
    
  } catch (error) {
    console.log('Erro ao entrar em contato. ', error)
    toast.add({
      severity: 'error',
      summary: 'Erro',
      detail: 'Erro ao tentar entrar em contato',
      life: 3000
    });
  } finally {
    loading.value = false;
  }
}

</script>

<template>
        <section class="bg-[url('/src/assets/market-imgs/banner-01.jpg')] w-full h-[128.4px] md:h-[263px] lg:h-[397px] bg-left lg:bg-center bg-cover flex justify-center items-center ">
        <div class="w-full container flex items-center justify-center">
            <div class="w-full max-w-[261px] h-[53px] md:max-w-[406px] md:h-[82px] lg:max-w-[647.5px] lg:h-[131.1px] bg-cyan-400 transform -skew-x-12 flex items-center justify-center text-center text-white font-[600] italic">
                <h1 class="text-[1.625em] md:text-[2.5em] lg:text-[4.5em]">
                    {{ t('contact.title') }}
                </h1>
            </div>
        </div>
    </section>



    <section class="w-full flex">
        <div class="w-full h-[115px] lg:h-[240px] flex justify-center items-center bg-sky-50">
            <div class="container w-full p-5 md:p-10">
            <h2 class="text-[1.375em] md:text-[1.5em] lg:text-[2.25em] text-cyan-400 font-[600] italic leading-[34px]  text-center">
                {{ t('contact.teamContact') }}
            </h2>                
            </div>
        </div>
    </section>



    <section class="flex flex-col items-center justify-center pb-10">
        <div class="w-full flex flex-col justify-center items-center p-5 md:p-10 lg:h-[223px] bg-white">
            <p class="text-[1em] lg:text-[1.375em] md:text-center leading-[30px] md:leading-[35px] max-h-[205px] md:max-h-full overflow-scroll md:overflow-auto hidden lg:flex">
              {{ t('contact.text') }}
            </p>
            <p class="text-[1em] lg:text-[1.375em] md:text-center leading-[30px] md:leading-[35px] max-h-[205px] md:max-h-full overflow-scroll md:overflow-auto lg:hidden">
              {{ t('contact.text') }}
            </p>
        </div>

  </section>
  
  
    <section class="w-full h-full lg:bg-sky-50">
    <div class="flex conteiner flex-col-reverse md:flex-row-reverse lg:flex-row md:h-auto h-full">
      <div class="w-full flex md:justify-end md:max-w-[287px] lg:max-w-[785px]">
          <img class="w-full md:max-w-[287px] lg:max-w-[785px] min-h-[350px] md:min-h-[476px] lg:min-h-[674px] object-cover object-left md:object-center" src="../assets/contatos-imgs/image-01.jpg" alt=""> 
      </div>

      <div class="flex w-full p-5 md:p-10 h-full items-end">
        <form class="flex flex-col w-full h-full gap-4 justify-center" @submit.prevent="enviarEmail">
            <div class="flex flex-col">
                <label class="font-[500] mb-2" for="">{{ t('contact.name') }}</label>
                <input class="w-full max-w-[622.4px] h-[42px] bg-white border-1 border-stone-300 rounded-[8px] p-[10px]" v-model="form.nome" type="text" id="nome" name="nome" required>   
            </div>

            <div class="flex flex-col">
                <label class="font-[500] mb-2" for="">{{ t('contact.email') }}</label>
                <input class="w-full max-w-[622.4px] h-[42px] bg-white border-1 border-stone-300 rounded-[8px] p-[10px]" v-model="form.email" type="email" id="email" name="email" required>                
            </div>

            <div class="flex flex-col">
                <label class="font-[500] mb-2" for="">{{ t('contact.phone') }}</label>
                <input class="w-full max-w-[622.4px] h-[42px] bg-white border-1 border-stone-300 rounded-[8px] p-[10px]" v-model="form.telefone" type="tel" id="telefone" name="telefone" v-maska="'(##) #####-####'" maxlength="15" placeholder="(11) 99999-9999" required>                
            </div>

            <div class="flex flex-col">
                <label class="font-[500] mb-2" for="">{{ t('contact.subject') }}</label>
                <input class="w-full max-w-[622.4px] h-[42px] bg-white border-1 border-stone-300 rounded-[8px] p-[10px]" v-model="form.assunto" type="assunto" id="assunto" name="assunto" required>                
            </div>

            <div class="flex flex-col">
                <label class="font-[500] mb-2" for="">{{ t('contact.message') }}</label>
                <textarea class="w-full max-w-[622.4px] max-h-[136px] min-h-[136px] md:max-h-[136px] md:min-h-[136px] lg:min-h-[208px] lg:max-h-[208px] bg-white border-1 border-stone-300 rounded-[8px] p-[10px]" v-model="form.mensagem" name="mensagem" id="mensagem"></textarea>               
            </div>
            
            <div class="flex w-full max-w-[622.4px] justify-center md:justify-end">
                <button type="submit" :disabled="loading || !isFormValid" class="w-[146.4px] md:w-[178px] lg:w-[106px] h-[42px] bg-cyan-400 rounded-[30px] text-white text-[0.9em] hover:bg-cyan-500 duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                    <i v-if="loading" class="fas fa-spinner fa-spin mr-2"></i>
                    {{ loading ? t('contact.sending') : t('contact.send') }}
                </button>
            </div>

        </form>
      </div>

    </div>        
    </section>   


    <section class="w-full flex items-center justify-center p-5 md:p-10">
        <div class="flex container flex-col p-5 md:p-10 md:gap-0 lg:gap-[52px]">
            <h3 class="text-[1.65em] text-cyan-400 font-[500] text-center">
                {{ t('contact.sectionContact')  }}
            </h3>


            <div class="flex w-full text-center items-center justify-center gap-10 flex-col lg:flex-row">
            <span class="text-[1.1em] md:text-[1.65em] text-cyan-400 font-[600] text-center">
                SAC: 0800-44954994095    
            </span>
            <span class="text-[1.1em] md:text-[1.65em] text-cyan-400 font-[600] text-center">
                E-mail: atendimento@fitcertify365.com
            </span>
            <span class="text-[1.1em] md:text-[1.65em] text-cyan-400 font-[600] text-center">
                Whatsapp: (21) 400495694
            </span>                
            </div>
        </div>
    </section>



    <section class="w-full lg:bg-lime-50">
    <div class="flex conteiner flex-col items-center md:items-stretch md:flex-row h-auto md:h-auto lg:h-[338px]">
      <div class="w-full md:max-w-[612.6px]">
          <img class="w-full  md:min-h-[338px] h-[350px] md:h-full object-cover object-left xl:object-center" src="../assets/contatos-imgs/image-02.jpg" alt=""> 
      </div>

      <div class=" w-full max-w-[1069px] flex md:h-auto flex-col lg:items-center justify-center gap-[22px] md:gap-[20px] p-5 md:p-10">
        <h2 class="text-[1.75em] md:text-[2em] lg:text-[2.25em]  font-[700] italic text-cyan-400
        w-full  lg:leading-[55px]">
          {{ t('contact.lastSection.title')  }}
        </h2>
        <p class="text-[1em] lg:text-[1.25em] leading-[30px] md:leading-[35px] lg:leading-[40px] lg:flex
        w-full ">
        {{ t('contact.lastSection.text')  }}
        </p>

        <div class="w-full flex  justify-center">
        <RouterLink class="flex w-[284px] lg:-[203px] h-[41px] lg:h-[52px] border-1 border-cyan-400 items-center justify-center rounded-[30px] text-cyan-400 font-[500] hover:bg-cyan-400 hover:text-white duration-300" to="/">
          {{ t('contact.lastSection.button')  }}
        </RouterLink>
        </div>
      </div>

    </div>        
    </section>


    <Toast position="top-right" />
</template>