String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}

console.log('Rafael'.reverse())

Array.prototype.first = function () {
    return this[0]
}

const b = [1,2,3,4,5,6]
console.log(b.first())

String.prototype.toString = function () {
    return 'Lascou tudo'
} // SUBESCREVENDO FUNCAO DO PROTOTYPE DE STRING! TOMAR MUITO CUIDADO. NUNCA FAZER 

console.log('Rafael'.reverse())