const express = require("express");
const router = express.Router();
const database = require("../services/database");
const Item = require("../model/item");
const Tabela = require("../model/table");
//const User = require("../model/user");
const Revit = require("../model/revit");
//var fs = require('fs');
//var parse = require('csv-parse');

const openCSV = async () => {


};

const addRevit = async () => {

const revit_code = "-2000011";
const secclass_code = "EF_25_10";
console.log(secclass_code);
const find = await Item.find({"code_item": secclass_code})
//var json = JSON.stringify(find)
console.log(`Data_out = ${find[0]}`);
console.log(find[0]._id, find[0].code_item);
var type = typeof find;
console.log(type);

const revit = {"discipline":"Architecture"};

const find_revit = await Revit.findOne(revit)
//console.log(`Data_revit = ${find_revit}`);
console.log(find_revit);

const data = await Revit.updateOne(
  {"code": revit_code},
   {
    "secclass_relation": {
      "secclass_id": find[0]._id,
      "secclass_code": find[0].code_item
      }
      }
    , null,
        function(err, maxResult) {
          // if there is an error retrieving, send the error. nothing after res.send(err) will execute
          if (err) {
            //res.send(err);
            data = err;
            console.log(`err: ${data}`);
            //res.json({ error: true, message: err.message });
          }
        }
  )
.populate({path: 'secclass_id'})
//.exec()
//console.log(`Data_Revit = ${await data}`);
console.log(data);
};

//addRevit();
