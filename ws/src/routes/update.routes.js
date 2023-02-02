const express = require("express");
const router = express.Router();
const Item = require("../model/item");

console.log('Starting Update Route')
//////////////////  POST
router.post("/update/new_code", async (req, res) => {
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
      //var tempo = date.toISOString();
      //tempo = tempo.slice(0,10);// .split("T"); //

      const doc = {
        "users_id": "61014705970082f592719864",  //ID Public User // req.body.item
        "items_id": req.body.items_id,          // ver com font-end
        "name": req.body.name,
        "institution": req.body.institution,
        "contact": req.body.contact,
        "comment": req.body.comment,
        "status": "New",
        "timestamp": Date(date),                //current date to timestamp
        //"date_string": tempo
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

//GET por ID
router.get("/update/iditem/:id", async (req, res) => {
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
    }).populate({path: 'items_id', select: "code_item + titulo_SECClasS"})

    //Debug
    const objectLength = Object.keys(data).length;
    console.log(`objectLength = ${objectLength}`);

    var i = 0;
    while (i <= (objectLength-1)) {
      var temp = data[i].timestamp.toISOString();
      temp = temp.slice(8,10)+"/"+temp.slice(5,7)+"/"+temp.slice(0,4);
      data[i].date_string = temp;
      i++
      //console.log(JSON.stringify(temp));
    }

    res.json({ error: false, objectLength, data});

  }  catch (err) {
  console.log("Error GET Comment by ID");
  res.json({ error: true, message: err.message });
}
});
/////////////////////////////////////////////////////////
/*
//GET Comment with search
router.get("/update/:code", async (req, res) => {
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


});
*/
/////////////////////////////////////////////////////////

//PATCH /update/ => atualizar estado do comentario
router.patch("/update/", async (req, res) => {
  try {
    const input_code = req.query.code;
    const id_item = req.query._id;
    console.log(req);

    const find_item =
      {
        $or: [
            {"code_item": input_code },
            {"_id": id_item}
          ]
      };
    const select_data = {
      "_id": 1,
      "Versao_Uniclass": 1,
      "versao_secclas": 1,
      "nivel_item": 1,
      "code_item": 1,
      "title_item": 1,
      "titulo_SECClasS": 1,
      "descricao_SECClasS": 1
    };
    const order = {
      "_id": 1
    };
/////////////////////////////////////////////////////////////////
    const data = await Item.find(find_item,
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
      .populate({path: 'tabela_id',select: {'nome_pesquisa': 0}})
      .select(select_data)
      .sort(order)
      .limit(limit)
      .skip(skipIndex)
/////////////////////////////////////////////////////////////////

    const update_item = {"code_item": input_code}

    ///const data = await Item.updateOne(find_item, update_item);
/*
    data.n; // Number of documents matched
    data.nModified; // Number of documents modified
*/
    //Debug
    const objectLength = Object.keys(data).length;
    console.log(`objectLength = ${objectLength}`);

    res.json({ error: false, objectLength, data});

}  catch (err) {
  console.log("Error PATCH update");
  res.json({ error: true, message: err.message });
}
});
/////////////////////////////////////////////////////////

module.exports = router;
