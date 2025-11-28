# Guia de Internacionalização (i18n) - FitCertify

## Configuração Implementada

A aplicação agora suporta dois idiomas:
- **Português Brasileiro (pt)** - idioma padrão
- **Inglês (en)** - idioma alternativo

## Estrutura de Arquivos

```
src/
├── i18n/
│   ├── index.ts          # Configuração principal do i18n
│   └── messages/
│       ├── pt.ts         # Traduções em português
│       └── en.ts         # Traduções em inglês
├── composables/
│   └── useI18n.ts        # Composable para facilitar uso do i18n
└── components/
    └── LanguageSelector.vue # Componente seletor de idioma
```

## Como Usar

### 1. Em Componentes Vue (Composition API)

```vue
<template>
  <div>
    <h1>{{ t('nav.home') }}</h1>
    <p>{{ t('common.loading') }}</p>
    <button>{{ t('common.save') }}</button>
  </div>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>
```

### 2. Para HTML com quebras de linha

```vue
<template>
  <h1 v-html="t('home.banner.title')"></h1>
</template>
```

### 3. Trocar idioma programaticamente

```vue
<script setup>
import { useI18n } from '../composables/useI18n'

const { changeLocale, currentLocale } = useI18n()

// Trocar para inglês
const switchToEnglish = () => {
  changeLocale('en')
}

// Trocar para português
const switchToPortuguese = () => {
  changeLocale('pt')
}
</script>
```

## Adicionando Novas Traduções

### 1. Adicione a chave em `src/i18n/messages/pt.ts`:

```typescript
export default {
  // ... outras traduções
  newSection: {
    title: 'Novo Título',
    description: 'Nova descrição em português'
  }
}
```

### 2. Adicione a tradução correspondente em `src/i18n/messages/en.ts`:

```typescript
export default {
  // ... outras traduções
  newSection: {
    title: 'New Title',
    description: 'New description in English'
  }
}
```

### 3. Use no componente:

```vue
<template>
  <h2>{{ t('newSection.title') }}</h2>
  <p>{{ t('newSection.description') }}</p>
</template>
```

## Componente Seletor de Idioma

O componente `LanguageSelector` já está implementado e pode ser usado em qualquer lugar:

```vue
<template>
  <LanguageSelector />
</template>

<script setup>
import LanguageSelector from './components/LanguageSelector.vue'
</script>
```

## Persistência

O idioma selecionado é automaticamente salvo no `localStorage` e restaurado quando o usuário retorna à aplicação.

## Estrutura de Traduções Disponíveis

### Navegação (`nav`)
- home, events, certificates, marketplace, articles, about, contact, login, register

### Comum (`common`)
- loading, error, success, save, cancel, confirm, back, next, previous, search, filter, clear, select, viewMore, readMore

### Home (`home`)
- Seções completas: banner, features, sections, support, sponsors

### Contato (`contact`)
- Formulário completo e seções da página

### Autenticação (`auth`)
- login, register, email, password, etc.

### Outras seções
- events, certificates, marketplace, articles, footer

## Próximos Passos

1. **Aplicar traduções nas páginas restantes**: Eventos, Certificados, Marketplace, Artigos, etc.
2. **Adicionar mais idiomas**: Espanhol, francês, etc.
3. **Implementar pluralização**: Para textos que variam com quantidade
4. **Adicionar formatação de datas/números**: Baseada no idioma selecionado

## Exemplo Completo

```vue
<template>
  <div>
    <LanguageSelector />
    <h1>{{ t('home.title') }}</h1>
    <p>{{ t('home.description') }}</p>
    <button @click="handleClick">
      {{ t('common.save') }}
    </button>
  </div>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'
import LanguageSelector from '../components/LanguageSelector.vue'

const { t, currentLocale } = useI18n()

const handleClick = () => {
  console.log('Idioma atual:', currentLocale.value)
}
</script>
```