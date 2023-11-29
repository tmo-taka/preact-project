/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{tsx}",
        "./renderer/**/*.{tsx}",
        "./src/**/*.{ts,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'accent': '#FF6347',
                'un-active': '#696969',
            }
        }
    },
    plugins: [require('flowbite/plugin')],
}