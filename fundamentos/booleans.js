const isAtivo = 1
console.log(isAtivo)
console.log(!!isAtivo)

console.log('Os verdadeiros...')
console.log(!!" ")
console.log(!![])
console.log(!!-1)
console.log (!!'texto')
console.log(!!{})
console.log(!!Infinity)

console.log('Os falsos...')
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

/*Exemplos usando 'Ou'
*Vai ser verdadeiro  se tiver pelo menos um valor
*/

console.log(!!(''|| null || 'epa!')) //epa é um valor
console.log(!!(''|| null || NaN)) // sem valores

//Exemplo, utilizando operações logicas em uma String

let nome = '' //string vaziz
console.log(nome || 'Nome não informado')

let nome1 = 'Rafael' //string com valor
console.log(nome1 || 'Nome não informado')

