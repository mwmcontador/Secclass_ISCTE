const mongoose = require("mongoose");

const Usuario = mongoose.model("Usuario", {
  id_user: {
    type: Number,
    required: true,
  },
  user_name: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  primeiro_nome: {
    type: String,
    required: true,
  },
  ultimo_nome: {
    type: String,
    required: true,
  },
  instituicao_nome: {
    type: String,
  },
  access_level: {
    type: String,
  },
  senha: { type: String },
});

module.exports = Usuario;
