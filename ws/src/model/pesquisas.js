const mongoose = require("mongoose");

const PesquisasSchema = new mongoose.Schema({
  Users_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  pesquisa_txt: {
    type: String,
    required: true,
  },
  Resultados: {
    type: String,
  },
  Timestamp: {
    type: Date,
  },
});

module.exports = mongoose.model("pesquisas", PesquisasSchema);
