const express = require("express");
const router = express.Router();
const Search = require("../model/pesquisas");
const Item = require("../model/item");


//////////// GET API - PESQUISA
//exemplo => http://localhost:5003/search/ão/?criterio_tabela=Todos&criterio_nivel=3

//router.get("/:input_pesquisa/:criterio_tabela/:criterio_nivel", async (req, res) => {
router.get("/:input_pesquisa/", async (req, res) => {
    try {
      //const criterio_tabela = req.params.criterio_tabela;
      //const criterio_nivel = req.params.criterio_nivel;
      const criterio_tabela = req.query.criterio_tabela;
      const criterio_nivel = req.query.criterio_nivel;
      const input_pesquisa = req.params.input_pesquisa;

    console.log(`SearchRout: ${input_pesquisa} , ${criterio_tabela} e ${criterio_nivel}`);

    var search;
    var pesquisatabela;
    var nivel;

    if(input_pesquisa == "(?)"){
      search = '\\' + input_pesquisa;
    }
    else {
      search = input_pesquisa;
    }

    if (criterio_tabela === "Todos") {
      pesquisatabela =  { "$ne": "Todos" };
    }
    else if (criterio_tabela === undefined){
      pesquisatabela = { "$ne": 'Impossivel' };
      console.log(pesquisatabela);
    }
    else{
      pesquisatabela =  criterio_tabela;
    }

    if(criterio_nivel === undefined){
      nivel = { "$ne": '69' };
    }
    else {
      nivel = criterio_nivel;
    }

    console.log( input_pesquisa, search, nivel, pesquisatabela);
    const data_out = await Item.find({
      $or: [
        {$and: [
              {"code_item": { "$regex": search, "$options": "i"} },
              {"nivel_item":  nivel },
              {"code_tabela": pesquisatabela }
        ]},
        {$and: [
              {"titulo_SECClasS": { "$regex": '.*'+search+'.*', "$options": "i"} },
              {"nivel_item":  nivel },
              {"code_tabela": pesquisatabela }
        ]}
      ]}, function(err){
      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
      {
        res.send(err);
        console.log(`err: ${err}`)
      }
    });
    //console.log(`Numeros de docs: ${length(data_out)}.`);
    console.log(`Data_out = ${data_out}`);

    const store = {
      "Users_id": "61014705970082f592719864",  //ID Public User
      "pesquisa_txt": input_pesquisa,
      "resultados": "",
      "Timestamp": new Date()                 //current date to timestamp
    };
    console.log(store);
    const data_save = await Search.create(store);
    console.log(`Data_save = ${data_save}`);

    //Debug
    res.json({ error: false, data_out});
  }  catch (err) {
    console.log("Error Item");
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
