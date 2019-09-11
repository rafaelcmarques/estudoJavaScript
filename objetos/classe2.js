class Avo {
    constructor (sobrenome = 'Carvalho' ){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor (sobrenome, profissao = 'autonomo'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(sobrenome) {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)

const pai = new Pai
console.log(pai)