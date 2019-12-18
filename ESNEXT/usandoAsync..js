const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    
    return new Promise((resolve, reject) => {
        let resultado = ''
        http.get(url, res => {
            res.on('data', data => {
                resultado += data
            })

            res.on('end', res => {
                try {
                    resolve(JSON.parse(resultado))
                }catch{
                    reject(e)
                }
                
            })
        })

    })
}

let getAluno = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta,tb,tc)
}

getAluno()
.then(nome => nome.map(a => a.nome))
.then(aluno => console.log(aluno))