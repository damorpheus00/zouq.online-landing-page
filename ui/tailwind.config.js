/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    background: {},
    theme: {
        extend: {
            fontSize: {
                "2.5rem": "2.5rem",
            },
            padding: {
                "7.5rem": "7.5rem",
            },
            margin: {
                "1.75rem": "1.75rem",
                "2.5rem": "2.5rem",
                "3.063rem": "3.063rem",
                "3.75rem": "3.75rem",
                "5.625rem": "5.625rem",
                "6.563rem": "6.563rem",
                "7.375rem": "7.375rem",
                "9.375rem": "9.375rem",
                "4.375rem": "4.375rem",
                "11.25rem": "11.25rem",
                "11.375rem": "11.375rem",
                "15.625rem": "15.625rem",
            },
            height: {
                "3.25rem": "3.25rem",
                "3.625rem": "3.625rem",
                "5.25rem": "5.25rem",
                "42.125rem": "42.125rem",
                "19.75rem": "19.75rem",
                "24.688rem": "24.688rem",
                "10.5rem": "10.5rem",
            },
            width: {
                "31.875rem": "31.875rem",
                "16.75rem": "16.75rem",
                "25.375rem": "25.375rem",
            },
            borderRadius: {
                "2.5rem": "2.5rem",
                "1.25rem": "1.25rem",
            },
            backgroundImage: {
                "url('./src/assets/images/hero.jpg')":
                    "url('./src/assets/images/hero.jpg')",
            },
            fontWeight: {
                450: "450",
            },
        },
        colors: {
            primaryblue: "#172082",
            primarypaleBlue: "#3dd5f3",
            black: "#000000",
            neutralcolorblack4: "#535353",
            neutralcolorblack5: "#9e9e9e",
            neutralcolorwhite: "#ffffff",
            primaryblue: "#131b6c",
            primarydarkblue: "#0F161C",
            primarylightblue: "#3881c3",
            primarypaleblue: "#3dd5f3",
            steelblue: "#3880c3",
        },
    },
};
