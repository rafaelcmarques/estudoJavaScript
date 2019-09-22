Array.prototype.map2 = function (callback) {
    const aux = []
    for(let i = 0; i < this.length; i++){
    aux.push(callback(this[i], i, this))
    }
    return aux
}

const nums = [1,2,3,4,5]
console.log(nums)
const newNums = nums.map2((valor)=>valor *2)

console.log(newNums)