<template>
  <div class="art-pages-root">
    <div
      class="grid w-full place-items-stretch justify-center gap-8 md:grid-cols-2 md:grid-rows-1 md:gap-6 lg:gap-8"
    >
      <template v-if="isLoading">
        <div
          v-for="n in itemsPerPage"
          :key="'skeleton-' + n"
          class="art-card art-card--skeleton flex w-full flex-col overflow-hidden rounded-[18px] border border-white/10"
        >
          <div class="art-card__media bg-white/10" />
          <div class="art-card__body">
            <div class="h-7 w-4/5 max-w-[420px] rounded bg-white/10" />
            <div class="mt-2 h-4 w-full rounded bg-white/[0.08]" />
            <div class="h-4 w-5/6 rounded bg-white/[0.08]" />
            <div class="mt-auto h-10 w-[140px] rounded-lg bg-white/[0.08]" />
          </div>
        </div>
      </template>

      <template v-else>
        <article
          v-for="item in Artigos.data"
          :key="item.id"
          class="art-card group flex w-full flex-col overflow-hidden rounded-[18px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent shadow-[0_28px_72px_-40px_rgba(0,0,0,0.85)]"
        >
          <div class="art-card__media relative overflow-hidden">
            <img
              class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              :src="item.imagensArtigo.find((i: any) => i.isBanner == false)?.imagemUrl"
              alt=""
            />
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060606]/80 via-transparent to-transparent opacity-90"
              aria-hidden="true"
            />
          </div>

          <div class="art-card__body">
            <h2 class="art-card__title font-head">
              {{ getLocalizedField(item, 'titulo') }}
            </h2>
            <p class="art-card__excerpt">
              {{ getLocalizedField(item, 'subTitulo') }}
            </p>
            <div class="mt-auto pt-2">
              <RouterLink
                :to="{ name: 'ArtigoDetalhe', params: { id: item.id } }"
                class="btn-ghost inline-flex"
                @click="emit('refresh-page', item.id)"
              >
                {{ t('artigos.button') }}
              </RouterLink>
            </div>
          </div>
        </article>
      </template>
    </div>

    <div class="art-pagination mt-14 flex justify-center md:mt-16">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="itemsPerPage"
        :total="totalItens"
        :pager-count="7"
        background
        layout="prev, pager, next"
        @current-change="buscarArtigos"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import ArtigoService from '../../services/Artigos/artigos-service'
import { useI18n } from '../../composables/useI18n'

const { t, currentLocale } = useI18n()

function getLocalizedField(item: any, field: string) {
  return currentLocale.value === 'en' ? item[`en_${field}`] : item[field]
}
const emit = defineEmits<{
  'refresh-page': [id: string]
}>()

const props = defineProps<{
  categoriaId?: string
}>()

interface Artigo {
  id: string
  title?: string
  createdAt: string
  [key: string]: any
}

const Artigos = ref<{ data: Artigo[] }>({ data: [] })
const isLoading = ref(false)

const currentPage = ref(1)
const itemsPerPage = ref(4)
const categoriaArtigoId = ref(props.categoriaId)
const totalPages = ref(1)
const totalItens = ref(0)

async function buscarArtigos() {
  try {
    isLoading.value = true
    const response = await ArtigoService.getAllPaginated(
      currentPage.value,
      itemsPerPage.value,
      categoriaArtigoId.value,
      false,
      true
    )

    const data = response.data
    totalItens.value = data.total

    Artigos.value.data = (data.itens || [])
      .filter((a: Artigo) => (a as any)?.ativo === true)
      .sort((a: Artigo, b: Artigo) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      })

    totalPages.value = data.totalPages
  } finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  await buscarArtigos()
})

watch([currentPage, categoriaArtigoId], () => {
  buscarArtigos()
})

watch(
  () => props.categoriaId,
  (newValue) => {
    categoriaArtigoId.value = newValue
    currentPage.value = 1
  }
)
</script>

<style scoped lang="postcss">
@reference '../../style.css';

.art-pages-root {
  --ap-btn-radius: 8px;
  --ap-btn-duration: 0.22s;
  --ap-btn-ease: cubic-bezier(0.2, 0.8, 0.2, 1);
  --ap-btn-lift: translateY(-1px);
}

.font-head {
  font-family: 'Space Grotesk', sans-serif;
}

.art-card {
  max-height: 560px;
}
@media (min-width: 768px) {
  .art-card {
    max-height: 580px;
  }
}
@media (min-width: 1024px) {
  .art-card {
    max-height: 600px;
  }
}

.art-card__media {
  width: 100%;
  flex-shrink: 0;
  aspect-ratio: 16 / 10;
  max-height: 240px;
}
@media (min-width: 768px) {
  .art-card__media {
    max-height: 260px;
  }
}
@media (min-width: 1024px) {
  .art-card__media {
    max-height: 280px;
  }
}

.art-card__body {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 22px 20px 24px;
  min-height: 0;
  flex: 1 1 auto;
}
@media (min-width: 768px) {
  .art-card__body {
    padding: 24px 24px 26px;
  }
}

.art-card__title {
  margin: 0;
  font-size: clamp(1.05rem, 2vw, 1.4rem);
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: #fff;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.art-card__excerpt {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.55);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
@media (min-width: 768px) {
  .art-card__excerpt {
    font-size: 15px;
  }
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  border-radius: var(--ap-btn-radius);
  border: 1px solid #00c6fe;
  background: transparent;
  padding: 8px 18px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #00c6fe;
  text-decoration: none;
  cursor: pointer;
  transition:
    transform var(--ap-btn-duration) var(--ap-btn-ease),
    box-shadow var(--ap-btn-duration) var(--ap-btn-ease),
    background-color var(--ap-btn-duration) var(--ap-btn-ease),
    color var(--ap-btn-duration) var(--ap-btn-ease);
}
.btn-ghost:hover {
  background: #00c6fe;
  color: #060606;
  transform: var(--ap-btn-lift);
  box-shadow: 0 12px 32px -18px rgba(0, 198, 254, 0.4);
}

.art-card--skeleton {
  animation: art-pulse 1.4s ease-in-out infinite;
}

@keyframes art-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.72;
  }
}

.art-pagination :deep(.el-pagination.is-background .btn-prev),
.art-pagination :deep(.el-pagination.is-background .btn-next),
.art-pagination :deep(.el-pagination.is-background .el-pager li) {
  background-color: rgba(255, 255, 255, 0.06) !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.75) !important;
}
.art-pagination :deep(.el-pagination.is-background .btn-prev:hover),
.art-pagination :deep(.el-pagination.is-background .btn-next:hover),
.art-pagination :deep(.el-pagination.is-background .el-pager li:hover) {
  color: #fff !important;
  border-color: rgba(0, 198, 254, 0.45);
}
.art-pagination :deep(.el-pagination.is-background .el-pager li.is-active) {
  background: linear-gradient(135deg, #00c6fe, #00a8d6) !important;
  border-color: rgba(0, 198, 254, 0.5);
  color: #060606 !important;
  font-weight: 700;
}
.art-pagination :deep(.el-pagination.is-background .btn-prev:disabled),
.art-pagination :deep(.el-pagination.is-background .btn-next:disabled) {
  opacity: 0.35;
}

@media (prefers-reduced-motion: reduce) {
  .art-card--skeleton {
    animation: none;
  }
  .btn-ghost:hover {
    transform: none;
  }
}
</style>
