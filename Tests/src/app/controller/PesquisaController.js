const items = require("../model/items");
//const input_pesquisa = require("..\web\src\pages\Pesquisa\index.js");

//var input_pesquisa = "Co_20";
//var input_pesquisa ="Espaços de serviços administrativos, comerciais e de proteção";
//var input_pesquisa = "arrefecimento";
//var input_pesquisa = "arr";
var input_pesquisa = "?";
console.log(input_pesquisa);

class PesquisaController {
/*
  async store(req, res) {
    const data = await items.create(req.body);

    return res.json(data);
  }
*/

  async index(req, res) {
    if(input_pesquisa == "?"){
    req = '.*\\' + input_pesquisa + '.*';
    }
    else {req = '.*' + input_pesquisa + '.*';
    }

    console.log(req);
    const data = await items.find({
      $or: [
        //{"code_item": /.*req.*/i },
        {"code_item": { "$regex": req, "$options": "i"} },
        //{"code_item": req },
        {"titulo_SECClasS": { "$regex": req, "$options": "i"} }
        //{"titulo_SECClasS": { "$regex": '/.*' + req + '/.*', "$options": "i"} }
      ]
    });

    return res.json(data);
  }

}

module.exports = new PesquisaController();
