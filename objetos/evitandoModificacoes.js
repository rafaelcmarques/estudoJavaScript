const pessoa = Object.preventExtensions({
    nome: 'Rafael',
    idade: '23',
    sobrenome: 'Marques'

})

console.log(Object.isExtensible(pessoa)) //false

pessoa.endereco = 'Arlindo Francisco Fernandes'
console.log(pessoa)
delete pessoa.nome
console.log(pessoa)

/* Considerações: Ao utilizar Object.preventExtensions, fica impossivel adicionar novos atributos ao objeto
* porem ainda é possivel deleta-los ou altera-los */

const produto = Object.seal( {
    nome: 'Notebook',
    preco: 2324,
    tag: 'tecnologia'
})

produto.desconto = 0.1
console.log(produto)
delete produto.tag
console.log(produto)
produto.nome = 'desktop'
console.log(produto)

/* Considerações: Ao utilizar Object.seal, fica impossivel adicionar novos atributos ao objeto
* tamebm não é possivel deleta-los porem pode altera seu valor */
