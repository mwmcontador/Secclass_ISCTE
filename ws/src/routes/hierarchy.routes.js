const express = require("express");
const router = express.Router();
const Item = require("../model/item");
const Tabela = require("../model/table");


//////////// GET API - PESQUISA
//exemplo => http://193.136.189.87:5003/search?pesquisa=ão&tabela=Todos&nivel=3&resivao=TRUE&especialidade=Todas

//router.get("/:input_pesquisa/:criterio_tabela/:criterio_nivel", async (req, res) => {
//router.get("/:input_pesquisa/", async (req, res) => {
router.get("/hierarchy/:code_item", async (req, res) => {
    try {
      const code_item = req.params.code_item;
      console.log(`HierarchyRoute: ${code_item}`);

//////////////////////////////////////////////////////////
    var pesquisa1 = {"code_item": "00_00" };
    var pesquisa2 = {"code_item": "00_00" };
    var pesquisa3 = {"code_item": "00_00" };
    var pesquisa4 = {"code_item": "00_00" };
    var pesq;
    //var length_code = code_item.length;
      switch (code_item.length) {
      case 14:
          var object = code_item.slice(0, 14);
          var pesquisa4 = {"code_item": object };
      case 11:
          var section = code_item.slice(0, 11);
          var pesquisa3 = {"code_item": section };
      case 8:
          var subgroup = code_item.slice(0, 8);
          var pesquisa2 = {"code_item": subgroup };
      case 5:
          var group = code_item.slice(0, 5);
          var pesquisa1 = {"code_item": group};
      default:
          var tabela = code_item.slice(0, 2);
          var pesquisa0 = {"code_tabela": tabela };
          break;
    }

    console.log(`Slice: ${tabela}, ${group}, ${subgroup}, ${section}, ${object}.`);
    //console.log(`Pesquisa: ${JSON.stringify(pesq)}.`);
    //console.log(JSON.stringify(pesquisa));
    var familia;
    familia = {

    "Table": {
      "_id": "",
      "code_tabela": "",
      "nome_secclass": ""
    },
    "Group": {
      "_id": "",
      "code_item": "",
      "titulo_SECClasS": ""
    },
    "Subgroup": {
      "_id": "",
      "code_item": "",
      "titulo_SECClasS": ""
    },
    "Section": {
      "_id": "",
      "code_item": "",
      "titulo_SECClasS": ""
    },
    "Object": {
      "_id": "",
      "code_item": "",
      "titulo_SECClasS": ""
    }
    };

    if(code_item === undefined || code_item == ""){
      //search = '\\' + input_pesquisa;
      const data = familia;
    }
    else {
      //familia = { "$regex": input_pesquisa, "$options": "i"} ;

    }
    //var search_log = JSON.stringify(search);
    //console.log(`Parametro search: ${search}`);
    const hierarchy = await Item.find(
      //{$and: [
        {$or: [
                pesquisa1 , pesquisa2, pesquisa3, pesquisa4
              ]},

      //]},
      null,
      {sort: {"_id": 1}},
      function(err){
      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
      {/*
        //res.send(err);
        data = err;
        console.log(`err: ${data}`);*/
      }
    }).select({ "_id":1, "code_item": 1, "titulo_SECClasS": 1})

    //const hierarchy = {Group: hierarchy[0], Subgroup: hierarchy[1], Section: hierarchy[2], Object: hierarchy[3]};

    const table = await Tabela.findOne( pesquisa0
      ,null,
          {sort: {"_id": 1}},
          function(err){
          // if there is an error retrieving, send the error. nothing after res.send(err) will execute
          if (err)
          {
            //res.send(err);
            data = err;
            console.log(`err: ${table}`);
          }
        }).select({ "_id":1, "code_tabela": 1, "nome_secclass": 1});

    //const data = {table, hierarchy};
    const data = {Table: table, Group: hierarchy[0], Subgroup: hierarchy[1], Section: hierarchy[2], Object: hierarchy[3]};


//____________////////RES
    res.json({ error: false,code_item, data}); //, table, hierarchy
  }  catch (err) {
    console.log("Error Item");
    res.json({ error: true, message: err.message });
  }
});
module.exports = router;
