<template>
  <Swiper
    :modules="modules"
    :pagination="{ clickable: true }"
    :autoplay="autoplayOpts"
    :loop="!!autoplayOpts"
    :space-between="16"
    class="qs-team-swiper w-full pb-11"
  >
    <SwiperSlide v-for="m in teamMembers" :key="m.name">
      <article class="qs-tm-card">
        <div class="qs-tm-card__inner">
          <div class="qs-tm-card__photo">
            <img :src="m.img" :alt="m.name" class="qs-tm-card__img" />
          </div>
          <div class="qs-tm-card__meta">
            <h3 class="qs-tm-card__name font-head">{{ m.name }}</h3>
            <p class="qs-tm-card__role font-head">{{ t(m.titleKey) }}</p>
            <p class="qs-tm-card__bio">{{ t(m.descKey) }}</p>
          </div>
        </div>
      </article>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
import { useI18n } from '../../composables/useI18n'
import teamEmilioImg from '../../assets/quems-imgs/emilio-perfil.jpg'
import teamLucasImg from '../../assets/quems-imgs/lucas-perfil.jpg'
import teamMarceloImg from '../../assets/quems-imgs/marcelo-perfil.png'

const modules = [Pagination, Autoplay]
const { t } = useI18n()

const reduceMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const autoplayOpts = reduceMotion
  ? false
  : {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }

const teamMembers = [
  {
    name: 'Emilio Machado',
    img: teamEmilioImg,
    titleKey: 'quemSomos.section6.emilioTitle',
    descKey: 'quemSomos.section6.emilioDesc',
  },
  {
    name: 'Lucas Machado',
    img: teamLucasImg,
    titleKey: 'quemSomos.section6.lucasTitle',
    descKey: 'quemSomos.section6.lucasDesc',
  },
  {
    name: 'Dr. Marcelo Leitão',
    img: teamMarceloImg,
    titleKey: 'quemSomos.section6.marceloTitle',
    descKey: 'quemSomos.section6.marceloDesc',
  },
]
</script>

<style scoped>
.qs-tm-card {
  min-width: 0;
  height: 100%;
}
.qs-tm-card__inner {
  display: flex;
  flex-direction: column;
  gap: 18px;
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid #dbe3ef;
  background: #ffffff;
  padding: 20px 18px 22px;
  box-shadow: 0 18px 48px -36px rgba(15, 23, 42, 0.2);
  transition:
    border-color 0.28s ease,
    box-shadow 0.32s ease;
}
.qs-tm-card:hover .qs-tm-card__inner {
  border-color: rgba(0, 198, 254, 0.28);
  box-shadow: 0 22px 56px -36px rgba(0, 198, 254, 0.12);
}
.qs-tm-card__photo {
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 16px;
  background: #e2e8f0;
  aspect-ratio: 1;
}
.qs-tm-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.qs-tm-card__inner:active .qs-tm-card__img,
.qs-tm-card__inner:hover .qs-tm-card__img {
  transform: scale(1.03);
}
.qs-tm-card__meta {
  min-width: 0;
  text-align: center;
}
.qs-tm-card__name {
  margin: 0 0 6px;
  font-size: 1.28rem;
  font-weight: 700;
  font-style: normal;
  color: #0f172a;
}
.qs-tm-card__role {
  margin: 0 0 12px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #88ce0d;
}
.qs-tm-card__bio {
  margin: 0;
  font-size: 14px;
  line-height: 1.65;
  color: #475569;
}

:deep(.swiper-pagination) {
  bottom: 0 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  margin: 0 !important;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.2);
  opacity: 1;
  transition:
    width 0.28s ease,
    background-color 0.22s ease;
}
:deep(.swiper-pagination-bullet-active) {
  width: 28px;
  background: #00c6fe;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  .qs-tm-card__inner:hover .qs-tm-card__img,
  .qs-tm-card__inner:active .qs-tm-card__img {
    transform: none;
  }
}
</style>
