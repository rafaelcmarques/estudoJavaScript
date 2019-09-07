const pessoa = {
    nome: 'Ana',
    sobrenome: 'Oliveira',
    idade: '19'

}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}