//notacao literal

const obj = {}

// funcao construtora

function Produto(nome, valor, desconto){
    this.nome = nome
    this.valorDesconto = () => {
        return valor * (1 - desconto)
    }
}

prod1 = new Produto('celular', '1000', 0.1)
console.log(prod1.valorDesconto())


// funcao factory


function criarFuncionario (nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        calcularSalarioMes () {
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const func1 = criarFuncionario('Rafael', 2000, 2)
console.log(func1.calcularSalarioMes())

