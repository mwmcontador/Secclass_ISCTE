const express = require("express");
const router = express.Router();
const Complexos = require("../model/complexos");

//
console.log("Começando a Lista Complexos");

//Visualizando Todos os itens da Tabela Complexos
router.get("/complexos", async (req, res) => {
  try {
    console.log("Iniciando rota do item");

    //Indica o nome do Collection
    const itens = await Complexos.find({});
    res.json({ error: false, itens });
    console.log("Itens da Tabela Complexos Lidos");
  } catch (err) {
    console.log("Error Item");
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
