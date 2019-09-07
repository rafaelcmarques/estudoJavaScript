const pessoa = {
    nome: 'Rafael',
    idade: '23', 
    peso: 65
}

console.log(Object.keys(pessoa)) // retorna as 'chaves'
console.log(Object.values(pessoa)) // retorna os 'valores'
console.log(Object.entries(pessoa)) // retorna ambos dentro de um array

Object.entries(pessoa).forEach(([chave,valor]) => { //usando um destructuring como parametro uma vez que que Objcte.entries retorna uma array.
    console.log(`${chave} ${valor}`)
});

Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true, //torna visivel ao usar o metodo Object.keys
    writable: false, // deixa alterar o valor 
    value: '30/04/1996' // valor
})

pessoa.dataDeNascimento = '30/01/1996'
console.log(pessoa.dataDeNascimento) // impriu 30/04/1996, pois nas definições das propriedades de dataDeNascimento, foi definido que que não
//seria possivel alterar o valor da mesma.
