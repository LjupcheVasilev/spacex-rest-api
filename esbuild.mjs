import * as esbuild from 'esbuild'
import fs from 'fs/promises'

await esbuild.build({
    entryPoints: ['./netlify/functions/api.ts'],
    bundle: true,
    platform: "node",
    outfile: 'dist/index.js',
})

await esbuild.build({
    entryPoints: ['./netlify/functions/api-doc.ts'],
    bundle: true,
    platform: "node",
    outfile: 'dist/api-doc.js',
})

// Copy API docs
await fs.cp('./docs/api-doc.yaml', 'dist/list-dir/api-doc.yaml')