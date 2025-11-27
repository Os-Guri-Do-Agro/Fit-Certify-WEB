<script>
import { RouterLink } from 'vue-router';
import emailjs from '@emailjs/browser';
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      telefone: '',
      loading: false
    }
  },
  methods: {
    formatPhone(event) {
      let value = event.target.value.replace(/\D/g, '');
      if (value.length <= 11) {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        if (value.length < 14) {
          value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        }
      }
      this.telefone = value;
      event.target.value = value;
    },
    async sendEmail() {
      this.loading = true;
      try {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID, 
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
          this.$refs.form, 
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          }
        );
        this.toast.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Contato enviado com sucesso!',
          life: 3000
        });
      } catch (error) {
        this.toast.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao tentar entrar em contato',
          life: 3000
        });
      } finally {
        this.loading = false;
      }
    },
  },
};

</script>

<template>
        <section class="bg-[url('/src/assets/market-imgs/banner-01.jpg')] w-full h-[128.4px] md:h-[263px] lg:h-[397px] bg-left lg:bg-center bg-cover flex justify-center items-center ">
        <div class="w-full container flex items-center justify-center">
            <div class="w-full max-w-[261px] h-[53px] md:max-w-[406px] md:h-[82px] lg:max-w-[647.5px] lg:h-[131.1px] bg-cyan-400 transform -skew-x-12 flex items-center justify-center text-center text-white font-[600] italic">
                <h1 class="text-[1.625em] md:text-[2.5em] lg:text-[4.5em]">
                    Contato
                </h1>
            </div>
        </div>
    </section>



    <section class="w-full flex">
        <div class="w-full h-[115px] lg:h-[240px] flex justify-center items-center bg-sky-50">
            <div class="container w-full p-5 md:p-10">
            <h2 class="text-[1.375em] md:text-[1.5em] lg:text-[2.25em] text-cyan-400 font-[600] italic leading-[34px]  text-center">
                Fale com a equipe FitCertify365
            </h2>                
            </div>
        </div>
    </section>



    <section class="flex flex-col items-center justify-center pb-10">
        <div class="w-full flex flex-col justify-center items-center p-5 md:p-10 lg:h-[223px] bg-white">
            <p class="text-[1em] lg:text-[1.375em] md:text-center leading-[30px] md:leading-[35px] max-h-[205px] md:max-h-full overflow-scroll md:overflow-auto hidden lg:flex">
                Dúvidas sobre certificados, saúde esportiva, integração com eventos ou parcerias? <br> <br>
                Estamos aqui para te atender.
            </p>
            <p class="text-[1em] lg:text-[1.375em] md:text-center leading-[30px] md:leading-[35px] max-h-[205px] md:max-h-full overflow-scroll md:overflow-auto lg:hidden">
                Dúvidas sobre certificados, saúde esportiva, integração com eventos ou parcerias?
                Estamos aqui para te atender.
            </p>
        </div>

  </section>
  
  
    <section class="w-full h-full lg:bg-sky-50">
    <div class="flex conteiner flex-col-reverse md:flex-row-reverse lg:flex-row md:h-auto h-full">
      <div class="w-full flex md:justify-end md:max-w-[287px] lg:max-w-[785px]">
          <img class="w-full md:max-w-[287px] lg:max-w-[785px] min-h-[350px] md:min-h-[476px] lg:min-h-[674px] object-cover object-left md:object-center" src="../assets/contatos-imgs/image-01.jpg" alt=""> 
      </div>

      <div class="flex w-full p-5 md:p-10 h-full items-end">
        <form class="flex flex-col w-full h-full gap-4 justify-center" action="" ref="form" @submit.prevent="sendEmail">
            <div class="flex flex-col">
                <label class="font-[500] mb-2" for="">Nome</label>
                <input class="w-full max-w-[622.4px] h-[42px] bg-white border-1 border-stone-300 rounded-[8px] p-[10px]" type="text" id="nome" name="nome" required>                
            </div>

            <div class="flex flex-col">
                <label class="font-[500] mb-2" for="">Email</label>
                <input class="w-full max-w-[622.4px] h-[42px] bg-white border-1 border-stone-300 rounded-[8px] p-[10px]" type="email" id="email" name="email" required>                
            </div>

            <div class="flex flex-col">
                <label class="font-[500] mb-2" for="">Telefone</label>
                <input class="w-full max-w-[622.4px] h-[42px] bg-white border-1 border-stone-300 rounded-[8px] p-[10px]" type="tel" id="telefone" name="telefone" :value="telefone" @input="formatPhone" placeholder="(11) 99999-9999" required>                
            </div>

            <div class="flex flex-col">
                <label class="font-[500] mb-2" for="">Assunto</label>
                <input class="w-full max-w-[622.4px] h-[42px] bg-white border-1 border-stone-300 rounded-[8px] p-[10px]" type="assunto" id="assunto" name="assunto" required>                
            </div>

            <div class="flex flex-col">
                <label class="font-[500] mb-2" for="">Mensagem</label>
                <textarea class="w-full max-w-[622.4px] max-h-[136px] min-h-[136px] md:max-h-[136px] md:min-h-[136px] lg:min-h-[208px] lg:max-h-[208px] bg-white border-1 border-stone-300 rounded-[8px] p-[10px]" name="mensagem" id="mensagem"></textarea>               
            </div>
            
            <div class="flex w-full max-w-[622.4px] justify-center md:justify-end">
                <button type="submit" :disabled="loading" class="w-[146.4px] md:w-[178px] lg:w-[106px] h-[42px] bg-cyan-400 rounded-[30px] text-white text-[0.9em] hover:bg-cyan-500 duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                    <i v-if="loading" class="fas fa-spinner fa-spin mr-2"></i>
                    {{ loading ? 'Enviando...' : 'Enviar' }}
                </button>
            </div>

        </form>
      </div>

    </div>        
    </section>   


    <section class="w-full flex items-center justify-center p-5 md:p-10">
        <div class="flex container flex-col p-5 md:p-10 md:gap-0 lg:gap-[52px]">
            <h3 class="text-[1.65em] text-cyan-400 font-[500] text-center">
                Canais diretos
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
          Quer fazer parte do nosso ecossistema?
        </h2>
        <p class="text-[1em] lg:text-[1.25em] leading-[30px] md:leading-[35px] lg:leading-[40px] lg:flex
        w-full ">
          Se você é organizador de eventos, médico, clínica ou marca esportiva e quer se conectar à FitCertify365, entre em contato conosco.
        </p>

        <div class="w-full flex  justify-center">
        <RouterLink class="flex w-[284px] lg:-[203px] h-[41px] lg:h-[52px] border-1 border-cyan-400 items-center justify-center rounded-[30px] text-cyan-400 font-[500] hover:bg-cyan-400 hover:text-white duration-300" to="/">
            Falar sobre parcerias
        </RouterLink>
        </div>
      </div>

    </div>        
    </section>

    <Toast position="top-right" />
</template>