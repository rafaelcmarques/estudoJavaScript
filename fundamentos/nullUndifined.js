let valor  //valor nao inicializado
console.log(valor)

valor = null  //ausencia de valor
console.log(valor)

const produto = {}
console.log(produto) // objeto vazio

console.log(produto.valor) // atributo valor não foi definido

produto.valor = 3.5 //atribuindo valor a produto
console.log(produto)

produto.valor = undefined //evite atribuir undefined (isso é funcao do compilador)
console.log(produto) 

produto.valor = null // forma correta de retirar um valor 
console.log(produto)

//delete produto.valor
//console.log(produto) //deletar o atributo de um objeto

console.log(!!produto.valor) // false, pq o valor está nulo
