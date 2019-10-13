const fs = require('fs')
const produto = {
    nome: 'Notebook',
    preco: 3679.99,
    desc: 0.15
}
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), (err) =>{ 
    console.log(err ||"Arquivo gerado com sucesso!")
})


// JSON.stringfy converte um objeto para formato JSON