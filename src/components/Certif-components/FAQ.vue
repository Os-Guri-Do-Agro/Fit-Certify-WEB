<template>
  <div class="max-w-4xl mx-auto bg-cyan-50 rounded-lg">
    <div class="space-y-4">
      <!-- FAQ Item 1 -->
      <div class="faq-item">
        <button 
          @click="toggleFaq(0)"
          class="w-full text-left flex items-start space-x-3 pb-4  rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <div class="flex-shrink-0 mt-1">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="flex font-[600] text-slate-600">O certificado serve para todas as provas?</h3>
          </div>
        </button>
        
        <div 
          v-if="openFaq === 0"
          class="ml-8 pb-4 pr-4 text-gray-600 leading-relaxed animate-fade-in"
        >
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
        </div>
      </div>

      <!-- FAQ Item 2 -->
      <div class="faq-item">
        <button 
          @click="toggleFaq(1)"
          class="w-full text-left flex items-start space-x-3 pb-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <div class="flex-shrink-0 mt-1">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="flex font-[600] text-slate-600">Preciso fazer exames antes?</h3>
          </div>
        </button>
        
        <div 
          v-if="openFaq === 1"
          class="ml-8 pb-4 pr-4 text-gray-600 leading-relaxed animate-fade-in"
        >
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
        </div>
      </div>

      <!-- FAQ Item 3 -->
      <div class="faq-item">
        <button 
          @click="toggleFaq(2)"
          class="w-full text-left flex items-start space-x-3 pb-4  rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <div class="flex-shrink-0 mt-1">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="flex font-[600] text-slate-600">Quem assina os certificados?</h3>
          </div>
        </button>
        
        <div 
          v-if="openFaq === 2"
          class="ml-8 pb-4 pr-4 text-gray-600 leading-relaxed animate-fade-in"
        >
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
        </div>
      </div>

      <!-- FAQ Item 4 -->
      <div class="faq-item">
        <button 
          @click="toggleFaq(3)"
          class="w-full text-left flex items-start space-x-3 pb-4  rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <div class="flex-shrink-0 mt-1">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="flex font-[600] text-slate-600">Como sei se ele é válido?</h3>
          </div>
        </button>
        
        <div 
          v-if="openFaq === 3"
          class="ml-8 pb-4 pr-4 text-gray-600 leading-relaxed animate-fade-in"
        >
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
        </div>
      </div>

      <!-- FAQ Item 5 -->
      <div class="faq-item">
        <button 
          @click="toggleFaq(4)"
          class="w-full text-left flex items-start space-x-3 pb-4  rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <div class="flex-shrink-0 mt-1">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="flex font-[600] text-slate-600">Quanto tempo leva?</h3>
          </div>
        </button>
        
        <div 
          v-if="openFaq === 4"
          class="ml-8 pb-4 pr-4 text-gray-600 leading-relaxed animate-fade-in"
        >
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
        </div>
      </div>

      <!-- FAQ Item 6 -->
      <div class="faq-item">
        <button 
          @click="toggleFaq(5)"
          class="w-full text-left flex items-start space-x-3 pb-4  rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <div class="flex-shrink-0 mt-1">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="flex font-[600] text-slate-600">Posso usar o mesmo para várias provas?</h3>
          </div>
        </button>
        
        <div 
          v-if="openFaq === 5"
          class="ml-8 pb-4 pr-4 text-gray-600 leading-relaxed animate-fade-in"
        >
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Reactive data
const openFaq = ref<number | null>(null)

// Methods
const toggleFaq = (index: number): void => {
  if (openFaq.value === index) {
    openFaq.value = null
  } else {
    openFaq.value = index
  }
}
</script>

<style scoped>
.faq-item {
  border-bottom: 1px solid #e5e7eb;
}

.faq-item:last-child {
  border-bottom: none;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>



