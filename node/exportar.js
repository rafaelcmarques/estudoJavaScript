console.log(module.exports)
this.a = 1
exports.b = 2
module.exports.c = 3 
console.log(module.exports)

exports = {
    aviso: 'TESTE!'
} // atribuir um OUTRO novo objeto a exports não funciona. Ele mudara a referencia de endereco
// de exports, porem o que é retornado no final é o module.exports
console.log(module.exports)

module.exports = {
    aviso: 'Agora sim!!'
}

console.log(module.exports)
