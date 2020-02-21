const {Router}  = require('express');
const DevController = require("./controllers/DevController")
const SerachController = require("./controllers/SerachController")

const routes = Router();

//Metodos HTTP : GET, POST, PUT,DELETE

/*
    Tipos de Parametros:
    -- Query Parms : request.query (Filtros, ordenação, paginação)
    -- Root Parms : request.parmas (Identificar um recurso na alteração ou remoção) => indeficar no
         caminho o nome do recebimento
    -- Body : request.body (Dados para criação ou alteração de um registro)
*/

routes.post('/devs',DevController.store);
routes.get('/devs',DevController.index);
routes.get('/search',SerachController.index);
module.exports = routes;