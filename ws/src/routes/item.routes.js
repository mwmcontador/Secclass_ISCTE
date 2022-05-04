const express = require("express");
const router = express.Router();
const Item = require("../model/item");

//
console.log('Starting Item Route')
// GET CODE
router.get("/item/:code", async (req, res) => {
  try {
    console.log("Start route GET one Code");
    const code_item = req.params.code;
    /////////////////////////////////////////////////////////////////
    const query = { "code_item": code_item }
    /////////////////////////////////////////////////////////////////
    const data = await Item.findOne(
      query,
        null,
        function(err, maxResult) {
          // if there is an error retrieving, send the error. nothing after res.send(err) will execute
          if (err) {
            data = err;
            console.log(`err: ${data}`);
          }
        }
      )
      .populate({path: 'tabela_id', select: {'_id': 0, 'nome_pesquisa': 0}})
    /////////////////////////////////////////////////////////////////
    res.json({
      error: false,
      data
    });
  } catch (err) {
    console.log("GET item ERROR");
    res.json({
      error: true,
      message: err.message
    });
  }
});

/////////////////////////////////////////////////////////

//PATCH /update/ => atualizar item SECCLASS
router.patch("/item/update/:id", async (req, res) => {
  try {
    console.log(req);
    const id = req.params.id;

    const autor = req.body.Autor;
    const titulo = req.body.titulo_SECClasS;
    const description = req.body.descricao_SECClasS;
    const especialidade = req.body.especialidade;
    const status = req.body.review;

    const keywords = req.body.keywords;

    const doc = {
      "Autor": autor,
      "titulo_SECClasS": titulo,
      "descricao_SECClasS": description,
      "especialidade": especialidade,
      "review": status,
    };

    const query_find = {"_id": id};
    const query_update = doc;
    const keys_array = keywords
    const query_add_array = { $push: { "keywords": { $each: keys_array } } };

    const data = await Item.updateOne(
      query_find,
       query_update,
     {new: true, upsert: true, timestamps: {createdAt: false, updatedAt: true}}
   );

    const keys = await Item.updateOne(
      query_find,
       query_add_array
     );

    res.json({ error: false, data, keys});

}  catch (err) {
  console.log("Error PATCH UPDATE Item");
  res.json({ error: true, message: err.message });
}
});

module.exports = router;
