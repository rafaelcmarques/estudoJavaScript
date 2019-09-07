function numeroAleatorio (min, max){
    const num = Math.random() * (max - min ) + min
    return Math.floor(num)

}

let opcao = -1

do {
    opcao = numeroAleatorio (-1, 10)
    console.log (`O numero sortiado foi ${opcao}`)
} while (opcao !=-1)

console.log('Ate a proxima')


/* Considerações sobre o exercicio acima
** Mesmo a variavel opcao recebendo o valor -1, entrara no escopo do 'do', assim alterndo
** seu valor, para um aleatorio, fazendo com que assim entre no laço do while. 
** Portando em uma estrutura DO/WHILE. O do sempre sera executado pelo menos uma vez antes de entrar no laço
**do while.
*/