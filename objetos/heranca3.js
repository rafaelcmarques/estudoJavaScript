const pai = {
    corCabelo: 'Preto',
    nome: 'Sergio'
}

const filho = Object.create(pai) //ja passa como paramentro o objeto de quem vai herdar (pai)
filho.nome = 'Rafael'
console.log(filho.corCabelo)

const filho2 = Object.create(pai, {
    nome: { value: 'Julia', writable: false, enumerable: true }
})

console.log(filho2.corCabelo)
console.log(Object.keys(filho))
console.log(Object.keys(filho2))

for(let key in filho2) {
    filho2.hasOwnProperty(key) ? 
    console.log(key) : console.log(`Por herança: ${key}`) // verdadeiro : false
}