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
            fontSize: {},
            padding: {},
            margin: {},
            height: {},
            width: {},
            borderRadius: {},
            backgroundImage: {},
            fontWeight: {},
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
