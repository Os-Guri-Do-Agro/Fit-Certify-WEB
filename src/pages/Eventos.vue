<template>
  <section
    class="bg-[url('/src/assets/eventos-imgs/banner-01.jpg')] w-full h-[128.4px] md:h-[263px] lg:h-[397px] bg-left lg:bg-center bg-cover flex justify-center items-center ">
    <div class="w-full container flex items-center justify-center">
      <div
        class="w-full max-w-[261px] h-[53px] md:max-w-[659px] md:h-[82px] lg:max-w-[728px] lg:h-[131.1px] bg-cyan-400 transform -skew-x-12 flex items-center justify-center text-center text-white font-[600] italic">
        <h1 class="text-[1.625em] md:text-[2.5em] lg:text-[4.5em]">
          Provas Parceiras
        </h1>
      </div>
    </div>
  </section>

  <section class="w-full flex justify-center ">
    <div class="w-full  lg:h-[240px] flex justify-center items-center bg-sky-50">
      <div class=" w-full p-5 md:p-10">
        <h2
          class="text-[1.375em] md:text-[1.5em] lg:text-[2.25em] text-cyan-400 font-[600] italic leading-[34px]  text-center">
          Corridas e provas que reconhecem sua saúde em dia
        </h2>
      </div>
    </div>
  </section>

  <section class="flex flex-col items-center justify-center p-5 lg:p-10">
    <div class="container flex flex-col justify-center items-center lg:h-[223px] bg-white ">
      <p
        class="text-[1em] lg:text-[1.375em] md:text-center leading-[30px] md:leading-[35px] max-h-[205px] md:max-h-full overflow-scroll md:overflow-auto">
        Nosso certificado de saúde é aceito em qualquer prova ou evento esportivo que exija atestado médico. Aqui você
        encontra eventos parceiros com integração direta, um calendário completo de provas aceitas e, nos eventos
        conectados, a equipe médica da organização pode, com sua autorização, acessar seus dados de saúde em caso de
        necessidade durante a prova.
      </p>
    </div>

    <section class="bg-sky-50 w-full flex justify-center mt-20">
      <div class="container flex flex-col items-center ">
        <div class="flex flex-col text-center gap-5 w-full items-center">
          <h3 class="text-[2.25em] italic text-lime-500 font-[600]">
            Calendário de corridas
          </h3>
          <span class="text-[1.5em] text-lime-500 font-[700]">
            Filtrar provas
          </span>

          <div class="flex gap-5 flex-col md:flex-row w-full md:justify-center items-center">
            <div class="w-full md:max-w-[200px]">
              <el-select v-model="tipoEventoIdSelecionado" :options="tipos" placeholder="Tipo de Evento"
                style="width: 100%;" filterable clearable @change="(e) => onChangeTipoEventoId(e)">
                <el-option v-for="item in tipoEventos" :key="item.id" :label="item.nome" :value="item.id" />
              </el-select>
            </div>

            <div class="w-full md:max-w-[200px]">
              <el-select v-model="cidadeSelecionada" placeholder="Localidade" style="width: 100%;" filterable clearable
                @change="(e) => onChangeLocalidade(e)">
                <el-option v-for="item in cidades" :key="item.id" :label="item.name" :value="item.name" />
              </el-select>
            </div>

            <div class="w-full md:max-w-[200px]">
              <el-select v-model="mesSelecionado" placeholder="Mês" style="width: 100%;" filterable clearable
                value-key="nome" @change="(e) => onChangeMes(e)">
                <el-option v-for="item in meses" :key="item.value" :label="item.nome" :value="item" />
              </el-select>
            </div>
          </div>

          <div class="hidden md:flex lg:hidden">
            <img class="w-full  h-[302px] object-cover object-bottom" src="../assets/eventos-imgs/banner-02.jpg" alt="">
          </div>

          <div class="grid grid-cols-1 md:grid-cols-[3fr_1fr] lg:grid-cols-[5fr_1fr] gap-5 h-auto w-full ">

            <div class="flex flex-col gap-2">
              <div class="hidden lg:flex">
                <img class="w-full  h-[302px] object-cover object-bottom" src="../assets/eventos-imgs/banner-02.jpg"
                  alt="">
              </div>
              <div class="w-full block justify-center lg:mt-5">
                <Eventos :cidade="cidadeSelecionada" :mes="mesSelecionado" :tipoEventoId="tipoEventoIdSelecionado" />
              </div>
            </div>

            <div class="w-full hidden md:flex flex-col gap-5 lg:items-end">
              <img class="w-full max-w-[234px] h-[303px] object-cover" src="../assets/eventos-imgs/image-01.jpg" alt="">
              <img class="w-full max-w-[234px] h-[168px] object-cover" src="../assets/eventos-imgs/image-02.jpg" alt="">
              <img class="w-full max-w-[234px] h-[231px] object-cover" src="../assets/eventos-imgs/image-03.jpg" alt="">
              <img class="w-full max-w-[234px] h-[354px] object-cover" src="../assets/eventos-imgs/image-04.jpg" alt="">
              <img class="w-full max-w-[234px] h-[238px] object-cover" src="../assets/eventos-imgs/image-05.jpg" alt="">
              <img class="w-full max-w-[234px] h-[168px] object-cover" src="../assets/eventos-imgs/image-06.jpg" alt="">
              <img class="w-full max-w-[234px] h-[169px] object-cover" src="../assets/eventos-imgs/image-07.jpg" alt="">
            </div>

          </div>

        </div>
      </div>
    </section>
  </section>

  <section class="w-full">
    <div class="flex conteiner flex-col items-center md:items-stretch md:flex-row h-auto md:h-auto lg:h-[412.82px]">
      <div class="w-full md:max-w-[854.25px]">
        <img class="w-full md:h-full h-[350px] lg:h-[412.82px] object-cover object-left xl:object-center"
          src="../assets/eventos-imgs/banner-03.jpg" alt="">
      </div>

      <div
        class=" w-full max-w-[655px] flex md:h-auto flex-col lg:items-center justify-center gap-[22px] md:gap-[20px] p-5 md:p-10">
        <h2 class="text-[1.75em] md:text-[2em] lg:text-[2.25em]  font-[700] italic text-cyan-400
        w-full  lg:leading-[55px]">
          Quer sua prova aqui?
        </h2>
        <p class="text-[1em] lg:text-[1.25em] leading-[30px] md:leading-[35px] lg:leading-[40px] lg:flex
        w-full">
          Organizadores de eventos esportivos podem integrar sua corrida com a FitCertify365 e oferecer ainda mais
          praticidade aos atletas — com certificados digitais, gestão centralizada e segurança jurídica.
        </p>

        <div class="w-full flex ">
          <RouterLink
            class="flex w-[284px] lg:w-[282px] h-[40px] lg:h-[40px] border-1 border-cyan-400 items-center justify-center rounded-[30px] text-[0.8em] text-white font-[500] bg-cyan-400 hover:bg-cyan-500  duration-300"
            to="/contato">
            Tornar minha prova parceira
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import Eventos from '../components/Eventos-components/eventos-api.vue'
import SelectProva from '../components/Eventos-components/eventos-prova-select.vue'
import Localidade from '../components/Eventos-components/eventos-local-select.vue'
import Mes from '../components/Eventos-components/eventos-mes-select.vue'
import EventoService from '../services/Eventos/eventos-services'

const tipoEventos = ref([])
const eventos = ref([])

const cidadeSelecionada = ref('')
const mesSelecionado = ref('')
const tipoEventoIdSelecionado = ref('')

const meses = [
  { value: 1, nome: "Janeiro" },
  { value: 2, nome: "Fevereiro" },
  { value: 3, nome: "Março" },
  { value: 4, nome: "Abril" },
  { value: 5, nome: "Maio" },
  { value: 6, nome: "Junho" },
  { value: 7, nome: "Julho" },
  { value: 8, nome: "Agosto" },
  { value: 9, nome: "Setembro" },
  { value: 10, nome: "Outubro" },
  { value: 11, nome: "Novembro" },
  { value: 12, nome: "Dezembro" }
];

onMounted(async () => {
  await buscarEventos()
  await buscarTipoEventos()
})

const cidades = computed(() => {
  const locais = eventos?.value.map(e => e.local).filter(Boolean)
  const unicos = [...new Set(locais)]

  return [
    ...unicos.map((c, i) => ({ name: c }))
  ]
})

const buscarTipoEventos = async () => {
  try {
    const res = await EventoService.getAllTipoEventos()

    tipoEventos.value = res?.data
  } catch (e) {
    console.error('Erro ao carregar tipos de evento', e)
  }
}

const buscarEventos = async () => {
  try {
    const res = await EventoService.getAllPaginated()
    eventos.value = res.data?.itens
  } catch (e) {
    console.error('Erro ao carregar eventos', e)
  }
}

const onChangeTipoEventoId = (e) => {
  tipoEventoIdSelecionado.value = e
}

const onChangeLocalidade = (e) => {
  cidadeSelecionada.value = e
}

const onChangeMes = (e) => {
  mesSelecionado.value = e
}

</script>
