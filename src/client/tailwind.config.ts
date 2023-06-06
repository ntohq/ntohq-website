const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [
        require('daisyui'),
        iconsPlugin({
            // Select the icon collections you want to use
            collections: getIconCollections(["mdi", "uil"]),
        }),
    ],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/colors/themes")["[data-theme=light]"],
                    primary: "#02524E",
                    secondary: "#5A8B5A",
                    accent: "#72A294",
                    neutral: "#003039",
                    "base-100": "#F3F4F6",
                },
            },
        ],
    }
}; 