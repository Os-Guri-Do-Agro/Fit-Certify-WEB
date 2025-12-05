<template>
  <div class="w-full md:max-w-[200px]">

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
import { useI18n } from '../../composables/useI18n'

const emit = defineEmits(['update:tipoEventoId'])

const {t, currentLocale} = useI18n()

function getLocalizedField(item, field) {
  return currentLocale.value === 'en' ? item[`en_${field}`] : item[field]
}

let selected = ref(0)
let query = ref('')

const tipos = ref([])

onMounted(async () => {
  try {
    const res = await EventosService.getAllTipoEventos()
    tipos.value = [
      { id: 0, nome: 'Tipo de Prova' },
      ...res.data
    ]
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

watch(selected, (val) => {
  emit('update:tipoEventoId', val)
})
</script>

<style scoped>
.el-select-dropdown__item.is-selected {
  color: #88CE0D !important;
  font-weight: bold;
}
</style>

