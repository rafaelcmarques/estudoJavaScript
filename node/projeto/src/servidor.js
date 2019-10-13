const porta = 3003
const express = require('express')
const app = express()
const bancoDeDados = require('./bancodeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req ,res , next)=> {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id',(req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
        res.send(produto)
})

app.delete('/produtos/:id', (req, res, next)=> {
    const produto = bancoDeDados.deleteProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () =>{
    console.log(`O app está sendo executado na porta ${porta}`)
})