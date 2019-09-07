//sem callback

const num = [ 1,2,3,4,5,6,7,8,9,10]
let numBaixos = []

for( let i in num){
    if(num[i] < 7){
        numBaixos.push(num[i])
    }
}

console.log(numBaixos)


//com callback

numBaixos =  num.filter((num)=>{
    return num < 7
})

console.log(numBaixos)