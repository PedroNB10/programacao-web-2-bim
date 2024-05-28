const express = require('express');

const fs = require('fs')
const app = express()
const port = 3000

app.listen(port, ()=>{
    console.log('Server Running on port '+ port)
})



app.get('/ps5', (req,res) =>{
    res.send('Você acessou a rota ps5')

});

app.get('/pc', (req,res) =>{
    res.send('Você acessou do pc')

});

app.get('/', (req,res)=>{
    res.send('Você acessou a rota padrão')
})


const banco = 'disciplinas.json'

app.get('/disciplinas', (req, res)=>{
    // Ler do banco as disciplinas
    // Devolver uma resposta
  
    // fs.readFileSync(banco, {encoding:'utf-8'}) retorna um buffer
    // JSON.parse transforma o buffer em um objeto javascript
    // JSON.stringify transforma um objeto javascript em uma string

    const {sigla} = req.query // é o atributo name do forms
    console.log(req.query)
    res.send(sigla)
    return

    let resp = '<ul>'
    const dados = JSON.parse(fs.readFileSync(banco, {encoding:'utf-8'}))// lê o arquivo e retorna o conteúdo, precisa do encoding para não retornar um buffer e transformar em string
    console.log(dados)

  

    for (let disciplinas of dados){
            console.log(disciplinas.sigla)
            resp += `\n\t<li>${disciplinas.sigla} - ${disciplinas.ementa}</li>`
    }

    resp += '</ul>'

    res.send(resp)

})

app.get('/disciplinas/:sigla', (req, res)=>{
    // Ler do banco as disciplinas
    // Devolver uma resposta

    const {sigla} = req.params
    console.log(req.params)
    console.log(sigla)


    // fs.readFileSync(banco, {encoding:'utf-8'}) retorna um buffer
    // JSON.parse transforma o buffer em um objeto javascript
    // JSON.stringify transforma um objeto javascript em uma string
  
    let resp = '<ul>'
    const dados = JSON.parse(fs.readFileSync(banco, {encoding:'utf-8'}))// lê o arquivo e retorna o conteúdo, precisa do encoding para não retornar um buffer e transformar em string
    console.log(dados)

    for (let disciplinas of dados){
            if (disciplinas.sigla === sigla){
                console.log(disciplinas.sigla)
                resp += `\n\t<li>${disciplinas.sigla} - ${disciplinas.ementa}</li>`
            }
    }

    resp += '</ul>'

    res.send(resp)

})

app.get('*', (req,res)=>{
    
    res.send('Isso é embaraçoso não ?')
})