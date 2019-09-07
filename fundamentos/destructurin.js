function rand ({min, max}){ // recebe como parametro um destructuring, que sera responvel por retirar as informações do objeto que sera passado como paramentro
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({min: 30, max: 100})) // passando um objeto como paramentro, a funcao rand esta recebendo um destructurin, portanto ela retira=ra as informações do objeto e passara para a funcao.


/* passando um objeto anteriormente declarado para a funcao*/

const obj = {
    min: 40,
    max: 600
}

console.log(rand(obj))


//console.log(rand()) *Se passar objeto vazio havera erro, pois nao se consegue desestruturar um objeto null ou undifined