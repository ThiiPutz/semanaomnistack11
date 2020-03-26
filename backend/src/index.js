
/**
 * Rotas e recursos
 */

/**
 * Métodos HTTP
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipo de parâmetros:
  * 
  * Query Params: Paramêtros nomeados enviados na tora após "?" EX:(Filtros e paginação)
  * Route Params: Paramêtros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQl, Orecle, Microsoft SQL Server
   * NOSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */

const express = require ('express');
const cors = require('cors');
const routes = require ('./routes');

const app = express ();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

