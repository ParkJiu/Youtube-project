/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#ff0000',
        white: '#ffffff',
        gray: '#6b7280',
        box_gray: '#282828'
      },
    },
  }
}
