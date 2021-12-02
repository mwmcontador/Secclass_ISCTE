
// require csvtojson module
const CSVToJSON = require('csvtojson');
const fs = require('fs');

const parse = require('csv-parser');
const parser = parse({columns: true}, function (err, records) {
	console.log(records);
});
//const csv_revit = require("../data/revit_test.csv");
//const data = require("../data/data.csv");
var data = "../data/data.csv";
var csv_revit = "../data/revit.csv";
const fastcsv = require('fast-csv');

//const ws = fs.createWriteStream("../data/export/out.csv");
var out = "../data/export/out.json";
const Revit = require("../model/revit");
const Item = require("../model/item");

const express = require("express");
const router = express.Router();
const database = require("../services/database");

/*
const Item = require("../model/item");
const Tabela = require("../model/table");
//const User = require("../model/user");
const Revit = require("../model/revit");
*/

//var fs = require('fs');
//var parse = require('csv-parse');

const openCSV = async () => {

  // convert users.csv file to JSON array
  CSVToJSON().fromFile(csv_revit)
      .then(users => {
          // users is a JSON array
          // log the JSON array
          //console.log(users);
          fs.writeFile(out, JSON.stringify(users, null, 4), (err) => {
              if (err) {
                  throw err;
              }
          });
      }).catch(err => {
          // log error if any
          console.log(err);
      });

console.log(out);

/*
  fs.createReadStream(data)
    .pipe(csv())
    .on('data', (row) => {
      console.log(row);
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
    });

    fs.createReadStream(csv_revit)
      .pipe(csv())
      .on('data', (row) => {
        console.log(row);
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
      });
*/
//fs.createReadStream(__dirname+csv_revit).pipe(parser);

};

const creat_table_Revit = async () => {
/*
await Revit.createCollection().then(function(collection) {
  console.log('Collection is created!');
});
*/
/*
await Revit.create({"discipline": "Architecture", "code": "-2000011", "category": "Walls", "secclass_relation": [{ "secclass_id": ObjectId("6151f5a6cf055d44dd07928d") , "secclass_code": "EF_25_10" }]
    });
*/
const data = await Revit.find({"code":"-2000011"},null,
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
console.log(data);

const data1 = await Item.find({"code_item": "Pr_20_65_60_48"},null,
function(err1, maxResult1) {
  // if there is an error retrieving, send the error. nothing after res.send(err) will execute
  if (err1) {
    //res.send(err);
    data1 = err1;
    console.log(`err: ${data1}`);
    //res.json({ error: true, message: err.message });
  }
}
)
.populate({path: 'tabela_id',select: {'nome_pesquisa': 0}})
console.log(data1);
};

openCSV();

creat_table_Revit();
