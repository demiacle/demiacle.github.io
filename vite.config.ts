import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// demiacle.github.io is a user site, so it is served from the domain root.
export default defineConfig({
  base: '/',
  plugins: [react()],
});
