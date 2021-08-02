const items = require("../model/items");
const pesquisas = require("../model/pesquisas");
//const input_pesquisa = require("..\web\src\pages\Pesquisa\index.js");

//var input_pesquisa = "Co_20";
//var input_pesquisa ="Espaços de serviços administrativos, comerciais e de proteção";
var input_pesquisa = "arrefecimento";
//var input_pesquisa = "arr";
//var input_pesquisa = "?";
console.log(input_pesquisa);

class PesquisaController {

/*
  async store(req, res) {
    req = {"Users_id": "61014705970082f592719864",
    "pesquisa_txt": input_pesquisa,
    "resultados": "",
    "Timestamp": "2021-08-02"
  };
    console.log(req);
    const data_input = await pesquisas.create(req.body);

    return res.json(data_input);
  }
*/

  async index(req, res) {

    if(input_pesquisa == "?"){
      req = '.*\\' + input_pesquisa + '.*';
    }
    else {
      req = '.*' + input_pesquisa + '.*';
    }

    console.log(req);
    const data_out = await items.find({
      $or: [
        //{"code_item": /.*req.*/i },
        {"code_item": { "$regex": req, "$options": "i"} },
        //{"code_item": req },
        {"titulo_SECClasS": { "$regex": req, "$options": "i"} }
        //{"titulo_SECClasS": { "$regex": '/.*' + req + '/.*', "$options": "i"} }
      ]
    });

    const store = {
      "Users_id": "61014705970082f592719864",
      "pesquisa_txt": input_pesquisa,
      "resultados": "",
      "Timestamp": new Date()
    };
    console.log(store);

    const data_input = await pesquisas.create(store);

    console.log(data_input);

    return res.json(data_out);
  }

}

module.exports = new PesquisaController();
