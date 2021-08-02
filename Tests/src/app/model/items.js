const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
  idItem: {
    type: Number,
    required: true,
  },
  Versao_Uniclass: {
    type: String,
  },
  nivel_item: {
    type: Number,
  },
  code_item: {
    type: String,
    required: true,
  },
  Group: {
    type: Number,
  },
  Subgroup: {
    type: Number,
  },

  Section: {
    type: Number,
  },
  object_item: {
    type: Number,
  },
  title_item: {
    type: String,
  },
  titulo_SECClasS: {
    type: String,
  },
  descricao_SECClasS: {
    type: String,
  },
  Comentarios: {
    type: String,
  },
  Data_traducao: {
    type: Date,
  },
  Autor: {
    type: String,
  },
  nome_tabela: {
    type: String,
  },
});

module.exports = mongoose.model("items", itemsSchema);
