const port = 5000;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// app.use eh configurado para qualquer requisicao, seja POST, PUT, GET ou DELETE. 
// nesse caso, estamos informado que os campos a serem recebidos, devem estar em formato urlencoded
// os dados recebidos, serão acessiveis a partir de req.body.<chave>

app.use(bodyParser.urlencoded({ extended: true }));

// Com o app.use bodyParser.json, a aplicacao passa a receber requisicoes de tipo JSOn 
// os dados recebidos, serão acessiveis a partir de req.body.<chave>
app.use(bodyParser.json());

// Importacao da API's 

// Login API
require('../api/Login')(app, 'posso passar algum parametro caso necessario')


app.listen(port, () => {
    console.log(`Server on port ${port}`)
})