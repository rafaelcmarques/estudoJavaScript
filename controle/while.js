function numeroAleatorio (min, max) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}
let opcao = 0
while (opcao != -1){
    opcao = numeroAleatorio(-1,10)
    console.log(`A opção escolhida foi ${opcao}`)
}

console.log('Até a proxima!!')