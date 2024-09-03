// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({   

  plugins: [react()],
  base: '/Portafolio/',   
 // Ajusta esto según la ubicación de tu proyecto en GitHub Pages
});