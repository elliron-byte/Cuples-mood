import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Fix: Use '.' instead of process.cwd() to avoid TypeScript error "Property 'cwd' does not exist on type 'Process'".
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    define: {
      // Polyfill process.env.API_KEY for the Gemini SDK usage so it works in the browser
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});