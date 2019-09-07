const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[7]()

/* let tem escopo de bloco (dufiferente de var), entao os valores nao se sobreescrevem */