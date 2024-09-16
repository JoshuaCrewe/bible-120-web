// https://nuxt.com/docs/api/configuration/nuxt-config
let opts: object = {
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
    modules: [],
    colorMode: {
        classSuffix: '',
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
}

// It would be ideal to check that this can be imported by checking if cookies are enabled
// This doesn't seem super possible at the moment though
opts.modules.push('@nuxtjs/color-mode');

export default defineNuxtConfig(opts)
