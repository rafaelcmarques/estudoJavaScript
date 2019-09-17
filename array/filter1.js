const carrinho = [
    { nome:'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad PRO', preco: 4199, fragil: true},
    { nome:'Cama', preco: 5800, fragil: false },
    { nome: 'Copo de vidro', preco: 17.67, fragil: true},
    { nome: 'Copo de plastico', preco: 6.9, fragil: false}
]

const caro = (p) => p.preco >= 500
    

const fragil = (p) => p.fragil

console.log(carrinho.filter(caro).filter(fragil))