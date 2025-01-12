import {defineConfig, normalizePath} from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'
import topLevelAwait from 'vite-plugin-top-level-await'

export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [topLevelAwait(),
                {
                    src: normalizePath(path.resolve(__dirname, './assets') + '/[!.]*'), // 1️⃣
                    dest: normalizePath('./assets'), // 2️⃣
                },
            ],
        }),
    ],
    base: "/IDD-project/"
})


