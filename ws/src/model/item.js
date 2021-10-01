const mongoose = require("mongoose");

const Item = mongoose.model("Item", {
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  idItem: {
    type: Number,
  },
  Autor: {
    type: String,
  },
  Data_traducao: {
    type: Date,
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
    type: String,
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
    type: String,
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
    type: String,
  }
});

module.exports = Item;
