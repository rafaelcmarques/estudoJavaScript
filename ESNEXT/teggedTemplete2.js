function real (partes, ...valores){
    let resultados = []
    valores.forEach((valor, indice)=>{
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultados.push(partes[indice], valor)
    })
    return resultados.join('')
}

const preco = 99
const parcela = 33
console.log(real `Preco a vista ${preco} ou 3x de ${parcela}`)