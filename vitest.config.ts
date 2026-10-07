import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    // окружение с авто-импортами Nuxt (ref, useRoute, компоненты и т.д.)
    environment: 'nuxt',
  },
})
