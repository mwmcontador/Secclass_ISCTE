const mongoose = require("mongoose");

const ComentariosSchema = new mongoose.Schema({
  id_Users: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  SecClasS_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  Comentario: {
    type: String,
  },
  Status: {
    type: String,
  },
  Timestamp: {
    type: Date,
  },
});

module.exports = mongoose.model("comentarios", ComentariosSchema);
