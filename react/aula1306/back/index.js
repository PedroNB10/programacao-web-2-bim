// libs externas
const express = require("express");
const cors = require("cors"); // cors é uma biblioteca que permite que o front-end acesse o back-end, mesmo que eles estejam em domínios diferentes

// libs standard do Node.js
const fs = require("fs");
const path = require("path"); // path é uma biblioteca do Node.js que permite manipular caminhos de arquivos e diretórios

const app = express();

app.use(express.json()); // permite que o express entenda JSON
// app.use(express.urlencoded({ extended: true })); // permite que o express entenda dados de formulários, ou seja
app.use(cors()); // permite que o front-end acesse o back-end, mesmo que eles estejam em domínios diferentes

const bancoPath = path.join(__dirname, ".", "db", "propriedades.json"); // funciona em qualquer sistema operacional
// isso é o mesmo que: ./db/propriedades.json
// const b = './db/propriedades.json'

const propriedades = fs.readFileSync(bancoPath, { encoding: "utf-8" }); // lê o arquivo propriedades.json

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

app.get("/propriedades", (req, res) => {
  res.status(200).send(propriedades);
});
