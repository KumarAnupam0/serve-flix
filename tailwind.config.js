/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/index.html",          // Include the main HTML file in the public directory
        "./src/**/*.{js,jsx,ts,tsx}",   // Include all files in the src directory with JSX/TSX
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
