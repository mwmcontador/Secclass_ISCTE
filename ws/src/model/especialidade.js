const mongoose = require("mongoose");

const EspecialidadeSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  nome_especialidade: {
    type: String,
  }
});
module.exports = mongoose.model("especialidade", EspecialidadeSchema);
