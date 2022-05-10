import * as esbuild from 'https://deno.land/x/esbuild@v0.14.38/mod.js'
const result = await esbuild.transform(Deno.readTextFileSync('src/loop.ts'), { loader: 'ts' })
console.log('result:', result)
esbuild.stop()