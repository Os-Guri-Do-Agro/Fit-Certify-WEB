<template>
  <Swiper
    :modules="modules"
    :pagination="{ clickable: true }"
    :space-between="14"
    class="qs-mvv-swiper w-full pb-11"
  >
    <SwiperSlide v-for="(slide, idx) in mvvSlides" :key="slide.kind + idx">
      <article class="qs-mvv-m-card">
        <div class="qs-mvv-m-card__surface">
          <div class="qs-mvv-m-card__icon-wrap">
            <component :is="slide.icon" class="qs-mvv-m-card__icon" aria-hidden="true" />
          </div>
          <span class="qs-mvv-m-card__idx font-head">{{ String(idx + 1).padStart(2, '0') }}</span>
          <h3 class="qs-mvv-m-card__h font-head">{{ t(slide.titleKey) }}</h3>
          <template v-if="slide.kind === 'list'">
            <ul class="qs-mvv-m-card__ul">
              <li v-for="itemKey in slide.valueKeys" :key="itemKey">{{ t(itemKey) }}</li>
            </ul>
          </template>
          <p v-else class="qs-mvv-m-card__p">{{ t(slide.bodyKey) }}</p>
        </div>
      </article>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { FlagIcon, LightBulbIcon, ShieldCheckIcon } from '@heroicons/vue/24/outline'
import { useI18n } from '../../composables/useI18n'

const modules = [Pagination]
const { t } = useI18n()

const mvvSlides = [
  {
    kind: 'text',
    icon: FlagIcon,
    titleKey: 'quemSomos.section4.card1.text',
    bodyKey: 'quemSomos.section4.card1.descricao',
  },
  {
    kind: 'text',
    icon: LightBulbIcon,
    titleKey: 'quemSomos.section4.card2.text',
    bodyKey: 'quemSomos.section4.card2.descricao',
  },
  {
    kind: 'list',
    icon: ShieldCheckIcon,
    titleKey: 'quemSomos.section4.card3.text',
    valueKeys: [
      'quemSomos.section4.card3.descricao',
      'quemSomos.section4.card3.descricao2',
      'quemSomos.section4.card3.descricao3',
      'quemSomos.section4.card3.descricao4',
      'quemSomos.section4.card3.descricao5',
    ],
  },
]
</script>

<style scoped>
.qs-mvv-m-card {
  min-width: 0;
  height: 100%;
}
.qs-mvv-m-card__surface {
  position: relative;
  display: flex;
  min-height: 280px;
  flex-direction: column;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(168deg, rgba(255, 255, 255, 0.07) 0%, rgba(8, 8, 10, 0.92) 100%);
  padding: 22px 20px 26px;
  text-align: left;
  box-shadow: 0 22px 56px -42px rgba(0, 0, 0, 0.9);
}
.qs-mvv-m-card__surface::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background: radial-gradient(120% 80% at 10% 0%, rgba(0, 198, 254, 0.14) 0%, transparent 55%);
  transition: opacity 0.35s ease;
}
.qs-mvv-m-card__icon-wrap {
  display: flex;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  border: 1px solid rgba(0, 198, 254, 0.28);
  background: rgba(0, 198, 254, 0.08);
  margin-bottom: 14px;
}
.qs-mvv-m-card__icon {
  width: 26px;
  height: 26px;
  color: #00c6fe;
}
.qs-mvv-m-card__idx {
  display: block;
  margin-bottom: 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: rgba(136, 206, 13, 0.9);
}
.qs-mvv-m-card__h {
  margin: 0 0 12px;
  font-size: clamp(1.25rem, 4.5vw, 1.5rem);
  font-weight: 700;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #fff;
}
.qs-mvv-m-card__p {
  margin: 0;
  font-size: 15px;
  line-height: 1.72;
  color: rgba(255, 255, 255, 0.58);
}
.qs-mvv-m-card__ul {
  margin: 0;
  padding-left: 1.15rem;
  font-size: 15px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.58);
}
.qs-mvv-m-card__ul li {
  margin-bottom: 0.45rem;
}
.qs-mvv-m-card__ul li:last-child {
  margin-bottom: 0;
}

:deep(.swiper-pagination) {
  bottom: 0 !important;
}
:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  margin: 0 5px !important;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.22);
  opacity: 1;
  transition:
    transform 0.25s ease,
    background 0.25s ease;
}
:deep(.swiper-pagination-bullet-active) {
  background: #00c6fe;
  transform: scale(1.15);
}
</style>
