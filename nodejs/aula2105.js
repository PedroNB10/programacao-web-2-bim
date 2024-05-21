const fs = require('fs');
const path = require('path');

const nomeDir = process.argv[2] // é o nome da pasta que será criada

fs.mkdirSync(nomeDir)


if (fs.existsSync(nomeDir)){
    console.log("Diretório existente")
}
else{
    console.log("Diretório não existente")
}


const caminho = path.join(nomeDir, 'index.html')

fs.writeFileSync(caminho, '<h1>Hello World</h1>')

// console.log(import.meta.url)