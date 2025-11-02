<template>
  <section
    class="bg-[url('/src/assets/home-imgs/banner-home.jpg')] w-full h-auto md:h-[419px] lg:h-[760px] bg-cover bg-no-repeat bg-right flex justify-center items-center p-10"
  >
    <div class="container flex">
      <div
        class="flex flex-col text-start max-w-[792px] gap-[18px] lg:gap-[28px]"
      >
        <h1
          class="text-[1.5em] md:text-[1.875em] lg:text-[4.875em] font-[600] italic text-cyan-400 leading-[30px] md:leading-[35px] lg:leading-[90px]"
        >
          Saúde em dia<br />para o esporte.
        </h1>

        <p
          class="text-[0.875em] lg:text-[1.5em] text-white font-[400] leading-[22px] md:leading-[26px] lg:leading-[40px] max-w-[317px] md:max-w-[394.7px] lg:max-w-[717px]"
        >
          A FitCertify365 conecta atletas e médicos parceiros. Após uma consulta
          presencial, o médico emite seu certificado, que fica salvo na
          plataforma, pronto para ser usado em diferentes provas — com templates
          personalizados e validade definida pelo profissional.
        </p>

        <a
          href="https://fit-certify-admin.vercel.app/register"
          target="_blank"
          class="w-[197px] lg:w-[294.9px] h-[34px] lg:h-[50.57px] text-[0.8em] lg:text-[1.1em] bg-lime-500 rounded-[30px] flex items-center justify-center text-white tracking-[1.5%] text-center hover:bg-lime-600 duration-300"
          to="/cadastro"
          >Inicie seu processo agora</a
        >
      </div>
      <div class="flex absolute">
        <modalParabens />
      </div>

    </div>
  </section>

  <section class="w-full flex justify-center min-h-[350px] bg-cyan-400">
    <div
      class="container flex items-center justify-center flex-col md:flex-row md:p-10 lg:p-0"
    >
      <div
        class="flex flex-col items-center justify-center w-1/2 h-[209px] text-center gap-[11px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-clock4-icon lucide-clock-4"
        >
          <path d="M12 6v6l4 2" />
          <circle cx="12" cy="12" r="10" />
        </svg>

        <h2 class="text-[1.5em] lg:text-[2.25em] italic font-[700] text-white">
          AGILIDADE
        </h2>

        <span
          class="text-[1em] lg:text-[1.5em] font-[400] max-w-[256px] xl:max-w-[453.2px] text-white"
        >
          Certificados válidos por até 12 meses
        </span>
      </div>

      <div
        class="w-[200px] h-[2px] md:w-[2px] md:h-[276px] rounded-[2px] bg-cyan-500"
      ></div>

      <div
        class="flex flex-col items-center justify-center w-1/2 h-[209px] text-center gap-[11px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-key-icon lucide-key"
        >
          <path
            d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"
          />
          <path d="m21 2-9.6 9.6" />
          <circle cx="7.5" cy="15.5" r="5.5" />
        </svg>

        <h2 class="text-[1.5em] lg:text-[2.25em] italic font-[700] text-white">
          SEGURANÇA
        </h2>

        <span
          class="text-[1em] lg:text-[1.5em] font-[400] max-w-[256px] xl:max-w-[443.2px] text-white"
        >
          Assinatura médica digital
        </span>
      </div>

      <div
        class="w-[200px] h-[2px] md:w-[2px] md:h-[276px] rounded-[2px] bg-cyan-500"
      ></div>

      <div
        class="flex flex-col items-center justify-center w-1/2 h-[209px] text-center gap-[11px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-radio-icon lucide-radio"
        >
          <path d="M16.247 7.761a6 6 0 0 1 0 8.478" />
          <path d="M19.075 4.933a10 10 0 0 1 0 14.134" />
          <path d="M4.925 19.067a10 10 0 0 1 0-14.134" />
          <path d="M7.753 16.239a6 6 0 0 1 0-8.478" />
          <circle cx="12" cy="12" r="2" />
        </svg>

        <h2 class="text-[1.5em] lg:text-[2.25em] italic font-[700] text-white">
          TECNOLOGIA
        </h2>

        <span
          class="text-[1em] lg:text-[1.5em] font-[400] w-full max-w-[256px] xl:max-w-[443.2px] text-white mb-[32px] md:mb-0"
        >
          Plataforma integrada
        </span>
      </div>
    </div>
  </section>

  <section class="w-full flex flex-col">
    <div
      class="flex flex-col items-center md:items-stretch md:flex-row-reverse h-auto md:h-[383px] lg:h-[480px]"
    >
      <div class="md:w-1/2">
        <img
          class="w-full min-h-[350px] md:h-full object-cover object-bottom"
          src="../assets/home-imgs/home-img-01.jpg"
          alt=""
        />
      </div>

      <div
        class="md:w-1/2 md:h-auto flex flex-col lg:items-center justify-center gap-[24px] md:p-10"
      >
        <h2
          class="text-[1.25em] md:text-[1.75em] lg:text-[2.5em] xl:text-[3em] font-[700] italic text-cyan-400 w-full max-w-[461px] lg:max-w-[658px] md:ml-[24px] mt-[27px] leading-[35px] lg:leading-[55px]"
        >
          Sua saúde validada. <br />
          Seu esporte garantido.
        </h2>
        <p
          class="text-[0.875em] lg:text-[1em] xl:text-[1.25em] w-full max-w-[250px] md:max-w-[325px] lg:max-w-[658px] xl:max-w-[658px] md:ml-[24px] lg:pr-[24px]"
        >
          Vai competir? Consulte seu médico, emita seu certificado de aptidão
          física e valide-o na FitCertify365. Com poucos cliques, você aplica
          seu certificado nas principais provas do Brasil e do mundo — com
          validade digital, segurança e praticidade.
        </p>

        <div class="w-full md:max-w-[461px] lg:max-w-[658px] md:ml-[24px]">
          <router-link
            class="text-[0.93em] font-[500] w-[224px] h-[28px] lg:h-[42px] rounded-[30px] border-1 border-cyan-400 text-center text-cyan-400 hover:bg-cyan-400 hover:text-white duration-300 flex items-center justify-center mb-[32px] md:mb-0"
            to="/quemsomos"
            >Saiba Mais</router-link
          >
        </div>
      </div>
    </div>

    <div
      class="flex flex-col items-center md:items-stretch md:flex-row h-auto md:h-[383px] lg:h-[480px]"
    >
      <div class="md:w-1/2">
        <img
          class="w-full min-h-[350px] md:h-full object-cover object-bottom"
          src="../assets/home-imgs/home-img-02.jpg"
          alt=""
        />
      </div>

      <div
        class="md:w-1/2 md:h-auto flex flex-col lg:items-center justify-center gap-[24px] md:p-10 ml-4 md:ml-0"
      >
        <h2
          class="text-[1.25em] md:text-[1.75em] lg:text-[2.5em] xl:text-[3em] font-[700] italic text-lime-500 w-full max-w-[461px] lg:max-w-[658px] md:ml-[24px] mt-[27px] leading-[35px] lg:leading-[55px]"
        >
          Vai correr? <br />
          Confira eventos parceiros
        </h2>
        <p
          class="text-[0.875em] lg:text-[1em] xl:text-[1.25em] w-full max-w-[250px] md:max-w-[325px] lg:max-w-[658px] xl:max-w-[658px] md:ml-[24px] lg:pr-[24px]"
        >
          Após sua consulta com um médico, faça o upload do seu certificado na
          plataforma e gere o modelo de certificado ideal para sua prova —
          válido e personalizado nas principais corridas do Brasil e do mundo.
        </p>

        <div class="w-full md:max-w-[461px] lg:max-w-[658px] md:ml-[24px]">
          <router-link
            class="text-[0.93em] font-[500] w-[224px] h-[28px] lg:h-[42px] rounded-[30px] border-1 border-lime-500 text-center text-lime-500 hover:bg-lime-500 hover:text-white duration-300 flex items-center justify-center mb-[32px] md:mb-0"
            to="/eventos"
            >Saiba Mais</router-link
          >
        </div>
      </div>
    </div>

    <div
      class="flex flex-col items-center md:items-stretch md:flex-row-reverse h-auto md:h-[383px] lg:h-[480px]"
    >
      <div class="md:w-1/2">
        <img
          class="w-full min-h-[350px] md:h-full object-cover object-bottom"
          src="../assets/home-imgs/home-img-03.jpg"
          alt=""
        />
      </div>

      <div
        class="md:w-1/2 md:h-auto flex flex-col lg:items-center justify-center gap-[24px] md:p-10 ml-9 md:ml-0"
      >
        <h2
          class="text-[1.25em] md:text-[1.75em] lg:text-[2.5em] xl:text-[3em] font-[700] italic text-cyan-400 w-full max-w-[461px] lg:max-w-[658px] md:ml-[24px] mt-[27px] leading-[35px] lg:leading-[55px]"
        >
          Acompanhe seus <br />
          indicadores em tempo real.
        </h2>
        <p
          class="text-[0.875em] lg:text-[1em] xl:text-[1.25em] w-full max-w-[250px] md:max-w-[325px] lg:max-w-[658px] xl:max-w-[658px] md:ml-[24px] lg:pr-[24px]"
        >
          Acesse indicadores, histórico de exames e alertas inteligentes sobre
          sua saúde esportiva. Tudo integrado em um só painel.
        </p>

        <div class="w-full md:max-w-[461px] lg:max-w-[658px] md:ml-[24px]">
          <router-link
            class="text-[0.93em] font-[500] w-[224px] h-[28px] lg:h-[42px] rounded-[30px] border-1 border-cyan-400 text-center text-cyan-400 hover:bg-cyan-400 hover:text-white duration-300 flex items-center justify-center mb-[32px] md:mb-0"
            to="/marcadores"
            >Saiba Mais</router-link
          >
        </div>
      </div>
    </div>

    <div
      class="flex flex-col items-center md:items-stretch md:flex-row h-auto md:h-[383px] lg:h-[480px]"
    >
      <div class="md:w-1/2">
        <img
          class="w-full min-h-[350px] md:h-full object-cover object-bottom"
          src="../assets/home-imgs/home-img-04.jpg"
          alt=""
        />
      </div>

      <div
        class="md:w-1/2 md:h-auto flex flex-col lg:items-center justify-center gap-[24px] p-10"
      >
        <h2
          class="text-[1.25em] md:text-[1.75em] lg:text-[2.5em] xl:text-[3em] font-[700] italic text-lime-500 w-full max-w-[461px] lg:max-w-[658px] md:ml-[24px] mt-[27px] leading-[35px] lg:leading-[55px]"
        >
          Conteúdos e Artigos
        </h2>
        <p
          class="text-[0.875em] lg:text-[1em] xl:text-[1.25em] w-full max-w-[250px] md:max-w-[325px] lg:max-w-[658px] xl:max-w-[658px] md:ml-[24px] lg:pr-[24px]"
        >
          Dicas médicas, atualizações sobre check-ups, cuidados para provas e
          novidades da medicina esportiva.
        </p>

        <div class="w-full md:max-w-[461px] lg:max-w-[658px] md:ml-[24px]">
          <router-link
            class="text-[0.93em] font-[500] w-[224px] h-[28px] lg:h-[42px] rounded-[30px] border-1 border-lime-500text-center text-lime-500 hover:bg-lime-500 hover:text-white duration-300 flex items-center justify-center mb-[32px] md:mb-0"
            to="/artigos"
            >Saiba Mais</router-link
          >
        </div>
      </div>
    </div>
  </section>

  <section
    class="w-full md:pt-[52px] lg:pt-[72px] flex items-center justify-center bg-sky-50"
  >
    <div class="w-full container md:p-10 lg:p-20 flex">
      <div class="w-full flex flex-col items-center justify-center gap-[32px]">
        <div
          class="flex flex-col justify-center items-center text-center gap-[16px] p-[10px] mt-[43px] md:mt-0"
        >
          <h2
            class="text-[1.875em] md:text-[2.25em] lg:text-[2.75em] xl:text-[3em] font-[600] italic text-cyan-400 md:max-w-[768px] lg:max-w-[1392px] lg:mt-[32px]"
          >
            Produtos e serviços para sua rotina esportiva
          </h2>
          <p class="text-[1.125em] lg:text-[1.25em] flex md:hidden lg:flex">
            Com diferenciais exclusivos para assinantes FITCERTIFY365
          </p>
        </div>

        <!-- <div class="w-full flex justify-center items-center flex-col-reverse gap-0 md:gap-[16px] md:flex-col lg:flex-row ">
                        <div class="w-full  flex items-center justify-center">
                            <img class="block  w-full   md:max-w-[917px] h-auto md:h-full lg:h-[213px] object-fill md:object-cover" src="../assets/home-imgs/home-nike-banner.jpg" alt=""></img>
                        </div>
                        <div class="w-full flex items-center justify-center">
                            <img class="block  w-full md:max-w-[917px] h-auto lg:h-[213px] md:h-full object-fill md:object-cover" src="../assets/home-imgs/home-gatorade-banner.jpg" alt=""></img>
                        </div>
                    </div> -->

        <!-- <div class="w-full flex items-center justify-center gap-[32px] flex-wrap lg:flex-nowrap mt-[32px]">
                        <div class="">
                            <img class="w-full
                            max-w-[126px] md:max-w-[222.8px]
                            h-[66px] md:h-[116.6px]" src="../assets/home-imgs/home-nike-logo.jpg" alt="">
                        </div>
                        <div class="">
                            <img class="w-full
                            max-w-[311.2px] md:max-w-[411.4px]
                            h-[62px] md:h-[81.9px]" src="../assets/home-imgs/home-decat-logo.jpg" alt="">
                        </div>
                        <div class="">
                            <img class="w-full
                            max-w-[156.5px] md:max-w-[186.1px]
                            h-[58px] md:h-[69px]" src="../assets/home-imgs/home-bt-logo.jpg" alt="">
                        </div>
                        <div class="">
                            <img class="w-full
                            max-w-[156.4px] md:max-w-[186.1px]
                            h-[88px] md:h-[69px]" src="../assets/home-imgs/home-gatorade-logo.jpg" alt="">
                        </div>
                        <div class="">
                            <img class="w-full
                            max-w-[168.4px] md:max-w-[184px]
                            h-[60px] md:h-[65.5px]" src="../assets/home-imgs/home-amil-logo.jpg" alt="">
                        </div>

                    </div> -->

        <div
          class="flex w-full items-center justify-center mt-[32px] mb-[43px] md:mb-0"
        >
          <router-link
            class="text-[0.93em] font-[500] w-[224px] h-[42px] rounded-[30px] border-1 border-cyan-400 text-center text-cyan-400 hover:bg-cyan-400 hover:text-white duration-300 flex items-center justify-center"
            to="/marketplace"
            >Veja nossos parceiros</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import modalParabens from '../components/modalParabens.vue';
</script>
