<template>
  <div class="w-full md:max-w-[200px]">
    <Combobox v-model="selected">
      <div class="relative mt-1 ">
        <div
          class="relative w-full cursor-default rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 text-[0.833em] h-[39px] border-1 border-gray-300 text-blue-500"
        >
          <ComboboxInput
            class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-black text-[0.83em] focus:ring-0"
            :displayValue="(person) => person.name"
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
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
          >
            <div
              v-if="filteredPeople.length === 0 && query !== ''"
              class="relative cursor-default select-none px-4 py-2 text-gray-700 "
            >
              Nada encontrado.
            </div>

            <ComboboxOption
              v-for="person in filteredPeople"
              as="template"
              :key="person.id"
              :value="person"
              v-slot="{ selected, active }"
            >
              <li
                class="relative cursor-default select-none py-2 pl-10 pr-4 "
                :class="{
                  'bg-teal-600 text-white': active,
                  'text-gray-900': !active,
                }"
              >
                <span
                  class="block truncate"
                  :class="{ 'font-medium': selected, 'font-normal': !selected }"
                >
                  {{ person.name }}
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
import { ref, computed } from 'vue'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

const people = [
  { id: 1, name: 'Localidade' },
  { id: 2, name: 'Porto Alegre - RS' },
  { id: 3, name: 'Florianópolis - SC' },
  { id: 4, name: 'Petrópolis - RJ' }
]

let selected = ref(people[0])
let query = ref('')

let filteredPeople = computed(() =>
  query.value === ''
    ? people
    : people.filter((person) =>
        person.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, ''))
      )
)
</script>
