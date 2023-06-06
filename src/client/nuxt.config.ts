// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/devtools'
    ],
    devtools: {
        enabled: true,
        vscode: {}
    }
})
