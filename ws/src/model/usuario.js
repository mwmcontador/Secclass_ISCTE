const mongoose = require("mongoose");

const Usuario = mongoose.model("Usuario", {
  user_name: {
    type: String,
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
  password: {
    type: String
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = Usuario;
