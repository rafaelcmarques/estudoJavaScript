function testeUm (numero){
    if(numero>7)
        console.log(numero)
        
    console.log ('final')
}

testeUm(8)
testeUm(6)

/*considerações sobre o exercicio acima
 * Caso não use as chaves após o if ({}), o mesmo considerara apenas aproxima linha abaixo (console.log(numero))
 * todo o conteudo apois a linha abaixo do if é considerado fora de seu escopo, por isso o 'final' sempre é impresso
 * pois ele está fora do if
*/

function testeDois(numero){
    if(numero>7) ; {
        console.log(numero)
    }
}

testeDois(6)
testeDois(8)

/* Considerações sobre o exercicio acima
 * como foi colocado o ponto e virgula (;) apos o if, o mesmo considera que é um comando (como se estivesse declarando if sem chaves ({}))
 * sendo assim tudo que vem após o ';' esta fora do escopo do if, sendo sempre executado, independente do valor 
*/