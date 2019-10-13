const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 10 * * 0', function () {
    console.log('Exercutando tarefa 1', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Tarefa 1 cancelada!')
},20000) //cancela a tarefa 1 depois de 20 segundos


const regra = new schedule.rescheduleJob() //cria uma objeto ???
regra.dayOfWeek = [new schedule.Range(0,5)]
regra.hour = 10
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Tarefa 2', new Date().getSeconds())
})