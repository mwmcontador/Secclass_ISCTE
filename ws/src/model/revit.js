const mongoose = require("mongoose");

const RevitSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  discipline: {
    type: String,
  },
  code: {
    type: String,
  },
  category: {
    type: String,
  },
  uniformat: {
    type: mongoose.Schema.Types.Mixed,
  },
});

module.exports = mongoose.model("Revit", RevitSchema);
