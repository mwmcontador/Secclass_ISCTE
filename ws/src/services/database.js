// Mongoose é a biblioteca para manipular o Mongodb com javascript
//##### Exemplo da blibioteca
//'mongodb://localhost:27017/nome_da_base_de_dados
//mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const mongoose = require("mongoose");
console.log("Starting  BD Secclass");
//mongoose.connect("mongodb://localhost:27017/secclass-teste", {

const uri =
  "mongodb+srv://root_out:client_top@cluster0.rfblu.mongodb.net/SecClasS?retryWrites=true&w=majority";

mongoose
  .connect(uri, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then(() => {
    console.log("WS: Connected to the database Secclass");
  })
  .catch((err) => {
    console.log("WS Erro: Cannot connect to the database!", err);
    process.exit();
  });
