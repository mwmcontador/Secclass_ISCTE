const express = require("express");
const router = express.Router();
const Comentarios = require("../model/comentarios");
const Item = require("../model/item");

//const input_comentarios = require("..\web\src\pages\Comentarios\index.js");

console.log('Starting Comment Route')
//////////////////  POST
router.post("/comment/", async (req, res) => {
  try {
    //console.log(req)
    /*
    req = {
     "items_id": "60d41ae8ddc3ec53204c81da",
      "name": "MW",
      "institution": "ISTAR",
     "comment": "Texto de comentario de teste.",
     "contact": "emailexemplo@iscte-iul.pt"
   }
    */
    if( req.body.comment === undefined || req.body.comment === "" ){
      const data = [];
    }

    else {
      var date = new Date();//.now();
      //var string_date = date.toString();

      //const format_date = date.toISOString();
      //const format_date = dateFormat(now, "dddd, mmmm dS, yyyy");
      //const format_date = ((date.getDate() )) + "-" + ((date.getMonth() + 1)) + "-" + date.getFullYear();
      //console.log(`DATE = ${string_date}`);

      const doc = {
        "users_id": "61014705970082f592719864",  //ID Public User // req.body.item
        "items_id": req.body.items_id,          // ver com font-end
        "name": req.body.name,
        "institution": req.body.institution,
        "contact": req.body.contact,
        "comment": req.body.comment,
        "status": "New",
        "timestamp": Date(date)                //current date to timestamp
      };

      console.log(doc);
      const data = await Comentarios.create(doc);
    }
    //Debug
    res.json({ error: false, data});
  }  catch (err) {
  console.log("Error POST Comment");
  res.json({ error: true, message: err.message });
}
});
/////////////////////////////////////////////////////////

//GET ALL commets
router.get("/comment/", async (req, res) => {
  try {
    const order = req.query.order;

    //////////////////////////////////////////////////////////////
    var ordem;
        if(order === undefined || order == ""){
          ordem = -1;
          //nivel = 4;
        }
        else {
          ordem = parseInt(order);
        }
    //////////////////////////////////////////////////////////////

    const data = await Comentarios.find({},
      null,
      {sort: {"_id": ordem}},
      function(err){
      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
      {
        res.send(err);
        console.log(`err: ${err}`)
      }
    })
    console.log(data);

    //Debug
    const objectLength = Object.keys(data).length;
    console.log(`objectLength = ${objectLength}`);

    res.json({ error: false, objectLength, data});

  }  catch (err) {
  console.log("Error GET ALL Comment");
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
            {"status":{"$ne": "Close"}},
            {"items_id": id},
            {}
    ]},
      null,
      {sort: {"_id": -1}},
      function(err){
      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
      {
        res.send(err);
        console.log(`err: ${err}`)
      }
    })

    //Debug
    const objectLength = Object.keys(data).length;
    console.log(`objectLength = ${objectLength}`);

    var i = 0;
    while (i <= (objectLength-1)) {
      var temp = data[i].timestamp.toISOString();
      temp = temp.slice(0,10);//.split("T");
      data[i].timestamp = temp;
      console.log(JSON.stringify(temp));
      i++
    }
    res.json({ error: false, objectLength, data});

  }  catch (err) {
  console.log("Error GET Comment by ID");
  res.json({ error: true, message: err.message });
}
});
/////////////////////////////////////////////////////////

//GET Comment with search
router.get("/comment/:code", async (req, res) => {
  try {
    const code = req.params.code;
    const order = req.query.order;

    //////////////////////////////////////////////////////////////
    var ordem;
        if(order === undefined || order == ""){
          ordem = -1;
        }
        else {
          ordem = parseInt(order);
        }
    //////////////////////////////////////////////////////////////
    console.log(code);

    const items_id = await Item.find({"code_item": code}).select("_id")
    console.log(items_id[0]);

    const data = await Comentarios.find({
            "items_id": items_id[0]
    },

    //const data = await Comentarios.find({},
      null,
      {sort: {"_id": ordem}},
      function(err){
      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
      {
        res.send(err);
        console.log(`err: ${err}`)
      }
    })
    console.log(data);
    //Debug
    const objectLength = Object.keys(data).length;
    console.log(`objectLength = ${objectLength}`);

    res.json({ error: false, objectLength, data});

  }  catch (err) {
  console.log("Error GET Comment by Code");
  res.json({ error: true, message: err.message });
}
});
/////////////////////////////////////////////////////////

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
/*
    data.n; // Number of documents matched
    data.nModified; // Number of documents modified
*/
    //Debug
    const objectLength = Object.keys(data).length;
    console.log(`objectLength = ${objectLength}`);

    res.json({ error: false, objectLength, data});

}  catch (err) {
  console.log("Error PATCH Comment");
  res.json({ error: true, message: err.message });
}
});
/////////////////////////////////////////////////////////

//DELETE /delete/ => apagar comentario
router.delete("/comment/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Comentarios.findByIdAndDelete(id);

    const response = "Comentario elminado";

    //Debug
    const objectLength = Object.keys(data).length;
    console.log(`objectLength = ${objectLength}`);

    res.json({ error: false, objectLength, data, response});

}  catch (err) {
  console.log("Error DELETE Comment");
  res.json({ error: true, message: err.message });
}
});
/////////////////////////////////////////////////////////

module.exports = router;
