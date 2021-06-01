const database = require("../services/database");
const Item = require("../model/item");

//Depois tenho que transformar o nome da tabela em uma variavel
const nome_tabela = "complexes";

const Item_TabelaJSON = require("../data/JSON/complexes.json");

const addItem = async () => {
  try {
    for (let idItem of Item_TabelaJSON) {
      console.log(`Inserido Item  ${idItem}`);
      await new Item(idItem).save();
    }
    console.log("Itens Carregados");
  } catch (err) {
    console.log(err.message);
  }
};

addItem();
