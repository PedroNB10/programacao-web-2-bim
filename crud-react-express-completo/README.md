# Aula-14-Crud-React-Completo
Código final apresentado na aula de XDES03 - Programação Web

Trabalhos nessa aula os seguintes tópicos:
- CRUD combinando React e Express. O banco de dados é simulado com um arquivo .JSON
  - Rotas GET, POST, PUT e DELETE.
  - Banco de dados consiste em um arquivo com propriedades para locação.
  - Componente React representando Propriedade e ListaPropriedades
-  Login e Criação de Usuário
  - Uso do react-hook-forms para gerenciar formulário
  - Uso do yup para validação
  - Uso do session storage para armazenar o token
  - Uso do JWT para criar e assinar tokens
  - Uso do bcrypt para armazenar senha criptografada

Para utilizar o código seguido os passos:
- Instalar as dependências em ambas as pastas back e front: npm i
- Ligar o servidor com ```nodemon server.js```
- Carregar o front com ```npm run dev```
- Criar um arquivo com senha secreta para ser o TOKEN
    - Na raiz do back criar um arquivo ```.env```
    - Gerar o token. Exemplo:
      - Abrir o CLI de node (digitar node no terminal), e em seguida digitar ```require('crypto').randomBytes(64).toString('hex')```
      - Irá gerar um valor de 64Bytes em Hexadecimal
      - Copiar e inserir como valor de TOKEN=```valor-gerado``` no arquivo ```.env```
- Exemplo arquivo ```.env```
![Arquivo .env](/token.png)

