<template>
  <div class="w-full md:max-w-[200px]">
    <el-select
      v-model="selected"
      placeholder="Mês"
      style="width: 100%;"
      filterable
      @change="(e) => onChange(e)"
    >
      <el-option
        v-for="item in meses"
        :key="item.value"
        :label="item.nome"
        :value="item"
      />
    </el-select>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import EventosService from '../../services/Eventos/eventos-services'

const emit = defineEmits(['update:mes'])

let selected = ref(null) 
let query = ref('')

const format = (d) => {
  const date = new Date(d)
  if (isNaN(date)) return null
  return `${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`
}

watch(selected, (val) => {
  emit('update:mes', val?.value)
})

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

const onChange = (val) => {
  selected.value = val
}

</script>


<style scoped>
.el-select-dropdown__item.is-selected {
  color: #88CE0D !important;
  font-weight: bold;
}
</style>
