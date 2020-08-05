/*
  command to start a new node project: 
    -> npm init

  command to install json-server:
    -> npm install json-server

  command to run:
    -> npm start

  url to access in browser:
    -> http://localhost:8080/categorias?_embed=videos

*/
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running in ${port}`);
});