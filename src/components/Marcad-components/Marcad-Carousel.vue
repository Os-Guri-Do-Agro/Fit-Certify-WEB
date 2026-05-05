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
  min-height: 220px;
  flex-direction: column;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(165deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
  padding: 22px 20px 24px;
  box-shadow: 0 22px 56px -40px rgba(0, 0, 0, 0.85);
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
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(155deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 40%, rgba(8, 10, 14, 0.92) 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 10px 28px -14px rgba(0, 0, 0, 0.65);
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.mcd-card__icon-wrap--cyan {
  border-color: rgba(0, 198, 254, 0.38);
  background: linear-gradient(145deg, rgba(0, 198, 254, 0.28) 0%, rgba(0, 198, 254, 0.08) 42%, rgba(6, 8, 12, 0.92) 100%);
  box-shadow:
    inset 0 1px 0 rgba(0, 198, 254, 0.2),
    0 14px 36px -18px rgba(0, 198, 254, 0.38);
}
.mcd-card__icon-wrap--lime {
  border-color: rgba(136, 206, 13, 0.38);
  background: linear-gradient(145deg, rgba(136, 206, 13, 0.26) 0%, rgba(136, 206, 13, 0.07) 42%, rgba(6, 8, 12, 0.92) 100%);
  box-shadow:
    inset 0 1px 0 rgba(136, 206, 13, 0.14),
    0 14px 36px -18px rgba(136, 206, 13, 0.28);
}
.mcd-card:hover .mcd-card__icon-wrap {
  transform: translateY(-2px);
}
.mcd-card__icon-wrap--cyan .mcd-card__ico {
  color: #7ddbfe;
}
.mcd-card__icon-wrap--lime .mcd-card__ico {
  color: #b8ef5a;
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
  color: #fff;
  text-align: left;
}
.mcd-card__body {
  margin: 0;
  margin-top: auto;
  font-size: 14px;
  line-height: 1.62;
  color: rgba(255, 255, 255, 0.58);
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

@media (prefers-reduced-motion: reduce) {
  .mcd-card:hover .mcd-card__icon-wrap {
    transform: none;
  }
}
</style>
