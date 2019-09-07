const peso1 = 1.0
const peso2 = Number('2.0')

console.log(typeof peso1)
console.log(typeof peso2)

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 7.25
const avaliacao2= 6.6

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2)
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2)) //fixando o numero de casas decimais
console.log(media.toString(2)) // convertendo para biniario


console.log(typeof Number)