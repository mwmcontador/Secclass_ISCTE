const express = require("express");
const router = express.Router();
const Item = require("../model/item");
const Tabela = require("../model/tabela");


//////////// GET API - PESQUISA
//exemplo => http://193.136.189.87:5003/search?pesquisa=ão&tabela=Todos&nivel=3&resivao=TRUE&especialidade=Todas

//router.get("/:input_pesquisa/:criterio_tabela/:criterio_nivel", async (req, res) => {
//router.get("/:input_pesquisa/", async (req, res) => {
router.get("/family/:code_item", async (req, res) => {
    try {
      const code_uni = req.params.code_item;
      console.log(`FamilyRoute: ${code_uni}`);


//////////////////////////////////////////////////////////
    var pesquisa = "";
    //var length_code = code_uni.length;
      switch (code_uni.length) {
      case 14:
          var object = code_uni.slice(0, 14);
          pesquisa = pesquisa + {"code_item": object };
      case 11:
          var section = code_uni.slice(0, 11);
          pesquisa = pesquisa + "," + {"code_item": section };
      case 8:
          var subgroup = code_uni.slice(0, 8);
          pesquisa = pesquisa + "," + {"code_item": subgroup };
      case 5:
          var group = code_uni.slice(0, 5);
          pesquisa = pesquisa + "," + {"code_item": group };
          var tabela = code_uni.slice(0, 2);
          break;
      default:

    }
    console.log(`Slice: ${tabela}, ${group}, ${subgroup}, ${section}, ${object}.`);
    console.log(`Pesquisa: ${pesquisa}.`);

    var familia;
    familia = {
      "code_item": code_uni, //"SL_25_10_77",

      "Code_Table": "",
      "Title_Table": "",
      "id_Table": "",

      "Code_Group": "",//"25",
      "Title_Group": "",
      "id_Group": "",

      "Code_Subgroup": "",//"25",
      "Title_Subgroup": "",
      "id_Subgroup": "",

      "Code_Section": "",//"25",
      "Title_Section": "",
      "id_Section": "",

      "Code_Object": "",//"25",
      "Title_Object": "",
      "id_Object": ""
    };

    if(code_uni === undefined || code_uni == ""){
      //search = '\\' + input_pesquisa;
      const data = familia;
    }
    else {
      //familia = { "$regex": input_pesquisa, "$options": "i"} ;

    }
    //var search_log = JSON.stringify(search);
    //console.log(`Parametro search: ${search}`);



    const data = await Item.find(
      //{$and: [
        {$or: [
          {$and: [
                pesquisa
              ]},

              /*
          {$and: [
                  {"versao_secclas": {}},
              ]},*/
      ]},
      null,
      {sort: {"_id": 1}},
      //{sort: {"Data_traducao": -1}},
      function(err){
      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
      {/*
        //res.send(err);
        data = err;
        console.log(`err: ${data}`);*/
      }
    })//.populate(;//.where('nivel_item').lte(nivel);
    //console.log(`Data_out = ${data}`);
  //Debug
    if(objectLength == 0) {
      console.log("FAMILIA NAO ENCONTRADA, Codigo Nivel 1");
      //data = ["Termo pesquisado não encontrado."];
      //data = [];
    }


//____________////////RES
    res.json({ error: false, data});
  }  catch (err) {
    console.log("Error Item");
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
