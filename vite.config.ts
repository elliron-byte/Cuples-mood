import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // We use '.' to ensure it looks in the root.
  // The third argument '' ensures we load all env vars (including system ones like API_KEY on Vercel)
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    define: {
      // Polyfill process.env.API_KEY for the Gemini SDK usage
      // We use JSON.stringify to ensure the value is embedded as a string in the build
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});