const express = require("express");
const router = express.Router();
const Comentarios = require("../model/comentarios");

//const input_comentarios = require("..\web\src\pages\Comentarios\index.js");

console.log("Starting Comment Route");
//POST
router.post("/", async (req, res) => {
  try {
    console.log(req);
    const data = await Comentarios.create(req.body);

    return res.json(data);
  } catch (err) {
    console.log("Error Item");
    res.json({ error: true, message: err.message });
  }
});

//GET
router.get("/", async (req, res) => {
  try {
    const data = await Comentarios.find({});

    return res.json(data);
  } catch (err) {
    console.log("Error Item");
    res.json({ error: true, message: err.message });
  }
});

//GET /update/ => atualizar estado do comentario
router.get("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Comentarios.findById(id);

    return res.json(data);
  } catch (err) {
    console.log("Error Item");
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
