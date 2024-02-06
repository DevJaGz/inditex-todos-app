/** @type {import('tailwindcss').Config} */
import tailwindCSSAnimated from 'tailwindcss-animated';

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindCSSAnimated],
};
