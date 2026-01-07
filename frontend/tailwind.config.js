/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00f3ff',
          pink: '#bc13fe',
          green: '#0aff0a',
          blue: '#3145ff',
        },
        dark: {
          bg: '#050510',
          card: '#0a0a1f',
          input: '#12122a',
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 243, 255, 0.5)',
        'glow-pink': '0 0 20px rgba(188, 19, 254, 0.5)',
        'glow-green': '0 0 20px rgba(10, 255, 10, 0.5)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ensure Inter is loaded or fallback
      },
    },
  },
  plugins: [],
}
