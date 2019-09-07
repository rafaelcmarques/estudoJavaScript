const [a] = [10]
console.log(a)

const [n1, ,n3, ,n5,n6 =0] = [3,5,7,4,1,6]
console.log(n1,n3,n5,n6)

const [ ,[,nota]] = [[10,5,6],[7,4,2]]
console.log(nota)