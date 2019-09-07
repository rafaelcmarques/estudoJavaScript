function tratarErroELancar (erro){
    throw new Error ('Tratando um erro')
}

function imprimirGritando (obj){
    try{
        console.log(obj.name.toUpperCase()+'!!!')
    } catch (e){
        tratarErroELancar(e) 
    } finally {
        console.log('fim')
    }
    

}

const pessoa = {
    nome: 'Livia'
}

imprimirGritando(pessoa)