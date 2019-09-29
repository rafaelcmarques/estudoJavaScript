const a = require('./instanciaUnica')
const b = require('./instanciaUnica')
b.inc()
b.inc()
console.log(a.valor, b.valor)

/* por conta do cache, const a e b recebem a mesma instancia de um objeto?*/

const c = require('./instanciaNova')()
const d = require('./instanciaNova')()

c.inc()
d.inc()
d.inc()

console.log(c.valor, d.valor)
