const nums = [3,6,3,8,9,3,5]
console.log(nums)

const multiplicar = (valor) => valor * 2
const somar = (valor) => valor +10
const valorDinheiro = (valorDinheiro) => `R$${parseFloat(valorDinheiro).toFixed(2).replace('.',',')}`

const newNums = nums.map(multiplicar).map(somar).map(valorDinheiro)

console.log(newNums)