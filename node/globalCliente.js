require('./global')

console.log(MeuApp.saudacao())
console.log(MeuApp.nome)
global.MeuApp.nome = 'Eita!'
console.log(MeuApp.nome) //não foi possivel alterar por conta do Object.freeze
