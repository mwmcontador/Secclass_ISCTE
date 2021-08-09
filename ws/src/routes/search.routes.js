const express = require("express");
const router = express.Router();
const Search = require("../model/pesquisas");
const Item = require("../model/item");


//////////// GET API - PESQUISA
//exemplo => http://193.136.189.87:5003/search?pesquisa=ão&tabela=Todos&nivel=3
//           http://193.136.189.87:5003/search?pesquisa=ão&tabela=Todos&nivel=3

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
/*
      const criterio_tabela = req.query.tabela;
      const criterio_nivel = req.query.nivel;
      const input_pesquisa = req.params.input_pesquisa;;
*/

    console.log(`SearchRoute: ${input_pesquisa} , ${criterio_tabela} e ${criterio_nivel}`);

    var search;
    var tabela;
    var nivel;
//////////////////////////////////////////////////////////
    if(input_pesquisa === undefined || input_pesquisa == ""){
      //search = '\\' + input_pesquisa;
      search = { "$ne": "" };
    }
    else {
      search = { "$regex": input_pesquisa, "$options": "i"} ;
    }
////////////////////////////////////////////////////////7
    if (criterio_tabela === undefined || criterio_tabela == "") {
      tabela = { "$ne": 'Impossivel' };
    }
    else if (criterio_tabela === "Todos"){
      tabela =  { "$ne": "Todos" };
      console.log(tabela);
    }
    else{
      tabela =  criterio_tabela;
    }
//////////////////////////////////////////////////////////////
    if(criterio_nivel === undefined || criterio_nivel == ""){
      nivel = { "$ne": '69' };
    }
    else {
      nivel = { $lte: criterio_nivel };
    }
/////////////////////////////////////////////////////////////////
    console.log(`Parametros de pesquisa: ${input_pesquisa}, ${search}, ${nivel}, ${tabela}`);
    const data_out = await Item.find({
      $or: [
        {$and: [
              {"code_item": search },
              {"nivel_item":  nivel },
              {"code_tabela": tabela }
        ]},
        {$and: [
              {"titulo_SECClasS": search },
              //{"titulo_SECClasS": { "$regex": '.*'+search+'.*', "$options": "i"} },
              {"nivel_item":  nivel },
              {"code_tabela": tabela }
        ]}
      ]}, function(err){
      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
      {
        res.send(err);
        console.log(`err: ${err}`)
      }
    });
    console.log(`Data_out = ${data_out}`);
    var type = typeof data_out;
    console.log(type);
    if(data_out == []) {
      //console.log('');
      console.log("PESQUISA NAO ENCONTRADA");
      //console.log('');
    }
    //console.log(`Numeros de docs: ${length(data_out)}.`);


    if(input_pesquisa === undefined || input_pesquisa == "") {

    }
    else {
      console.log(`input_pesquisa ${input_pesquisa}`);
      const store = {
        "Users_id": "61014705970082f592719864",  //ID Public User
        "pesquisa_txt": input_pesquisa,
        "resultados": "",
        "Timestamp": new Date()                 //current date to timestamp
      };
      console.log(store);
      const data_save = await Search.create(store);
      console.log(`Data_save = ${data_save}`);
    }

    //Debug
    res.json({ error: false, data_out});
  }  catch (err) {
    console.log("Error Item");
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
