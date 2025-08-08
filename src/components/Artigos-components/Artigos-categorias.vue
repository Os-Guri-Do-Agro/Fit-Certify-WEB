<template>
  <Listbox v-model="selectedPerson">
    <ListboxButton class="w-full max-w-[400px] text-cyan-400 font-semibold p-3 shadow-lg border-1 border-cyan-400 rounded-[30px] cursor-pointer">{{ selectedPerson.name }}</ListboxButton>
    <ListboxOptions class="flex flex-col bg-gray-50 border-1 border-cyan-300 p-5 rounded-[12px] shadow-2xl w-full max-w-[400px]">
      <ListboxOption class="cursor-pointer hover:bg-cyan-400 hover:text-white p-3 rounded-[8px]"
        v-for="person in people"
        :key="person.id"
        :value="person"
        :disabled="person.unavailable"
      >
        {{ person.name }}
      </ListboxOption>
    </ListboxOptions>
  </Listbox>
</template>

<script setup>
  import { ref } from 'vue'
  import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from '@headlessui/vue'

  const people = [
    { id: 1, name: 'Todas as Categorias', unavailable: false },
    { id: 2, name: 'Medicina esportiva', unavailable: false },
    { id: 3, name: 'Nutrição e bem-estar', unavailable: false },
    { id: 4, name: 'Preparação para provas', unavailable: false },
    { id: 5, name: 'Prevenção de lesões', unavailable: false },
    { id: 6, name: 'Documentação e certificados', unavailable: false },
  ]
  const selectedPerson = ref(people[0])
</script>