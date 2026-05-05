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
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid #dbe3ef;
  background: linear-gradient(168deg, #ffffff 0%, #f8fafc 100%);
  padding: 22px 20px 26px;
  text-align: left;
  box-shadow: 0 22px 52px -38px rgba(15, 23, 42, 0.26);
  transition:
    border-color 0.32s ease,
    box-shadow 0.32s ease,
    transform 0.38s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.qs-mvv-m-card__surface::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, rgba(0, 198, 254, 0.65), rgba(136, 206, 13, 0.55), transparent);
  opacity: 0.85;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.qs-mvv-m-card:hover .qs-mvv-m-card__surface {
  border-color: rgba(0, 198, 254, 0.42);
  box-shadow: 0 30px 70px -34px rgba(0, 198, 254, 0.2);
  transform: translateY(-6px);
}
.qs-mvv-m-card:hover .qs-mvv-m-card__surface::before {
  opacity: 1;
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
  transition:
    border-color 0.3s ease,
    background-color 0.3s ease,
    transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.qs-mvv-m-card:hover .qs-mvv-m-card__icon-wrap {
  border-color: rgba(136, 206, 13, 0.45);
  background: rgba(136, 206, 13, 0.1);
  transform: scale(1.06);
}
.qs-mvv-m-card__icon {
  width: 26px;
  height: 26px;
  color: #00c6fe;
  transition: color 0.3s ease;
}
.qs-mvv-m-card:hover .qs-mvv-m-card__icon {
  color: #88ce0d;
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
  color: #0f172a;
}
.qs-mvv-m-card__p {
  margin: 0;
  font-size: 15px;
  line-height: 1.72;
  color: #475569;
}
.qs-mvv-m-card__ul {
  margin: 0;
  padding-left: 1.15rem;
  font-size: 15px;
  line-height: 1.65;
  color: #475569;
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
  background: rgba(15, 23, 42, 0.14);
  opacity: 1;
  transition:
    transform 0.25s ease,
    background 0.25s ease;
}
:deep(.swiper-pagination-bullet-active) {
  background: #00c6fe;
  transform: scale(1.15);
}

@media (prefers-reduced-motion: reduce) {
  .qs-mvv-m-card:hover .qs-mvv-m-card__surface,
  .qs-mvv-m-card:hover .qs-mvv-m-card__icon-wrap {
    transform: none;
  }
}
</style>
