<!-- <template>
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

</script> -->