function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`A área de ${area}m², é maior do que permitido`)
    } else {
        return area
    }
}


area(5,5)
console.log(area(5,2))
console.log(area(5,5)) //returna undefined pois estamos fazendo um console.log dentreo de outro console.log