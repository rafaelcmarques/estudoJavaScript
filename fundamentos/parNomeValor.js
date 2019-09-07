const saudacao = 'Opaaaaa' //contexto lexico

function exec(){
    const saudacao = 'Epaaaaaa'  // outro contexto lexico
    return saudacao
}

const pessoa = {
    nome: 'Pedro',
    idade: 23,
    endereco: {
        rua: 'Arlindo Francisco',
        numero: '123',
    }
}

console.log(saudacao)
console.log(exec())
console.log(pessoa)