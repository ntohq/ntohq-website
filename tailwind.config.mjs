import daisyui from 'daisyui'
import themes from 'daisyui/src/theming/themes'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
        {
            light: {
                ...themes["[data-theme=light]"],
                primary: "#02524E",
                "primary-content":"#ffff", 
                secondary: "#5A8B5A",
                accent: "#72A294",
                neutral: "#003039",
                "base-100": "#F3F4F6",
            },
        },
        "dark"
    ],
  }
}

