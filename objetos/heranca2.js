//cadeia de prototipo
Object.prototype.atr4 = 'Y'  //Não recomendado fazer
const avo = { atr1: 'A'}
const pai = { __proto__: avo, atr2: 'B'}
const filho = { __proto__: pai, atr3:'C', atr1: 'Z'}

console.log(filho.atr2)
console.log(filho.atr1)
console.log(filho.atr4)

//-------------------------------------------------//


const carro = {
    velAtual: 0,
    velMaxima: 200,

    acelerarMais(delta) {
        if(this.velAtual < this.velMaxima){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMaxima
        }
    },
    
    status(){
        return `${this.velAtual}km/h de ${this.velMaxima}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMaxima: 370
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` /* super.status() - chama a funcao do objeto pai.
        Estamos ''sobreescrevendo'' a funcao status do objeto pai*/
    }
    
}

Object.setPrototypeOf(ferrari, carro) //define de quem herdar (ferrari herda de carro)
ferrari.acelerarMais(300)
console.log(ferrari.status())

Object.setPrototypeOf(volvo,carro)
volvo.acelerarMais(150)
console.log(volvo.status())