import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          // Copy USWDS images to public/assets/img
          src: 'node_modules/@uswds/uswds/dist/img/**/*',
          dest: 'assets/img',
        },
        {
          // Copy USWDS fonts to public/assets/fonts
          src: 'node_modules/@uswds/uswds/dist/fonts/**/*',
          dest: 'assets/fonts',
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // This tells Sass to look in the USWDS packages directory
        // allowing you to use @use "uswds-core" directly.
        loadPaths: [
          path.resolve(__dirname, './node_modules/@uswds/uswds/packages'),
        ],
        // Suppress deprecation warnings for legacy Sass features used by USWDS
        silenceDeprecations: [
          'legacy-js-api',
          'if-function',
          'global-builtin',
          'import',
          'color-functions',
        ],
        quietDeps: true,
      },
    },
  },
});
