const fabricante = ['fiat', 'volks', 'renault']

function imprimir(nome, indice){
    console.log(`${indice +1}: ${nome}`)
}

fabricante.forEach(imprimir)