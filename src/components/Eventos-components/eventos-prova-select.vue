<template>
  <div class="w-full md:max-w-[200px]">
    <Combobox v-model="selected" @update:modelValue="onChange">
      <div class="relative">
        <div class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <ComboboxInput
            class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
            :displayValue="(tipo) => tipos.find(t => t.id === tipo)?.nome || 'Tipo de Prova'"
            @change="query = $event.target.value"
          />
          <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </ComboboxButton>
        </div>
        <TransitionRoot
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          @after-leave="query = ''"
        >
          <ComboboxOptions class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-10">
            <div v-if="filteredOptions.length === 0 && query !== ''" class="relative cursor-default select-none px-4 py-2 text-gray-700">
              Nothing found.
            </div>
            <ComboboxOption
              v-for="tipo in filteredOptions"
              as="template"
              :key="tipo.id"
              :value="tipo.id"
              v-slot="{ selected, active }"
            >
              <li class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                'bg-teal-600 text-white': active,
                'text-gray-900': !active,
              }">
                <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                  {{ getLocalizedField(tipo, 'nome') }}
                </span>
                <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3" :class="{ 'text-white': active, 'text-teal-600': !active }">
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
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
    ? tipos.value
    : tipos.value.filter(tipo =>
        getLocalizedField(tipo, 'nome').toLowerCase().includes(query.value.toLowerCase())
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

