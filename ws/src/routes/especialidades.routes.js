
const express = require("express");
const router = express.Router();
const Item = require("../model/item");


//////////// GET API - REVIÂO
router.get("/especialidades/", async (req, res) => {
  try {
  const especialidade = req.query.especialidade;
  console.log(`ReviewRoute: ${especialidade}`);

//////////////////////////////////////////////////////////////
  var speciality;
  var revisao;
  if(especialidade === undefined || especialidade == "" ){
    revisao = {"review": {"$ne": null}};
    speciality = {"Especialidade": {"$ne": null}};
  }
  else if (especialidade === "Todas" ){
    revisao = {"review": true};
    //speciality = {"Especialidade": {"$ne": null}};
    speciality = {};
  }
  else {
    //revisao = new Boolean(true);
    revisao = {"review": true};
    speciality = {"Especialidade": { "$regex": especialidade, "$options": "i"}};
  }
  //console.log(`Parametro Revião: ${resivao}`);
/////////////////////////////////////////////////////////////////
  //console.log("%j",`Parametros de revisão: ${revisao}, ${speciality}`);

/////////////////////////////////////////////////////////////////

  const data = await Item.find(
    //{$and: [
      //{$or: [
        {$and: [
              revisao, speciality
            ]},
  //]},
    null,
    {sort: {"_id": 1}},
    //{sort: {"Data_traducao": -1}},
    function(err, maxResult){
    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err)
    {
      //res.send(err);
      data = err;
      console.log(`err: ${data}`);
    }
  });//.where('nivel_item').lte(nivel);
  console.log(`Data_out = ${data}`);
//Debug
      var type = typeof data;
      const objectLength = Object.keys(data).length;
      console.log(`Numeros de docs objectLength = ${objectLength}`);
  if(objectLength == 0) {
    console.log("PESQUISA NAO ENCONTRADA");
    //data = ["Termo pesquisado não encontrado."];
  }


//____________////////RES
  res.json({ error: false, objectLength, data});
}  catch (err) {
  console.log("Error Review API");
  res.json({ error: true, message: err.message });
}
});

module.exports = router;
