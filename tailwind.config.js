/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#0f3b2e',
        sage: '#1f5a47',
        gold: '#b89b54',
        ivory: '#f7f5ef',
        charcoal: '#212121',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 12px 40px rgba(33, 33, 33, 0.1)',
        soft: '0 10px 30px rgba(15, 59, 46, 0.08)',
      },
      maxWidth: {
        prose: '72ch',
      },
    },
  },
  plugins: [],
};
