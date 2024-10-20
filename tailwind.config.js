import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "1024px",
            xl: "1440px",
        },
        extend: {
            keyframes: {
                slideRight: {
                    "0%": {
                        opacity: 0,
                        left: "-100%",
                    },
                    "100%": {
                        opacity: 1,
                        left: "0",
                    },
                },
                slideLeft: {
                    "0%": {
                        transform: "translateX(30%)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateX(0)",
                    },
                },
            },
            animation: {
                slideRight: "slideRight 1s ease forwards",
                slideLeft: "slideLeft 2s ease forwards",
            },
        },
    },
    plugins: [],
};
