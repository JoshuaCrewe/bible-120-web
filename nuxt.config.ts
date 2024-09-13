// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            titleTemplate: 'Bible 120',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                {
                    name: 'description',
                    content: 'Read the whole bible in 120 days',
                }
            ]
        }

    },
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    modules: ['@nuxtjs/color-mode'],
    colorMode: {
        classSuffix: ''
    },

    ssr: true,
    experimental: {
        payloadExtraction: false
    },
    router: {
        options: {
            strict: false,
        }
    },
    sourcemap: false,
})
