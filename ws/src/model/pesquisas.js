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
    type: Array,
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model("pesquisas", PesquisasSchema);
