// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
import * as dotenv from 'dotenv'

dotenv.config()

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
  ],
  plugins: [
    'plugins/axios.js',
  ],
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY,
    public: {
      baseURL: process.env.NUXT_BASE_URL,
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  primevue: {
    options: {
        ripple: true,
        inputVariant: 'filled',
        theme: {
            preset: Aura,
            options: {
                prefix: 'p',
                darkModeSelector: 'system',
                cssLayer: false
              }
          }
      }
  }
})
