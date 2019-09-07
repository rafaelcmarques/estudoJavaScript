function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1- this.desc) * (1+ imposto)}`
}  

const produto = {
    nome: 'Notebook',
    preco: 1200,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())


const carro = {
    nome: 'carro',
    preco: 1234,
    desc: 0.1,
   
}

console.log(getPreco.apply(carro))  // caso getPreco nao for declarado dentro do objeto carro
console.log(getPreco.call(carro))  // caso getPreco nao for declarado dentro do objeto carro

console.log(getPreco.apply(carro, [0.17, '$']))  //forma de passar paramentros
console.log(getPreco.call(carro,0.17,'$')) //forma de usar paramentro
