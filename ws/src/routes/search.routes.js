const express = require("express");
const router = express.Router();
const Search = require("../model/pesquisas");
const Item = require("../model/item");
const Tabela = require("../model/table");
const User = require("../model/user");

//////////// GET API - PESQUISA
//exemplo => http://193.136.189.87:5003/search?pesquisa=ão&tabela=Todos&nivel=3&resivao=TRUE&especialidade=Todas

//router.get("/:input_pesquisa/:criterio_tabela/:criterio_nivel", async (req, res) => {
//router.get("/:input_pesquisa/", async (req, res) => {
router.get("/search/", async (req, res) => {
    try {
      //const criterio_tabela = req.params.criterio_tabela;
      //const criterio_nivel = req.params.criterio_nivel;
      //const input_pesquisa = req.params.input_pesquisa;
      const input_pesquisa = req.query.pesquisa;
      const criterio_tabela = req.query.tabela;
      const criterio_nivel = parseInt(req.query.nivel);
      const param_revisao = req.query.revisao;
      const especialidade = req.query.especialidade;
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      //const user = req.query.user_id;
      console.log(`SearchRoute: '${input_pesquisa}' , '${criterio_tabela}' , '${criterio_nivel}' , '${param_revisao}' , '${especialidade}' , '${page}' e '${limit}'.`);
    //////////////////////////////////////////////////////////
    var skipIndex;
        if(page === undefined || page == "" || limit === undefined || limit == ""){
          limit = 14672;
          page = 1;
        }
        else {
          skipIndex = (page - 1) * limit;
        }
    //////////////////////////////////////////////////////////
    var search;
    if(input_pesquisa === undefined || input_pesquisa == ""){
      //search = '\\' + input_pesquisa;
      search = { "$ne": "" };
    }
    else {
      search = { "$regex": input_pesquisa, "$options": "i"};
    }
    //var search_log = JSON.stringify(search);
    //console.log(`Parametro search: ${search}`);
//////////////////////////////////////////////////////// tentar pesquisa pela tabela_id
    var tabela;
    if (criterio_tabela === undefined || criterio_tabela == "") {
      tabela = {"code_tabela": { "$ne": null }};
    }
    else if (criterio_tabela === "Todos"){
      tabela = {"code_tabela": { "$ne": "" }};
    }
    else{
      tabela = {"code_tabela": criterio_tabela};
    }
    //var tabela_log = JSON.stringify(tabela);
    //console.log(`Parametro tabela: ${tabela}`);
//////////////////////////////////////////////////////////////
    var nivel;
    if(criterio_nivel === undefined || criterio_nivel == "" || criterio_nivel == "4"){
      nivel = {"nivel_item": { "$ne": 69 }};
    }
    else {
      nivel = {"nivel_item" :{ "$lte": criterio_nivel }};
    }
    //var nivel_log = JSON.stringify(nivel);
    //console.log(`Parametro nivel: ${nivel_log}`);
 /////////////////////////////////////////////////////////////
    var revisao;
    if(param_revisao === undefined || param_revisao == "" ){
      revisao = {"review": {"$ne": null}};
    }
    else if (param_revisao === "false" ){
      //revisao = "false";
      revisao = {"review": false};
    }
    else if (param_revisao === "true" ){
      //revisao = new Boolean(true);
      revisao = {"review": true};
    }
    //var revisao_log = JSON.stringify(revisao);
    //console.log(`Parametro revião: ${revisao_log}`);
/////////////////////////////////////////////////////////////////
    var speciality;
    if(especialidade === undefined || especialidade == "" ){
      //revisao = {"review": {"$ne": null}};
      speciality = {"especialidade": {"$ne": null}};
    }
    else if (especialidade === "Todas" ){
      revisao = {"review": true};
      speciality =  {"especialidade": {"$ne": null}};
    }
    else {
      revisao = {"review": true};
      speciality = {"especialidade": especialidade};
    }
    //var speciality_log = JSON.stringify(speciality);
    //console.log(`Parametro speciality: ${speciality_log}`);
  //// PARAMETROS DE PESQUISA
    console.log(`Parametros de Pesquisa:  ${search}, ${nivel}, ${tabela}, ${revisao}, ${speciality}`);
/////////////////////////////////////////////////////////////////
/*
const aggregate = Item.aggregate([{
  $group:{
    _id: "$code_item",
    maxvalue: { $max: "idItem" }
  }
}]);

console.log("%j",aggregate);
*/
/////////////////////////////////////////////////////////////////
    const data = await Item.find(
      //{$and: [
        {$or: [
          {$and: [
                {"code_item": search}, tabela, nivel, revisao, speciality
              ]},
          {$and: [
                {"titulo_SECClasS": search}, tabela, nivel, revisao, speciality
                //{"titulo_SECClasS": { "$regex": '.*'+search+'.*', "$options": "i"} },
              ]},
          {$and: [
                {"title_item": search}, tabela, nivel, revisao, speciality
              ]},
              /*
          {$and: [
                  {"versao_secclas": {}},
              ]},*/
      ]},
      null,
      function(err, maxResult){
      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
      {
        //res.send(err);
        data = err;
        console.log(`err: ${data}`);
        //res.json({ error: true, message: err.message });
      }
    })
    .populate({path:'tabela_id', select: {'nome_pesquisa': 0}})
    .select({"_id": 1, "Versao_Uniclass": 1, "versao_secclas": 1, "nivel_item": 1, "code_item": 1, "title_item": 1, "titulo_SECClasS": 1, "descricao_SECClasS": 1})
    .sort({"_id": 1})
    .limit(limit)
    .skip(skipIndex)
    //.exec
    //console.log(`Data_out = ${data}`);

  //Debug
    var type = typeof data;
    const objectLength = Object.keys(data).length;
    console.log(`Numeros de docs objectLength = ${objectLength}`);
    if(objectLength == 0) {
      console.log("PESQUISA NAO ENCONTRADA");
      //data = ["Termo pesquisado não encontrado."];
      //data = [];
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
        //"timestamp": new Date()                 //current date to timestamp
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
