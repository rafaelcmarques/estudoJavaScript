function imprimir (partes, ...valores){
  console.log (partes)
  console.log(valores)
  return 'para não da undefined' //se tirar esse return será 'undefined'
}

let nome = 'rafael'
let situacao ='perdido'
 
console.log(imprimir `${nome} está totalmente ${situacao}`)