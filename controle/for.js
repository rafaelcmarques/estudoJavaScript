let imprime 

for(let linha = 1; linha <=10; linha ++){
    imprime = ''

    if(linha === 1 || linha === 10){
        for(let coluna = 1 ; coluna <=60; coluna++){
            imprime += '+'
        }
    }else{
        for(let coluna =1; coluna <=60; coluna ++){
            if(coluna ===1 || coluna ===60){
                imprime +='+'
            } else{
                imprime +=' '
            }
        }
    }
    console.log(imprime)
}