import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { compression } from 'vite-plugin-compression2';
import webfontDl from 'vite-plugin-webfont-dl';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        ViteImageOptimizer({
          png: { quality: 80 },
          jpeg: { quality: 80 },
          jpg: { quality: 80 },
          webp: { quality: 80 },
          svg: {
            plugins: [
              { name: 'removeViewBox', active: false },
              { name: 'sortAttrs', active: true },
            ],
          },
        }),
        webfontDl(), // Downloads and embeds Google Fonts locally for offline speed
        compression({
          algorithm: 'brotliCompress',
          exclude: [/\.(br)$/, /\.(gz)$/],
        }),
        compression({
          algorithm: 'gzip',
          exclude: [/\.(br)$/, /\.(gz)$/],
        }),
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes('node_modules')) {
                if (id.includes('three') || id.includes('@react-three')) {
                  return 'vendor-3d';
                }
                if (id.includes('framer-motion')) {
                  return 'vendor-motion';
                }
                return 'vendor-core';
              }
            }
          }
        }
      }
    };
});
