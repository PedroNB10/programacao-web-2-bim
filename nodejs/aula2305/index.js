const colors = require('@colors/colors')

const countries = require('country-data')
// console.log(colors.inverse('Hello, world!'))

const paises = countries.countries.all

const paisesQueFalamIngles = paises.filter( pais =>{
    return pais.languages.includes('eng')
})


const paisesQueFalamIngles2 = paises.filter( (pais)=>{

    return pais.languages.includes('fra') // falam frances

})


const brazil = paises.find( pais =>{
    return pais.name === 'Brazil'
})

// console.log(brazil)
// console.log(paisesQueFalamIngles2)
// console.log(paises)


const express = require("express");
const app = express();
const port = 3000;



app.use(express.json()); // middleware, padrão para trabalhar com json
app.use('/public', express.static('public')); // middleware para servir arquivos estáticos


app.use(()=>{
    console.log('Requisição recebida em: ', new Date())
})

app.use('/teste', ()=>{
    console.log('Requisição teste')
})

app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
});