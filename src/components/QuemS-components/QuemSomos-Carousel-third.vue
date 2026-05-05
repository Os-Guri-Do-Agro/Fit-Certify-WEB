<template>
  <Swiper
    :modules="modules"
    :pagination="{ clickable: true }"
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
import { Pagination } from 'swiper/modules'
import { useI18n } from '../../composables/useI18n'
import teamEmilioImg from '../../assets/quems-imgs/emilio-perfil.jpg'
import teamLucasImg from '../../assets/quems-imgs/lucas-perfil.jpg'
import teamMarceloImg from '../../assets/quems-imgs/marcelo-perfil.png'

const modules = [Pagination]
const { t } = useI18n()

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
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  padding: 20px 18px 22px;
}
.qs-tm-card__photo {
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 16px;
  background: #111;
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
  color: #fff;
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
  color: rgba(255, 255, 255, 0.55);
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
  .qs-tm-card__inner:hover .qs-tm-card__img,
  .qs-tm-card__inner:active .qs-tm-card__img {
    transform: none;
  }
}
</style>
