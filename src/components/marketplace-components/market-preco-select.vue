<template>
  <div class="w-full md:max-w-[200px]">
    <el-select
      v-model="selected"
      placeholder="Faixa de preço"
      style="width: 100%;"
      filterable
      @change="onChange"
    >
      <el-option
        v-for="item in precos"
        :key="item.id"
        :label="item.nome"
        :value="item.id"
      />
    </el-select>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const emit = defineEmits(['update:preco'])

let selected = ref(0) // só guarda o id

// opções fixas
const precos = computed(() => [
  { id: 0, nome: 'Faixa de preço' },
  { id: 1, nome: 'R$ 89,00' },
  { id: 2, nome: 'R$ 129,00' },
  { id: 3, nome: 'R$ 149,00' }
])

// emite o objeto selecionado pro pai
watch(selected, (val) => {
  const preco = precos.value.find(p => p.id === val)
  emit('update:preco', preco)
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
.el-select .el-input__inner::placeholder {
  color: #606266 !important; /* deixa o placeholder visível */
  opacity: 1 !important;
}
</style>
