import {defineConfig, normalizePath} from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'
<<<<<<< HEAD
import topLevelAwait from 'vite-plugin-top-level-await'
=======
>>>>>>> parent of fb03b8b (Does JS work now)

export default defineConfig({
    plugins: [
        viteStaticCopy({
<<<<<<< HEAD
            targets: [topLevelAwait(),
=======
            targets: [
>>>>>>> parent of fb03b8b (Does JS work now)
                {
                    src: normalizePath(path.resolve(__dirname, './assets') + '/[!.]*'), // 1️⃣
                    dest: normalizePath('./assets'), // 2️⃣
                },
            ],
        }),
<<<<<<< HEAD
    ],
    base: "/IDD-project/"
=======
    ]
>>>>>>> parent of fb03b8b (Does JS work now)
})


