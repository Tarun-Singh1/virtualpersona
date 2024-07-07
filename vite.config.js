import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Load environment variables directly
const loadEnv = async (mode, cwd) => {
  const env = await import('dotenv').then((m) => m.config({ path: `${cwd}/.env.local` }));
  return env.parsed;
};

export default defineConfig(async ({ mode }) => {
  const env = await loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
    ],
    define: {
      'process.env': JSON.stringify(env),
    },
    assetsInclude: ['**/*.MP3'],
  };
});
