const pessoa = {
    nome: 'Ana',
    idade: 5,
    nacionalidade: 'brasileira',
    endereco:{
        logadouro: 'Rua Feliz',
        numero: 123
    }
}

console.log(pessoa)

const {nome, endereco} = pessoa

 console.log(nome, endereco) // cria variaveis COM O MESMO NOME que receberam o conteudo 'nome' e 'endereco' do objeto pessoa

 const {nome: n, endereco: e} = pessoa // cria as variais 'n' e 'e' que receberam o conteudo 'nome' e 'endereco' respectivamente do objeto pessoa

 console.log(n,e)

 const {sobrenome, bemHumorado = true} = pessoa
 console.log(sobrenome, bemHumorado) // caso as variaveis nao forem declaradas dentro do objeto e tentar acessar a mesma.

 const {endereco:{logadouro, numero, cep}} = pessoa // vai criar apenas logadouro e numero, valor de cep sera undifined por conta de nao ter sido declarado.
 console.log(logadouro, numero, cep)
