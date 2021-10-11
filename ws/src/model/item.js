const mongoose = require("mongoose");
//const tabela = require("../model/tabela");

const ItemSchema = new mongoose.Schema({
  idItem: {
    type: Number,
  },
  Autor: {
    type: String,
  },
  Data_traducao: {
    type: Date,
    default: Date.now
  },
  Versao_Uniclass: {
    type: String,
  },
  versao_secclass: {
    type: Number,
  },
  code_tabela: {
    type: String,
  },
  tabela_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'table',
  },
  nivel_item: {
      type: Number,
  },
  Group: {
    type: String,
  },
  Subgroup: {
    type: String,
  },
  Section: {
    type: String,
  },
  Object: {
    type: String,
  },
  code_item: {
    type: String,
    required: true,
  },
  title_item: {
    type: String,     ///alterar para array de documentos
  },
  titulo_SECClasS: {
    type: String,
  },
  review: {
    type: Boolean,
  },
  descricao_SECClasS: {
    type: String,
  },
  especialidade: {
    type: String,
  },
  keywords: {
    type: String,       ///alterar para array
  }
});

module.exports = mongoose.model("Item", ItemSchema);
