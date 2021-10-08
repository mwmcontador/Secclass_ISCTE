const express = require("express");
const router = express.Router();
const Especialidade = require("../model/especialidade");
const Tabela = require("../model/table");

//
console.log("Start Especialidades List ");

//Visualizando Todos os itens da Tabela Especialidades
router.get("/lists/especialidades/", async (req, res) => {
  try {
    //Indica o nome do Collection
    const data = await Especialidade.find({}
      ,null,
          {sort: {"_id": 1}},
          function(err){
          // if there is an error retrieving, send the error. nothing after res.send(err) will execute
          if (err)
          {
            //res.send(err);
            data = err;
            console.log(`err: ${data}`);
          }
        });
    res.json({ error: false, data});
    console.log("Lista de Especialidades");
  } catch (err) {
    console.log("Error DB");
    res.json({ error: true, message: err.message });
  }
});

//Visualizando Todos os itens da Tabela Tabelas
router.get("/lists/tabelas/", async (req, res) => {
  try {
    //Indica o nome do Collection

    const data = await Tabela.find({"code_tabela": {"$ne": null}}
      ,null,
          {sort: {"_id": 1}},
          function(err){
          // if there is an error retrieving, send the error. nothing after res.send(err) will execute
          if (err)
          {
            //res.send(err);
            data = err;
            console.log(`err: ${data}`);
          }
        });

        //data = [];
    res.json({ error: false, data});
    console.log("Lista de Tabelas");
  } catch (err) {
    console.log("Error DB");
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
