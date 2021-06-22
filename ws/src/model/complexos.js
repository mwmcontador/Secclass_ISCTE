const mongoose = require("mongoose");

const Complexos = mongoose.model("Complexos", {
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
    type: String,
  },
  Subgroup: {
    type: String,
  },

  Section: {
    type: String,
  },
  object_item: {
    type: String,
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
  code_tabela: {
    type: String,
  },
});

module.exports = Complexos;
/*
{
    "_id":{"$oid":"60a514ef05543f12f8d7f7ff"},
    "idItem":1, // Number
    "Versao_Uniclass":"1.12", //String
    "nivelItem":1, // Number
    "code_item":"Co_20", //String
    "Group":"20", //Number
    "Sub-group":"",// Number
    "Section":"", //Number
    "object_item":"",//Number
    "Title_item":"Administrative, commercial and protective service complexes",
    "Titulo_SECClasS":"Complexos de serviços administrativos, comerciais e de segurança",
    "Descrição_SECClasS":"",
    "Comentários":"",
    "Data de tradução":"13/07/2021",
    "Autor":"Sara Parece",
    "Palavra-chave 1":"",
    "Palavra-chave 2":"",
    "Palavra-chave 3":"",
    "Palavra-chave 4":"",
    "Palavra-chave 5":"",
    "Palavra-chave 6":""
}
*/
