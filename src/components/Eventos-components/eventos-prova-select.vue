<template>
  <div class="w-full md:max-w-[200px]">
    <el-select
      v-model="selected"
      :options="tipos"
      placeholder="Tipo de Evento"
      style="width: 240px"
      filterable
      @change="(e) => onChange(e)"
  >
    <el-option
      v-for="item in tipos"
      :key="item.id"
      :label="item.nome"
      :value="item.id"
    />
    </el-select>
  </div>  
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import EventosService from '../../services/Eventos/eventos-services'

const emit = defineEmits(['update:tipoEventoId'])

let selected = ref(null)
let query = ref('')

const tipos = ref([])

onMounted(async () => {
  try {
    const res = await EventosService.getAllTipoEventos()
    tipos.value = res.data 
  } catch (e) {
    console.error('Erro ao carregar tipos de evento', e)
  }
})

const onChange = (e) => {
  selected.value = e
}

// filtro
let filteredOptions = computed(() =>
  query.value === ''
    ? opcoes.value
    : opcoes.value.filter(option =>
        option.name.toLowerCase().includes(query.value.toLowerCase())
      )
)

// emite prova selecionada
watch(selected, (val) => {
  emit('update:tipoEventoId', val)
})
</script>
