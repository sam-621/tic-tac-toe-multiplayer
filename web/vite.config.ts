import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  preview: {
    port: 8080
  },
  resolve: {
    alias: {
      '@/constants': './src/core/constants',
      '@/data': './src/core/data',
      '@/guards': './src/core/guards',
      '@/hooks': './src/core/hooks',
      '@/interfaces': './src/core/interfaces',
      '@/libs': './src/core/libs',
      '@/contexts': './src/core/context',
      '@/wrappers': './src/core/wrappers',
      '@/services': './src/core/services',
      '@/store': './src/core/store',
      '@/types': './src/core/types',
      '@/utils': './src/core/utils',
      '@/gql': './src/core/gql',

      '@/modules': './src/ui/modules',
      '@/shared': './src/ui/shared',

      '@/styles': './src/style'
    }
  }
});
