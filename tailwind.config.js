/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
      backgroundColor: {
        'dark': 'var(--bg-color-dark)', 
      },
      textColor: {
        'dark': 'var(--text-color-dark)', 
      },
    },
  },
  plugins: [],
}
