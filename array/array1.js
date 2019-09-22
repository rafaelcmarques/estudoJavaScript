let aprovados = new Array('Bia', 'Rafael', 'Laura', 'Ana')

function imprimir (array) {
    array.forEach(aprovado => {
        console.log(aprovado)
    });
}

imprimir(aprovados)

aprovados[4] = 'Jorge'

imprimir(aprovados)

aprovados.push('Carla')

imprimir(aprovados)

console.log(aprovados.length)

aprovados[9] ='Livia'

console.log(aprovados.length)

imprimir(aprovados)

console.log(aprovados)

aprovados.sort() // define o array em ordem alfabetica

console.log(aprovados)

delete aprovados[1] //exclui o elemento de indice 1

aprovados = ['Noa', 'bia', 'carl']
aprovados.splice(1,1, 'elemento1', 'elemento2') //comecar do elemento 1, deletar 1 elemento apartir do elemento 1 e adicionar elemento1 e elemento2 apos elemento 1
console.log(aprovados)