// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import prettier from 'eslint-config-prettier/flat'

// prettier в конце: отключает правила ESLint, которые спорят с форматированием Prettier
export default withNuxt(prettier)
