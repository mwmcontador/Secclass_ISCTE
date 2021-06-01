const database = require("../services/database");
const Tabela = require("../model/tabela");
const tabelasJSON = require("../data/JSON/tabela.json");

const addTabela = async () => {
  try {
    for (let tabela of tabelasJSON) {
      console.log(`${tabela.nome_secclass}`);
      await new Tabela(tabela).save();
    }
    console.log("Tabelas Carregadas");
  } catch (err) {
    console.log(err.message);
  }
};

addTabela();
