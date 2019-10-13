const fs = require('fs')
const caminho = __dirname + '/arquivo.json'
console.log(__dirname)
//sicrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//asscincrono

fs.readFile(caminho,'utf-8', (err,conteudo)=>{
    if(err !== null) {
        console.log('Error!')
    } else {
        const config = JSON.parse(conteudo)  // usando JSON.parse para transformar uma string em objeto
    console.log(`${config.db.host}:${config.db.port}`)
    }
    
})

//sicrono
const config = require('./arquivo.json')
console.log(config)

fs.readdir(__dirname,(err, arquivos)=> {
    console.log(arquivos)
} )