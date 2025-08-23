<template>
  <div class="w-full md:max-w-[200px]">
    <el-select
      v-model="selected"
      placeholder="Localidade"
      style="width: 100%;"
      filterable
      @change="onChange"
    >
      <el-option
        v-for="item in cidades"
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

const emit = defineEmits(['update:cidade'])

let selected = ref(0) // ✅ agora só guarda o id
let query = ref('')

const eventos = ref([])

onMounted(async () => {
  try {
    const res = await EventosService.getAllPaginated()
    eventos.value = res.data
  } catch (e) {
    console.error('Erro ao carregar eventos', e)
  }
})

const cidades = computed(() => {
  const locais = eventos.value.map(e => e.local).filter(Boolean)
  const unicos = [...new Set(locais)]
  return [
    { id: 0, name: 'Localidade' },
    ...unicos.map((c, i) => ({ id: i + 1, name: c }))
  ]
})

watch(selected, (val) => {
  // envia o objeto inteiro (id + name) pro pai
  const cidade = cidades.value.find(c => c.id === val)
  emit('update:cidade', cidade)
})

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