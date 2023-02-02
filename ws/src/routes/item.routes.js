const express = require("express");
const router = express.Router();
const Item = require("../model/item");

// GET CODE => code_item SECCLASS
router.get("/item/:code", async (req, res) => {
  try {
    console.log("Start route GET one Code");
    const code_item = req.params.code;

    const query = { "code_item": code_item }

    const data = await Item.findOne(
      query,
        null,
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
      .populate({path: 'tabela_id', select: {'_id': 0, 'nome_pesquisa': 0}});

    res.json({error: false, data});}
  catch (err) {
    console.log("GET item ERROR");
    res.json({ error: true, message: err.message });
  }
});
/////////////////////////////////////////////////////////

// PATCH /update/ => update item SECCLASS
router.patch("/item/update/:id", async (req, res) => {
  try {
    console.log("Start route PATH Update Code");
    //console.log(req);

    const id = req.params.id;
    const autor = req.body.Autor;
    const titulo = req.body.titulo_SECClasS;
    const description = req.body.descricao_SECClasS;
    const especialidade = req.body.especialidade;
    const status = req.body.review;

    /* json doc exemple
    req =
    { "Autor": "SECClasS",
      "titulo_SECClasS": "Notas",
      "descricao_SECClasS": "",
      "keywords": [ "merda", "palavra", "CAD", "Guito"],
      "especialidade": "Desenho CAD",
      "review": false}*/

    const doc = {
      "Autor": autor,
      "titulo_SECClasS": titulo,
      "descricao_SECClasS": description,
      "especialidade": especialidade,
      "review": status,
    };

    const query_find = {"_id": id};
    const query_update = doc;
    var options = {new: true, timestamps: {createdAt: false, updatedAt: true}};

    const data = await Item.updateOne(
      query_find,
       query_update,
        options,
        function(err, maxResult) {
          // if there is an error retrieving, send the error. nothing after res.send(err) will execute
          if (err) {
            //res.send(err);
            data = err;
            console.log(`err: ${data}`);
            //res.json({ error: true, message: err.message });
          }
        }
       );

       if( req.body.keywords === undefined || req.body.keywords === null ){
         const keywords = "TESTE DE KEYWORDS"
         console.log(keywords);
       }
       else {
         const keywords = {$push: {"keywords": {$each: req.body.keywords}}};
         const keys = await Item.updateOne(
           query_find,
            keywords,
             options,
             function(err, maxResult) {
               // if there is an error retrieving, send the error. nothing after res.send(err) will execute
               if (err) {
                 //res.send(err);
                 data = err;
                 console.log(`err: ${data}`);
                 //res.json({ error: true, message: err.message });
               }
             }
            );
       }

    res.json({ error: false, data});
  }
  catch (err) {
  console.log("Error PATCH Update Item");
  res.json({ error: true, message: err.message });
  }
});
/////////////////////////////////////////////////////////

// POST /create/ => create new item SECCLASS
router.post("/item/create", async (req, res) => {
  try {
    console.log("Start route POST Create Code");
    console.log(req)
/*
    req = {
	"tabela": "SEC",
	"code": "SC_01_10",
	"titulo": "Test create new item",
	"nivel": "1",
	"autor": "DC",
	"versao": "1",
	"especialidade": "test",
	"descricao": ""
}
*/
    var if_tabela = (req.body.tabela === undefined || req.body.tabela === "");
    var if_code = (req.body.code === undefined || req.body.code === "");
    var if_titulo = (req.body.titulo === undefined || req.body.titulo === "");
    if( if_tabela || if_code || if_titulo ){
      const data = {};
    }

    else {
      var date = new Date();
      var options = {new: true, upsert: true, timestamps: {createdAt: true, updatedAt: true}};

      const doc = {
        "Autor": req.body.autor,
        "versao_secclas": req.body.versao,
        "code_tabela": req.body.tabela,
        "nivel_item": req.body.nivel,
        "code_item": req.body.code,
        "titulo_SECClasS": req.body.titulo,
        "especialidade": req.body.especialidade,
        "descricao_SECClasS": req.body.descricao
      }
      const query_find = { $and: [
        {"code_tabela": req.body.tabela},
        {"code_item": req.body.code},
        {"titulo_SECClasS": req.body.titulo}
      ]};
      const query_create = {$setOnInsert: doc};

      const data = await Item.updateOne(
        query_find,
         query_create,
          options,
          function(err, maxResult) {
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err) {
              //res.send(err);
              data = err;
              console.log(`err: ${data}`);
              //res.json({ error: true, message: err.message });
            }
          }
      );
      const response = "New Item Created";
    }
    res.json({ error: false, data, response});
  }
  catch (err) {
  console.log("Error POST New Item");
  res.json({ error: true, message: err.message });
  }
});
/////////////////////////////////////////////////////////

//DELETE /delete/ => delete item create
router.delete("/item/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Item.findByIdAndDelete(id);

    const response = "Comentario elminado";

    res.json({ error: false, data, response});

}  catch (err) {
  console.log("Error DELETE Item");
  res.json({ error: true, message: err.message });
}
});
/////////////////////////////////////////////////////////

console.log('Starting Item Route')
module.exports = router;
