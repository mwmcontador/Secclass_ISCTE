const express = require("express");
const router = express.Router();
const Search = require("../model/pesquisas");
const Item = require("../model/item");

/*
//////////// POST API - USER INPUT
//var input_pesquisa = "arr";
//var input_pesquisa = "?";
var input_pesquisa = "arrefecimento";
var input =
router.get("/search/" + ${input_pesquisa}, async (req, res) => {
  try {

  }  catch (err) {
    console.log("Error Item");
    res.json({ error: true, message: err.message });
  }
});

console.log(input_pesquisa);
*/
//class PesquisaController {
//////////// GET API - PESQUISA
  router.get("/search", async (req, res) => {
    try {

    if(input_pesquisa == "?"){
      req = '.*\\' + input_pesquisa + '.*';
    }
    else {
      req = '.*' + input_pesquisa + '.*';
    }

    console.log(req);
    const data_out = await Item.find({
      $or: [
        {"code_item": { "$regex": req, "$options": "i"} },
        {"titulo_SECClasS": { "$regex": req, "$options": "i"} }
      ]
    });

    const store = {
      "Users_id": "61014705970082f592719864",
      "pesquisa_txt": input_pesquisa,
      "resultados": "",
      "Timestamp": new Date()
    };
    console.log(store);

    const data_input = await Search.create(store);

    console.log(data_input);


    res.json({ error: false, data_out});
  }  catch (err) {
    console.log("Error Item");
    res.json({ error: true, message: err.message });
  }
});


//}
//module.exports = new PesquisaController();


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
