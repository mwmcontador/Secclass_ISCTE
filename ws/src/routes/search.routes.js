const express = require("express");
const router = express.Router();
const Search = require("../model/pesquisas");
const Item = require("../model/item");


//////////// GET API - PESQUISA
//exemplo => http://193.136.189.87:5003/search?pesquisa=ão&tabela=Todos&nivel=3&resivao=TRUE

//router.get("/:input_pesquisa/:criterio_tabela/:criterio_nivel", async (req, res) => {
//router.get("/:input_pesquisa/", async (req, res) => {
router.get("/search/", async (req, res) => {
    try {
      //const criterio_tabela = req.params.criterio_tabela;
      //const criterio_nivel = req.params.criterio_nivel;
      //const input_pesquisa = req.params.input_pesquisa;
      const criterio_tabela = req.query.tabela;
      const criterio_nivel = req.query.nivel;
      const input_pesquisa = req.query.pesquisa;
      const param_revisao = req.query.revisao;
      //const param_organiz = req.query.organzacao;
/*
      const criterio_tabela = req.query.tabela;
      const criterio_nivel = req.query.nivel;
      const input_pesquisa = req.params.input_pesquisa;
*/

    console.log(`SearchRoute: ${input_pesquisa} , ${criterio_tabela} , ${criterio_nivel} e ${param_revisao}`);

//////////////////////////////////////////////////////////
    var search;
    if(input_pesquisa === undefined || input_pesquisa == ""){
      //search = '\\' + input_pesquisa;
      search = { "$ne": "" };
    }
    else {
      search = { "$regex": input_pesquisa, "$options": "i"} ;
    }
////////////////////////////////////////////////////////
    var tabela;
    if (criterio_tabela === undefined || criterio_tabela == "") {
      tabela = {"code_tabela": { "$ne": null }};
    }
    else if (criterio_tabela === "Todos"){
      tabela = {"code_tabela": { "$ne": "" }};
      console.log(tabela);
    }
    else{
      tabela = {"code_tabela": criterio_tabela};
    }
//////////////////////////////////////////////////////////////
    var nivel;
    if(criterio_nivel === undefined || criterio_nivel == ""){
      nivel = {"nivel_item": { "$ne": 69 }};
      //nivel = 4;
    }
    else {
      nivel = parseInt(criterio_nivel);
      nivel = {"nivel_item" :{ "$lte": nivel }};
    }
    //console.log(nivel);
//   var typen = typeof nivel;
    //console.log(typen);
//////////////////////////////////////////////////////////////
    var revisao;
    if(param_revisao === undefined || param_revisao == "" ){
      revisao = {"review": {"$ne": null}};
      //console.log(revisao);
    }
    else if (param_revisao === "false" ){
      //revisao = "false";
      revisao = {"review": false};
      //console.log(revisao);
    }
    else if (param_revisao === "true" ){
      //revisao = new Boolean(true);
      revisao = {"review": true};
      console.log(revisao);
    }
    //console.log(`Parametro Revião: ${resivao}`);
/////////////////////////////////////////////////////////////////
    console.log(`Parametros de pesquisa: ${input_pesquisa}, ${search}, ${nivel}, ${tabela}, ${revisao}`);

/////////////////////////////////////////////////////////////////

const aggregate = Item.aggregate([{
  $group:{
    _id: "$code_item",
    maxvalue: { $max: "idItem" }
  }
}]);

console.log("%j",aggregate);

/////////////////////////////////////////////////////////////////

    const data = await Item.find(
      //{$and: [
        {$or: [
          {$and: [
                {"code_item": search }, tabela, nivel, revisao
              ]},
          {$and: [
                {"titulo_SECClasS": search }, tabela, nivel, revisao
                //{"titulo_SECClasS": { "$regex": '.*'+search+'.*', "$options": "i"} },
              ]},
          {$and: [
                {"versao_secclas": {}}
              ]},
      ]},
      null,
      {sort: {"_id": 1}},
      //{sort: {"Data_traducao": -1}},
      function(err, maxResult){
      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
      {
        //res.send(err);
        data = err;
        console.log(`err: ${data}`);
      }
    });//.where('nivel_item').lte(nivel);
    //console.log(`Data_out = ${data}`);
  //Debug
        var type = typeof data;
        const objectLength = Object.keys(data).length;
        console.log(`Numeros de docs objectLength = ${objectLength}`);
    if(objectLength == 0) {
      console.log("PESQUISA NAO ENCONTRADA");
      //data = ["Termo pesquisado não encontrado."];
    }


///////////////// Guardar o termo pesquisado pelo User na DB
  var results = [];
  for (let i=0; i < objectLength; i++){
    results.push(data[i].code_item);
  }
    //console.log(`Results = ${results}`);

    if(input_pesquisa === undefined || input_pesquisa == "") {

    }
    else {
      //console.log(`input_pesquisa ${input_pesquisa}`);
      const store = {
        "users_id": "61014705970082f592719864",  //ID Public User
        "pesquisa_txt": input_pesquisa,
        "results": results,
        "timestamp": new Date()                 //current date to timestamp
      };
      //console.log(store);
      const data_save = await Search.create(store);
      console.log(`Data_save = ${data_save}`);
    }
///////////////// Guardar o termo pesquisado e resultados pelo User na DB


//____________////////RES
    res.json({ error: false, objectLength, data});
  }  catch (err) {
    console.log("Error Item");
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
