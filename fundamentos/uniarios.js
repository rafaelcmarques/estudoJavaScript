let a = 1
let b = 2

a++ //incremento feito depois da variavel
console.log(a)
--a //incremento feito antes da variavel
console.log(a)


console.log(++a === b--) //Deu verdadeiro, pois, o incremento de 'a' é realizado, e no momento da comparaçao com 'b', o mesmo ainda vale 2. Apois a comparacao que ocorre o decremento do valor
console.log(a===b) // aqui os devidos valores ja foram somados e decrementados, antes da comparacao