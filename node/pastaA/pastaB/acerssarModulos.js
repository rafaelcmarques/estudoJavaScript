const moduloA = require('../../node1') //caminho 
console.log(moduloA.ola)
console.log(moduloA.bemVindo)

const moduloC = require('./PastaC') //usando Index, nao precisa especificar o arquivo (?? n tenho certeza se é isso)
console.log(moduloC.saudacao)