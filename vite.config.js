

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
  };

  if (command !== 'serve') {
    config.base = '/DEV005-movie-challenge-fw/';
  }

  return config;
});
