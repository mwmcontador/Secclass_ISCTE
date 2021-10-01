const mongoose = require("mongoose");

const Tabela = mongoose.model("Tabela", {
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
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

module.exports = Tabela;
