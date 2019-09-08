const ferrari = {
    modelo: 'f40',
    velMax: 360
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}


console.log(ferrari.prototype)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(ferrari.__proto__.prototype == null)