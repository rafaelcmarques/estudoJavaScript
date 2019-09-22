function Aula (nome, videoID){
    this.nome = nome,
    this.videoID = videoID
}

const video1 = new Aula('Bem vindos!', 123)
const video2 = new Aula('Ate breve', 345)

console.log(video1)
console.log(video2)

//simulando new

function novo (f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj,params)
    return obj

}

const video3 = novo(Aula, 'Bem-vindo', 123)
const video4 = novo(Aula, 'Ate breve', 345)