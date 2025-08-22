<template>
  <div class="w-full md:max-w-[200px]">
    <el-select
      v-model="selected"
      placeholder="Mês"
      style="width: 100%;"
      filterable
      @change="onChange"
    >
      <el-option
        v-for="item in meses"
        :key="item.id"
        :label="item.name"
        :value="item.id"
      />
    </el-select>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import EventosService from '../../services/Eventos/eventos-services'

const emit = defineEmits(['update:mes'])

let selected = ref(0) 
let query = ref('')
const eventos = ref([])

onMounted(async () => {
  try {
    const res = await EventosService.getAllEventos()
    eventos.value = res.data
  } catch (e) {
    console.error('Erro ao carregar eventos', e)
  }
})


const format = (d) => {
  const date = new Date(d)
  if (isNaN(date)) return null
  return `${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`
}


const meses = computed(() => {
  const lista = eventos.value.map(e => format(e.data)).filter(Boolean)
  const unicos = [...new Set(lista)]
  return [
    { id: 0, name: 'Mês' },
    ...unicos.map((m, i) => ({ id: i + 1, name: m }))
  ]
})


watch(selected, (val) => {
  if (val === 0) {
    emit('update:mes', null) 
  } else {
    const mes = meses.value.find(m => m.id === val)
    emit('update:mes', mes)
  }
})

const onChange = (val) => {
  selected.value = val
}
</script>
