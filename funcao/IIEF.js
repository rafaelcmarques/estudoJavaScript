const self = this;

(function (){
    if(this==self){
        console.log('É igual')
    } else{
        console.log('É diferente')
    }
}) ()

//Uma funcao imediatamente invocada, nao cai no escopo global. Tudo que é declarado dentro de si, fica no escopo local.