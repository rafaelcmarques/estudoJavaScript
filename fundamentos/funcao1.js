//funcao sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2, 3, 4, 5, 6) //nao da erro, porem ira somar somente os primireiro dois atributos

//funcao com retorno

function soma(a, b= 0) {    //como padrao, b recebe 0, caso nenhum valor for atribuido a ele
    return a + b
}

console.log(soma(2, 6))