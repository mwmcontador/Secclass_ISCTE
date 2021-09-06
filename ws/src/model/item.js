const mongoose = require("mongoose");

const Item = mongoose.model("Item", {
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  Autor: {
    type: String,
  },
  Data_traducao: {
    type: Date,
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
  idItem: {
    type: Number,
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
  title_item: {
    type: String,
  },
  titulo_SECClasS: {
    type: String,
  },
  descricao_SECClasS: {
    type: String,
  },
  code_tabela: {
    type: String,
  },
  review: {
    type: Boolean,
  }
});

module.exports = Item;
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

{
    "_id": {"$oid": "60d41ae8ddc3ec53204c81da"},                                              //ObjectID
    "Autor": "SECClasS",                                                                      //String
    "Data_traducao": {"$date": "2021-06-25T00:00:00.000Z"},                                   //Date
    "Group": "20",                                                                            //String
    "Section": "",                                                                            //String
    "Subgroup": "",                                                                           //String
    "Versao_Uniclass": "1.12",                                                                //String
    "code_item": "Co_20",                                                                     //String
    "code_tabela": "Complexos",                                                               //String
    "descricao_SECClasS": "Para revisão.",                                                    //String
    "idItem": 1,                                                                              //Number
    "nivel_item": 1,                                                                          //Number
    "title_item": "Administrative, commercial and protective service complexes",              //String
    "titulo_SECClasS": "Complexos de serviços administrativos, comerciais e de (segurança)",  //String
    "review": false                                                                           //Boolean
}
*/
