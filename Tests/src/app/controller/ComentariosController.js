const comentarios = require("../model/comentarios");
//const input_comentarios = require("..\web\src\pages\Comentarios\index.js");


class ComentariosController {

  async store(req, res) {
    const data = await comentarios.create(req.body);

    return res.json(data);
  }

  async index(req, res) {
    const data = await comentarios.find({});

    return res.json(data);
  }

};

module.exports = new ComentariosController();
