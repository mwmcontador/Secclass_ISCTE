const express = require("express");
const router = express.Router();
const Item = require("../model/item");

//
console.log("Começando a Lista Item");
//Visializacao de Todas as Tabelas
router.get("/", async (req, res) => {
  try {
    console.log("Iniciando rota do item");

    //Indica o nome do Collection
    const itens = await Item.find({});
    res.json({ error: false, itens });
    console.log("Itens Lidos");
  } catch (err) {
    console.log("Error Item");
    res.json({ error: true, message: err.message });
  }
});

//Listando Somente um ID
router.get("/lista/:id", async (req, res) => {
  try {
    const id = req.params.id;

    //Debug
    console.log(`Iniciando ${id}`);
    const item = await Item.findById(id);
    res.json({ error: false, item });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

//Listando Somente um Registro pelo Nivel
router.get("/filtros/:nivel_item&&", async (req, res) => {
  console.log(`Iniciando Nivel ${req.params.nivel_item}`);
  try {
    const nivel = req.params.nivel_item;
    const nome_tabela = req.params.nivel_item;

    //Debug
    console.log(` Nivel Selecionado ${nivel}`);
    const item = await Item.find({ nivel_item: nivel });
    res.json({ error: false, item });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

//Listando Somente com os filtros
router.get("/nivel/:nivel_item", async (req, res) => {
  console.log(`Iniciando Nivel ${req.params.nivel_item}`);
  try {
    const criterio = req.params.nivel_item;

    //Debug
    console.log(` Nivel Selecionado ${criterio}`);
    const item = await Item.find({ nivel_item: criterio });
    res.json({ error: false, item });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
