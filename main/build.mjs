import rollup from'rollup'
import fs from'fs'
let fsp=fs.promises
async function link(input,file){
    let bundle=await rollup.rollup({
        input,
    })
    return(await bundle.generate({
        format:'es',
    })).output[0].code
}
;(async()=>{
    fsp.copyFile('license','dist/node/license')
    fsp.copyFile('main/path.mjs','dist/node/path.mjs')
    fsp.writeFile('dist/node/package.json',JSON.stringify({
        name:'@anliting/path',
        version:'1.0.0',
        main:'path.mjs',
    }))
    let[license,code]=await Promise.all([
        fsp.readFile('license','utf8'),
        link('main/path.mjs'),
    ])
    fsp.writeFile(`dist/path.mjs`,`/*${license}*/${code}`)
})()
