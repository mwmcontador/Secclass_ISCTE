const mongoose = require("mongoose");
const Item = require("../model/item");

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
  secclass_relation: {
    secclass_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
    },
    secclass_code: {
      type: String,
    },
  }
});

module.exports = mongoose.model("Revit", RevitSchema);
