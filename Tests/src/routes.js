const express = require("express");
const routes = express.Router();
const PesquisaController = require("./app/controller/PesquisaController");
const ComentariosController = require("./app/controller/ComentariosController");

routes.get("/pesquisa", PesquisaController.index);

//routes.post("/pesquisa", PesquisaController.store);

routes.get("/comentarios", ComentariosController.index);

routes.post("/comentarios", ComentariosController.store);

module.exports = routes;
