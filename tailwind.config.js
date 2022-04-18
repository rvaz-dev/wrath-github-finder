module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
      extend: {},
  },
  // add daisyUI plugin
  plugins: [require("@tailwindcss/typography"), require('daisyui')],
}