import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            meta: [
                { name: 'keywords', content: 'Github, Organization, Software, Web, Developers, Open Source' },
                { name: 'author', content: 'ntohq developers @ntohqdev <github@ntohq.dev>' }
            ]
        }
    },
    modules: ['@nuxt/content'],
    content: {
        watch: {
            ws: {
                port: 4000,
                showUrl: true
            }
        }
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {

                }
            }

        }
    },
    vue: {
        config: {
            productionTip: false,
            devtools: true
        }
    },
    css: [
        '@/assets/styles/core.scss',
        '@mdi/font/scss/materialdesignicons.scss'
    ],
    target: 'static'
})