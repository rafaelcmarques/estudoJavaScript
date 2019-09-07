const imprimirNota =  function (nota){
    switch(nota){
        case 10:

        case 9: 
        console.log('Quandro de honra');
        break

        case 8: case 7 :
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota invalida')
    }   
}

imprimirNota(-1)
imprimirNota(3)
imprimirNota(6)
imprimirNota(8)
imprimirNota(10)