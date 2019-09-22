const obj = {0:'Yara', 1:'Júlia', 3:'Rafael'}
console.log(obj)

Object.defineProperty(obj, 'toString', {
    value: function(){
        return Object.values(this)
    },
    enumerable: false
})


console.log(obj.toString())