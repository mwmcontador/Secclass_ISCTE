const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema({
  code_tabela: {
    type: String,
  },
  nome_tabela: {
    type: String,
  },
  nome_secclass: {
    type: String,
  },
  nome_pesquisa: {
    type: String,
  }
});
module.exports = mongoose.model("table", TableSchema);
