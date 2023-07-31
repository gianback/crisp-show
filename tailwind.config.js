/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#016170',
        secondary: '#00E0C6',
      },
      screens: {
        tablet: '768px',
        tabletxl: '1024px',
        laptop: '1200px',
        desktop: '1400px',
      },
    },
  },
  plugins: [],
};
