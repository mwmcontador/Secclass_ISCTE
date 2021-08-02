const items = require("../model/items");
//const input_pesquisa = require("..\web\src\pages\Pesquisa\index.js");

//console.log(input_pesquisa);

class PesquisaController {

  async store(req, res) {
    const data = await items.create(req.body);

    return res.json(data);
  }

  async index(req, res) {
    const data = await items.find({"code_item": '${input_pesquisa}'});

    return res.json(data);
  }

}

module.exports = new PesquisaController();
