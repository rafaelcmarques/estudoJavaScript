const nomes = new Set()
nomes.add('Rafael')
nomes.add('Matheus')
nomes.add('Laura')
nomes.add('Flavia')
nomes.add('Ana')
nomes.add('Rafael') // não entrara novamente

console.log(nomes)

console.log(nomes.size)
console.log(nomes.has('Matheus'))
nomes.delete('Matheus')
console.log(nomes)
console.log(nomes.size)
console.log(nomes.has('Matheus'))


const pessoa = {
    primeiroNome: 'Rafael',
    segundoNome: 'Marques',
    get nomeCompleto() {
        return this.primeiroNome + ' ' + this.segundoNome
    },

    set nomeCompleto(nome) {
        let palavras = nome.toString().split(' ')
        this.primeiroNome = palavras[0]
        this.segundoNome = palavras[1]
    }
}

console.log(pessoa.nomeCompleto)
pessoa.nomeCompleto = 'Flavia Braga'
console.log(pessoa.nomeCompleto)
console.log(pessoa.primeiroNome)
console.log(pessoa.segundoNome)