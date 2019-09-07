const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

minhaFuncao() //global
exec() //global


/* Uma função guarda com sigo o seu contexto lexico, entao ela sendo chamado dentro de outra funcao que contia uma variavel com o mesmo nome, quando invoca
** a mesma usou a variavel global. */