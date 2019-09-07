console.log(7/0) //em algumas linguagens daria erro, porem em JS retorna o tipo 'Infinity'

console.log('10'/2) 
// Se a string for um numero, JS rechonece este numero e realiza a operação. 

console.log ('Opa'*2) // Operação de multiplicacao entre strings e numeros retornam um NaN (NOT A NUMBER)

console.log('OPA'+2.5) // operação de soma concatena
console.log ('2'+2) // concatena mas não soma. 
console.log('2'-2) //subtrai

console.log(0.1 + 0.7) // em algumas operações o java script pode não ser muito preciso, por conta de suas especificações

// console.log(10.toString()) Não é possivel chamar um literal dentro do toString

console.log((10).toString(2)) // se o literal estiver dentro de um paretense é possivel

console.log((10.847223).toFixed(2)) // outro exemplo do numero literal (sem ser uma variavel), dentro do parentese