const mongoose = require("mongoose");

const Tabela = mongoose.model("Tabela", {
  id_tabela: {
    type: Number,
    required: true,
  },
  code_tabela: {
    type: String,
    required: true,
  },
  nome_tabela: {
    type: String,
  },
  nome_secclass: {
    type: String,
  },
});

module.exports = Tabela;
