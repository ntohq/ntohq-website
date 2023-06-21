// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/devtools',
        '@nuxtjs/color-mode'
    ],
    colorMode: {
        preference: 'system', // default theme
        dataValue: 'theme', // activate data-theme in <html> tag
    },
    devtools: {
        enabled: true,
        vscode: {}
    }
})
