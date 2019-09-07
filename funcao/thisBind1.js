const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //conflito entre paradigma 00 e funcional . O 'this.saudacao' nao esta apontando mais para o objeto


const falarDePessoa = pessoa.falar.bind(pessoa) // bind ''amarra' o contexto. Indenpente de onde for chamado, ele estara amarrado ao objeto pessoa

falarDePessoa()