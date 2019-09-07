let valores = [9.2, 7.4, 2.5, 4.9]
console.log(valores)
console.log(valores[0], valores[3])
console.log(valores[5]) // retorna undefined

valores.push(7, {id: 3}, 'texto', false, null) // adiciona novos valores ao array
console.log(valores)

console.log(valores.pop()) // remove o ultimo valor do array
console.log(valores) 

delete valores[3] // remove valores da posição desejada
console.log(valores) 

console.log(typeof valores)