//Rota dos Tabela do Sistema

const express = require("express");
const router = express.Router();
const _ = require("underscore"); // serve para manipular, embaralhar os dados
const Tabela = require("../model/tabela");

console.log("Iniciando Rotas da Tabela");
//Criando uma Tabela

router.post("/tabela", async (req, res) => {
  try {
    console.log("Iniciando Criação de um registro na Tabela");
    const tabela = req.body;
    const response = await new Tabela(tabela).save();
    res.json({ error: false, response });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

//

//Visializacao de Todas as Tabelas
router.get("/tabela", async (req, res) => {
  try {
    console.log("Iniciando");
    //Indica o nome do Collection
    const tabelas = await Tabela.find({});
    res.json({ error: false, tabelas });
    console.log("Tabelas Lidas");
  } catch (err) {
    console.log("Error Tabela");
    res.json({ error: true, message: err.message });
  }
});

//Listando Somente um ID
router.get("/tabela/:id", async (req, res) => {
  try {
    const id = req.params.id;

    //Debug
    console.log(`Iniciando ${id}`);
    const tabela = await Tabela.findById(id);
    res.json({ error: false, tabela });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

//Atualizando a Tabela

router.put("/tabela/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const nova_tabela = req.body;

    const tabela = await Tabela.findByIdAndUpdate(id, nova_tabela);
    res.json({ error: false, tabela });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

//DELETAR UM REGISTRO
router.delete("/tabela/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Tabela.findByIdAndDelete(id);
    res.json({ error: false });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
