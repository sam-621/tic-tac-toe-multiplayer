import react from '@vitejs/plugin-react';
import path from 'path';
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
      '@/constants': path.resolve(__dirname, './src/core/constants'),
      '@/data': path.resolve(__dirname, './src/core/data'),
      '@/guards': path.resolve(__dirname, './src/core/guards'),
      '@/hooks': path.resolve(__dirname, './src/core/hooks'),
      '@/interfaces': path.resolve(__dirname, './src/core/interfaces'),
      '@/libs': path.resolve(__dirname, './src/core/libs'),
      '@/contexts': path.resolve(__dirname, './src/core/context'),
      '@/wrappers': path.resolve(__dirname, './src/core/wrappers'),
      '@/services': path.resolve(__dirname, './src/core/services'),
      '@/store': path.resolve(__dirname, './src/core/store'),
      '@/types': path.resolve(__dirname, './src/core/types'),
      '@/utils': path.resolve(__dirname, './src/core/utils'),
      '@/gql': path.resolve(__dirname, './src/core/gql'),

      '@/modules': path.resolve(__dirname, './src/ui/modules'),
      '@/shared': path.resolve(__dirname, './src/ui/shared'),

      '@/styles': path.resolve(__dirname, './src/style')
    }
  }
});
