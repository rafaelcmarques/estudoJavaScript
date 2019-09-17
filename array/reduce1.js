const alunos = [
    {nome: 'Ana', nota: 7.6, bolsista: false},
    {nome: 'Joao', nota: 8.4, bolsista: false},
    {nome: 'Rafael', nota: 9.9, bolsista: false},
    {nome: 'Maria', nota: 6.8, bolsista: true}
]

console.log(alunos.map((a)=>a.nota))

const resultado = alunos.map((a) => a.nota).reduce(function (acumulador, atual){
    console.log(acumulador,atual)
    return acumulador + atual
})

console.log(resultado)