<template>
  <div
    class="w-full min-h-50 md:min-h-80 bg-cyan-400 flex items-center justify-center"
  >
    <div class="container text-center px-5 md:px-20 lg:px-30">
      <h1
        class="text-white text-[1.3em] md:text-[2em] lg:text-[2.5em] font-bold"
        v-html="t('termos.title')"
      >
      </h1>
    </div>
  </div>
  <div class="w-full flex justify-center">
    <div class="bg-sky-50 container">
      <section class="w-full flex justify-center my-10">
        <div class="container px-5 md:px-20 lg:px-30">
          <h2 class="text-[1.2em] md:text-[1.3em] lg:text-[1.5em] font-bold">
            {{ t('termos.section1.title') }}
          </h2>

          <p class="my-5 leading-relaxed" v-html="t('termos.section1.paragraph1')">
          </p>

          <p class="my-5 leading-relaxed" v-html="t('termos.section1.paragraph2')">
          </p>

          <p class="my-5 leading-relaxed" v-html="t('termos.section1.paragraph3')">
          </p>

          <p class="my-5 leading-relaxed" v-html="t('termos.section1.paragraph4')">
          </p>

          <p class="my-5 leading-relaxed" v-html="t('termos.section1.paragraph5')">
          </p>

          <p class="my-5 leading-relaxed" v-html="t('termos.section1.paragraph6')">
          </p>

          <p class="my-5 leading-relaxed" v-html="t('termos.section1.paragraph7')">
          </p>

          <div class="w-full h-2 bg-sky-100 rounded-lg mt-5 mb-0"></div>
        </div>
      </section>

      <section class="w-full flex justify-center my-10">
        <div class="container px-5 md:px-20 lg:px-30">
          <h2 class="text-[1.2em] md:text-[1.3em] lg:text-[1.5em] font-bold">
            {{ t('termos.section2.title') }}
          </h2>

          <p class="my-5 leading-relaxed" v-html="t('termos.section2.paragraph1')">
          </p>

          <div class="w-full h-2 bg-sky-100 rounded-lg mt-5 mb-0"></div>
        </div>
      </section>

      <section class="w-full flex justify-center my-10">
        <div class="container px-5 md:px-20 lg:px-30">
          <h2 class="text-[1.2em] md:text-[1.3em] lg:text-[1.5em] font-bold">
            {{ t('termos.section3.title') }}
          </h2>

          <p class="my-5 leading-relaxed" v-html="t('termos.section3.paragraph1')">
          </p>

          <p class="my-5 leading-relaxed" v-html="t('termos.section3.paragraph2')">
          </p>

          <ol
            class="list-decimal list-inside my-5 leading-relaxed ml-5 md:ml-10"
          >
            <li v-html="t('termos.section3.list1')">
            </li>
            <li v-html="t('termos.section3.list2')">
            </li>
          </ol>

          <p class="my-5 leading-relaxed" v-html="t('termos.section3.paragraph3')">
          </p>

          <p class="my-5 leading-relaxed" v-html="t('termos.section3.paragraph4')">
          </p>

          <div class="w-full h-2 bg-sky-100 rounded-lg mt-5 mb-10"></div>
        </div>
      </section>

      <section class="w-full flex justify-center my-10">
        <div class="container px-5 md:px-20 lg:px-30">
          <h2 class="text-[1.2em] md:text-[1.3em] lg:text-[1.5em] font-bold">
            {{ t('termos.section4.title') }}
          </h2>

          <p class="my-5 leading-relaxed" v-html="t('termos.section4.paragraph1')">
          </p>

          <div class="w-full h-2 bg-sky-100 rounded-lg mt-5 mb-0"></div>
        </div>
      </section>

      <section class="w-full flex justify-center my-10">
        <div class="container px-5 md:px-20 lg:px-30">
          <h2 class="text-[1.2em] md:text-[1.3em] lg:text-[1.5em] font-bold">
            {{ t('termos.section5.title') }}
          </h2>

          <p class="my-5 leading-relaxed" v-html="t('termos.section5.paragraph1')">
          </p>

          <ul class="list-disc list-inside my-5 leading-relaxed space-y-2">
            <li v-html="t('termos.section5.list1')"></li>
            <li v-html="t('termos.section5.list2')"></li>
            <li v-html="t('termos.section5.list3')"></li>
            <li v-html="t('termos.section5.list4')"></li>
            <li v-html="t('termos.section5.list5')"></li>
            <li v-html="t('termos.section5.list6')"></li>
          </ul>

          <div class="w-full h-2 bg-sky-100 rounded-lg mt-5 mb-0"></div>
        </div>
      </section>

      <section class="w-full flex justify-center my-10">
        <div class="container px-5 md:px-20 lg:px-30">
          <h2 class="text-[1.2em] md:text-[1.3em] lg:text-[1.5em] font-bold">
            {{ t('termos.section6.title') }}
          </h2>

          <p class="my-5 leading-relaxed" v-html="t('termos.section6.paragraph1')">
          </p>

          <div class="w-full h-2 bg-sky-100 rounded-lg mt-5 mb-0"></div>
        </div>
      </section>

      <section class="w-full flex justify-center my-10">
        <div class="container px-5 md:px-20 lg:px-30">
          <h2 class="text-[1.2em] md:text-[1.3em] lg:text-[1.5em] font-bold">
            {{ t('termos.section7.title') }}
          </h2>

          <p class="my-5 leading-relaxed" v-html="t('termos.section7.paragraph1')">
          </p>

          <div class="w-full h-2 bg-sky-100 rounded-lg mt-5 mb-0"></div>
        </div>
      </section>

      <section class="w-full flex justify-center my-10">
        <div class="container px-5 md:px-20 lg:px-30">
          <h2 class="text-[1.2em] md:text-[1.3em] lg:text-[1.5em] font-bold">
            {{ t('termos.section8.title') }}
          </h2>

          <p class="my-5 leading-relaxed" v-html="t('termos.section8.paragraph1')">
          </p>

          <div class="w-full h-2 bg-sky-100 rounded-lg mt-5 mb-0"></div>
        </div>
      </section>

      <section class="w-full flex justify-center my-10">
        <div class="container px-5 md:px-20 lg:px-30">
          <h2 class="text-[1.2em] md:text-[1.3em] lg:text-[1.5em] font-bold">
            {{ t('termos.section9.title') }}
          </h2>

          <p class="my-5 leading-relaxed" v-html="t('termos.section9.paragraph1')">
          </p>

          <p class="my-5 leading-relaxed" v-html="t('termos.section9.paragraph2')">
          </p>

          <div class="w-full h-2 bg-sky-100 rounded-lg mt-5 mb-0"></div>
        </div>
      </section>

      <section class="w-full flex justify-center my-10">
        <div class="container px-5 md:px-20 lg:px-30">
          <h2 class="text-[1.2em] md:text-[1.3em] lg:text-[1.5em] font-bold">
            {{ t('termos.section10.title') }}
          </h2>

          <p class="my-5 leading-relaxed" v-html="t('termos.section10.paragraph1')">
          </p>

          <div class="w-full h-2 bg-sky-100 rounded-lg mt-5 mb-0"></div>
        </div>
      </section>

      <section class="w-full flex justify-center my-10">
        <div class="container px-5 md:px-20 lg:px-30">
          <h2 class="text-[1.2em] md:text-[1.3em] lg:text-[1.5em] font-bold">
            {{ t('termos.section11.title') }}
          </h2>

          <p class="my-5 leading-relaxed" v-html="t('termos.section11.paragraph1')">
          </p>
          <div class="w-full h-2 bg-sky-100 rounded-lg mt-5 mb-0"></div>
        </div>
      </section>

      <section class="w-full flex justify-center my-10">
        <div class="container px-5 md:px-20 lg:px-30">
          <h2 class="text-[1.2em] md:text-[1.3em] lg:text-[1.5em] font-bold">
            {{ t('termos.section12.title') }}
          </h2>

          <p class="my-5 leading-relaxed" v-html="t('termos.section12.paragraph1')">
          </p>
          <div class="w-full h-2 bg-sky-100 rounded-lg mt-5 mb-0"></div>
        </div>
      </section>

      <section class="w-full flex justify-center my-10">
        <div class="container px-5 md:px-20 lg:px-30">
          <h2 class="text-[1.2em] md:text-[1.3em] lg:text-[1.5em] font-bold">
            {{ t('termos.section13.title') }}
          </h2>

          <p class="my-5 leading-relaxed" v-html="t('termos.section13.paragraph1')">
          </p>
          <div class="w-full h-2 bg-sky-100 rounded-lg mt-5 mb-0"></div>
        </div>
      </section>

      <section class="w-full flex justify-center my-10">
        <div class="container px-5 md:px-20 lg:px-30">
          <h2 class="text-[1.2em] md:text-[1.3em] lg:text-[1.5em] font-bold">
            {{ t('termos.section14.title') }}
          </h2>

          <p class="my-5 leading-relaxed" v-html="t('termos.section14.paragraph1')">
          </p>
          <div class="w-full h-2 bg-sky-100 rounded-lg mt-5 mb-0"></div>
        </div>
      </section>

      <section class="w-full flex justify-center my-10">
        <div class="container px-5 md:px-20 lg:px-30">
          <h2 class="text-[1.2em] md:text-[1.3em] lg:text-[1.5em] font-bold">
            {{ t('termos.section15.title') }}
          </h2>

          <p class="my-5 leading-relaxed" v-html="t('termos.section15.paragraph1')">
          </p>
          <div class="w-full h-2 bg-sky-100 rounded-lg mt-5 mb-0"></div>
        </div>
      </section>

      <section class="w-full flex justify-center my-10">
        <div class="container px-5 md:px-20 lg:px-30">
          <h2 class="text-[1.2em] md:text-[1.3em] lg:text-[1.5em] font-bold">
            {{ t('termos.section16.title') }}
          </h2>

          <p class="my-5 leading-relaxed" v-html="t('termos.section16.paragraph1')">
          </p>
          <div class="w-full h-2 bg-sky-100 rounded-lg mt-5 mb-0"></div>
        </div>
      </section>

      <section class="w-full flex justify-center my-10">
        <div class="container px-5 md:px-20 lg:px-30">
          <h2 class="text-[1.2em] md:text-[1.3em] lg:text-[1.5em] font-bold">
            {{ t('termos.section17.title') }}
          </h2>

          <p class="my-5 leading-relaxed" v-html="t('termos.section17.paragraph1')">
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>