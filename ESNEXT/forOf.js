for(a of 'Cod3r') {
    console.log(a)
} // imprime o codeudo

for(a in 'Cod3r') {
    console.log(a)
} // imprime o indice

const tecnologias = new Map([
    ['react', {framework: false}],
    ['angular', {framework: true}],
    ['bootstrep', {framework: true}]
])

for([vl,ch] of tecnologias){
    console.log(vl, ch)
}

