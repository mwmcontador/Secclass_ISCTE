const mongoose = require("mongoose");

const ComentariosSchema = new mongoose.Schema({
  users_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  items_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    required: true,
  },
  name: {
    type: String,
  },
  institution: {
    type: String,
  },
  contact: {
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
    default: Date.now
  },
  date_string: {
    type: String
  }
});

module.exports = mongoose.model("comentarios", ComentariosSchema);
