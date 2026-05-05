<template>
  <Swiper
    :modules="modules"
    :pagination="{ clickable: true }"
    :space-between="14"
    class="mcd-swiper w-full pb-11"
  >
    <SwiperSlide v-for="(card, i) in items" :key="card.id">
      <article class="mcd-card">
        <div class="mcd-card__surface">
          <div class="mcd-card__top">
            <span class="mcd-card__tag font-head">{{ String(i + 1).padStart(2, '0') }}</span>
            <div
              class="mcd-card__icon-wrap"
              :class="i % 2 === 0 ? 'mcd-card__icon-wrap--cyan' : 'mcd-card__icon-wrap--lime'"
            >
              <component :is="card.icon" class="mcd-card__ico" aria-hidden="true" />
            </div>
          </div>
          <h3 class="mcd-card__title font-head">{{ t(card.titleKey) }}</h3>
          <p class="mcd-card__body">{{ t(card.textKey) }}</p>
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
import { useI18n } from '../../composables/useI18n'

defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const modules = [Pagination]
const { t } = useI18n()
</script>

<style scoped>
.font-head {
  font-family: 'Space Grotesk', sans-serif;
}

.mcd-card {
  min-width: 0;
  height: 100%;
}
.mcd-card__surface {
  display: flex;
  min-height: 200px;
  flex-direction: column;
  border-radius: 18px;
  border: 1px solid #dbe3ef;
  background: linear-gradient(165deg, #ffffff 0%, #f8fafc 100%);
  padding: 24px 22px 26px;
  box-shadow: 0 22px 56px -40px rgba(15, 23, 42, 0.25);
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.mcd-card:hover .mcd-card__surface {
  border-color: rgba(0, 198, 254, 0.45);
  box-shadow: 0 28px 64px -36px rgba(0, 198, 254, 0.16);
  transform: translateY(-3px);
}
.mcd-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}
.mcd-card__tag {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: rgba(136, 206, 13, 0.95);
}
.mcd-card__icon-wrap {
  display: flex;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  border: 1px solid #dbe3ef;
  background: linear-gradient(155deg, #ffffff 0%, #f1f5f9 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.85),
    0 10px 28px -16px rgba(15, 23, 42, 0.22);
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.mcd-card__icon-wrap--cyan {
  border-color: rgba(0, 198, 254, 0.38);
  background: linear-gradient(145deg, rgba(0, 198, 254, 0.2) 0%, rgba(0, 198, 254, 0.06) 100%);
  box-shadow:
    inset 0 1px 0 rgba(0, 198, 254, 0.2),
    0 14px 36px -18px rgba(0, 198, 254, 0.38);
}
.mcd-card__icon-wrap--lime {
  border-color: rgba(136, 206, 13, 0.38);
  background: linear-gradient(145deg, rgba(136, 206, 13, 0.18) 0%, rgba(136, 206, 13, 0.05) 100%);
  box-shadow:
    inset 0 1px 0 rgba(136, 206, 13, 0.14),
    0 14px 36px -18px rgba(136, 206, 13, 0.28);
}
.mcd-card:hover .mcd-card__icon-wrap {
  transform: translateY(-3px);
}
.mcd-card__icon-wrap--cyan .mcd-card__ico {
  color: #00c6fe;
}
.mcd-card__icon-wrap--lime .mcd-card__ico {
  color: #7baf12;
}
.mcd-card__ico {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}
.mcd-card__title {
  margin: 0 0 10px;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.35;
  color: #0f172a;
  text-align: left;
}
.mcd-card__body {
  margin: 0;
  margin-top: auto;
  font-size: 14px;
  line-height: 1.62;
  color: #475569;
  text-align: left;
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
  .mcd-card:hover .mcd-card__surface,
  .mcd-card:hover .mcd-card__icon-wrap {
    transform: none;
  }
}
</style>
