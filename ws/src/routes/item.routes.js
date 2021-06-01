const express = require("express");
const router = express.Router();
const Item = require("../model/item");

//Visializacao de Todas as Tabelas
router.get("/", async (req, res) => {
  try {
    console.log("Iniciando item");
    //Indica o nome do Collection
    const itens = await Item.find({});
    res.json({ error: false, itens });
    console.log("Itens Lidos");
  } catch (err) {
    console.log("Error Item");
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
