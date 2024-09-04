/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Asegúrate de incluir todos los archivos donde usas Tailwind CSS
  ],
  theme: {
    extend: {
      keyframes: {
        'despegue': {
          '0%': { bottom: '0', opacity: '1' },
          '100%': { bottom: '100vh', opacity: '1' }, // Ajusta la altura del despegue
        },
        'desvanecer': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'despegar-y-desvanecer': 'despegue 1s ease-in-out forwards, desvanecer 1s 1s forwards',
      }
    },
  },
  plugins: [],
}
