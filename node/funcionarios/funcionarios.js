const axios = require('axios')
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const chineses = (funcionario) => funcionario.pais === 'China'
const mulheres = (funcionario) => funcionario.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
    console.log(func)
})

