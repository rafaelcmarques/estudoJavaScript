const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject)=> {
        let resultado = ''
        http.get(url, res =>{

            res.on('data', data =>{
                resultado +=data
            })

            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(aluno => aluno.filter(aluno => aluno.id > 5 ))    
    .then(a => console.log(a))