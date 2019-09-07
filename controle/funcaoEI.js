/*ESTUDO INDEPENDETE*/

const num = [1, 2, 3, 4, 5, 6, 7]

//SEM CALLBACK
const imprimirMenorQue7 = (array) => {
    const menor = []
    for(let i in array) {
        if(array[i]<7){
           menor.push(array[i])
        }
    }

    return menor
}


console.log(imprimirMenorQue7(num))



//com callback


const imprimirMenor = (array) => {
    const menor2 = array.filter((valor)=> {
        valor < 7
    })
    return array
}

imprimirMenor(num)