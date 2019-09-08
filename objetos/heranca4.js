function meuObjeto () {}
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto

console.log(obj1.__proto__ === obj2.__proto__) //true
console.log(obj1.__proto__ === meuObjeto.prototype) //true

meuObjeto.prototype.nome = 'Anonimo'
meuObjeto.prototype.falar = function () { console.log(`Meu nome é ${this.nome}`)}

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}

obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

//resumindo

console.log((new meuObjeto).__proto__=== meuObjeto.prototype) //true
console.log(meuObjeto.__proto__ === Function.prototype) //true
console.log(Function.prototype.__proto__ === Object.prototype) //true
console.log(Object.prototype.__proto__) //null