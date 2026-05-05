<template>
  <Swiper
    :modules="modules"
    :pagination="{ clickable: true }"
    :space-between="14"
    class="qs-pillars-swiper w-full pb-11"
  >
    <SwiperSlide v-for="(p, i) in pillars" :key="p.id">
      <article class="qs-pm-card">
        <div class="qs-pm-card__surface">
          <div class="qs-pm-card__top">
            <span class="qs-pm-card__tag font-head">{{ String(i + 1).padStart(2, '0') }}</span>
            <component :is="p.icon" class="qs-pm-card__ico" aria-hidden="true" />
          </div>
          <p class="qs-pm-card__text">{{ t(`quemSomos.section2.card${i + 1}`) }}</p>
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
import {
  ClipboardDocumentCheckIcon,
  ComputerDesktopIcon,
  ChartBarSquareIcon,
  CalendarDaysIcon,
  LinkIcon,
  LockClosedIcon,
} from '@heroicons/vue/24/outline'
import { useI18n } from '../../composables/useI18n'

const modules = [Pagination]
const { t } = useI18n()

const pillars = [
  { id: 'p1', icon: ClipboardDocumentCheckIcon },
  { id: 'p2', icon: ComputerDesktopIcon },
  { id: 'p3', icon: ChartBarSquareIcon },
  { id: 'p4', icon: CalendarDaysIcon },
  { id: 'p5', icon: LinkIcon },
  { id: 'p6', icon: LockClosedIcon },
]
</script>

<style scoped>
.qs-pm-card {
  min-width: 0;
  height: 100%;
}
.qs-pm-card__surface {
  display: flex;
  height: 100%;
  min-height: 220px;
  flex-direction: column;
  border-radius: 18px;
  border: 1px solid #dbe3ef;
  background: linear-gradient(165deg, #ffffff 0%, #f8fafc 100%);
  padding: 22px 20px 24px;
  box-shadow: 0 22px 56px -40px rgba(15, 23, 42, 0.28);
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.qs-pm-card:hover .qs-pm-card__surface {
  border-color: rgba(0, 198, 254, 0.45);
  box-shadow: 0 28px 64px -36px rgba(0, 198, 254, 0.18);
  transform: translateY(-4px);
}
.qs-pm-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 16px;
}
.qs-pm-card__tag {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: rgba(136, 206, 13, 0.95);
}
.qs-pm-card__ico {
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  color: #00c6fe;
}
.qs-pm-card__text {
  margin: 0;
  font-size: 15px;
  line-height: 1.55;
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
  .qs-pm-card:hover .qs-pm-card__surface {
    transform: none;
  }
}
</style>
