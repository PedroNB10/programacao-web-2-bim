//importar libs externas
const express = require('express'); //npm i express

//O router permite separar nosso servidor em rotas
const router = express.Router();

//libs para banco de dados
const fs = require('fs');
const path = require('path');

//Validação do token
const jwt = require('jsonwebtoken');

//Conexao com banco de dados
const bdPath = path.join(__dirname,'..','db','propriedades.json');
const propriedades = JSON.parse(fs.readFileSync(bdPath, {encoding: 'utf-8'}));


//Rota para buscar as propriedades
router.get('/propriedades', autenticarToken,(req,res) =>{

    //Devolve as propriedades em formato JSON
    res.status(200).json(propriedades);

});

router.put('/atualizar-propriedade', autenticarToken, (req,res) => {

    const {id, nome, preco, avaliacao} = req.body;

    const novaPropriedade = {
        id,
        nome,
        preco,
        avaliacao
    }

    const acharIndex = (p) => {
        return p.id === Number(id)
    }

    const index = propriedades.findIndex(acharIndex);

    propriedades.splice(index,1,novaPropriedade);

    fs.writeFileSync(bdPath, JSON.stringify(propriedades,null,2));

    res.status(200).send('Elemento Atualizado!');

});

router.post('/adicionar-propriedade', autenticarToken, (req,res) => {

    const {id, nome, preco, avaliacao} = req.body;

    const novaPropriedade = {
        id, 
        nome,
        preco,
        avaliacao
    }
    propriedades.push(novaPropriedade);

    fs.writeFileSync(bdPath, JSON.stringify(propriedades,null,2));

    res.status(200).send('OK');
    
});

router.delete('/deletar-propriedade/:id', autenticarToken, (req,res) => {

    const {id} = req.params;

    const acharIndex = (p) => {
        return p.id === Number(id)
    }

    const index = propriedades.findIndex(acharIndex);

    propriedades.splice(index,1);

    fs.writeFileSync(bdPath, JSON.stringify(propriedades,null,2));

    res.status(200).send("Propriedade Removida");

});


function autenticarToken(req,res,next){
    const authH = req.headers['authorization'];
    const token = authH && authH.split(' ')[1];
    if(token === null) return res.status(401).send('Token não encontrado');
    
    //verificando o token
    try {
        const user = jwt.verify(token, process.env.TOKEN);
        req.user = user;
        next(); //Se token é válido, avança chamando next()
    } catch (error) {
        res.status(403).send('Token inválido');
    }
   
}

module.exports = router;