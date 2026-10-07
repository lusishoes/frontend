// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxt/test-utils/module',
    '@vueuse/nuxt',
    '@vee-validate/nuxt',
  ],
  devtools: { enabled: true },
  'vee-validate': {
    typedSchemaPackage: 'zod',
  },
  content: {
    experimental: {
      // встроенный node:sqlite вместо better-sqlite3 (тот требует компиляции через Visual Studio)
      sqliteConnector: 'native',
    },
  },
  compatibilityDate: '2024-04-03',
  nitro: {
    // обход бага Nuxt 4.6.0 на Windows (https://github.com/nuxt/nuxt/issues/36467):
    // без этого любая страница отдаёт 500 "Either manifest or precomputed data must be provided".
    // Убрать после выхода nitropack с фиксом nitrojs/nitro#4732
    externals: { inline: [/[\\/]node_modules[\\/]nuxt[\\/]dist[\\/]/] },
  },
})
