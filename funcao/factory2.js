function criarProduto (nome, preco) {
    return{
        nome,
        preco,
        desconto: 0.1
    }

}

const prod1 = criarProduto('Iphone', 1234)

console.log(prod1)

