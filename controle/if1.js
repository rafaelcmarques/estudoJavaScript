function soNotaBoa (nota){
    if (nota>=7){
        console.log('APROVADO!')
    } else {
        console.log('Reprovado')
    }
}

soNotaBoa(8)
soNotaBoa(Math.floor(6.4)) // arrendonda pra 6
soNotaBoa(Math.ceil(6.4)) //aredonda para 7


function seForVerdadeFale(valor){
    if(valor){                          //como nao tem comparação, o linguagem comparara se o valor é verdadeiro ou falso (boolean)
        console.log(`${valor} é um valor verdadeiro`)
    } else {
        console.log (`${valor} não é um valor verdadeiro`)
    }
}

seForVerdadeFale(null)
seForVerdadeFale(NaN)
seForVerdadeFale('')
seForVerdadeFale(-1)
seForVerdadeFale([])
seForVerdadeFale({})
seForVerdadeFale(0)