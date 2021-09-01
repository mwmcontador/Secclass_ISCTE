const mongoose = require("mongoose");

const PesquisasSchema = new mongoose.Schema({
  users_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  pesquisa_txt: {
    type: String,
    required: true,
  },
  results: {
    type: String,
  },
  timestamp: {
    type: Date,
  },
});

module.exports = mongoose.model("pesquisas", PesquisasSchema);
