const escola = 'Cod3r'
console.log(escola.charAt(4)) 

console.log(escola.charAt(5)) // não aponta erro, porem não retorna valor algum

console.log(escola.charCodeAt(3)) // retorna o valor da tabela ASC

console.log(escola.indexOf('r')) // retorna a posição do caracter

console.log(escola.substring(0,3)) // retorna uma substring de acordo com a posição desejada

console.log('Escola '.concat(escola).concat("!")) 

console.log(escola.replace(3, 'e'))

console.log('Ana, Maria, Pedro'.split(','))