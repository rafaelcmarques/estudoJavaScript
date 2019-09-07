var a = 3
let b = 4

var a = 30  /*Com o Var é possivel reedeclarar uma variavel com mesmo nome, porem não faz sentido algum utilizar disto. 
*É sempre recomendado usar *let*, pois ele nao permite realizar o mesmo. 
*/
b = 40

console.log(a,b)

a= 300
b= 400

console.log(a,b)

const c = 10  // não é possivel alterar o valor de uma constante após sua declaração.
//c = 50

console.log(c)


/*Observações sobre a aula:
*Quanto maior o numero de variaveis em seu código melhor. Tudo aquilo q n tem motivo para alterar declare como constante,
*Apenas declare como let aqueles valores que serão necessarios alterar durente a execução do código.
*/ 


