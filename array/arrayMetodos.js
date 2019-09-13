const pilotos = ['RAFAEL', 'CARL', 'ENZO', 'FROST', 'FLAME'] 
console.log(pilotos)
pilotos.push('ALAN') //ADICIONA NA ULTIMA POSICAO DO ARREY
console.log(pilotos)

pilotos.pop() // removo o ultimo
console.log(pilotos)

pilotos.shift() // REMOVO NA PRIMEIRA POSICAO
console.log(pilotos) 

pilotos.unshift('RAFAEL') //ADICIONA NA PRIMEIRA POSICAO
console.log(pilotos) 

//SPLICE PODE REMOVER E ADICIONAR ELEMENTOS 

//REMOVENDO

pilotos.splice(3,1) // apartir da  3 posicao, deletar um elemento
console.log(pilotos)

//adicionando
pilotos.splice(3,0, 'carla') //apartir do 3 elemento, nao deletar ngm e adicionar carla
console.log(pilotos)

const novoPilotos = pilotos.slice(2)
console.log(novoPilotos) // recebe array pilotos a partir do elemento 2


const novoPilotos2 = pilotos.slice(0, 3)
console.log(novoPilotos2) // recebe array pilotos a partir do elemento 0 a 3 ( o 3 não entra)
