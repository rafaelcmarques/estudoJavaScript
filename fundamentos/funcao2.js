//armazenar funcao em uma variavel
const imprimirSoma = function(a, b) {
    console.log(a+ b)
}

imprimirSoma(1,2)

//armazenar arrow function em uma variaveç

const soma = (a, b) => { 
    return a+ b
}

console.log(soma(4, 7))

//Arrow funciton com return implicito

const subtrancao = (a, b) => a - b
console.log(subtrancao(4,2))