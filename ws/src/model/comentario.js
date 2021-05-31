const mongoose = require("mongoose");

const Comentario = mongoose.model("Comentario", {
  id_comentario: {
    type: Number,
    required: true,
  },
  idItem_FK: {
    type: Number,
    required: true,
  },
  texto_comentario: {
    type: String,
  },
});

module.exports = Comentario;
