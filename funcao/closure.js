const valor = 'Global'

function fora(){
    const valor = 'Local'
    function dentro() {
        return valor
    }
    return dentro()   // retornando o valor contido na funcao 'dentro'
}


const x = fora()

console.log(x)