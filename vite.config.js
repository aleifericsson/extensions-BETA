import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import fs from 'fs';
import path from 'path';

// Function to update the manifest with the correct hashed content script filename
function updateManifest(contentScriptFileName) {
  const manifestPath = path.resolve(__dirname, 'public/manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  // Update the content script with the correct hashed filename
  manifest.content_scripts[0].js = [`assets/${contentScriptFileName}`];
  manifest.web_accessible_resources[0].resources[0] = `assets/${contentScriptFileName}`;

  // Write the updated manifest back to the dist folder
  fs.writeFileSync(path.resolve(__dirname, 'dist/manifest.json'), JSON.stringify(manifest, null, 2));
}

// Vite configuration
export default defineConfig(({ mode }) => {
  const isContentBuild = mode === 'content';
  const input = isContentBuild
    ? { content: path.resolve(__dirname, 'L.html') }
    : { settings: path.resolve(__dirname, 'index.html') };

  return {
    plugins: [
      react(),
      viteStaticCopy({
        targets: [
          {
            src: 'public/manifest.json',
            dest: '.', // Copy to the root of dist
          },
        ],
      }),
      {
        name: 'update-manifest', // Custom plugin to update the manifest.json
        closeBundle() {
          const files = fs.readdirSync(path.resolve(__dirname, 'dist/assets'));
          const contentScriptFile = files.find(file => file.startsWith('content') && file.endsWith('.js'));

          if (contentScriptFile && isContentBuild) {
            updateManifest(contentScriptFile); // Update the manifest.json
          }
        },
      }
    ],
    build: {
      rollupOptions: {
        input, // Conditionally use content or settings as the entry point
        output: {
          entryFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]',
          chunkFileNames: 'assets/[name].[hash].js',
        },
      },
      outDir: 'dist',
    }
  };
});
