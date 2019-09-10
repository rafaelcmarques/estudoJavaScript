class Lancamento {
    constructor(nome, valor){
        this.nome = nome,
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this. mes = mes,
        this.ano = ano
        this.lancamentos = []
    }

    addLancamento(...lancamentos){
        lancamentos.forEach(l => {
            this.lancamentos.push(l)
        });
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l=>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('salario', 4500)
const luz = new Lancamento('luz', -340)

const contas = new CicloFinanceiro(06,2019)
contas.addLancamento(salario,luz)
console.log(contas.sumario())