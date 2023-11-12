/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'accent': '#FF6347',
                'un-active': '#696969',
            }
        }
    },
    plugins: [],
}