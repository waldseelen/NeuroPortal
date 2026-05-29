/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--color-background-primary)',
          secondary: 'var(--color-background-secondary)',
          info: 'var(--color-background-info)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
          info: 'var(--color-text-info)',
        },
        border: {
          secondary: 'var(--color-border-secondary)',
          tertiary: 'var(--color-border-tertiary)',
        }
      },
      borderRadius: {
        'md': 'var(--border-radius-md)',
        'lg': 'var(--border-radius-lg)',
      }
    },
  },
  plugins: [],
}
