//Rota dos Usuarios do Sistema

const express = require("express");
const router = express.Router();
const Usuario = require("../model/usuario");

router.post("/login", async (req, res) => {
  try {
    const credenciais = req.body;
    const usuario = await Usuario.findOne(credenciais);
    console.log("Iniciando");

    if (usuario) {
      console.log("Iniciando Usuario");
      res.json({ error: false, usuario });
    } else {
      res.json({ error: true, message: "Nenhum Usuário Encontrado." });
    }
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
