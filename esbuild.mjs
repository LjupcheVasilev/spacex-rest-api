import * as esbuild from 'esbuild'
import { YAMLPlugin } from "esbuild-yaml"

await esbuild.build({
    entryPoints: ['./netlify/functions/api.ts'],
    bundle: true,
    platform: "node",
    outfile: 'dist/index.js',
    plugins: [
        YAMLPlugin()
    ]
})

await esbuild.build({
    entryPoints: ['./netlify/functions/api-docs.ts'],
    bundle: true,
    platform: "node",
    outfile: 'dist/api-docs.js',
    plugins: [
        YAMLPlugin()
    ]
})

// Copy API docs
await fs.cp('./docs/api-doc.yaml', 'dist/list-dir/api-doc.yaml')