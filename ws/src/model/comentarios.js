const mongoose = require("mongoose");

const ComentariosSchema = new mongoose.Schema({
  users_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  items_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
  },
  institution: {
    type: String,
  },
  comment: {
    type: String,
  },
  status: {
    type: String,
  },
  timestamp: {
    type: Date,
  },
});

module.exports = mongoose.model("comentarios", ComentariosSchema);
