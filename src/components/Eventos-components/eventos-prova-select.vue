<template>
  <div class="w-full md:max-w-[200px]">
    <Combobox v-model="selected">
      <div class="relative mt-1 ">
        <div
          class="relative w-full cursor-default rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 text-[0.833em] h-[39px] border-1 border-gray-300 text-blue-500"
        >
          <ComboboxInput
            class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-black text-[0.83em] focus:ring-0"
            :displayValue="(item) => item.name"
            @change="query = $event.target.value"
          />
          <ComboboxButton
            class="absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <ChevronUpDownIcon
              class="h-5 w-5 text-lime-500 "
              aria-hidden="true"
            />
          </ComboboxButton>
        </div>
        <TransitionRoot
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          @after-leave="query = ''"
        >
          <ComboboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-50"
          >
            <div
              v-if="filteredOptions.length === 0 && query !== ''"
              class="relative cursor-default select-none px-4 py-2 text-gray-700 "
            >
              Nada encontrado.
            </div>

            <ComboboxOption
              v-for="option in filteredOptions"
              as="template"
              :key="option.id"
              :value="option"
              v-slot="{ selected, active }"
            >
              <li
                class="relative cursor-default select-none py-2 pl-10 pr-4 "
                :class="{
                  'bg-lime-500 text-white': active,
                  'text-gray-900': !active,
                }"
              >
                <span
                  class="block truncate"
                  :class="{ 'font-medium': selected, 'font-normal': !selected }"
                >
                  {{ option.name }}
                </span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3 "
                  :class="{ 'text-white': active, 'text-teal-600': !active }"
                >
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

const emit = defineEmits(['update:prova'])

let selected = ref({ id: 0, name: 'Tipo de Prova' })
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

// mapeia os dados para o formato esperado
const opcoes = computed(() => [
  { id: 0, name: 'Tipo de Prova' },
  ...tipos.value.map((t) => ({ id: t.id, name: t.nome }))
])

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
  emit('update:prova', val)
})
</script>
