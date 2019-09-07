{ 
    {
        {
            { 
                var sera = 'Será????'  // Var escapa do escopo, ou seja, pode ser chamado fora do bloco onde foi declarado.
            } 
        }
    } 
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
// console.log(local) // O var não escapa do escopo quando se trata de uma função, por tanto, n ´é possivel chamar fora do escopo QUANDO A MESMA FOR DECLADA EM UMA FUNÇÃO.