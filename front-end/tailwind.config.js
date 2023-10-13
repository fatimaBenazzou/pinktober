import daisyui from "daisyui";
// import themes from "daisyui/src/theming/themes";
import typography from "@tailwindcss/typography";
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    ],
    darkMode: ["class", '[data-theme="garden"]'],
    plugins: [typography, daisyui],
    daisyui: {
        themes: [
            {
                "pinktober-theme": {
                    primary: "#ff4f7b",

                    secondary: "#959595",

                    accent: "#ff739d",

                    neutral: "#444444",

                    "base-100": "#fff4f7",
                    "base-200": "#ffc2d5",

                    info: "#3abff8",

                    success: "#36d399",

                    warning: "#fbbd23",

                    error: "#f87272",
                },
            },
        ],
    },
};
