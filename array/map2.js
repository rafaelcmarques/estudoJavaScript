const carrinho = [
    '{"nome": "Lapis", "preco": 1.90}',
    '{"nome": "Caneta", "preco": 2.05}',
    '{"nome": "Caderno", "preco": 15.90}',
]

const paraObjeto = (json) => JSON.parse(json) // transforma um JSON em objeto
const somentePreco = (produto) => produto.preco

const carrinhoPreco = carrinho.map(paraObjeto).map(somentePreco)

console.log(carrinhoPreco)