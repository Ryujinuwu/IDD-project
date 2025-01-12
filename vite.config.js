// import {defineConfig, normalizePath} from 'vite'
// import { viteStaticCopy } from 'vite-plugin-static-copy'
// import path from 'path'

// export default defineConfig({
//     plugins: [
//         viteStaticCopy({
//             targets: [
//                 {
//                     src: normalizePath(path.resolve(__dirname, './assets') + '/[!.]*'), // 1️⃣
//                     dest: normalizePath('./assets'), // 2️⃣
//                 },
//             ],
//         }),
//     ]
// })


import { defineConfig } from 'vite'
import topLevelAwait from 'vite-plugin-top-level-await'
export default defineConfig({
plugins: [topLevelAwait()],
base: './',
})
