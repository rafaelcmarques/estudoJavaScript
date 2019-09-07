function rand([min = 0, max = 1000]){  //passando um destructuring como paramentro, o mesmo recebera um array e os valores serao desestruturados os  para a funcao interpretar
    if(min > max) {
        [min , max]  = [max, min] /*  A segunda chave (mais a direita) é a criacao de um array com os dados que a funcao recebeu da desetruturacao do paramentro que recebeu,
        A primeira chave e uma destruturacao  do array a sua direita, COM OS VALORES INVERTIDOS */
    }
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([100, 400])) //passando um array como  parametro, a funca recebera esses valores e destrutura-ra para ser interpretada pela funcao