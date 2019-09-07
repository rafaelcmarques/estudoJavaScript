function soma (a,b,c){
    a = a !== undefined ? a : 1   /* true / false */
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c  //jeito 'mais correto' de se exercutar

    return a+b+c
}


console.log(soma (1,2,3))
console.log(soma('a',3,'c'))



//forma mais recente
function soma1(a=1, b=1, c=1) {
    return a + b + c
}

console.log(soma1(2,2,2))
console.log(soma())