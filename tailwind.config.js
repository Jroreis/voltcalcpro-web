/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a7ea4',
        secondary: '#ff6b6b',
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
        neutral: '#6b7280',
      },
    },
  },
  plugins: [],
};
