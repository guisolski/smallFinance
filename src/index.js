const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
//Criando aplicação
const app = express();

// Estabelecendo conexação com o banco de dados
mongoose.connect('mongodb+srv://teste:teste@cluster0-gq5sc.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// Configurando para ele entender somente resposta em Json no body
app.use(express.json); 
// Configurando as rotas
app.use(routes);

app.get('/',(request, response) => {
    response.send("hrete");
    return response;
})
app.listen(3333);

