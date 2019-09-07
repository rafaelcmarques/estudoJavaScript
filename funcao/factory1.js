//factory simples

function criarPessoa(){
    return {
        nome: 'Ana',
        idade: 12
    }
}



const pessoa = criarPessoa()

console.log(pessoa)