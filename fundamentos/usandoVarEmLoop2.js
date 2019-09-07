const funcs = []

for(var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[7]()

/*Como varivel nao tem  escopo de bloco, quando executar o resultado vai ser '10', pois o ultimo valor sempre vai sobreescrever o anterior. */