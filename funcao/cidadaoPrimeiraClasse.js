// declarando funcao de forma literal

function fun1 (){

}

//armazenando a funcao em uma variavel

const fun2 = function (){

}

//armazendo funcao em um array

const array = [function(a,b){ return a+b}, fun1, fun2]

console.log(array[0](2,3))


//armazendo função em um objeto

const obj = {
    falar: (a) => {return ('opa')},  //funcao arrow
    nome: 'Rafael'
}

console.log(obj.falar())

//funcao recebendo outra funcao como parametro

function run (fun){
     fun() //retornando a funcao que recebeu como paramentro
}

run(function (){console.log('executando...')}) //passando uma função como paramentro


//funcao pode retornar/conter outra funcao

function soma(a,b){
    return function (c){ // retorna outra funcao
        console.log(a+b+c)
    }
}

soma(3,2)(3) // passa o paramentro da primeira funcao, depois da segunda funcao