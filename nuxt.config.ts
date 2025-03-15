// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxt/content'
  ],
  content: {
    documentDriven: true,
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      }
    }
  },
  app: {
    head: {
      title: 'Shanbay - Your Smart English Vocabulary Learning Extension',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Enhance your English vocabulary learning with Shanbay browser extension. Learn smarter, remember longer.' },
        { name: 'keywords', content: 'English vocabulary, language learning, browser extension, vocabulary builder' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
      ]
    }
  },
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light'
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'sitemap.xml'
  },
  sitemap: {
    hostname: 'https://shanbay.pages.dev'
  }
})
