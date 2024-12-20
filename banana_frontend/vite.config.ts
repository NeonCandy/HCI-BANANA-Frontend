import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    host: '0.0.0.0',  // Listen on all network interfaces
    port: 5000,       // Default port, change if needed
  },
});