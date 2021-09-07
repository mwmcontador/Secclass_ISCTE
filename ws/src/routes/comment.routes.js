const express = require("express");
const router = express.Router();
const Comentarios = require("../model/comentarios");

//const input_comentarios = require("..\web\src\pages\Comentarios\index.js");

console.log('Starting Comment Route')
//////////////////  POST
router.post("/comment/", async (req, res) => {
  try {
    /*
    req = {
     "items_id": "60d41ae8ddc3ec53204c81da",

    	"name": "Teste1",

    	"institution": "gret",

     "comment": "texto de teste"
   }
    */
    console.log(req)

    const doc = {
      "users_id": "61014705970082f592719864",  //ID Public User // req.body.item
      "items_id": req.body.items_id,          // ver com font-end
      "name": req.body.name,
      "institution": req.body.institution,
      "comment": req.body.comment,
      "status": "New",
      "timestamp": new Date()                 //current date to timestamp
    };

    console.log(doc);

    const data = await Comentarios.create(doc);

    return res.json(data);

  }  catch (err) {
  console.log("Error Item");
  res.json({ error: true, message: err.message });
}
});
/////////////////////////////////////////////////////////

//GET por ID
router.get("/comment/iditem/:id", async (req, res) => {
  try {
    const id = req.params.id;

    console.log(id);
    const data = await Comentarios.find({
    $and: [
            {"status":{"$ne": "Close"}}, {"items_id": id}
    ]},
      null,
      {sort: {"_id": 1}},
      function(err){
      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
      {
        res.send(err);
        console.log(`err: ${err}`)
      }
    })
    console.log(data);
    return res.json(data);

  }  catch (err) {
  console.log("Error Item");
  res.json({ error: true, message: err.message });
}
});

//GET
router.get("/comment/", async (req, res) => {
  try {
    const data = await Comentarios.find({},
      null,
      {sort: {"_id": 1}},
      function(err){
      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
      {
        res.send(err);
        console.log(`err: ${err}`)
      }
    })
    console.log(data);
    return res.json(data);

  }  catch (err) {
  console.log("Error Item");
  res.json({ error: true, message: err.message });
}
});



//PATCH /update/ => atualizar estado do comentario
router.patch("/comment/update/:id", async (req, res) => {
  try {

    console.log(req);

    const id = req.params.id;
    const status = req.body.status;

    const find_id = {"_id": id};
    const new_status = {"status": status}

    console.log(status);

    const data = await Comentarios.updateOne(find_id, new_status);

    data.n; // Number of documents matched
    data.nModified; // Number of documents modified

    return res.json(data);

}  catch (err) {
  console.log("Error Item");
  res.json({ error: true, message: err.message });
}
});

//DELETE /delete/ => apagar comentario
router.delete("/comment/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Comentarios.findByIdAndDelete(id);

    const response = "Comentario elminado";
    return res.json(data, response);

}  catch (err) {
  console.log("Error Item");
  res.json({ error: true, message: err.message });
}
});

module.exports = router;
