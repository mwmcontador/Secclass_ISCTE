const express = require("express");
const router = express.Router();
const Search = require("../model/pesquisas");
const Item = require("../model/item");


//////////// GET API - PESQUISA
  router.get("/search/:input_pesquisa/:criterio_tabela/:criterio_nivel", async (req, res) => {
    try {
      const input_pesquisa = req.params.input_pesquisa;
      const criterio_tabela = req.params.criterio_tabela;
      const criterio_nivel = req.params.criterio_nivel;

      console.log(
        `SearchRout: ${input_pesquisa} , ${criterio_tabela} e ${criterio_nivel}`
      );

    var search;

    if(input_pesquisa == "(?)"){
      search = '.*\\' + input_pesquisa + '.*';
    }
    else {
      search = '.*' + input_pesquisa + '.*';
    }
    console.log(search , input_pesquisa, criterio_nivel);
    const data_out = await Item.find({
      $or: [
        {$and: [
          {"code_item": { "$regex": search, "$options": "i"} },
          {"nivel_item":  criterio_nivel },
          {"code_tabela": criterio_tabela}
        ]},
        {$and: [
        {"titulo_SECClasS": { "$regex": search, "$options": "i"} },
        {"nivel_item":  criterio_nivel },
        {"code_tabela": criterio_tabela}
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
    console.log(`Data_ou = ${data_out}`);

    const store = {
      "Users_id": "61014705970082f592719864",  //ID Public User
      "pesquisa_txt": input_pesquisa,
      "resultados": "",
      "Timestamp": new Date()                 //current date to timestamp
    };
    console.log(store);
    const data_save = await Search.create(store);
    console.log(data_save);

    //Debug
    res.json({ error: false, data_out});
  }  catch (err) {
    console.log("Error Item");
    res.json({ error: true, message: err.message });
  }
});


////////////////////////////////////////////////////////////////////////////////
//Listando Somente com os filtros
router.get("/filtros/", async (req, res) => {
  try {
    const criterio_nivel = req.query.nivel_item;
    const criterio_tabela = req.query.code_tabela;
    const criterio_pesquisa = req.query.titulo_SECClasS;

    //Debug
    console.log(
      `Rota: Filtros Selecionado ${criterio_nivel} , ${criterio_tabela} e  ${criterio_pesquisa}`
    );
    if (criterio_pesquisa) {
      buscar_titulo = { titulo_SECClasS: criterio_pesquisa };
    }
    if (criterio_tabela != "Todos") {
      buscar_titulo = { code_tabela: criterio_tabela };
    }

    const item = await Item.find({
      nivel_item: criterio_nivel,
      //criterio_tabela
      //buscar_titulo,
    });
    console.log(item);

    res.json({ error: false, item });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
