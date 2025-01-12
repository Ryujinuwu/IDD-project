import {defineConfig, normalizePath} from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'


export default defineConfig({
    build: {
        rollupOptions: {
          input: {
            main: 'index.html', // Main HTML file
            extraJS: '/main.js', // Path to the additional JS file
          }
        }},

    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: normalizePath(path.resolve(__dirname, './assets') + '/[!.]*'), // 1️⃣
                    dest: normalizePath('./assets'), // 2️⃣
                },
            ],
        }),
    ],
    resolve: {
        alias: {
          "@": "/src"
        }
      }
})
