
const tecnologias = new Map()
tecnologias.set('React', {framework: false})
tecnologias.set('Angular', {framework: true})

console.log(tecnologias)
console.log(tecnologias.get('React'))
console.log(tecnologias.get('Angular').framework + '\n')

const variasChaves = new Map([
    [{ }, 'objeto'],
    [function(){}, 'função'],
    [123, 'numeros']
])

variasChaves.forEach((ch,vl)=>{
    console.log(vl,ch)
})